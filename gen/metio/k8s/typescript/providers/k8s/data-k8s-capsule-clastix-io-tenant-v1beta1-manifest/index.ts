// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#metadata DataK8SCapsuleClastixIoTenantV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SCapsuleClastixIoTenantV1Beta1ManifestMetadata;
  /**
  * TenantSpec defines the desired state of Tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#spec DataK8SCapsuleClastixIoTenantV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpec;
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#annotations DataK8SCapsuleClastixIoTenantV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#labels DataK8SCapsuleClastixIoTenantV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#name DataK8SCapsuleClastixIoTenantV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestMetadataToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjects {
  /**
  * APIGroup holds the API group of the referenced subject. Defaults to '' for ServiceAccount subjects. Defaults to 'rbac.authorization.k8s.io' for User and Group subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#api_group DataK8SCapsuleClastixIoTenantV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind of object being referenced. Values defined by this API group are 'User', 'Group', and 'ServiceAccount'. If the Authorizer does not recognized the kind value, the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#kind DataK8SCapsuleClastixIoTenantV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the object being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#name DataK8SCapsuleClastixIoTenantV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referenced object. If the object kind is non-namespace, such as 'User' or 'Group', and this value is not empty the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#namespace DataK8SCapsuleClastixIoTenantV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjectsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjects | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjectsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjects | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjects | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjectsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#cluster_role_name DataK8SCapsuleClastixIoTenantV1Beta1Manifest#cluster_role_name}
  */
  readonly clusterRoleName: string;
  /**
  * kubebuilder:validation:Minimum=1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#subjects DataK8SCapsuleClastixIoTenantV1Beta1Manifest#subjects}
  */
  readonly subjects: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjects[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_role_name: cdktf.stringToTerraform(struct!.clusterRoleName),
    subjects: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindings | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindings | cdktf.IResolvable | undefined) {
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
  private _subjects = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsSubjects[] | cdktf.IResolvable) {
    this._subjects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects.internalValue;
  }
}

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecContainerRegistries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#allowed DataK8SCapsuleClastixIoTenantV1Beta1Manifest#allowed}
  */
  readonly allowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#allowed_regex DataK8SCapsuleClastixIoTenantV1Beta1Manifest#allowed_regex}
  */
  readonly allowedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecContainerRegistriesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecContainerRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    allowed_regex: cdktf.stringToTerraform(struct!.allowedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecContainerRegistriesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecContainerRegistries | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecContainerRegistriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecContainerRegistries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecContainerRegistries | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#allowed DataK8SCapsuleClastixIoTenantV1Beta1Manifest#allowed}
  */
  readonly allowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#allowed_regex DataK8SCapsuleClastixIoTenantV1Beta1Manifest#allowed_regex}
  */
  readonly allowedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedClassesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    allowed_regex: cdktf.stringToTerraform(struct!.allowedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedClassesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedClasses | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedClassesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedClasses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedClasses | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedHostnames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#allowed DataK8SCapsuleClastixIoTenantV1Beta1Manifest#allowed}
  */
  readonly allowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#allowed_regex DataK8SCapsuleClastixIoTenantV1Beta1Manifest#allowed_regex}
  */
  readonly allowedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedHostnamesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedHostnames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    allowed_regex: cdktf.stringToTerraform(struct!.allowedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedHostnamesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedHostnames | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedHostnamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedHostnames | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedHostnames | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptions {
  /**
  * Specifies the allowed IngressClasses assigned to the Tenant. Capsule assures that all Ingress resources created in the Tenant can use only one of the allowed IngressClasses. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#allowed_classes DataK8SCapsuleClastixIoTenantV1Beta1Manifest#allowed_classes}
  */
  readonly allowedClasses?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedClasses;
  /**
  * Specifies the allowed hostnames in Ingresses for the given Tenant. Capsule assures that all Ingress resources created in the Tenant can use only one of the allowed hostnames. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#allowed_hostnames DataK8SCapsuleClastixIoTenantV1Beta1Manifest#allowed_hostnames}
  */
  readonly allowedHostnames?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedHostnames;
  /**
  * Defines the scope of hostname collision check performed when Tenant Owners create Ingress with allowed hostnames. - Cluster: disallow the creation of an Ingress if the pair hostname and path is already used across the Namespaces managed by Capsule. - Tenant: disallow the creation of an Ingress if the pair hostname and path is already used across the Namespaces of the Tenant. - Namespace: disallow the creation of an Ingress if the pair hostname and path is already used in the Ingress Namespace. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#hostname_collision_scope DataK8SCapsuleClastixIoTenantV1Beta1Manifest#hostname_collision_scope}
  */
  readonly hostnameCollisionScope?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_classes: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedClassesToTerraform(struct!.allowedClasses),
    allowed_hostnames: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedHostnamesToTerraform(struct!.allowedHostnames),
    hostname_collision_scope: cdktf.stringToTerraform(struct!.hostnameCollisionScope),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_classes: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedClassesToHclTerraform(struct!.allowedClasses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedClasses",
    },
    allowed_hostnames: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedHostnamesToHclTerraform(struct!.allowedHostnames),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedHostnames",
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._allowedClasses.internalValue = value.allowedClasses;
      this._allowedHostnames.internalValue = value.allowedHostnames;
      this._hostnameCollisionScope = value.hostnameCollisionScope;
    }
  }

  // allowed_classes - computed: false, optional: true, required: false
  private _allowedClasses = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedClassesOutputReference(this, "allowed_classes");
  public get allowedClasses() {
    return this._allowedClasses;
  }
  public putAllowedClasses(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedClasses) {
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
  private _allowedHostnames = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedHostnamesOutputReference(this, "allowed_hostnames");
  public get allowedHostnames() {
    return this._allowedHostnames;
  }
  public putAllowedHostnames(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsAllowedHostnames) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimits {
  /**
  * Default resource requirement limit value by resource name if resource limit is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#default DataK8SCapsuleClastixIoTenantV1Beta1Manifest#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#default_request DataK8SCapsuleClastixIoTenantV1Beta1Manifest#default_request}
  */
  readonly defaultRequest?: { [key: string]: string };
  /**
  * Max usage constraints on this kind by resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#max DataK8SCapsuleClastixIoTenantV1Beta1Manifest#max}
  */
  readonly max?: { [key: string]: string };
  /**
  * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#max_limit_request_ratio DataK8SCapsuleClastixIoTenantV1Beta1Manifest#max_limit_request_ratio}
  */
  readonly maxLimitRequestRatio?: { [key: string]: string };
  /**
  * Min usage constraints on this kind by resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#min DataK8SCapsuleClastixIoTenantV1Beta1Manifest#min}
  */
  readonly min?: { [key: string]: string };
  /**
  * Type of resource that this limit applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#type DataK8SCapsuleClastixIoTenantV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimitsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimits | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimitsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimits | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimits | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimitsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimits[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimitsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItems {
  /**
  * Limits is the list of LimitRangeItem objects that are enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#limits DataK8SCapsuleClastixIoTenantV1Beta1Manifest#limits}
  */
  readonly limits: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimits[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimitsToTerraform, false)(struct!.limits),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimitsToHclTerraform, false)(struct!.limits),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItems | cdktf.IResolvable | undefined) {
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
  private _limits = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimitsList(this, "limits", false);
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsLimits[] | cdktf.IResolvable) {
    this._limits.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }
}

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#items DataK8SCapsuleClastixIoTenantV1Beta1Manifest#items}
  */
  readonly items?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItems[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRanges | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesItems[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsAdditionalMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#annotations DataK8SCapsuleClastixIoTenantV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#labels DataK8SCapsuleClastixIoTenantV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsAdditionalMetadataToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsAdditionalMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsAdditionalMetadataToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsAdditionalMetadata | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsAdditionalMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsAdditionalMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsAdditionalMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptions {
  /**
  * Specifies additional labels and annotations the Capsule operator places on any Namespace resource in the Tenant. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#additional_metadata DataK8SCapsuleClastixIoTenantV1Beta1Manifest#additional_metadata}
  */
  readonly additionalMetadata?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsAdditionalMetadata;
  /**
  * Specifies the maximum number of namespaces allowed for that Tenant. Once the namespace quota assigned to the Tenant has been reached, the Tenant owner cannot create further namespaces. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#quota DataK8SCapsuleClastixIoTenantV1Beta1Manifest#quota}
  */
  readonly quota?: number;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_metadata: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsAdditionalMetadataToTerraform(struct!.additionalMetadata),
    quota: cdktf.numberToTerraform(struct!.quota),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_metadata: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsAdditionalMetadataToHclTerraform(struct!.additionalMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsAdditionalMetadata",
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalMetadata = this._additionalMetadata?.internalValue;
    }
    if (this._quota !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalMetadata.internalValue = undefined;
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
      this._quota = value.quota;
    }
  }

  // additional_metadata - computed: false, optional: true, required: false
  private _additionalMetadata = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsAdditionalMetadataOutputReference(this, "additional_metadata");
  public get additionalMetadata() {
    return this._additionalMetadata;
  }
  public putAdditionalMetadata(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsAdditionalMetadata) {
    this._additionalMetadata.internalValue = value;
  }
  public resetAdditionalMetadata() {
    this._additionalMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalMetadataInput() {
    return this._additionalMetadata.internalValue;
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPorts {
  /**
  * endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#end_port DataK8SCapsuleClastixIoTenantV1Beta1Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * port represents the port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#port DataK8SCapsuleClastixIoTenantV1Beta1Manifest#port}
  */
  readonly port?: string;
  /**
  * protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#protocol DataK8SCapsuleClastixIoTenantV1Beta1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPortsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPorts | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPortsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPorts | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPorts | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPortsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToIpBlock {
  /**
  * cidr is a string representing the IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#cidr DataK8SCapsuleClastixIoTenantV1Beta1Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * except is a slice of CIDRs that should not be included within an IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64' Except values will be rejected if they are outside the cidr range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#except DataK8SCapsuleClastixIoTenantV1Beta1Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToIpBlockToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToIpBlockToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToIpBlock | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToIpBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToIpBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToIpBlock | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#key DataK8SCapsuleClastixIoTenantV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#values DataK8SCapsuleClastixIoTenantV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#key DataK8SCapsuleClastixIoTenantV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#values DataK8SCapsuleClastixIoTenantV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressTo {
  /**
  * ipBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#ip_block DataK8SCapsuleClastixIoTenantV1Beta1Manifest#ip_block}
  */
  readonly ipBlock?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToIpBlock;
  /**
  * namespaceSelector selects namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces. If podSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the namespaces selected by namespaceSelector. Otherwise it selects all pods in the namespaces selected by namespaceSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#namespace_selector DataK8SCapsuleClastixIoTenantV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector;
  /**
  * podSelector is a label selector which selects pods. This field follows standard label selector semantics; if present but empty, it selects all pods. If namespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the pods matching podSelector in the policy's own namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#pod_selector DataK8SCapsuleClastixIoTenantV1Beta1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelector;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToIpBlockToTerraform(struct!.ipBlock),
    namespace_selector: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorToTerraform(struct!.podSelector),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_block: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToIpBlockToHclTerraform(struct!.ipBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToIpBlock",
    },
    namespace_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector",
    },
    pod_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressTo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressTo | cdktf.IResolvable | undefined) {
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
  private _ipBlock = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToIpBlockOutputReference(this, "ip_block");
  public get ipBlock() {
    return this._ipBlock;
  }
  public putIpBlock(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToIpBlock) {
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
  private _namespaceSelector = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToNamespaceSelector) {
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
  private _podSelector = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToPodSelector) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgress {
  /**
  * ports is a list of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#ports DataK8SCapsuleClastixIoTenantV1Beta1Manifest#ports}
  */
  readonly ports?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPorts[] | cdktf.IResolvable;
  /**
  * to is a list of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#to DataK8SCapsuleClastixIoTenantV1Beta1Manifest#to}
  */
  readonly to?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressTo[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPortsToTerraform, false)(struct!.ports),
    to: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToToTerraform, false)(struct!.to),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPortsList",
    },
    to: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToToHclTerraform, false)(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgress | cdktf.IResolvable | undefined) {
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
  private _ports = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressPorts[] | cdktf.IResolvable) {
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
  private _to = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToList(this, "to", false);
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressTo[] | cdktf.IResolvable) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromIpBlock {
  /**
  * cidr is a string representing the IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#cidr DataK8SCapsuleClastixIoTenantV1Beta1Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * except is a slice of CIDRs that should not be included within an IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64' Except values will be rejected if they are outside the cidr range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#except DataK8SCapsuleClastixIoTenantV1Beta1Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromIpBlockToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromIpBlockToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromIpBlock | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromIpBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromIpBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromIpBlock | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#key DataK8SCapsuleClastixIoTenantV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#values DataK8SCapsuleClastixIoTenantV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#key DataK8SCapsuleClastixIoTenantV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#values DataK8SCapsuleClastixIoTenantV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFrom {
  /**
  * ipBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#ip_block DataK8SCapsuleClastixIoTenantV1Beta1Manifest#ip_block}
  */
  readonly ipBlock?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromIpBlock;
  /**
  * namespaceSelector selects namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces. If podSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the namespaces selected by namespaceSelector. Otherwise it selects all pods in the namespaces selected by namespaceSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#namespace_selector DataK8SCapsuleClastixIoTenantV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector;
  /**
  * podSelector is a label selector which selects pods. This field follows standard label selector semantics; if present but empty, it selects all pods. If namespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the pods matching podSelector in the policy's own namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#pod_selector DataK8SCapsuleClastixIoTenantV1Beta1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelector;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromIpBlockToTerraform(struct!.ipBlock),
    namespace_selector: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorToTerraform(struct!.podSelector),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_block: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromIpBlockToHclTerraform(struct!.ipBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromIpBlock",
    },
    namespace_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector",
    },
    pod_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFrom | cdktf.IResolvable | undefined) {
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
  private _ipBlock = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromIpBlockOutputReference(this, "ip_block");
  public get ipBlock() {
    return this._ipBlock;
  }
  public putIpBlock(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromIpBlock) {
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
  private _namespaceSelector = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromNamespaceSelector) {
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
  private _podSelector = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromPodSelector) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPorts {
  /**
  * endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#end_port DataK8SCapsuleClastixIoTenantV1Beta1Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * port represents the port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#port DataK8SCapsuleClastixIoTenantV1Beta1Manifest#port}
  */
  readonly port?: string;
  /**
  * protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#protocol DataK8SCapsuleClastixIoTenantV1Beta1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPortsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPorts | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPortsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPorts | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPorts | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPortsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngress {
  /**
  * from is a list of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the from list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#from DataK8SCapsuleClastixIoTenantV1Beta1Manifest#from}
  */
  readonly from?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFrom[] | cdktf.IResolvable;
  /**
  * ports is a list of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#ports DataK8SCapsuleClastixIoTenantV1Beta1Manifest#ports}
  */
  readonly ports?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPorts[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromToTerraform, false)(struct!.from),
    ports: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPortsToTerraform, false)(struct!.ports),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromToHclTerraform, false)(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngress | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFromList(this, "from", false);
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressFrom[] | cdktf.IResolvable) {
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
  private _ports = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressPorts[] | cdktf.IResolvable) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#key DataK8SCapsuleClastixIoTenantV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#values DataK8SCapsuleClastixIoTenantV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#match_labels DataK8SCapsuleClastixIoTenantV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsList",
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItems {
  /**
  * egress is a list of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#egress DataK8SCapsuleClastixIoTenantV1Beta1Manifest#egress}
  */
  readonly egress?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgress[] | cdktf.IResolvable;
  /**
  * ingress is a list of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#ingress DataK8SCapsuleClastixIoTenantV1Beta1Manifest#ingress}
  */
  readonly ingress?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngress[] | cdktf.IResolvable;
  /**
  * podSelector selects the pods to which this NetworkPolicy object applies. The array of ingress rules is applied to any pods selected by this field. Multiple network policies can select the same set of pods. In this case, the ingress rules for each are combined additively. This field is NOT optional and follows standard label selector semantics. An empty podSelector matches all pods in this namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#pod_selector DataK8SCapsuleClastixIoTenantV1Beta1Manifest#pod_selector}
  */
  readonly podSelector: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelector;
  /**
  * policyTypes is a list of rule types that the NetworkPolicy relates to. Valid options are ['Ingress'], ['Egress'], or ['Ingress', 'Egress']. If this field is not specified, it will default based on the existence of ingress or egress rules; policies that contain an egress section are assumed to affect egress, and all policies (whether or not they contain an ingress section) are assumed to affect ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ 'Egress' ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include 'Egress' (since such a policy would not include an egress section and would otherwise default to just [ 'Ingress' ]). This field is beta-level in 1.8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#policy_types DataK8SCapsuleClastixIoTenantV1Beta1Manifest#policy_types}
  */
  readonly policyTypes?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToTerraform, false)(struct!.egress),
    ingress: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressToTerraform, false)(struct!.ingress),
    pod_selector: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorToTerraform(struct!.podSelector),
    policy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyTypes),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressToHclTerraform, false)(struct!.egress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressList",
    },
    ingress: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressToHclTerraform, false)(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressList",
    },
    pod_selector: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelector",
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItems | cdktf.IResolvable | undefined) {
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
  private _egress = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgressList(this, "egress", false);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsEgress[] | cdktf.IResolvable) {
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
  private _ingress = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsIngress[] | cdktf.IResolvable) {
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
  private _podSelector = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsPodSelector) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#items DataK8SCapsuleClastixIoTenantV1Beta1Manifest#items}
  */
  readonly items?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItems[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPolicies | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesItems[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#kind DataK8SCapsuleClastixIoTenantV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#operations DataK8SCapsuleClastixIoTenantV1Beta1Manifest#operations}
  */
  readonly operations: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettingsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettingsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettings | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettings | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettingsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwners {
  /**
  * Kind of tenant owner. Possible values are 'User', 'Group', and 'ServiceAccount'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#kind DataK8SCapsuleClastixIoTenantV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of tenant owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#name DataK8SCapsuleClastixIoTenantV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Proxy settings for tenant owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#proxy_settings DataK8SCapsuleClastixIoTenantV1Beta1Manifest#proxy_settings}
  */
  readonly proxySettings?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettings[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    proxy_settings: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettingsToTerraform, false)(struct!.proxySettings),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwners | cdktf.IResolvable): any {
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
    proxy_settings: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettingsToHclTerraform, false)(struct!.proxySettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwners | cdktf.IResolvable | undefined {
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
    if (this._proxySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxySettings = this._proxySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
      this._proxySettings.internalValue = value.proxySettings;
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

  // proxy_settings - computed: false, optional: true, required: false
  private _proxySettings = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettingsList(this, "proxy_settings", false);
  public get proxySettings() {
    return this._proxySettings;
  }
  public putProxySettings(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersProxySettings[] | cdktf.IResolvable) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwners[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecPriorityClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#allowed DataK8SCapsuleClastixIoTenantV1Beta1Manifest#allowed}
  */
  readonly allowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#allowed_regex DataK8SCapsuleClastixIoTenantV1Beta1Manifest#allowed_regex}
  */
  readonly allowedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecPriorityClassesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecPriorityClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    allowed_regex: cdktf.stringToTerraform(struct!.allowedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecPriorityClassesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecPriorityClasses | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecPriorityClassesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecPriorityClasses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecPriorityClasses | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions {
  /**
  * Represents a scope's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#operator DataK8SCapsuleClastixIoTenantV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * The name of the scope that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#scope_name DataK8SCapsuleClastixIoTenantV1Beta1Manifest#scope_name}
  */
  readonly scopeName: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#values DataK8SCapsuleClastixIoTenantV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelector {
  /**
  * A list of scope selector requirements by scope of the resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#match_expressions DataK8SCapsuleClastixIoTenantV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItems {
  /**
  * hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#hard DataK8SCapsuleClastixIoTenantV1Beta1Manifest#hard}
  */
  readonly hard?: { [key: string]: string };
  /**
  * scopeSelector is also a collection of filters like scopes that must match each object tracked by a quota but expressed using ScopeSelectorOperator in combination with possible values. For a resource to match, both scopes AND scopeSelector (if specified in spec), must be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#scope_selector DataK8SCapsuleClastixIoTenantV1Beta1Manifest#scope_selector}
  */
  readonly scopeSelector?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelector;
  /**
  * A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#scopes DataK8SCapsuleClastixIoTenantV1Beta1Manifest#scopes}
  */
  readonly scopes?: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hard: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hard),
    scope_selector: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorToTerraform(struct!.scopeSelector),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItems | cdktf.IResolvable): any {
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
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorToHclTerraform(struct!.scopeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelector",
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItems | cdktf.IResolvable | undefined) {
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
  private _scopeSelector = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelectorOutputReference(this, "scope_selector");
  public get scopeSelector() {
    return this._scopeSelector;
  }
  public putScopeSelector(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsScopeSelector) {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsOutputReference {
    return new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#items DataK8SCapsuleClastixIoTenantV1Beta1Manifest#items}
  */
  readonly items?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItems[] | cdktf.IResolvable;
  /**
  * Define if the Resource Budget should compute resource across all Namespaces in the Tenant or individually per cluster. Default is Tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#scope DataK8SCapsuleClastixIoTenantV1Beta1Manifest#scope}
  */
  readonly scope?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsToTerraform, false)(struct!.items),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsList",
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotas | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotas | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasItems[] | cdktf.IResolvable) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAdditionalMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#annotations DataK8SCapsuleClastixIoTenantV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#labels DataK8SCapsuleClastixIoTenantV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAdditionalMetadataToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAdditionalMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAdditionalMetadataToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAdditionalMetadata | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAdditionalMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAdditionalMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAdditionalMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAllowedServices {
  /**
  * Specifies if ExternalName service type resources are allowed for the Tenant. Default is true. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#external_name DataK8SCapsuleClastixIoTenantV1Beta1Manifest#external_name}
  */
  readonly externalName?: boolean | cdktf.IResolvable;
  /**
  * Specifies if LoadBalancer service type resources are allowed for the Tenant. Default is true. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#load_balancer DataK8SCapsuleClastixIoTenantV1Beta1Manifest#load_balancer}
  */
  readonly loadBalancer?: boolean | cdktf.IResolvable;
  /**
  * Specifies if NodePort service type resources are allowed for the Tenant. Default is true. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#node_port DataK8SCapsuleClastixIoTenantV1Beta1Manifest#node_port}
  */
  readonly nodePort?: boolean | cdktf.IResolvable;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAllowedServicesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAllowedServices | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAllowedServicesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAllowedServices | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAllowedServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAllowedServices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAllowedServices | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsExternalIPs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#allowed DataK8SCapsuleClastixIoTenantV1Beta1Manifest#allowed}
  */
  readonly allowed: string[];
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsExternalIPsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsExternalIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsExternalIPsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsExternalIPs | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsExternalIPsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsExternalIPs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsExternalIPs | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenAnnotations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#denied DataK8SCapsuleClastixIoTenantV1Beta1Manifest#denied}
  */
  readonly denied?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#denied_regex DataK8SCapsuleClastixIoTenantV1Beta1Manifest#denied_regex}
  */
  readonly deniedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenAnnotationsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denied),
    denied_regex: cdktf.stringToTerraform(struct!.deniedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenAnnotationsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenAnnotations | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenAnnotationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenAnnotations | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#denied DataK8SCapsuleClastixIoTenantV1Beta1Manifest#denied}
  */
  readonly denied?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#denied_regex DataK8SCapsuleClastixIoTenantV1Beta1Manifest#denied_regex}
  */
  readonly deniedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenLabelsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denied),
    denied_regex: cdktf.stringToTerraform(struct!.deniedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenLabelsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenLabels | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenLabels | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptions {
  /**
  * Specifies additional labels and annotations the Capsule operator places on any Service resource in the Tenant. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#additional_metadata DataK8SCapsuleClastixIoTenantV1Beta1Manifest#additional_metadata}
  */
  readonly additionalMetadata?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAdditionalMetadata;
  /**
  * Block or deny certain type of Services. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#allowed_services DataK8SCapsuleClastixIoTenantV1Beta1Manifest#allowed_services}
  */
  readonly allowedServices?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAllowedServices;
  /**
  * Specifies the external IPs that can be used in Services with type ClusterIP. An empty list means no IPs are allowed. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#external_i_ps DataK8SCapsuleClastixIoTenantV1Beta1Manifest#external_i_ps}
  */
  readonly externalIPs?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsExternalIPs;
  /**
  * Define the annotations that a Tenant Owner cannot set for their Service resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#forbidden_annotations DataK8SCapsuleClastixIoTenantV1Beta1Manifest#forbidden_annotations}
  */
  readonly forbiddenAnnotations?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenAnnotations;
  /**
  * Define the labels that a Tenant Owner cannot set for their Service resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#forbidden_labels DataK8SCapsuleClastixIoTenantV1Beta1Manifest#forbidden_labels}
  */
  readonly forbiddenLabels?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenLabels;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_metadata: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAdditionalMetadataToTerraform(struct!.additionalMetadata),
    allowed_services: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAllowedServicesToTerraform(struct!.allowedServices),
    external_i_ps: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsExternalIPsToTerraform(struct!.externalIPs),
    forbidden_annotations: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenAnnotationsToTerraform(struct!.forbiddenAnnotations),
    forbidden_labels: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenLabelsToTerraform(struct!.forbiddenLabels),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_metadata: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAdditionalMetadataToHclTerraform(struct!.additionalMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAdditionalMetadata",
    },
    allowed_services: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAllowedServicesToHclTerraform(struct!.allowedServices),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAllowedServices",
    },
    external_i_ps: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsExternalIPsToHclTerraform(struct!.externalIPs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsExternalIPs",
    },
    forbidden_annotations: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenAnnotationsToHclTerraform(struct!.forbiddenAnnotations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenAnnotations",
    },
    forbidden_labels: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenLabelsToHclTerraform(struct!.forbiddenLabels),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenLabels",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptions | cdktf.IResolvable | undefined) {
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
  private _additionalMetadata = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAdditionalMetadataOutputReference(this, "additional_metadata");
  public get additionalMetadata() {
    return this._additionalMetadata;
  }
  public putAdditionalMetadata(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAdditionalMetadata) {
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
  private _allowedServices = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAllowedServicesOutputReference(this, "allowed_services");
  public get allowedServices() {
    return this._allowedServices;
  }
  public putAllowedServices(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsAllowedServices) {
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
  private _externalIPs = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsExternalIPsOutputReference(this, "external_i_ps");
  public get externalIPs() {
    return this._externalIPs;
  }
  public putExternalIPs(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsExternalIPs) {
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
  private _forbiddenAnnotations = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenAnnotationsOutputReference(this, "forbidden_annotations");
  public get forbiddenAnnotations() {
    return this._forbiddenAnnotations;
  }
  public putForbiddenAnnotations(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenAnnotations) {
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
  private _forbiddenLabels = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenLabelsOutputReference(this, "forbidden_labels");
  public get forbiddenLabels() {
    return this._forbiddenLabels;
  }
  public putForbiddenLabels(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsForbiddenLabels) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecStorageClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#allowed DataK8SCapsuleClastixIoTenantV1Beta1Manifest#allowed}
  */
  readonly allowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#allowed_regex DataK8SCapsuleClastixIoTenantV1Beta1Manifest#allowed_regex}
  */
  readonly allowedRegex?: string;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecStorageClassesToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    allowed_regex: cdktf.stringToTerraform(struct!.allowedRegex),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecStorageClassesToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecStorageClasses | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecStorageClassesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecStorageClasses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecStorageClasses | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpec {
  /**
  * Specifies additional RoleBindings assigned to the Tenant. Capsule will ensure that all namespaces in the Tenant always contain the RoleBinding for the given ClusterRole. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#additional_role_bindings DataK8SCapsuleClastixIoTenantV1Beta1Manifest#additional_role_bindings}
  */
  readonly additionalRoleBindings?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindings[] | cdktf.IResolvable;
  /**
  * Specifies the trusted Image Registries assigned to the Tenant. Capsule assures that all Pods resources created in the Tenant can use only one of the allowed trusted registries. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#container_registries DataK8SCapsuleClastixIoTenantV1Beta1Manifest#container_registries}
  */
  readonly containerRegistries?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecContainerRegistries;
  /**
  * Specify the allowed values for the imagePullPolicies option in Pod resources. Capsule assures that all Pod resources created in the Tenant can use only one of the allowed policy. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#image_pull_policies DataK8SCapsuleClastixIoTenantV1Beta1Manifest#image_pull_policies}
  */
  readonly imagePullPolicies?: string[];
  /**
  * Specifies options for the Ingress resources, such as allowed hostnames and IngressClass. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#ingress_options DataK8SCapsuleClastixIoTenantV1Beta1Manifest#ingress_options}
  */
  readonly ingressOptions?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptions;
  /**
  * Specifies the resource min/max usage restrictions to the Tenant. The assigned values are inherited by any namespace created in the Tenant. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#limit_ranges DataK8SCapsuleClastixIoTenantV1Beta1Manifest#limit_ranges}
  */
  readonly limitRanges?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRanges;
  /**
  * Specifies options for the Namespaces, such as additional metadata or maximum number of namespaces allowed for that Tenant. Once the namespace quota assigned to the Tenant has been reached, the Tenant owner cannot create further namespaces. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#namespace_options DataK8SCapsuleClastixIoTenantV1Beta1Manifest#namespace_options}
  */
  readonly namespaceOptions?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptions;
  /**
  * Specifies the NetworkPolicies assigned to the Tenant. The assigned NetworkPolicies are inherited by any namespace created in the Tenant. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#network_policies DataK8SCapsuleClastixIoTenantV1Beta1Manifest#network_policies}
  */
  readonly networkPolicies?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPolicies;
  /**
  * Specifies the label to control the placement of pods on a given pool of worker nodes. All namespaces created within the Tenant will have the node selector annotation. This annotation tells the Kubernetes scheduler to place pods on the nodes having the selector label. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#node_selector DataK8SCapsuleClastixIoTenantV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Specifies the owners of the Tenant. Mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#owners DataK8SCapsuleClastixIoTenantV1Beta1Manifest#owners}
  */
  readonly owners: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwners[] | cdktf.IResolvable;
  /**
  * Specifies the allowed priorityClasses assigned to the Tenant. Capsule assures that all Pods resources created in the Tenant can use only one of the allowed PriorityClasses. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#priority_classes DataK8SCapsuleClastixIoTenantV1Beta1Manifest#priority_classes}
  */
  readonly priorityClasses?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecPriorityClasses;
  /**
  * Specifies a list of ResourceQuota resources assigned to the Tenant. The assigned values are inherited by any namespace created in the Tenant. The Capsule operator aggregates ResourceQuota at Tenant level, so that the hard quota is never crossed for the given Tenant. This permits the Tenant owner to consume resources in the Tenant regardless of the namespace. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#resource_quotas DataK8SCapsuleClastixIoTenantV1Beta1Manifest#resource_quotas}
  */
  readonly resourceQuotas?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotas;
  /**
  * Specifies options for the Service, such as additional metadata or block of certain type of Services. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#service_options DataK8SCapsuleClastixIoTenantV1Beta1Manifest#service_options}
  */
  readonly serviceOptions?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptions;
  /**
  * Specifies the allowed StorageClasses assigned to the Tenant. Capsule assures that all PersistentVolumeClaim resources created in the Tenant can use only one of the allowed StorageClasses. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#storage_classes DataK8SCapsuleClastixIoTenantV1Beta1Manifest#storage_classes}
  */
  readonly storageClasses?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecStorageClasses;
}

export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecToTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_role_bindings: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsToTerraform, false)(struct!.additionalRoleBindings),
    container_registries: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecContainerRegistriesToTerraform(struct!.containerRegistries),
    image_pull_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.imagePullPolicies),
    ingress_options: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsToTerraform(struct!.ingressOptions),
    limit_ranges: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesToTerraform(struct!.limitRanges),
    namespace_options: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsToTerraform(struct!.namespaceOptions),
    network_policies: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesToTerraform(struct!.networkPolicies),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    owners: cdktf.listMapper(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersToTerraform, false)(struct!.owners),
    priority_classes: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecPriorityClassesToTerraform(struct!.priorityClasses),
    resource_quotas: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasToTerraform(struct!.resourceQuotas),
    service_options: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsToTerraform(struct!.serviceOptions),
    storage_classes: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecStorageClassesToTerraform(struct!.storageClasses),
  }
}


export function dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_role_bindings: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsToHclTerraform, false)(struct!.additionalRoleBindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsList",
    },
    container_registries: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecContainerRegistriesToHclTerraform(struct!.containerRegistries),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecContainerRegistries",
    },
    image_pull_policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.imagePullPolicies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ingress_options: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsToHclTerraform(struct!.ingressOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptions",
    },
    limit_ranges: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesToHclTerraform(struct!.limitRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRanges",
    },
    namespace_options: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsToHclTerraform(struct!.namespaceOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptions",
    },
    network_policies: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesToHclTerraform(struct!.networkPolicies),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPolicies",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    owners: {
      value: cdktf.listMapperHcl(dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersToHclTerraform, false)(struct!.owners),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersList",
    },
    priority_classes: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecPriorityClassesToHclTerraform(struct!.priorityClasses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecPriorityClasses",
    },
    resource_quotas: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasToHclTerraform(struct!.resourceQuotas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotas",
    },
    service_options: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsToHclTerraform(struct!.serviceOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptions",
    },
    storage_classes: {
      value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecStorageClassesToHclTerraform(struct!.storageClasses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecStorageClasses",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._priorityClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClasses = this._priorityClasses?.internalValue;
    }
    if (this._resourceQuotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceQuotas = this._resourceQuotas?.internalValue;
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

  public set internalValue(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalRoleBindings.internalValue = undefined;
      this._containerRegistries.internalValue = undefined;
      this._imagePullPolicies = undefined;
      this._ingressOptions.internalValue = undefined;
      this._limitRanges.internalValue = undefined;
      this._namespaceOptions.internalValue = undefined;
      this._networkPolicies.internalValue = undefined;
      this._nodeSelector = undefined;
      this._owners.internalValue = undefined;
      this._priorityClasses.internalValue = undefined;
      this._resourceQuotas.internalValue = undefined;
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
      this._imagePullPolicies = value.imagePullPolicies;
      this._ingressOptions.internalValue = value.ingressOptions;
      this._limitRanges.internalValue = value.limitRanges;
      this._namespaceOptions.internalValue = value.namespaceOptions;
      this._networkPolicies.internalValue = value.networkPolicies;
      this._nodeSelector = value.nodeSelector;
      this._owners.internalValue = value.owners;
      this._priorityClasses.internalValue = value.priorityClasses;
      this._resourceQuotas.internalValue = value.resourceQuotas;
      this._serviceOptions.internalValue = value.serviceOptions;
      this._storageClasses.internalValue = value.storageClasses;
    }
  }

  // additional_role_bindings - computed: false, optional: true, required: false
  private _additionalRoleBindings = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindingsList(this, "additional_role_bindings", false);
  public get additionalRoleBindings() {
    return this._additionalRoleBindings;
  }
  public putAdditionalRoleBindings(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecAdditionalRoleBindings[] | cdktf.IResolvable) {
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
  private _containerRegistries = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecContainerRegistriesOutputReference(this, "container_registries");
  public get containerRegistries() {
    return this._containerRegistries;
  }
  public putContainerRegistries(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecContainerRegistries) {
    this._containerRegistries.internalValue = value;
  }
  public resetContainerRegistries() {
    this._containerRegistries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistriesInput() {
    return this._containerRegistries.internalValue;
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
  private _ingressOptions = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptionsOutputReference(this, "ingress_options");
  public get ingressOptions() {
    return this._ingressOptions;
  }
  public putIngressOptions(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecIngressOptions) {
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
  private _limitRanges = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRangesOutputReference(this, "limit_ranges");
  public get limitRanges() {
    return this._limitRanges;
  }
  public putLimitRanges(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecLimitRanges) {
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
  private _namespaceOptions = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptionsOutputReference(this, "namespace_options");
  public get namespaceOptions() {
    return this._namespaceOptions;
  }
  public putNamespaceOptions(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNamespaceOptions) {
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
  private _networkPolicies = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPoliciesOutputReference(this, "network_policies");
  public get networkPolicies() {
    return this._networkPolicies;
  }
  public putNetworkPolicies(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecNetworkPolicies) {
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
  private _owners = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwnersList(this, "owners", false);
  public get owners() {
    return this._owners;
  }
  public putOwners(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOwners[] | cdktf.IResolvable) {
    this._owners.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners.internalValue;
  }

  // priority_classes - computed: false, optional: true, required: false
  private _priorityClasses = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecPriorityClassesOutputReference(this, "priority_classes");
  public get priorityClasses() {
    return this._priorityClasses;
  }
  public putPriorityClasses(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecPriorityClasses) {
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
  private _resourceQuotas = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotasOutputReference(this, "resource_quotas");
  public get resourceQuotas() {
    return this._resourceQuotas;
  }
  public putResourceQuotas(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecResourceQuotas) {
    this._resourceQuotas.internalValue = value;
  }
  public resetResourceQuotas() {
    this._resourceQuotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceQuotasInput() {
    return this._resourceQuotas.internalValue;
  }

  // service_options - computed: false, optional: true, required: false
  private _serviceOptions = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptionsOutputReference(this, "service_options");
  public get serviceOptions() {
    return this._serviceOptions;
  }
  public putServiceOptions(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecServiceOptions) {
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
  private _storageClasses = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecStorageClassesOutputReference(this, "storage_classes");
  public get storageClasses() {
    return this._storageClasses;
  }
  public putStorageClasses(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecStorageClasses) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest k8s_capsule_clastix_io_tenant_v1beta1_manifest}
*/
export class DataK8SCapsuleClastixIoTenantV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_capsule_clastix_io_tenant_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCapsuleClastixIoTenantV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCapsuleClastixIoTenantV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SCapsuleClastixIoTenantV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCapsuleClastixIoTenantV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_capsule_clastix_io_tenant_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_tenant_v1beta1_manifest k8s_capsule_clastix_io_tenant_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCapsuleClastixIoTenantV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCapsuleClastixIoTenantV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_capsule_clastix_io_tenant_v1beta1_manifest',
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
  private _metadata = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpec) {
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
      metadata: dataK8SCapsuleClastixIoTenantV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SCapsuleClastixIoTenantV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapsuleClastixIoTenantV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
