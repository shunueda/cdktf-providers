// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SArgoprojIoAppProjectV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#metadata DataK8SArgoprojIoAppProjectV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SArgoprojIoAppProjectV1Alpha1ManifestMetadata;
  /**
  * AppProjectSpec is the specification of an AppProject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#spec DataK8SArgoprojIoAppProjectV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpec;
}
export interface DataK8SArgoprojIoAppProjectV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#annotations DataK8SArgoprojIoAppProjectV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#labels DataK8SArgoprojIoAppProjectV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#name DataK8SArgoprojIoAppProjectV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#namespace DataK8SArgoprojIoAppProjectV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoAppProjectV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#group DataK8SArgoprojIoAppProjectV1Alpha1Manifest#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#kind DataK8SArgoprojIoAppProjectV1Alpha1Manifest#kind}
  */
  readonly kind: string;
}

export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStructToTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStructToHclTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStructList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStruct[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStructOutputReference {
    return new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#group DataK8SArgoprojIoAppProjectV1Alpha1Manifest#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#kind DataK8SArgoprojIoAppProjectV1Alpha1Manifest#kind}
  */
  readonly kind: string;
}

export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStructToTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStructToHclTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStructList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStruct[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStructOutputReference {
    return new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinations {
  /**
  * Name is an alternate way of specifying the target cluster by its symbolic name. This must be set if Server is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#name DataK8SArgoprojIoAppProjectV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the target namespace for the application's resources. The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#namespace DataK8SArgoprojIoAppProjectV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Server specifies the URL of the target cluster's Kubernetes control plane API. This must be set if Name is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#server DataK8SArgoprojIoAppProjectV1Alpha1Manifest#server}
  */
  readonly server?: string;
}

export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinationsToTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinationsToHclTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinations | cdktf.IResolvable): any {
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
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinations | cdktf.IResolvable | undefined {
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
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._server = undefined;
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
      this._server = value.server;
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinationsOutputReference {
    return new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#group DataK8SArgoprojIoAppProjectV1Alpha1Manifest#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#kind DataK8SArgoprojIoAppProjectV1Alpha1Manifest#kind}
  */
  readonly kind: string;
}

export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStructToTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStructToHclTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStructList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStruct[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStructOutputReference {
    return new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#group DataK8SArgoprojIoAppProjectV1Alpha1Manifest#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#kind DataK8SArgoprojIoAppProjectV1Alpha1Manifest#kind}
  */
  readonly kind: string;
}

export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStructToTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStructToHclTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStructList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStruct[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStructOutputReference {
    return new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#group DataK8SArgoprojIoAppProjectV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#kind DataK8SArgoprojIoAppProjectV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#name DataK8SArgoprojIoAppProjectV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnoreToTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnoreToHclTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
    }
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
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnoreList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnore[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnoreOutputReference {
    return new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResources {
  /**
  * Ignore contains a list of resources that are to be excluded from orphaned resources monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#ignore DataK8SArgoprojIoAppProjectV1Alpha1Manifest#ignore}
  */
  readonly ignore?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnore[] | cdktf.IResolvable;
  /**
  * Warn indicates if warning condition should be created for apps which have orphaned resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#warn DataK8SArgoprojIoAppProjectV1Alpha1Manifest#warn}
  */
  readonly warn?: boolean | cdktf.IResolvable;
}

export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesToTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore: cdktf.listMapper(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnoreToTerraform, false)(struct!.ignore),
    warn: cdktf.booleanToTerraform(struct!.warn),
  }
}


export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesToHclTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnoreToHclTerraform, false)(struct!.ignore),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnoreList",
    },
    warn: {
      value: cdktf.booleanToHclTerraform(struct!.warn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore?.internalValue;
    }
    if (this._warn !== undefined) {
      hasAnyValues = true;
      internalValueResult.warn = this._warn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignore.internalValue = undefined;
      this._warn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignore.internalValue = value.ignore;
      this._warn = value.warn;
    }
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore = new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnoreList(this, "ignore", false);
  public get ignore() {
    return this._ignore;
  }
  public putIgnore(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesIgnore[] | cdktf.IResolvable) {
    this._ignore.internalValue = value;
  }
  public resetIgnore() {
    this._ignore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore.internalValue;
  }

  // warn - computed: false, optional: true, required: false
  private _warn?: boolean | cdktf.IResolvable; 
  public get warn() {
    return this.getBooleanAttribute('warn');
  }
  public set warn(value: boolean | cdktf.IResolvable) {
    this._warn = value;
  }
  public resetWarn() {
    this._warn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnInput() {
    return this._warn;
  }
}
export interface DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#exp DataK8SArgoprojIoAppProjectV1Alpha1Manifest#exp}
  */
  readonly exp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#iat DataK8SArgoprojIoAppProjectV1Alpha1Manifest#iat}
  */
  readonly iat: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#id DataK8SArgoprojIoAppProjectV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokensToTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exp: cdktf.numberToTerraform(struct!.exp),
    iat: cdktf.numberToTerraform(struct!.iat),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokensToHclTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exp: {
      value: cdktf.numberToHclTerraform(struct!.exp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iat: {
      value: cdktf.numberToHclTerraform(struct!.iat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exp !== undefined) {
      hasAnyValues = true;
      internalValueResult.exp = this._exp;
    }
    if (this._iat !== undefined) {
      hasAnyValues = true;
      internalValueResult.iat = this._iat;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exp = undefined;
      this._iat = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exp = value.exp;
      this._iat = value.iat;
      this._id = value.id;
    }
  }

  // exp - computed: false, optional: true, required: false
  private _exp?: number; 
  public get exp() {
    return this.getNumberAttribute('exp');
  }
  public set exp(value: number) {
    this._exp = value;
  }
  public resetExp() {
    this._exp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expInput() {
    return this._exp;
  }

  // iat - computed: false, optional: false, required: true
  private _iat?: number; 
  public get iat() {
    return this.getNumberAttribute('iat');
  }
  public set iat(value: number) {
    this._iat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iatInput() {
    return this._iat;
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
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokensList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokens[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokensOutputReference {
    return new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRoles {
  /**
  * Description is a description of the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#description DataK8SArgoprojIoAppProjectV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Groups are a list of OIDC group claims bound to this role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#groups DataK8SArgoprojIoAppProjectV1Alpha1Manifest#groups}
  */
  readonly groups?: string[];
  /**
  * JWTTokens are a list of generated JWT tokens bound to this role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#jwt_tokens DataK8SArgoprojIoAppProjectV1Alpha1Manifest#jwt_tokens}
  */
  readonly jwtTokens?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokens[] | cdktf.IResolvable;
  /**
  * Name is a name for this role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#name DataK8SArgoprojIoAppProjectV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Policies Stores a list of casbin formatted strings that define access policies for the role in the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#policies DataK8SArgoprojIoAppProjectV1Alpha1Manifest#policies}
  */
  readonly policies?: string[];
}

export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesToTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    jwt_tokens: cdktf.listMapper(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokensToTerraform, false)(struct!.jwtTokens),
    name: cdktf.stringToTerraform(struct!.name),
    policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policies),
  }
}


export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesToHclTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRoles | cdktf.IResolvable): any {
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
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jwt_tokens: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokensToHclTerraform, false)(struct!.jwtTokens),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokensList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._jwtTokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtTokens = this._jwtTokens?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._groups = undefined;
      this._jwtTokens.internalValue = undefined;
      this._name = undefined;
      this._policies = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._groups = value.groups;
      this._jwtTokens.internalValue = value.jwtTokens;
      this._name = value.name;
      this._policies = value.policies;
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

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // jwt_tokens - computed: false, optional: true, required: false
  private _jwtTokens = new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokensList(this, "jwt_tokens", false);
  public get jwtTokens() {
    return this._jwtTokens;
  }
  public putJwtTokens(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesJwtTokens[] | cdktf.IResolvable) {
    this._jwtTokens.internalValue = value;
  }
  public resetJwtTokens() {
    this._jwtTokens.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtTokensInput() {
    return this._jwtTokens.internalValue;
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

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return this.getListAttribute('policies');
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesOutputReference {
    return new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeys {
  /**
  * The ID of the key in hexadecimal notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#key_id DataK8SArgoprojIoAppProjectV1Alpha1Manifest#key_id}
  */
  readonly keyId: string;
}

export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeysToTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}


export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeysToHclTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeysList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeys[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeysOutputReference {
    return new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindows {
  /**
  * Applications contains a list of applications that the window will apply to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#applications DataK8SArgoprojIoAppProjectV1Alpha1Manifest#applications}
  */
  readonly applications?: string[];
  /**
  * Clusters contains a list of clusters that the window will apply to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#clusters DataK8SArgoprojIoAppProjectV1Alpha1Manifest#clusters}
  */
  readonly clusters?: string[];
  /**
  * Duration is the amount of time the sync window will be open
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#duration DataK8SArgoprojIoAppProjectV1Alpha1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * Kind defines if the window allows or blocks syncs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#kind DataK8SArgoprojIoAppProjectV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * ManualSync enables manual syncs when they would otherwise be blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#manual_sync DataK8SArgoprojIoAppProjectV1Alpha1Manifest#manual_sync}
  */
  readonly manualSync?: boolean | cdktf.IResolvable;
  /**
  * Namespaces contains a list of namespaces that the window will apply to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#namespaces DataK8SArgoprojIoAppProjectV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Schedule is the time the window will begin, specified in cron format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#schedule DataK8SArgoprojIoAppProjectV1Alpha1Manifest#schedule}
  */
  readonly schedule?: string;
  /**
  * TimeZone of the sync that will be applied to the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#time_zone DataK8SArgoprojIoAppProjectV1Alpha1Manifest#time_zone}
  */
  readonly timeZone?: string;
}

export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindowsToTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
    clusters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusters),
    duration: cdktf.stringToTerraform(struct!.duration),
    kind: cdktf.stringToTerraform(struct!.kind),
    manual_sync: cdktf.booleanToTerraform(struct!.manualSync),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindowsToHclTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    clusters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
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
    manual_sync: {
      value: cdktf.booleanToHclTerraform(struct!.manualSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._clusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._manualSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualSync = this._manualSync;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applications = undefined;
      this._clusters = undefined;
      this._duration = undefined;
      this._kind = undefined;
      this._manualSync = undefined;
      this._namespaces = undefined;
      this._schedule = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applications = value.applications;
      this._clusters = value.clusters;
      this._duration = value.duration;
      this._kind = value.kind;
      this._manualSync = value.manualSync;
      this._namespaces = value.namespaces;
      this._schedule = value.schedule;
      this._timeZone = value.timeZone;
    }
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters?: string[]; 
  public get clusters() {
    return this.getListAttribute('clusters');
  }
  public set clusters(value: string[]) {
    this._clusters = value;
  }
  public resetClusters() {
    this._clusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // manual_sync - computed: false, optional: true, required: false
  private _manualSync?: boolean | cdktf.IResolvable; 
  public get manualSync() {
    return this.getBooleanAttribute('manual_sync');
  }
  public set manualSync(value: boolean | cdktf.IResolvable) {
    this._manualSync = value;
  }
  public resetManualSync() {
    this._manualSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualSyncInput() {
    return this._manualSync;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindowsList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindows[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindowsOutputReference {
    return new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpec {
  /**
  * ClusterResourceBlacklist contains list of blacklisted cluster level resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#cluster_resource_blacklist DataK8SArgoprojIoAppProjectV1Alpha1Manifest#cluster_resource_blacklist}
  */
  readonly clusterResourceBlacklist?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStruct[] | cdktf.IResolvable;
  /**
  * ClusterResourceWhitelist contains list of whitelisted cluster level resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#cluster_resource_whitelist DataK8SArgoprojIoAppProjectV1Alpha1Manifest#cluster_resource_whitelist}
  */
  readonly clusterResourceWhitelist?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStruct[] | cdktf.IResolvable;
  /**
  * Description contains optional project description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#description DataK8SArgoprojIoAppProjectV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Destinations contains list of destinations available for deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#destinations DataK8SArgoprojIoAppProjectV1Alpha1Manifest#destinations}
  */
  readonly destinations?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinations[] | cdktf.IResolvable;
  /**
  * NamespaceResourceBlacklist contains list of blacklisted namespace level resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#namespace_resource_blacklist DataK8SArgoprojIoAppProjectV1Alpha1Manifest#namespace_resource_blacklist}
  */
  readonly namespaceResourceBlacklist?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStruct[] | cdktf.IResolvable;
  /**
  * NamespaceResourceWhitelist contains list of whitelisted namespace level resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#namespace_resource_whitelist DataK8SArgoprojIoAppProjectV1Alpha1Manifest#namespace_resource_whitelist}
  */
  readonly namespaceResourceWhitelist?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStruct[] | cdktf.IResolvable;
  /**
  * OrphanedResources specifies if controller should monitor orphaned resources of apps in this project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#orphaned_resources DataK8SArgoprojIoAppProjectV1Alpha1Manifest#orphaned_resources}
  */
  readonly orphanedResources?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResources;
  /**
  * PermitOnlyProjectScopedClusters determines whether destinations can only reference clusters which are project-scoped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#permit_only_project_scoped_clusters DataK8SArgoprojIoAppProjectV1Alpha1Manifest#permit_only_project_scoped_clusters}
  */
  readonly permitOnlyProjectScopedClusters?: boolean | cdktf.IResolvable;
  /**
  * Roles are user defined RBAC roles associated with this project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#roles DataK8SArgoprojIoAppProjectV1Alpha1Manifest#roles}
  */
  readonly roles?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRoles[] | cdktf.IResolvable;
  /**
  * SignatureKeys contains a list of PGP key IDs that commits in Git must be signed with in order to be allowed for sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#signature_keys DataK8SArgoprojIoAppProjectV1Alpha1Manifest#signature_keys}
  */
  readonly signatureKeys?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeys[] | cdktf.IResolvable;
  /**
  * SourceNamespaces defines the namespaces application resources are allowed to be created in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#source_namespaces DataK8SArgoprojIoAppProjectV1Alpha1Manifest#source_namespaces}
  */
  readonly sourceNamespaces?: string[];
  /**
  * SourceRepos contains list of repository URLs which can be used for deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#source_repos DataK8SArgoprojIoAppProjectV1Alpha1Manifest#source_repos}
  */
  readonly sourceRepos?: string[];
  /**
  * SyncWindows controls when syncs can be run for apps in this project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#sync_windows DataK8SArgoprojIoAppProjectV1Alpha1Manifest#sync_windows}
  */
  readonly syncWindows?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindows[] | cdktf.IResolvable;
}

export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecToTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_resource_blacklist: cdktf.listMapper(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStructToTerraform, false)(struct!.clusterResourceBlacklist),
    cluster_resource_whitelist: cdktf.listMapper(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStructToTerraform, false)(struct!.clusterResourceWhitelist),
    description: cdktf.stringToTerraform(struct!.description),
    destinations: cdktf.listMapper(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinationsToTerraform, false)(struct!.destinations),
    namespace_resource_blacklist: cdktf.listMapper(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStructToTerraform, false)(struct!.namespaceResourceBlacklist),
    namespace_resource_whitelist: cdktf.listMapper(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStructToTerraform, false)(struct!.namespaceResourceWhitelist),
    orphaned_resources: dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesToTerraform(struct!.orphanedResources),
    permit_only_project_scoped_clusters: cdktf.booleanToTerraform(struct!.permitOnlyProjectScopedClusters),
    roles: cdktf.listMapper(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesToTerraform, false)(struct!.roles),
    signature_keys: cdktf.listMapper(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeysToTerraform, false)(struct!.signatureKeys),
    source_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceNamespaces),
    source_repos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceRepos),
    sync_windows: cdktf.listMapper(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindowsToTerraform, false)(struct!.syncWindows),
  }
}


export function dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_resource_blacklist: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStructToHclTerraform, false)(struct!.clusterResourceBlacklist),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStructList",
    },
    cluster_resource_whitelist: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStructToHclTerraform, false)(struct!.clusterResourceWhitelist),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStructList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destinations: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinationsList",
    },
    namespace_resource_blacklist: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStructToHclTerraform, false)(struct!.namespaceResourceBlacklist),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStructList",
    },
    namespace_resource_whitelist: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStructToHclTerraform, false)(struct!.namespaceResourceWhitelist),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStructList",
    },
    orphaned_resources: {
      value: dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesToHclTerraform(struct!.orphanedResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResources",
    },
    permit_only_project_scoped_clusters: {
      value: cdktf.booleanToHclTerraform(struct!.permitOnlyProjectScopedClusters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    roles: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesToHclTerraform, false)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesList",
    },
    signature_keys: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeysToHclTerraform, false)(struct!.signatureKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeysList",
    },
    source_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_repos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceRepos),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sync_windows: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindowsToHclTerraform, false)(struct!.syncWindows),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterResourceBlacklist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterResourceBlacklist = this._clusterResourceBlacklist?.internalValue;
    }
    if (this._clusterResourceWhitelist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterResourceWhitelist = this._clusterResourceWhitelist?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._namespaceResourceBlacklist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceResourceBlacklist = this._namespaceResourceBlacklist?.internalValue;
    }
    if (this._namespaceResourceWhitelist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceResourceWhitelist = this._namespaceResourceWhitelist?.internalValue;
    }
    if (this._orphanedResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orphanedResources = this._orphanedResources?.internalValue;
    }
    if (this._permitOnlyProjectScopedClusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitOnlyProjectScopedClusters = this._permitOnlyProjectScopedClusters;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    if (this._signatureKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureKeys = this._signatureKeys?.internalValue;
    }
    if (this._sourceNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNamespaces = this._sourceNamespaces;
    }
    if (this._sourceRepos !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRepos = this._sourceRepos;
    }
    if (this._syncWindows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncWindows = this._syncWindows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterResourceBlacklist.internalValue = undefined;
      this._clusterResourceWhitelist.internalValue = undefined;
      this._description = undefined;
      this._destinations.internalValue = undefined;
      this._namespaceResourceBlacklist.internalValue = undefined;
      this._namespaceResourceWhitelist.internalValue = undefined;
      this._orphanedResources.internalValue = undefined;
      this._permitOnlyProjectScopedClusters = undefined;
      this._roles.internalValue = undefined;
      this._signatureKeys.internalValue = undefined;
      this._sourceNamespaces = undefined;
      this._sourceRepos = undefined;
      this._syncWindows.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterResourceBlacklist.internalValue = value.clusterResourceBlacklist;
      this._clusterResourceWhitelist.internalValue = value.clusterResourceWhitelist;
      this._description = value.description;
      this._destinations.internalValue = value.destinations;
      this._namespaceResourceBlacklist.internalValue = value.namespaceResourceBlacklist;
      this._namespaceResourceWhitelist.internalValue = value.namespaceResourceWhitelist;
      this._orphanedResources.internalValue = value.orphanedResources;
      this._permitOnlyProjectScopedClusters = value.permitOnlyProjectScopedClusters;
      this._roles.internalValue = value.roles;
      this._signatureKeys.internalValue = value.signatureKeys;
      this._sourceNamespaces = value.sourceNamespaces;
      this._sourceRepos = value.sourceRepos;
      this._syncWindows.internalValue = value.syncWindows;
    }
  }

  // cluster_resource_blacklist - computed: false, optional: true, required: false
  private _clusterResourceBlacklist = new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStructList(this, "cluster_resource_blacklist", false);
  public get clusterResourceBlacklist() {
    return this._clusterResourceBlacklist;
  }
  public putClusterResourceBlacklist(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceBlacklistStruct[] | cdktf.IResolvable) {
    this._clusterResourceBlacklist.internalValue = value;
  }
  public resetClusterResourceBlacklist() {
    this._clusterResourceBlacklist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterResourceBlacklistInput() {
    return this._clusterResourceBlacklist.internalValue;
  }

  // cluster_resource_whitelist - computed: false, optional: true, required: false
  private _clusterResourceWhitelist = new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStructList(this, "cluster_resource_whitelist", false);
  public get clusterResourceWhitelist() {
    return this._clusterResourceWhitelist;
  }
  public putClusterResourceWhitelist(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecClusterResourceWhitelistStruct[] | cdktf.IResolvable) {
    this._clusterResourceWhitelist.internalValue = value;
  }
  public resetClusterResourceWhitelist() {
    this._clusterResourceWhitelist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterResourceWhitelistInput() {
    return this._clusterResourceWhitelist.internalValue;
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

  // destinations - computed: false, optional: true, required: false
  private _destinations = new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // namespace_resource_blacklist - computed: false, optional: true, required: false
  private _namespaceResourceBlacklist = new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStructList(this, "namespace_resource_blacklist", false);
  public get namespaceResourceBlacklist() {
    return this._namespaceResourceBlacklist;
  }
  public putNamespaceResourceBlacklist(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceBlacklistStruct[] | cdktf.IResolvable) {
    this._namespaceResourceBlacklist.internalValue = value;
  }
  public resetNamespaceResourceBlacklist() {
    this._namespaceResourceBlacklist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceResourceBlacklistInput() {
    return this._namespaceResourceBlacklist.internalValue;
  }

  // namespace_resource_whitelist - computed: false, optional: true, required: false
  private _namespaceResourceWhitelist = new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStructList(this, "namespace_resource_whitelist", false);
  public get namespaceResourceWhitelist() {
    return this._namespaceResourceWhitelist;
  }
  public putNamespaceResourceWhitelist(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecNamespaceResourceWhitelistStruct[] | cdktf.IResolvable) {
    this._namespaceResourceWhitelist.internalValue = value;
  }
  public resetNamespaceResourceWhitelist() {
    this._namespaceResourceWhitelist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceResourceWhitelistInput() {
    return this._namespaceResourceWhitelist.internalValue;
  }

  // orphaned_resources - computed: false, optional: true, required: false
  private _orphanedResources = new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResourcesOutputReference(this, "orphaned_resources");
  public get orphanedResources() {
    return this._orphanedResources;
  }
  public putOrphanedResources(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOrphanedResources) {
    this._orphanedResources.internalValue = value;
  }
  public resetOrphanedResources() {
    this._orphanedResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orphanedResourcesInput() {
    return this._orphanedResources.internalValue;
  }

  // permit_only_project_scoped_clusters - computed: false, optional: true, required: false
  private _permitOnlyProjectScopedClusters?: boolean | cdktf.IResolvable; 
  public get permitOnlyProjectScopedClusters() {
    return this.getBooleanAttribute('permit_only_project_scoped_clusters');
  }
  public set permitOnlyProjectScopedClusters(value: boolean | cdktf.IResolvable) {
    this._permitOnlyProjectScopedClusters = value;
  }
  public resetPermitOnlyProjectScopedClusters() {
    this._permitOnlyProjectScopedClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitOnlyProjectScopedClustersInput() {
    return this._permitOnlyProjectScopedClusters;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // signature_keys - computed: false, optional: true, required: false
  private _signatureKeys = new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeysList(this, "signature_keys", false);
  public get signatureKeys() {
    return this._signatureKeys;
  }
  public putSignatureKeys(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSignatureKeys[] | cdktf.IResolvable) {
    this._signatureKeys.internalValue = value;
  }
  public resetSignatureKeys() {
    this._signatureKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureKeysInput() {
    return this._signatureKeys.internalValue;
  }

  // source_namespaces - computed: false, optional: true, required: false
  private _sourceNamespaces?: string[]; 
  public get sourceNamespaces() {
    return this.getListAttribute('source_namespaces');
  }
  public set sourceNamespaces(value: string[]) {
    this._sourceNamespaces = value;
  }
  public resetSourceNamespaces() {
    this._sourceNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNamespacesInput() {
    return this._sourceNamespaces;
  }

  // source_repos - computed: false, optional: true, required: false
  private _sourceRepos?: string[]; 
  public get sourceRepos() {
    return this.getListAttribute('source_repos');
  }
  public set sourceRepos(value: string[]) {
    this._sourceRepos = value;
  }
  public resetSourceRepos() {
    this._sourceRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceReposInput() {
    return this._sourceRepos;
  }

  // sync_windows - computed: false, optional: true, required: false
  private _syncWindows = new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindowsList(this, "sync_windows", false);
  public get syncWindows() {
    return this._syncWindows;
  }
  public putSyncWindows(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecSyncWindows[] | cdktf.IResolvable) {
    this._syncWindows.internalValue = value;
  }
  public resetSyncWindows() {
    this._syncWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncWindowsInput() {
    return this._syncWindows.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest k8s_argoproj_io_app_project_v1alpha1_manifest}
*/
export class DataK8SArgoprojIoAppProjectV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_argoproj_io_app_project_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SArgoprojIoAppProjectV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SArgoprojIoAppProjectV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SArgoprojIoAppProjectV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SArgoprojIoAppProjectV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_argoproj_io_app_project_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/argoproj_io_app_project_v1alpha1_manifest k8s_argoproj_io_app_project_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SArgoprojIoAppProjectV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SArgoprojIoAppProjectV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_argoproj_io_app_project_v1alpha1_manifest',
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
  private _metadata = new DataK8SArgoprojIoAppProjectV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpec) {
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
      metadata: dataK8SArgoprojIoAppProjectV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SArgoprojIoAppProjectV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SArgoprojIoAppProjectV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SArgoprojIoAppProjectV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SArgoprojIoAppProjectV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
