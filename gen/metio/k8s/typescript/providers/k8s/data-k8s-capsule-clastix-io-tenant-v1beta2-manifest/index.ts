// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#metadata DataK8SCapsuleClastixIoTenantV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SCapsuleClastixIoTenantV1Beta2ManifestMetadata;
  /**
  * TenantSpec defines the desired state of Tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#spec DataK8SCapsuleClastixIoTenantV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpec;
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#annotations DataK8SCapsuleClastixIoTenantV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#labels DataK8SCapsuleClastixIoTenantV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#name DataK8SCapsuleClastixIoTenantV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestMetadataToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjects {
  /**
  * APIGroup holds the API group of the referenced subject. Defaults to '' for ServiceAccount subjects. Defaults to 'rbac.authorization.k8s.io' for User and Group subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#api_group DataK8SCapsuleClastixIoTenantV1Beta2Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind of object being referenced. Values defined by this API group are 'User', 'Group', and 'ServiceAccount'. If the Authorizer does not recognized the kind value, the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#kind DataK8SCapsuleClastixIoTenantV1Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the object being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#name DataK8SCapsuleClastixIoTenantV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referenced object. If the object kind is non-namespace, such as 'User' or 'Group', and this value is not empty the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#namespace DataK8SCapsuleClastixIoTenantV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjectsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjects | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjectsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjects | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjects | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjectsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#cluster_role_name DataK8SCapsuleClastixIoTenantV1Beta2Manifest#cluster_role_name}
  */
  readonly clusterRoleName: string;
  /**
  * kubebuilder:validation:Minimum=1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#subjects DataK8SCapsuleClastixIoTenantV1Beta2Manifest#subjects}
  */
  readonly subjects: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjects[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_role_name: cdktf.stringToTerraform(struct!.clusterRoleName),
    subjects: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindings | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindings | cdktf.IResolvable | undefined) {
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
  private _subjects = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsSubjects[] | cdktf.IResolvable) {
    this._subjects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects.internalValue;
  }
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecContainerRegistries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed}
  */
  readonly allowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed_regex DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed_regex}
  */
  readonly allowedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecContainerRegistriesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecContainerRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    allowed_regex: cdktf.stringToTerraform(struct!.allowedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecContainerRegistriesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecContainerRegistries | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecContainerRegistriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecContainerRegistries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecContainerRegistries | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#key DataK8SCapsuleClastixIoTenantV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#values DataK8SCapsuleClastixIoTenantV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed}
  */
  readonly allowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed_regex DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed_regex}
  */
  readonly allowedRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#default DataK8SCapsuleClastixIoTenantV1Beta2Manifest#default}
  */
  readonly default?: string;
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    allowed_regex: cdktf.stringToTerraform(struct!.allowedRegex),
    default: cdktf.stringToTerraform(struct!.default),
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClasses | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClasses | cdktf.IResolvable | undefined {
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
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._allowedRegex = undefined;
      this._default = undefined;
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
      this._allowed = value.allowed;
      this._allowedRegex = value.allowedRegex;
      this._default = value.default;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedHostnames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed}
  */
  readonly allowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed_regex DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed_regex}
  */
  readonly allowedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedHostnamesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedHostnames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    allowed_regex: cdktf.stringToTerraform(struct!.allowedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedHostnamesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedHostnames | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedHostnamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedHostnames | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedHostnames | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptions {
  /**
  * Toggles the ability for Ingress resources created in a Tenant to have a hostname wildcard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allow_wildcard_hostnames DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allow_wildcard_hostnames}
  */
  readonly allowWildcardHostnames?: boolean | cdktf.IResolvable;
  /**
  * Specifies the allowed IngressClasses assigned to the Tenant. Capsule assures that all Ingress resources created in the Tenant can use only one of the allowed IngressClasses. A default value can be specified, and all the Ingress resources created will inherit the declared class. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed_classes DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed_classes}
  */
  readonly allowedClasses?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClasses;
  /**
  * Specifies the allowed hostnames in Ingresses for the given Tenant. Capsule assures that all Ingress resources created in the Tenant can use only one of the allowed hostnames. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed_hostnames DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed_hostnames}
  */
  readonly allowedHostnames?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedHostnames;
  /**
  * Defines the scope of hostname collision check performed when Tenant Owners create Ingress with allowed hostnames. - Cluster: disallow the creation of an Ingress if the pair hostname and path is already used across the Namespaces managed by Capsule. - Tenant: disallow the creation of an Ingress if the pair hostname and path is already used across the Namespaces of the Tenant. - Namespace: disallow the creation of an Ingress if the pair hostname and path is already used in the Ingress Namespace. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#hostname_collision_scope DataK8SCapsuleClastixIoTenantV1Beta2Manifest#hostname_collision_scope}
  */
  readonly hostnameCollisionScope?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_wildcard_hostnames: cdktf.booleanToTerraform(struct!.allowWildcardHostnames),
    allowed_classes: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesToTerraform(struct!.allowedClasses),
    allowed_hostnames: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedHostnamesToTerraform(struct!.allowedHostnames),
    hostname_collision_scope: cdktf.stringToTerraform(struct!.hostnameCollisionScope),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_wildcard_hostnames: {
      value: cdktf.booleanToHclTerraform(struct!.allowWildcardHostnames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_classes: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesToHclTerraform(struct!.allowedClasses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClasses",
    },
    allowed_hostnames: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedHostnamesToHclTerraform(struct!.allowedHostnames),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedHostnames",
    },
    hostname_collision_scope: {
      value: cdktf.stringToHclTerraform(struct!.hostnameCollisionScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowWildcardHostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowWildcardHostnames = this._allowWildcardHostnames;
    }
    if (this._allowedClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClasses = this._allowedClasses?.internalValue;
    }
    if (this._allowedHostnames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHostnames = this._allowedHostnames?.internalValue;
    }
    if (this._hostnameCollisionScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameCollisionScope = this._hostnameCollisionScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowWildcardHostnames = undefined;
      this._allowedClasses.internalValue = undefined;
      this._allowedHostnames.internalValue = undefined;
      this._hostnameCollisionScope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowWildcardHostnames = value.allowWildcardHostnames;
      this._allowedClasses.internalValue = value.allowedClasses;
      this._allowedHostnames.internalValue = value.allowedHostnames;
      this._hostnameCollisionScope = value.hostnameCollisionScope;
    }
  }

  // allow_wildcard_hostnames - computed: false, optional: true, required: false
  private _allowWildcardHostnames?: boolean | cdktf.IResolvable; 
  public get allowWildcardHostnames() {
    return this.getBooleanAttribute('allow_wildcard_hostnames');
  }
  public set allowWildcardHostnames(value: boolean | cdktf.IResolvable) {
    this._allowWildcardHostnames = value;
  }
  public resetAllowWildcardHostnames() {
    this._allowWildcardHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWildcardHostnamesInput() {
    return this._allowWildcardHostnames;
  }

  // allowed_classes - computed: false, optional: true, required: false
  private _allowedClasses = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClassesOutputReference(this, "allowed_classes");
  public get allowedClasses() {
    return this._allowedClasses;
  }
  public putAllowedClasses(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedClasses) {
    this._allowedClasses.internalValue = value;
  }
  public resetAllowedClasses() {
    this._allowedClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClassesInput() {
    return this._allowedClasses.internalValue;
  }

  // allowed_hostnames - computed: false, optional: true, required: false
  private _allowedHostnames = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedHostnamesOutputReference(this, "allowed_hostnames");
  public get allowedHostnames() {
    return this._allowedHostnames;
  }
  public putAllowedHostnames(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsAllowedHostnames) {
    this._allowedHostnames.internalValue = value;
  }
  public resetAllowedHostnames() {
    this._allowedHostnames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostnamesInput() {
    return this._allowedHostnames.internalValue;
  }

  // hostname_collision_scope - computed: false, optional: true, required: false
  private _hostnameCollisionScope?: string; 
  public get hostnameCollisionScope() {
    return this.getStringAttribute('hostname_collision_scope');
  }
  public set hostnameCollisionScope(value: string) {
    this._hostnameCollisionScope = value;
  }
  public resetHostnameCollisionScope() {
    this._hostnameCollisionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameCollisionScopeInput() {
    return this._hostnameCollisionScope;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimits {
  /**
  * Default resource requirement limit value by resource name if resource limit is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#default DataK8SCapsuleClastixIoTenantV1Beta2Manifest#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#default_request DataK8SCapsuleClastixIoTenantV1Beta2Manifest#default_request}
  */
  readonly defaultRequest?: { [key: string]: string };
  /**
  * Max usage constraints on this kind by resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#max DataK8SCapsuleClastixIoTenantV1Beta2Manifest#max}
  */
  readonly max?: { [key: string]: string };
  /**
  * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#max_limit_request_ratio DataK8SCapsuleClastixIoTenantV1Beta2Manifest#max_limit_request_ratio}
  */
  readonly maxLimitRequestRatio?: { [key: string]: string };
  /**
  * Min usage constraints on this kind by resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#min DataK8SCapsuleClastixIoTenantV1Beta2Manifest#min}
  */
  readonly min?: { [key: string]: string };
  /**
  * Type of resource that this limit applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#type DataK8SCapsuleClastixIoTenantV1Beta2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimitsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimits | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimitsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimits | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimits | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimitsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimits[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimitsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItems {
  /**
  * Limits is the list of LimitRangeItem objects that are enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#limits DataK8SCapsuleClastixIoTenantV1Beta2Manifest#limits}
  */
  readonly limits: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimits[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimitsToTerraform, false)(struct!.limits),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimitsToHclTerraform, false)(struct!.limits),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItems | cdktf.IResolvable | undefined) {
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
  private _limits = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimitsList(this, "limits", false);
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsLimits[] | cdktf.IResolvable) {
    this._limits.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#items DataK8SCapsuleClastixIoTenantV1Beta2Manifest#items}
  */
  readonly items?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItems[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsAdditionalMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#annotations DataK8SCapsuleClastixIoTenantV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#labels DataK8SCapsuleClastixIoTenantV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsAdditionalMetadataToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsAdditionalMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsAdditionalMetadataToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsAdditionalMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsAdditionalMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsAdditionalMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsAdditionalMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenAnnotations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#denied DataK8SCapsuleClastixIoTenantV1Beta2Manifest#denied}
  */
  readonly denied?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#denied_regex DataK8SCapsuleClastixIoTenantV1Beta2Manifest#denied_regex}
  */
  readonly deniedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenAnnotationsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denied),
    denied_regex: cdktf.stringToTerraform(struct!.deniedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenAnnotationsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denied: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denied),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied_regex: {
      value: cdktf.stringToHclTerraform(struct!.deniedRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenAnnotationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denied !== undefined) {
      hasAnyValues = true;
      internalValueResult.denied = this._denied;
    }
    if (this._deniedRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedRegex = this._deniedRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denied = undefined;
      this._deniedRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denied = value.denied;
      this._deniedRegex = value.deniedRegex;
    }
  }

  // denied - computed: false, optional: true, required: false
  private _denied?: string[]; 
  public get denied() {
    return this.getListAttribute('denied');
  }
  public set denied(value: string[]) {
    this._denied = value;
  }
  public resetDenied() {
    this._denied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedInput() {
    return this._denied;
  }

  // denied_regex - computed: false, optional: true, required: false
  private _deniedRegex?: string; 
  public get deniedRegex() {
    return this.getStringAttribute('denied_regex');
  }
  public set deniedRegex(value: string) {
    this._deniedRegex = value;
  }
  public resetDeniedRegex() {
    this._deniedRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedRegexInput() {
    return this._deniedRegex;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#denied DataK8SCapsuleClastixIoTenantV1Beta2Manifest#denied}
  */
  readonly denied?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#denied_regex DataK8SCapsuleClastixIoTenantV1Beta2Manifest#denied_regex}
  */
  readonly deniedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenLabelsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denied),
    denied_regex: cdktf.stringToTerraform(struct!.deniedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenLabelsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denied: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denied),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied_regex: {
      value: cdktf.stringToHclTerraform(struct!.deniedRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denied !== undefined) {
      hasAnyValues = true;
      internalValueResult.denied = this._denied;
    }
    if (this._deniedRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedRegex = this._deniedRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denied = undefined;
      this._deniedRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denied = value.denied;
      this._deniedRegex = value.deniedRegex;
    }
  }

  // denied - computed: false, optional: true, required: false
  private _denied?: string[]; 
  public get denied() {
    return this.getListAttribute('denied');
  }
  public set denied(value: string[]) {
    this._denied = value;
  }
  public resetDenied() {
    this._denied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedInput() {
    return this._denied;
  }

  // denied_regex - computed: false, optional: true, required: false
  private _deniedRegex?: string; 
  public get deniedRegex() {
    return this.getStringAttribute('denied_regex');
  }
  public set deniedRegex(value: string) {
    this._deniedRegex = value;
  }
  public resetDeniedRegex() {
    this._deniedRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedRegexInput() {
    return this._deniedRegex;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptions {
  /**
  * Specifies additional labels and annotations the Capsule operator places on any Namespace resource in the Tenant. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#additional_metadata DataK8SCapsuleClastixIoTenantV1Beta2Manifest#additional_metadata}
  */
  readonly additionalMetadata?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsAdditionalMetadata;
  /**
  * Define the annotations that a Tenant Owner cannot set for their Namespace resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#forbidden_annotations DataK8SCapsuleClastixIoTenantV1Beta2Manifest#forbidden_annotations}
  */
  readonly forbiddenAnnotations?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenAnnotations;
  /**
  * Define the labels that a Tenant Owner cannot set for their Namespace resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#forbidden_labels DataK8SCapsuleClastixIoTenantV1Beta2Manifest#forbidden_labels}
  */
  readonly forbiddenLabels?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenLabels;
  /**
  * Specifies the maximum number of namespaces allowed for that Tenant. Once the namespace quota assigned to the Tenant has been reached, the Tenant owner cannot create further namespaces. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#quota DataK8SCapsuleClastixIoTenantV1Beta2Manifest#quota}
  */
  readonly quota?: number;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_metadata: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsAdditionalMetadataToTerraform(struct!.additionalMetadata),
    forbidden_annotations: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenAnnotationsToTerraform(struct!.forbiddenAnnotations),
    forbidden_labels: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenLabelsToTerraform(struct!.forbiddenLabels),
    quota: cdktf.numberToTerraform(struct!.quota),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_metadata: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsAdditionalMetadataToHclTerraform(struct!.additionalMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsAdditionalMetadata",
    },
    forbidden_annotations: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenAnnotationsToHclTerraform(struct!.forbiddenAnnotations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenAnnotations",
    },
    forbidden_labels: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenLabelsToHclTerraform(struct!.forbiddenLabels),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenLabels",
    },
    quota: {
      value: cdktf.numberToHclTerraform(struct!.quota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalMetadata = this._additionalMetadata?.internalValue;
    }
    if (this._forbiddenAnnotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbiddenAnnotations = this._forbiddenAnnotations?.internalValue;
    }
    if (this._forbiddenLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbiddenLabels = this._forbiddenLabels?.internalValue;
    }
    if (this._quota !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalMetadata.internalValue = undefined;
      this._forbiddenAnnotations.internalValue = undefined;
      this._forbiddenLabels.internalValue = undefined;
      this._quota = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalMetadata.internalValue = value.additionalMetadata;
      this._forbiddenAnnotations.internalValue = value.forbiddenAnnotations;
      this._forbiddenLabels.internalValue = value.forbiddenLabels;
      this._quota = value.quota;
    }
  }

  // additional_metadata - computed: false, optional: true, required: false
  private _additionalMetadata = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsAdditionalMetadataOutputReference(this, "additional_metadata");
  public get additionalMetadata() {
    return this._additionalMetadata;
  }
  public putAdditionalMetadata(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsAdditionalMetadata) {
    this._additionalMetadata.internalValue = value;
  }
  public resetAdditionalMetadata() {
    this._additionalMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalMetadataInput() {
    return this._additionalMetadata.internalValue;
  }

  // forbidden_annotations - computed: false, optional: true, required: false
  private _forbiddenAnnotations = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenAnnotationsOutputReference(this, "forbidden_annotations");
  public get forbiddenAnnotations() {
    return this._forbiddenAnnotations;
  }
  public putForbiddenAnnotations(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenAnnotations) {
    this._forbiddenAnnotations.internalValue = value;
  }
  public resetForbiddenAnnotations() {
    this._forbiddenAnnotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenAnnotationsInput() {
    return this._forbiddenAnnotations.internalValue;
  }

  // forbidden_labels - computed: false, optional: true, required: false
  private _forbiddenLabels = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenLabelsOutputReference(this, "forbidden_labels");
  public get forbiddenLabels() {
    return this._forbiddenLabels;
  }
  public putForbiddenLabels(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsForbiddenLabels) {
    this._forbiddenLabels.internalValue = value;
  }
  public resetForbiddenLabels() {
    this._forbiddenLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenLabelsInput() {
    return this._forbiddenLabels.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: number; 
  public get quota() {
    return this.getNumberAttribute('quota');
  }
  public set quota(value: number) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPorts {
  /**
  * endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#end_port DataK8SCapsuleClastixIoTenantV1Beta2Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * port represents the port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#port DataK8SCapsuleClastixIoTenantV1Beta2Manifest#port}
  */
  readonly port?: string;
  /**
  * protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#protocol DataK8SCapsuleClastixIoTenantV1Beta2Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPortsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPorts | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPortsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPorts | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPorts | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPortsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToIpBlock {
  /**
  * cidr is a string representing the IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#cidr DataK8SCapsuleClastixIoTenantV1Beta2Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * except is a slice of CIDRs that should not be included within an IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64' Except values will be rejected if they are outside the cidr range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#except DataK8SCapsuleClastixIoTenantV1Beta2Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToIpBlockToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToIpBlockToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToIpBlock | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToIpBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToIpBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToIpBlock | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#key DataK8SCapsuleClastixIoTenantV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#values DataK8SCapsuleClastixIoTenantV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#key DataK8SCapsuleClastixIoTenantV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#values DataK8SCapsuleClastixIoTenantV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressTo {
  /**
  * ipBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#ip_block DataK8SCapsuleClastixIoTenantV1Beta2Manifest#ip_block}
  */
  readonly ipBlock?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToIpBlock;
  /**
  * namespaceSelector selects namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces. If podSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the namespaces selected by namespaceSelector. Otherwise it selects all pods in the namespaces selected by namespaceSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#namespace_selector DataK8SCapsuleClastixIoTenantV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector;
  /**
  * podSelector is a label selector which selects pods. This field follows standard label selector semantics; if present but empty, it selects all pods. If namespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the pods matching podSelector in the policy's own namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#pod_selector DataK8SCapsuleClastixIoTenantV1Beta2Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelector;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToIpBlockToTerraform(struct!.ipBlock),
    namespace_selector: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorToTerraform(struct!.podSelector),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_block: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToIpBlockToHclTerraform(struct!.ipBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToIpBlock",
    },
    namespace_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector",
    },
    pod_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressTo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressTo | cdktf.IResolvable | undefined) {
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
  private _ipBlock = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToIpBlockOutputReference(this, "ip_block");
  public get ipBlock() {
    return this._ipBlock;
  }
  public putIpBlock(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToIpBlock) {
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
  private _namespaceSelector = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector) {
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
  private _podSelector = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToPodSelector) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgress {
  /**
  * ports is a list of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#ports DataK8SCapsuleClastixIoTenantV1Beta2Manifest#ports}
  */
  readonly ports?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPorts[] | cdktf.IResolvable;
  /**
  * to is a list of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#to DataK8SCapsuleClastixIoTenantV1Beta2Manifest#to}
  */
  readonly to?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressTo[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPortsToTerraform, false)(struct!.ports),
    to: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToToTerraform, false)(struct!.to),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPortsList",
    },
    to: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToToHclTerraform, false)(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgress | cdktf.IResolvable | undefined) {
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
  private _ports = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressPorts[] | cdktf.IResolvable) {
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
  private _to = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToList(this, "to", false);
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressTo[] | cdktf.IResolvable) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromIpBlock {
  /**
  * cidr is a string representing the IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#cidr DataK8SCapsuleClastixIoTenantV1Beta2Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * except is a slice of CIDRs that should not be included within an IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64' Except values will be rejected if they are outside the cidr range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#except DataK8SCapsuleClastixIoTenantV1Beta2Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromIpBlockToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromIpBlockToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromIpBlock | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromIpBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromIpBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromIpBlock | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#key DataK8SCapsuleClastixIoTenantV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#values DataK8SCapsuleClastixIoTenantV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#key DataK8SCapsuleClastixIoTenantV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#values DataK8SCapsuleClastixIoTenantV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFrom {
  /**
  * ipBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#ip_block DataK8SCapsuleClastixIoTenantV1Beta2Manifest#ip_block}
  */
  readonly ipBlock?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromIpBlock;
  /**
  * namespaceSelector selects namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces. If podSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the namespaces selected by namespaceSelector. Otherwise it selects all pods in the namespaces selected by namespaceSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#namespace_selector DataK8SCapsuleClastixIoTenantV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector;
  /**
  * podSelector is a label selector which selects pods. This field follows standard label selector semantics; if present but empty, it selects all pods. If namespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the pods matching podSelector in the policy's own namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#pod_selector DataK8SCapsuleClastixIoTenantV1Beta2Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelector;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromIpBlockToTerraform(struct!.ipBlock),
    namespace_selector: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorToTerraform(struct!.podSelector),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_block: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromIpBlockToHclTerraform(struct!.ipBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromIpBlock",
    },
    namespace_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector",
    },
    pod_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFrom | cdktf.IResolvable | undefined) {
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
  private _ipBlock = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromIpBlockOutputReference(this, "ip_block");
  public get ipBlock() {
    return this._ipBlock;
  }
  public putIpBlock(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromIpBlock) {
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
  private _namespaceSelector = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector) {
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
  private _podSelector = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromPodSelector) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPorts {
  /**
  * endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#end_port DataK8SCapsuleClastixIoTenantV1Beta2Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * port represents the port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#port DataK8SCapsuleClastixIoTenantV1Beta2Manifest#port}
  */
  readonly port?: string;
  /**
  * protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#protocol DataK8SCapsuleClastixIoTenantV1Beta2Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPortsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPorts | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPortsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPorts | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPorts | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPortsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngress {
  /**
  * from is a list of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the from list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#from DataK8SCapsuleClastixIoTenantV1Beta2Manifest#from}
  */
  readonly from?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFrom[] | cdktf.IResolvable;
  /**
  * ports is a list of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#ports DataK8SCapsuleClastixIoTenantV1Beta2Manifest#ports}
  */
  readonly ports?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPorts[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromToTerraform, false)(struct!.from),
    ports: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPortsToTerraform, false)(struct!.ports),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromToHclTerraform, false)(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngress | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFromList(this, "from", false);
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressFrom[] | cdktf.IResolvable) {
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
  private _ports = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressPorts[] | cdktf.IResolvable) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#key DataK8SCapsuleClastixIoTenantV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#values DataK8SCapsuleClastixIoTenantV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItems {
  /**
  * egress is a list of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#egress DataK8SCapsuleClastixIoTenantV1Beta2Manifest#egress}
  */
  readonly egress?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgress[] | cdktf.IResolvable;
  /**
  * ingress is a list of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#ingress DataK8SCapsuleClastixIoTenantV1Beta2Manifest#ingress}
  */
  readonly ingress?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngress[] | cdktf.IResolvable;
  /**
  * podSelector selects the pods to which this NetworkPolicy object applies. The array of ingress rules is applied to any pods selected by this field. Multiple network policies can select the same set of pods. In this case, the ingress rules for each are combined additively. This field is NOT optional and follows standard label selector semantics. An empty podSelector matches all pods in this namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#pod_selector DataK8SCapsuleClastixIoTenantV1Beta2Manifest#pod_selector}
  */
  readonly podSelector: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelector;
  /**
  * policyTypes is a list of rule types that the NetworkPolicy relates to. Valid options are ['Ingress'], ['Egress'], or ['Ingress', 'Egress']. If this field is not specified, it will default based on the existence of ingress or egress rules; policies that contain an egress section are assumed to affect egress, and all policies (whether or not they contain an ingress section) are assumed to affect ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ 'Egress' ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include 'Egress' (since such a policy would not include an egress section and would otherwise default to just [ 'Ingress' ]). This field is beta-level in 1.8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#policy_types DataK8SCapsuleClastixIoTenantV1Beta2Manifest#policy_types}
  */
  readonly policyTypes?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToTerraform, false)(struct!.egress),
    ingress: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressToTerraform, false)(struct!.ingress),
    pod_selector: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorToTerraform(struct!.podSelector),
    policy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyTypes),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressToHclTerraform, false)(struct!.egress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressList",
    },
    ingress: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressToHclTerraform, false)(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressList",
    },
    pod_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelector",
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItems | cdktf.IResolvable | undefined) {
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
  private _egress = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgressList(this, "egress", false);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsEgress[] | cdktf.IResolvable) {
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
  private _ingress = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsIngress[] | cdktf.IResolvable) {
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
  private _podSelector = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsPodSelector) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#items DataK8SCapsuleClastixIoTenantV1Beta2Manifest#items}
  */
  readonly items?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItems[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#kind DataK8SCapsuleClastixIoTenantV1Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#operations DataK8SCapsuleClastixIoTenantV1Beta2Manifest#operations}
  */
  readonly operations: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettingsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettingsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettings | cdktf.IResolvable): any {
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
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._operations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._operations = value.operations;
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

  // operations - computed: false, optional: false, required: true
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettingsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwners {
  /**
  * Defines additional cluster-roles for the specific Owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#cluster_roles DataK8SCapsuleClastixIoTenantV1Beta2Manifest#cluster_roles}
  */
  readonly clusterRoles?: string[];
  /**
  * Kind of tenant owner. Possible values are 'User', 'Group', and 'ServiceAccount'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#kind DataK8SCapsuleClastixIoTenantV1Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of tenant owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#name DataK8SCapsuleClastixIoTenantV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Proxy settings for tenant owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#proxy_settings DataK8SCapsuleClastixIoTenantV1Beta2Manifest#proxy_settings}
  */
  readonly proxySettings?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettings[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterRoles),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    proxy_settings: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettingsToTerraform, false)(struct!.proxySettings),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    proxy_settings: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettingsToHclTerraform, false)(struct!.proxySettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoles = this._clusterRoles;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._proxySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxySettings = this._proxySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterRoles = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._proxySettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterRoles = value.clusterRoles;
      this._kind = value.kind;
      this._name = value.name;
      this._proxySettings.internalValue = value.proxySettings;
    }
  }

  // cluster_roles - computed: false, optional: true, required: false
  private _clusterRoles?: string[]; 
  public get clusterRoles() {
    return this.getListAttribute('cluster_roles');
  }
  public set clusterRoles(value: string[]) {
    this._clusterRoles = value;
  }
  public resetClusterRoles() {
    this._clusterRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRolesInput() {
    return this._clusterRoles;
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

  // proxy_settings - computed: false, optional: true, required: false
  private _proxySettings = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettingsList(this, "proxy_settings", false);
  public get proxySettings() {
    return this._proxySettings;
  }
  public putProxySettings(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersProxySettings[] | cdktf.IResolvable) {
    this._proxySettings.internalValue = value;
  }
  public resetProxySettings() {
    this._proxySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySettingsInput() {
    return this._proxySettings.internalValue;
  }
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwners[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsAdditionalMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#annotations DataK8SCapsuleClastixIoTenantV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#labels DataK8SCapsuleClastixIoTenantV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsAdditionalMetadataToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsAdditionalMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsAdditionalMetadataToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsAdditionalMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsAdditionalMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsAdditionalMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsAdditionalMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptions {
  /**
  * Specifies additional labels and annotations the Capsule operator places on any Pod resource in the Tenant. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#additional_metadata DataK8SCapsuleClastixIoTenantV1Beta2Manifest#additional_metadata}
  */
  readonly additionalMetadata?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsAdditionalMetadata;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_metadata: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsAdditionalMetadataToTerraform(struct!.additionalMetadata),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_metadata: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsAdditionalMetadataToHclTerraform(struct!.additionalMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsAdditionalMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalMetadata = this._additionalMetadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalMetadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalMetadata.internalValue = value.additionalMetadata;
    }
  }

  // additional_metadata - computed: false, optional: true, required: false
  private _additionalMetadata = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsAdditionalMetadataOutputReference(this, "additional_metadata");
  public get additionalMetadata() {
    return this._additionalMetadata;
  }
  public putAdditionalMetadata(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsAdditionalMetadata) {
    this._additionalMetadata.internalValue = value;
  }
  public resetAdditionalMetadata() {
    this._additionalMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalMetadataInput() {
    return this._additionalMetadata.internalValue;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#key DataK8SCapsuleClastixIoTenantV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#values DataK8SCapsuleClastixIoTenantV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed}
  */
  readonly allowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed_regex DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed_regex}
  */
  readonly allowedRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#default DataK8SCapsuleClastixIoTenantV1Beta2Manifest#default}
  */
  readonly default?: string;
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    allowed_regex: cdktf.stringToTerraform(struct!.allowedRegex),
    default: cdktf.stringToTerraform(struct!.default),
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClasses | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClasses | cdktf.IResolvable | undefined {
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
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._allowedRegex = undefined;
      this._default = undefined;
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
      this._allowed = value.allowed;
      this._allowedRegex = value.allowedRegex;
      this._default = value.default;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions {
  /**
  * Represents a scope's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * The name of the scope that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#scope_name DataK8SCapsuleClastixIoTenantV1Beta2Manifest#scope_name}
  */
  readonly scopeName: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#values DataK8SCapsuleClastixIoTenantV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelector {
  /**
  * A list of scope selector requirements by scope of the resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItems {
  /**
  * hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#hard DataK8SCapsuleClastixIoTenantV1Beta2Manifest#hard}
  */
  readonly hard?: { [key: string]: string };
  /**
  * scopeSelector is also a collection of filters like scopes that must match each object tracked by a quota but expressed using ScopeSelectorOperator in combination with possible values. For a resource to match, both scopes AND scopeSelector (if specified in spec), must be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#scope_selector DataK8SCapsuleClastixIoTenantV1Beta2Manifest#scope_selector}
  */
  readonly scopeSelector?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelector;
  /**
  * A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#scopes DataK8SCapsuleClastixIoTenantV1Beta2Manifest#scopes}
  */
  readonly scopes?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hard: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hard),
    scope_selector: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorToTerraform(struct!.scopeSelector),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItems | cdktf.IResolvable): any {
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
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorToHclTerraform(struct!.scopeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelector",
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItems | cdktf.IResolvable | undefined) {
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
  private _scopeSelector = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelectorOutputReference(this, "scope_selector");
  public get scopeSelector() {
    return this._scopeSelector;
  }
  public putScopeSelector(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsScopeSelector) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#items DataK8SCapsuleClastixIoTenantV1Beta2Manifest#items}
  */
  readonly items?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItems[] | cdktf.IResolvable;
  /**
  * Define if the Resource Budget should compute resource across all Namespaces in the Tenant or individually per cluster. Default is Tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#scope DataK8SCapsuleClastixIoTenantV1Beta2Manifest#scope}
  */
  readonly scope?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsToTerraform, false)(struct!.items),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsList",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
      this._scope = value.scope;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#key DataK8SCapsuleClastixIoTenantV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#values DataK8SCapsuleClastixIoTenantV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed}
  */
  readonly allowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed_regex DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed_regex}
  */
  readonly allowedRegex?: string;
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    allowed_regex: cdktf.stringToTerraform(struct!.allowedRegex),
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClasses | cdktf.IResolvable): any {
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
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClasses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._allowedRegex = undefined;
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
      this._allowed = value.allowed;
      this._allowedRegex = value.allowedRegex;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
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

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAdditionalMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#annotations DataK8SCapsuleClastixIoTenantV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#labels DataK8SCapsuleClastixIoTenantV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAdditionalMetadataToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAdditionalMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAdditionalMetadataToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAdditionalMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAdditionalMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAdditionalMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAdditionalMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAllowedServices {
  /**
  * Specifies if ExternalName service type resources are allowed for the Tenant. Default is true. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#external_name DataK8SCapsuleClastixIoTenantV1Beta2Manifest#external_name}
  */
  readonly externalName?: boolean | cdktf.IResolvable;
  /**
  * Specifies if LoadBalancer service type resources are allowed for the Tenant. Default is true. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#load_balancer DataK8SCapsuleClastixIoTenantV1Beta2Manifest#load_balancer}
  */
  readonly loadBalancer?: boolean | cdktf.IResolvable;
  /**
  * Specifies if NodePort service type resources are allowed for the Tenant. Default is true. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#node_port DataK8SCapsuleClastixIoTenantV1Beta2Manifest#node_port}
  */
  readonly nodePort?: boolean | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAllowedServicesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAllowedServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_name: cdktf.booleanToTerraform(struct!.externalName),
    load_balancer: cdktf.booleanToTerraform(struct!.loadBalancer),
    node_port: cdktf.booleanToTerraform(struct!.nodePort),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAllowedServicesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAllowedServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_name: {
      value: cdktf.booleanToHclTerraform(struct!.externalName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_balancer: {
      value: cdktf.booleanToHclTerraform(struct!.loadBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_port: {
      value: cdktf.booleanToHclTerraform(struct!.nodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAllowedServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAllowedServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalName = this._externalName;
    }
    if (this._loadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer;
    }
    if (this._nodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePort = this._nodePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAllowedServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalName = undefined;
      this._loadBalancer = undefined;
      this._nodePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalName = value.externalName;
      this._loadBalancer = value.loadBalancer;
      this._nodePort = value.nodePort;
    }
  }

  // external_name - computed: false, optional: true, required: false
  private _externalName?: boolean | cdktf.IResolvable; 
  public get externalName() {
    return this.getBooleanAttribute('external_name');
  }
  public set externalName(value: boolean | cdktf.IResolvable) {
    this._externalName = value;
  }
  public resetExternalName() {
    this._externalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNameInput() {
    return this._externalName;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer?: boolean | cdktf.IResolvable; 
  public get loadBalancer() {
    return this.getBooleanAttribute('load_balancer');
  }
  public set loadBalancer(value: boolean | cdktf.IResolvable) {
    this._loadBalancer = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer;
  }

  // node_port - computed: false, optional: true, required: false
  private _nodePort?: boolean | cdktf.IResolvable; 
  public get nodePort() {
    return this.getBooleanAttribute('node_port');
  }
  public set nodePort(value: boolean | cdktf.IResolvable) {
    this._nodePort = value;
  }
  public resetNodePort() {
    this._nodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePortInput() {
    return this._nodePort;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsExternalIPs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed}
  */
  readonly allowed: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsExternalIPsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsExternalIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsExternalIPsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsExternalIPs | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsExternalIPsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsExternalIPs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsExternalIPs | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenAnnotations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#denied DataK8SCapsuleClastixIoTenantV1Beta2Manifest#denied}
  */
  readonly denied?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#denied_regex DataK8SCapsuleClastixIoTenantV1Beta2Manifest#denied_regex}
  */
  readonly deniedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenAnnotationsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denied),
    denied_regex: cdktf.stringToTerraform(struct!.deniedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenAnnotationsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denied: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denied),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied_regex: {
      value: cdktf.stringToHclTerraform(struct!.deniedRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenAnnotationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denied !== undefined) {
      hasAnyValues = true;
      internalValueResult.denied = this._denied;
    }
    if (this._deniedRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedRegex = this._deniedRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denied = undefined;
      this._deniedRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denied = value.denied;
      this._deniedRegex = value.deniedRegex;
    }
  }

  // denied - computed: false, optional: true, required: false
  private _denied?: string[]; 
  public get denied() {
    return this.getListAttribute('denied');
  }
  public set denied(value: string[]) {
    this._denied = value;
  }
  public resetDenied() {
    this._denied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedInput() {
    return this._denied;
  }

  // denied_regex - computed: false, optional: true, required: false
  private _deniedRegex?: string; 
  public get deniedRegex() {
    return this.getStringAttribute('denied_regex');
  }
  public set deniedRegex(value: string) {
    this._deniedRegex = value;
  }
  public resetDeniedRegex() {
    this._deniedRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedRegexInput() {
    return this._deniedRegex;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#denied DataK8SCapsuleClastixIoTenantV1Beta2Manifest#denied}
  */
  readonly denied?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#denied_regex DataK8SCapsuleClastixIoTenantV1Beta2Manifest#denied_regex}
  */
  readonly deniedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenLabelsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denied),
    denied_regex: cdktf.stringToTerraform(struct!.deniedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenLabelsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denied: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denied),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied_regex: {
      value: cdktf.stringToHclTerraform(struct!.deniedRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denied !== undefined) {
      hasAnyValues = true;
      internalValueResult.denied = this._denied;
    }
    if (this._deniedRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedRegex = this._deniedRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denied = undefined;
      this._deniedRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denied = value.denied;
      this._deniedRegex = value.deniedRegex;
    }
  }

  // denied - computed: false, optional: true, required: false
  private _denied?: string[]; 
  public get denied() {
    return this.getListAttribute('denied');
  }
  public set denied(value: string[]) {
    this._denied = value;
  }
  public resetDenied() {
    this._denied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedInput() {
    return this._denied;
  }

  // denied_regex - computed: false, optional: true, required: false
  private _deniedRegex?: string; 
  public get deniedRegex() {
    return this.getStringAttribute('denied_regex');
  }
  public set deniedRegex(value: string) {
    this._deniedRegex = value;
  }
  public resetDeniedRegex() {
    this._deniedRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedRegexInput() {
    return this._deniedRegex;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptions {
  /**
  * Specifies additional labels and annotations the Capsule operator places on any Service resource in the Tenant. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#additional_metadata DataK8SCapsuleClastixIoTenantV1Beta2Manifest#additional_metadata}
  */
  readonly additionalMetadata?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAdditionalMetadata;
  /**
  * Block or deny certain type of Services. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed_services DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed_services}
  */
  readonly allowedServices?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAllowedServices;
  /**
  * Specifies the external IPs that can be used in Services with type ClusterIP. An empty list means no IPs are allowed. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#external_i_ps DataK8SCapsuleClastixIoTenantV1Beta2Manifest#external_i_ps}
  */
  readonly externalIPs?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsExternalIPs;
  /**
  * Define the annotations that a Tenant Owner cannot set for their Service resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#forbidden_annotations DataK8SCapsuleClastixIoTenantV1Beta2Manifest#forbidden_annotations}
  */
  readonly forbiddenAnnotations?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenAnnotations;
  /**
  * Define the labels that a Tenant Owner cannot set for their Service resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#forbidden_labels DataK8SCapsuleClastixIoTenantV1Beta2Manifest#forbidden_labels}
  */
  readonly forbiddenLabels?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenLabels;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_metadata: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAdditionalMetadataToTerraform(struct!.additionalMetadata),
    allowed_services: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAllowedServicesToTerraform(struct!.allowedServices),
    external_i_ps: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsExternalIPsToTerraform(struct!.externalIPs),
    forbidden_annotations: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenAnnotationsToTerraform(struct!.forbiddenAnnotations),
    forbidden_labels: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenLabelsToTerraform(struct!.forbiddenLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_metadata: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAdditionalMetadataToHclTerraform(struct!.additionalMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAdditionalMetadata",
    },
    allowed_services: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAllowedServicesToHclTerraform(struct!.allowedServices),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAllowedServices",
    },
    external_i_ps: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsExternalIPsToHclTerraform(struct!.externalIPs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsExternalIPs",
    },
    forbidden_annotations: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenAnnotationsToHclTerraform(struct!.forbiddenAnnotations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenAnnotations",
    },
    forbidden_labels: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenLabelsToHclTerraform(struct!.forbiddenLabels),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenLabels",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalMetadata = this._additionalMetadata?.internalValue;
    }
    if (this._allowedServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServices = this._allowedServices?.internalValue;
    }
    if (this._externalIPs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIPs = this._externalIPs?.internalValue;
    }
    if (this._forbiddenAnnotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbiddenAnnotations = this._forbiddenAnnotations?.internalValue;
    }
    if (this._forbiddenLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbiddenLabels = this._forbiddenLabels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalMetadata.internalValue = undefined;
      this._allowedServices.internalValue = undefined;
      this._externalIPs.internalValue = undefined;
      this._forbiddenAnnotations.internalValue = undefined;
      this._forbiddenLabels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalMetadata.internalValue = value.additionalMetadata;
      this._allowedServices.internalValue = value.allowedServices;
      this._externalIPs.internalValue = value.externalIPs;
      this._forbiddenAnnotations.internalValue = value.forbiddenAnnotations;
      this._forbiddenLabels.internalValue = value.forbiddenLabels;
    }
  }

  // additional_metadata - computed: false, optional: true, required: false
  private _additionalMetadata = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAdditionalMetadataOutputReference(this, "additional_metadata");
  public get additionalMetadata() {
    return this._additionalMetadata;
  }
  public putAdditionalMetadata(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAdditionalMetadata) {
    this._additionalMetadata.internalValue = value;
  }
  public resetAdditionalMetadata() {
    this._additionalMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalMetadataInput() {
    return this._additionalMetadata.internalValue;
  }

  // allowed_services - computed: false, optional: true, required: false
  private _allowedServices = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAllowedServicesOutputReference(this, "allowed_services");
  public get allowedServices() {
    return this._allowedServices;
  }
  public putAllowedServices(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsAllowedServices) {
    this._allowedServices.internalValue = value;
  }
  public resetAllowedServices() {
    this._allowedServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServicesInput() {
    return this._allowedServices.internalValue;
  }

  // external_i_ps - computed: false, optional: true, required: false
  private _externalIPs = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsExternalIPsOutputReference(this, "external_i_ps");
  public get externalIPs() {
    return this._externalIPs;
  }
  public putExternalIPs(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsExternalIPs) {
    this._externalIPs.internalValue = value;
  }
  public resetExternalIPs() {
    this._externalIPs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIPsInput() {
    return this._externalIPs.internalValue;
  }

  // forbidden_annotations - computed: false, optional: true, required: false
  private _forbiddenAnnotations = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenAnnotationsOutputReference(this, "forbidden_annotations");
  public get forbiddenAnnotations() {
    return this._forbiddenAnnotations;
  }
  public putForbiddenAnnotations(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenAnnotations) {
    this._forbiddenAnnotations.internalValue = value;
  }
  public resetForbiddenAnnotations() {
    this._forbiddenAnnotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenAnnotationsInput() {
    return this._forbiddenAnnotations.internalValue;
  }

  // forbidden_labels - computed: false, optional: true, required: false
  private _forbiddenLabels = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenLabelsOutputReference(this, "forbidden_labels");
  public get forbiddenLabels() {
    return this._forbiddenLabels;
  }
  public putForbiddenLabels(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsForbiddenLabels) {
    this._forbiddenLabels.internalValue = value;
  }
  public resetForbiddenLabels() {
    this._forbiddenLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenLabelsInput() {
    return this._forbiddenLabels.internalValue;
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#key DataK8SCapsuleClastixIoTenantV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#values DataK8SCapsuleClastixIoTenantV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed}
  */
  readonly allowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#allowed_regex DataK8SCapsuleClastixIoTenantV1Beta2Manifest#allowed_regex}
  */
  readonly allowedRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#default DataK8SCapsuleClastixIoTenantV1Beta2Manifest#default}
  */
  readonly default?: string;
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    allowed_regex: cdktf.stringToTerraform(struct!.allowedRegex),
    default: cdktf.stringToTerraform(struct!.default),
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClasses | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClasses | cdktf.IResolvable | undefined {
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
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._allowedRegex = undefined;
      this._default = undefined;
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
      this._allowed = value.allowed;
      this._allowedRegex = value.allowedRegex;
      this._default = value.default;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpec {
  /**
  * Specifies additional RoleBindings assigned to the Tenant. Capsule will ensure that all namespaces in the Tenant always contain the RoleBinding for the given ClusterRole. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#additional_role_bindings DataK8SCapsuleClastixIoTenantV1Beta2Manifest#additional_role_bindings}
  */
  readonly additionalRoleBindings?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindings[] | cdktf.IResolvable;
  /**
  * Specifies the trusted Image Registries assigned to the Tenant. Capsule assures that all Pods resources created in the Tenant can use only one of the allowed trusted registries. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#container_registries DataK8SCapsuleClastixIoTenantV1Beta2Manifest#container_registries}
  */
  readonly containerRegistries?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecContainerRegistries;
  /**
  * Toggling the Tenant resources cordoning, when enable resources cannot be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#cordoned DataK8SCapsuleClastixIoTenantV1Beta2Manifest#cordoned}
  */
  readonly cordoned?: boolean | cdktf.IResolvable;
  /**
  * Specify the allowed values for the imagePullPolicies option in Pod resources. Capsule assures that all Pod resources created in the Tenant can use only one of the allowed policy. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#image_pull_policies DataK8SCapsuleClastixIoTenantV1Beta2Manifest#image_pull_policies}
  */
  readonly imagePullPolicies?: string[];
  /**
  * Specifies options for the Ingress resources, such as allowed hostnames and IngressClass. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#ingress_options DataK8SCapsuleClastixIoTenantV1Beta2Manifest#ingress_options}
  */
  readonly ingressOptions?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptions;
  /**
  * Specifies the resource min/max usage restrictions to the Tenant. The assigned values are inherited by any namespace created in the Tenant. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#limit_ranges DataK8SCapsuleClastixIoTenantV1Beta2Manifest#limit_ranges}
  */
  readonly limitRanges?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRanges;
  /**
  * Specifies options for the Namespaces, such as additional metadata or maximum number of namespaces allowed for that Tenant. Once the namespace quota assigned to the Tenant has been reached, the Tenant owner cannot create further namespaces. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#namespace_options DataK8SCapsuleClastixIoTenantV1Beta2Manifest#namespace_options}
  */
  readonly namespaceOptions?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptions;
  /**
  * Specifies the NetworkPolicies assigned to the Tenant. The assigned NetworkPolicies are inherited by any namespace created in the Tenant. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#network_policies DataK8SCapsuleClastixIoTenantV1Beta2Manifest#network_policies}
  */
  readonly networkPolicies?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPolicies;
  /**
  * Specifies the label to control the placement of pods on a given pool of worker nodes. All namespaces created within the Tenant will have the node selector annotation. This annotation tells the Kubernetes scheduler to place pods on the nodes having the selector label. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#node_selector DataK8SCapsuleClastixIoTenantV1Beta2Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Specifies the owners of the Tenant. Mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#owners DataK8SCapsuleClastixIoTenantV1Beta2Manifest#owners}
  */
  readonly owners: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwners[] | cdktf.IResolvable;
  /**
  * Specifies options for the Pods deployed in the Tenant namespaces, such as additional metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#pod_options DataK8SCapsuleClastixIoTenantV1Beta2Manifest#pod_options}
  */
  readonly podOptions?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptions;
  /**
  * Prevent accidental deletion of the Tenant. When enabled, the deletion request will be declined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#prevent_deletion DataK8SCapsuleClastixIoTenantV1Beta2Manifest#prevent_deletion}
  */
  readonly preventDeletion?: boolean | cdktf.IResolvable;
  /**
  * Specifies the allowed priorityClasses assigned to the Tenant. Capsule assures that all Pods resources created in the Tenant can use only one of the allowed PriorityClasses. A default value can be specified, and all the Pod resources created will inherit the declared class. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#priority_classes DataK8SCapsuleClastixIoTenantV1Beta2Manifest#priority_classes}
  */
  readonly priorityClasses?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClasses;
  /**
  * Specifies a list of ResourceQuota resources assigned to the Tenant. The assigned values are inherited by any namespace created in the Tenant. The Capsule operator aggregates ResourceQuota at Tenant level, so that the hard quota is never crossed for the given Tenant. This permits the Tenant owner to consume resources in the Tenant regardless of the namespace. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#resource_quotas DataK8SCapsuleClastixIoTenantV1Beta2Manifest#resource_quotas}
  */
  readonly resourceQuotas?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotas;
  /**
  * Specifies the allowed RuntimeClasses assigned to the Tenant. Capsule assures that all Pods resources created in the Tenant can use only one of the allowed RuntimeClasses. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#runtime_classes DataK8SCapsuleClastixIoTenantV1Beta2Manifest#runtime_classes}
  */
  readonly runtimeClasses?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClasses;
  /**
  * Specifies options for the Service, such as additional metadata or block of certain type of Services. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#service_options DataK8SCapsuleClastixIoTenantV1Beta2Manifest#service_options}
  */
  readonly serviceOptions?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptions;
  /**
  * Specifies the allowed StorageClasses assigned to the Tenant. Capsule assures that all PersistentVolumeClaim resources created in the Tenant can use only one of the allowed StorageClasses. A default value can be specified, and all the PersistentVolumeClaim resources created will inherit the declared class. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#storage_classes DataK8SCapsuleClastixIoTenantV1Beta2Manifest#storage_classes}
  */
  readonly storageClasses?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClasses;
}

export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_role_bindings: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsToTerraform, false)(struct!.additionalRoleBindings),
    container_registries: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecContainerRegistriesToTerraform(struct!.containerRegistries),
    cordoned: cdktf.booleanToTerraform(struct!.cordoned),
    image_pull_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.imagePullPolicies),
    ingress_options: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsToTerraform(struct!.ingressOptions),
    limit_ranges: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesToTerraform(struct!.limitRanges),
    namespace_options: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsToTerraform(struct!.namespaceOptions),
    network_policies: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesToTerraform(struct!.networkPolicies),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    owners: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersToTerraform, false)(struct!.owners),
    pod_options: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsToTerraform(struct!.podOptions),
    prevent_deletion: cdktf.booleanToTerraform(struct!.preventDeletion),
    priority_classes: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesToTerraform(struct!.priorityClasses),
    resource_quotas: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasToTerraform(struct!.resourceQuotas),
    runtime_classes: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesToTerraform(struct!.runtimeClasses),
    service_options: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsToTerraform(struct!.serviceOptions),
    storage_classes: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesToTerraform(struct!.storageClasses),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_role_bindings: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsToHclTerraform, false)(struct!.additionalRoleBindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsList",
    },
    container_registries: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecContainerRegistriesToHclTerraform(struct!.containerRegistries),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecContainerRegistries",
    },
    cordoned: {
      value: cdktf.booleanToHclTerraform(struct!.cordoned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_pull_policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.imagePullPolicies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ingress_options: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsToHclTerraform(struct!.ingressOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptions",
    },
    limit_ranges: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesToHclTerraform(struct!.limitRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRanges",
    },
    namespace_options: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsToHclTerraform(struct!.namespaceOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptions",
    },
    network_policies: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesToHclTerraform(struct!.networkPolicies),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPolicies",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    owners: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersToHclTerraform, false)(struct!.owners),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersList",
    },
    pod_options: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsToHclTerraform(struct!.podOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptions",
    },
    prevent_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.preventDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority_classes: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesToHclTerraform(struct!.priorityClasses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClasses",
    },
    resource_quotas: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasToHclTerraform(struct!.resourceQuotas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotas",
    },
    runtime_classes: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesToHclTerraform(struct!.runtimeClasses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClasses",
    },
    service_options: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsToHclTerraform(struct!.serviceOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptions",
    },
    storage_classes: {
      value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesToHclTerraform(struct!.storageClasses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClasses",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._cordoned !== undefined) {
      hasAnyValues = true;
      internalValueResult.cordoned = this._cordoned;
    }
    if (this._imagePullPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicies = this._imagePullPolicies;
    }
    if (this._ingressOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressOptions = this._ingressOptions?.internalValue;
    }
    if (this._limitRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitRanges = this._limitRanges?.internalValue;
    }
    if (this._namespaceOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceOptions = this._namespaceOptions?.internalValue;
    }
    if (this._networkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicies = this._networkPolicies?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._owners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owners = this._owners?.internalValue;
    }
    if (this._podOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOptions = this._podOptions?.internalValue;
    }
    if (this._preventDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventDeletion = this._preventDeletion;
    }
    if (this._priorityClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClasses = this._priorityClasses?.internalValue;
    }
    if (this._resourceQuotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceQuotas = this._resourceQuotas?.internalValue;
    }
    if (this._runtimeClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeClasses = this._runtimeClasses?.internalValue;
    }
    if (this._serviceOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceOptions = this._serviceOptions?.internalValue;
    }
    if (this._storageClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClasses = this._storageClasses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalRoleBindings.internalValue = undefined;
      this._containerRegistries.internalValue = undefined;
      this._cordoned = undefined;
      this._imagePullPolicies = undefined;
      this._ingressOptions.internalValue = undefined;
      this._limitRanges.internalValue = undefined;
      this._namespaceOptions.internalValue = undefined;
      this._networkPolicies.internalValue = undefined;
      this._nodeSelector = undefined;
      this._owners.internalValue = undefined;
      this._podOptions.internalValue = undefined;
      this._preventDeletion = undefined;
      this._priorityClasses.internalValue = undefined;
      this._resourceQuotas.internalValue = undefined;
      this._runtimeClasses.internalValue = undefined;
      this._serviceOptions.internalValue = undefined;
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
      this._cordoned = value.cordoned;
      this._imagePullPolicies = value.imagePullPolicies;
      this._ingressOptions.internalValue = value.ingressOptions;
      this._limitRanges.internalValue = value.limitRanges;
      this._namespaceOptions.internalValue = value.namespaceOptions;
      this._networkPolicies.internalValue = value.networkPolicies;
      this._nodeSelector = value.nodeSelector;
      this._owners.internalValue = value.owners;
      this._podOptions.internalValue = value.podOptions;
      this._preventDeletion = value.preventDeletion;
      this._priorityClasses.internalValue = value.priorityClasses;
      this._resourceQuotas.internalValue = value.resourceQuotas;
      this._runtimeClasses.internalValue = value.runtimeClasses;
      this._serviceOptions.internalValue = value.serviceOptions;
      this._storageClasses.internalValue = value.storageClasses;
    }
  }

  // additional_role_bindings - computed: false, optional: true, required: false
  private _additionalRoleBindings = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindingsList(this, "additional_role_bindings", false);
  public get additionalRoleBindings() {
    return this._additionalRoleBindings;
  }
  public putAdditionalRoleBindings(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecAdditionalRoleBindings[] | cdktf.IResolvable) {
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
  private _containerRegistries = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecContainerRegistriesOutputReference(this, "container_registries");
  public get containerRegistries() {
    return this._containerRegistries;
  }
  public putContainerRegistries(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecContainerRegistries) {
    this._containerRegistries.internalValue = value;
  }
  public resetContainerRegistries() {
    this._containerRegistries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistriesInput() {
    return this._containerRegistries.internalValue;
  }

  // cordoned - computed: false, optional: true, required: false
  private _cordoned?: boolean | cdktf.IResolvable; 
  public get cordoned() {
    return this.getBooleanAttribute('cordoned');
  }
  public set cordoned(value: boolean | cdktf.IResolvable) {
    this._cordoned = value;
  }
  public resetCordoned() {
    this._cordoned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cordonedInput() {
    return this._cordoned;
  }

  // image_pull_policies - computed: false, optional: true, required: false
  private _imagePullPolicies?: string[]; 
  public get imagePullPolicies() {
    return this.getListAttribute('image_pull_policies');
  }
  public set imagePullPolicies(value: string[]) {
    this._imagePullPolicies = value;
  }
  public resetImagePullPolicies() {
    this._imagePullPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPoliciesInput() {
    return this._imagePullPolicies;
  }

  // ingress_options - computed: false, optional: true, required: false
  private _ingressOptions = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptionsOutputReference(this, "ingress_options");
  public get ingressOptions() {
    return this._ingressOptions;
  }
  public putIngressOptions(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecIngressOptions) {
    this._ingressOptions.internalValue = value;
  }
  public resetIngressOptions() {
    this._ingressOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressOptionsInput() {
    return this._ingressOptions.internalValue;
  }

  // limit_ranges - computed: false, optional: true, required: false
  private _limitRanges = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRangesOutputReference(this, "limit_ranges");
  public get limitRanges() {
    return this._limitRanges;
  }
  public putLimitRanges(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecLimitRanges) {
    this._limitRanges.internalValue = value;
  }
  public resetLimitRanges() {
    this._limitRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitRangesInput() {
    return this._limitRanges.internalValue;
  }

  // namespace_options - computed: false, optional: true, required: false
  private _namespaceOptions = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptionsOutputReference(this, "namespace_options");
  public get namespaceOptions() {
    return this._namespaceOptions;
  }
  public putNamespaceOptions(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNamespaceOptions) {
    this._namespaceOptions.internalValue = value;
  }
  public resetNamespaceOptions() {
    this._namespaceOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceOptionsInput() {
    return this._namespaceOptions.internalValue;
  }

  // network_policies - computed: false, optional: true, required: false
  private _networkPolicies = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPoliciesOutputReference(this, "network_policies");
  public get networkPolicies() {
    return this._networkPolicies;
  }
  public putNetworkPolicies(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecNetworkPolicies) {
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

  // owners - computed: false, optional: false, required: true
  private _owners = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwnersList(this, "owners", false);
  public get owners() {
    return this._owners;
  }
  public putOwners(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOwners[] | cdktf.IResolvable) {
    this._owners.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners.internalValue;
  }

  // pod_options - computed: false, optional: true, required: false
  private _podOptions = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptionsOutputReference(this, "pod_options");
  public get podOptions() {
    return this._podOptions;
  }
  public putPodOptions(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPodOptions) {
    this._podOptions.internalValue = value;
  }
  public resetPodOptions() {
    this._podOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOptionsInput() {
    return this._podOptions.internalValue;
  }

  // prevent_deletion - computed: false, optional: true, required: false
  private _preventDeletion?: boolean | cdktf.IResolvable; 
  public get preventDeletion() {
    return this.getBooleanAttribute('prevent_deletion');
  }
  public set preventDeletion(value: boolean | cdktf.IResolvable) {
    this._preventDeletion = value;
  }
  public resetPreventDeletion() {
    this._preventDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventDeletionInput() {
    return this._preventDeletion;
  }

  // priority_classes - computed: false, optional: true, required: false
  private _priorityClasses = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClassesOutputReference(this, "priority_classes");
  public get priorityClasses() {
    return this._priorityClasses;
  }
  public putPriorityClasses(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecPriorityClasses) {
    this._priorityClasses.internalValue = value;
  }
  public resetPriorityClasses() {
    this._priorityClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassesInput() {
    return this._priorityClasses.internalValue;
  }

  // resource_quotas - computed: false, optional: true, required: false
  private _resourceQuotas = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotasOutputReference(this, "resource_quotas");
  public get resourceQuotas() {
    return this._resourceQuotas;
  }
  public putResourceQuotas(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecResourceQuotas) {
    this._resourceQuotas.internalValue = value;
  }
  public resetResourceQuotas() {
    this._resourceQuotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceQuotasInput() {
    return this._resourceQuotas.internalValue;
  }

  // runtime_classes - computed: false, optional: true, required: false
  private _runtimeClasses = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClassesOutputReference(this, "runtime_classes");
  public get runtimeClasses() {
    return this._runtimeClasses;
  }
  public putRuntimeClasses(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecRuntimeClasses) {
    this._runtimeClasses.internalValue = value;
  }
  public resetRuntimeClasses() {
    this._runtimeClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeClassesInput() {
    return this._runtimeClasses.internalValue;
  }

  // service_options - computed: false, optional: true, required: false
  private _serviceOptions = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptionsOutputReference(this, "service_options");
  public get serviceOptions() {
    return this._serviceOptions;
  }
  public putServiceOptions(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecServiceOptions) {
    this._serviceOptions.internalValue = value;
  }
  public resetServiceOptions() {
    this._serviceOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceOptionsInput() {
    return this._serviceOptions.internalValue;
  }

  // storage_classes - computed: false, optional: true, required: false
  private _storageClasses = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClassesOutputReference(this, "storage_classes");
  public get storageClasses() {
    return this._storageClasses;
  }
  public putStorageClasses(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecStorageClasses) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest k8s_capsule_clastix_io_tenant_v1beta2_manifest}
*/
export class DataK8SCapsuleClastixIoTenantV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_capsule_clastix_io_tenant_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCapsuleClastixIoTenantV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCapsuleClastixIoTenantV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SCapsuleClastixIoTenantV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCapsuleClastixIoTenantV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_capsule_clastix_io_tenant_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capsule_clastix_io_tenant_v1beta2_manifest k8s_capsule_clastix_io_tenant_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCapsuleClastixIoTenantV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCapsuleClastixIoTenantV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_capsule_clastix_io_tenant_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpec) {
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
      metadata: dataK8SCapsuleClastixIoTenantV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SCapsuleClastixIoTenantV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
