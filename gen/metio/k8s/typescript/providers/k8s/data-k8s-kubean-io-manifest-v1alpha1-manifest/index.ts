// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKubeanIoManifestV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#metadata DataK8SKubeanIoManifestV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKubeanIoManifestV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#spec DataK8SKubeanIoManifestV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SKubeanIoManifestV1Alpha1ManifestSpec;
}
export interface DataK8SKubeanIoManifestV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#annotations DataK8SKubeanIoManifestV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#labels DataK8SKubeanIoManifestV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#name DataK8SKubeanIoManifestV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKubeanIoManifestV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKubeanIoManifestV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKubeanIoManifestV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKubeanIoManifestV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKubeanIoManifestV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoManifestV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeanIoManifestV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeanIoManifestV1Alpha1ManifestSpecComponents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#default_version DataK8SKubeanIoManifestV1Alpha1Manifest#default_version}
  */
  readonly defaultVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#name DataK8SKubeanIoManifestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#version_range DataK8SKubeanIoManifestV1Alpha1Manifest#version_range}
  */
  readonly versionRange?: string[];
}

export function dataK8SKubeanIoManifestV1Alpha1ManifestSpecComponentsToTerraform(struct?: DataK8SKubeanIoManifestV1Alpha1ManifestSpecComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_version: cdktf.stringToTerraform(struct!.defaultVersion),
    name: cdktf.stringToTerraform(struct!.name),
    version_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versionRange),
  }
}


