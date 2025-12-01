// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest#metadata DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest#spec DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpec;
}
export interface DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest#annotations DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest#labels DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest#name DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDocker {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest#os DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest#os}
  */
  readonly os: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest#version_range DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest#version_range}
  */
  readonly versionRange?: string[];
}

export function dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDockerToTerraform(struct?: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os: cdktf.stringToTerraform(struct!.os),
    version_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versionRange),
  }
}


export function dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDockerToHclTerraform(struct?: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDockerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDocker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDocker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._os = value.os;
      this._versionRange = value.versionRange;
    }
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

export class DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDockerList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDocker[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDockerOutputReference {
    return new DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDockerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest#name DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest#version_range DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest#version_range}
  */
  readonly versionRange?: string[];
}

export function dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItemsToTerraform(struct?: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versionRange),
  }
}


export function dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItemsToHclTerraform(struct?: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItems | cdktf.IResolvable): any {
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

export class DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._versionRange = value.versionRange;
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

export class DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItemsOutputReference {
    return new DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpec {
  /**
  * Arch for x86_64 aarch64... , represent for the arch of this offline package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest#arch DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest#arch}
  */
  readonly arch?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest#docker DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest#docker}
  */
  readonly docker?: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDocker[] | cdktf.IResolvable;
  /**
  * Items cni containerd kubeadm kube etcd cilium calico
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest#items DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest#items}
  */
  readonly items: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItems[] | cdktf.IResolvable;
  /**
  * Kubespray , the tag of kubespray
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest#kubespray DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest#kubespray}
  */
  readonly kubespray?: string;
}

export function dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arch: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arch),
    docker: cdktf.listMapper(dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDockerToTerraform, false)(struct!.docker),
    items: cdktf.listMapper(dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItemsToTerraform, false)(struct!.items),
    kubespray: cdktf.stringToTerraform(struct!.kubespray),
  }
}


export function dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arch: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.arch),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    docker: {
      value: cdktf.listMapperHcl(dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDockerToHclTerraform, false)(struct!.docker),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDockerList",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItemsList",
    },
    kubespray: {
      value: cdktf.stringToHclTerraform(struct!.kubespray),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arch !== undefined) {
      hasAnyValues = true;
      internalValueResult.arch = this._arch;
    }
    if (this._docker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.docker = this._docker?.internalValue;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._kubespray !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubespray = this._kubespray;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arch = undefined;
      this._docker.internalValue = undefined;
      this._items.internalValue = undefined;
      this._kubespray = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arch = value.arch;
      this._docker.internalValue = value.docker;
      this._items.internalValue = value.items;
      this._kubespray = value.kubespray;
    }
  }

  // arch - computed: false, optional: true, required: false
  private _arch?: string[]; 
  public get arch() {
    return this.getListAttribute('arch');
  }
  public set arch(value: string[]) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // docker - computed: false, optional: true, required: false
  private _docker = new DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDockerList(this, "docker", false);
  public get docker() {
    return this._docker;
  }
  public putDocker(value: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecDocker[] | cdktf.IResolvable) {
    this._docker.internalValue = value;
  }
  public resetDocker() {
    this._docker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerInput() {
    return this._docker.internalValue;
  }

  // items - computed: false, optional: false, required: true
  private _items = new DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // kubespray - computed: false, optional: true, required: false
  private _kubespray?: string; 
  public get kubespray() {
    return this.getStringAttribute('kubespray');
  }
  public set kubespray(value: string) {
    this._kubespray = value;
  }
  public resetKubespray() {
    this._kubespray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubesprayInput() {
    return this._kubespray;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest k8s_kubean_io_local_artifact_set_v1alpha1_manifest}
*/
export class DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kubean_io_local_artifact_set_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKubeanIoLocalArtifactSetV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kubean_io_local_artifact_set_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_local_artifact_set_v1alpha1_manifest k8s_kubean_io_local_artifact_set_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kubean_io_local_artifact_set_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKubeanIoLocalArtifactSetV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
