// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#metadata DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestMetadata;
  /**
  * Spec represents the specification of rbac.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#spec DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpec;
}
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#annotations DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#labels DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#name DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#namespace DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#annotations DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#finalizers DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#labels DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#name DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#namespace DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingMetadataToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingMetadataToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingMetadata | cdktf.IResolvable): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._finalizers = undefined;
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
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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
}
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingRoleRef {
  /**
  * APIGroup is the group for the resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#api_group DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#api_group}
  */
  readonly apiGroup: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#kind DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#name DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingRoleRefToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingRoleRefToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingRoleRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingRoleRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingRoleRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: false, required: true
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjects {
  /**
  * APIGroup holds the API group of the referenced subject. Defaults to '' for ServiceAccount subjects. Defaults to 'rbac.authorization.k8s.io' for User and Group subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#api_group DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind of object being referenced. Values defined by this API group are 'User', 'Group', and 'ServiceAccount'. If the Authorizer does not recognized the kind value, the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#kind DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the object being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#name DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referenced object. If the object kind is non-namespace, such as 'User' or 'Group', and this value is not empty the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#namespace DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjectsToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjectsToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjectsOutputReference {
    return new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBinding {
  /**
  * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#api_version DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#kind DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Standard object's metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#metadata DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingMetadata;
  /**
  * RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#role_ref DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#role_ref}
  */
  readonly roleRef: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingRoleRef;
  /**
  * Subjects holds references to the objects the role applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#subjects DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#subjects}
  */
  readonly subjects?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjects[] | cdktf.IResolvable;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    metadata: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingMetadataToTerraform(struct!.metadata),
    role_ref: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingRoleRefToTerraform(struct!.roleRef),
    subjects: cdktf.listMapper(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBinding | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingMetadata",
    },
    role_ref: {
      value: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingRoleRefToHclTerraform(struct!.roleRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingRoleRef",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._roleRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleRef = this._roleRef?.internalValue;
    }
    if (this._subjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._metadata.internalValue = undefined;
      this._roleRef.internalValue = undefined;
      this._subjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._metadata.internalValue = value.metadata;
      this._roleRef.internalValue = value.roleRef;
      this._subjects.internalValue = value.subjects;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // role_ref - computed: false, optional: false, required: true
  private _roleRef = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingRoleRefOutputReference(this, "role_ref");
  public get roleRef() {
    return this._roleRef;
  }
  public putRoleRef(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingRoleRef) {
    this._roleRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleRefInput() {
    return this._roleRef.internalValue;
  }

  // subjects - computed: false, optional: true, required: false
  private _subjects = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingSubjects[] | cdktf.IResolvable) {
    this._subjects.internalValue = value;
  }
  public resetSubjects() {
    this._subjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects.internalValue;
  }
}
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRules {
  /**
  * APIGroups is the name of the APIGroup that contains the resources. If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. '' represents the core API group and '*' represents all API groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#api_groups DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#api_groups}
  */
  readonly apiGroups?: string[];
  /**
  * NonResourceURLs is a set of partial urls that a user should have access to. *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as 'pods' or 'secrets') or non-resource URL paths (such as '/api'), but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#non_resource_urls DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#non_resource_urls}
  */
  readonly nonResourceUrls?: string[];
  /**
  * ResourceNames is an optional white list of names that the rule applies to. An empty set means that everything is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#resource_names DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#resource_names}
  */
  readonly resourceNames?: string[];
  /**
  * Resources is a list of resources this rule applies to. '*' represents all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#resources DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#resources}
  */
  readonly resources?: string[];
  /**
  * Verbs is a list of Verbs that apply to ALL the ResourceKinds contained in this rule. '*' represents all verbs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#verbs DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#verbs}
  */
  readonly verbs: string[];
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRulesToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRules | cdktf.IResolvable): any {
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


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRulesToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRules | cdktf.IResolvable): any {
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

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRules | cdktf.IResolvable | undefined) {
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

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  public resetApiGroups() {
    this._apiGroups = undefined;
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

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
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

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRulesOutputReference {
    return new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBinding {
  /**
  * ClusterRoleBinding represents rbac ClusterRoleBinding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#cluster_role_binding DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#cluster_role_binding}
  */
  readonly clusterRoleBinding?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBinding;
  /**
  * Rules contains role rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#rules DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#rules}
  */
  readonly rules?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRules[] | cdktf.IResolvable;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_role_binding: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingToTerraform(struct!.clusterRoleBinding),
    rules: cdktf.listMapper(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_role_binding: {
      value: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingToHclTerraform(struct!.clusterRoleBinding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBinding",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRoleBinding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoleBinding = this._clusterRoleBinding?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterRoleBinding.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterRoleBinding.internalValue = value.clusterRoleBinding;
      this._rules.internalValue = value.rules;
    }
  }

  // cluster_role_binding - computed: false, optional: true, required: false
  private _clusterRoleBinding = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBindingOutputReference(this, "cluster_role_binding");
  public get clusterRoleBinding() {
    return this._clusterRoleBinding;
  }
  public putClusterRoleBinding(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingClusterRoleBinding) {
    this._clusterRoleBinding.internalValue = value;
  }
  public resetClusterRoleBinding() {
    this._clusterRoleBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleBindingInput() {
    return this._clusterRoleBinding.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBinding[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingOutputReference {
    return new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#annotations DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#finalizers DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#labels DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#name DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#namespace DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingMetadataToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingMetadataToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingMetadata | cdktf.IResolvable): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._finalizers = undefined;
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
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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
}
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingRoleRef {
  /**
  * APIGroup is the group for the resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#api_group DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#api_group}
  */
  readonly apiGroup: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#kind DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#name DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingRoleRefToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingRoleRefToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingRoleRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingRoleRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingRoleRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: false, required: true
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjects {
  /**
  * APIGroup holds the API group of the referenced subject. Defaults to '' for ServiceAccount subjects. Defaults to 'rbac.authorization.k8s.io' for User and Group subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#api_group DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind of object being referenced. Values defined by this API group are 'User', 'Group', and 'ServiceAccount'. If the Authorizer does not recognized the kind value, the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#kind DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the object being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#name DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referenced object. If the object kind is non-namespace, such as 'User' or 'Group', and this value is not empty the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#namespace DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjectsToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjectsToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjectsOutputReference {
    return new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBinding {
  /**
  * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#api_version DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#kind DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Standard object's metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#metadata DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingMetadata;
  /**
  * RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#role_ref DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#role_ref}
  */
  readonly roleRef: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingRoleRef;
  /**
  * Subjects holds references to the objects the role applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#subjects DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#subjects}
  */
  readonly subjects?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjects[] | cdktf.IResolvable;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    metadata: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingMetadataToTerraform(struct!.metadata),
    role_ref: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingRoleRefToTerraform(struct!.roleRef),
    subjects: cdktf.listMapper(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBinding | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingMetadata",
    },
    role_ref: {
      value: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingRoleRefToHclTerraform(struct!.roleRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingRoleRef",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._roleRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleRef = this._roleRef?.internalValue;
    }
    if (this._subjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._metadata.internalValue = undefined;
      this._roleRef.internalValue = undefined;
      this._subjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._metadata.internalValue = value.metadata;
      this._roleRef.internalValue = value.roleRef;
      this._subjects.internalValue = value.subjects;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // role_ref - computed: false, optional: false, required: true
  private _roleRef = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingRoleRefOutputReference(this, "role_ref");
  public get roleRef() {
    return this._roleRef;
  }
  public putRoleRef(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingRoleRef) {
    this._roleRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleRefInput() {
    return this._roleRef.internalValue;
  }

  // subjects - computed: false, optional: true, required: false
  private _subjects = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingSubjects[] | cdktf.IResolvable) {
    this._subjects.internalValue = value;
  }
  public resetSubjects() {
    this._subjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects.internalValue;
  }
}
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRules {
  /**
  * APIGroups is the name of the APIGroup that contains the resources. If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. '' represents the core API group and '*' represents all API groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#api_groups DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#api_groups}
  */
  readonly apiGroups?: string[];
  /**
  * NonResourceURLs is a set of partial urls that a user should have access to. *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as 'pods' or 'secrets') or non-resource URL paths (such as '/api'), but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#non_resource_urls DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#non_resource_urls}
  */
  readonly nonResourceUrls?: string[];
  /**
  * ResourceNames is an optional white list of names that the rule applies to. An empty set means that everything is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#resource_names DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#resource_names}
  */
  readonly resourceNames?: string[];
  /**
  * Resources is a list of resources this rule applies to. '*' represents all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#resources DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#resources}
  */
  readonly resources?: string[];
  /**
  * Verbs is a list of Verbs that apply to ALL the ResourceKinds contained in this rule. '*' represents all verbs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#verbs DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#verbs}
  */
  readonly verbs: string[];
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRulesToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRules | cdktf.IResolvable): any {
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


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRulesToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRules | cdktf.IResolvable): any {
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

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRules | cdktf.IResolvable | undefined) {
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

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  public resetApiGroups() {
    this._apiGroups = undefined;
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

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
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

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRulesOutputReference {
    return new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBinding {
  /**
  * RoleBinding represents rbac rolebinding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#role_binding DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#role_binding}
  */
  readonly roleBinding?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBinding;
  /**
  * Rules contains role rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#rules DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#rules}
  */
  readonly rules?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRules[] | cdktf.IResolvable;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_binding: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingToTerraform(struct!.roleBinding),
    rules: cdktf.listMapper(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_binding: {
      value: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingToHclTerraform(struct!.roleBinding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBinding",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleBinding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleBinding = this._roleBinding?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleBinding.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleBinding.internalValue = value.roleBinding;
      this._rules.internalValue = value.rules;
    }
  }

  // role_binding - computed: false, optional: true, required: false
  private _roleBinding = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBindingOutputReference(this, "role_binding");
  public get roleBinding() {
    return this._roleBinding;
  }
  public putRoleBinding(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRoleBinding) {
    this._roleBinding.internalValue = value;
  }
  public resetRoleBinding() {
    this._roleBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBindingInput() {
    return this._roleBinding.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBinding[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingOutputReference {
    return new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecrets {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#name DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecretsToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecretsToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecretsOutputReference {
    return new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#annotations DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#finalizers DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#labels DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#name DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#namespace DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountMetadataToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountMetadataToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountMetadata | cdktf.IResolvable): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._finalizers = undefined;
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
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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
}
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecrets {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#api_version DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#field_path DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#kind DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#name DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#namespace DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#resource_version DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#uid DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecretsToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecretsToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecrets | cdktf.IResolvable): any {
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
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecrets | cdktf.IResolvable | undefined {
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
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecretsOutputReference {
    return new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccount {
  /**
  * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#api_version DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * AutomountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. Can be overridden at the pod level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#automount_service_account_token DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#image_pull_secrets DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#kind DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#metadata DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountMetadata;
  /**
  * Secrets is a list of the secrets in the same namespace that pods running using this ServiceAccount are allowed to use. Pods are only limited to this list if this service account has a 'kubernetes.io/enforce-mountable-secrets' annotation set to 'true'. This field should not be used to find auto-generated service account token secrets for use outside of pods. Instead, tokens can be requested directly using the TokenRequest API, or service account token secrets can be manually created. More info: https://kubernetes.io/docs/concepts/configuration/secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#secrets DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#secrets}
  */
  readonly secrets?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecrets[] | cdktf.IResolvable;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    image_pull_secrets: cdktf.listMapper(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    kind: cdktf.stringToTerraform(struct!.kind),
    metadata: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountMetadataToTerraform(struct!.metadata),
    secrets: cdktf.listMapper(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecretsToTerraform, false)(struct!.secrets),
  }
}


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccount | cdktf.IResolvable): any {
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
    automount_service_account_token: {
      value: cdktf.booleanToHclTerraform(struct!.automountServiceAccountToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecretsList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountMetadata",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecretsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._automountServiceAccountToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.automountServiceAccountToken = this._automountServiceAccountToken;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._automountServiceAccountToken = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._kind = undefined;
      this._metadata.internalValue = undefined;
      this._secrets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._automountServiceAccountToken = value.automountServiceAccountToken;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._kind = value.kind;
      this._metadata.internalValue = value.metadata;
      this._secrets.internalValue = value.secrets;
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

  // automount_service_account_token - computed: false, optional: true, required: false
  private _automountServiceAccountToken?: boolean | cdktf.IResolvable; 
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }
  public set automountServiceAccountToken(value: boolean | cdktf.IResolvable) {
    this._automountServiceAccountToken = value;
  }
  public resetAutomountServiceAccountToken() {
    this._automountServiceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automountServiceAccountTokenInput() {
    return this._automountServiceAccountToken;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }
}
export interface DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpec {
  /**
  * AccessClusterRoleBinding represents rbac ClusterRoleBinding plus detailed ClusterRole info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#access_cluster_role_binding DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#access_cluster_role_binding}
  */
  readonly accessClusterRoleBinding?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBinding[] | cdktf.IResolvable;
  /**
  * AccessRoleBinding represents rbac rolebinding plus detailed role info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#access_role_binding DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#access_role_binding}
  */
  readonly accessRoleBinding?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBinding[] | cdktf.IResolvable;
  /**
  * ServiceAccount is one-to-one corresponding relations with the serviceaccountaccess.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#service_account DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#service_account}
  */
  readonly serviceAccount?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccount;
  /**
  * ServiceAccountUID is the uid of serviceaccount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#service_account_uid DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest#service_account_uid}
  */
  readonly serviceAccountUid?: string;
}

export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecToTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_cluster_role_binding: cdktf.listMapper(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingToTerraform, false)(struct!.accessClusterRoleBinding),
    access_role_binding: cdktf.listMapper(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingToTerraform, false)(struct!.accessRoleBinding),
    service_account: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountToTerraform(struct!.serviceAccount),
    service_account_uid: cdktf.stringToTerraform(struct!.serviceAccountUid),
  }
}


export function dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_cluster_role_binding: {
      value: cdktf.listMapperHcl(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingToHclTerraform, false)(struct!.accessClusterRoleBinding),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingList",
    },
    access_role_binding: {
      value: cdktf.listMapperHcl(dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingToHclTerraform, false)(struct!.accessRoleBinding),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingList",
    },
    service_account: {
      value: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccount",
    },
    service_account_uid: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessClusterRoleBinding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessClusterRoleBinding = this._accessClusterRoleBinding?.internalValue;
    }
    if (this._accessRoleBinding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRoleBinding = this._accessRoleBinding?.internalValue;
    }
    if (this._serviceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount?.internalValue;
    }
    if (this._serviceAccountUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountUid = this._serviceAccountUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessClusterRoleBinding.internalValue = undefined;
      this._accessRoleBinding.internalValue = undefined;
      this._serviceAccount.internalValue = undefined;
      this._serviceAccountUid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessClusterRoleBinding.internalValue = value.accessClusterRoleBinding;
      this._accessRoleBinding.internalValue = value.accessRoleBinding;
      this._serviceAccount.internalValue = value.serviceAccount;
      this._serviceAccountUid = value.serviceAccountUid;
    }
  }

  // access_cluster_role_binding - computed: false, optional: true, required: false
  private _accessClusterRoleBinding = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBindingList(this, "access_cluster_role_binding", false);
  public get accessClusterRoleBinding() {
    return this._accessClusterRoleBinding;
  }
  public putAccessClusterRoleBinding(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessClusterRoleBinding[] | cdktf.IResolvable) {
    this._accessClusterRoleBinding.internalValue = value;
  }
  public resetAccessClusterRoleBinding() {
    this._accessClusterRoleBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessClusterRoleBindingInput() {
    return this._accessClusterRoleBinding.internalValue;
  }

  // access_role_binding - computed: false, optional: true, required: false
  private _accessRoleBinding = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBindingList(this, "access_role_binding", false);
  public get accessRoleBinding() {
    return this._accessRoleBinding;
  }
  public putAccessRoleBinding(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecAccessRoleBinding[] | cdktf.IResolvable) {
    this._accessRoleBinding.internalValue = value;
  }
  public resetAccessRoleBinding() {
    this._accessRoleBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRoleBindingInput() {
    return this._accessRoleBinding.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // service_account_uid - computed: false, optional: true, required: false
  private _serviceAccountUid?: string; 
  public get serviceAccountUid() {
    return this.getStringAttribute('service_account_uid');
  }
  public set serviceAccountUid(value: string) {
    this._serviceAccountUid = value;
  }
  public resetServiceAccountUid() {
    this._serviceAccountUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountUidInput() {
    return this._serviceAccountUid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest k8s_policy_kubeedge_io_service_account_access_v1alpha1_manifest}
*/
export class DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_policy_kubeedge_io_service_account_access_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_policy_kubeedge_io_service_account_access_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/policy_kubeedge_io_service_account_access_v1alpha1_manifest k8s_policy_kubeedge_io_service_account_access_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_policy_kubeedge_io_service_account_access_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpec) {
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
      metadata: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPolicyKubeedgeIoServiceAccountAccessV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
