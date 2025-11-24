// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest#metadata DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest#metadata}
  */
  readonly metadata: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestMetadata;
  /**
  * PackageRevisionSpec specifies the desired state of a PackageRevision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest#spec DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest#spec}
  */
  readonly spec?: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpec;
}
export interface DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest#annotations DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest#labels DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest#name DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestMetadataToTerraform(struct?: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestMetadataToHclTerraform(struct?: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest#name DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecretsToTerraform(struct?: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecretsToHclTerraform(struct?: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecretsOutputReference {
    return new DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpec {
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest#common_labels DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * DesiredState of the PackageRevision. Can be either Active or Inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest#desired_state DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest#desired_state}
  */
  readonly desiredState: string;
  /**
  * IgnoreCrossplaneConstraints indicates to the package manager whether to honor Crossplane version constrains specified by the package. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest#ignore_crossplane_constraints DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest#ignore_crossplane_constraints}
  */
  readonly ignoreCrossplaneConstraints?: boolean | cdktf.IResolvable;
  /**
  * Package image used by install Pod to extract package contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest#image DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest#image}
  */
  readonly image: string;
  /**
  * PackagePullPolicy defines the pull policy for the package. It is also applied to any images pulled for the package, such as a provider's controller image. Default is IfNotPresent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest#package_pull_policy DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest#package_pull_policy}
  */
  readonly packagePullPolicy?: string;
  /**
  * PackagePullSecrets are named secrets in the same namespace that can be used to fetch packages from private registries. They are also applied to any images pulled for the package, such as a provider's controller image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest#package_pull_secrets DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest#package_pull_secrets}
  */
  readonly packagePullSecrets?: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecrets[] | cdktf.IResolvable;
  /**
  * Revision number. Indicates when the revision will be garbage collected based on the parent's RevisionHistoryLimit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest#revision DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest#revision}
  */
  readonly revision: number;
  /**
  * SkipDependencyResolution indicates to the package manager whether to skip resolving dependencies for a package. Setting this value to true may have unintended consequences. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest#skip_dependency_resolution DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest#skip_dependency_resolution}
  */
  readonly skipDependencyResolution?: boolean | cdktf.IResolvable;
}

export function dataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecToTerraform(struct?: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
    ignore_crossplane_constraints: cdktf.booleanToTerraform(struct!.ignoreCrossplaneConstraints),
    image: cdktf.stringToTerraform(struct!.image),
    package_pull_policy: cdktf.stringToTerraform(struct!.packagePullPolicy),
    package_pull_secrets: cdktf.listMapper(dataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecretsToTerraform, false)(struct!.packagePullSecrets),
    revision: cdktf.numberToTerraform(struct!.revision),
    skip_dependency_resolution: cdktf.booleanToTerraform(struct!.skipDependencyResolution),
  }
}


export function dataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecToHclTerraform(struct?: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpec | cdktf.IResolvable): any {
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
    desired_state: {
      value: cdktf.stringToHclTerraform(struct!.desiredState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_crossplane_constraints: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCrossplaneConstraints),
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
    package_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.packagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecretsToHclTerraform, false)(struct!.packagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecretsList",
    },
    revision: {
      value: cdktf.numberToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    if (this._ignoreCrossplaneConstraints !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCrossplaneConstraints = this._ignoreCrossplaneConstraints;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._packagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.packagePullPolicy = this._packagePullPolicy;
    }
    if (this._packagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packagePullSecrets = this._packagePullSecrets?.internalValue;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._skipDependencyResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDependencyResolution = this._skipDependencyResolution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonLabels = undefined;
      this._desiredState = undefined;
      this._ignoreCrossplaneConstraints = undefined;
      this._image = undefined;
      this._packagePullPolicy = undefined;
      this._packagePullSecrets.internalValue = undefined;
      this._revision = undefined;
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
      this._desiredState = value.desiredState;
      this._ignoreCrossplaneConstraints = value.ignoreCrossplaneConstraints;
      this._image = value.image;
      this._packagePullPolicy = value.packagePullPolicy;
      this._packagePullSecrets.internalValue = value.packagePullSecrets;
      this._revision = value.revision;
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

  // desired_state - computed: false, optional: false, required: true
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
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

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
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
  private _packagePullSecrets = new DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecretsList(this, "package_pull_secrets", false);
  public get packagePullSecrets() {
    return this._packagePullSecrets;
  }
  public putPackagePullSecrets(value: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecPackagePullSecrets[] | cdktf.IResolvable) {
    this._packagePullSecrets.internalValue = value;
  }
  public resetPackagePullSecrets() {
    this._packagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagePullSecretsInput() {
    return this._packagePullSecrets.internalValue;
  }

  // revision - computed: false, optional: false, required: true
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest k8s_pkg_crossplane_io_configuration_revision_v1_manifest}
*/
export class DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_pkg_crossplane_io_configuration_revision_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest to import
  * @param importFromId The id of the existing DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPkgCrossplaneIoConfigurationRevisionV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_pkg_crossplane_io_configuration_revision_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_configuration_revision_v1_manifest k8s_pkg_crossplane_io_configuration_revision_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_pkg_crossplane_io_configuration_revision_v1_manifest',
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
  private _metadata = new DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpec) {
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
      metadata: dataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestMetadata",
      },
      spec: {
        value: dataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPkgCrossplaneIoConfigurationRevisionV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
