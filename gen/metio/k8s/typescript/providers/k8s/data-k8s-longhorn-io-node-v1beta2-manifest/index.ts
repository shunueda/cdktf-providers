// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLonghornIoNodeV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#metadata DataK8SLonghornIoNodeV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SLonghornIoNodeV1Beta2ManifestMetadata;
  /**
  * NodeSpec defines the desired state of the Longhorn node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#spec DataK8SLonghornIoNodeV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SLonghornIoNodeV1Beta2ManifestSpec;
}
export interface DataK8SLonghornIoNodeV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#annotations DataK8SLonghornIoNodeV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#labels DataK8SLonghornIoNodeV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#name DataK8SLonghornIoNodeV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#namespace DataK8SLonghornIoNodeV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLonghornIoNodeV1Beta2ManifestMetadataToTerraform(struct?: DataK8SLonghornIoNodeV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLonghornIoNodeV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SLonghornIoNodeV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLonghornIoNodeV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoNodeV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLonghornIoNodeV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLonghornIoNodeV1Beta2ManifestSpecDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#allow_scheduling DataK8SLonghornIoNodeV1Beta2Manifest#allow_scheduling}
  */
  readonly allowScheduling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#disk_driver DataK8SLonghornIoNodeV1Beta2Manifest#disk_driver}
  */
  readonly diskDriver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#disk_type DataK8SLonghornIoNodeV1Beta2Manifest#disk_type}
  */
  readonly diskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#eviction_requested DataK8SLonghornIoNodeV1Beta2Manifest#eviction_requested}
  */
  readonly evictionRequested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#path DataK8SLonghornIoNodeV1Beta2Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#storage_reserved DataK8SLonghornIoNodeV1Beta2Manifest#storage_reserved}
  */
  readonly storageReserved?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#tags DataK8SLonghornIoNodeV1Beta2Manifest#tags}
  */
  readonly tags?: string[];
}

