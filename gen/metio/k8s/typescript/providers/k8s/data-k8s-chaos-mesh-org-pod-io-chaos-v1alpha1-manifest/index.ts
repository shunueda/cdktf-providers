// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#metadata DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestMetadata;
  /**
  * PodIOChaosSpec defines the desired state of IOChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#spec DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpec;
}
export interface DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#annotations DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#labels DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#name DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#namespace DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsAtime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#nsec DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#nsec}
  */
  readonly nsec: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#sec DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#sec}
  */
  readonly sec: number;
}

export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsAtimeToTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsAtime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nsec: cdktf.numberToTerraform(struct!.nsec),
    sec: cdktf.numberToTerraform(struct!.sec),
  }
}


export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsAtimeToHclTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsAtime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nsec: {
      value: cdktf.numberToHclTerraform(struct!.nsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec: {
      value: cdktf.numberToHclTerraform(struct!.sec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsAtimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsAtime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsec = this._nsec;
    }
    if (this._sec !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec = this._sec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsAtime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nsec = undefined;
      this._sec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nsec = value.nsec;
      this._sec = value.sec;
    }
  }

  // nsec - computed: false, optional: false, required: true
  private _nsec?: number; 
  public get nsec() {
    return this.getNumberAttribute('nsec');
  }
  public set nsec(value: number) {
    this._nsec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsecInput() {
    return this._nsec;
  }

  // sec - computed: false, optional: false, required: true
  private _sec?: number; 
  public get sec() {
    return this.getNumberAttribute('sec');
  }
  public set sec(value: number) {
    this._sec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secInput() {
    return this._sec;
  }
}
export interface DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsCtime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#nsec DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#nsec}
  */
  readonly nsec: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#sec DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#sec}
  */
  readonly sec: number;
}

export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsCtimeToTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsCtime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nsec: cdktf.numberToTerraform(struct!.nsec),
    sec: cdktf.numberToTerraform(struct!.sec),
  }
}


