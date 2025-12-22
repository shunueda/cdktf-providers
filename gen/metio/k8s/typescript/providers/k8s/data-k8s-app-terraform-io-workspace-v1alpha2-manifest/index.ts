// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#metadata DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestMetadata;
  /**
  * WorkspaceSpec defines the desired state of Workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#spec DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#spec}
  */
  readonly spec: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpec;
}
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#annotations DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#labels DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#namespace DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecAgentPool {
  /**
  * Agent Pool ID. Must match pattern: '^apool-[a-zA-Z0-9]+$'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#id DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Agent Pool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecAgentPoolToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecAgentPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecAgentPoolToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecAgentPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecAgentPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecAgentPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecAgentPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#key DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#optional DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromConfigMapKeyRefToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#key DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#optional DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromSecretKeyRefToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromSecretKeyRefToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#config_map_key_ref DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromConfigMapKeyRef;
  /**
  * Selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#secret_key_ref DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromSecretKeyRef;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    secret_key_ref: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromConfigMapKeyRef",
    },
    secret_key_ref: {
      value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
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
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromSecretKeyRef) {
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
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariables {
  /**
  * Description of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#description DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#description}
  */
  readonly description?: string;
  /**
  * Parse this field as HashiCorp Configuration Language (HCL). This allows you to interpolate values at runtime. Default: 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#hcl DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#hcl}
  */
  readonly hcl?: boolean | cdktf.IResolvable;
  /**
  * Name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Sensitive variables are never shown in the UI or API. They may appear in Terraform logs if your configuration is designed to output them. Default: 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#sensitive DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * Value of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#value DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#value_from DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#value_from}
  */
  readonly valueFrom?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFrom;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    hcl: cdktf.booleanToTerraform(struct!.hcl),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariables | cdktf.IResolvable): any {
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
    hcl: {
      value: cdktf.booleanToHclTerraform(struct!.hcl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hcl = this._hcl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
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

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._hcl = undefined;
      this._name = undefined;
      this._sensitive = undefined;
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
      this._description = value.description;
      this._hcl = value.hcl;
      this._name = value.name;
      this._sensitive = value.sensitive;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
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

  // hcl - computed: false, optional: true, required: false
  private _hcl?: boolean | cdktf.IResolvable; 
  public get hcl() {
    return this.getBooleanAttribute('hcl');
  }
  public set hcl(value: boolean | cdktf.IResolvable) {
    this._hcl = value;
  }
  public resetHcl() {
    this._hcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hclInput() {
    return this._hcl;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
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
  private _valueFrom = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesValueFrom) {
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariables[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesOutputReference {
    return new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotifications {
  /**
  * The list of email addresses that will receive notification emails. It is only available for Terraform Enterprise users. It is not available in HCP Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#email_addresses DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * The list of users belonging to the organization that will receive notification emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#email_users DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#email_users}
  */
  readonly emailUsers?: string[];
  /**
  * Whether the notification configuration should be enabled or not. Default: 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#enabled DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Notification name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * The token of the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#token DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#token}
  */
  readonly token?: string;
  /**
  * The list of run events that will trigger notifications. Trigger represents the different TFC notifications that can be sent as a run's progress transitions between different states. There are two categories of triggers: - Health Events: 'assessment:check_failure', 'assessment:drifted', 'assessment:failed'. - Run Events: 'run:applying', 'run:completed', 'run:created', 'run:errored', 'run:needs_attention', 'run:planning'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#triggers DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#triggers}
  */
  readonly triggers?: string[];
  /**
  * The type of the notification. Must be one of the following values: 'email', 'generic', 'microsoft-teams', 'slack'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#type DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#type}
  */
  readonly type: string;
  /**
  * The URL of the notification. Must match pattern: '^https?://.*'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#url DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotificationsToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailAddresses),
    email_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailUsers),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    token: cdktf.stringToTerraform(struct!.token),
    triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.triggers),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotificationsToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.triggers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddresses = this._emailAddresses;
    }
    if (this._emailUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailUsers = this._emailUsers;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._triggers !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggers = this._triggers;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailAddresses = undefined;
      this._emailUsers = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._token = undefined;
      this._triggers = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailAddresses = value.emailAddresses;
      this._emailUsers = value.emailUsers;
      this._enabled = value.enabled;
      this._name = value.name;
      this._token = value.token;
      this._triggers = value.triggers;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
  }

  // email_users - computed: false, optional: true, required: false
  private _emailUsers?: string[]; 
  public get emailUsers() {
    return this.getListAttribute('email_users');
  }
  public set emailUsers(value: string[]) {
    this._emailUsers = value;
  }
  public resetEmailUsers() {
    this._emailUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailUsersInput() {
    return this._emailUsers;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: string[]; 
  public get triggers() {
    return this.getListAttribute('triggers');
  }
  public set triggers(value: string[]) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotificationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotifications[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotificationsOutputReference {
    return new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecProject {
  /**
  * Project ID. Must match pattern: '^prj-[a-zA-Z0-9]+$'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#id DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecProjectToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecProject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecProjectToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecProject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecProject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecProject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspaces {
  /**
  * Consumer Workspace ID. Must match pattern: '^ws-[a-zA-Z0-9]+$'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#id DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Consumer Workspace name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspacesToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspacesToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspacesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspaces[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspacesOutputReference {
    return new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharing {
  /**
  * Allow access to the state for all workspaces within the same organization. Default: 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#all_workspaces DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#all_workspaces}
  */
  readonly allWorkspaces?: boolean | cdktf.IResolvable;
  /**
  * Allow access to the state for specific workspaces within the same organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#workspaces DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#workspaces}
  */
  readonly workspaces?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspaces[] | cdktf.IResolvable;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_workspaces: cdktf.booleanToTerraform(struct!.allWorkspaces),
    workspaces: cdktf.listMapper(dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspacesToTerraform, false)(struct!.workspaces),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_workspaces: {
      value: cdktf.booleanToHclTerraform(struct!.allWorkspaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    workspaces: {
      value: cdktf.listMapperHcl(dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspacesToHclTerraform, false)(struct!.workspaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allWorkspaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.allWorkspaces = this._allWorkspaces;
    }
    if (this._workspaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaces = this._workspaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allWorkspaces = undefined;
      this._workspaces.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allWorkspaces = value.allWorkspaces;
      this._workspaces.internalValue = value.workspaces;
    }
  }

  // all_workspaces - computed: false, optional: true, required: false
  private _allWorkspaces?: boolean | cdktf.IResolvable; 
  public get allWorkspaces() {
    return this.getBooleanAttribute('all_workspaces');
  }
  public set allWorkspaces(value: boolean | cdktf.IResolvable) {
    this._allWorkspaces = value;
  }
  public resetAllWorkspaces() {
    this._allWorkspaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allWorkspacesInput() {
    return this._allWorkspaces;
  }

  // workspaces - computed: false, optional: true, required: false
  private _workspaces = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspacesList(this, "workspaces", false);
  public get workspaces() {
    return this._workspaces;
  }
  public putWorkspaces(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingWorkspaces[] | cdktf.IResolvable) {
    this._workspaces.internalValue = value;
  }
  public resetWorkspaces() {
    this._workspaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspacesInput() {
    return this._workspaces.internalValue;
  }
}
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasks {
  /**
  * Run Task Enforcement Level. Can be one of 'advisory' or 'mandatory'. Default: 'advisory'. Must be one of the following values: 'advisory', 'mandatory' Default: 'advisory'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#enforcement_level DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#enforcement_level}
  */
  readonly enforcementLevel?: string;
  /**
  * Run Task ID. Must match pattern: '^task-[a-zA-Z0-9]+$'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#id DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Run Task Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Run Task Stage. Must be one of the following values: 'pre_apply', 'pre_plan', 'post_plan'. Default: 'post_plan'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#stage DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#stage}
  */
  readonly stage?: string;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasksToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforcement_level: cdktf.stringToTerraform(struct!.enforcementLevel),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    stage: cdktf.stringToTerraform(struct!.stage),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasksToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforcement_level: {
      value: cdktf.stringToHclTerraform(struct!.enforcementLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    stage: {
      value: cdktf.stringToHclTerraform(struct!.stage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementLevel = this._enforcementLevel;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforcementLevel = undefined;
      this._id = undefined;
      this._name = undefined;
      this._stage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforcementLevel = value.enforcementLevel;
      this._id = value.id;
      this._name = value.name;
      this._stage = value.stage;
    }
  }

  // enforcement_level - computed: false, optional: true, required: false
  private _enforcementLevel?: string; 
  public get enforcementLevel() {
    return this.getStringAttribute('enforcement_level');
  }
  public set enforcementLevel(value: string) {
    this._enforcementLevel = value;
  }
  public resetEnforcementLevel() {
    this._enforcementLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementLevelInput() {
    return this._enforcementLevel;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // stage - computed: false, optional: true, required: false
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }
}

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasksList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasksOutputReference {
    return new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggers {
  /**
  * Source Workspace ID. Must match pattern: '^ws-[a-zA-Z0-9]+$'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#id DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Source Workspace Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggersToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggersToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggersOutputReference {
    return new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecSshKey {
  /**
  * SSH key ID. Must match pattern: '^sshkey-[a-zA-Z0-9]+$'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#id DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SSH key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecSshKeyToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecSshKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecSshKeyToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecSshKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecSshKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecSshKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecSshKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessCustom {
  /**
  * Manage Workspace Run Tasks. Default: 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#run_tasks DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#run_tasks}
  */
  readonly runTasks?: boolean | cdktf.IResolvable;
  /**
  * Run access. Must be one of the following values: 'apply', 'plan', 'read'. Default: 'read'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#runs DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#runs}
  */
  readonly runs?: string;
  /**
  * Download Sentinel mocks. Must be one of the following values: 'none', 'read'. Default: 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#sentinel DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#sentinel}
  */
  readonly sentinel?: string;
  /**
  * State access. Must be one of the following values: 'none', 'read', 'read-outputs', 'write'. Default: 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#state_versions DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#state_versions}
  */
  readonly stateVersions?: string;
  /**
  * Variable access. Must be one of the following values: 'none', 'read', 'write'. Default: 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#variables DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#variables}
  */
  readonly variables?: string;
  /**
  * Lock/unlock workspace. Default: 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#workspace_locking DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#workspace_locking}
  */
  readonly workspaceLocking?: boolean | cdktf.IResolvable;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessCustomToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    run_tasks: cdktf.booleanToTerraform(struct!.runTasks),
    runs: cdktf.stringToTerraform(struct!.runs),
    sentinel: cdktf.stringToTerraform(struct!.sentinel),
    state_versions: cdktf.stringToTerraform(struct!.stateVersions),
    variables: cdktf.stringToTerraform(struct!.variables),
    workspace_locking: cdktf.booleanToTerraform(struct!.workspaceLocking),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessCustomToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    run_tasks: {
      value: cdktf.booleanToHclTerraform(struct!.runTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    runs: {
      value: cdktf.stringToHclTerraform(struct!.runs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel: {
      value: cdktf.stringToHclTerraform(struct!.sentinel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_versions: {
      value: cdktf.stringToHclTerraform(struct!.stateVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.stringToHclTerraform(struct!.variables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_locking: {
      value: cdktf.booleanToHclTerraform(struct!.workspaceLocking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.runTasks = this._runTasks;
    }
    if (this._runs !== undefined) {
      hasAnyValues = true;
      internalValueResult.runs = this._runs;
    }
    if (this._sentinel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinel = this._sentinel;
    }
    if (this._stateVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateVersions = this._stateVersions;
    }
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    if (this._workspaceLocking !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceLocking = this._workspaceLocking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._runTasks = undefined;
      this._runs = undefined;
      this._sentinel = undefined;
      this._stateVersions = undefined;
      this._variables = undefined;
      this._workspaceLocking = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._runTasks = value.runTasks;
      this._runs = value.runs;
      this._sentinel = value.sentinel;
      this._stateVersions = value.stateVersions;
      this._variables = value.variables;
      this._workspaceLocking = value.workspaceLocking;
    }
  }

  // run_tasks - computed: false, optional: true, required: false
  private _runTasks?: boolean | cdktf.IResolvable; 
  public get runTasks() {
    return this.getBooleanAttribute('run_tasks');
  }
  public set runTasks(value: boolean | cdktf.IResolvable) {
    this._runTasks = value;
  }
  public resetRunTasks() {
    this._runTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTasksInput() {
    return this._runTasks;
  }

  // runs - computed: false, optional: true, required: false
  private _runs?: string; 
  public get runs() {
    return this.getStringAttribute('runs');
  }
  public set runs(value: string) {
    this._runs = value;
  }
  public resetRuns() {
    this._runs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runsInput() {
    return this._runs;
  }

  // sentinel - computed: false, optional: true, required: false
  private _sentinel?: string; 
  public get sentinel() {
    return this.getStringAttribute('sentinel');
  }
  public set sentinel(value: string) {
    this._sentinel = value;
  }
  public resetSentinel() {
    this._sentinel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelInput() {
    return this._sentinel;
  }

  // state_versions - computed: false, optional: true, required: false
  private _stateVersions?: string; 
  public get stateVersions() {
    return this.getStringAttribute('state_versions');
  }
  public set stateVersions(value: string) {
    this._stateVersions = value;
  }
  public resetStateVersions() {
    this._stateVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateVersionsInput() {
    return this._stateVersions;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: string; 
  public get variables() {
    return this.getStringAttribute('variables');
  }
  public set variables(value: string) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // workspace_locking - computed: false, optional: true, required: false
  private _workspaceLocking?: boolean | cdktf.IResolvable; 
  public get workspaceLocking() {
    return this.getBooleanAttribute('workspace_locking');
  }
  public set workspaceLocking(value: boolean | cdktf.IResolvable) {
    this._workspaceLocking = value;
  }
  public resetWorkspaceLocking() {
    this._workspaceLocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceLockingInput() {
    return this._workspaceLocking;
  }
}
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessTeam {
  /**
  * Team ID. Must match pattern: '^team-[a-zA-Z0-9]+$'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#id DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Team name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessTeamToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessTeamToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessTeamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessTeam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessTeam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccess {
  /**
  * There are two ways to choose which permissions a given team has on a workspace: fixed permission sets, and custom permissions. Must be one of the following values: 'admin', 'custom', 'plan', 'read', 'write'. More information: - https://developer.hashicorp.com/terraform/cloud-docs/users-teams-organizations/permissions#workspace-permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#access DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#access}
  */
  readonly access: string;
  /**
  * Custom permissions let you assign specific, finer-grained permissions to a team than the broader fixed permission sets provide. More information: - https://developer.hashicorp.com/terraform/cloud-docs/users-teams-organizations/permissions#custom-workspace-permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#custom DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#custom}
  */
  readonly custom?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessCustom;
  /**
  * Team to grant access. More information: - https://developer.hashicorp.com/terraform/cloud-docs/users-teams-organizations/teams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#team DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#team}
  */
  readonly team: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessTeam;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    custom: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessCustomToTerraform(struct!.custom),
    team: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessTeamToTerraform(struct!.team),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom: {
      value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessCustom",
    },
    team: {
      value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessTeamToHclTerraform(struct!.team),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessTeam",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._team?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._custom.internalValue = undefined;
      this._team.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._custom.internalValue = value.custom;
      this._team.internalValue = value.team;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // team - computed: false, optional: false, required: true
  private _team = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessTeamOutputReference(this, "team");
  public get team() {
    return this._team;
  }
  public putTeam(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessTeam) {
    this._team.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team.internalValue;
  }
}

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccess[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessOutputReference {
    return new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#key DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#optional DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromConfigMapKeyRefToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#key DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#optional DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromSecretKeyRefToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromSecretKeyRefToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#config_map_key_ref DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromConfigMapKeyRef;
  /**
  * Selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#secret_key_ref DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromSecretKeyRef;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    secret_key_ref: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromConfigMapKeyRef",
    },
    secret_key_ref: {
      value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
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
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromSecretKeyRef) {
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
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariables {
  /**
  * Description of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#description DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#description}
  */
  readonly description?: string;
  /**
  * Parse this field as HashiCorp Configuration Language (HCL). This allows you to interpolate values at runtime. Default: 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#hcl DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#hcl}
  */
  readonly hcl?: boolean | cdktf.IResolvable;
  /**
  * Name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Sensitive variables are never shown in the UI or API. They may appear in Terraform logs if your configuration is designed to output them. Default: 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#sensitive DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * Value of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#value DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#value_from DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#value_from}
  */
  readonly valueFrom?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFrom;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    hcl: cdktf.booleanToTerraform(struct!.hcl),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariables | cdktf.IResolvable): any {
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
    hcl: {
      value: cdktf.booleanToHclTerraform(struct!.hcl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hcl = this._hcl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
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

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._hcl = undefined;
      this._name = undefined;
      this._sensitive = undefined;
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
      this._description = value.description;
      this._hcl = value.hcl;
      this._name = value.name;
      this._sensitive = value.sensitive;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
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

  // hcl - computed: false, optional: true, required: false
  private _hcl?: boolean | cdktf.IResolvable; 
  public get hcl() {
    return this.getBooleanAttribute('hcl');
  }
  public set hcl(value: boolean | cdktf.IResolvable) {
    this._hcl = value;
  }
  public resetHcl() {
    this._hcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hclInput() {
    return this._hcl;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
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
  private _valueFrom = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesValueFrom) {
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariables[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesOutputReference {
    return new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#key DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#optional DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenSecretKeyRefToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenSecretKeyRefToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecToken {
  /**
  * Selects a key of a secret in the workspace's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#secret_key_ref DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#secret_key_ref}
  */
  readonly secretKeyRef: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenSecretKeyRef;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: false, required: true
  private _secretKeyRef = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecVersionControl {
  /**
  * The repository branch that Run will execute from. This defaults to the repository's default branch (e.g. main).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#branch DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#branch}
  */
  readonly branch?: string;
  /**
  * The VCS Connection (OAuth Connection + Token) to use. Must match pattern: '^ot-[a-zA-Z0-9]+$'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#o_auth_token_id DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#o_auth_token_id}
  */
  readonly oAuthTokenId?: string;
  /**
  * A reference to your VCS repository in the format '<organization>/<repository>' where '<organization>' and '<repository>' refer to the organization and repository in your VCS provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#repository DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Whether this workspace allows automatic speculative plans on PR. Default: 'true'. More information: - https://developer.hashicorp.com/terraform/cloud-docs/run/ui#speculative-plans-on-pull-requests - https://developer.hashicorp.com/terraform/cloud-docs/run/remote-operations#speculative-plans
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#speculative_plans DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#speculative_plans}
  */
  readonly speculativePlans?: boolean | cdktf.IResolvable;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecVersionControlToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecVersionControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    o_auth_token_id: cdktf.stringToTerraform(struct!.oAuthTokenId),
    repository: cdktf.stringToTerraform(struct!.repository),
    speculative_plans: cdktf.booleanToTerraform(struct!.speculativePlans),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecVersionControlToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecVersionControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_auth_token_id: {
      value: cdktf.stringToHclTerraform(struct!.oAuthTokenId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speculative_plans: {
      value: cdktf.booleanToHclTerraform(struct!.speculativePlans),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecVersionControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecVersionControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._oAuthTokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthTokenId = this._oAuthTokenId;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._speculativePlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.speculativePlans = this._speculativePlans;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecVersionControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._oAuthTokenId = undefined;
      this._repository = undefined;
      this._speculativePlans = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._oAuthTokenId = value.oAuthTokenId;
      this._repository = value.repository;
      this._speculativePlans = value.speculativePlans;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // o_auth_token_id - computed: false, optional: true, required: false
  private _oAuthTokenId?: string; 
  public get oAuthTokenId() {
    return this.getStringAttribute('o_auth_token_id');
  }
  public set oAuthTokenId(value: string) {
    this._oAuthTokenId = value;
  }
  public resetOAuthTokenId() {
    this._oAuthTokenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthTokenIdInput() {
    return this._oAuthTokenId;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // speculative_plans - computed: false, optional: true, required: false
  private _speculativePlans?: boolean | cdktf.IResolvable; 
  public get speculativePlans() {
    return this.getBooleanAttribute('speculative_plans');
  }
  public set speculativePlans(value: boolean | cdktf.IResolvable) {
    this._speculativePlans = value;
  }
  public resetSpeculativePlans() {
    this._speculativePlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speculativePlansInput() {
    return this._speculativePlans;
  }
}
export interface DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpec {
  /**
  * HCP Terraform Agents allow HCP Terraform to communicate with isolated, private, or on-premises infrastructure. More information: - https://developer.hashicorp.com/terraform/cloud-docs/agents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#agent_pool DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#agent_pool}
  */
  readonly agentPool?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecAgentPool;
  /**
  * Allows a destroy plan to be created and applied. Default: 'true'. More information: - https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings#destruction-and-deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#allow_destroy_plan DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#allow_destroy_plan}
  */
  readonly allowDestroyPlan?: boolean | cdktf.IResolvable;
  /**
  * Define either change will be applied automatically(auto) or require an operator to confirm(manual). Must be one of the following values: 'auto', 'manual'. Default: 'manual'. More information: - https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings#auto-apply-and-manual-apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#apply_method DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#apply_method}
  */
  readonly applyMethod?: string;
  /**
  * The Deletion Policy specifies the behavior of the custom resource and its associated workspace when the custom resource is deleted. - 'retain': When the custom resource is deleted, the associated workspace is retained. - 'soft': Attempts to delete the associated workspace only if it does not contain any managed resources. - 'destroy': Executes a destroy operation to remove all resources managed by the associated workspace. Once the destruction of these resources is successful, the workspace itself is deleted, followed by the removal of the custom resource. - 'force': Forcefully and immediately deletes the workspace and the custom resource. Default: 'retain'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#deletion_policy DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Workspace description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#description DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#description}
  */
  readonly description?: string;
  /**
  * Terraform Environment variables for all plans and applies in this workspace. Variables defined within a workspace always overwrite variables from variable sets that have the same type and the same key. More information: - https://developer.hashicorp.com/terraform/cloud-docs/workspaces/variables - https://developer.hashicorp.com/terraform/cloud-docs/workspaces/variables#environment-variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#environment_variables DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#environment_variables}
  */
  readonly environmentVariables?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariables[] | cdktf.IResolvable;
  /**
  * Define where the Terraform code will be executed. Must be one of the following values: 'agent', 'local', 'remote'. Default: 'remote'. More information: - https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings#execution-mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#execution_mode DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#execution_mode}
  */
  readonly executionMode?: string;
  /**
  * Workspace name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#name DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Notifications allow you to send messages to other applications based on run and workspace events. More information: - https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings/notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#notifications DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#notifications}
  */
  readonly notifications?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotifications[] | cdktf.IResolvable;
  /**
  * Organization name where the Workspace will be created. More information: - https://developer.hashicorp.com/terraform/cloud-docs/users-teams-organizations/organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#organization DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#organization}
  */
  readonly organization: string;
  /**
  * Projects let you organize your workspaces into groups. Default: default organization project. More information: - https://developer.hashicorp.com/terraform/tutorials/cloud/projects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#project DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#project}
  */
  readonly project?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecProject;
  /**
  * Remote state access between workspaces. By default, new workspaces in HCP Terraform do not allow other workspaces to access their state. More information: - https://developer.hashicorp.com/terraform/cloud-docs/workspaces/state#accessing-state-from-other-workspaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#remote_state_sharing DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#remote_state_sharing}
  */
  readonly remoteStateSharing?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharing;
  /**
  * Run tasks allow HCP Terraform to interact with external systems at specific points in the HCP Terraform run lifecycle. More information: - https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings/run-tasks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#run_tasks DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#run_tasks}
  */
  readonly runTasks?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasks[] | cdktf.IResolvable;
  /**
  * Run triggers allow you to connect this workspace to one or more source workspaces. These connections allow runs to queue automatically in this workspace on successful apply of runs in any of the source workspaces. More information: - https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings/run-triggers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#run_triggers DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#run_triggers}
  */
  readonly runTriggers?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggers[] | cdktf.IResolvable;
  /**
  * SSH key used to clone Terraform modules. More information: - https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings/ssh-keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#ssh_key DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#ssh_key}
  */
  readonly sshKey?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecSshKey;
  /**
  * Workspace tags are used to help identify and group together workspaces. Tags must be one or more characters; can include letters, numbers, colons, hyphens, and underscores; and must begin and end with a letter or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#tags DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#tags}
  */
  readonly tags?: string[];
  /**
  * HCP Terraform workspaces can only be accessed by users with the correct permissions. You can manage permissions for a workspace on a per-team basis. When a workspace is created, only the owners team and teams with the 'manage workspaces' permission can access it, with full admin permissions. These teams' access can't be removed from a workspace. More information: - https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings/access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#team_access DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#team_access}
  */
  readonly teamAccess?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccess[] | cdktf.IResolvable;
  /**
  * Terraform variables for all plans and applies in this workspace. Variables defined within a workspace always overwrite variables from variable sets that have the same type and the same key. More information: - https://developer.hashicorp.com/terraform/cloud-docs/workspaces/variables - https://developer.hashicorp.com/terraform/cloud-docs/workspaces/variables#terraform-variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#terraform_variables DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#terraform_variables}
  */
  readonly terraformVariables?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariables[] | cdktf.IResolvable;
  /**
  * The version of Terraform to use for this workspace. If not specified, the latest available version will be used. Must match pattern: '^d{1}.d{1,2}.d{1,2}$' More information: - https://www.terraform.io/cloud-docs/workspaces/settings#terraform-version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#terraform_version DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#terraform_version}
  */
  readonly terraformVersion?: string;
  /**
  * API Token to be used for API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#token DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#token}
  */
  readonly token: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecToken;
  /**
  * Settings for the workspace's VCS repository, enabling the UI/VCS-driven run workflow. Omit this argument to utilize the CLI-driven and API-driven workflows, where runs are not driven by webhooks on your VCS provider. More information: - https://www.terraform.io/cloud-docs/run/ui - https://www.terraform.io/cloud-docs/vcs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#version_control DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#version_control}
  */
  readonly versionControl?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecVersionControl;
  /**
  * The directory where Terraform will execute, specified as a relative path from the root of the configuration directory. More information: - https://www.terraform.io/cloud-docs/workspaces/settings#terraform-working-directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#working_directory DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest#working_directory}
  */
  readonly workingDirectory?: string;
}

export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecToTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_pool: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecAgentPoolToTerraform(struct!.agentPool),
    allow_destroy_plan: cdktf.booleanToTerraform(struct!.allowDestroyPlan),
    apply_method: cdktf.stringToTerraform(struct!.applyMethod),
    deletion_policy: cdktf.stringToTerraform(struct!.deletionPolicy),
    description: cdktf.stringToTerraform(struct!.description),
    environment_variables: cdktf.listMapper(dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesToTerraform, false)(struct!.environmentVariables),
    execution_mode: cdktf.stringToTerraform(struct!.executionMode),
    name: cdktf.stringToTerraform(struct!.name),
    notifications: cdktf.listMapper(dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotificationsToTerraform, false)(struct!.notifications),
    organization: cdktf.stringToTerraform(struct!.organization),
    project: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecProjectToTerraform(struct!.project),
    remote_state_sharing: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingToTerraform(struct!.remoteStateSharing),
    run_tasks: cdktf.listMapper(dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasksToTerraform, false)(struct!.runTasks),
    run_triggers: cdktf.listMapper(dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggersToTerraform, false)(struct!.runTriggers),
    ssh_key: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecSshKeyToTerraform(struct!.sshKey),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    team_access: cdktf.listMapper(dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessToTerraform, false)(struct!.teamAccess),
    terraform_variables: cdktf.listMapper(dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesToTerraform, false)(struct!.terraformVariables),
    terraform_version: cdktf.stringToTerraform(struct!.terraformVersion),
    token: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenToTerraform(struct!.token),
    version_control: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecVersionControlToTerraform(struct!.versionControl),
    working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
  }
}


export function dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_pool: {
      value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecAgentPoolToHclTerraform(struct!.agentPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecAgentPool",
    },
    allow_destroy_plan: {
      value: cdktf.booleanToHclTerraform(struct!.allowDestroyPlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apply_method: {
      value: cdktf.stringToHclTerraform(struct!.applyMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deletion_policy: {
      value: cdktf.stringToHclTerraform(struct!.deletionPolicy),
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
    environment_variables: {
      value: cdktf.listMapperHcl(dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesToHclTerraform, false)(struct!.environmentVariables),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesList",
    },
    execution_mode: {
      value: cdktf.stringToHclTerraform(struct!.executionMode),
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
    notifications: {
      value: cdktf.listMapperHcl(dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotificationsToHclTerraform, false)(struct!.notifications),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotificationsList",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecProjectToHclTerraform(struct!.project),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecProject",
    },
    remote_state_sharing: {
      value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingToHclTerraform(struct!.remoteStateSharing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharing",
    },
    run_tasks: {
      value: cdktf.listMapperHcl(dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasksToHclTerraform, false)(struct!.runTasks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasksList",
    },
    run_triggers: {
      value: cdktf.listMapperHcl(dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggersToHclTerraform, false)(struct!.runTriggers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggersList",
    },
    ssh_key: {
      value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecSshKeyToHclTerraform(struct!.sshKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecSshKey",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    team_access: {
      value: cdktf.listMapperHcl(dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessToHclTerraform, false)(struct!.teamAccess),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessList",
    },
    terraform_variables: {
      value: cdktf.listMapperHcl(dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesToHclTerraform, false)(struct!.terraformVariables),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesList",
    },
    terraform_version: {
      value: cdktf.stringToHclTerraform(struct!.terraformVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenToHclTerraform(struct!.token),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecToken",
    },
    version_control: {
      value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecVersionControlToHclTerraform(struct!.versionControl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecVersionControl",
    },
    working_directory: {
      value: cdktf.stringToHclTerraform(struct!.workingDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentPool = this._agentPool?.internalValue;
    }
    if (this._allowDestroyPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDestroyPlan = this._allowDestroyPlan;
    }
    if (this._applyMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyMethod = this._applyMethod;
    }
    if (this._deletionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionPolicy = this._deletionPolicy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._environmentVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables?.internalValue;
    }
    if (this._executionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionMode = this._executionMode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications?.internalValue;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._project?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project?.internalValue;
    }
    if (this._remoteStateSharing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteStateSharing = this._remoteStateSharing?.internalValue;
    }
    if (this._runTasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runTasks = this._runTasks?.internalValue;
    }
    if (this._runTriggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runTriggers = this._runTriggers?.internalValue;
    }
    if (this._sshKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._teamAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamAccess = this._teamAccess?.internalValue;
    }
    if (this._terraformVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terraformVariables = this._terraformVariables?.internalValue;
    }
    if (this._terraformVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.terraformVersion = this._terraformVersion;
    }
    if (this._token?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token?.internalValue;
    }
    if (this._versionControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionControl = this._versionControl?.internalValue;
    }
    if (this._workingDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirectory = this._workingDirectory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentPool.internalValue = undefined;
      this._allowDestroyPlan = undefined;
      this._applyMethod = undefined;
      this._deletionPolicy = undefined;
      this._description = undefined;
      this._environmentVariables.internalValue = undefined;
      this._executionMode = undefined;
      this._name = undefined;
      this._notifications.internalValue = undefined;
      this._organization = undefined;
      this._project.internalValue = undefined;
      this._remoteStateSharing.internalValue = undefined;
      this._runTasks.internalValue = undefined;
      this._runTriggers.internalValue = undefined;
      this._sshKey.internalValue = undefined;
      this._tags = undefined;
      this._teamAccess.internalValue = undefined;
      this._terraformVariables.internalValue = undefined;
      this._terraformVersion = undefined;
      this._token.internalValue = undefined;
      this._versionControl.internalValue = undefined;
      this._workingDirectory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentPool.internalValue = value.agentPool;
      this._allowDestroyPlan = value.allowDestroyPlan;
      this._applyMethod = value.applyMethod;
      this._deletionPolicy = value.deletionPolicy;
      this._description = value.description;
      this._environmentVariables.internalValue = value.environmentVariables;
      this._executionMode = value.executionMode;
      this._name = value.name;
      this._notifications.internalValue = value.notifications;
      this._organization = value.organization;
      this._project.internalValue = value.project;
      this._remoteStateSharing.internalValue = value.remoteStateSharing;
      this._runTasks.internalValue = value.runTasks;
      this._runTriggers.internalValue = value.runTriggers;
      this._sshKey.internalValue = value.sshKey;
      this._tags = value.tags;
      this._teamAccess.internalValue = value.teamAccess;
      this._terraformVariables.internalValue = value.terraformVariables;
      this._terraformVersion = value.terraformVersion;
      this._token.internalValue = value.token;
      this._versionControl.internalValue = value.versionControl;
      this._workingDirectory = value.workingDirectory;
    }
  }

  // agent_pool - computed: false, optional: true, required: false
  private _agentPool = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecAgentPoolOutputReference(this, "agent_pool");
  public get agentPool() {
    return this._agentPool;
  }
  public putAgentPool(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecAgentPool) {
    this._agentPool.internalValue = value;
  }
  public resetAgentPool() {
    this._agentPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPoolInput() {
    return this._agentPool.internalValue;
  }

  // allow_destroy_plan - computed: false, optional: true, required: false
  private _allowDestroyPlan?: boolean | cdktf.IResolvable; 
  public get allowDestroyPlan() {
    return this.getBooleanAttribute('allow_destroy_plan');
  }
  public set allowDestroyPlan(value: boolean | cdktf.IResolvable) {
    this._allowDestroyPlan = value;
  }
  public resetAllowDestroyPlan() {
    this._allowDestroyPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDestroyPlanInput() {
    return this._allowDestroyPlan;
  }

  // apply_method - computed: false, optional: true, required: false
  private _applyMethod?: string; 
  public get applyMethod() {
    return this.getStringAttribute('apply_method');
  }
  public set applyMethod(value: string) {
    this._applyMethod = value;
  }
  public resetApplyMethod() {
    this._applyMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyMethodInput() {
    return this._applyMethod;
  }

  // deletion_policy - computed: false, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
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

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariablesList(this, "environment_variables", false);
  public get environmentVariables() {
    return this._environmentVariables;
  }
  public putEnvironmentVariables(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecEnvironmentVariables[] | cdktf.IResolvable) {
    this._environmentVariables.internalValue = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables.internalValue;
  }

  // execution_mode - computed: false, optional: true, required: false
  private _executionMode?: string; 
  public get executionMode() {
    return this.getStringAttribute('execution_mode');
  }
  public set executionMode(value: string) {
    this._executionMode = value;
  }
  public resetExecutionMode() {
    this._executionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionModeInput() {
    return this._executionMode;
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

  // notifications - computed: false, optional: true, required: false
  private _notifications = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotificationsList(this, "notifications", false);
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecNotifications[] | cdktf.IResolvable) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // project - computed: false, optional: true, required: false
  private _project = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
  public putProject(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecProject) {
    this._project.internalValue = value;
  }
  public resetProject() {
    this._project.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // remote_state_sharing - computed: false, optional: true, required: false
  private _remoteStateSharing = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharingOutputReference(this, "remote_state_sharing");
  public get remoteStateSharing() {
    return this._remoteStateSharing;
  }
  public putRemoteStateSharing(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRemoteStateSharing) {
    this._remoteStateSharing.internalValue = value;
  }
  public resetRemoteStateSharing() {
    this._remoteStateSharing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteStateSharingInput() {
    return this._remoteStateSharing.internalValue;
  }

  // run_tasks - computed: false, optional: true, required: false
  private _runTasks = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasksList(this, "run_tasks", false);
  public get runTasks() {
    return this._runTasks;
  }
  public putRunTasks(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTasks[] | cdktf.IResolvable) {
    this._runTasks.internalValue = value;
  }
  public resetRunTasks() {
    this._runTasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTasksInput() {
    return this._runTasks.internalValue;
  }

  // run_triggers - computed: false, optional: true, required: false
  private _runTriggers = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggersList(this, "run_triggers", false);
  public get runTriggers() {
    return this._runTriggers;
  }
  public putRunTriggers(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecRunTriggers[] | cdktf.IResolvable) {
    this._runTriggers.internalValue = value;
  }
  public resetRunTriggers() {
    this._runTriggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTriggersInput() {
    return this._runTriggers.internalValue;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecSshKeyOutputReference(this, "ssh_key");
  public get sshKey() {
    return this._sshKey;
  }
  public putSshKey(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecSshKey) {
    this._sshKey.internalValue = value;
  }
  public resetSshKey() {
    this._sshKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // team_access - computed: false, optional: true, required: false
  private _teamAccess = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccessList(this, "team_access", false);
  public get teamAccess() {
    return this._teamAccess;
  }
  public putTeamAccess(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTeamAccess[] | cdktf.IResolvable) {
    this._teamAccess.internalValue = value;
  }
  public resetTeamAccess() {
    this._teamAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamAccessInput() {
    return this._teamAccess.internalValue;
  }

  // terraform_variables - computed: false, optional: true, required: false
  private _terraformVariables = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariablesList(this, "terraform_variables", false);
  public get terraformVariables() {
    return this._terraformVariables;
  }
  public putTerraformVariables(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTerraformVariables[] | cdktf.IResolvable) {
    this._terraformVariables.internalValue = value;
  }
  public resetTerraformVariables() {
    this._terraformVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformVariablesInput() {
    return this._terraformVariables.internalValue;
  }

  // terraform_version - computed: false, optional: true, required: false
  private _terraformVersion?: string; 
  public get terraformVersion() {
    return this.getStringAttribute('terraform_version');
  }
  public set terraformVersion(value: string) {
    this._terraformVersion = value;
  }
  public resetTerraformVersion() {
    this._terraformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformVersionInput() {
    return this._terraformVersion;
  }

  // token - computed: false, optional: false, required: true
  private _token = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecTokenOutputReference(this, "token");
  public get token() {
    return this._token;
  }
  public putToken(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecToken) {
    this._token.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token.internalValue;
  }

  // version_control - computed: false, optional: true, required: false
  private _versionControl = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecVersionControlOutputReference(this, "version_control");
  public get versionControl() {
    return this._versionControl;
  }
  public putVersionControl(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecVersionControl) {
    this._versionControl.internalValue = value;
  }
  public resetVersionControl() {
    this._versionControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionControlInput() {
    return this._versionControl.internalValue;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest k8s_app_terraform_io_workspace_v1alpha2_manifest}
*/
export class DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_app_terraform_io_workspace_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppTerraformIoWorkspaceV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_app_terraform_io_workspace_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/app_terraform_io_workspace_v1alpha2_manifest k8s_app_terraform_io_workspace_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_app_terraform_io_workspace_v1alpha2_manifest',
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
  private _metadata = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppTerraformIoWorkspaceV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
