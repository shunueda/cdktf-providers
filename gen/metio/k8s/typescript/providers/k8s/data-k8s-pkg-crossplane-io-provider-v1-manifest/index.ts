// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPkgCrossplaneIoProviderV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#metadata DataK8SPkgCrossplaneIoProviderV1Manifest#metadata}
  */
  readonly metadata: DataK8SPkgCrossplaneIoProviderV1ManifestMetadata;
  /**
  * ProviderSpec specifies details about a request to install a provider to Crossplane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#spec DataK8SPkgCrossplaneIoProviderV1Manifest#spec}
  */
  readonly spec?: DataK8SPkgCrossplaneIoProviderV1ManifestSpec;
}
export interface DataK8SPkgCrossplaneIoProviderV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#annotations DataK8SPkgCrossplaneIoProviderV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#labels DataK8SPkgCrossplaneIoProviderV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#name DataK8SPkgCrossplaneIoProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPkgCrossplaneIoProviderV1ManifestMetadataToTerraform(struct?: DataK8SPkgCrossplaneIoProviderV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPkgCrossplaneIoProviderV1ManifestMetadataToHclTerraform(struct?: DataK8SPkgCrossplaneIoProviderV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPkgCrossplaneIoProviderV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPkgCrossplaneIoProviderV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPkgCrossplaneIoProviderV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPkgCrossplaneIoProviderV1ManifestSpecControllerConfigRef {
  /**
  * Name of the ControllerConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#name DataK8SPkgCrossplaneIoProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPkgCrossplaneIoProviderV1ManifestSpecControllerConfigRefToTerraform(struct?: DataK8SPkgCrossplaneIoProviderV1ManifestSpecControllerConfigRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPkgCrossplaneIoProviderV1ManifestSpecControllerConfigRefToHclTerraform(struct?: DataK8SPkgCrossplaneIoProviderV1ManifestSpecControllerConfigRef | cdktf.IResolvable): any {
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

export class DataK8SPkgCrossplaneIoProviderV1ManifestSpecControllerConfigRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPkgCrossplaneIoProviderV1ManifestSpecControllerConfigRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPkgCrossplaneIoProviderV1ManifestSpecControllerConfigRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#name DataK8SPkgCrossplaneIoProviderV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecretsToTerraform(struct?: DataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecretsToHclTerraform(struct?: DataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecretsOutputReference {
    return new DataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPkgCrossplaneIoProviderV1ManifestSpecRuntimeConfigRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#api_version DataK8SPkgCrossplaneIoProviderV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#kind DataK8SPkgCrossplaneIoProviderV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the RuntimeConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#name DataK8SPkgCrossplaneIoProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPkgCrossplaneIoProviderV1ManifestSpecRuntimeConfigRefToTerraform(struct?: DataK8SPkgCrossplaneIoProviderV1ManifestSpecRuntimeConfigRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPkgCrossplaneIoProviderV1ManifestSpecRuntimeConfigRefToHclTerraform(struct?: DataK8SPkgCrossplaneIoProviderV1ManifestSpecRuntimeConfigRef | cdktf.IResolvable): any {
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

export class DataK8SPkgCrossplaneIoProviderV1ManifestSpecRuntimeConfigRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPkgCrossplaneIoProviderV1ManifestSpecRuntimeConfigRef | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPkgCrossplaneIoProviderV1ManifestSpecRuntimeConfigRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
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
export interface DataK8SPkgCrossplaneIoProviderV1ManifestSpec {
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#common_labels DataK8SPkgCrossplaneIoProviderV1Manifest#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * ControllerConfigRef references a ControllerConfig resource that will be used to configure the packaged controller Deployment. Deprecated: Use RuntimeConfigReference instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#controller_config_ref DataK8SPkgCrossplaneIoProviderV1Manifest#controller_config_ref}
  */
  readonly controllerConfigRef?: DataK8SPkgCrossplaneIoProviderV1ManifestSpecControllerConfigRef;
  /**
  * IgnoreCrossplaneConstraints indicates to the package manager whether to honor Crossplane version constrains specified by the package. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#ignore_crossplane_constraints DataK8SPkgCrossplaneIoProviderV1Manifest#ignore_crossplane_constraints}
  */
  readonly ignoreCrossplaneConstraints?: boolean | cdktf.IResolvable;
  /**
  * Package is the name of the package that is being requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#package DataK8SPkgCrossplaneIoProviderV1Manifest#package}
  */
  readonly package: string;
  /**
  * PackagePullPolicy defines the pull policy for the package. Default is IfNotPresent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#package_pull_policy DataK8SPkgCrossplaneIoProviderV1Manifest#package_pull_policy}
  */
  readonly packagePullPolicy?: string;
  /**
  * PackagePullSecrets are named secrets in the same namespace that can be used to fetch packages from private registries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#package_pull_secrets DataK8SPkgCrossplaneIoProviderV1Manifest#package_pull_secrets}
  */
  readonly packagePullSecrets?: DataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecrets[] | cdktf.IResolvable;
  /**
  * RevisionActivationPolicy specifies how the package controller should update from one revision to the next. Options are Automatic or Manual. Default is Automatic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#revision_activation_policy DataK8SPkgCrossplaneIoProviderV1Manifest#revision_activation_policy}
  */
  readonly revisionActivationPolicy?: string;
  /**
  * RevisionHistoryLimit dictates how the package controller cleans up old inactive package revisions. Defaults to 1. Can be disabled by explicitly setting to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#revision_history_limit DataK8SPkgCrossplaneIoProviderV1Manifest#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * RuntimeConfigRef references a RuntimeConfig resource that will be used to configure the package runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#runtime_config_ref DataK8SPkgCrossplaneIoProviderV1Manifest#runtime_config_ref}
  */
  readonly runtimeConfigRef?: DataK8SPkgCrossplaneIoProviderV1ManifestSpecRuntimeConfigRef;
  /**
  * SkipDependencyResolution indicates to the package manager whether to skip resolving dependencies for a package. Setting this value to true may have unintended consequences. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#skip_dependency_resolution DataK8SPkgCrossplaneIoProviderV1Manifest#skip_dependency_resolution}
  */
  readonly skipDependencyResolution?: boolean | cdktf.IResolvable;
}