export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsCtimeToHclTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsCtime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nsec: {
      value: cdktf.numberToHclTerraform(struct!.nsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec: {
      value: cdktf.numberToHclTerraform(struct!.sec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsCtimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsCtime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsec = this._nsec;
    }
    if (this._sec !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec = this._sec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsCtime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nsec = undefined;
      this._sec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nsec = value.nsec;
      this._sec = value.sec;
    }
  }

  // nsec - computed: false, optional: false, required: true
  private _nsec?: number; 
  public get nsec() {
    return this.getNumberAttribute('nsec');
  }
  public set nsec(value: number) {
    this._nsec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsecInput() {
    return this._nsec;
  }

  // sec - computed: false, optional: false, required: true
  private _sec?: number; 
  public get sec() {
    return this.getNumberAttribute('sec');
  }
  public set sec(value: number) {
    this._sec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secInput() {
    return this._sec;
  }
}
export interface DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#errno DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#errno}
  */
  readonly errno: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#weight DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaultsToTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    errno: cdktf.numberToTerraform(struct!.errno),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaultsToHclTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    errno: {
      value: cdktf.numberToHclTerraform(struct!.errno),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errno !== undefined) {
      hasAnyValues = true;
      internalValueResult.errno = this._errno;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errno = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errno = value.errno;
      this._weight = value.weight;
    }
  }

  // errno - computed: false, optional: false, required: true
  private _errno?: number; 
  public get errno() {
    return this.getNumberAttribute('errno');
  }
  public set errno(value: number) {
    this._errno = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errnoInput() {
    return this._errno;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaultsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaults[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaultsOutputReference {
    return new DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMistake {
  /**
  * Filling determines what is filled in the mistake data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#filling DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#filling}
  */
  readonly filling?: string;
  /**
  * Max length of each wrong data segment in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#max_length DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#max_length}
  */
  readonly maxLength?: number;
  /**
  * There will be [1, MaxOccurrences] segments of wrong data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#max_occurrences DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#max_occurrences}
  */
  readonly maxOccurrences?: number;
}

export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMistakeToTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMistake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filling: cdktf.stringToTerraform(struct!.filling),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    max_occurrences: cdktf.numberToTerraform(struct!.maxOccurrences),
  }
}


export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMistakeToHclTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMistake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filling: {
      value: cdktf.stringToHclTerraform(struct!.filling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_occurrences: {
      value: cdktf.numberToHclTerraform(struct!.maxOccurrences),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMistakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMistake | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filling !== undefined) {
      hasAnyValues = true;
      internalValueResult.filling = this._filling;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._maxOccurrences !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOccurrences = this._maxOccurrences;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMistake | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filling = undefined;
      this._maxLength = undefined;
      this._maxOccurrences = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filling = value.filling;
      this._maxLength = value.maxLength;
      this._maxOccurrences = value.maxOccurrences;
    }
  }

  // filling - computed: false, optional: true, required: false
  private _filling?: string; 
  public get filling() {
    return this.getStringAttribute('filling');
  }
  public set filling(value: string) {
    this._filling = value;
  }
  public resetFilling() {
    this._filling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillingInput() {
    return this._filling;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // max_occurrences - computed: false, optional: true, required: false
  private _maxOccurrences?: number; 
  public get maxOccurrences() {
    return this.getNumberAttribute('max_occurrences');
  }
  public set maxOccurrences(value: number) {
    this._maxOccurrences = value;
  }
  public resetMaxOccurrences() {
    this._maxOccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOccurrencesInput() {
    return this._maxOccurrences;
  }
}
export interface DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMtime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#nsec DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#nsec}
  */
  readonly nsec: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#sec DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#sec}
  */
  readonly sec: number;
}

export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMtimeToTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMtime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nsec: cdktf.numberToTerraform(struct!.nsec),
    sec: cdktf.numberToTerraform(struct!.sec),
  }
}


export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMtimeToHclTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMtime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nsec: {
      value: cdktf.numberToHclTerraform(struct!.nsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec: {
      value: cdktf.numberToHclTerraform(struct!.sec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMtimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMtime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsec = this._nsec;
    }
    if (this._sec !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec = this._sec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMtime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nsec = undefined;
      this._sec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nsec = value.nsec;
      this._sec = value.sec;
    }
  }

  // nsec - computed: false, optional: false, required: true
  private _nsec?: number; 
  public get nsec() {
    return this.getNumberAttribute('nsec');
  }
  public set nsec(value: number) {
    this._nsec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsecInput() {
    return this._nsec;
  }

  // sec - computed: false, optional: false, required: true
  private _sec?: number; 
  public get sec() {
    return this.getNumberAttribute('sec');
  }
  public set sec(value: number) {
    this._sec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secInput() {
    return this._sec;
  }
}
export interface DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActions {
  /**
  * Timespec represents a time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#atime DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#atime}
  */
  readonly atime?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsAtime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#blocks DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#blocks}
  */
  readonly blocks?: number;
  /**
  * Timespec represents a time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#ctime DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#ctime}
  */
  readonly ctime?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsCtime;
  /**
  * Faults represents the fault to inject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#faults DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#faults}
  */
  readonly faults?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaults[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#gid DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#ino DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#ino}
  */
  readonly ino?: number;
  /**
  * FileType represents type of file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#kind DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Latency represents the latency to inject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#latency DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#latency}
  */
  readonly latency?: string;
  /**
  * Methods represents the method that the action will inject in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#methods DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#methods}
  */
  readonly methods?: string[];
  /**
  * MistakeSpec represents the mistake to inject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#mistake DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#mistake}
  */
  readonly mistake?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMistake;
  /**
  * Timespec represents a time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#mtime DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#mtime}
  */
  readonly mtime?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMtime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#nlink DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#nlink}
  */
  readonly nlink?: number;
  /**
  * Path represents a glob of injecting path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#path DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Percent represents the percent probability of injecting this action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#percent DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#percent}
  */
  readonly percent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#perm DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#perm}
  */
  readonly perm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#rdev DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#rdev}
  */
  readonly rdev?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#size DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#size}
  */
  readonly size?: number;
  /**
  * Source represents the source of current rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#source DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#source}
  */
  readonly source?: string;
  /**
  * IOChaosType represents the type of IOChaos Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#type DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#uid DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#uid}
  */
  readonly uid?: number;
}

export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsToTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    atime: dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsAtimeToTerraform(struct!.atime),
    blocks: cdktf.numberToTerraform(struct!.blocks),
    ctime: dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsCtimeToTerraform(struct!.ctime),
    faults: cdktf.listMapper(dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaultsToTerraform, false)(struct!.faults),
    gid: cdktf.numberToTerraform(struct!.gid),
    ino: cdktf.numberToTerraform(struct!.ino),
    kind: cdktf.stringToTerraform(struct!.kind),
    latency: cdktf.stringToTerraform(struct!.latency),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    mistake: dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMistakeToTerraform(struct!.mistake),
    mtime: dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMtimeToTerraform(struct!.mtime),
    nlink: cdktf.numberToTerraform(struct!.nlink),
    path: cdktf.stringToTerraform(struct!.path),
    percent: cdktf.numberToTerraform(struct!.percent),
    perm: cdktf.numberToTerraform(struct!.perm),
    rdev: cdktf.numberToTerraform(struct!.rdev),
    size: cdktf.numberToTerraform(struct!.size),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsToHclTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    atime: {
      value: dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsAtimeToHclTerraform(struct!.atime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsAtime",
    },
    blocks: {
      value: cdktf.numberToHclTerraform(struct!.blocks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ctime: {
      value: dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsCtimeToHclTerraform(struct!.ctime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsCtime",
    },
    faults: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaultsToHclTerraform, false)(struct!.faults),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaultsList",
    },
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ino: {
      value: cdktf.numberToHclTerraform(struct!.ino),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mistake: {
      value: dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMistakeToHclTerraform(struct!.mistake),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMistake",
    },
    mtime: {
      value: dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMtimeToHclTerraform(struct!.mtime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMtime",
    },
    nlink: {
      value: cdktf.numberToHclTerraform(struct!.nlink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    perm: {
      value: cdktf.numberToHclTerraform(struct!.perm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdev: {
      value: cdktf.numberToHclTerraform(struct!.rdev),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.atime = this._atime?.internalValue;
    }
    if (this._blocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocks = this._blocks;
    }
    if (this._ctime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctime = this._ctime?.internalValue;
    }
    if (this._faults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faults = this._faults?.internalValue;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._ino !== undefined) {
      hasAnyValues = true;
      internalValueResult.ino = this._ino;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._mistake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mistake = this._mistake?.internalValue;
    }
    if (this._mtime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtime = this._mtime?.internalValue;
    }
    if (this._nlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.nlink = this._nlink;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._perm !== undefined) {
      hasAnyValues = true;
      internalValueResult.perm = this._perm;
    }
    if (this._rdev !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdev = this._rdev;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._atime.internalValue = undefined;
      this._blocks = undefined;
      this._ctime.internalValue = undefined;
      this._faults.internalValue = undefined;
      this._gid = undefined;
      this._ino = undefined;
      this._kind = undefined;
      this._latency = undefined;
      this._methods = undefined;
      this._mistake.internalValue = undefined;
      this._mtime.internalValue = undefined;
      this._nlink = undefined;
      this._path = undefined;
      this._percent = undefined;
      this._perm = undefined;
      this._rdev = undefined;
      this._size = undefined;
      this._source = undefined;
      this._type = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._atime.internalValue = value.atime;
      this._blocks = value.blocks;
      this._ctime.internalValue = value.ctime;
      this._faults.internalValue = value.faults;
      this._gid = value.gid;
      this._ino = value.ino;
      this._kind = value.kind;
      this._latency = value.latency;
      this._methods = value.methods;
      this._mistake.internalValue = value.mistake;
      this._mtime.internalValue = value.mtime;
      this._nlink = value.nlink;
      this._path = value.path;
      this._percent = value.percent;
      this._perm = value.perm;
      this._rdev = value.rdev;
      this._size = value.size;
      this._source = value.source;
      this._type = value.type;
      this._uid = value.uid;
    }
  }

  // atime - computed: false, optional: true, required: false
  private _atime = new DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsAtimeOutputReference(this, "atime");
  public get atime() {
    return this._atime;
  }
  public putAtime(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsAtime) {
    this._atime.internalValue = value;
  }
  public resetAtime() {
    this._atime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atimeInput() {
    return this._atime.internalValue;
  }

  // blocks - computed: false, optional: true, required: false
  private _blocks?: number; 
  public get blocks() {
    return this.getNumberAttribute('blocks');
  }
  public set blocks(value: number) {
    this._blocks = value;
  }
  public resetBlocks() {
    this._blocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks;
  }

  // ctime - computed: false, optional: true, required: false
  private _ctime = new DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsCtimeOutputReference(this, "ctime");
  public get ctime() {
    return this._ctime;
  }
  public putCtime(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsCtime) {
    this._ctime.internalValue = value;
  }
  public resetCtime() {
    this._ctime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctimeInput() {
    return this._ctime.internalValue;
  }

  // faults - computed: false, optional: true, required: false
  private _faults = new DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaultsList(this, "faults", false);
  public get faults() {
    return this._faults;
  }
  public putFaults(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsFaults[] | cdktf.IResolvable) {
    this._faults.internalValue = value;
  }
  public resetFaults() {
    this._faults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultsInput() {
    return this._faults.internalValue;
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // ino - computed: false, optional: true, required: false
  private _ino?: number; 
  public get ino() {
    return this.getNumberAttribute('ino');
  }
  public set ino(value: number) {
    this._ino = value;
  }
  public resetIno() {
    this._ino = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inoInput() {
    return this._ino;
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

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // mistake - computed: false, optional: true, required: false
  private _mistake = new DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMistakeOutputReference(this, "mistake");
  public get mistake() {
    return this._mistake;
  }
  public putMistake(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMistake) {
    this._mistake.internalValue = value;
  }
  public resetMistake() {
    this._mistake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mistakeInput() {
    return this._mistake.internalValue;
  }

  // mtime - computed: false, optional: true, required: false
  private _mtime = new DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMtimeOutputReference(this, "mtime");
  public get mtime() {
    return this._mtime;
  }
  public putMtime(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsMtime) {
    this._mtime.internalValue = value;
  }
  public resetMtime() {
    this._mtime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtimeInput() {
    return this._mtime.internalValue;
  }

  // nlink - computed: false, optional: true, required: false
  private _nlink?: number; 
  public get nlink() {
    return this.getNumberAttribute('nlink');
  }
  public set nlink(value: number) {
    this._nlink = value;
  }
  public resetNlink() {
    this._nlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nlinkInput() {
    return this._nlink;
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

  // percent - computed: false, optional: false, required: true
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // perm - computed: false, optional: true, required: false
  private _perm?: number; 
  public get perm() {
    return this.getNumberAttribute('perm');
  }
  public set perm(value: number) {
    this._perm = value;
  }
  public resetPerm() {
    this._perm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permInput() {
    return this._perm;
  }

  // rdev - computed: false, optional: true, required: false
  private _rdev?: number; 
  public get rdev() {
    return this.getNumberAttribute('rdev');
  }
  public set rdev(value: number) {
    this._rdev = value;
  }
  public resetRdev() {
    this._rdev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdevInput() {
    return this._rdev;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
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

  // uid - computed: false, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}

export class DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsOutputReference {
    return new DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpec {
  /**
  * Actions are a list of IOChaos actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#actions DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#actions}
  */
  readonly actions?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActions[] | cdktf.IResolvable;
  /**
  * TODO: support multiple different container to inject in one pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#container DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#container}
  */
  readonly container?: string;
  /**
  * VolumeMountPath represents the target mount path It must be a root of mount path now. TODO: search the mount parent of any path automatically. TODO: support multiple different volume mount path in one pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#volume_mount_path DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest#volume_mount_path}
  */
  readonly volumeMountPath: string;
}

export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecToTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsToTerraform, false)(struct!.actions),
    container: cdktf.stringToTerraform(struct!.container),
    volume_mount_path: cdktf.stringToTerraform(struct!.volumeMountPath),
  }
}


export function dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsList",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mount_path: {
      value: cdktf.stringToHclTerraform(struct!.volumeMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._volumeMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMountPath = this._volumeMountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._container = undefined;
      this._volumeMountPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._container = value.container;
      this._volumeMountPath = value.volumeMountPath;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // volume_mount_path - computed: false, optional: false, required: true
  private _volumeMountPath?: string; 
  public get volumeMountPath() {
    return this.getStringAttribute('volume_mount_path');
  }
  public set volumeMountPath(value: string) {
    this._volumeMountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountPathInput() {
    return this._volumeMountPath;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest k8s_chaos_mesh_org_pod_io_chaos_v1alpha1_manifest}
*/
export class DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_chaos_mesh_org_pod_io_chaos_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SChaosMeshOrgPodIoChaosV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_chaos_mesh_org_pod_io_chaos_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/chaos_mesh_org_pod_io_chaos_v1alpha1_manifest k8s_chaos_mesh_org_pod_io_chaos_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_chaos_mesh_org_pod_io_chaos_v1alpha1_manifest',
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
  private _metadata = new DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpec) {
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
      metadata: dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgPodIoChaosV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
