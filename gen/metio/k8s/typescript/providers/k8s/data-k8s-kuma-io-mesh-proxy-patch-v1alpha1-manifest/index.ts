// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#metadata DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestMetadata;
  /**
  * Spec is the specification of the Kuma MeshProxyPatch resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#spec DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpec;
}
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#annotations DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#labels DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#name DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#namespace DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatches {
  /**
  * From is a jsonpatch from string, used by move and copy operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#from DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#from}
  */
  readonly from?: string;
  /**
  * Op is a jsonpatch operation string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#op DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#op}
  */
  readonly op: string;
  /**
  * Path is a jsonpatch path string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#path DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Value must be a valid json value used by replace and add operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#value DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatchesToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    op: cdktf.stringToTerraform(struct!.op),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatchesToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
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
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._op = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._op = value.op;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
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

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatchesOutputReference {
    return new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterMatch {
  /**
  * Name of the cluster to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#name DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Origin is the name of the component or plugin that generated the resource. Here is the list of well-known origins: inbound - resources generated for handling incoming traffic. outbound - resources generated for handling outgoing traffic. transparent - resources generated for transparent proxy functionality. prometheus - resources generated when Prometheus metrics are enabled. direct-access - resources generated for Direct Access functionality. ingress - resources generated for Zone Ingress. egress - resources generated for Zone Egress. gateway - resources generated for MeshGateway. The list is not complete, because policy plugins can introduce new resources. For example MeshTrace plugin can create Cluster with 'mesh-trace' origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#origin DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#origin}
  */
  readonly origin?: string;
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterMatchToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    origin: cdktf.stringToTerraform(struct!.origin),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterMatchToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterMatch | cdktf.IResolvable): any {
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
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._origin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._origin = value.origin;
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

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }
}
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsCluster {
  /**
  * JsonPatches specifies list of jsonpatches to apply to on Envoy's Cluster resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#json_patches DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#json_patches}
  */
  readonly jsonPatches?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatches[] | cdktf.IResolvable;
  /**
  * Match is a set of conditions that have to be matched for modification operation to happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#match DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#match}
  */
  readonly match?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterMatch;
  /**
  * Operation to execute on matched cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#operation DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#operation}
  */
  readonly operation: string;
  /**
  * Value of xDS resource in YAML format to add or patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#value DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_patches: cdktf.listMapper(dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatchesToTerraform, false)(struct!.jsonPatches),
    match: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterMatchToTerraform(struct!.match),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_patches: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatchesToHclTerraform, false)(struct!.jsonPatches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatchesList",
    },
    match: {
      value: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterMatch",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonPatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPatches = this._jsonPatches?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonPatches.internalValue = undefined;
      this._match.internalValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonPatches.internalValue = value.jsonPatches;
      this._match.internalValue = value.match;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // json_patches - computed: false, optional: true, required: false
  private _jsonPatches = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatchesList(this, "json_patches", false);
  public get jsonPatches() {
    return this._jsonPatches;
  }
  public putJsonPatches(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterJsonPatches[] | cdktf.IResolvable) {
    this._jsonPatches.internalValue = value;
  }
  public resetJsonPatches() {
    this._jsonPatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPatchesInput() {
    return this._jsonPatches.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatches {
  /**
  * From is a jsonpatch from string, used by move and copy operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#from DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#from}
  */
  readonly from?: string;
  /**
  * Op is a jsonpatch operation string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#op DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#op}
  */
  readonly op: string;
  /**
  * Path is a jsonpatch path string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#path DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Value must be a valid json value used by replace and add operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#value DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatchesToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    op: cdktf.stringToTerraform(struct!.op),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatchesToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
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
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._op = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._op = value.op;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
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

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatchesOutputReference {
    return new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterMatch {
  /**
  * Name of the listener to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#listener_name DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#listener_name}
  */
  readonly listenerName?: string;
  /**
  * Listener tags available in Listener#Metadata#FilterMetadata[io.kuma.tags]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#listener_tags DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#listener_tags}
  */
  readonly listenerTags?: { [key: string]: string };
  /**
  * Name of the HTTP filter. For example 'envoy.filters.http.local_ratelimit'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#name DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Origin is the name of the component or plugin that generated the resource. Here is the list of well-known origins: inbound - resources generated for handling incoming traffic. outbound - resources generated for handling outgoing traffic. transparent - resources generated for transparent proxy functionality. prometheus - resources generated when Prometheus metrics are enabled. direct-access - resources generated for Direct Access functionality. ingress - resources generated for Zone Ingress. egress - resources generated for Zone Egress. gateway - resources generated for MeshGateway. The list is not complete, because policy plugins can introduce new resources. For example MeshTrace plugin can create Cluster with 'mesh-trace' origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#origin DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#origin}
  */
  readonly origin?: string;
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterMatchToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_name: cdktf.stringToTerraform(struct!.listenerName),
    listener_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.listenerTags),
    name: cdktf.stringToTerraform(struct!.name),
    origin: cdktf.stringToTerraform(struct!.origin),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterMatchToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_name: {
      value: cdktf.stringToHclTerraform(struct!.listenerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.listenerTags),
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
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerName = this._listenerName;
    }
    if (this._listenerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerTags = this._listenerTags;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerName = undefined;
      this._listenerTags = undefined;
      this._name = undefined;
      this._origin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerName = value.listenerName;
      this._listenerTags = value.listenerTags;
      this._name = value.name;
      this._origin = value.origin;
    }
  }

  // listener_name - computed: false, optional: true, required: false
  private _listenerName?: string; 
  public get listenerName() {
    return this.getStringAttribute('listener_name');
  }
  public set listenerName(value: string) {
    this._listenerName = value;
  }
  public resetListenerName() {
    this._listenerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerNameInput() {
    return this._listenerName;
  }

  // listener_tags - computed: false, optional: true, required: false
  private _listenerTags?: { [key: string]: string }; 
  public get listenerTags() {
    return this.getStringMapAttribute('listener_tags');
  }
  public set listenerTags(value: { [key: string]: string }) {
    this._listenerTags = value;
  }
  public resetListenerTags() {
    this._listenerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerTagsInput() {
    return this._listenerTags;
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

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }
}
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilter {
  /**
  * JsonPatches specifies list of jsonpatches to apply to on Envoy's HTTP Filter available in HTTP Connection Manager in a Listener resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#json_patches DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#json_patches}
  */
  readonly jsonPatches?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatches[] | cdktf.IResolvable;
  /**
  * Match is a set of conditions that have to be matched for modification operation to happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#match DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#match}
  */
  readonly match?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterMatch;
  /**
  * Operation to execute on matched listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#operation DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#operation}
  */
  readonly operation: string;
  /**
  * Value of xDS resource in YAML format to add or patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#value DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_patches: cdktf.listMapper(dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatchesToTerraform, false)(struct!.jsonPatches),
    match: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterMatchToTerraform(struct!.match),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_patches: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatchesToHclTerraform, false)(struct!.jsonPatches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatchesList",
    },
    match: {
      value: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterMatch",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonPatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPatches = this._jsonPatches?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonPatches.internalValue = undefined;
      this._match.internalValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonPatches.internalValue = value.jsonPatches;
      this._match.internalValue = value.match;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // json_patches - computed: false, optional: true, required: false
  private _jsonPatches = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatchesList(this, "json_patches", false);
  public get jsonPatches() {
    return this._jsonPatches;
  }
  public putJsonPatches(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterJsonPatches[] | cdktf.IResolvable) {
    this._jsonPatches.internalValue = value;
  }
  public resetJsonPatches() {
    this._jsonPatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPatchesInput() {
    return this._jsonPatches.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatches {
  /**
  * From is a jsonpatch from string, used by move and copy operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#from DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#from}
  */
  readonly from?: string;
  /**
  * Op is a jsonpatch operation string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#op DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#op}
  */
  readonly op: string;
  /**
  * Path is a jsonpatch path string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#path DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Value must be a valid json value used by replace and add operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#value DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatchesToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    op: cdktf.stringToTerraform(struct!.op),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatchesToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
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
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._op = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._op = value.op;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
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

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatchesOutputReference {
    return new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerMatch {
  /**
  * Name of the listener to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#name DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Origin is the name of the component or plugin that generated the resource. Here is the list of well-known origins: inbound - resources generated for handling incoming traffic. outbound - resources generated for handling outgoing traffic. transparent - resources generated for transparent proxy functionality. prometheus - resources generated when Prometheus metrics are enabled. direct-access - resources generated for Direct Access functionality. ingress - resources generated for Zone Ingress. egress - resources generated for Zone Egress. gateway - resources generated for MeshGateway. The list is not complete, because policy plugins can introduce new resources. For example MeshTrace plugin can create Cluster with 'mesh-trace' origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#origin DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#origin}
  */
  readonly origin?: string;
  /**
  * Tags available in Listener#Metadata#FilterMetadata[io.kuma.tags]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#tags DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerMatchToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    origin: cdktf.stringToTerraform(struct!.origin),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerMatchToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerMatch | cdktf.IResolvable): any {
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
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._origin = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._origin = value.origin;
      this._tags = value.tags;
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

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListener {
  /**
  * JsonPatches specifies list of jsonpatches to apply to on Envoy's Listener resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#json_patches DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#json_patches}
  */
  readonly jsonPatches?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatches[] | cdktf.IResolvable;
  /**
  * Match is a set of conditions that have to be matched for modification operation to happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#match DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#match}
  */
  readonly match?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerMatch;
  /**
  * Operation to execute on matched listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#operation DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#operation}
  */
  readonly operation: string;
  /**
  * Value of xDS resource in YAML format to add or patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#value DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_patches: cdktf.listMapper(dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatchesToTerraform, false)(struct!.jsonPatches),
    match: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerMatchToTerraform(struct!.match),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_patches: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatchesToHclTerraform, false)(struct!.jsonPatches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatchesList",
    },
    match: {
      value: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerMatch",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonPatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPatches = this._jsonPatches?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonPatches.internalValue = undefined;
      this._match.internalValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonPatches.internalValue = value.jsonPatches;
      this._match.internalValue = value.match;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // json_patches - computed: false, optional: true, required: false
  private _jsonPatches = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatchesList(this, "json_patches", false);
  public get jsonPatches() {
    return this._jsonPatches;
  }
  public putJsonPatches(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerJsonPatches[] | cdktf.IResolvable) {
    this._jsonPatches.internalValue = value;
  }
  public resetJsonPatches() {
    this._jsonPatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPatchesInput() {
    return this._jsonPatches.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatches {
  /**
  * From is a jsonpatch from string, used by move and copy operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#from DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#from}
  */
  readonly from?: string;
  /**
  * Op is a jsonpatch operation string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#op DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#op}
  */
  readonly op: string;
  /**
  * Path is a jsonpatch path string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#path DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Value must be a valid json value used by replace and add operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#value DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatchesToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    op: cdktf.stringToTerraform(struct!.op),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatchesToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
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
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._op = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._op = value.op;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
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

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatchesOutputReference {
    return new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterMatch {
  /**
  * Name of the listener to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#listener_name DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#listener_name}
  */
  readonly listenerName?: string;
  /**
  * Listener tags available in Listener#Metadata#FilterMetadata[io.kuma.tags]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#listener_tags DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#listener_tags}
  */
  readonly listenerTags?: { [key: string]: string };
  /**
  * Name of the network filter. For example 'envoy.filters.network.ratelimit'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#name DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Origin is the name of the component or plugin that generated the resource. Here is the list of well-known origins: inbound - resources generated for handling incoming traffic. outbound - resources generated for handling outgoing traffic. transparent - resources generated for transparent proxy functionality. prometheus - resources generated when Prometheus metrics are enabled. direct-access - resources generated for Direct Access functionality. ingress - resources generated for Zone Ingress. egress - resources generated for Zone Egress. gateway - resources generated for MeshGateway. The list is not complete, because policy plugins can introduce new resources. For example MeshTrace plugin can create Cluster with 'mesh-trace' origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#origin DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#origin}
  */
  readonly origin?: string;
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterMatchToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_name: cdktf.stringToTerraform(struct!.listenerName),
    listener_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.listenerTags),
    name: cdktf.stringToTerraform(struct!.name),
    origin: cdktf.stringToTerraform(struct!.origin),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterMatchToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_name: {
      value: cdktf.stringToHclTerraform(struct!.listenerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.listenerTags),
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
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerName = this._listenerName;
    }
    if (this._listenerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerTags = this._listenerTags;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerName = undefined;
      this._listenerTags = undefined;
      this._name = undefined;
      this._origin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerName = value.listenerName;
      this._listenerTags = value.listenerTags;
      this._name = value.name;
      this._origin = value.origin;
    }
  }

  // listener_name - computed: false, optional: true, required: false
  private _listenerName?: string; 
  public get listenerName() {
    return this.getStringAttribute('listener_name');
  }
  public set listenerName(value: string) {
    this._listenerName = value;
  }
  public resetListenerName() {
    this._listenerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerNameInput() {
    return this._listenerName;
  }

  // listener_tags - computed: false, optional: true, required: false
  private _listenerTags?: { [key: string]: string }; 
  public get listenerTags() {
    return this.getStringMapAttribute('listener_tags');
  }
  public set listenerTags(value: { [key: string]: string }) {
    this._listenerTags = value;
  }
  public resetListenerTags() {
    this._listenerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerTagsInput() {
    return this._listenerTags;
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

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }
}
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilter {
  /**
  * JsonPatches specifies list of jsonpatches to apply to on Envoy Listener's filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#json_patches DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#json_patches}
  */
  readonly jsonPatches?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatches[] | cdktf.IResolvable;
  /**
  * Match is a set of conditions that have to be matched for modification operation to happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#match DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#match}
  */
  readonly match?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterMatch;
  /**
  * Operation to execute on matched listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#operation DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#operation}
  */
  readonly operation: string;
  /**
  * Value of xDS resource in YAML format to add or patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#value DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_patches: cdktf.listMapper(dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatchesToTerraform, false)(struct!.jsonPatches),
    match: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterMatchToTerraform(struct!.match),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_patches: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatchesToHclTerraform, false)(struct!.jsonPatches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatchesList",
    },
    match: {
      value: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterMatch",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonPatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPatches = this._jsonPatches?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonPatches.internalValue = undefined;
      this._match.internalValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonPatches.internalValue = value.jsonPatches;
      this._match.internalValue = value.match;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // json_patches - computed: false, optional: true, required: false
  private _jsonPatches = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatchesList(this, "json_patches", false);
  public get jsonPatches() {
    return this._jsonPatches;
  }
  public putJsonPatches(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterJsonPatches[] | cdktf.IResolvable) {
    this._jsonPatches.internalValue = value;
  }
  public resetJsonPatches() {
    this._jsonPatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPatchesInput() {
    return this._jsonPatches.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatches {
  /**
  * From is a jsonpatch from string, used by move and copy operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#from DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#from}
  */
  readonly from?: string;
  /**
  * Op is a jsonpatch operation string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#op DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#op}
  */
  readonly op: string;
  /**
  * Path is a jsonpatch path string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#path DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Value must be a valid json value used by replace and add operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#value DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatchesToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    op: cdktf.stringToTerraform(struct!.op),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatchesToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
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
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._op = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._op = value.op;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
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

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatchesOutputReference {
    return new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostMatch {
  /**
  * Name of the VirtualHost to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#name DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Origin is the name of the component or plugin that generated the resource. Here is the list of well-known origins: inbound - resources generated for handling incoming traffic. outbound - resources generated for handling outgoing traffic. transparent - resources generated for transparent proxy functionality. prometheus - resources generated when Prometheus metrics are enabled. direct-access - resources generated for Direct Access functionality. ingress - resources generated for Zone Ingress. egress - resources generated for Zone Egress. gateway - resources generated for MeshGateway. The list is not complete, because policy plugins can introduce new resources. For example MeshTrace plugin can create Cluster with 'mesh-trace' origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#origin DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#origin}
  */
  readonly origin?: string;
  /**
  * Name of the RouteConfiguration resource to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#route_configuration_name DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#route_configuration_name}
  */
  readonly routeConfigurationName?: string;
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostMatchToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    origin: cdktf.stringToTerraform(struct!.origin),
    route_configuration_name: cdktf.stringToTerraform(struct!.routeConfigurationName),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostMatchToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostMatch | cdktf.IResolvable): any {
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
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_configuration_name: {
      value: cdktf.stringToHclTerraform(struct!.routeConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._routeConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeConfigurationName = this._routeConfigurationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._origin = undefined;
      this._routeConfigurationName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._origin = value.origin;
      this._routeConfigurationName = value.routeConfigurationName;
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

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // route_configuration_name - computed: false, optional: true, required: false
  private _routeConfigurationName?: string; 
  public get routeConfigurationName() {
    return this.getStringAttribute('route_configuration_name');
  }
  public set routeConfigurationName(value: string) {
    this._routeConfigurationName = value;
  }
  public resetRouteConfigurationName() {
    this._routeConfigurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeConfigurationNameInput() {
    return this._routeConfigurationName;
  }
}
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHost {
  /**
  * JsonPatches specifies list of jsonpatches to apply to on Envoy's VirtualHost resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#json_patches DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#json_patches}
  */
  readonly jsonPatches?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatches[] | cdktf.IResolvable;
  /**
  * Match is a set of conditions that have to be matched for modification operation to happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#match DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#match}
  */
  readonly match: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostMatch;
  /**
  * Operation to execute on matched listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#operation DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#operation}
  */
  readonly operation: string;
  /**
  * Value of xDS resource in YAML format to add or patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#value DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_patches: cdktf.listMapper(dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatchesToTerraform, false)(struct!.jsonPatches),
    match: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostMatchToTerraform(struct!.match),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_patches: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatchesToHclTerraform, false)(struct!.jsonPatches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatchesList",
    },
    match: {
      value: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostMatch",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonPatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPatches = this._jsonPatches?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonPatches.internalValue = undefined;
      this._match.internalValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonPatches.internalValue = value.jsonPatches;
      this._match.internalValue = value.match;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // json_patches - computed: false, optional: true, required: false
  private _jsonPatches = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatchesList(this, "json_patches", false);
  public get jsonPatches() {
    return this._jsonPatches;
  }
  public putJsonPatches(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostJsonPatches[] | cdktf.IResolvable) {
    this._jsonPatches.internalValue = value;
  }
  public resetJsonPatches() {
    this._jsonPatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPatchesInput() {
    return this._jsonPatches.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModifications {
  /**
  * Cluster is a modification of Envoy's Cluster resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#cluster DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#cluster}
  */
  readonly cluster?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsCluster;
  /**
  * HTTPFilter is a modification of Envoy HTTP Filter available in HTTP Connection Manager in a Listener resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#http_filter DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#http_filter}
  */
  readonly httpFilter?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilter;
  /**
  * Listener is a modification of Envoy's Listener resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#listener DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#listener}
  */
  readonly listener?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListener;
  /**
  * NetworkFilter is a modification of Envoy Listener's filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#network_filter DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#network_filter}
  */
  readonly networkFilter?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilter;
  /**
  * VirtualHost is a modification of Envoy's VirtualHost referenced in HTTP Connection Manager in a Listener resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#virtual_host DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#virtual_host}
  */
  readonly virtualHost?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHost;
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterToTerraform(struct!.cluster),
    http_filter: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterToTerraform(struct!.httpFilter),
    listener: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerToTerraform(struct!.listener),
    network_filter: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterToTerraform(struct!.networkFilter),
    virtual_host: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostToTerraform(struct!.virtualHost),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsCluster",
    },
    http_filter: {
      value: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterToHclTerraform(struct!.httpFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilter",
    },
    listener: {
      value: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerToHclTerraform(struct!.listener),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListener",
    },
    network_filter: {
      value: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterToHclTerraform(struct!.networkFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilter",
    },
    virtual_host: {
      value: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostToHclTerraform(struct!.virtualHost),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHost",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._httpFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilter = this._httpFilter?.internalValue;
    }
    if (this._listener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener?.internalValue;
    }
    if (this._networkFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFilter = this._networkFilter?.internalValue;
    }
    if (this._virtualHost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualHost = this._virtualHost?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster.internalValue = undefined;
      this._httpFilter.internalValue = undefined;
      this._listener.internalValue = undefined;
      this._networkFilter.internalValue = undefined;
      this._virtualHost.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster.internalValue = value.cluster;
      this._httpFilter.internalValue = value.httpFilter;
      this._listener.internalValue = value.listener;
      this._networkFilter.internalValue = value.networkFilter;
      this._virtualHost.internalValue = value.virtualHost;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // http_filter - computed: false, optional: true, required: false
  private _httpFilter = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilterOutputReference(this, "http_filter");
  public get httpFilter() {
    return this._httpFilter;
  }
  public putHttpFilter(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsHttpFilter) {
    this._httpFilter.internalValue = value;
  }
  public resetHttpFilter() {
    this._httpFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterInput() {
    return this._httpFilter.internalValue;
  }

  // listener - computed: false, optional: true, required: false
  private _listener = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListenerOutputReference(this, "listener");
  public get listener() {
    return this._listener;
  }
  public putListener(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsListener) {
    this._listener.internalValue = value;
  }
  public resetListener() {
    this._listener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }

  // network_filter - computed: false, optional: true, required: false
  private _networkFilter = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilterOutputReference(this, "network_filter");
  public get networkFilter() {
    return this._networkFilter;
  }
  public putNetworkFilter(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsNetworkFilter) {
    this._networkFilter.internalValue = value;
  }
  public resetNetworkFilter() {
    this._networkFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFilterInput() {
    return this._networkFilter.internalValue;
  }

  // virtual_host - computed: false, optional: true, required: false
  private _virtualHost = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHostOutputReference(this, "virtual_host");
  public get virtualHost() {
    return this._virtualHost;
  }
  public putVirtualHost(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsVirtualHost) {
    this._virtualHost.internalValue = value;
  }
  public resetVirtualHost() {
    this._virtualHost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostInput() {
    return this._virtualHost.internalValue;
  }
}

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModifications[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsOutputReference {
    return new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefault {
  /**
  * AppendModifications is a list of modifications applied on the selected proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#append_modifications DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#append_modifications}
  */
  readonly appendModifications: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModifications[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append_modifications: cdktf.listMapper(dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsToTerraform, false)(struct!.appendModifications),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append_modifications: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsToHclTerraform, false)(struct!.appendModifications),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendModifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendModifications = this._appendModifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendModifications.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendModifications.internalValue = value.appendModifications;
    }
  }

  // append_modifications - computed: false, optional: false, required: true
  private _appendModifications = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModificationsList(this, "append_modifications", false);
  public get appendModifications() {
    return this._appendModifications;
  }
  public putAppendModifications(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultAppendModifications[] | cdktf.IResolvable) {
    this._appendModifications.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appendModificationsInput() {
    return this._appendModifications.internalValue;
  }
}
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#kind DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#labels DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#mesh DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#name DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#namespace DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#section_name DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#tags DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecTargetRefToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    mesh: cdktf.stringToTerraform(struct!.mesh),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    proxy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyTypes),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mesh: {
      value: cdktf.stringToHclTerraform(struct!.mesh),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._mesh !== undefined) {
      hasAnyValues = true;
      internalValueResult.mesh = this._mesh;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._proxyTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTypes = this._proxyTypes;
    }
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._labels = undefined;
      this._mesh = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._proxyTypes = undefined;
      this._sectionName = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._labels = value.labels;
      this._mesh = value.mesh;
      this._name = value.name;
      this._namespace = value.namespace;
      this._proxyTypes = value.proxyTypes;
      this._sectionName = value.sectionName;
      this._tags = value.tags;
    }
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

  // mesh - computed: false, optional: true, required: false
  private _mesh?: string; 
  public get mesh() {
    return this.getStringAttribute('mesh');
  }
  public set mesh(value: string) {
    this._mesh = value;
  }
  public resetMesh() {
    this._mesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshInput() {
    return this._mesh;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // proxy_types - computed: false, optional: true, required: false
  private _proxyTypes?: string[]; 
  public get proxyTypes() {
    return this.getListAttribute('proxy_types');
  }
  public set proxyTypes(value: string[]) {
    this._proxyTypes = value;
  }
  public resetProxyTypes() {
    this._proxyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypesInput() {
    return this._proxyTypes;
  }

  // section_name - computed: false, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
export interface DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpec {
  /**
  * Default is a configuration specific to the group of destinations referenced in 'targetRef'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#default DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#default}
  */
  readonly default: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefault;
  /**
  * TargetRef is a reference to the resource the policy takes an effect on. The resource could be either a real store object or virtual resource defined inplace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#target_ref DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecTargetRef;
}

export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultToTerraform(struct!.default),
    target_ref: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefault",
    },
    target_ref: {
      value: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default.internalValue = undefined;
      this._targetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default.internalValue = value.default;
      this._targetRef.internalValue = value.targetRef;
    }
  }

  // default - computed: false, optional: false, required: true
  private _default = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecDefault) {
    this._default.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  public resetTargetRef() {
    this._targetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest k8s_kuma_io_mesh_proxy_patch_v1alpha1_manifest}
*/
export class DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kuma_io_mesh_proxy_patch_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKumaIoMeshProxyPatchV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kuma_io_mesh_proxy_patch_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuma_io_mesh_proxy_patch_v1alpha1_manifest k8s_kuma_io_mesh_proxy_patch_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kuma_io_mesh_proxy_patch_v1alpha1_manifest',
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
  private _metadata = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshProxyPatchV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
