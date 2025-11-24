// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsKubeblocksIoComponentVersionV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest#metadata DataK8SAppsKubeblocksIoComponentVersionV1Manifest#metadata}
  */
  readonly metadata: DataK8SAppsKubeblocksIoComponentVersionV1ManifestMetadata;
  /**
  * ComponentVersionSpec defines the desired state of ComponentVersion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest#spec DataK8SAppsKubeblocksIoComponentVersionV1Manifest#spec}
  */
  readonly spec?: DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpec;
}
export interface DataK8SAppsKubeblocksIoComponentVersionV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest#annotations DataK8SAppsKubeblocksIoComponentVersionV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest#labels DataK8SAppsKubeblocksIoComponentVersionV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest#name DataK8SAppsKubeblocksIoComponentVersionV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeblocksIoComponentVersionV1ManifestMetadataToTerraform(struct?: DataK8SAppsKubeblocksIoComponentVersionV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoComponentVersionV1ManifestMetadataToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentVersionV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoComponentVersionV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoComponentVersionV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentVersionV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRules {
  /**
  * CompDefs specifies names for the component definitions associated with this ComponentVersion. Each name in the list can represent an exact name, a name prefix, or a regular expression pattern. For example: - 'mysql-8.0.30-v1alpha1': Matches the exact name 'mysql-8.0.30-v1alpha1' - 'mysql-8.0.30': Matches all names starting with 'mysql-8.0.30' - '^mysql-8.0.d{1,2}$': Matches all names starting with 'mysql-8.0.' followed by one or two digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest#comp_defs DataK8SAppsKubeblocksIoComponentVersionV1Manifest#comp_defs}
  */
  readonly compDefs: string[];
  /**
  * Releases is a list of identifiers for the releases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest#releases DataK8SAppsKubeblocksIoComponentVersionV1Manifest#releases}
  */
  readonly releases: string[];
}

export function dataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRulesToTerraform(struct?: DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comp_defs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.compDefs),
    releases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.releases),
  }
}


export function dataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRulesToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comp_defs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.compDefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    releases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.releases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compDefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.compDefs = this._compDefs;
    }
    if (this._releases !== undefined) {
      hasAnyValues = true;
      internalValueResult.releases = this._releases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compDefs = undefined;
      this._releases = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compDefs = value.compDefs;
      this._releases = value.releases;
    }
  }

  // comp_defs - computed: false, optional: false, required: true
  private _compDefs?: string[]; 
  public get compDefs() {
    return this.getListAttribute('comp_defs');
  }
  public set compDefs(value: string[]) {
    this._compDefs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compDefsInput() {
    return this._compDefs;
  }

  // releases - computed: false, optional: false, required: true
  private _releases?: string[]; 
  public get releases() {
    return this.getListAttribute('releases');
  }
  public set releases(value: string[]) {
    this._releases = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releasesInput() {
    return this._releases;
  }
}

export class DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRulesOutputReference {
    return new DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleases {
  /**
  * Changes provides information about the changes made in this release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest#changes DataK8SAppsKubeblocksIoComponentVersionV1Manifest#changes}
  */
  readonly changes?: string;
  /**
  * Images define the new images for containers, actions or external applications within the release. If an image is specified for a lifecycle action, the key should be the field name (case-insensitive) of the action in the LifecycleActions struct.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest#images DataK8SAppsKubeblocksIoComponentVersionV1Manifest#images}
  */
  readonly images: { [key: string]: string };
  /**
  * Name is a unique identifier for this release. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest#name DataK8SAppsKubeblocksIoComponentVersionV1Manifest#name}
  */
  readonly name: string;
  /**
  * ServiceVersion defines the version of the well-known service that the component provides. The version should follow the syntax and semantics of the 'Semantic Versioning' specification (http://semver.org/). If the release is used, it will serve as the service version for component instances, overriding the one defined in the component definition. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest#service_version DataK8SAppsKubeblocksIoComponentVersionV1Manifest#service_version}
  */
  readonly serviceVersion: string;
}

export function dataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleasesToTerraform(struct?: DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    changes: cdktf.stringToTerraform(struct!.changes),
    images: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.images),
    name: cdktf.stringToTerraform(struct!.name),
    service_version: cdktf.stringToTerraform(struct!.serviceVersion),
  }
}