export function dataK8SKubeanIoManifestV1Alpha1ManifestSpecComponentsToHclTerraform(struct?: DataK8SKubeanIoManifestV1Alpha1ManifestSpecComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_version: {
      value: cdktf.stringToHclTerraform(struct!.defaultVersion),
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
    version_range: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versionRange),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoManifestV1Alpha1ManifestSpecComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeanIoManifestV1Alpha1ManifestSpecComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVersion = this._defaultVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._versionRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionRange = this._versionRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoManifestV1Alpha1ManifestSpecComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultVersion = undefined;
      this._name = undefined;
      this._versionRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultVersion = value.defaultVersion;
      this._name = value.name;
      this._versionRange = value.versionRange;
    }
  }

  // default_version - computed: false, optional: true, required: false
  private _defaultVersion?: string; 
  public get defaultVersion() {
    return this.getStringAttribute('default_version');
  }
  public set defaultVersion(value: string) {
    this._defaultVersion = value;
  }
  public resetDefaultVersion() {
    this._defaultVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVersionInput() {
    return this._defaultVersion;
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

  // version_range - computed: false, optional: true, required: false
  private _versionRange?: string[]; 
  public get versionRange() {
    return this.getListAttribute('version_range');
  }
  public set versionRange(value: string[]) {
    this._versionRange = value;
  }
  public resetVersionRange() {
    this._versionRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionRangeInput() {
    return this._versionRange;
  }
}

export class DataK8SKubeanIoManifestV1Alpha1ManifestSpecComponentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeanIoManifestV1Alpha1ManifestSpecComponents[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeanIoManifestV1Alpha1ManifestSpecComponentsOutputReference {
    return new DataK8SKubeanIoManifestV1Alpha1ManifestSpecComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeanIoManifestV1Alpha1ManifestSpecDocker {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#default_version DataK8SKubeanIoManifestV1Alpha1Manifest#default_version}
  */
  readonly defaultVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#os DataK8SKubeanIoManifestV1Alpha1Manifest#os}
  */
  readonly os: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#version_range DataK8SKubeanIoManifestV1Alpha1Manifest#version_range}
  */
  readonly versionRange?: string[];
}

export function dataK8SKubeanIoManifestV1Alpha1ManifestSpecDockerToTerraform(struct?: DataK8SKubeanIoManifestV1Alpha1ManifestSpecDocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_version: cdktf.stringToTerraform(struct!.defaultVersion),
    os: cdktf.stringToTerraform(struct!.os),
    version_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versionRange),
  }
}


export function dataK8SKubeanIoManifestV1Alpha1ManifestSpecDockerToHclTerraform(struct?: DataK8SKubeanIoManifestV1Alpha1ManifestSpecDocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_version: {
      value: cdktf.stringToHclTerraform(struct!.defaultVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_range: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versionRange),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoManifestV1Alpha1ManifestSpecDockerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeanIoManifestV1Alpha1ManifestSpecDocker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVersion = this._defaultVersion;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._versionRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionRange = this._versionRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoManifestV1Alpha1ManifestSpecDocker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultVersion = undefined;
      this._os = undefined;
      this._versionRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultVersion = value.defaultVersion;
      this._os = value.os;
      this._versionRange = value.versionRange;
    }
  }

  // default_version - computed: false, optional: true, required: false
  private _defaultVersion?: string; 
  public get defaultVersion() {
    return this.getStringAttribute('default_version');
  }
  public set defaultVersion(value: string) {
    this._defaultVersion = value;
  }
  public resetDefaultVersion() {
    this._defaultVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVersionInput() {
    return this._defaultVersion;
  }

  // os - computed: false, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // version_range - computed: false, optional: true, required: false
  private _versionRange?: string[]; 
  public get versionRange() {
    return this.getListAttribute('version_range');
  }
  public set versionRange(value: string[]) {
    this._versionRange = value;
  }
  public resetVersionRange() {
    this._versionRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionRangeInput() {
    return this._versionRange;
  }
}

export class DataK8SKubeanIoManifestV1Alpha1ManifestSpecDockerList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeanIoManifestV1Alpha1ManifestSpecDocker[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeanIoManifestV1Alpha1ManifestSpecDockerOutputReference {
    return new DataK8SKubeanIoManifestV1Alpha1ManifestSpecDockerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#address DataK8SKubeanIoManifestV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#domain DataK8SKubeanIoManifestV1Alpha1Manifest#domain}
  */
  readonly domain?: string;
}

export function dataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMapToTerraform(struct?: DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function dataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMapToHclTerraform(struct?: DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._domain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._domain = value.domain;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}

export class DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMapList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMap[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMapOutputReference {
    return new DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#image_repo_address DataK8SKubeanIoManifestV1Alpha1Manifest#image_repo_address}
  */
  readonly imageRepoAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#password_base64 DataK8SKubeanIoManifestV1Alpha1Manifest#password_base64}
  */
  readonly passwordBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#user_name DataK8SKubeanIoManifestV1Alpha1Manifest#user_name}
  */
  readonly userName?: string;
}

export function dataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuthToTerraform(struct?: DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_repo_address: cdktf.stringToTerraform(struct!.imageRepoAddress),
    password_base64: cdktf.stringToTerraform(struct!.passwordBase64),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuthToHclTerraform(struct?: DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_repo_address: {
      value: cdktf.stringToHclTerraform(struct!.imageRepoAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_base64: {
      value: cdktf.stringToHclTerraform(struct!.passwordBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageRepoAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRepoAddress = this._imageRepoAddress;
    }
    if (this._passwordBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordBase64 = this._passwordBase64;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageRepoAddress = undefined;
      this._passwordBase64 = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageRepoAddress = value.imageRepoAddress;
      this._passwordBase64 = value.passwordBase64;
      this._userName = value.userName;
    }
  }

  // image_repo_address - computed: false, optional: true, required: false
  private _imageRepoAddress?: string; 
  public get imageRepoAddress() {
    return this.getStringAttribute('image_repo_address');
  }
  public set imageRepoAddress(value: string) {
    this._imageRepoAddress = value;
  }
  public resetImageRepoAddress() {
    this._imageRepoAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRepoAddressInput() {
    return this._imageRepoAddress;
  }

  // password_base64 - computed: false, optional: true, required: false
  private _passwordBase64?: string; 
  public get passwordBase64() {
    return this.getStringAttribute('password_base64');
  }
  public set passwordBase64(value: string) {
    this._passwordBase64 = value;
  }
  public resetPasswordBase64() {
    this._passwordBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordBase64Input() {
    return this._passwordBase64;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuthList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuth[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuthOutputReference {
    return new DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#files_repo DataK8SKubeanIoManifestV1Alpha1Manifest#files_repo}
  */
  readonly filesRepo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#hosts_map DataK8SKubeanIoManifestV1Alpha1Manifest#hosts_map}
  */
  readonly hostsMap?: DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMap[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#image_repo DataK8SKubeanIoManifestV1Alpha1Manifest#image_repo}
  */
  readonly imageRepo?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#image_repo_auth DataK8SKubeanIoManifestV1Alpha1Manifest#image_repo_auth}
  */
  readonly imageRepoAuth?: DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuth[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#image_repo_scheme DataK8SKubeanIoManifestV1Alpha1Manifest#image_repo_scheme}
  */
  readonly imageRepoScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#yum_repos DataK8SKubeanIoManifestV1Alpha1Manifest#yum_repos}
  */
  readonly yumRepos?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function dataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceToTerraform(struct?: DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    files_repo: cdktf.stringToTerraform(struct!.filesRepo),
    hosts_map: cdktf.listMapper(dataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMapToTerraform, false)(struct!.hostsMap),
    image_repo: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.imageRepo),
    image_repo_auth: cdktf.listMapper(dataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuthToTerraform, false)(struct!.imageRepoAuth),
    image_repo_scheme: cdktf.stringToTerraform(struct!.imageRepoScheme),
    yum_repos: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.yumRepos),
  }
}


export function dataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceToHclTerraform(struct?: DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    files_repo: {
      value: cdktf.stringToHclTerraform(struct!.filesRepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts_map: {
      value: cdktf.listMapperHcl(dataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMapToHclTerraform, false)(struct!.hostsMap),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMapList",
    },
    image_repo: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.imageRepo),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image_repo_auth: {
      value: cdktf.listMapperHcl(dataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuthToHclTerraform, false)(struct!.imageRepoAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuthList",
    },
    image_repo_scheme: {
      value: cdktf.stringToHclTerraform(struct!.imageRepoScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yum_repos: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.yumRepos),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filesRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesRepo = this._filesRepo;
    }
    if (this._hostsMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostsMap = this._hostsMap?.internalValue;
    }
    if (this._imageRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRepo = this._imageRepo;
    }
    if (this._imageRepoAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRepoAuth = this._imageRepoAuth?.internalValue;
    }
    if (this._imageRepoScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRepoScheme = this._imageRepoScheme;
    }
    if (this._yumRepos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yumRepos = this._yumRepos;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filesRepo = undefined;
      this._hostsMap.internalValue = undefined;
      this._imageRepo = undefined;
      this._imageRepoAuth.internalValue = undefined;
      this._imageRepoScheme = undefined;
      this._yumRepos = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filesRepo = value.filesRepo;
      this._hostsMap.internalValue = value.hostsMap;
      this._imageRepo = value.imageRepo;
      this._imageRepoAuth.internalValue = value.imageRepoAuth;
      this._imageRepoScheme = value.imageRepoScheme;
      this._yumRepos = value.yumRepos;
    }
  }

  // files_repo - computed: false, optional: true, required: false
  private _filesRepo?: string; 
  public get filesRepo() {
    return this.getStringAttribute('files_repo');
  }
  public set filesRepo(value: string) {
    this._filesRepo = value;
  }
  public resetFilesRepo() {
    this._filesRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesRepoInput() {
    return this._filesRepo;
  }

  // hosts_map - computed: false, optional: true, required: false
  private _hostsMap = new DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMapList(this, "hosts_map", false);
  public get hostsMap() {
    return this._hostsMap;
  }
  public putHostsMap(value: DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceHostsMap[] | cdktf.IResolvable) {
    this._hostsMap.internalValue = value;
  }
  public resetHostsMap() {
    this._hostsMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsMapInput() {
    return this._hostsMap.internalValue;
  }

  // image_repo - computed: false, optional: true, required: false
  private _imageRepo?: { [key: string]: string }; 
  public get imageRepo() {
    return this.getStringMapAttribute('image_repo');
  }
  public set imageRepo(value: { [key: string]: string }) {
    this._imageRepo = value;
  }
  public resetImageRepo() {
    this._imageRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRepoInput() {
    return this._imageRepo;
  }

  // image_repo_auth - computed: false, optional: true, required: false
  private _imageRepoAuth = new DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuthList(this, "image_repo_auth", false);
  public get imageRepoAuth() {
    return this._imageRepoAuth;
  }
  public putImageRepoAuth(value: DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceImageRepoAuth[] | cdktf.IResolvable) {
    this._imageRepoAuth.internalValue = value;
  }
  public resetImageRepoAuth() {
    this._imageRepoAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRepoAuthInput() {
    return this._imageRepoAuth.internalValue;
  }

  // image_repo_scheme - computed: false, optional: true, required: false
  private _imageRepoScheme?: string; 
  public get imageRepoScheme() {
    return this.getStringAttribute('image_repo_scheme');
  }
  public set imageRepoScheme(value: string) {
    this._imageRepoScheme = value;
  }
  public resetImageRepoScheme() {
    this._imageRepoScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRepoSchemeInput() {
    return this._imageRepoScheme;
  }

  // yum_repos - computed: false, optional: true, required: false
  private _yumRepos?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get yumRepos() {
    return this.interpolationForAttribute('yum_repos');
  }
  public set yumRepos(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._yumRepos = value;
  }
  public resetYumRepos() {
    this._yumRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yumReposInput() {
    return this._yumRepos;
  }
}
export interface DataK8SKubeanIoManifestV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#components DataK8SKubeanIoManifestV1Alpha1Manifest#components}
  */
  readonly components?: DataK8SKubeanIoManifestV1Alpha1ManifestSpecComponents[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#docker DataK8SKubeanIoManifestV1Alpha1Manifest#docker}
  */
  readonly docker?: DataK8SKubeanIoManifestV1Alpha1ManifestSpecDocker[] | cdktf.IResolvable;
  /**
  * KubeanVersion , the tag of kubean-io
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#kubean_version DataK8SKubeanIoManifestV1Alpha1Manifest#kubean_version}
  */
  readonly kubeanVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#kubespray_version DataK8SKubeanIoManifestV1Alpha1Manifest#kubespray_version}
  */
  readonly kubesprayVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#local_service DataK8SKubeanIoManifestV1Alpha1Manifest#local_service}
  */
  readonly localService?: DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalService;
}

export function dataK8SKubeanIoManifestV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKubeanIoManifestV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: cdktf.listMapper(dataK8SKubeanIoManifestV1Alpha1ManifestSpecComponentsToTerraform, false)(struct!.components),
    docker: cdktf.listMapper(dataK8SKubeanIoManifestV1Alpha1ManifestSpecDockerToTerraform, false)(struct!.docker),
    kubean_version: cdktf.stringToTerraform(struct!.kubeanVersion),
    kubespray_version: cdktf.stringToTerraform(struct!.kubesprayVersion),
    local_service: dataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceToTerraform(struct!.localService),
  }
}


export function dataK8SKubeanIoManifestV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKubeanIoManifestV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: cdktf.listMapperHcl(dataK8SKubeanIoManifestV1Alpha1ManifestSpecComponentsToHclTerraform, false)(struct!.components),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeanIoManifestV1Alpha1ManifestSpecComponentsList",
    },
    docker: {
      value: cdktf.listMapperHcl(dataK8SKubeanIoManifestV1Alpha1ManifestSpecDockerToHclTerraform, false)(struct!.docker),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeanIoManifestV1Alpha1ManifestSpecDockerList",
    },
    kubean_version: {
      value: cdktf.stringToHclTerraform(struct!.kubeanVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubespray_version: {
      value: cdktf.stringToHclTerraform(struct!.kubesprayVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_service: {
      value: dataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceToHclTerraform(struct!.localService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoManifestV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoManifestV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    if (this._docker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.docker = this._docker?.internalValue;
    }
    if (this._kubeanVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeanVersion = this._kubeanVersion;
    }
    if (this._kubesprayVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubesprayVersion = this._kubesprayVersion;
    }
    if (this._localService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localService = this._localService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoManifestV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components.internalValue = undefined;
      this._docker.internalValue = undefined;
      this._kubeanVersion = undefined;
      this._kubesprayVersion = undefined;
      this._localService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._components.internalValue = value.components;
      this._docker.internalValue = value.docker;
      this._kubeanVersion = value.kubeanVersion;
      this._kubesprayVersion = value.kubesprayVersion;
      this._localService.internalValue = value.localService;
    }
  }

  // components - computed: false, optional: true, required: false
  private _components = new DataK8SKubeanIoManifestV1Alpha1ManifestSpecComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }
  public putComponents(value: DataK8SKubeanIoManifestV1Alpha1ManifestSpecComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  public resetComponents() {
    this._components.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }

  // docker - computed: false, optional: true, required: false
  private _docker = new DataK8SKubeanIoManifestV1Alpha1ManifestSpecDockerList(this, "docker", false);
  public get docker() {
    return this._docker;
  }
  public putDocker(value: DataK8SKubeanIoManifestV1Alpha1ManifestSpecDocker[] | cdktf.IResolvable) {
    this._docker.internalValue = value;
  }
  public resetDocker() {
    this._docker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerInput() {
    return this._docker.internalValue;
  }

  // kubean_version - computed: false, optional: true, required: false
  private _kubeanVersion?: string; 
  public get kubeanVersion() {
    return this.getStringAttribute('kubean_version');
  }
  public set kubeanVersion(value: string) {
    this._kubeanVersion = value;
  }
  public resetKubeanVersion() {
    this._kubeanVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeanVersionInput() {
    return this._kubeanVersion;
  }

  // kubespray_version - computed: false, optional: true, required: false
  private _kubesprayVersion?: string; 
  public get kubesprayVersion() {
    return this.getStringAttribute('kubespray_version');
  }
  public set kubesprayVersion(value: string) {
    this._kubesprayVersion = value;
  }
  public resetKubesprayVersion() {
    this._kubesprayVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubesprayVersionInput() {
    return this._kubesprayVersion;
  }

  // local_service - computed: false, optional: true, required: false
  private _localService = new DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalServiceOutputReference(this, "local_service");
  public get localService() {
    return this._localService;
  }
  public putLocalService(value: DataK8SKubeanIoManifestV1Alpha1ManifestSpecLocalService) {
    this._localService.internalValue = value;
  }
  public resetLocalService() {
    this._localService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localServiceInput() {
    return this._localService.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest k8s_kubean_io_manifest_v1alpha1_manifest}
*/
export class DataK8SKubeanIoManifestV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kubean_io_manifest_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKubeanIoManifestV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKubeanIoManifestV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKubeanIoManifestV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKubeanIoManifestV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kubean_io_manifest_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kubean_io_manifest_v1alpha1_manifest k8s_kubean_io_manifest_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKubeanIoManifestV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKubeanIoManifestV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kubean_io_manifest_v1alpha1_manifest',
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
  private _metadata = new DataK8SKubeanIoManifestV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKubeanIoManifestV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKubeanIoManifestV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKubeanIoManifestV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKubeanIoManifestV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKubeanIoManifestV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKubeanIoManifestV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKubeanIoManifestV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKubeanIoManifestV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKubeanIoManifestV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
