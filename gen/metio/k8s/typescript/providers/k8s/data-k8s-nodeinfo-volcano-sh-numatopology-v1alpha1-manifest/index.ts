// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest#metadata DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestMetadata;
  /**
  * Specification of the numa information of the worker node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest#spec DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpec;
}
export interface DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest#annotations DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest#labels DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest#name DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecCpuDetail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest#core DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest#core}
  */
  readonly core?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest#numa DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest#numa}
  */
  readonly numa?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest#socket DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest#socket}
  */
  readonly socket?: number;
}

export function dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecCpuDetailToTerraform(struct?: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecCpuDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core: cdktf.numberToTerraform(struct!.core),
    numa: cdktf.numberToTerraform(struct!.numa),
    socket: cdktf.numberToTerraform(struct!.socket),
  }
}


export function dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecCpuDetailToHclTerraform(struct?: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecCpuDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core: {
      value: cdktf.numberToHclTerraform(struct!.core),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    numa: {
      value: cdktf.numberToHclTerraform(struct!.numa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket: {
      value: cdktf.numberToHclTerraform(struct!.socket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecCpuDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecCpuDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._core !== undefined) {
      hasAnyValues = true;
      internalValueResult.core = this._core;
    }
    if (this._numa !== undefined) {
      hasAnyValues = true;
      internalValueResult.numa = this._numa;
    }
    if (this._socket !== undefined) {
      hasAnyValues = true;
      internalValueResult.socket = this._socket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecCpuDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._core = undefined;
      this._numa = undefined;
      this._socket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._core = value.core;
      this._numa = value.numa;
      this._socket = value.socket;
    }
  }

  // core - computed: false, optional: true, required: false
  private _core?: number; 
  public get core() {
    return this.getNumberAttribute('core');
  }
  public set core(value: number) {
    this._core = value;
  }
  public resetCore() {
    this._core = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInput() {
    return this._core;
  }

  // numa - computed: false, optional: true, required: false
  private _numa?: number; 
  public get numa() {
    return this.getNumberAttribute('numa');
  }
  public set numa(value: number) {
    this._numa = value;
  }
  public resetNuma() {
    this._numa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numaInput() {
    return this._numa;
  }

  // socket - computed: false, optional: true, required: false
  private _socket?: number; 
  public get socket() {
    return this.getNumberAttribute('socket');
  }
  public set socket(value: number) {
    this._socket = value;
  }
  public resetSocket() {
    this._socket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketInput() {
    return this._socket;
  }
}
export interface DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecNumares {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest#allocatable DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest#allocatable}
  */
  readonly allocatable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest#capacity DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest#capacity}
  */
  readonly capacity?: number;
}

export function dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecNumaresToTerraform(struct?: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecNumares | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocatable: cdktf.stringToTerraform(struct!.allocatable),
    capacity: cdktf.numberToTerraform(struct!.capacity),
  }
}


export function dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecNumaresToHclTerraform(struct?: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecNumares | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocatable: {
      value: cdktf.stringToHclTerraform(struct!.allocatable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecNumaresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecNumares | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatable = this._allocatable;
    }
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecNumares | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatable = undefined;
      this._capacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocatable = value.allocatable;
      this._capacity = value.capacity;
    }
  }

  // allocatable - computed: false, optional: true, required: false
  private _allocatable?: string; 
  public get allocatable() {
    return this.getStringAttribute('allocatable');
  }
  public set allocatable(value: string) {
    this._allocatable = value;
  }
  public resetAllocatable() {
    this._allocatable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatableInput() {
    return this._allocatable;
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }
}
export interface DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpec {
  /**
  * Specifies the cpu topology info Key is cpu id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest#cpu_detail DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest#cpu_detail}
  */
  readonly cpuDetail?: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecCpuDetail;
  /**
  * Specifies the numa info for the resource Key is resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest#numares DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest#numares}
  */
  readonly numares?: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecNumares;
  /**
  * Specifies the policy of the manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest#policies DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest#policies}
  */
  readonly policies?: { [key: string]: string };
  /**
  * Specifies the reserved resource of the node Key is resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest#res_reserved DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest#res_reserved}
  */
  readonly resReserved?: { [key: string]: string };
}

export function dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_detail: dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecCpuDetailToTerraform(struct!.cpuDetail),
    numares: dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecNumaresToTerraform(struct!.numares),
    policies: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.policies),
    res_reserved: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resReserved),
  }
}


export function dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_detail: {
      value: dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecCpuDetailToHclTerraform(struct!.cpuDetail),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecCpuDetail",
    },
    numares: {
      value: dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecNumaresToHclTerraform(struct!.numares),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecNumares",
    },
    policies: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.policies),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    res_reserved: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resReserved),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuDetail = this._cpuDetail?.internalValue;
    }
    if (this._numares?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numares = this._numares?.internalValue;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    if (this._resReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.resReserved = this._resReserved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuDetail.internalValue = undefined;
      this._numares.internalValue = undefined;
      this._policies = undefined;
      this._resReserved = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuDetail.internalValue = value.cpuDetail;
      this._numares.internalValue = value.numares;
      this._policies = value.policies;
      this._resReserved = value.resReserved;
    }
  }

  // cpu_detail - computed: false, optional: true, required: false
  private _cpuDetail = new DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecCpuDetailOutputReference(this, "cpu_detail");
  public get cpuDetail() {
    return this._cpuDetail;
  }
  public putCpuDetail(value: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecCpuDetail) {
    this._cpuDetail.internalValue = value;
  }
  public resetCpuDetail() {
    this._cpuDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuDetailInput() {
    return this._cpuDetail.internalValue;
  }

  // numares - computed: false, optional: true, required: false
  private _numares = new DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecNumaresOutputReference(this, "numares");
  public get numares() {
    return this._numares;
  }
  public putNumares(value: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecNumares) {
    this._numares.internalValue = value;
  }
  public resetNumares() {
    this._numares.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numaresInput() {
    return this._numares.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: { [key: string]: string }; 
  public get policies() {
    return this.getStringMapAttribute('policies');
  }
  public set policies(value: { [key: string]: string }) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // res_reserved - computed: false, optional: true, required: false
  private _resReserved?: { [key: string]: string }; 
  public get resReserved() {
    return this.getStringMapAttribute('res_reserved');
  }
  public set resReserved(value: { [key: string]: string }) {
    this._resReserved = value;
  }
  public resetResReserved() {
    this._resReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resReservedInput() {
    return this._resReserved;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest k8s_nodeinfo_volcano_sh_numatopology_v1alpha1_manifest}
*/
export class DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_nodeinfo_volcano_sh_numatopology_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_nodeinfo_volcano_sh_numatopology_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/nodeinfo_volcano_sh_numatopology_v1alpha1_manifest k8s_nodeinfo_volcano_sh_numatopology_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_nodeinfo_volcano_sh_numatopology_v1alpha1_manifest',
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
  private _metadata = new DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNodeinfoVolcanoShNumatopologyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
