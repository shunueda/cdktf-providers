// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPkgCrossplaneIoLockV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest#metadata DataK8SPkgCrossplaneIoLockV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SPkgCrossplaneIoLockV1Beta1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest#packages DataK8SPkgCrossplaneIoLockV1Beta1Manifest#packages}
  */
  readonly packages?: DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackages[] | cdktf.IResolvable;
}
export interface DataK8SPkgCrossplaneIoLockV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest#annotations DataK8SPkgCrossplaneIoLockV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest#labels DataK8SPkgCrossplaneIoLockV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest#name DataK8SPkgCrossplaneIoLockV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPkgCrossplaneIoLockV1Beta1ManifestMetadataToTerraform(struct?: DataK8SPkgCrossplaneIoLockV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPkgCrossplaneIoLockV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SPkgCrossplaneIoLockV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPkgCrossplaneIoLockV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPkgCrossplaneIoLockV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPkgCrossplaneIoLockV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependencies {
  /**
  * Constraints is a valid semver range or a digest, which will be used to select a valid dependency version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest#constraints DataK8SPkgCrossplaneIoLockV1Beta1Manifest#constraints}
  */
  readonly constraints: string;
  /**
  * Package is the OCI image name without a tag or digest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest#package DataK8SPkgCrossplaneIoLockV1Beta1Manifest#package}
  */
  readonly package: string;
  /**
  * Type is the type of package. Can be either Configuration or Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest#type DataK8SPkgCrossplaneIoLockV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependenciesToTerraform(struct?: DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constraints: cdktf.stringToTerraform(struct!.constraints),
    package: cdktf.stringToTerraform(struct!.package),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependenciesToHclTerraform(struct?: DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constraints: {
      value: cdktf.stringToHclTerraform(struct!.constraints),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package: {
      value: cdktf.stringToHclTerraform(struct!.package),
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

export class DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraints !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints;
    }
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraints = undefined;
      this._package = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraints = value.constraints;
      this._package = value.package;
      this._type = value.type;
    }
  }

  // constraints - computed: false, optional: false, required: true
  private _constraints?: string; 
  public get constraints() {
    return this.getStringAttribute('constraints');
  }
  public set constraints(value: string) {
    this._constraints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints;
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

export class DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependenciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependencies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependenciesOutputReference {
    return new DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackages {
  /**
  * Dependencies are the list of dependencies of this package. The order of the dependencies will dictate the order in which they are resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest#dependencies DataK8SPkgCrossplaneIoLockV1Beta1Manifest#dependencies}
  */
  readonly dependencies: DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependencies[] | cdktf.IResolvable;
  /**
  * Name corresponds to the name of the package revision for this package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest#name DataK8SPkgCrossplaneIoLockV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Source is the OCI image name without a tag or digest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest#source DataK8SPkgCrossplaneIoLockV1Beta1Manifest#source}
  */
  readonly source: string;
  /**
  * Type is the type of package. Can be either Configuration or Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest#type DataK8SPkgCrossplaneIoLockV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * Version is the tag or digest of the OCI image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest#version DataK8SPkgCrossplaneIoLockV1Beta1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesToTerraform(struct?: DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependencies: cdktf.listMapper(dataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependenciesToTerraform, false)(struct!.dependencies),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesToHclTerraform(struct?: DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependencies: {
      value: cdktf.listMapperHcl(dataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependenciesToHclTerraform, false)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependenciesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
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

export class DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependencies.internalValue = undefined;
      this._name = undefined;
      this._source = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependencies.internalValue = value.dependencies;
      this._name = value.name;
      this._source = value.source;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // dependencies - computed: false, optional: false, required: true
  private _dependencies = new DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesList extends cdktf.ComplexList {
  public internalValue? : DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackages[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesOutputReference {
    return new DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest k8s_pkg_crossplane_io_lock_v1beta1_manifest}
*/
export class DataK8SPkgCrossplaneIoLockV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_pkg_crossplane_io_lock_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPkgCrossplaneIoLockV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPkgCrossplaneIoLockV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SPkgCrossplaneIoLockV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPkgCrossplaneIoLockV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_pkg_crossplane_io_lock_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pkg_crossplane_io_lock_v1beta1_manifest k8s_pkg_crossplane_io_lock_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPkgCrossplaneIoLockV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPkgCrossplaneIoLockV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_pkg_crossplane_io_lock_v1beta1_manifest',
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
    this._packages.internalValue = config.packages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SPkgCrossplaneIoLockV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPkgCrossplaneIoLockV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // packages - computed: false, optional: true, required: false
  private _packages = new DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesList(this, "packages", false);
  public get packages() {
    return this._packages;
  }
  public putPackages(value: DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackages[] | cdktf.IResolvable) {
    this._packages.internalValue = value;
  }
  public resetPackages() {
    this._packages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages.internalValue;
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
      metadata: dataK8SPkgCrossplaneIoLockV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      packages: cdktf.listMapper(dataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesToTerraform, false)(this._packages.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPkgCrossplaneIoLockV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPkgCrossplaneIoLockV1Beta1ManifestMetadata",
      },
      packages: {
        value: cdktf.listMapperHcl(dataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesToHclTerraform, false)(this._packages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8SPkgCrossplaneIoLockV1Beta1ManifestPackagesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
