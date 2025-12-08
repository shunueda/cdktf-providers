// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#metadata DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestMetadata;
  /**
  * Spec defines the behavior of a physical machine chaos experiment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#spec DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpec;
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#annotations DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#labels DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#name DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#namespace DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecClock {
  /**
  * the identifier of the particular clock on which to act. More clock description in linux kernel can be found in man page of clock_getres, clock_gettime, clock_settime. Muti clock ids should be split with ','
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#clock_ids_slice DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#clock_ids_slice}
  */
  readonly clockIdsSlice?: string;
  /**
  * the pid of target program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#pid DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#pid}
  */
  readonly pid?: number;
  /**
  * specifies the length of time offset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#time_offset DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#time_offset}
  */
  readonly timeOffset?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecClockToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecClock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clock_ids_slice: cdktf.stringToTerraform(struct!.clockIdsSlice),
    pid: cdktf.numberToTerraform(struct!.pid),
    time_offset: cdktf.stringToTerraform(struct!.timeOffset),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecClockToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecClock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clock_ids_slice: {
      value: cdktf.stringToHclTerraform(struct!.clockIdsSlice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid: {
      value: cdktf.numberToHclTerraform(struct!.pid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_offset: {
      value: cdktf.stringToHclTerraform(struct!.timeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecClockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecClock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clockIdsSlice !== undefined) {
      hasAnyValues = true;
      internalValueResult.clockIdsSlice = this._clockIdsSlice;
    }
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    if (this._timeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOffset = this._timeOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecClock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clockIdsSlice = undefined;
      this._pid = undefined;
      this._timeOffset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clockIdsSlice = value.clockIdsSlice;
      this._pid = value.pid;
      this._timeOffset = value.timeOffset;
    }
  }

  // clock_ids_slice - computed: false, optional: true, required: false
  private _clockIdsSlice?: string; 
  public get clockIdsSlice() {
    return this.getStringAttribute('clock_ids_slice');
  }
  public set clockIdsSlice(value: string) {
    this._clockIdsSlice = value;
  }
  public resetClockIdsSlice() {
    this._clockIdsSlice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockIdsSliceInput() {
    return this._clockIdsSlice;
  }

  // pid - computed: false, optional: true, required: false
  private _pid?: number; 
  public get pid() {
    return this.getNumberAttribute('pid');
  }
  public set pid(value: number) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }

  // time_offset - computed: false, optional: true, required: false
  private _timeOffset?: string; 
  public get timeOffset() {
    return this.getStringAttribute('time_offset');
  }
  public set timeOffset(value: string) {
    this._timeOffset = value;
  }
  public resetTimeOffset() {
    this._timeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOffsetInput() {
    return this._timeOffset;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskFill {
  /**
  * fill disk by fallocate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#fill_by_fallocate DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#fill_by_fallocate}
  */
  readonly fillByFallocate?: boolean | cdktf.IResolvable;
  /**
  * specifies the location to fill data in. if path not provided, payload will read/write from/into a temp file, temp file will be deleted after writing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#path DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * specifies how many units of data will write into the file path. support unit: c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000, M=1024*1024, GB=1000*1000*1000, G=1024*1024*1024 BYTES. example : 1M | 512kB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#size DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#size}
  */
  readonly size?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskFillToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskFill | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fill_by_fallocate: cdktf.booleanToTerraform(struct!.fillByFallocate),
    path: cdktf.stringToTerraform(struct!.path),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskFillToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskFill | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fill_by_fallocate: {
      value: cdktf.booleanToHclTerraform(struct!.fillByFallocate),
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
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskFillOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskFill | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fillByFallocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillByFallocate = this._fillByFallocate;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskFill | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fillByFallocate = undefined;
      this._path = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fillByFallocate = value.fillByFallocate;
      this._path = value.path;
      this._size = value.size;
    }
  }

  // fill_by_fallocate - computed: false, optional: true, required: false
  private _fillByFallocate?: boolean | cdktf.IResolvable; 
  public get fillByFallocate() {
    return this.getBooleanAttribute('fill_by_fallocate');
  }
  public set fillByFallocate(value: boolean | cdktf.IResolvable) {
    this._fillByFallocate = value;
  }
  public resetFillByFallocate() {
    this._fillByFallocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillByFallocateInput() {
    return this._fillByFallocate;
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

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskReadPayload {
  /**
  * specifies the location to fill data in. if path not provided, payload will read/write from/into a temp file, temp file will be deleted after writing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#path DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * specifies the number of process work on writing, default 1, only 1-255 is valid value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#payload_process_num DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#payload_process_num}
  */
  readonly payloadProcessNum?: number;
  /**
  * specifies how many units of data will write into the file path. support unit: c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000, M=1024*1024, GB=1000*1000*1000, G=1024*1024*1024 BYTES. example : 1M | 512kB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#size DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#size}
  */
  readonly size?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskReadPayloadToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskReadPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    payload_process_num: cdktf.numberToTerraform(struct!.payloadProcessNum),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskReadPayloadToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskReadPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_process_num: {
      value: cdktf.numberToHclTerraform(struct!.payloadProcessNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskReadPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskReadPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._payloadProcessNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadProcessNum = this._payloadProcessNum;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskReadPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._payloadProcessNum = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._payloadProcessNum = value.payloadProcessNum;
      this._size = value.size;
    }
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

  // payload_process_num - computed: false, optional: true, required: false
  private _payloadProcessNum?: number; 
  public get payloadProcessNum() {
    return this.getNumberAttribute('payload_process_num');
  }
  public set payloadProcessNum(value: number) {
    this._payloadProcessNum = value;
  }
  public resetPayloadProcessNum() {
    this._payloadProcessNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadProcessNumInput() {
    return this._payloadProcessNum;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskWritePayload {
  /**
  * specifies the location to fill data in. if path not provided, payload will read/write from/into a temp file, temp file will be deleted after writing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#path DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * specifies the number of process work on writing, default 1, only 1-255 is valid value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#payload_process_num DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#payload_process_num}
  */
  readonly payloadProcessNum?: number;
  /**
  * specifies how many units of data will write into the file path. support unit: c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000, M=1024*1024, GB=1000*1000*1000, G=1024*1024*1024 BYTES. example : 1M | 512kB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#size DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#size}
  */
  readonly size?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskWritePayloadToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskWritePayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    payload_process_num: cdktf.numberToTerraform(struct!.payloadProcessNum),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskWritePayloadToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskWritePayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_process_num: {
      value: cdktf.numberToHclTerraform(struct!.payloadProcessNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskWritePayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskWritePayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._payloadProcessNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadProcessNum = this._payloadProcessNum;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskWritePayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._payloadProcessNum = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._payloadProcessNum = value.payloadProcessNum;
      this._size = value.size;
    }
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

  // payload_process_num - computed: false, optional: true, required: false
  private _payloadProcessNum?: number; 
  public get payloadProcessNum() {
    return this.getNumberAttribute('payload_process_num');
  }
  public set payloadProcessNum(value: number) {
    this._payloadProcessNum = value;
  }
  public resetPayloadProcessNum() {
    this._payloadProcessNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadProcessNumInput() {
    return this._payloadProcessNum;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileAppend {
  /**
  * Count is the number of times to append the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#count DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#count}
  */
  readonly count?: number;
  /**
  * Data is the data for append.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#data DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#data}
  */
  readonly data?: string;
  /**
  * FileName is the name of the file to be created, modified, deleted, renamed, or appended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#file_name DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#file_name}
  */
  readonly fileName?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileAppendToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileAppend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    data: cdktf.stringToTerraform(struct!.data),
    file_name: cdktf.stringToTerraform(struct!.fileName),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileAppendToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileAppend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileAppendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileAppend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileAppend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._data = undefined;
      this._fileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._data = value.data;
      this._fileName = value.fileName;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileCreate {
  /**
  * DirName is the directory name to create or delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#dir_name DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#dir_name}
  */
  readonly dirName?: string;
  /**
  * FileName is the name of the file to be created, modified, deleted, renamed, or appended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#file_name DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#file_name}
  */
  readonly fileName?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileCreateToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dir_name: cdktf.stringToTerraform(struct!.dirName),
    file_name: cdktf.stringToTerraform(struct!.fileName),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileCreateToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dir_name: {
      value: cdktf.stringToHclTerraform(struct!.dirName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileCreate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dirName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dirName = this._dirName;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileCreate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dirName = undefined;
      this._fileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dirName = value.dirName;
      this._fileName = value.fileName;
    }
  }

  // dir_name - computed: false, optional: true, required: false
  private _dirName?: string; 
  public get dirName() {
    return this.getStringAttribute('dir_name');
  }
  public set dirName(value: string) {
    this._dirName = value;
  }
  public resetDirName() {
    this._dirName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirNameInput() {
    return this._dirName;
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileDelete {
  /**
  * DirName is the directory name to create or delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#dir_name DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#dir_name}
  */
  readonly dirName?: string;
  /**
  * FileName is the name of the file to be created, modified, deleted, renamed, or appended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#file_name DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#file_name}
  */
  readonly fileName?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileDeleteToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dir_name: cdktf.stringToTerraform(struct!.dirName),
    file_name: cdktf.stringToTerraform(struct!.fileName),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileDeleteToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dir_name: {
      value: cdktf.stringToHclTerraform(struct!.dirName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dirName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dirName = this._dirName;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dirName = undefined;
      this._fileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dirName = value.dirName;
      this._fileName = value.fileName;
    }
  }

  // dir_name - computed: false, optional: true, required: false
  private _dirName?: string; 
  public get dirName() {
    return this.getStringAttribute('dir_name');
  }
  public set dirName(value: string) {
    this._dirName = value;
  }
  public resetDirName() {
    this._dirName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirNameInput() {
    return this._dirName;
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileModify {
  /**
  * FileName is the name of the file to be created, modified, deleted, renamed, or appended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#file_name DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#file_name}
  */
  readonly fileName?: string;
  /**
  * Privilege is the file privilege to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#privilege DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#privilege}
  */
  readonly privilege?: number;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileModifyToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileModify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_name: cdktf.stringToTerraform(struct!.fileName),
    privilege: cdktf.numberToTerraform(struct!.privilege),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileModifyToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileModify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privilege: {
      value: cdktf.numberToHclTerraform(struct!.privilege),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileModifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileModify | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._privilege !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilege = this._privilege;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileModify | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileName = undefined;
      this._privilege = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileName = value.fileName;
      this._privilege = value.privilege;
    }
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // privilege - computed: false, optional: true, required: false
  private _privilege?: number; 
  public get privilege() {
    return this.getNumberAttribute('privilege');
  }
  public set privilege(value: number) {
    this._privilege = value;
  }
  public resetPrivilege() {
    this._privilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileRename {
  /**
  * DestFile is the name to be renamed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#dest_file DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#dest_file}
  */
  readonly destFile?: string;
  /**
  * SourceFile is the name need to be renamed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#source_file DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#source_file}
  */
  readonly sourceFile?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileRenameToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileRename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_file: cdktf.stringToTerraform(struct!.destFile),
    source_file: cdktf.stringToTerraform(struct!.sourceFile),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileRenameToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileRename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_file: {
      value: cdktf.stringToHclTerraform(struct!.destFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file: {
      value: cdktf.stringToHclTerraform(struct!.sourceFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileRenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileRename | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.destFile = this._destFile;
    }
    if (this._sourceFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFile = this._sourceFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileRename | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destFile = undefined;
      this._sourceFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destFile = value.destFile;
      this._sourceFile = value.sourceFile;
    }
  }

  // dest_file - computed: false, optional: true, required: false
  private _destFile?: string; 
  public get destFile() {
    return this.getStringAttribute('dest_file');
  }
  public set destFile(value: string) {
    this._destFile = value;
  }
  public resetDestFile() {
    this._destFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destFileInput() {
    return this._destFile;
  }

  // source_file - computed: false, optional: true, required: false
  private _sourceFile?: string; 
  public get sourceFile() {
    return this.getStringAttribute('source_file');
  }
  public set sourceFile(value: string) {
    this._sourceFile = value;
  }
  public resetSourceFile() {
    this._sourceFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileInput() {
    return this._sourceFile;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileReplace {
  /**
  * DestStr is the destination string of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#dest_string DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#dest_string}
  */
  readonly destString?: string;
  /**
  * FileName is the name of the file to be created, modified, deleted, renamed, or appended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#file_name DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#file_name}
  */
  readonly fileName?: string;
  /**
  * Line is the line number of the file to be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#line DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#line}
  */
  readonly line?: number;
  /**
  * OriginStr is the origin string of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#origin_string DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#origin_string}
  */
  readonly originString?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileReplaceToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileReplace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_string: cdktf.stringToTerraform(struct!.destString),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    line: cdktf.numberToTerraform(struct!.line),
    origin_string: cdktf.stringToTerraform(struct!.originString),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileReplaceToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileReplace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_string: {
      value: cdktf.stringToHclTerraform(struct!.destString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line: {
      value: cdktf.numberToHclTerraform(struct!.line),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_string: {
      value: cdktf.stringToHclTerraform(struct!.originString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileReplaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileReplace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destString !== undefined) {
      hasAnyValues = true;
      internalValueResult.destString = this._destString;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._line !== undefined) {
      hasAnyValues = true;
      internalValueResult.line = this._line;
    }
    if (this._originString !== undefined) {
      hasAnyValues = true;
      internalValueResult.originString = this._originString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileReplace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destString = undefined;
      this._fileName = undefined;
      this._line = undefined;
      this._originString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destString = value.destString;
      this._fileName = value.fileName;
      this._line = value.line;
      this._originString = value.originString;
    }
  }

  // dest_string - computed: false, optional: true, required: false
  private _destString?: string; 
  public get destString() {
    return this.getStringAttribute('dest_string');
  }
  public set destString(value: string) {
    this._destString = value;
  }
  public resetDestString() {
    this._destString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destStringInput() {
    return this._destString;
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // line - computed: false, optional: true, required: false
  private _line?: number; 
  public get line() {
    return this.getNumberAttribute('line');
  }
  public set line(value: number) {
    this._line = value;
  }
  public resetLine() {
    this._line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInput() {
    return this._line;
  }

  // origin_string - computed: false, optional: true, required: false
  private _originString?: string; 
  public get originString() {
    return this.getStringAttribute('origin_string');
  }
  public set originString(value: string) {
    this._originString = value;
  }
  public resetOriginString() {
    this._originString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originStringInput() {
    return this._originString;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpAbort {
  /**
  * Code is a rule to select target by http status code in response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#code DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#code}
  */
  readonly code?: string;
  /**
  * HTTP method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#method DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * Match path of Uri with wildcard matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#path DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * The TCP port that the target service listens on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Composed with one of the port of HTTP connection, we will only attack HTTP connection with port inside proxy_ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#proxy_ports DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#proxy_ports}
  */
  readonly proxyPorts: string[];
  /**
  * HTTP target: Request or Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#target DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#target}
  */
  readonly target: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpAbortToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpAbort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    proxy_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyPorts),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpAbortToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpAbort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpAbortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpAbort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxyPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPorts = this._proxyPorts;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpAbort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._method = undefined;
      this._path = undefined;
      this._port = undefined;
      this._proxyPorts = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._method = value.method;
      this._path = value.path;
      this._port = value.port;
      this._proxyPorts = value.proxyPorts;
      this._target = value.target;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxy_ports - computed: false, optional: false, required: true
  private _proxyPorts?: string[]; 
  public get proxyPorts() {
    return this.getListAttribute('proxy_ports');
  }
  public set proxyPorts(value: string[]) {
    this._proxyPorts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortsInput() {
    return this._proxyPorts;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpConfig {
  /**
  * The config file path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#file_path DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#file_path}
  */
  readonly filePath?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpConfigToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_path: cdktf.stringToTerraform(struct!.filePath),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpConfigToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filePath = value.filePath;
    }
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpDelay {
  /**
  * Code is a rule to select target by http status code in response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#code DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#code}
  */
  readonly code?: string;
  /**
  * Delay represents the delay of the target request/response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#delay DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#delay}
  */
  readonly delay: string;
  /**
  * HTTP method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#method DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * Match path of Uri with wildcard matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#path DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * The TCP port that the target service listens on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Composed with one of the port of HTTP connection, we will only attack HTTP connection with port inside proxy_ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#proxy_ports DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#proxy_ports}
  */
  readonly proxyPorts: string[];
  /**
  * HTTP target: Request or Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#target DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#target}
  */
  readonly target: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpDelayToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    delay: cdktf.stringToTerraform(struct!.delay),
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    proxy_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyPorts),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpDelayToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay: {
      value: cdktf.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpDelay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxyPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPorts = this._proxyPorts;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpDelay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._delay = undefined;
      this._method = undefined;
      this._path = undefined;
      this._port = undefined;
      this._proxyPorts = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._delay = value.delay;
      this._method = value.method;
      this._path = value.path;
      this._port = value.port;
      this._proxyPorts = value.proxyPorts;
      this._target = value.target;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // delay - computed: false, optional: false, required: true
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxy_ports - computed: false, optional: false, required: true
  private _proxyPorts?: string[]; 
  public get proxyPorts() {
    return this.getListAttribute('proxy_ports');
  }
  public set proxyPorts(value: string[]) {
    this._proxyPorts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortsInput() {
    return this._proxyPorts;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpRequest {
  /**
  * The number of requests to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#count DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#count}
  */
  readonly count?: number;
  /**
  * Enable connection pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#enable_conn_pool DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#enable_conn_pool}
  */
  readonly enableConnPool?: boolean | cdktf.IResolvable;
  /**
  * Request to send'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#url DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpRequestToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    enable_conn_pool: cdktf.booleanToTerraform(struct!.enableConnPool),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpRequestToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_conn_pool: {
      value: cdktf.booleanToHclTerraform(struct!.enableConnPool),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._enableConnPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConnPool = this._enableConnPool;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._enableConnPool = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._enableConnPool = value.enableConnPool;
      this._url = value.url;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // enable_conn_pool - computed: false, optional: true, required: false
  private _enableConnPool?: boolean | cdktf.IResolvable; 
  public get enableConnPool() {
    return this.getBooleanAttribute('enable_conn_pool');
  }
  public set enableConnPool(value: boolean | cdktf.IResolvable) {
    this._enableConnPool = value;
  }
  public resetEnableConnPool() {
    this._enableConnPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConnPoolInput() {
    return this._enableConnPool;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmException {
  /**
  * Java class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#class}
  */
  readonly class?: string;
  /**
  * the exception which needs to throw for action 'exception'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#exception DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#exception}
  */
  readonly exception?: string;
  /**
  * the method in Java class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#method DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * the pid of Java process which needs to attach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#pid DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#pid}
  */
  readonly pid?: number;
  /**
  * the port of agent server, default 9277
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmExceptionToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    exception: cdktf.stringToTerraform(struct!.exception),
    method: cdktf.stringToTerraform(struct!.method),
    pid: cdktf.numberToTerraform(struct!.pid),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmExceptionToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception: {
      value: cdktf.stringToHclTerraform(struct!.exception),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid: {
      value: cdktf.numberToHclTerraform(struct!.pid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmExceptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmException | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._exception !== undefined) {
      hasAnyValues = true;
      internalValueResult.exception = this._exception;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmException | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._exception = undefined;
      this._method = undefined;
      this._pid = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._exception = value.exception;
      this._method = value.method;
      this._pid = value.pid;
      this._port = value.port;
    }
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // exception - computed: false, optional: true, required: false
  private _exception?: string; 
  public get exception() {
    return this.getStringAttribute('exception');
  }
  public set exception(value: string) {
    this._exception = value;
  }
  public resetException() {
    this._exception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionInput() {
    return this._exception;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // pid - computed: false, optional: true, required: false
  private _pid?: number; 
  public get pid() {
    return this.getNumberAttribute('pid');
  }
  public set pid(value: number) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmGc {
  /**
  * the pid of Java process which needs to attach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#pid DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#pid}
  */
  readonly pid?: number;
  /**
  * the port of agent server, default 9277
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmGcToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmGc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pid: cdktf.numberToTerraform(struct!.pid),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmGcToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmGc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pid: {
      value: cdktf.numberToHclTerraform(struct!.pid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmGcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmGc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmGc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pid = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pid = value.pid;
      this._port = value.port;
    }
  }

  // pid - computed: false, optional: true, required: false
  private _pid?: number; 
  public get pid() {
    return this.getNumberAttribute('pid');
  }
  public set pid(value: number) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmLatency {
  /**
  * Java class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#class}
  */
  readonly class?: string;
  /**
  * the latency duration for action 'latency', unit ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#latency DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#latency}
  */
  readonly latency?: number;
  /**
  * the method in Java class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#method DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * the pid of Java process which needs to attach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#pid DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#pid}
  */
  readonly pid?: number;
  /**
  * the port of agent server, default 9277
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmLatencyToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmLatency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    latency: cdktf.numberToTerraform(struct!.latency),
    method: cdktf.stringToTerraform(struct!.method),
    pid: cdktf.numberToTerraform(struct!.pid),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmLatencyToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmLatency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latency: {
      value: cdktf.numberToHclTerraform(struct!.latency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid: {
      value: cdktf.numberToHclTerraform(struct!.pid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmLatencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmLatency | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmLatency | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._latency = undefined;
      this._method = undefined;
      this._pid = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._latency = value.latency;
      this._method = value.method;
      this._pid = value.pid;
      this._port = value.port;
    }
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // latency - computed: false, optional: true, required: false
  private _latency?: number; 
  public get latency() {
    return this.getNumberAttribute('latency');
  }
  public set latency(value: number) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // pid - computed: false, optional: true, required: false
  private _pid?: number; 
  public get pid() {
    return this.getNumberAttribute('pid');
  }
  public set pid(value: number) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmMysql {
  /**
  * the match database default value is '', means match all database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#database DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#database}
  */
  readonly database?: string;
  /**
  * The exception which needs to throw for action 'exception' or the exception message needs to throw in action 'mysql'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#exception DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#exception}
  */
  readonly exception?: string;
  /**
  * The latency duration for action 'latency' or the latency duration in action 'mysql'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#latency DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#latency}
  */
  readonly latency?: number;
  /**
  * the version of mysql-connector-java, only support 5.X.X(set to '5') and 8.X.X(set to '8') now
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#mysql_connector_version DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#mysql_connector_version}
  */
  readonly mysqlConnectorVersion?: string;
  /**
  * the pid of Java process which needs to attach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#pid DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#pid}
  */
  readonly pid?: number;
  /**
  * the port of agent server, default 9277
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * the match sql type default value is '', means match all SQL type. The value can be 'select', 'insert', 'update', 'delete', 'replace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#sql_type DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#sql_type}
  */
  readonly sqlType?: string;
  /**
  * the match table default value is '', means match all table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#table DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#table}
  */
  readonly table?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmMysqlToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    exception: cdktf.stringToTerraform(struct!.exception),
    latency: cdktf.numberToTerraform(struct!.latency),
    mysql_connector_version: cdktf.stringToTerraform(struct!.mysqlConnectorVersion),
    pid: cdktf.numberToTerraform(struct!.pid),
    port: cdktf.numberToTerraform(struct!.port),
    sql_type: cdktf.stringToTerraform(struct!.sqlType),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmMysqlToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception: {
      value: cdktf.stringToHclTerraform(struct!.exception),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latency: {
      value: cdktf.numberToHclTerraform(struct!.latency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysql_connector_version: {
      value: cdktf.stringToHclTerraform(struct!.mysqlConnectorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid: {
      value: cdktf.numberToHclTerraform(struct!.pid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sql_type: {
      value: cdktf.stringToHclTerraform(struct!.sqlType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmMysql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._exception !== undefined) {
      hasAnyValues = true;
      internalValueResult.exception = this._exception;
    }
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    if (this._mysqlConnectorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlConnectorVersion = this._mysqlConnectorVersion;
    }
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sqlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlType = this._sqlType;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmMysql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._exception = undefined;
      this._latency = undefined;
      this._mysqlConnectorVersion = undefined;
      this._pid = undefined;
      this._port = undefined;
      this._sqlType = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._exception = value.exception;
      this._latency = value.latency;
      this._mysqlConnectorVersion = value.mysqlConnectorVersion;
      this._pid = value.pid;
      this._port = value.port;
      this._sqlType = value.sqlType;
      this._table = value.table;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // exception - computed: false, optional: true, required: false
  private _exception?: string; 
  public get exception() {
    return this.getStringAttribute('exception');
  }
  public set exception(value: string) {
    this._exception = value;
  }
  public resetException() {
    this._exception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionInput() {
    return this._exception;
  }

  // latency - computed: false, optional: true, required: false
  private _latency?: number; 
  public get latency() {
    return this.getNumberAttribute('latency');
  }
  public set latency(value: number) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }

  // mysql_connector_version - computed: false, optional: true, required: false
  private _mysqlConnectorVersion?: string; 
  public get mysqlConnectorVersion() {
    return this.getStringAttribute('mysql_connector_version');
  }
  public set mysqlConnectorVersion(value: string) {
    this._mysqlConnectorVersion = value;
  }
  public resetMysqlConnectorVersion() {
    this._mysqlConnectorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlConnectorVersionInput() {
    return this._mysqlConnectorVersion;
  }

  // pid - computed: false, optional: true, required: false
  private _pid?: number; 
  public get pid() {
    return this.getNumberAttribute('pid');
  }
  public set pid(value: number) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sql_type - computed: false, optional: true, required: false
  private _sqlType?: string; 
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }
  public set sqlType(value: string) {
    this._sqlType = value;
  }
  public resetSqlType() {
    this._sqlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTypeInput() {
    return this._sqlType;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmReturn {
  /**
  * Java class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#class}
  */
  readonly class?: string;
  /**
  * the method in Java class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#method DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * the pid of Java process which needs to attach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#pid DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#pid}
  */
  readonly pid?: number;
  /**
  * the port of agent server, default 9277
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * the return value for action 'return'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#value DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmReturnToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    method: cdktf.stringToTerraform(struct!.method),
    pid: cdktf.numberToTerraform(struct!.pid),
    port: cdktf.numberToTerraform(struct!.port),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmReturnToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid: {
      value: cdktf.numberToHclTerraform(struct!.pid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmReturnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmReturn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmReturn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._method = undefined;
      this._pid = undefined;
      this._port = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._method = value.method;
      this._pid = value.pid;
      this._port = value.port;
      this._value = value.value;
    }
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // pid - computed: false, optional: true, required: false
  private _pid?: number; 
  public get pid() {
    return this.getNumberAttribute('pid');
  }
  public set pid(value: number) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmRuleData {
  /**
  * the pid of Java process which needs to attach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#pid DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#pid}
  */
  readonly pid?: number;
  /**
  * the port of agent server, default 9277
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * RuleData used to save the rule file's data, will use it when recover
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#rule_data DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#rule_data}
  */
  readonly ruleData?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmRuleDataToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmRuleData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pid: cdktf.numberToTerraform(struct!.pid),
    port: cdktf.numberToTerraform(struct!.port),
    rule_data: cdktf.stringToTerraform(struct!.ruleData),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmRuleDataToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmRuleData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pid: {
      value: cdktf.numberToHclTerraform(struct!.pid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_data: {
      value: cdktf.stringToHclTerraform(struct!.ruleData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmRuleDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmRuleData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ruleData !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleData = this._ruleData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmRuleData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pid = undefined;
      this._port = undefined;
      this._ruleData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pid = value.pid;
      this._port = value.port;
      this._ruleData = value.ruleData;
    }
  }

  // pid - computed: false, optional: true, required: false
  private _pid?: number; 
  public get pid() {
    return this.getNumberAttribute('pid');
  }
  public set pid(value: number) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // rule_data - computed: false, optional: true, required: false
  private _ruleData?: string; 
  public get ruleData() {
    return this.getStringAttribute('rule_data');
  }
  public set ruleData(value: string) {
    this._ruleData = value;
  }
  public resetRuleData() {
    this._ruleData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDataInput() {
    return this._ruleData;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmStress {
  /**
  * the CPU core number need to use, only set it when action is stress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#cpu_count DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * the memory type need to locate, only set it when action is stress, the value can be 'stack' or 'heap'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#mem_type DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#mem_type}
  */
  readonly memType?: string;
  /**
  * the pid of Java process which needs to attach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#pid DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#pid}
  */
  readonly pid?: number;
  /**
  * the port of agent server, default 9277
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmStressToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmStress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    mem_type: cdktf.stringToTerraform(struct!.memType),
    pid: cdktf.numberToTerraform(struct!.pid),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmStressToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmStress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_type: {
      value: cdktf.stringToHclTerraform(struct!.memType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid: {
      value: cdktf.numberToHclTerraform(struct!.pid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmStressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmStress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._memType !== undefined) {
      hasAnyValues = true;
      internalValueResult.memType = this._memType;
    }
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmStress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuCount = undefined;
      this._memType = undefined;
      this._pid = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuCount = value.cpuCount;
      this._memType = value.memType;
      this._pid = value.pid;
      this._port = value.port;
    }
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // mem_type - computed: false, optional: true, required: false
  private _memType?: string; 
  public get memType() {
    return this.getStringAttribute('mem_type');
  }
  public set memType(value: string) {
    this._memType = value;
  }
  public resetMemType() {
    this._memType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memTypeInput() {
    return this._memType;
  }

  // pid - computed: false, optional: true, required: false
  private _pid?: number; 
  public get pid() {
    return this.getNumberAttribute('pid');
  }
  public set pid(value: number) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFill {
  /**
  * The host of kafka server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#host DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * The max bytes to fill
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#max_bytes DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * The size of each message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#message_size DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#message_size}
  */
  readonly messageSize?: number;
  /**
  * The password of kafka client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#password DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#password}
  */
  readonly password?: string;
  /**
  * The port of kafka server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * The command to reload kafka config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#reload_command DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#reload_command}
  */
  readonly reloadCommand?: string;
  /**
  * The topic to attack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#topic DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#topic}
  */
  readonly topic?: string;
  /**
  * The username of kafka client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#username DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFillToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFill | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    message_size: cdktf.numberToTerraform(struct!.messageSize),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    reload_command: cdktf.stringToTerraform(struct!.reloadCommand),
    topic: cdktf.stringToTerraform(struct!.topic),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFillToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFill | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_size: {
      value: cdktf.numberToHclTerraform(struct!.messageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reload_command: {
      value: cdktf.stringToHclTerraform(struct!.reloadCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFillOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFill | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._messageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageSize = this._messageSize;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._reloadCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.reloadCommand = this._reloadCommand;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFill | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._maxBytes = undefined;
      this._messageSize = undefined;
      this._password = undefined;
      this._port = undefined;
      this._reloadCommand = undefined;
      this._topic = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._maxBytes = value.maxBytes;
      this._messageSize = value.messageSize;
      this._password = value.password;
      this._port = value.port;
      this._reloadCommand = value.reloadCommand;
      this._topic = value.topic;
      this._username = value.username;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // message_size - computed: false, optional: true, required: false
  private _messageSize?: number; 
  public get messageSize() {
    return this.getNumberAttribute('message_size');
  }
  public set messageSize(value: number) {
    this._messageSize = value;
  }
  public resetMessageSize() {
    this._messageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageSizeInput() {
    return this._messageSize;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // reload_command - computed: false, optional: true, required: false
  private _reloadCommand?: string; 
  public get reloadCommand() {
    return this.getStringAttribute('reload_command');
  }
  public set reloadCommand(value: string) {
    this._reloadCommand = value;
  }
  public resetReloadCommand() {
    this._reloadCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reloadCommandInput() {
    return this._reloadCommand;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFlood {
  /**
  * The host of kafka server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#host DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * The size of each message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#message_size DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#message_size}
  */
  readonly messageSize?: number;
  /**
  * The password of kafka client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#password DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#password}
  */
  readonly password?: string;
  /**
  * The port of kafka server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * The number of worker threads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#threads DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#threads}
  */
  readonly threads?: number;
  /**
  * The topic to attack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#topic DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#topic}
  */
  readonly topic?: string;
  /**
  * The username of kafka client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#username DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFloodToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFlood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    message_size: cdktf.numberToTerraform(struct!.messageSize),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    threads: cdktf.numberToTerraform(struct!.threads),
    topic: cdktf.stringToTerraform(struct!.topic),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFloodToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFlood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_size: {
      value: cdktf.numberToHclTerraform(struct!.messageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threads: {
      value: cdktf.numberToHclTerraform(struct!.threads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFloodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFlood | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._messageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageSize = this._messageSize;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._threads !== undefined) {
      hasAnyValues = true;
      internalValueResult.threads = this._threads;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFlood | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._messageSize = undefined;
      this._password = undefined;
      this._port = undefined;
      this._threads = undefined;
      this._topic = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._messageSize = value.messageSize;
      this._password = value.password;
      this._port = value.port;
      this._threads = value.threads;
      this._topic = value.topic;
      this._username = value.username;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // message_size - computed: false, optional: true, required: false
  private _messageSize?: number; 
  public get messageSize() {
    return this.getNumberAttribute('message_size');
  }
  public set messageSize(value: number) {
    this._messageSize = value;
  }
  public resetMessageSize() {
    this._messageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageSizeInput() {
    return this._messageSize;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // threads - computed: false, optional: true, required: false
  private _threads?: number; 
  public get threads() {
    return this.getNumberAttribute('threads');
  }
  public set threads(value: number) {
    this._threads = value;
  }
  public resetThreads() {
    this._threads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsInput() {
    return this._threads;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaIo {
  /**
  * The path of server config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#config_file DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#config_file}
  */
  readonly configFile?: string;
  /**
  * Make kafka cluster non-readable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#non_readable DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#non_readable}
  */
  readonly nonReadable?: boolean | cdktf.IResolvable;
  /**
  * Make kafka cluster non-writable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#non_writable DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#non_writable}
  */
  readonly nonWritable?: boolean | cdktf.IResolvable;
  /**
  * The topic to attack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#topic DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#topic}
  */
  readonly topic?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaIoToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_file: cdktf.stringToTerraform(struct!.configFile),
    non_readable: cdktf.booleanToTerraform(struct!.nonReadable),
    non_writable: cdktf.booleanToTerraform(struct!.nonWritable),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaIoToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_file: {
      value: cdktf.stringToHclTerraform(struct!.configFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_readable: {
      value: cdktf.booleanToHclTerraform(struct!.nonReadable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    non_writable: {
      value: cdktf.booleanToHclTerraform(struct!.nonWritable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaIo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFile = this._configFile;
    }
    if (this._nonReadable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonReadable = this._nonReadable;
    }
    if (this._nonWritable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonWritable = this._nonWritable;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaIo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configFile = undefined;
      this._nonReadable = undefined;
      this._nonWritable = undefined;
      this._topic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configFile = value.configFile;
      this._nonReadable = value.nonReadable;
      this._nonWritable = value.nonWritable;
      this._topic = value.topic;
    }
  }

  // config_file - computed: false, optional: true, required: false
  private _configFile?: string; 
  public get configFile() {
    return this.getStringAttribute('config_file');
  }
  public set configFile(value: string) {
    this._configFile = value;
  }
  public resetConfigFile() {
    this._configFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile;
  }

  // non_readable - computed: false, optional: true, required: false
  private _nonReadable?: boolean | cdktf.IResolvable; 
  public get nonReadable() {
    return this.getBooleanAttribute('non_readable');
  }
  public set nonReadable(value: boolean | cdktf.IResolvable) {
    this._nonReadable = value;
  }
  public resetNonReadable() {
    this._nonReadable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonReadableInput() {
    return this._nonReadable;
  }

  // non_writable - computed: false, optional: true, required: false
  private _nonWritable?: boolean | cdktf.IResolvable; 
  public get nonWritable() {
    return this.getBooleanAttribute('non_writable');
  }
  public set nonWritable(value: boolean | cdktf.IResolvable) {
    this._nonWritable = value;
  }
  public resetNonWritable() {
    this._nonWritable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonWritableInput() {
    return this._nonWritable;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkBandwidth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#buffer DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#buffer}
  */
  readonly buffer: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#device DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#hostname DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#ip_address DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#limit DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#limit}
  */
  readonly limit: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#minburst DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#minburst}
  */
  readonly minburst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#peakrate DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#peakrate}
  */
  readonly peakrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#rate DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#rate}
  */
  readonly rate: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkBandwidthToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkBandwidth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.numberToTerraform(struct!.buffer),
    device: cdktf.stringToTerraform(struct!.device),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    limit: cdktf.numberToTerraform(struct!.limit),
    minburst: cdktf.numberToTerraform(struct!.minburst),
    peakrate: cdktf.numberToTerraform(struct!.peakrate),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkBandwidthToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkBandwidth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.numberToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minburst: {
      value: cdktf.numberToHclTerraform(struct!.minburst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peakrate: {
      value: cdktf.numberToHclTerraform(struct!.peakrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkBandwidth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._minburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.minburst = this._minburst;
    }
    if (this._peakrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakrate = this._peakrate;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkBandwidth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._device = undefined;
      this._hostname = undefined;
      this._ipAddress = undefined;
      this._limit = undefined;
      this._minburst = undefined;
      this._peakrate = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._device = value.device;
      this._hostname = value.hostname;
      this._ipAddress = value.ipAddress;
      this._limit = value.limit;
      this._minburst = value.minburst;
      this._peakrate = value.peakrate;
      this._rate = value.rate;
    }
  }

  // buffer - computed: false, optional: false, required: true
  private _buffer?: number; 
  public get buffer() {
    return this.getNumberAttribute('buffer');
  }
  public set buffer(value: number) {
    this._buffer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // minburst - computed: false, optional: true, required: false
  private _minburst?: number; 
  public get minburst() {
    return this.getNumberAttribute('minburst');
  }
  public set minburst(value: number) {
    this._minburst = value;
  }
  public resetMinburst() {
    this._minburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minburstInput() {
    return this._minburst;
  }

  // peakrate - computed: false, optional: true, required: false
  private _peakrate?: number; 
  public get peakrate() {
    return this.getNumberAttribute('peakrate');
  }
  public set peakrate(value: number) {
    this._peakrate = value;
  }
  public resetPeakrate() {
    this._peakrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakrateInput() {
    return this._peakrate;
  }

  // rate - computed: false, optional: false, required: true
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkCorrupt {
  /**
  * correlation is percentage (10 is 10%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#correlation DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#correlation}
  */
  readonly correlation?: string;
  /**
  * the network interface to impact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#device DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#device}
  */
  readonly device?: string;
  /**
  * only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#egress_port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#egress_port}
  */
  readonly egressPort?: string;
  /**
  * only impact traffic to these hostnames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#hostname DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * only impact egress traffic to these IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#ip_address DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * only impact traffic using this IP protocol, supported: tcp, udp, icmp, all
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#ip_protocol DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * percentage of packets to corrupt (10 is 10%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#percent DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#percent}
  */
  readonly percent?: string;
  /**
  * only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#source_port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#source_port}
  */
  readonly sourcePort?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkCorruptToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkCorrupt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.stringToTerraform(struct!.correlation),
    device: cdktf.stringToTerraform(struct!.device),
    egress_port: cdktf.stringToTerraform(struct!.egressPort),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    percent: cdktf.stringToTerraform(struct!.percent),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkCorruptToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkCorrupt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    correlation: {
      value: cdktf.stringToHclTerraform(struct!.correlation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_port: {
      value: cdktf.stringToHclTerraform(struct!.egressPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent: {
      value: cdktf.stringToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkCorruptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkCorrupt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._egressPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPort = this._egressPort;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkCorrupt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlation = undefined;
      this._device = undefined;
      this._egressPort = undefined;
      this._hostname = undefined;
      this._ipAddress = undefined;
      this._ipProtocol = undefined;
      this._percent = undefined;
      this._sourcePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlation = value.correlation;
      this._device = value.device;
      this._egressPort = value.egressPort;
      this._hostname = value.hostname;
      this._ipAddress = value.ipAddress;
      this._ipProtocol = value.ipProtocol;
      this._percent = value.percent;
      this._sourcePort = value.sourcePort;
    }
  }

  // correlation - computed: false, optional: true, required: false
  private _correlation?: string; 
  public get correlation() {
    return this.getStringAttribute('correlation');
  }
  public set correlation(value: string) {
    this._correlation = value;
  }
  public resetCorrelation() {
    this._correlation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationInput() {
    return this._correlation;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // egress_port - computed: false, optional: true, required: false
  private _egressPort?: string; 
  public get egressPort() {
    return this.getStringAttribute('egress_port');
  }
  public set egressPort(value: string) {
    this._egressPort = value;
  }
  public resetEgressPort() {
    this._egressPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPortInput() {
    return this._egressPort;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: string; 
  public get percent() {
    return this.getStringAttribute('percent');
  }
  public set percent(value: string) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDelay {
  /**
  * only the packet which match the tcp flag can be accepted, others will be dropped. only set when the IPProtocol is tcp, used for partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#accept_tcp_flags DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#accept_tcp_flags}
  */
  readonly acceptTcpFlags?: string;
  /**
  * correlation is percentage (10 is 10%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#correlation DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#correlation}
  */
  readonly correlation?: string;
  /**
  * the network interface to impact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#device DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#device}
  */
  readonly device?: string;
  /**
  * only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#egress_port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#egress_port}
  */
  readonly egressPort?: string;
  /**
  * only impact traffic to these hostnames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#hostname DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * only impact egress traffic to these IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#ip_address DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * only impact traffic using this IP protocol, supported: tcp, udp, icmp, all
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#ip_protocol DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * jitter time, time units: ns, us (or µs), ms, s, m, h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#jitter DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#jitter}
  */
  readonly jitter?: string;
  /**
  * delay egress time, time units: ns, us (or µs), ms, s, m, h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#latency DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#latency}
  */
  readonly latency?: string;
  /**
  * only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#source_port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#source_port}
  */
  readonly sourcePort?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDelayToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_tcp_flags: cdktf.stringToTerraform(struct!.acceptTcpFlags),
    correlation: cdktf.stringToTerraform(struct!.correlation),
    device: cdktf.stringToTerraform(struct!.device),
    egress_port: cdktf.stringToTerraform(struct!.egressPort),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    jitter: cdktf.stringToTerraform(struct!.jitter),
    latency: cdktf.stringToTerraform(struct!.latency),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDelayToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_tcp_flags: {
      value: cdktf.stringToHclTerraform(struct!.acceptTcpFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    correlation: {
      value: cdktf.stringToHclTerraform(struct!.correlation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_port: {
      value: cdktf.stringToHclTerraform(struct!.egressPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jitter: {
      value: cdktf.stringToHclTerraform(struct!.jitter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latency: {
      value: cdktf.stringToHclTerraform(struct!.latency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDelay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptTcpFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptTcpFlags = this._acceptTcpFlags;
    }
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._egressPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPort = this._egressPort;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._jitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitter = this._jitter;
    }
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDelay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptTcpFlags = undefined;
      this._correlation = undefined;
      this._device = undefined;
      this._egressPort = undefined;
      this._hostname = undefined;
      this._ipAddress = undefined;
      this._ipProtocol = undefined;
      this._jitter = undefined;
      this._latency = undefined;
      this._sourcePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptTcpFlags = value.acceptTcpFlags;
      this._correlation = value.correlation;
      this._device = value.device;
      this._egressPort = value.egressPort;
      this._hostname = value.hostname;
      this._ipAddress = value.ipAddress;
      this._ipProtocol = value.ipProtocol;
      this._jitter = value.jitter;
      this._latency = value.latency;
      this._sourcePort = value.sourcePort;
    }
  }

  // accept_tcp_flags - computed: false, optional: true, required: false
  private _acceptTcpFlags?: string; 
  public get acceptTcpFlags() {
    return this.getStringAttribute('accept_tcp_flags');
  }
  public set acceptTcpFlags(value: string) {
    this._acceptTcpFlags = value;
  }
  public resetAcceptTcpFlags() {
    this._acceptTcpFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptTcpFlagsInput() {
    return this._acceptTcpFlags;
  }

  // correlation - computed: false, optional: true, required: false
  private _correlation?: string; 
  public get correlation() {
    return this.getStringAttribute('correlation');
  }
  public set correlation(value: string) {
    this._correlation = value;
  }
  public resetCorrelation() {
    this._correlation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationInput() {
    return this._correlation;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // egress_port - computed: false, optional: true, required: false
  private _egressPort?: string; 
  public get egressPort() {
    return this.getStringAttribute('egress_port');
  }
  public set egressPort(value: string) {
    this._egressPort = value;
  }
  public resetEgressPort() {
    this._egressPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPortInput() {
    return this._egressPort;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // jitter - computed: false, optional: true, required: false
  private _jitter?: string; 
  public get jitter() {
    return this.getStringAttribute('jitter');
  }
  public set jitter(value: string) {
    this._jitter = value;
  }
  public resetJitter() {
    this._jitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterInput() {
    return this._jitter;
  }

  // latency - computed: false, optional: true, required: false
  private _latency?: string; 
  public get latency() {
    return this.getStringAttribute('latency');
  }
  public set latency(value: string) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDns {
  /**
  * map this host to specified IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#dns_domain_name DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#dns_domain_name}
  */
  readonly dnsDomainName?: string;
  /**
  * map specified host to this IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#dns_ip DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#dns_ip}
  */
  readonly dnsIp?: string;
  /**
  * update the DNS server in /etc/resolv.conf with this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#dns_server DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#dns_server}
  */
  readonly dnsServer?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDnsToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_domain_name: cdktf.stringToTerraform(struct!.dnsDomainName),
    dns_ip: cdktf.stringToTerraform(struct!.dnsIp),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDnsToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainName = this._dnsDomainName;
    }
    if (this._dnsIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIp = this._dnsIp;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsDomainName = undefined;
      this._dnsIp = undefined;
      this._dnsServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsDomainName = value.dnsDomainName;
      this._dnsIp = value.dnsIp;
      this._dnsServer = value.dnsServer;
    }
  }

  // dns_domain_name - computed: false, optional: true, required: false
  private _dnsDomainName?: string; 
  public get dnsDomainName() {
    return this.getStringAttribute('dns_domain_name');
  }
  public set dnsDomainName(value: string) {
    this._dnsDomainName = value;
  }
  public resetDnsDomainName() {
    this._dnsDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainNameInput() {
    return this._dnsDomainName;
  }

  // dns_ip - computed: false, optional: true, required: false
  private _dnsIp?: string; 
  public get dnsIp() {
    return this.getStringAttribute('dns_ip');
  }
  public set dnsIp(value: string) {
    this._dnsIp = value;
  }
  public resetDnsIp() {
    this._dnsIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpInput() {
    return this._dnsIp;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDown {
  /**
  * The network interface to impact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#device DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#device}
  */
  readonly device?: string;
  /**
  * NIC down time, time units: ns, us (or µs), ms, s, m, h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#duration DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#duration}
  */
  readonly duration?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDownToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDownToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device = undefined;
      this._duration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device = value.device;
      this._duration = value.duration;
    }
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
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
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDuplicate {
  /**
  * correlation is percentage (10 is 10%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#correlation DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#correlation}
  */
  readonly correlation?: string;
  /**
  * the network interface to impact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#device DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#device}
  */
  readonly device?: string;
  /**
  * only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#egress_port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#egress_port}
  */
  readonly egressPort?: string;
  /**
  * only impact traffic to these hostnames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#hostname DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * only impact egress traffic to these IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#ip_address DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * only impact traffic using this IP protocol, supported: tcp, udp, icmp, all
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#ip_protocol DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * percentage of packets to duplicate (10 is 10%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#percent DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#percent}
  */
  readonly percent?: string;
  /**
  * only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#source_port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#source_port}
  */
  readonly sourcePort?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDuplicateToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDuplicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.stringToTerraform(struct!.correlation),
    device: cdktf.stringToTerraform(struct!.device),
    egress_port: cdktf.stringToTerraform(struct!.egressPort),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    percent: cdktf.stringToTerraform(struct!.percent),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDuplicateToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDuplicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    correlation: {
      value: cdktf.stringToHclTerraform(struct!.correlation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_port: {
      value: cdktf.stringToHclTerraform(struct!.egressPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent: {
      value: cdktf.stringToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDuplicateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDuplicate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._egressPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPort = this._egressPort;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDuplicate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlation = undefined;
      this._device = undefined;
      this._egressPort = undefined;
      this._hostname = undefined;
      this._ipAddress = undefined;
      this._ipProtocol = undefined;
      this._percent = undefined;
      this._sourcePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlation = value.correlation;
      this._device = value.device;
      this._egressPort = value.egressPort;
      this._hostname = value.hostname;
      this._ipAddress = value.ipAddress;
      this._ipProtocol = value.ipProtocol;
      this._percent = value.percent;
      this._sourcePort = value.sourcePort;
    }
  }

  // correlation - computed: false, optional: true, required: false
  private _correlation?: string; 
  public get correlation() {
    return this.getStringAttribute('correlation');
  }
  public set correlation(value: string) {
    this._correlation = value;
  }
  public resetCorrelation() {
    this._correlation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationInput() {
    return this._correlation;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // egress_port - computed: false, optional: true, required: false
  private _egressPort?: string; 
  public get egressPort() {
    return this.getStringAttribute('egress_port');
  }
  public set egressPort(value: string) {
    this._egressPort = value;
  }
  public resetEgressPort() {
    this._egressPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPortInput() {
    return this._egressPort;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: string; 
  public get percent() {
    return this.getStringAttribute('percent');
  }
  public set percent(value: string) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkFlood {
  /**
  * The number of seconds to run the iperf test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#duration DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#duration}
  */
  readonly duration: string;
  /**
  * Generate traffic to this IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#ip_address DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The number of iperf parallel client threads to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#parallel DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#parallel}
  */
  readonly parallel?: number;
  /**
  * Generate traffic to this port on the IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#port}
  */
  readonly port?: string;
  /**
  * The speed of network traffic, allows bps, kbps, mbps, gbps, tbps unit. bps means bytes per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#rate DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#rate}
  */
  readonly rate: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkFloodToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkFlood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    parallel: cdktf.numberToTerraform(struct!.parallel),
    port: cdktf.stringToTerraform(struct!.port),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkFloodToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkFlood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallel: {
      value: cdktf.numberToHclTerraform(struct!.parallel),
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
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkFloodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkFlood | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._parallel !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallel = this._parallel;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkFlood | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._ipAddress = undefined;
      this._parallel = undefined;
      this._port = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._ipAddress = value.ipAddress;
      this._parallel = value.parallel;
      this._port = value.port;
      this._rate = value.rate;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // parallel - computed: false, optional: true, required: false
  private _parallel?: number; 
  public get parallel() {
    return this.getNumberAttribute('parallel');
  }
  public set parallel(value: number) {
    this._parallel = value;
  }
  public resetParallel() {
    this._parallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelInput() {
    return this._parallel;
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

  // rate - computed: false, optional: false, required: true
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkLoss {
  /**
  * correlation is percentage (10 is 10%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#correlation DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#correlation}
  */
  readonly correlation?: string;
  /**
  * the network interface to impact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#device DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#device}
  */
  readonly device?: string;
  /**
  * only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#egress_port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#egress_port}
  */
  readonly egressPort?: string;
  /**
  * only impact traffic to these hostnames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#hostname DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * only impact egress traffic to these IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#ip_address DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * only impact traffic using this IP protocol, supported: tcp, udp, icmp, all
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#ip_protocol DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * percentage of packets to loss (10 is 10%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#percent DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#percent}
  */
  readonly percent?: string;
  /**
  * only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#source_port DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#source_port}
  */
  readonly sourcePort?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkLossToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkLoss | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.stringToTerraform(struct!.correlation),
    device: cdktf.stringToTerraform(struct!.device),
    egress_port: cdktf.stringToTerraform(struct!.egressPort),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    percent: cdktf.stringToTerraform(struct!.percent),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkLossToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkLoss | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    correlation: {
      value: cdktf.stringToHclTerraform(struct!.correlation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_port: {
      value: cdktf.stringToHclTerraform(struct!.egressPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent: {
      value: cdktf.stringToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkLossOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkLoss | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._egressPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPort = this._egressPort;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkLoss | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlation = undefined;
      this._device = undefined;
      this._egressPort = undefined;
      this._hostname = undefined;
      this._ipAddress = undefined;
      this._ipProtocol = undefined;
      this._percent = undefined;
      this._sourcePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlation = value.correlation;
      this._device = value.device;
      this._egressPort = value.egressPort;
      this._hostname = value.hostname;
      this._ipAddress = value.ipAddress;
      this._ipProtocol = value.ipProtocol;
      this._percent = value.percent;
      this._sourcePort = value.sourcePort;
    }
  }

  // correlation - computed: false, optional: true, required: false
  private _correlation?: string; 
  public get correlation() {
    return this.getStringAttribute('correlation');
  }
  public set correlation(value: string) {
    this._correlation = value;
  }
  public resetCorrelation() {
    this._correlation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationInput() {
    return this._correlation;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // egress_port - computed: false, optional: true, required: false
  private _egressPort?: string; 
  public get egressPort() {
    return this.getStringAttribute('egress_port');
  }
  public set egressPort(value: string) {
    this._egressPort = value;
  }
  public resetEgressPort() {
    this._egressPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPortInput() {
    return this._egressPort;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: string; 
  public get percent() {
    return this.getStringAttribute('percent');
  }
  public set percent(value: string) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkPartition {
  /**
  * only the packet which match the tcp flag can be accepted, others will be dropped. only set when the IPProtocol is tcp, used for partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#accept_tcp_flags DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#accept_tcp_flags}
  */
  readonly acceptTcpFlags?: string;
  /**
  * the network interface to impact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#device DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#device}
  */
  readonly device?: string;
  /**
  * specifies the partition direction, values can be 'from', 'to'. 'from' means packets coming from the 'IPAddress' or 'Hostname' and going to your server, 'to' means packets originating from your server and going to the 'IPAddress' or 'Hostname'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#direction DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#direction}
  */
  readonly direction?: string;
  /**
  * only impact traffic to these hostnames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#hostname DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * only impact egress traffic to these IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#ip_address DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * only impact egress traffic to these IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#ip_protocol DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#ip_protocol}
  */
  readonly ipProtocol?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkPartitionToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkPartition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_tcp_flags: cdktf.stringToTerraform(struct!.acceptTcpFlags),
    device: cdktf.stringToTerraform(struct!.device),
    direction: cdktf.stringToTerraform(struct!.direction),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkPartitionToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkPartition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_tcp_flags: {
      value: cdktf.stringToHclTerraform(struct!.acceptTcpFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkPartitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkPartition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptTcpFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptTcpFlags = this._acceptTcpFlags;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkPartition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptTcpFlags = undefined;
      this._device = undefined;
      this._direction = undefined;
      this._hostname = undefined;
      this._ipAddress = undefined;
      this._ipProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptTcpFlags = value.acceptTcpFlags;
      this._device = value.device;
      this._direction = value.direction;
      this._hostname = value.hostname;
      this._ipAddress = value.ipAddress;
      this._ipProtocol = value.ipProtocol;
    }
  }

  // accept_tcp_flags - computed: false, optional: true, required: false
  private _acceptTcpFlags?: string; 
  public get acceptTcpFlags() {
    return this.getStringAttribute('accept_tcp_flags');
  }
  public set acceptTcpFlags(value: string) {
    this._acceptTcpFlags = value;
  }
  public resetAcceptTcpFlags() {
    this._acceptTcpFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptTcpFlagsInput() {
    return this._acceptTcpFlags;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecProcess {
  /**
  * the process name or the process ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#process DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#process}
  */
  readonly process?: string;
  /**
  * the command to be run when recovering experiment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#recover_cmd DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#recover_cmd}
  */
  readonly recoverCmd?: string;
  /**
  * the signal number to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#signal DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#signal}
  */
  readonly signal?: number;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecProcessToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecProcess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    process: cdktf.stringToTerraform(struct!.process),
    recover_cmd: cdktf.stringToTerraform(struct!.recoverCmd),
    signal: cdktf.numberToTerraform(struct!.signal),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecProcessToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecProcess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    process: {
      value: cdktf.stringToHclTerraform(struct!.process),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recover_cmd: {
      value: cdktf.stringToHclTerraform(struct!.recoverCmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signal: {
      value: cdktf.numberToHclTerraform(struct!.signal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecProcessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecProcess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._process !== undefined) {
      hasAnyValues = true;
      internalValueResult.process = this._process;
    }
    if (this._recoverCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoverCmd = this._recoverCmd;
    }
    if (this._signal !== undefined) {
      hasAnyValues = true;
      internalValueResult.signal = this._signal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecProcess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._process = undefined;
      this._recoverCmd = undefined;
      this._signal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._process = value.process;
      this._recoverCmd = value.recoverCmd;
      this._signal = value.signal;
    }
  }

  // process - computed: false, optional: true, required: false
  private _process?: string; 
  public get process() {
    return this.getStringAttribute('process');
  }
  public set process(value: string) {
    this._process = value;
  }
  public resetProcess() {
    this._process = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInput() {
    return this._process;
  }

  // recover_cmd - computed: false, optional: true, required: false
  private _recoverCmd?: string; 
  public get recoverCmd() {
    return this.getStringAttribute('recover_cmd');
  }
  public set recoverCmd(value: string) {
    this._recoverCmd = value;
  }
  public resetRecoverCmd() {
    this._recoverCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverCmdInput() {
    return this._recoverCmd;
  }

  // signal - computed: false, optional: true, required: false
  private _signal?: number; 
  public get signal() {
    return this.getNumberAttribute('signal');
  }
  public set signal(value: number) {
    this._signal = value;
  }
  public resetSignal() {
    this._signal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisCacheLimit {
  /**
  * The adress of Redis server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#addr DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#addr}
  */
  readonly addr?: string;
  /**
  * The size of 'maxmemory'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#cache_size DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#cache_size}
  */
  readonly cacheSize?: string;
  /**
  * The password of Redis server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#password DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#password}
  */
  readonly password?: string;
  /**
  * Specifies maxmemory as a percentage of the original value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#percent DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#percent}
  */
  readonly percent?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisCacheLimitToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisCacheLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    cache_size: cdktf.stringToTerraform(struct!.cacheSize),
    password: cdktf.stringToTerraform(struct!.password),
    percent: cdktf.stringToTerraform(struct!.percent),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisCacheLimitToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisCacheLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_size: {
      value: cdktf.stringToHclTerraform(struct!.cacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent: {
      value: cdktf.stringToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisCacheLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisCacheLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._cacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheSize = this._cacheSize;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisCacheLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._cacheSize = undefined;
      this._password = undefined;
      this._percent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._cacheSize = value.cacheSize;
      this._password = value.password;
      this._percent = value.percent;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // cache_size - computed: false, optional: true, required: false
  private _cacheSize?: string; 
  public get cacheSize() {
    return this.getStringAttribute('cache_size');
  }
  public set cacheSize(value: string) {
    this._cacheSize = value;
  }
  public resetCacheSize() {
    this._cacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInput() {
    return this._cacheSize;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: string; 
  public get percent() {
    return this.getStringAttribute('percent');
  }
  public set percent(value: string) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisExpiration {
  /**
  * The adress of Redis server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#addr DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#addr}
  */
  readonly addr?: string;
  /**
  * The expiration of the keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#expiration DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#expiration}
  */
  readonly expiration?: string;
  /**
  * The keys to be expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#key DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Additional options for 'expiration'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#option DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#option}
  */
  readonly option?: string;
  /**
  * The password of Redis server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#password DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#password}
  */
  readonly password?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisExpirationToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    expiration: cdktf.stringToTerraform(struct!.expiration),
    key: cdktf.stringToTerraform(struct!.key),
    option: cdktf.stringToTerraform(struct!.option),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisExpirationToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration: {
      value: cdktf.stringToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisExpiration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisExpiration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._expiration = undefined;
      this._key = undefined;
      this._option = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._expiration = value.expiration;
      this._key = value.key;
      this._option = value.option;
      this._password = value.password;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // option - computed: false, optional: true, required: false
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisPenetration {
  /**
  * The adress of Redis server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#addr DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#addr}
  */
  readonly addr?: string;
  /**
  * The password of Redis server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#password DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#password}
  */
  readonly password?: string;
  /**
  * The number of requests to be sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#request_num DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#request_num}
  */
  readonly requestNum?: number;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisPenetrationToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisPenetration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    password: cdktf.stringToTerraform(struct!.password),
    request_num: cdktf.numberToTerraform(struct!.requestNum),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisPenetrationToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisPenetration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_num: {
      value: cdktf.numberToHclTerraform(struct!.requestNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisPenetrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisPenetration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._requestNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestNum = this._requestNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisPenetration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._password = undefined;
      this._requestNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._password = value.password;
      this._requestNum = value.requestNum;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // request_num - computed: false, optional: true, required: false
  private _requestNum?: number; 
  public get requestNum() {
    return this.getNumberAttribute('request_num');
  }
  public set requestNum(value: number) {
    this._requestNum = value;
  }
  public resetRequestNum() {
    this._requestNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestNumInput() {
    return this._requestNum;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisRestart {
  /**
  * The adress of Redis server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#addr DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#addr}
  */
  readonly addr?: string;
  /**
  * The path of Sentinel conf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#conf DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#conf}
  */
  readonly conf?: string;
  /**
  * The control flag determines whether to flush config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#flush_config DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#flush_config}
  */
  readonly flushConfig?: boolean | cdktf.IResolvable;
  /**
  * The password of Redis server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#password DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#password}
  */
  readonly password?: string;
  /**
  * The path of 'redis-server' command-line tool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#redis_path DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#redis_path}
  */
  readonly redisPath?: boolean | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisRestartToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    conf: cdktf.stringToTerraform(struct!.conf),
    flush_config: cdktf.booleanToTerraform(struct!.flushConfig),
    password: cdktf.stringToTerraform(struct!.password),
    redis_path: cdktf.booleanToTerraform(struct!.redisPath),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisRestartToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conf: {
      value: cdktf.stringToHclTerraform(struct!.conf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flush_config: {
      value: cdktf.booleanToHclTerraform(struct!.flushConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redis_path: {
      value: cdktf.booleanToHclTerraform(struct!.redisPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisRestart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._conf !== undefined) {
      hasAnyValues = true;
      internalValueResult.conf = this._conf;
    }
    if (this._flushConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushConfig = this._flushConfig;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._redisPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisPath = this._redisPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._conf = undefined;
      this._flushConfig = undefined;
      this._password = undefined;
      this._redisPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._conf = value.conf;
      this._flushConfig = value.flushConfig;
      this._password = value.password;
      this._redisPath = value.redisPath;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // conf - computed: false, optional: true, required: false
  private _conf?: string; 
  public get conf() {
    return this.getStringAttribute('conf');
  }
  public set conf(value: string) {
    this._conf = value;
  }
  public resetConf() {
    this._conf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf;
  }

  // flush_config - computed: false, optional: true, required: false
  private _flushConfig?: boolean | cdktf.IResolvable; 
  public get flushConfig() {
    return this.getBooleanAttribute('flush_config');
  }
  public set flushConfig(value: boolean | cdktf.IResolvable) {
    this._flushConfig = value;
  }
  public resetFlushConfig() {
    this._flushConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushConfigInput() {
    return this._flushConfig;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // redis_path - computed: false, optional: true, required: false
  private _redisPath?: boolean | cdktf.IResolvable; 
  public get redisPath() {
    return this.getBooleanAttribute('redis_path');
  }
  public set redisPath(value: boolean | cdktf.IResolvable) {
    this._redisPath = value;
  }
  public resetRedisPath() {
    this._redisPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisPathInput() {
    return this._redisPath;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisStop {
  /**
  * The adress of Redis server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#addr DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#addr}
  */
  readonly addr?: string;
  /**
  * The path of Sentinel conf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#conf DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#conf}
  */
  readonly conf?: string;
  /**
  * The control flag determines whether to flush config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#flush_config DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#flush_config}
  */
  readonly flushConfig?: boolean | cdktf.IResolvable;
  /**
  * The password of Redis server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#password DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#password}
  */
  readonly password?: string;
  /**
  * The path of 'redis-server' command-line tool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#redis_path DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#redis_path}
  */
  readonly redisPath?: boolean | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisStopToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    conf: cdktf.stringToTerraform(struct!.conf),
    flush_config: cdktf.booleanToTerraform(struct!.flushConfig),
    password: cdktf.stringToTerraform(struct!.password),
    redis_path: cdktf.booleanToTerraform(struct!.redisPath),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisStopToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conf: {
      value: cdktf.stringToHclTerraform(struct!.conf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flush_config: {
      value: cdktf.booleanToHclTerraform(struct!.flushConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redis_path: {
      value: cdktf.booleanToHclTerraform(struct!.redisPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisStopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisStop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._conf !== undefined) {
      hasAnyValues = true;
      internalValueResult.conf = this._conf;
    }
    if (this._flushConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushConfig = this._flushConfig;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._redisPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisPath = this._redisPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisStop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._conf = undefined;
      this._flushConfig = undefined;
      this._password = undefined;
      this._redisPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._conf = value.conf;
      this._flushConfig = value.flushConfig;
      this._password = value.password;
      this._redisPath = value.redisPath;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // conf - computed: false, optional: true, required: false
  private _conf?: string; 
  public get conf() {
    return this.getStringAttribute('conf');
  }
  public set conf(value: string) {
    this._conf = value;
  }
  public resetConf() {
    this._conf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf;
  }

  // flush_config - computed: false, optional: true, required: false
  private _flushConfig?: boolean | cdktf.IResolvable; 
  public get flushConfig() {
    return this.getBooleanAttribute('flush_config');
  }
  public set flushConfig(value: boolean | cdktf.IResolvable) {
    this._flushConfig = value;
  }
  public resetFlushConfig() {
    this._flushConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushConfigInput() {
    return this._flushConfig;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // redis_path - computed: false, optional: true, required: false
  private _redisPath?: boolean | cdktf.IResolvable; 
  public get redisPath() {
    return this.getBooleanAttribute('redis_path');
  }
  public set redisPath(value: boolean | cdktf.IResolvable) {
    this._redisPath = value;
  }
  public resetRedisPath() {
    this._redisPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisPathInput() {
    return this._redisPath;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectors {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#key DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#operator DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#values DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable | undefined) {
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

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsOutputReference {
    return new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelector {
  /**
  * Map of string keys and values that can be used to select objects. A selector based on annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#annotation_selectors DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#annotation_selectors}
  */
  readonly annotationSelectors?: { [key: string]: string };
  /**
  * a slice of label selector expressions that can be used to select objects. A list of selectors based on set-based label expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#expression_selectors DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#expression_selectors}
  */
  readonly expressionSelectors?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectors[] | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to select objects. A selector based on fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#field_selectors DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#field_selectors}
  */
  readonly fieldSelectors?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to select objects. A selector based on labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#label_selectors DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#label_selectors}
  */
  readonly labelSelectors?: { [key: string]: string };
  /**
  * Namespaces is a set of namespace to which objects belong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#namespaces DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * PhysicalMachines is a map of string keys and a set values that used to select physical machines. The key defines the namespace which physical machine belong, and each value is a set of physical machine names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#physical_machines DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#physical_machines}
  */
  readonly physicalMachines?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotationSelectors),
    expression_selectors: cdktf.listMapper(dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToTerraform, false)(struct!.expressionSelectors),
    field_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fieldSelectors),
    label_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labelSelectors),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    physical_machines: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.physicalMachines),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotationSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    expression_selectors: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToHclTerraform, false)(struct!.expressionSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsList",
    },
    field_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fieldSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    label_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labelSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    physical_machines: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.physicalMachines),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelectors = this._annotationSelectors;
    }
    if (this._expressionSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionSelectors = this._expressionSelectors?.internalValue;
    }
    if (this._fieldSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelectors = this._fieldSelectors;
    }
    if (this._labelSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelectors = this._labelSelectors;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._physicalMachines !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalMachines = this._physicalMachines;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelectors = undefined;
      this._expressionSelectors.internalValue = undefined;
      this._fieldSelectors = undefined;
      this._labelSelectors = undefined;
      this._namespaces = undefined;
      this._physicalMachines = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationSelectors = value.annotationSelectors;
      this._expressionSelectors.internalValue = value.expressionSelectors;
      this._fieldSelectors = value.fieldSelectors;
      this._labelSelectors = value.labelSelectors;
      this._namespaces = value.namespaces;
      this._physicalMachines = value.physicalMachines;
    }
  }

  // annotation_selectors - computed: false, optional: true, required: false
  private _annotationSelectors?: { [key: string]: string }; 
  public get annotationSelectors() {
    return this.getStringMapAttribute('annotation_selectors');
  }
  public set annotationSelectors(value: { [key: string]: string }) {
    this._annotationSelectors = value;
  }
  public resetAnnotationSelectors() {
    this._annotationSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorsInput() {
    return this._annotationSelectors;
  }

  // expression_selectors - computed: false, optional: true, required: false
  private _expressionSelectors = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsList(this, "expression_selectors", false);
  public get expressionSelectors() {
    return this._expressionSelectors;
  }
  public putExpressionSelectors(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorExpressionSelectors[] | cdktf.IResolvable) {
    this._expressionSelectors.internalValue = value;
  }
  public resetExpressionSelectors() {
    this._expressionSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionSelectorsInput() {
    return this._expressionSelectors.internalValue;
  }

  // field_selectors - computed: false, optional: true, required: false
  private _fieldSelectors?: { [key: string]: string }; 
  public get fieldSelectors() {
    return this.getStringMapAttribute('field_selectors');
  }
  public set fieldSelectors(value: { [key: string]: string }) {
    this._fieldSelectors = value;
  }
  public resetFieldSelectors() {
    this._fieldSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorsInput() {
    return this._fieldSelectors;
  }

  // label_selectors - computed: false, optional: true, required: false
  private _labelSelectors?: { [key: string]: string }; 
  public get labelSelectors() {
    return this.getStringMapAttribute('label_selectors');
  }
  public set labelSelectors(value: { [key: string]: string }) {
    this._labelSelectors = value;
  }
  public resetLabelSelectors() {
    this._labelSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorsInput() {
    return this._labelSelectors;
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

  // physical_machines - computed: false, optional: true, required: false
  private _physicalMachines?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get physicalMachines() {
    return this.interpolationForAttribute('physical_machines');
  }
  public set physicalMachines(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._physicalMachines = value;
  }
  public resetPhysicalMachines() {
    this._physicalMachines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalMachinesInput() {
    return this._physicalMachines;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressCpu {
  /**
  * specifies P percent loading per CPU worker. 0 is effectively a sleep (no load) and 100 is full loading.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#load DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#load}
  */
  readonly load?: number;
  /**
  * extend stress-ng options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#options DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#options}
  */
  readonly options?: string[];
  /**
  * specifies N workers to apply the stressor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#workers DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#workers}
  */
  readonly workers?: number;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressCpuToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load: cdktf.numberToTerraform(struct!.load),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    workers: cdktf.numberToTerraform(struct!.workers),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressCpuToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load: {
      value: cdktf.numberToHclTerraform(struct!.load),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    workers: {
      value: cdktf.numberToHclTerraform(struct!.workers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._load !== undefined) {
      hasAnyValues = true;
      internalValueResult.load = this._load;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._workers !== undefined) {
      hasAnyValues = true;
      internalValueResult.workers = this._workers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._load = undefined;
      this._options = undefined;
      this._workers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._load = value.load;
      this._options = value.options;
      this._workers = value.workers;
    }
  }

  // load - computed: false, optional: true, required: false
  private _load?: number; 
  public get load() {
    return this.getNumberAttribute('load');
  }
  public set load(value: number) {
    this._load = value;
  }
  public resetLoad() {
    this._load = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // workers - computed: false, optional: true, required: false
  private _workers?: number; 
  public get workers() {
    return this.getNumberAttribute('workers');
  }
  public set workers(value: number) {
    this._workers = value;
  }
  public resetWorkers() {
    this._workers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workersInput() {
    return this._workers;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressMem {
  /**
  * extend stress-ng options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#options DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#options}
  */
  readonly options?: string[];
  /**
  * specifies N bytes consumed per vm worker, default is the total available memory. One can specify the size as % of total available memory or in units of B, KB/KiB, MB/MiB, GB/GiB, TB/TiB..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#size DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#size}
  */
  readonly size?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressMemToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressMem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressMemToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressMem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressMemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressMem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressMem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options = value.options;
      this._size = value.size;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecUserDefined {
  /**
  * The command to be executed when attack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#attack_cmd DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#attack_cmd}
  */
  readonly attackCmd?: string;
  /**
  * The command to be executed when recover
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#recover_cmd DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#recover_cmd}
  */
  readonly recoverCmd?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecUserDefinedToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecUserDefined | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attack_cmd: cdktf.stringToTerraform(struct!.attackCmd),
    recover_cmd: cdktf.stringToTerraform(struct!.recoverCmd),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecUserDefinedToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecUserDefined | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attack_cmd: {
      value: cdktf.stringToHclTerraform(struct!.attackCmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recover_cmd: {
      value: cdktf.stringToHclTerraform(struct!.recoverCmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecUserDefinedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecUserDefined | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attackCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackCmd = this._attackCmd;
    }
    if (this._recoverCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoverCmd = this._recoverCmd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecUserDefined | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attackCmd = undefined;
      this._recoverCmd = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attackCmd = value.attackCmd;
      this._recoverCmd = value.recoverCmd;
    }
  }

  // attack_cmd - computed: false, optional: true, required: false
  private _attackCmd?: string; 
  public get attackCmd() {
    return this.getStringAttribute('attack_cmd');
  }
  public set attackCmd(value: string) {
    this._attackCmd = value;
  }
  public resetAttackCmd() {
    this._attackCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackCmdInput() {
    return this._attackCmd;
  }

  // recover_cmd - computed: false, optional: true, required: false
  private _recoverCmd?: string; 
  public get recoverCmd() {
    return this.getStringAttribute('recover_cmd');
  }
  public set recoverCmd(value: string) {
    this._recoverCmd = value;
  }
  public resetRecoverCmd() {
    this._recoverCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverCmdInput() {
    return this._recoverCmd;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecVm {
  /**
  * The name of the VM to be injected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#vm_name DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#vm_name}
  */
  readonly vmName?: string;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecVmToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vm_name: cdktf.stringToTerraform(struct!.vmName),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecVmToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vm_name: {
      value: cdktf.stringToHclTerraform(struct!.vmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecVmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecVm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmName = this._vmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecVm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vmName = value.vmName;
    }
  }

  // vm_name - computed: false, optional: true, required: false
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  public resetVmName() {
    this._vmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInput() {
    return this._vmName;
  }
}
export interface DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpec {
  /**
  * the subAction, generate automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#action DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#action}
  */
  readonly action: string;
  /**
  * DEPRECATED: Use Selector instead. Only one of Address and Selector could be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#address DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#address}
  */
  readonly address?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#clock DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#clock}
  */
  readonly clock?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecClock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#disk_fill DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#disk_fill}
  */
  readonly diskFill?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskFill;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#disk_read_payload DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#disk_read_payload}
  */
  readonly diskReadPayload?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskReadPayload;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#disk_write_payload DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#disk_write_payload}
  */
  readonly diskWritePayload?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskWritePayload;
  /**
  * Duration represents the duration of the chaos action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#duration DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#file_append DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#file_append}
  */
  readonly fileAppend?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileAppend;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#file_create DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#file_create}
  */
  readonly fileCreate?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileCreate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#file_delete DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#file_delete}
  */
  readonly fileDelete?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileDelete;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#file_modify DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#file_modify}
  */
  readonly fileModify?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileModify;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#file_rename DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#file_rename}
  */
  readonly fileRename?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileRename;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#file_replace DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#file_replace}
  */
  readonly fileReplace?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileReplace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#http_abort DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#http_abort}
  */
  readonly httpAbort?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpAbort;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#http_config DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#http_config}
  */
  readonly httpConfig?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#http_delay DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#http_delay}
  */
  readonly httpDelay?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpDelay;
  /**
  * used for HTTP request, now only support GET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#http_request DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#http_request}
  */
  readonly httpRequest?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpRequest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#jvm_exception DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#jvm_exception}
  */
  readonly jvmException?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmException;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#jvm_gc DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#jvm_gc}
  */
  readonly jvmGc?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmGc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#jvm_latency DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#jvm_latency}
  */
  readonly jvmLatency?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmLatency;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#jvm_mysql DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#jvm_mysql}
  */
  readonly jvmMysql?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmMysql;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#jvm_return DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#jvm_return}
  */
  readonly jvmReturn?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmReturn;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#jvm_rule_data DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#jvm_rule_data}
  */
  readonly jvmRuleData?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmRuleData;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#jvm_stress DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#jvm_stress}
  */
  readonly jvmStress?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmStress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#kafka_fill DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#kafka_fill}
  */
  readonly kafkaFill?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFill;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#kafka_flood DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#kafka_flood}
  */
  readonly kafkaFlood?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFlood;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#kafka_io DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#kafka_io}
  */
  readonly kafkaIo?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaIo;
  /**
  * Mode defines the mode to run chaos action. Supported mode: one / all / fixed / fixed-percent / random-max-percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#mode DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#network_bandwidth DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#network_bandwidth}
  */
  readonly networkBandwidth?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkBandwidth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#network_corrupt DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#network_corrupt}
  */
  readonly networkCorrupt?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkCorrupt;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#network_delay DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#network_delay}
  */
  readonly networkDelay?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDelay;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#network_dns DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#network_dns}
  */
  readonly networkDns?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDns;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#network_down DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#network_down}
  */
  readonly networkDown?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDown;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#network_duplicate DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#network_duplicate}
  */
  readonly networkDuplicate?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDuplicate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#network_flood DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#network_flood}
  */
  readonly networkFlood?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkFlood;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#network_loss DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#network_loss}
  */
  readonly networkLoss?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkLoss;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#network_partition DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#network_partition}
  */
  readonly networkPartition?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkPartition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#process DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#process}
  */
  readonly process?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecProcess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#redis_cache_limit DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#redis_cache_limit}
  */
  readonly redisCacheLimit?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisCacheLimit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#redis_expiration DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#redis_expiration}
  */
  readonly redisExpiration?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisExpiration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#redis_penetration DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#redis_penetration}
  */
  readonly redisPenetration?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisPenetration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#redis_restart DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#redis_restart}
  */
  readonly redisRestart?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisRestart;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#redis_stop DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#redis_stop}
  */
  readonly redisStop?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisStop;
  /**
  * RemoteCluster represents the remote cluster where the chaos will be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#remote_cluster DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#remote_cluster}
  */
  readonly remoteCluster?: string;
  /**
  * Selector is used to select physical machines that are used to inject chaos action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#selector DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#stress_cpu DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#stress_cpu}
  */
  readonly stressCpu?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#stress_mem DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#stress_mem}
  */
  readonly stressMem?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressMem;
  /**
  * the experiment ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#uid DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#user_defined DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#user_defined}
  */
  readonly userDefined?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecUserDefined;
  /**
  * Value is required when the mode is set to 'FixedMode' / 'FixedPercentMode' / 'RandomMaxPercentMode'. If 'FixedMode', provide an integer of physical machines to do chaos action. If 'FixedPercentMode', provide a number from 0-100 to specify the percent of physical machines the server can do chaos action. IF 'RandomMaxPercentMode', provide a number from 0-100 to specify the max percent of pods to do chaos action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#value DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#vm DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest#vm}
  */
  readonly vm?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecVm;
}

export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecToTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.address),
    clock: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecClockToTerraform(struct!.clock),
    disk_fill: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskFillToTerraform(struct!.diskFill),
    disk_read_payload: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskReadPayloadToTerraform(struct!.diskReadPayload),
    disk_write_payload: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskWritePayloadToTerraform(struct!.diskWritePayload),
    duration: cdktf.stringToTerraform(struct!.duration),
    file_append: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileAppendToTerraform(struct!.fileAppend),
    file_create: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileCreateToTerraform(struct!.fileCreate),
    file_delete: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileDeleteToTerraform(struct!.fileDelete),
    file_modify: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileModifyToTerraform(struct!.fileModify),
    file_rename: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileRenameToTerraform(struct!.fileRename),
    file_replace: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileReplaceToTerraform(struct!.fileReplace),
    http_abort: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpAbortToTerraform(struct!.httpAbort),
    http_config: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpConfigToTerraform(struct!.httpConfig),
    http_delay: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpDelayToTerraform(struct!.httpDelay),
    http_request: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpRequestToTerraform(struct!.httpRequest),
    jvm_exception: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmExceptionToTerraform(struct!.jvmException),
    jvm_gc: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmGcToTerraform(struct!.jvmGc),
    jvm_latency: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmLatencyToTerraform(struct!.jvmLatency),
    jvm_mysql: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmMysqlToTerraform(struct!.jvmMysql),
    jvm_return: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmReturnToTerraform(struct!.jvmReturn),
    jvm_rule_data: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmRuleDataToTerraform(struct!.jvmRuleData),
    jvm_stress: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmStressToTerraform(struct!.jvmStress),
    kafka_fill: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFillToTerraform(struct!.kafkaFill),
    kafka_flood: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFloodToTerraform(struct!.kafkaFlood),
    kafka_io: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaIoToTerraform(struct!.kafkaIo),
    mode: cdktf.stringToTerraform(struct!.mode),
    network_bandwidth: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkBandwidthToTerraform(struct!.networkBandwidth),
    network_corrupt: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkCorruptToTerraform(struct!.networkCorrupt),
    network_delay: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDelayToTerraform(struct!.networkDelay),
    network_dns: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDnsToTerraform(struct!.networkDns),
    network_down: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDownToTerraform(struct!.networkDown),
    network_duplicate: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDuplicateToTerraform(struct!.networkDuplicate),
    network_flood: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkFloodToTerraform(struct!.networkFlood),
    network_loss: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkLossToTerraform(struct!.networkLoss),
    network_partition: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkPartitionToTerraform(struct!.networkPartition),
    process: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecProcessToTerraform(struct!.process),
    redis_cache_limit: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisCacheLimitToTerraform(struct!.redisCacheLimit),
    redis_expiration: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisExpirationToTerraform(struct!.redisExpiration),
    redis_penetration: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisPenetrationToTerraform(struct!.redisPenetration),
    redis_restart: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisRestartToTerraform(struct!.redisRestart),
    redis_stop: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisStopToTerraform(struct!.redisStop),
    remote_cluster: cdktf.stringToTerraform(struct!.remoteCluster),
    selector: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorToTerraform(struct!.selector),
    stress_cpu: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressCpuToTerraform(struct!.stressCpu),
    stress_mem: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressMemToTerraform(struct!.stressMem),
    uid: cdktf.stringToTerraform(struct!.uid),
    user_defined: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecUserDefinedToTerraform(struct!.userDefined),
    value: cdktf.stringToTerraform(struct!.value),
    vm: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecVmToTerraform(struct!.vm),
  }
}


export function dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.address),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    clock: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecClockToHclTerraform(struct!.clock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecClock",
    },
    disk_fill: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskFillToHclTerraform(struct!.diskFill),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskFill",
    },
    disk_read_payload: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskReadPayloadToHclTerraform(struct!.diskReadPayload),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskReadPayload",
    },
    disk_write_payload: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskWritePayloadToHclTerraform(struct!.diskWritePayload),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskWritePayload",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_append: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileAppendToHclTerraform(struct!.fileAppend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileAppend",
    },
    file_create: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileCreateToHclTerraform(struct!.fileCreate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileCreate",
    },
    file_delete: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileDeleteToHclTerraform(struct!.fileDelete),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileDelete",
    },
    file_modify: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileModifyToHclTerraform(struct!.fileModify),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileModify",
    },
    file_rename: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileRenameToHclTerraform(struct!.fileRename),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileRename",
    },
    file_replace: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileReplaceToHclTerraform(struct!.fileReplace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileReplace",
    },
    http_abort: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpAbortToHclTerraform(struct!.httpAbort),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpAbort",
    },
    http_config: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpConfigToHclTerraform(struct!.httpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpConfig",
    },
    http_delay: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpDelayToHclTerraform(struct!.httpDelay),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpDelay",
    },
    http_request: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpRequestToHclTerraform(struct!.httpRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpRequest",
    },
    jvm_exception: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmExceptionToHclTerraform(struct!.jvmException),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmException",
    },
    jvm_gc: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmGcToHclTerraform(struct!.jvmGc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmGc",
    },
    jvm_latency: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmLatencyToHclTerraform(struct!.jvmLatency),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmLatency",
    },
    jvm_mysql: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmMysqlToHclTerraform(struct!.jvmMysql),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmMysql",
    },
    jvm_return: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmReturnToHclTerraform(struct!.jvmReturn),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmReturn",
    },
    jvm_rule_data: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmRuleDataToHclTerraform(struct!.jvmRuleData),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmRuleData",
    },
    jvm_stress: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmStressToHclTerraform(struct!.jvmStress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmStress",
    },
    kafka_fill: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFillToHclTerraform(struct!.kafkaFill),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFill",
    },
    kafka_flood: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFloodToHclTerraform(struct!.kafkaFlood),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFlood",
    },
    kafka_io: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaIoToHclTerraform(struct!.kafkaIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaIo",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_bandwidth: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkBandwidthToHclTerraform(struct!.networkBandwidth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkBandwidth",
    },
    network_corrupt: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkCorruptToHclTerraform(struct!.networkCorrupt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkCorrupt",
    },
    network_delay: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDelayToHclTerraform(struct!.networkDelay),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDelay",
    },
    network_dns: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDnsToHclTerraform(struct!.networkDns),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDns",
    },
    network_down: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDownToHclTerraform(struct!.networkDown),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDown",
    },
    network_duplicate: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDuplicateToHclTerraform(struct!.networkDuplicate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDuplicate",
    },
    network_flood: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkFloodToHclTerraform(struct!.networkFlood),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkFlood",
    },
    network_loss: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkLossToHclTerraform(struct!.networkLoss),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkLoss",
    },
    network_partition: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkPartitionToHclTerraform(struct!.networkPartition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkPartition",
    },
    process: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecProcessToHclTerraform(struct!.process),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecProcess",
    },
    redis_cache_limit: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisCacheLimitToHclTerraform(struct!.redisCacheLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisCacheLimit",
    },
    redis_expiration: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisExpirationToHclTerraform(struct!.redisExpiration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisExpiration",
    },
    redis_penetration: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisPenetrationToHclTerraform(struct!.redisPenetration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisPenetration",
    },
    redis_restart: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisRestartToHclTerraform(struct!.redisRestart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisRestart",
    },
    redis_stop: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisStopToHclTerraform(struct!.redisStop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisStop",
    },
    remote_cluster: {
      value: cdktf.stringToHclTerraform(struct!.remoteCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelector",
    },
    stress_cpu: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressCpuToHclTerraform(struct!.stressCpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressCpu",
    },
    stress_mem: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressMemToHclTerraform(struct!.stressMem),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressMem",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_defined: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecUserDefinedToHclTerraform(struct!.userDefined),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecUserDefined",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm: {
      value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecVmToHclTerraform(struct!.vm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecVm",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._clock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clock = this._clock?.internalValue;
    }
    if (this._diskFill?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskFill = this._diskFill?.internalValue;
    }
    if (this._diskReadPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskReadPayload = this._diskReadPayload?.internalValue;
    }
    if (this._diskWritePayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskWritePayload = this._diskWritePayload?.internalValue;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._fileAppend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileAppend = this._fileAppend?.internalValue;
    }
    if (this._fileCreate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileCreate = this._fileCreate?.internalValue;
    }
    if (this._fileDelete?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileDelete = this._fileDelete?.internalValue;
    }
    if (this._fileModify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileModify = this._fileModify?.internalValue;
    }
    if (this._fileRename?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileRename = this._fileRename?.internalValue;
    }
    if (this._fileReplace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileReplace = this._fileReplace?.internalValue;
    }
    if (this._httpAbort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAbort = this._httpAbort?.internalValue;
    }
    if (this._httpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConfig = this._httpConfig?.internalValue;
    }
    if (this._httpDelay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpDelay = this._httpDelay?.internalValue;
    }
    if (this._httpRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequest = this._httpRequest?.internalValue;
    }
    if (this._jvmException?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmException = this._jvmException?.internalValue;
    }
    if (this._jvmGc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmGc = this._jvmGc?.internalValue;
    }
    if (this._jvmLatency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmLatency = this._jvmLatency?.internalValue;
    }
    if (this._jvmMysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmMysql = this._jvmMysql?.internalValue;
    }
    if (this._jvmReturn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmReturn = this._jvmReturn?.internalValue;
    }
    if (this._jvmRuleData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmRuleData = this._jvmRuleData?.internalValue;
    }
    if (this._jvmStress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmStress = this._jvmStress?.internalValue;
    }
    if (this._kafkaFill?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaFill = this._kafkaFill?.internalValue;
    }
    if (this._kafkaFlood?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaFlood = this._kafkaFlood?.internalValue;
    }
    if (this._kafkaIo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaIo = this._kafkaIo?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._networkBandwidth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkBandwidth = this._networkBandwidth?.internalValue;
    }
    if (this._networkCorrupt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkCorrupt = this._networkCorrupt?.internalValue;
    }
    if (this._networkDelay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDelay = this._networkDelay?.internalValue;
    }
    if (this._networkDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDns = this._networkDns?.internalValue;
    }
    if (this._networkDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDown = this._networkDown?.internalValue;
    }
    if (this._networkDuplicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDuplicate = this._networkDuplicate?.internalValue;
    }
    if (this._networkFlood?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFlood = this._networkFlood?.internalValue;
    }
    if (this._networkLoss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkLoss = this._networkLoss?.internalValue;
    }
    if (this._networkPartition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPartition = this._networkPartition?.internalValue;
    }
    if (this._process?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.process = this._process?.internalValue;
    }
    if (this._redisCacheLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisCacheLimit = this._redisCacheLimit?.internalValue;
    }
    if (this._redisExpiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisExpiration = this._redisExpiration?.internalValue;
    }
    if (this._redisPenetration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisPenetration = this._redisPenetration?.internalValue;
    }
    if (this._redisRestart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisRestart = this._redisRestart?.internalValue;
    }
    if (this._redisStop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisStop = this._redisStop?.internalValue;
    }
    if (this._remoteCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteCluster = this._remoteCluster;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._stressCpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stressCpu = this._stressCpu?.internalValue;
    }
    if (this._stressMem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stressMem = this._stressMem?.internalValue;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._userDefined?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefined = this._userDefined?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vm = this._vm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._address = undefined;
      this._clock.internalValue = undefined;
      this._diskFill.internalValue = undefined;
      this._diskReadPayload.internalValue = undefined;
      this._diskWritePayload.internalValue = undefined;
      this._duration = undefined;
      this._fileAppend.internalValue = undefined;
      this._fileCreate.internalValue = undefined;
      this._fileDelete.internalValue = undefined;
      this._fileModify.internalValue = undefined;
      this._fileRename.internalValue = undefined;
      this._fileReplace.internalValue = undefined;
      this._httpAbort.internalValue = undefined;
      this._httpConfig.internalValue = undefined;
      this._httpDelay.internalValue = undefined;
      this._httpRequest.internalValue = undefined;
      this._jvmException.internalValue = undefined;
      this._jvmGc.internalValue = undefined;
      this._jvmLatency.internalValue = undefined;
      this._jvmMysql.internalValue = undefined;
      this._jvmReturn.internalValue = undefined;
      this._jvmRuleData.internalValue = undefined;
      this._jvmStress.internalValue = undefined;
      this._kafkaFill.internalValue = undefined;
      this._kafkaFlood.internalValue = undefined;
      this._kafkaIo.internalValue = undefined;
      this._mode = undefined;
      this._networkBandwidth.internalValue = undefined;
      this._networkCorrupt.internalValue = undefined;
      this._networkDelay.internalValue = undefined;
      this._networkDns.internalValue = undefined;
      this._networkDown.internalValue = undefined;
      this._networkDuplicate.internalValue = undefined;
      this._networkFlood.internalValue = undefined;
      this._networkLoss.internalValue = undefined;
      this._networkPartition.internalValue = undefined;
      this._process.internalValue = undefined;
      this._redisCacheLimit.internalValue = undefined;
      this._redisExpiration.internalValue = undefined;
      this._redisPenetration.internalValue = undefined;
      this._redisRestart.internalValue = undefined;
      this._redisStop.internalValue = undefined;
      this._remoteCluster = undefined;
      this._selector.internalValue = undefined;
      this._stressCpu.internalValue = undefined;
      this._stressMem.internalValue = undefined;
      this._uid = undefined;
      this._userDefined.internalValue = undefined;
      this._value = undefined;
      this._vm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._address = value.address;
      this._clock.internalValue = value.clock;
      this._diskFill.internalValue = value.diskFill;
      this._diskReadPayload.internalValue = value.diskReadPayload;
      this._diskWritePayload.internalValue = value.diskWritePayload;
      this._duration = value.duration;
      this._fileAppend.internalValue = value.fileAppend;
      this._fileCreate.internalValue = value.fileCreate;
      this._fileDelete.internalValue = value.fileDelete;
      this._fileModify.internalValue = value.fileModify;
      this._fileRename.internalValue = value.fileRename;
      this._fileReplace.internalValue = value.fileReplace;
      this._httpAbort.internalValue = value.httpAbort;
      this._httpConfig.internalValue = value.httpConfig;
      this._httpDelay.internalValue = value.httpDelay;
      this._httpRequest.internalValue = value.httpRequest;
      this._jvmException.internalValue = value.jvmException;
      this._jvmGc.internalValue = value.jvmGc;
      this._jvmLatency.internalValue = value.jvmLatency;
      this._jvmMysql.internalValue = value.jvmMysql;
      this._jvmReturn.internalValue = value.jvmReturn;
      this._jvmRuleData.internalValue = value.jvmRuleData;
      this._jvmStress.internalValue = value.jvmStress;
      this._kafkaFill.internalValue = value.kafkaFill;
      this._kafkaFlood.internalValue = value.kafkaFlood;
      this._kafkaIo.internalValue = value.kafkaIo;
      this._mode = value.mode;
      this._networkBandwidth.internalValue = value.networkBandwidth;
      this._networkCorrupt.internalValue = value.networkCorrupt;
      this._networkDelay.internalValue = value.networkDelay;
      this._networkDns.internalValue = value.networkDns;
      this._networkDown.internalValue = value.networkDown;
      this._networkDuplicate.internalValue = value.networkDuplicate;
      this._networkFlood.internalValue = value.networkFlood;
      this._networkLoss.internalValue = value.networkLoss;
      this._networkPartition.internalValue = value.networkPartition;
      this._process.internalValue = value.process;
      this._redisCacheLimit.internalValue = value.redisCacheLimit;
      this._redisExpiration.internalValue = value.redisExpiration;
      this._redisPenetration.internalValue = value.redisPenetration;
      this._redisRestart.internalValue = value.redisRestart;
      this._redisStop.internalValue = value.redisStop;
      this._remoteCluster = value.remoteCluster;
      this._selector.internalValue = value.selector;
      this._stressCpu.internalValue = value.stressCpu;
      this._stressMem.internalValue = value.stressMem;
      this._uid = value.uid;
      this._userDefined.internalValue = value.userDefined;
      this._value = value.value;
      this._vm.internalValue = value.vm;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string[]; 
  public get address() {
    return this.getListAttribute('address');
  }
  public set address(value: string[]) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // clock - computed: false, optional: true, required: false
  private _clock = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecClockOutputReference(this, "clock");
  public get clock() {
    return this._clock;
  }
  public putClock(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecClock) {
    this._clock.internalValue = value;
  }
  public resetClock() {
    this._clock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockInput() {
    return this._clock.internalValue;
  }

  // disk_fill - computed: false, optional: true, required: false
  private _diskFill = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskFillOutputReference(this, "disk_fill");
  public get diskFill() {
    return this._diskFill;
  }
  public putDiskFill(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskFill) {
    this._diskFill.internalValue = value;
  }
  public resetDiskFill() {
    this._diskFill.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFillInput() {
    return this._diskFill.internalValue;
  }

  // disk_read_payload - computed: false, optional: true, required: false
  private _diskReadPayload = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskReadPayloadOutputReference(this, "disk_read_payload");
  public get diskReadPayload() {
    return this._diskReadPayload;
  }
  public putDiskReadPayload(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskReadPayload) {
    this._diskReadPayload.internalValue = value;
  }
  public resetDiskReadPayload() {
    this._diskReadPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskReadPayloadInput() {
    return this._diskReadPayload.internalValue;
  }

  // disk_write_payload - computed: false, optional: true, required: false
  private _diskWritePayload = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskWritePayloadOutputReference(this, "disk_write_payload");
  public get diskWritePayload() {
    return this._diskWritePayload;
  }
  public putDiskWritePayload(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecDiskWritePayload) {
    this._diskWritePayload.internalValue = value;
  }
  public resetDiskWritePayload() {
    this._diskWritePayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskWritePayloadInput() {
    return this._diskWritePayload.internalValue;
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

  // file_append - computed: false, optional: true, required: false
  private _fileAppend = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileAppendOutputReference(this, "file_append");
  public get fileAppend() {
    return this._fileAppend;
  }
  public putFileAppend(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileAppend) {
    this._fileAppend.internalValue = value;
  }
  public resetFileAppend() {
    this._fileAppend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileAppendInput() {
    return this._fileAppend.internalValue;
  }

  // file_create - computed: false, optional: true, required: false
  private _fileCreate = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileCreateOutputReference(this, "file_create");
  public get fileCreate() {
    return this._fileCreate;
  }
  public putFileCreate(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileCreate) {
    this._fileCreate.internalValue = value;
  }
  public resetFileCreate() {
    this._fileCreate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCreateInput() {
    return this._fileCreate.internalValue;
  }

  // file_delete - computed: false, optional: true, required: false
  private _fileDelete = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileDeleteOutputReference(this, "file_delete");
  public get fileDelete() {
    return this._fileDelete;
  }
  public putFileDelete(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileDelete) {
    this._fileDelete.internalValue = value;
  }
  public resetFileDelete() {
    this._fileDelete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDeleteInput() {
    return this._fileDelete.internalValue;
  }

  // file_modify - computed: false, optional: true, required: false
  private _fileModify = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileModifyOutputReference(this, "file_modify");
  public get fileModify() {
    return this._fileModify;
  }
  public putFileModify(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileModify) {
    this._fileModify.internalValue = value;
  }
  public resetFileModify() {
    this._fileModify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileModifyInput() {
    return this._fileModify.internalValue;
  }

  // file_rename - computed: false, optional: true, required: false
  private _fileRename = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileRenameOutputReference(this, "file_rename");
  public get fileRename() {
    return this._fileRename;
  }
  public putFileRename(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileRename) {
    this._fileRename.internalValue = value;
  }
  public resetFileRename() {
    this._fileRename.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRenameInput() {
    return this._fileRename.internalValue;
  }

  // file_replace - computed: false, optional: true, required: false
  private _fileReplace = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileReplaceOutputReference(this, "file_replace");
  public get fileReplace() {
    return this._fileReplace;
  }
  public putFileReplace(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecFileReplace) {
    this._fileReplace.internalValue = value;
  }
  public resetFileReplace() {
    this._fileReplace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileReplaceInput() {
    return this._fileReplace.internalValue;
  }

  // http_abort - computed: false, optional: true, required: false
  private _httpAbort = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpAbortOutputReference(this, "http_abort");
  public get httpAbort() {
    return this._httpAbort;
  }
  public putHttpAbort(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpAbort) {
    this._httpAbort.internalValue = value;
  }
  public resetHttpAbort() {
    this._httpAbort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAbortInput() {
    return this._httpAbort.internalValue;
  }

  // http_config - computed: false, optional: true, required: false
  private _httpConfig = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpConfigOutputReference(this, "http_config");
  public get httpConfig() {
    return this._httpConfig;
  }
  public putHttpConfig(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpConfig) {
    this._httpConfig.internalValue = value;
  }
  public resetHttpConfig() {
    this._httpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig.internalValue;
  }

  // http_delay - computed: false, optional: true, required: false
  private _httpDelay = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpDelayOutputReference(this, "http_delay");
  public get httpDelay() {
    return this._httpDelay;
  }
  public putHttpDelay(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpDelay) {
    this._httpDelay.internalValue = value;
  }
  public resetHttpDelay() {
    this._httpDelay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpDelayInput() {
    return this._httpDelay.internalValue;
  }

  // http_request - computed: false, optional: true, required: false
  private _httpRequest = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpRequestOutputReference(this, "http_request");
  public get httpRequest() {
    return this._httpRequest;
  }
  public putHttpRequest(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecHttpRequest) {
    this._httpRequest.internalValue = value;
  }
  public resetHttpRequest() {
    this._httpRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestInput() {
    return this._httpRequest.internalValue;
  }

  // jvm_exception - computed: false, optional: true, required: false
  private _jvmException = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmExceptionOutputReference(this, "jvm_exception");
  public get jvmException() {
    return this._jvmException;
  }
  public putJvmException(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmException) {
    this._jvmException.internalValue = value;
  }
  public resetJvmException() {
    this._jvmException.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmExceptionInput() {
    return this._jvmException.internalValue;
  }

  // jvm_gc - computed: false, optional: true, required: false
  private _jvmGc = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmGcOutputReference(this, "jvm_gc");
  public get jvmGc() {
    return this._jvmGc;
  }
  public putJvmGc(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmGc) {
    this._jvmGc.internalValue = value;
  }
  public resetJvmGc() {
    this._jvmGc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmGcInput() {
    return this._jvmGc.internalValue;
  }

  // jvm_latency - computed: false, optional: true, required: false
  private _jvmLatency = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmLatencyOutputReference(this, "jvm_latency");
  public get jvmLatency() {
    return this._jvmLatency;
  }
  public putJvmLatency(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmLatency) {
    this._jvmLatency.internalValue = value;
  }
  public resetJvmLatency() {
    this._jvmLatency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmLatencyInput() {
    return this._jvmLatency.internalValue;
  }

  // jvm_mysql - computed: false, optional: true, required: false
  private _jvmMysql = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmMysqlOutputReference(this, "jvm_mysql");
  public get jvmMysql() {
    return this._jvmMysql;
  }
  public putJvmMysql(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmMysql) {
    this._jvmMysql.internalValue = value;
  }
  public resetJvmMysql() {
    this._jvmMysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmMysqlInput() {
    return this._jvmMysql.internalValue;
  }

  // jvm_return - computed: false, optional: true, required: false
  private _jvmReturn = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmReturnOutputReference(this, "jvm_return");
  public get jvmReturn() {
    return this._jvmReturn;
  }
  public putJvmReturn(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmReturn) {
    this._jvmReturn.internalValue = value;
  }
  public resetJvmReturn() {
    this._jvmReturn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmReturnInput() {
    return this._jvmReturn.internalValue;
  }

  // jvm_rule_data - computed: false, optional: true, required: false
  private _jvmRuleData = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmRuleDataOutputReference(this, "jvm_rule_data");
  public get jvmRuleData() {
    return this._jvmRuleData;
  }
  public putJvmRuleData(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmRuleData) {
    this._jvmRuleData.internalValue = value;
  }
  public resetJvmRuleData() {
    this._jvmRuleData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmRuleDataInput() {
    return this._jvmRuleData.internalValue;
  }

  // jvm_stress - computed: false, optional: true, required: false
  private _jvmStress = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmStressOutputReference(this, "jvm_stress");
  public get jvmStress() {
    return this._jvmStress;
  }
  public putJvmStress(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecJvmStress) {
    this._jvmStress.internalValue = value;
  }
  public resetJvmStress() {
    this._jvmStress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmStressInput() {
    return this._jvmStress.internalValue;
  }

  // kafka_fill - computed: false, optional: true, required: false
  private _kafkaFill = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFillOutputReference(this, "kafka_fill");
  public get kafkaFill() {
    return this._kafkaFill;
  }
  public putKafkaFill(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFill) {
    this._kafkaFill.internalValue = value;
  }
  public resetKafkaFill() {
    this._kafkaFill.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaFillInput() {
    return this._kafkaFill.internalValue;
  }

  // kafka_flood - computed: false, optional: true, required: false
  private _kafkaFlood = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFloodOutputReference(this, "kafka_flood");
  public get kafkaFlood() {
    return this._kafkaFlood;
  }
  public putKafkaFlood(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaFlood) {
    this._kafkaFlood.internalValue = value;
  }
  public resetKafkaFlood() {
    this._kafkaFlood.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaFloodInput() {
    return this._kafkaFlood.internalValue;
  }

  // kafka_io - computed: false, optional: true, required: false
  private _kafkaIo = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaIoOutputReference(this, "kafka_io");
  public get kafkaIo() {
    return this._kafkaIo;
  }
  public putKafkaIo(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecKafkaIo) {
    this._kafkaIo.internalValue = value;
  }
  public resetKafkaIo() {
    this._kafkaIo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaIoInput() {
    return this._kafkaIo.internalValue;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // network_bandwidth - computed: false, optional: true, required: false
  private _networkBandwidth = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkBandwidthOutputReference(this, "network_bandwidth");
  public get networkBandwidth() {
    return this._networkBandwidth;
  }
  public putNetworkBandwidth(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkBandwidth) {
    this._networkBandwidth.internalValue = value;
  }
  public resetNetworkBandwidth() {
    this._networkBandwidth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkBandwidthInput() {
    return this._networkBandwidth.internalValue;
  }

  // network_corrupt - computed: false, optional: true, required: false
  private _networkCorrupt = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkCorruptOutputReference(this, "network_corrupt");
  public get networkCorrupt() {
    return this._networkCorrupt;
  }
  public putNetworkCorrupt(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkCorrupt) {
    this._networkCorrupt.internalValue = value;
  }
  public resetNetworkCorrupt() {
    this._networkCorrupt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkCorruptInput() {
    return this._networkCorrupt.internalValue;
  }

  // network_delay - computed: false, optional: true, required: false
  private _networkDelay = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDelayOutputReference(this, "network_delay");
  public get networkDelay() {
    return this._networkDelay;
  }
  public putNetworkDelay(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDelay) {
    this._networkDelay.internalValue = value;
  }
  public resetNetworkDelay() {
    this._networkDelay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDelayInput() {
    return this._networkDelay.internalValue;
  }

  // network_dns - computed: false, optional: true, required: false
  private _networkDns = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDnsOutputReference(this, "network_dns");
  public get networkDns() {
    return this._networkDns;
  }
  public putNetworkDns(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDns) {
    this._networkDns.internalValue = value;
  }
  public resetNetworkDns() {
    this._networkDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDnsInput() {
    return this._networkDns.internalValue;
  }

  // network_down - computed: false, optional: true, required: false
  private _networkDown = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDownOutputReference(this, "network_down");
  public get networkDown() {
    return this._networkDown;
  }
  public putNetworkDown(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDown) {
    this._networkDown.internalValue = value;
  }
  public resetNetworkDown() {
    this._networkDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDownInput() {
    return this._networkDown.internalValue;
  }

  // network_duplicate - computed: false, optional: true, required: false
  private _networkDuplicate = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDuplicateOutputReference(this, "network_duplicate");
  public get networkDuplicate() {
    return this._networkDuplicate;
  }
  public putNetworkDuplicate(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkDuplicate) {
    this._networkDuplicate.internalValue = value;
  }
  public resetNetworkDuplicate() {
    this._networkDuplicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDuplicateInput() {
    return this._networkDuplicate.internalValue;
  }

  // network_flood - computed: false, optional: true, required: false
  private _networkFlood = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkFloodOutputReference(this, "network_flood");
  public get networkFlood() {
    return this._networkFlood;
  }
  public putNetworkFlood(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkFlood) {
    this._networkFlood.internalValue = value;
  }
  public resetNetworkFlood() {
    this._networkFlood.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFloodInput() {
    return this._networkFlood.internalValue;
  }

  // network_loss - computed: false, optional: true, required: false
  private _networkLoss = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkLossOutputReference(this, "network_loss");
  public get networkLoss() {
    return this._networkLoss;
  }
  public putNetworkLoss(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkLoss) {
    this._networkLoss.internalValue = value;
  }
  public resetNetworkLoss() {
    this._networkLoss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLossInput() {
    return this._networkLoss.internalValue;
  }

  // network_partition - computed: false, optional: true, required: false
  private _networkPartition = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkPartitionOutputReference(this, "network_partition");
  public get networkPartition() {
    return this._networkPartition;
  }
  public putNetworkPartition(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecNetworkPartition) {
    this._networkPartition.internalValue = value;
  }
  public resetNetworkPartition() {
    this._networkPartition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPartitionInput() {
    return this._networkPartition.internalValue;
  }

  // process - computed: false, optional: true, required: false
  private _process = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecProcessOutputReference(this, "process");
  public get process() {
    return this._process;
  }
  public putProcess(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecProcess) {
    this._process.internalValue = value;
  }
  public resetProcess() {
    this._process.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInput() {
    return this._process.internalValue;
  }

  // redis_cache_limit - computed: false, optional: true, required: false
  private _redisCacheLimit = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisCacheLimitOutputReference(this, "redis_cache_limit");
  public get redisCacheLimit() {
    return this._redisCacheLimit;
  }
  public putRedisCacheLimit(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisCacheLimit) {
    this._redisCacheLimit.internalValue = value;
  }
  public resetRedisCacheLimit() {
    this._redisCacheLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisCacheLimitInput() {
    return this._redisCacheLimit.internalValue;
  }

  // redis_expiration - computed: false, optional: true, required: false
  private _redisExpiration = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisExpirationOutputReference(this, "redis_expiration");
  public get redisExpiration() {
    return this._redisExpiration;
  }
  public putRedisExpiration(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisExpiration) {
    this._redisExpiration.internalValue = value;
  }
  public resetRedisExpiration() {
    this._redisExpiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisExpirationInput() {
    return this._redisExpiration.internalValue;
  }

  // redis_penetration - computed: false, optional: true, required: false
  private _redisPenetration = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisPenetrationOutputReference(this, "redis_penetration");
  public get redisPenetration() {
    return this._redisPenetration;
  }
  public putRedisPenetration(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisPenetration) {
    this._redisPenetration.internalValue = value;
  }
  public resetRedisPenetration() {
    this._redisPenetration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisPenetrationInput() {
    return this._redisPenetration.internalValue;
  }

  // redis_restart - computed: false, optional: true, required: false
  private _redisRestart = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisRestartOutputReference(this, "redis_restart");
  public get redisRestart() {
    return this._redisRestart;
  }
  public putRedisRestart(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisRestart) {
    this._redisRestart.internalValue = value;
  }
  public resetRedisRestart() {
    this._redisRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisRestartInput() {
    return this._redisRestart.internalValue;
  }

  // redis_stop - computed: false, optional: true, required: false
  private _redisStop = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisStopOutputReference(this, "redis_stop");
  public get redisStop() {
    return this._redisStop;
  }
  public putRedisStop(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecRedisStop) {
    this._redisStop.internalValue = value;
  }
  public resetRedisStop() {
    this._redisStop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisStopInput() {
    return this._redisStop.internalValue;
  }

  // remote_cluster - computed: false, optional: true, required: false
  private _remoteCluster?: string; 
  public get remoteCluster() {
    return this.getStringAttribute('remote_cluster');
  }
  public set remoteCluster(value: string) {
    this._remoteCluster = value;
  }
  public resetRemoteCluster() {
    this._remoteCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteClusterInput() {
    return this._remoteCluster;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // stress_cpu - computed: false, optional: true, required: false
  private _stressCpu = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressCpuOutputReference(this, "stress_cpu");
  public get stressCpu() {
    return this._stressCpu;
  }
  public putStressCpu(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressCpu) {
    this._stressCpu.internalValue = value;
  }
  public resetStressCpu() {
    this._stressCpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stressCpuInput() {
    return this._stressCpu.internalValue;
  }

  // stress_mem - computed: false, optional: true, required: false
  private _stressMem = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressMemOutputReference(this, "stress_mem");
  public get stressMem() {
    return this._stressMem;
  }
  public putStressMem(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecStressMem) {
    this._stressMem.internalValue = value;
  }
  public resetStressMem() {
    this._stressMem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stressMemInput() {
    return this._stressMem.internalValue;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // user_defined - computed: false, optional: true, required: false
  private _userDefined = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecUserDefinedOutputReference(this, "user_defined");
  public get userDefined() {
    return this._userDefined;
  }
  public putUserDefined(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecUserDefined) {
    this._userDefined.internalValue = value;
  }
  public resetUserDefined() {
    this._userDefined.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedInput() {
    return this._userDefined.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vm - computed: false, optional: true, required: false
  private _vm = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecVmOutputReference(this, "vm");
  public get vm() {
    return this._vm;
  }
  public putVm(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecVm) {
    this._vm.internalValue = value;
  }
  public resetVm() {
    this._vm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInput() {
    return this._vm.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest k8s_chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest}
*/
export class DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest k8s_chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_chaos_mesh_org_physical_machine_chaos_v1alpha1_manifest',
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
  private _metadata = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpec) {
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
      metadata: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgPhysicalMachineChaosV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