export function dataK8SPkgCrossplaneIoProviderV1ManifestSpecToTerraform(struct?: DataK8SPkgCrossplaneIoProviderV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    controller_config_ref: dataK8SPkgCrossplaneIoProviderV1ManifestSpecControllerConfigRefToTerraform(struct!.controllerConfigRef),
    ignore_crossplane_constraints: cdktf.booleanToTerraform(struct!.ignoreCrossplaneConstraints),
    package: cdktf.stringToTerraform(struct!.package),
    package_pull_policy: cdktf.stringToTerraform(struct!.packagePullPolicy),
    package_pull_secrets: cdktf.listMapper(dataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecretsToTerraform, false)(struct!.packagePullSecrets),
    revision_activation_policy: cdktf.stringToTerraform(struct!.revisionActivationPolicy),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    runtime_config_ref: dataK8SPkgCrossplaneIoProviderV1ManifestSpecRuntimeConfigRefToTerraform(struct!.runtimeConfigRef),
    skip_dependency_resolution: cdktf.booleanToTerraform(struct!.skipDependencyResolution),
  }
}


export function dataK8SPkgCrossplaneIoProviderV1ManifestSpecToHclTerraform(struct?: DataK8SPkgCrossplaneIoProviderV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    controller_config_ref: {
      value: dataK8SPkgCrossplaneIoProviderV1ManifestSpecControllerConfigRefToHclTerraform(struct!.controllerConfigRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPkgCrossplaneIoProviderV1ManifestSpecControllerConfigRef",
    },
    ignore_crossplane_constraints: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCrossplaneConstraints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    package: {
      value: cdktf.stringToHclTerraform(struct!.package),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.packagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecretsToHclTerraform, false)(struct!.packagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecretsList",
    },
    revision_activation_policy: {
      value: cdktf.stringToHclTerraform(struct!.revisionActivationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.revisionHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runtime_config_ref: {
      value: dataK8SPkgCrossplaneIoProviderV1ManifestSpecRuntimeConfigRefToHclTerraform(struct!.runtimeConfigRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPkgCrossplaneIoProviderV1ManifestSpecRuntimeConfigRef",
    },
    skip_dependency_resolution: {
      value: cdktf.booleanToHclTerraform(struct!.skipDependencyResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPkgCrossplaneIoProviderV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPkgCrossplaneIoProviderV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._controllerConfigRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerConfigRef = this._controllerConfigRef?.internalValue;
    }
    if (this._ignoreCrossplaneConstraints !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCrossplaneConstraints = this._ignoreCrossplaneConstraints;
    }
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    if (this._packagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.packagePullPolicy = this._packagePullPolicy;
    }
    if (this._packagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packagePullSecrets = this._packagePullSecrets?.internalValue;
    }
    if (this._revisionActivationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionActivationPolicy = this._revisionActivationPolicy;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._runtimeConfigRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeConfigRef = this._runtimeConfigRef?.internalValue;
    }
    if (this._skipDependencyResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDependencyResolution = this._skipDependencyResolution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPkgCrossplaneIoProviderV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonLabels = undefined;
      this._controllerConfigRef.internalValue = undefined;
      this._ignoreCrossplaneConstraints = undefined;
      this._package = undefined;
      this._packagePullPolicy = undefined;
      this._packagePullSecrets.internalValue = undefined;
      this._revisionActivationPolicy = undefined;
      this._revisionHistoryLimit = undefined;
      this._runtimeConfigRef.internalValue = undefined;
      this._skipDependencyResolution = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonLabels = value.commonLabels;
      this._controllerConfigRef.internalValue = value.controllerConfigRef;
      this._ignoreCrossplaneConstraints = value.ignoreCrossplaneConstraints;
      this._package = value.package;
      this._packagePullPolicy = value.packagePullPolicy;
      this._packagePullSecrets.internalValue = value.packagePullSecrets;
      this._revisionActivationPolicy = value.revisionActivationPolicy;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._runtimeConfigRef.internalValue = value.runtimeConfigRef;
      this._skipDependencyResolution = value.skipDependencyResolution;
    }
  }

  // common_labels - computed: false, optional: true, required: false
  private _commonLabels?: { [key: string]: string }; 
  public get commonLabels() {
    return this.getStringMapAttribute('common_labels');
  }
  public set commonLabels(value: { [key: string]: string }) {
    this._commonLabels = value;
  }
  public resetCommonLabels() {
    this._commonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonLabelsInput() {
    return this._commonLabels;
  }

  // controller_config_ref - computed: false, optional: true, required: false
  private _controllerConfigRef = new DataK8SPkgCrossplaneIoProviderV1ManifestSpecControllerConfigRefOutputReference(this, "controller_config_ref");
  public get controllerConfigRef() {
    return this._controllerConfigRef;
  }
  public putControllerConfigRef(value: DataK8SPkgCrossplaneIoProviderV1ManifestSpecControllerConfigRef) {
    this._controllerConfigRef.internalValue = value;
  }
  public resetControllerConfigRef() {
    this._controllerConfigRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerConfigRefInput() {
    return this._controllerConfigRef.internalValue;
  }

  // ignore_crossplane_constraints - computed: false, optional: true, required: false
  private _ignoreCrossplaneConstraints?: boolean | cdktf.IResolvable; 
  public get ignoreCrossplaneConstraints() {
    return this.getBooleanAttribute('ignore_crossplane_constraints');
  }
  public set ignoreCrossplaneConstraints(value: boolean | cdktf.IResolvable) {
    this._ignoreCrossplaneConstraints = value;
  }
  public resetIgnoreCrossplaneConstraints() {
    this._ignoreCrossplaneConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCrossplaneConstraintsInput() {
    return this._ignoreCrossplaneConstraints;
  }

  // package - computed: false, optional: false, required: true
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // package_pull_policy - computed: false, optional: true, required: false
  private _packagePullPolicy?: string; 
  public get packagePullPolicy() {
    return this.getStringAttribute('package_pull_policy');
  }
  public set packagePullPolicy(value: string) {
    this._packagePullPolicy = value;
  }
  public resetPackagePullPolicy() {
    this._packagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagePullPolicyInput() {
    return this._packagePullPolicy;
  }

  // package_pull_secrets - computed: false, optional: true, required: false
  private _packagePullSecrets = new DataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecretsList(this, "package_pull_secrets", false);
  public get packagePullSecrets() {
    return this._packagePullSecrets;
  }
  public putPackagePullSecrets(value: DataK8SPkgCrossplaneIoProviderV1ManifestSpecPackagePullSecrets[] | cdktf.IResolvable) {
    this._packagePullSecrets.internalValue = value;
  }
  public resetPackagePullSecrets() {
    this._packagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagePullSecretsInput() {
    return this._packagePullSecrets.internalValue;
  }

  // revision_activation_policy - computed: false, optional: true, required: false
  private _revisionActivationPolicy?: string; 
  public get revisionActivationPolicy() {
    return this.getStringAttribute('revision_activation_policy');
  }
  public set revisionActivationPolicy(value: string) {
    this._revisionActivationPolicy = value;
  }
  public resetRevisionActivationPolicy() {
    this._revisionActivationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionActivationPolicyInput() {
    return this._revisionActivationPolicy;
  }

  // revision_history_limit - computed: false, optional: true, required: false
  private _revisionHistoryLimit?: number; 
  public get revisionHistoryLimit() {
    return this.getNumberAttribute('revision_history_limit');
  }
  public set revisionHistoryLimit(value: number) {
    this._revisionHistoryLimit = value;
  }
  public resetRevisionHistoryLimit() {
    this._revisionHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitInput() {
    return this._revisionHistoryLimit;
  }

  // runtime_config_ref - computed: false, optional: true, required: false
  private _runtimeConfigRef = new DataK8SPkgCrossplaneIoProviderV1ManifestSpecRuntimeConfigRefOutputReference(this, "runtime_config_ref");
  public get runtimeConfigRef() {
    return this._runtimeConfigRef;
  }
  public putRuntimeConfigRef(value: DataK8SPkgCrossplaneIoProviderV1ManifestSpecRuntimeConfigRef) {
    this._runtimeConfigRef.internalValue = value;
  }
  public resetRuntimeConfigRef() {
    this._runtimeConfigRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigRefInput() {
    return this._runtimeConfigRef.internalValue;
  }

  // skip_dependency_resolution - computed: false, optional: true, required: false
  private _skipDependencyResolution?: boolean | cdktf.IResolvable; 
  public get skipDependencyResolution() {
    return this.getBooleanAttribute('skip_dependency_resolution');
  }
  public set skipDependencyResolution(value: boolean | cdktf.IResolvable) {
    this._skipDependencyResolution = value;
  }
  public resetSkipDependencyResolution() {
    this._skipDependencyResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDependencyResolutionInput() {
    return this._skipDependencyResolution;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest k8s_pkg_crossplane_io_provider_v1_manifest}
*/
export class DataK8SPkgCrossplaneIoProviderV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_pkg_crossplane_io_provider_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPkgCrossplaneIoProviderV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPkgCrossplaneIoProviderV1Manifest to import
  * @param importFromId The id of the existing DataK8SPkgCrossplaneIoProviderV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPkgCrossplaneIoProviderV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_pkg_crossplane_io_provider_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pkg_crossplane_io_provider_v1_manifest k8s_pkg_crossplane_io_provider_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPkgCrossplaneIoProviderV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPkgCrossplaneIoProviderV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_pkg_crossplane_io_provider_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SPkgCrossplaneIoProviderV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPkgCrossplaneIoProviderV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SPkgCrossplaneIoProviderV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPkgCrossplaneIoProviderV1ManifestSpec) {
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
      metadata: dataK8SPkgCrossplaneIoProviderV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPkgCrossplaneIoProviderV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPkgCrossplaneIoProviderV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPkgCrossplaneIoProviderV1ManifestMetadata",
      },
      spec: {
        value: dataK8SPkgCrossplaneIoProviderV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPkgCrossplaneIoProviderV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