export function dataK8SLonghornIoNodeV1Beta2ManifestSpecDisksToTerraform(struct?: DataK8SLonghornIoNodeV1Beta2ManifestSpecDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_scheduling: cdktf.booleanToTerraform(struct!.allowScheduling),
    disk_driver: cdktf.stringToTerraform(struct!.diskDriver),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    eviction_requested: cdktf.booleanToTerraform(struct!.evictionRequested),
    path: cdktf.stringToTerraform(struct!.path),
    storage_reserved: cdktf.numberToTerraform(struct!.storageReserved),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function dataK8SLonghornIoNodeV1Beta2ManifestSpecDisksToHclTerraform(struct?: DataK8SLonghornIoNodeV1Beta2ManifestSpecDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_scheduling: {
      value: cdktf.booleanToHclTerraform(struct!.allowScheduling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_driver: {
      value: cdktf.stringToHclTerraform(struct!.diskDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eviction_requested: {
      value: cdktf.booleanToHclTerraform(struct!.evictionRequested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_reserved: {
      value: cdktf.numberToHclTerraform(struct!.storageReserved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLonghornIoNodeV1Beta2ManifestSpecDisksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoNodeV1Beta2ManifestSpecDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowScheduling !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowScheduling = this._allowScheduling;
    }
    if (this._diskDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskDriver = this._diskDriver;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._evictionRequested !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionRequested = this._evictionRequested;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._storageReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageReserved = this._storageReserved;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLonghornIoNodeV1Beta2ManifestSpecDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowScheduling = undefined;
      this._diskDriver = undefined;
      this._diskType = undefined;
      this._evictionRequested = undefined;
      this._path = undefined;
      this._storageReserved = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowScheduling = value.allowScheduling;
      this._diskDriver = value.diskDriver;
      this._diskType = value.diskType;
      this._evictionRequested = value.evictionRequested;
      this._path = value.path;
      this._storageReserved = value.storageReserved;
      this._tags = value.tags;
    }
  }

  // allow_scheduling - computed: false, optional: true, required: false
  private _allowScheduling?: boolean | cdktf.IResolvable; 
  public get allowScheduling() {
    return this.getBooleanAttribute('allow_scheduling');
  }
  public set allowScheduling(value: boolean | cdktf.IResolvable) {
    this._allowScheduling = value;
  }
  public resetAllowScheduling() {
    this._allowScheduling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSchedulingInput() {
    return this._allowScheduling;
  }

  // disk_driver - computed: false, optional: true, required: false
  private _diskDriver?: string; 
  public get diskDriver() {
    return this.getStringAttribute('disk_driver');
  }
  public set diskDriver(value: string) {
    this._diskDriver = value;
  }
  public resetDiskDriver() {
    this._diskDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskDriverInput() {
    return this._diskDriver;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // eviction_requested - computed: false, optional: true, required: false
  private _evictionRequested?: boolean | cdktf.IResolvable; 
  public get evictionRequested() {
    return this.getBooleanAttribute('eviction_requested');
  }
  public set evictionRequested(value: boolean | cdktf.IResolvable) {
    this._evictionRequested = value;
  }
  public resetEvictionRequested() {
    this._evictionRequested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionRequestedInput() {
    return this._evictionRequested;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // storage_reserved - computed: false, optional: true, required: false
  private _storageReserved?: number; 
  public get storageReserved() {
    return this.getNumberAttribute('storage_reserved');
  }
  public set storageReserved(value: number) {
    this._storageReserved = value;
  }
  public resetStorageReserved() {
    this._storageReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageReservedInput() {
    return this._storageReserved;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface DataK8SLonghornIoNodeV1Beta2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#allow_scheduling DataK8SLonghornIoNodeV1Beta2Manifest#allow_scheduling}
  */
  readonly allowScheduling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#disks DataK8SLonghornIoNodeV1Beta2Manifest#disks}
  */
  readonly disks?: DataK8SLonghornIoNodeV1Beta2ManifestSpecDisks;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#eviction_requested DataK8SLonghornIoNodeV1Beta2Manifest#eviction_requested}
  */
  readonly evictionRequested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#instance_manager_cpu_request DataK8SLonghornIoNodeV1Beta2Manifest#instance_manager_cpu_request}
  */
  readonly instanceManagerCpuRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#name DataK8SLonghornIoNodeV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#tags DataK8SLonghornIoNodeV1Beta2Manifest#tags}
  */
  readonly tags?: string[];
}

export function dataK8SLonghornIoNodeV1Beta2ManifestSpecToTerraform(struct?: DataK8SLonghornIoNodeV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_scheduling: cdktf.booleanToTerraform(struct!.allowScheduling),
    disks: dataK8SLonghornIoNodeV1Beta2ManifestSpecDisksToTerraform(struct!.disks),
    eviction_requested: cdktf.booleanToTerraform(struct!.evictionRequested),
    instance_manager_cpu_request: cdktf.numberToTerraform(struct!.instanceManagerCpuRequest),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function dataK8SLonghornIoNodeV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SLonghornIoNodeV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_scheduling: {
      value: cdktf.booleanToHclTerraform(struct!.allowScheduling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disks: {
      value: dataK8SLonghornIoNodeV1Beta2ManifestSpecDisksToHclTerraform(struct!.disks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLonghornIoNodeV1Beta2ManifestSpecDisks",
    },
    eviction_requested: {
      value: cdktf.booleanToHclTerraform(struct!.evictionRequested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_manager_cpu_request: {
      value: cdktf.numberToHclTerraform(struct!.instanceManagerCpuRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLonghornIoNodeV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoNodeV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowScheduling !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowScheduling = this._allowScheduling;
    }
    if (this._disks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disks = this._disks?.internalValue;
    }
    if (this._evictionRequested !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionRequested = this._evictionRequested;
    }
    if (this._instanceManagerCpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceManagerCpuRequest = this._instanceManagerCpuRequest;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLonghornIoNodeV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowScheduling = undefined;
      this._disks.internalValue = undefined;
      this._evictionRequested = undefined;
      this._instanceManagerCpuRequest = undefined;
      this._name = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowScheduling = value.allowScheduling;
      this._disks.internalValue = value.disks;
      this._evictionRequested = value.evictionRequested;
      this._instanceManagerCpuRequest = value.instanceManagerCpuRequest;
      this._name = value.name;
      this._tags = value.tags;
    }
  }

  // allow_scheduling - computed: false, optional: true, required: false
  private _allowScheduling?: boolean | cdktf.IResolvable; 
  public get allowScheduling() {
    return this.getBooleanAttribute('allow_scheduling');
  }
  public set allowScheduling(value: boolean | cdktf.IResolvable) {
    this._allowScheduling = value;
  }
  public resetAllowScheduling() {
    this._allowScheduling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSchedulingInput() {
    return this._allowScheduling;
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new DataK8SLonghornIoNodeV1Beta2ManifestSpecDisksOutputReference(this, "disks");
  public get disks() {
    return this._disks;
  }
  public putDisks(value: DataK8SLonghornIoNodeV1Beta2ManifestSpecDisks) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // eviction_requested - computed: false, optional: true, required: false
  private _evictionRequested?: boolean | cdktf.IResolvable; 
  public get evictionRequested() {
    return this.getBooleanAttribute('eviction_requested');
  }
  public set evictionRequested(value: boolean | cdktf.IResolvable) {
    this._evictionRequested = value;
  }
  public resetEvictionRequested() {
    this._evictionRequested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionRequestedInput() {
    return this._evictionRequested;
  }

  // instance_manager_cpu_request - computed: false, optional: true, required: false
  private _instanceManagerCpuRequest?: number; 
  public get instanceManagerCpuRequest() {
    return this.getNumberAttribute('instance_manager_cpu_request');
  }
  public set instanceManagerCpuRequest(value: number) {
    this._instanceManagerCpuRequest = value;
  }
  public resetInstanceManagerCpuRequest() {
    this._instanceManagerCpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceManagerCpuRequestInput() {
    return this._instanceManagerCpuRequest;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest k8s_longhorn_io_node_v1beta2_manifest}
*/
export class DataK8SLonghornIoNodeV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_longhorn_io_node_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLonghornIoNodeV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLonghornIoNodeV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SLonghornIoNodeV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLonghornIoNodeV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_longhorn_io_node_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_node_v1beta2_manifest k8s_longhorn_io_node_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLonghornIoNodeV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLonghornIoNodeV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_longhorn_io_node_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SLonghornIoNodeV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLonghornIoNodeV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLonghornIoNodeV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLonghornIoNodeV1Beta2ManifestSpec) {
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
      metadata: dataK8SLonghornIoNodeV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLonghornIoNodeV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLonghornIoNodeV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoNodeV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SLonghornIoNodeV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoNodeV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
