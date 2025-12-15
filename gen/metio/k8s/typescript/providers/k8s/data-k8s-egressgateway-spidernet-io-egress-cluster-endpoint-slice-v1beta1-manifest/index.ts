// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest#endpoints DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1Manifest#endpoints}
  */
  readonly endpoints?: DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpoints[] | cdktf.IResolvable;
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest#metadata DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestMetadata;
}
export interface DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest#ipv4 DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1Manifest#ipv4}
  */
  readonly ipv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest#ipv6 DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1Manifest#ipv6}
  */
  readonly ipv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest#node DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1Manifest#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest#ns DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1Manifest#ns}
  */
  readonly ns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest#pod DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1Manifest#pod}
  */
  readonly pod?: string;
}

export function dataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpointsToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4),
    ipv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    ns: cdktf.stringToTerraform(struct!.ns),
    pod: cdktf.stringToTerraform(struct!.pod),
  }
}


export function dataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpointsToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ns: {
      value: cdktf.stringToHclTerraform(struct!.ns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod: {
      value: cdktf.stringToHclTerraform(struct!.pod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._ns !== undefined) {
      hasAnyValues = true;
      internalValueResult.ns = this._ns;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._node = undefined;
      this._ns = undefined;
      this._pod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._node = value.nodeAttribute;
      this._ns = value.ns;
      this._pod = value.pod;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string[]; 
  public get ipv4() {
    return this.getListAttribute('ipv4');
  }
  public set ipv4(value: string[]) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string[]; 
  public get ipv6() {
    return this.getListAttribute('ipv6');
  }
  public set ipv6(value: string[]) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // ns - computed: false, optional: true, required: false
  private _ns?: string; 
  public get ns() {
    return this.getStringAttribute('ns');
  }
  public set ns(value: string) {
    this._ns = value;
  }
  public resetNs() {
    this._ns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsInput() {
    return this._ns;
  }

  // pod - computed: false, optional: true, required: false
  private _pod?: string; 
  public get pod() {
    return this.getStringAttribute('pod');
  }
  public set pod(value: string) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }
}

export class DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpointsOutputReference {
    return new DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest#annotations DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest#labels DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest#name DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestMetadataToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest k8s_egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest}
*/
export class DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest k8s_egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_egressgateway_spidernet_io_egress_cluster_endpoint_slice_v1beta1_manifest',
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
    this._endpoints.internalValue = config.endpoints;
    this._metadata.internalValue = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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
      endpoints: cdktf.listMapper(dataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpointsToTerraform, false)(this._endpoints.internalValue),
      metadata: dataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoints: {
        value: cdktf.listMapperHcl(dataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpointsToHclTerraform, false)(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestEndpointsList",
      },
      metadata: {
        value: dataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEgressgatewaySpidernetIoEgressClusterEndpointSliceV1Beta1ManifestMetadata",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
