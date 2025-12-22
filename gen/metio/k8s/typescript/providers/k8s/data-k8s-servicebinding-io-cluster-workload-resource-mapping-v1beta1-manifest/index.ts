// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest#metadata DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestMetadata;
  /**
  * ClusterWorkloadResourceMappingSpec defines the desired state of ClusterWorkloadResourceMapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest#spec DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpec;
}
export interface DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest#annotations DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest#labels DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest#name DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestMetadataToTerraform(struct?: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainers {
  /**
  * Env is a Restricted JSONPath that references the slice of environment variables for the container with the container-like workload resource fragment. The referenced location is created if it does not exist. Defaults to '.envs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest#env DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest#env}
  */
  readonly env?: string;
  /**
  * Name is a Restricted JSONPath that references the name of the container with the container-like workload resource fragment. If not defined, container name filtering is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest#name DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Path is the JSONPath within the workload resource that matches an existing fragment that is container-like.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest#path DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * VolumeMounts is a Restricted JSONPath that references the slice of volume mounts for the container with the container-like workload resource fragment. The referenced location is created if it does not exist. Defaults to '.volumeMounts'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest#volume_mounts DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest#volume_mounts}
  */
  readonly volumeMounts?: string;
}

export function dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainersToTerraform(struct?: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.stringToTerraform(struct!.env),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    volume_mounts: cdktf.stringToTerraform(struct!.volumeMounts),
  }
}


export function dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainersToHclTerraform(struct?: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.stringToHclTerraform(struct!.env),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mounts: {
      value: cdktf.stringToHclTerraform(struct!.volumeMounts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._volumeMounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env = undefined;
      this._name = undefined;
      this._path = undefined;
      this._volumeMounts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env = value.env;
      this._name = value.name;
      this._path = value.path;
      this._volumeMounts = value.volumeMounts;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts?: string; 
  public get volumeMounts() {
    return this.getStringAttribute('volume_mounts');
  }
  public set volumeMounts(value: string) {
    this._volumeMounts = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts;
  }
}

export class DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainersOutputReference {
    return new DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersions {
  /**
  * Annotations is a Restricted JSONPath that references the annotations map within the workload resource. These annotations must end up in the resulting Pod, and are generally not the workload resource's annotations. Defaults to '.spec.template.metadata.annotations'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest#annotations DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest#annotations}
  */
  readonly annotations?: string;
  /**
  * Containers is the collection of mappings to container-like fragments of the workload resource. Defaults to mappings appropriate for a PodSpecable resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest#containers DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest#containers}
  */
  readonly containers?: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainers[] | cdktf.IResolvable;
  /**
  * Version is the version of the workload resource that this mapping is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest#version DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest#version}
  */
  readonly version: string;
  /**
  * Volumes is a Restricted JSONPath that references the slice of volumes within the workload resource. Defaults to '.spec.template.spec.volumes'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest#volumes DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest#volumes}
  */
  readonly volumes?: string;
}

export function dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsToTerraform(struct?: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.stringToTerraform(struct!.annotations),
    containers: cdktf.listMapper(dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainersToTerraform, false)(struct!.containers),
    version: cdktf.stringToTerraform(struct!.version),
    volumes: cdktf.stringToTerraform(struct!.volumes),
  }
}


export function dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsToHclTerraform(struct?: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.stringToHclTerraform(struct!.annotations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    containers: {
      value: cdktf.listMapperHcl(dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainersList",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes: {
      value: cdktf.stringToHclTerraform(struct!.volumes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._containers.internalValue = undefined;
      this._version = undefined;
      this._volumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._containers.internalValue = value.containers;
      this._version = value.version;
      this._volumes = value.volumes;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string; 
  public get annotations() {
    return this.getStringAttribute('annotations');
  }
  public set annotations(value: string) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
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

  // volumes - computed: false, optional: true, required: false
  private _volumes?: string; 
  public get volumes() {
    return this.getStringAttribute('volumes');
  }
  public set volumes(value: string) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }
}

export class DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsOutputReference {
    return new DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpec {
  /**
  * Versions is the collection of versions for a given resource, with mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest#versions DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest#versions}
  */
  readonly versions?: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersions[] | cdktf.IResolvable;
}

export function dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecToTerraform(struct?: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    versions: cdktf.listMapper(dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsToTerraform, false)(struct!.versions),
  }
}


export function dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    versions: {
      value: cdktf.listMapperHcl(dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsToHclTerraform, false)(struct!.versions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._versions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._versions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._versions.internalValue = value.versions;
    }
  }

  // versions - computed: false, optional: true, required: false
  private _versions = new DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }
  public putVersions(value: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecVersions[] | cdktf.IResolvable) {
    this._versions.internalValue = value;
  }
  public resetVersions() {
    this._versions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest k8s_servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest}
*/
export class DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest k8s_servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_servicebinding_io_cluster_workload_resource_mapping_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpec) {
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
      metadata: dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SServicebindingIoClusterWorkloadResourceMappingV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
