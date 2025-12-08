// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#metadata DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestMetadata;
  /**
  * TenantSpec defines the desired state of Tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#spec DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpec;
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#annotations DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#labels DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#name DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjects {
  /**
  * APIGroup holds the API group of the referenced subject. Defaults to '' for ServiceAccount subjects. Defaults to 'rbac.authorization.k8s.io' for User and Group subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#api_group DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind of object being referenced. Values defined by this API group are 'User', 'Group', and 'ServiceAccount'. If the Authorizer does not recognized the kind value, the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#kind DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the object being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#name DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referenced object. If the object kind is non-namespace, such as 'User' or 'Group', and this value is not empty the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#namespace DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjectsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjects | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjectsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjects | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjects | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjectsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#cluster_role_name DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#cluster_role_name}
  */
  readonly clusterRoleName: string;
  /**
  * kubebuilder:validation:Minimum=1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#subjects DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#subjects}
  */
  readonly subjects: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjects[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_role_name: cdktf.stringToTerraform(struct!.clusterRoleName),
    subjects: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_role_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoleName = this._clusterRoleName;
    }
    if (this._subjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterRoleName = undefined;
      this._subjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterRoleName = value.clusterRoleName;
      this._subjects.internalValue = value.subjects;
    }
  }

  // cluster_role_name - computed: false, optional: false, required: true
  private _clusterRoleName?: string; 
  public get clusterRoleName() {
    return this.getStringAttribute('cluster_role_name');
  }
  public set clusterRoleName(value: string) {
    this._clusterRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleNameInput() {
    return this._clusterRoleName;
  }

  // subjects - computed: false, optional: false, required: true
  private _subjects = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsSubjects[] | cdktf.IResolvable) {
    this._subjects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects.internalValue;
  }
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecContainerRegistries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#allowed DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#allowed}
  */
  readonly allowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#allowed_regex DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#allowed_regex}
  */
  readonly allowedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecContainerRegistriesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecContainerRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    allowed_regex: cdktf.stringToTerraform(struct!.allowedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecContainerRegistriesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecContainerRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_regex: {
      value: cdktf.stringToHclTerraform(struct!.allowedRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecContainerRegistriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecContainerRegistries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._allowedRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRegex = this._allowedRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecContainerRegistries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._allowedRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._allowedRegex = value.allowedRegex;
    }
  }

  // allowed - computed: false, optional: true, required: false
  private _allowed?: string[]; 
  public get allowed() {
    return this.getListAttribute('allowed');
  }
  public set allowed(value: string[]) {
    this._allowed = value;
  }
  public resetAllowed() {
    this._allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // allowed_regex - computed: false, optional: true, required: false
  private _allowedRegex?: string; 
  public get allowedRegex() {
    return this.getStringAttribute('allowed_regex');
  }
  public set allowedRegex(value: string) {
    this._allowedRegex = value;
  }
  public resetAllowedRegex() {
    this._allowedRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegexInput() {
    return this._allowedRegex;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecExternalServiceIPs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#allowed DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#allowed}
  */
  readonly allowed: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecExternalServiceIPsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecExternalServiceIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecExternalServiceIPsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecExternalServiceIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecExternalServiceIPsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecExternalServiceIPs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecExternalServiceIPs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
    }
  }

  // allowed - computed: false, optional: false, required: true
  private _allowed?: string[]; 
  public get allowed() {
    return this.getListAttribute('allowed');
  }
  public set allowed(value: string[]) {
    this._allowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#allowed DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#allowed}
  */
  readonly allowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#allowed_regex DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#allowed_regex}
  */
  readonly allowedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressClassesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    allowed_regex: cdktf.stringToTerraform(struct!.allowedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressClassesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_regex: {
      value: cdktf.stringToHclTerraform(struct!.allowedRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressClassesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._allowedRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRegex = this._allowedRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._allowedRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._allowedRegex = value.allowedRegex;
    }
  }

  // allowed - computed: false, optional: true, required: false
  private _allowed?: string[]; 
  public get allowed() {
    return this.getListAttribute('allowed');
  }
  public set allowed(value: string[]) {
    this._allowed = value;
  }
  public resetAllowed() {
    this._allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // allowed_regex - computed: false, optional: true, required: false
  private _allowedRegex?: string; 
  public get allowedRegex() {
    return this.getStringAttribute('allowed_regex');
  }
  public set allowedRegex(value: string) {
    this._allowedRegex = value;
  }
  public resetAllowedRegex() {
    this._allowedRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegexInput() {
    return this._allowedRegex;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressHostnames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#allowed DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#allowed}
  */
  readonly allowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#allowed_regex DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#allowed_regex}
  */
  readonly allowedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressHostnamesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressHostnames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    allowed_regex: cdktf.stringToTerraform(struct!.allowedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressHostnamesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressHostnames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_regex: {
      value: cdktf.stringToHclTerraform(struct!.allowedRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressHostnamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressHostnames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._allowedRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRegex = this._allowedRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressHostnames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._allowedRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._allowedRegex = value.allowedRegex;
    }
  }

  // allowed - computed: false, optional: true, required: false
  private _allowed?: string[]; 
  public get allowed() {
    return this.getListAttribute('allowed');
  }
  public set allowed(value: string[]) {
    this._allowed = value;
  }
  public resetAllowed() {
    this._allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // allowed_regex - computed: false, optional: true, required: false
  private _allowedRegex?: string; 
  public get allowedRegex() {
    return this.getStringAttribute('allowed_regex');
  }
  public set allowedRegex(value: string) {
    this._allowedRegex = value;
  }
  public resetAllowedRegex() {
    this._allowedRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegexInput() {
    return this._allowedRegex;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimits {
  /**
  * Default resource requirement limit value by resource name if resource limit is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#default DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#default_request DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#default_request}
  */
  readonly defaultRequest?: { [key: string]: string };
  /**
  * Max usage constraints on this kind by resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#max DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#max}
  */
  readonly max?: { [key: string]: string };
  /**
  * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#max_limit_request_ratio DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#max_limit_request_ratio}
  */
  readonly maxLimitRequestRatio?: { [key: string]: string };
  /**
  * Min usage constraints on this kind by resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#min DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#min}
  */
  readonly min?: { [key: string]: string };
  /**
  * Type of resource that this limit applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#type DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimitsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.default),
    default_request: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.defaultRequest),
    max: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.max),
    max_limit_request_ratio: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.maxLimitRequestRatio),
    min: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.min),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimitsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.default),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    default_request: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.defaultRequest),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.max),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max_limit_request_ratio: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.maxLimitRequestRatio),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    min: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.min),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._defaultRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRequest = this._defaultRequest;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._maxLimitRequestRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLimitRequestRatio = this._maxLimitRequestRatio;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._defaultRequest = undefined;
      this._max = undefined;
      this._maxLimitRequestRatio = undefined;
      this._min = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._defaultRequest = value.defaultRequest;
      this._max = value.max;
      this._maxLimitRequestRatio = value.maxLimitRequestRatio;
      this._min = value.min;
      this._type = value.type;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: { [key: string]: string }; 
  public get default() {
    return this.getStringMapAttribute('default');
  }
  public set default(value: { [key: string]: string }) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // default_request - computed: false, optional: true, required: false
  private _defaultRequest?: { [key: string]: string }; 
  public get defaultRequest() {
    return this.getStringMapAttribute('default_request');
  }
  public set defaultRequest(value: { [key: string]: string }) {
    this._defaultRequest = value;
  }
  public resetDefaultRequest() {
    this._defaultRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRequestInput() {
    return this._defaultRequest;
  }

  // max - computed: false, optional: true, required: false
  private _max?: { [key: string]: string }; 
  public get max() {
    return this.getStringMapAttribute('max');
  }
  public set max(value: { [key: string]: string }) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // max_limit_request_ratio - computed: false, optional: true, required: false
  private _maxLimitRequestRatio?: { [key: string]: string }; 
  public get maxLimitRequestRatio() {
    return this.getStringMapAttribute('max_limit_request_ratio');
  }
  public set maxLimitRequestRatio(value: { [key: string]: string }) {
    this._maxLimitRequestRatio = value;
  }
  public resetMaxLimitRequestRatio() {
    this._maxLimitRequestRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLimitRequestRatioInput() {
    return this._maxLimitRequestRatio;
  }

  // min - computed: false, optional: true, required: false
  private _min?: { [key: string]: string }; 
  public get min() {
    return this.getStringMapAttribute('min');
  }
  public set min(value: { [key: string]: string }) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimitsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimits[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimitsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRanges {
  /**
  * Limits is the list of LimitRangeItem objects that are enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#limits DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#limits}
  */
  readonly limits: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimits[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimitsToTerraform, false)(struct!.limits),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimitsToHclTerraform, false)(struct!.limits),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits.internalValue = value.limits;
    }
  }

  // limits - computed: false, optional: false, required: true
  private _limits = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimitsList(this, "limits", false);
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesLimits[] | cdktf.IResolvable) {
    this._limits.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRanges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNamespacesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#additional_annotations DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#additional_annotations}
  */
  readonly additionalAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#additional_labels DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#additional_labels}
  */
  readonly additionalLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNamespacesMetadataToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNamespacesMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalAnnotations),
    additional_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNamespacesMetadataToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNamespacesMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    additional_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNamespacesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNamespacesMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAnnotations = this._additionalAnnotations;
    }
    if (this._additionalLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLabels = this._additionalLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNamespacesMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalAnnotations = undefined;
      this._additionalLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalAnnotations = value.additionalAnnotations;
      this._additionalLabels = value.additionalLabels;
    }
  }

  // additional_annotations - computed: false, optional: true, required: false
  private _additionalAnnotations?: { [key: string]: string }; 
  public get additionalAnnotations() {
    return this.getStringMapAttribute('additional_annotations');
  }
  public set additionalAnnotations(value: { [key: string]: string }) {
    this._additionalAnnotations = value;
  }
  public resetAdditionalAnnotations() {
    this._additionalAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAnnotationsInput() {
    return this._additionalAnnotations;
  }

  // additional_labels - computed: false, optional: true, required: false
  private _additionalLabels?: { [key: string]: string }; 
  public get additionalLabels() {
    return this.getStringMapAttribute('additional_labels');
  }
  public set additionalLabels(value: { [key: string]: string }) {
    this._additionalLabels = value;
  }
  public resetAdditionalLabels() {
    this._additionalLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLabelsInput() {
    return this._additionalLabels;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPorts {
  /**
  * endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#end_port DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * port represents the port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#port DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#port}
  */
  readonly port?: string;
  /**
  * protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#protocol DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPortsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPortsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPortsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToIpBlock {
  /**
  * cidr is a string representing the IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#cidr DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * except is a slice of CIDRs that should not be included within an IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64' Except values will be rejected if they are outside the cidr range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#except DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToIpBlockToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToIpBlockToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToIpBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToIpBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToIpBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._except = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._except = value.except;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#key DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#operator DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#values DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#key DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#operator DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#values DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressTo {
  /**
  * ipBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#ip_block DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#ip_block}
  */
  readonly ipBlock?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToIpBlock;
  /**
  * namespaceSelector selects namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces. If podSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the namespaces selected by namespaceSelector. Otherwise it selects all pods in the namespaces selected by namespaceSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#namespace_selector DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelector;
  /**
  * podSelector is a label selector which selects pods. This field follows standard label selector semantics; if present but empty, it selects all pods. If namespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the pods matching podSelector in the policy's own namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#pod_selector DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelector;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToIpBlockToTerraform(struct!.ipBlock),
    namespace_selector: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorToTerraform(struct!.podSelector),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_block: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToIpBlockToHclTerraform(struct!.ipBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToIpBlock",
    },
    namespace_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelector",
    },
    pod_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlock = this._ipBlock?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlock.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._podSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlock.internalValue = value.ipBlock;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._podSelector.internalValue = value.podSelector;
    }
  }

  // ip_block - computed: false, optional: true, required: false
  private _ipBlock = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToIpBlockOutputReference(this, "ip_block");
  public get ipBlock() {
    return this._ipBlock;
  }
  public putIpBlock(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToIpBlock) {
    this._ipBlock.internalValue = value;
  }
  public resetIpBlock() {
    this._ipBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlockInput() {
    return this._ipBlock.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgress {
  /**
  * ports is a list of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#ports DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPorts[] | cdktf.IResolvable;
  /**
  * to is a list of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#to DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#to}
  */
  readonly to?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressTo[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPortsToTerraform, false)(struct!.ports),
    to: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToToTerraform, false)(struct!.to),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPortsList",
    },
    to: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToToHclTerraform, false)(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ports.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ports.internalValue = value.ports;
      this._to.internalValue = value.to;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToList(this, "to", false);
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressTo[] | cdktf.IResolvable) {
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromIpBlock {
  /**
  * cidr is a string representing the IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#cidr DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * except is a slice of CIDRs that should not be included within an IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64' Except values will be rejected if they are outside the cidr range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#except DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromIpBlockToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromIpBlockToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromIpBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromIpBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromIpBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._except = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._except = value.except;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#key DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#operator DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#values DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#key DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#operator DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#values DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFrom {
  /**
  * ipBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#ip_block DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#ip_block}
  */
  readonly ipBlock?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromIpBlock;
  /**
  * namespaceSelector selects namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces. If podSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the namespaces selected by namespaceSelector. Otherwise it selects all pods in the namespaces selected by namespaceSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#namespace_selector DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelector;
  /**
  * podSelector is a label selector which selects pods. This field follows standard label selector semantics; if present but empty, it selects all pods. If namespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the pods matching podSelector in the policy's own namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#pod_selector DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelector;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromIpBlockToTerraform(struct!.ipBlock),
    namespace_selector: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorToTerraform(struct!.podSelector),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_block: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromIpBlockToHclTerraform(struct!.ipBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromIpBlock",
    },
    namespace_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelector",
    },
    pod_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlock = this._ipBlock?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlock.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._podSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlock.internalValue = value.ipBlock;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._podSelector.internalValue = value.podSelector;
    }
  }

  // ip_block - computed: false, optional: true, required: false
  private _ipBlock = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromIpBlockOutputReference(this, "ip_block");
  public get ipBlock() {
    return this._ipBlock;
  }
  public putIpBlock(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromIpBlock) {
    this._ipBlock.internalValue = value;
  }
  public resetIpBlock() {
    this._ipBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlockInput() {
    return this._ipBlock.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPorts {
  /**
  * endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#end_port DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * port represents the port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#port DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#port}
  */
  readonly port?: string;
  /**
  * protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#protocol DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPortsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPortsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPortsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngress {
  /**
  * from is a list of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the from list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#from DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFrom[] | cdktf.IResolvable;
  /**
  * ports is a list of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#ports DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPorts[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromToTerraform, false)(struct!.from),
    ports: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPortsToTerraform, false)(struct!.ports),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromToHclTerraform, false)(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
      this._ports.internalValue = value.ports;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFromList(this, "from", false);
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressFrom[] | cdktf.IResolvable) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#key DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#operator DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#values DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPolicies {
  /**
  * egress is a list of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#egress DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#egress}
  */
  readonly egress?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgress[] | cdktf.IResolvable;
  /**
  * ingress is a list of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#ingress DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#ingress}
  */
  readonly ingress?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngress[] | cdktf.IResolvable;
  /**
  * podSelector selects the pods to which this NetworkPolicy object applies. The array of ingress rules is applied to any pods selected by this field. Multiple network policies can select the same set of pods. In this case, the ingress rules for each are combined additively. This field is NOT optional and follows standard label selector semantics. An empty podSelector matches all pods in this namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#pod_selector DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelector;
  /**
  * policyTypes is a list of rule types that the NetworkPolicy relates to. Valid options are ['Ingress'], ['Egress'], or ['Ingress', 'Egress']. If this field is not specified, it will default based on the existence of ingress or egress rules; policies that contain an egress section are assumed to affect egress, and all policies (whether or not they contain an ingress section) are assumed to affect ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ 'Egress' ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include 'Egress' (since such a policy would not include an egress section and would otherwise default to just [ 'Ingress' ]). This field is beta-level in 1.8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#policy_types DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#policy_types}
  */
  readonly policyTypes?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToTerraform, false)(struct!.egress),
    ingress: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressToTerraform, false)(struct!.ingress),
    pod_selector: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorToTerraform(struct!.podSelector),
    policy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyTypes),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressToHclTerraform, false)(struct!.egress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressList",
    },
    ingress: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressToHclTerraform, false)(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressList",
    },
    pod_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelector",
    },
    policy_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    if (this._policyTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyTypes = this._policyTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egress.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._podSelector.internalValue = undefined;
      this._policyTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egress.internalValue = value.egress;
      this._ingress.internalValue = value.ingress;
      this._podSelector.internalValue = value.podSelector;
      this._policyTypes = value.policyTypes;
    }
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgressList(this, "egress", false);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesEgress[] | cdktf.IResolvable) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // pod_selector - computed: false, optional: false, required: true
  private _podSelector = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesPodSelector) {
    this._podSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }

  // policy_types - computed: false, optional: true, required: false
  private _policyTypes?: string[]; 
  public get policyTypes() {
    return this.getListAttribute('policy_types');
  }
  public set policyTypes(value: string[]) {
    this._policyTypes = value;
  }
  public resetPolicyTypes() {
    this._policyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypesInput() {
    return this._policyTypes;
  }
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOwner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#kind DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#name DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOwnerToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOwnerToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOwner | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOwner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOwner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
    }
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
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressions {
  /**
  * Represents a scope's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#operator DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * The name of the scope that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#scope_name DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#scope_name}
  */
  readonly scopeName: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#values DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    scope_name: cdktf.stringToTerraform(struct!.scopeName),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope_name: {
      value: cdktf.stringToHclTerraform(struct!.scopeName),
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._scopeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeName = this._scopeName;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._scopeName = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._scopeName = value.scopeName;
      this._values = value.values;
    }
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

  // scope_name - computed: false, optional: false, required: true
  private _scopeName?: string; 
  public get scopeName() {
    return this.getStringAttribute('scope_name');
  }
  public set scopeName(value: string) {
    this._scopeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeNameInput() {
    return this._scopeName;
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

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelector {
  /**
  * A list of scope selector requirements by scope of the resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotas {
  /**
  * hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#hard DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#hard}
  */
  readonly hard?: { [key: string]: string };
  /**
  * scopeSelector is also a collection of filters like scopes that must match each object tracked by a quota but expressed using ScopeSelectorOperator in combination with possible values. For a resource to match, both scopes AND scopeSelector (if specified in spec), must be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#scope_selector DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#scope_selector}
  */
  readonly scopeSelector?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelector;
  /**
  * A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#scopes DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hard: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hard),
    scope_selector: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorToTerraform(struct!.scopeSelector),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hard: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hard),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    scope_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorToHclTerraform(struct!.scopeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelector",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hard !== undefined) {
      hasAnyValues = true;
      internalValueResult.hard = this._hard;
    }
    if (this._scopeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeSelector = this._scopeSelector?.internalValue;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hard = undefined;
      this._scopeSelector.internalValue = undefined;
      this._scopes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hard = value.hard;
      this._scopeSelector.internalValue = value.scopeSelector;
      this._scopes = value.scopes;
    }
  }

  // hard - computed: false, optional: true, required: false
  private _hard?: { [key: string]: string }; 
  public get hard() {
    return this.getStringMapAttribute('hard');
  }
  public set hard(value: { [key: string]: string }) {
    this._hard = value;
  }
  public resetHard() {
    this._hard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardInput() {
    return this._hard;
  }

  // scope_selector - computed: false, optional: true, required: false
  private _scopeSelector = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelectorOutputReference(this, "scope_selector");
  public get scopeSelector() {
    return this._scopeSelector;
  }
  public putScopeSelector(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasScopeSelector) {
    this._scopeSelector.internalValue = value;
  }
  public resetScopeSelector() {
    this._scopeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeSelectorInput() {
    return this._scopeSelector.internalValue;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotas[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecServicesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#additional_annotations DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#additional_annotations}
  */
  readonly additionalAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#additional_labels DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#additional_labels}
  */
  readonly additionalLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecServicesMetadataToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecServicesMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalAnnotations),
    additional_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecServicesMetadataToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecServicesMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    additional_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecServicesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecServicesMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAnnotations = this._additionalAnnotations;
    }
    if (this._additionalLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLabels = this._additionalLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecServicesMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalAnnotations = undefined;
      this._additionalLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalAnnotations = value.additionalAnnotations;
      this._additionalLabels = value.additionalLabels;
    }
  }

  // additional_annotations - computed: false, optional: true, required: false
  private _additionalAnnotations?: { [key: string]: string }; 
  public get additionalAnnotations() {
    return this.getStringMapAttribute('additional_annotations');
  }
  public set additionalAnnotations(value: { [key: string]: string }) {
    this._additionalAnnotations = value;
  }
  public resetAdditionalAnnotations() {
    this._additionalAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAnnotationsInput() {
    return this._additionalAnnotations;
  }

  // additional_labels - computed: false, optional: true, required: false
  private _additionalLabels?: { [key: string]: string }; 
  public get additionalLabels() {
    return this.getStringMapAttribute('additional_labels');
  }
  public set additionalLabels(value: { [key: string]: string }) {
    this._additionalLabels = value;
  }
  public resetAdditionalLabels() {
    this._additionalLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLabelsInput() {
    return this._additionalLabels;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecStorageClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#allowed DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#allowed}
  */
  readonly allowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#allowed_regex DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#allowed_regex}
  */
  readonly allowedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecStorageClassesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    allowed_regex: cdktf.stringToTerraform(struct!.allowedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecStorageClassesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_regex: {
      value: cdktf.stringToHclTerraform(struct!.allowedRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecStorageClassesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecStorageClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._allowedRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRegex = this._allowedRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecStorageClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._allowedRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._allowedRegex = value.allowedRegex;
    }
  }

  // allowed - computed: false, optional: true, required: false
  private _allowed?: string[]; 
  public get allowed() {
    return this.getListAttribute('allowed');
  }
  public set allowed(value: string[]) {
    this._allowed = value;
  }
  public resetAllowed() {
    this._allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // allowed_regex - computed: false, optional: true, required: false
  private _allowedRegex?: string; 
  public get allowedRegex() {
    return this.getStringAttribute('allowed_regex');
  }
  public set allowedRegex(value: string) {
    this._allowedRegex = value;
  }
  public resetAllowedRegex() {
    this._allowedRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegexInput() {
    return this._allowedRegex;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#additional_role_bindings DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#additional_role_bindings}
  */
  readonly additionalRoleBindings?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindings[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#container_registries DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#container_registries}
  */
  readonly containerRegistries?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecContainerRegistries;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#external_service_i_ps DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#external_service_i_ps}
  */
  readonly externalServiceIPs?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecExternalServiceIPs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#ingress_classes DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#ingress_classes}
  */
  readonly ingressClasses?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressClasses;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#ingress_hostnames DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#ingress_hostnames}
  */
  readonly ingressHostnames?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressHostnames;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#limit_ranges DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#limit_ranges}
  */
  readonly limitRanges?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRanges[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#namespace_quota DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#namespace_quota}
  */
  readonly namespaceQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#namespaces_metadata DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#namespaces_metadata}
  */
  readonly namespacesMetadata?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNamespacesMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#network_policies DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#network_policies}
  */
  readonly networkPolicies?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPolicies[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#node_selector DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * OwnerSpec defines tenant owner name and kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#owner DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#owner}
  */
  readonly owner: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOwner;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#resource_quotas DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#resource_quotas}
  */
  readonly resourceQuotas?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotas[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#services_metadata DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#services_metadata}
  */
  readonly servicesMetadata?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecServicesMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#storage_classes DataK8SCapsuleClastixIoTenantV1Alpha1Manifest#storage_classes}
  */
  readonly storageClasses?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecStorageClasses;
}

export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_role_bindings: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsToTerraform, false)(struct!.additionalRoleBindings),
    container_registries: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecContainerRegistriesToTerraform(struct!.containerRegistries),
    external_service_i_ps: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecExternalServiceIPsToTerraform(struct!.externalServiceIPs),
    ingress_classes: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressClassesToTerraform(struct!.ingressClasses),
    ingress_hostnames: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressHostnamesToTerraform(struct!.ingressHostnames),
    limit_ranges: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesToTerraform, false)(struct!.limitRanges),
    namespace_quota: cdktf.numberToTerraform(struct!.namespaceQuota),
    namespaces_metadata: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNamespacesMetadataToTerraform(struct!.namespacesMetadata),
    network_policies: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesToTerraform, false)(struct!.networkPolicies),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    owner: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOwnerToTerraform(struct!.owner),
    resource_quotas: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasToTerraform, false)(struct!.resourceQuotas),
    services_metadata: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecServicesMetadataToTerraform(struct!.servicesMetadata),
    storage_classes: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecStorageClassesToTerraform(struct!.storageClasses),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_role_bindings: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsToHclTerraform, false)(struct!.additionalRoleBindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsList",
    },
    container_registries: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecContainerRegistriesToHclTerraform(struct!.containerRegistries),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecContainerRegistries",
    },
    external_service_i_ps: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecExternalServiceIPsToHclTerraform(struct!.externalServiceIPs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecExternalServiceIPs",
    },
    ingress_classes: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressClassesToHclTerraform(struct!.ingressClasses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressClasses",
    },
    ingress_hostnames: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressHostnamesToHclTerraform(struct!.ingressHostnames),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressHostnames",
    },
    limit_ranges: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesToHclTerraform, false)(struct!.limitRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesList",
    },
    namespace_quota: {
      value: cdktf.numberToHclTerraform(struct!.namespaceQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    namespaces_metadata: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNamespacesMetadataToHclTerraform(struct!.namespacesMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNamespacesMetadata",
    },
    network_policies: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesToHclTerraform, false)(struct!.networkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesList",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    owner: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOwnerToHclTerraform(struct!.owner),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOwner",
    },
    resource_quotas: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasToHclTerraform, false)(struct!.resourceQuotas),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasList",
    },
    services_metadata: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecServicesMetadataToHclTerraform(struct!.servicesMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecServicesMetadata",
    },
    storage_classes: {
      value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecStorageClassesToHclTerraform(struct!.storageClasses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecStorageClasses",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRoleBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRoleBindings = this._additionalRoleBindings?.internalValue;
    }
    if (this._containerRegistries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerRegistries = this._containerRegistries?.internalValue;
    }
    if (this._externalServiceIPs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalServiceIPs = this._externalServiceIPs?.internalValue;
    }
    if (this._ingressClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClasses = this._ingressClasses?.internalValue;
    }
    if (this._ingressHostnames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressHostnames = this._ingressHostnames?.internalValue;
    }
    if (this._limitRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitRanges = this._limitRanges?.internalValue;
    }
    if (this._namespaceQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceQuota = this._namespaceQuota;
    }
    if (this._namespacesMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacesMetadata = this._namespacesMetadata?.internalValue;
    }
    if (this._networkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicies = this._networkPolicies?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    if (this._resourceQuotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceQuotas = this._resourceQuotas?.internalValue;
    }
    if (this._servicesMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesMetadata = this._servicesMetadata?.internalValue;
    }
    if (this._storageClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClasses = this._storageClasses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalRoleBindings.internalValue = undefined;
      this._containerRegistries.internalValue = undefined;
      this._externalServiceIPs.internalValue = undefined;
      this._ingressClasses.internalValue = undefined;
      this._ingressHostnames.internalValue = undefined;
      this._limitRanges.internalValue = undefined;
      this._namespaceQuota = undefined;
      this._namespacesMetadata.internalValue = undefined;
      this._networkPolicies.internalValue = undefined;
      this._nodeSelector = undefined;
      this._owner.internalValue = undefined;
      this._resourceQuotas.internalValue = undefined;
      this._servicesMetadata.internalValue = undefined;
      this._storageClasses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalRoleBindings.internalValue = value.additionalRoleBindings;
      this._containerRegistries.internalValue = value.containerRegistries;
      this._externalServiceIPs.internalValue = value.externalServiceIPs;
      this._ingressClasses.internalValue = value.ingressClasses;
      this._ingressHostnames.internalValue = value.ingressHostnames;
      this._limitRanges.internalValue = value.limitRanges;
      this._namespaceQuota = value.namespaceQuota;
      this._namespacesMetadata.internalValue = value.namespacesMetadata;
      this._networkPolicies.internalValue = value.networkPolicies;
      this._nodeSelector = value.nodeSelector;
      this._owner.internalValue = value.owner;
      this._resourceQuotas.internalValue = value.resourceQuotas;
      this._servicesMetadata.internalValue = value.servicesMetadata;
      this._storageClasses.internalValue = value.storageClasses;
    }
  }

  // additional_role_bindings - computed: false, optional: true, required: false
  private _additionalRoleBindings = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindingsList(this, "additional_role_bindings", false);
  public get additionalRoleBindings() {
    return this._additionalRoleBindings;
  }
  public putAdditionalRoleBindings(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecAdditionalRoleBindings[] | cdktf.IResolvable) {
    this._additionalRoleBindings.internalValue = value;
  }
  public resetAdditionalRoleBindings() {
    this._additionalRoleBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRoleBindingsInput() {
    return this._additionalRoleBindings.internalValue;
  }

  // container_registries - computed: false, optional: true, required: false
  private _containerRegistries = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecContainerRegistriesOutputReference(this, "container_registries");
  public get containerRegistries() {
    return this._containerRegistries;
  }
  public putContainerRegistries(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecContainerRegistries) {
    this._containerRegistries.internalValue = value;
  }
  public resetContainerRegistries() {
    this._containerRegistries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistriesInput() {
    return this._containerRegistries.internalValue;
  }

  // external_service_i_ps - computed: false, optional: true, required: false
  private _externalServiceIPs = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecExternalServiceIPsOutputReference(this, "external_service_i_ps");
  public get externalServiceIPs() {
    return this._externalServiceIPs;
  }
  public putExternalServiceIPs(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecExternalServiceIPs) {
    this._externalServiceIPs.internalValue = value;
  }
  public resetExternalServiceIPs() {
    this._externalServiceIPs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalServiceIPsInput() {
    return this._externalServiceIPs.internalValue;
  }

  // ingress_classes - computed: false, optional: true, required: false
  private _ingressClasses = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressClassesOutputReference(this, "ingress_classes");
  public get ingressClasses() {
    return this._ingressClasses;
  }
  public putIngressClasses(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressClasses) {
    this._ingressClasses.internalValue = value;
  }
  public resetIngressClasses() {
    this._ingressClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassesInput() {
    return this._ingressClasses.internalValue;
  }

  // ingress_hostnames - computed: false, optional: true, required: false
  private _ingressHostnames = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressHostnamesOutputReference(this, "ingress_hostnames");
  public get ingressHostnames() {
    return this._ingressHostnames;
  }
  public putIngressHostnames(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecIngressHostnames) {
    this._ingressHostnames.internalValue = value;
  }
  public resetIngressHostnames() {
    this._ingressHostnames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressHostnamesInput() {
    return this._ingressHostnames.internalValue;
  }

  // limit_ranges - computed: false, optional: true, required: false
  private _limitRanges = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRangesList(this, "limit_ranges", false);
  public get limitRanges() {
    return this._limitRanges;
  }
  public putLimitRanges(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecLimitRanges[] | cdktf.IResolvable) {
    this._limitRanges.internalValue = value;
  }
  public resetLimitRanges() {
    this._limitRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitRangesInput() {
    return this._limitRanges.internalValue;
  }

  // namespace_quota - computed: false, optional: true, required: false
  private _namespaceQuota?: number; 
  public get namespaceQuota() {
    return this.getNumberAttribute('namespace_quota');
  }
  public set namespaceQuota(value: number) {
    this._namespaceQuota = value;
  }
  public resetNamespaceQuota() {
    this._namespaceQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceQuotaInput() {
    return this._namespaceQuota;
  }

  // namespaces_metadata - computed: false, optional: true, required: false
  private _namespacesMetadata = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNamespacesMetadataOutputReference(this, "namespaces_metadata");
  public get namespacesMetadata() {
    return this._namespacesMetadata;
  }
  public putNamespacesMetadata(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNamespacesMetadata) {
    this._namespacesMetadata.internalValue = value;
  }
  public resetNamespacesMetadata() {
    this._namespacesMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesMetadataInput() {
    return this._namespacesMetadata.internalValue;
  }

  // network_policies - computed: false, optional: true, required: false
  private _networkPolicies = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPoliciesList(this, "network_policies", false);
  public get networkPolicies() {
    return this._networkPolicies;
  }
  public putNetworkPolicies(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecNetworkPolicies[] | cdktf.IResolvable) {
    this._networkPolicies.internalValue = value;
  }
  public resetNetworkPolicies() {
    this._networkPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoliciesInput() {
    return this._networkPolicies.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // owner - computed: false, optional: false, required: true
  private _owner = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }
  public putOwner(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOwner) {
    this._owner.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // resource_quotas - computed: false, optional: true, required: false
  private _resourceQuotas = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotasList(this, "resource_quotas", false);
  public get resourceQuotas() {
    return this._resourceQuotas;
  }
  public putResourceQuotas(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecResourceQuotas[] | cdktf.IResolvable) {
    this._resourceQuotas.internalValue = value;
  }
  public resetResourceQuotas() {
    this._resourceQuotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceQuotasInput() {
    return this._resourceQuotas.internalValue;
  }

  // services_metadata - computed: false, optional: true, required: false
  private _servicesMetadata = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecServicesMetadataOutputReference(this, "services_metadata");
  public get servicesMetadata() {
    return this._servicesMetadata;
  }
  public putServicesMetadata(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecServicesMetadata) {
    this._servicesMetadata.internalValue = value;
  }
  public resetServicesMetadata() {
    this._servicesMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesMetadataInput() {
    return this._servicesMetadata.internalValue;
  }

  // storage_classes - computed: false, optional: true, required: false
  private _storageClasses = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecStorageClassesOutputReference(this, "storage_classes");
  public get storageClasses() {
    return this._storageClasses;
  }
  public putStorageClasses(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecStorageClasses) {
    this._storageClasses.internalValue = value;
  }
  public resetStorageClasses() {
    this._storageClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassesInput() {
    return this._storageClasses.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest k8s_capsule_clastix_io_tenant_v1alpha1_manifest}
*/
export class DataK8SCapsuleClastixIoTenantV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_capsule_clastix_io_tenant_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCapsuleClastixIoTenantV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCapsuleClastixIoTenantV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCapsuleClastixIoTenantV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCapsuleClastixIoTenantV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_capsule_clastix_io_tenant_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/capsule_clastix_io_tenant_v1alpha1_manifest k8s_capsule_clastix_io_tenant_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCapsuleClastixIoTenantV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_capsule_clastix_io_tenant_v1alpha1_manifest',
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
  private _metadata = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapsuleClastixIoTenantV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