export function dataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleasesToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    changes: {
      value: cdktf.stringToHclTerraform(struct!.changes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    images: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.images),
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
    service_version: {
      value: cdktf.stringToHclTerraform(struct!.serviceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changes !== undefined) {
      hasAnyValues = true;
      internalValueResult.changes = this._changes;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serviceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVersion = this._serviceVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._changes = undefined;
      this._images = undefined;
      this._name = undefined;
      this._serviceVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._changes = value.changes;
      this._images = value.images;
      this._name = value.name;
      this._serviceVersion = value.serviceVersion;
    }
  }

  // changes - computed: false, optional: true, required: false
  private _changes?: string; 
  public get changes() {
    return this.getStringAttribute('changes');
  }
  public set changes(value: string) {
    this._changes = value;
  }
  public resetChanges() {
    this._changes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changesInput() {
    return this._changes;
  }

  // images - computed: false, optional: false, required: true
  private _images?: { [key: string]: string }; 
  public get images() {
    return this.getStringMapAttribute('images');
  }
  public set images(value: { [key: string]: string }) {
    this._images = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
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

  // service_version - computed: false, optional: false, required: true
  private _serviceVersion?: string; 
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }
  public set serviceVersion(value: string) {
    this._serviceVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVersionInput() {
    return this._serviceVersion;
  }
}

export class DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleasesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleases[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleasesOutputReference {
    return new DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpec {
  /**
  * CompatibilityRules defines compatibility rules between sets of component definitions and releases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest#compatibility_rules DataK8SAppsKubeblocksIoComponentVersionV1Manifest#compatibility_rules}
  */
  readonly compatibilityRules: DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRules[] | cdktf.IResolvable;
  /**
  * Releases represents different releases of component instances within this ComponentVersion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest#releases DataK8SAppsKubeblocksIoComponentVersionV1Manifest#releases}
  */
  readonly releases: DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleases[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecToTerraform(struct?: DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compatibility_rules: cdktf.listMapper(dataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRulesToTerraform, false)(struct!.compatibilityRules),
    releases: cdktf.listMapper(dataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleasesToTerraform, false)(struct!.releases),
  }
}


export function dataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compatibility_rules: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRulesToHclTerraform, false)(struct!.compatibilityRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRulesList",
    },
    releases: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleasesToHclTerraform, false)(struct!.releases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compatibilityRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibilityRules = this._compatibilityRules?.internalValue;
    }
    if (this._releases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.releases = this._releases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compatibilityRules.internalValue = undefined;
      this._releases.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compatibilityRules.internalValue = value.compatibilityRules;
      this._releases.internalValue = value.releases;
    }
  }

  // compatibility_rules - computed: false, optional: false, required: true
  private _compatibilityRules = new DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRulesList(this, "compatibility_rules", false);
  public get compatibilityRules() {
    return this._compatibilityRules;
  }
  public putCompatibilityRules(value: DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecCompatibilityRules[] | cdktf.IResolvable) {
    this._compatibilityRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityRulesInput() {
    return this._compatibilityRules.internalValue;
  }

  // releases - computed: false, optional: false, required: true
  private _releases = new DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleasesList(this, "releases", false);
  public get releases() {
    return this._releases;
  }
  public putReleases(value: DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecReleases[] | cdktf.IResolvable) {
    this._releases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releasesInput() {
    return this._releases.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest k8s_apps_kubeblocks_io_component_version_v1_manifest}
*/
export class DataK8SAppsKubeblocksIoComponentVersionV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_kubeblocks_io_component_version_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsKubeblocksIoComponentVersionV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsKubeblocksIoComponentVersionV1Manifest to import
  * @param importFromId The id of the existing DataK8SAppsKubeblocksIoComponentVersionV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsKubeblocksIoComponentVersionV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_kubeblocks_io_component_version_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_component_version_v1_manifest k8s_apps_kubeblocks_io_component_version_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsKubeblocksIoComponentVersionV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsKubeblocksIoComponentVersionV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_kubeblocks_io_component_version_v1_manifest',
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
  private _metadata = new DataK8SAppsKubeblocksIoComponentVersionV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsKubeblocksIoComponentVersionV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpec) {
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
      metadata: dataK8SAppsKubeblocksIoComponentVersionV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsKubeblocksIoComponentVersionV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoComponentVersionV1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsKubeblocksIoComponentVersionV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoComponentVersionV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
