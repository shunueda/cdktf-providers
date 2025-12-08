// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#metadata DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestMetadata;
  /**
  * Spec defines the behavior of a pod chaos experiment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#spec DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpec;
}
export interface DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#annotations DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#labels DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#name DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#namespace DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#cidr DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#port DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#port}
  */
  readonly port: number;
}

export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPortsToTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPortsToHclTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._port = value.port;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPortsOutputReference {
    return new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsets {
  /**
  * The contents of ipset. Only available when IPSetType is NetPortIPSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#cidr_and_ports DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#cidr_and_ports}
  */
  readonly cidrAndPorts?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPorts[] | cdktf.IResolvable;
  /**
  * The contents of ipset. Only available when IPSetType is NetIPSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#cidrs DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#cidrs}
  */
  readonly cidrs?: string[];
  /**
  * IPSetType represents the type of IP set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#ipset_type DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#ipset_type}
  */
  readonly ipsetType: string;
  /**
  * The name of ipset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#name DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The contents of ipset. Only available when IPSetType is SetIPSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#set_names DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#set_names}
  */
  readonly setNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#source DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#source}
  */
  readonly source: string;
}

export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsToTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_and_ports: cdktf.listMapper(dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPortsToTerraform, false)(struct!.cidrAndPorts),
    cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrs),
    ipset_type: cdktf.stringToTerraform(struct!.ipsetType),
    name: cdktf.stringToTerraform(struct!.name),
    set_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setNames),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsToHclTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_and_ports: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPortsToHclTerraform, false)(struct!.cidrAndPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPortsList",
    },
    cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipset_type: {
      value: cdktf.stringToHclTerraform(struct!.ipsetType),
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
    set_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrAndPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrAndPorts = this._cidrAndPorts?.internalValue;
    }
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    if (this._ipsetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsetType = this._ipsetType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._setNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.setNames = this._setNames;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrAndPorts.internalValue = undefined;
      this._cidrs = undefined;
      this._ipsetType = undefined;
      this._name = undefined;
      this._setNames = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrAndPorts.internalValue = value.cidrAndPorts;
      this._cidrs = value.cidrs;
      this._ipsetType = value.ipsetType;
      this._name = value.name;
      this._setNames = value.setNames;
      this._source = value.source;
    }
  }

  // cidr_and_ports - computed: false, optional: true, required: false
  private _cidrAndPorts = new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPortsList(this, "cidr_and_ports", false);
  public get cidrAndPorts() {
    return this._cidrAndPorts;
  }
  public putCidrAndPorts(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsCidrAndPorts[] | cdktf.IResolvable) {
    this._cidrAndPorts.internalValue = value;
  }
  public resetCidrAndPorts() {
    this._cidrAndPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrAndPortsInput() {
    return this._cidrAndPorts.internalValue;
  }

  // cidrs - computed: false, optional: true, required: false
  private _cidrs?: string[]; 
  public get cidrs() {
    return this.getListAttribute('cidrs');
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  public resetCidrs() {
    this._cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }

  // ipset_type - computed: false, optional: false, required: true
  private _ipsetType?: string; 
  public get ipsetType() {
    return this.getStringAttribute('ipset_type');
  }
  public set ipsetType(value: string) {
    this._ipsetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsetTypeInput() {
    return this._ipsetType;
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

  // set_names - computed: false, optional: true, required: false
  private _setNames?: string[]; 
  public get setNames() {
    return this.getListAttribute('set_names');
  }
  public set setNames(value: string[]) {
    this._setNames = value;
  }
  public resetSetNames() {
    this._setNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setNamesInput() {
    return this._setNames;
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
}

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsOutputReference {
    return new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptables {
  /**
  * Device represents the network device to be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#device DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#device}
  */
  readonly device?: string;
  /**
  * The block direction of this iptables rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#direction DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#direction}
  */
  readonly direction: string;
  /**
  * The name of related ipset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#ipsets DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#ipsets}
  */
  readonly ipsets?: string[];
  /**
  * The name of iptables chain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#name DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#source DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#source}
  */
  readonly source: string;
}

export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptablesToTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    direction: cdktf.stringToTerraform(struct!.direction),
    ipsets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipsets),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptablesToHclTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptables | cdktf.IResolvable): any {
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
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipsets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._ipsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsets = this._ipsets;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device = undefined;
      this._direction = undefined;
      this._ipsets = undefined;
      this._name = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device = value.device;
      this._direction = value.direction;
      this._ipsets = value.ipsets;
      this._name = value.name;
      this._source = value.source;
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

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // ipsets - computed: false, optional: true, required: false
  private _ipsets?: string[]; 
  public get ipsets() {
    return this.getListAttribute('ipsets');
  }
  public set ipsets(value: string[]) {
    this._ipsets = value;
  }
  public resetIpsets() {
    this._ipsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsetsInput() {
    return this._ipsets;
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
}

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptablesList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptables[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptablesOutputReference {
    return new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsBandwidth {
  /**
  * Buffer is the maximum amount of bytes that tokens can be available for instantaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#buffer DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#buffer}
  */
  readonly buffer: number;
  /**
  * Limit is the number of bytes that can be queued waiting for tokens to become available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#limit DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#limit}
  */
  readonly limit: number;
  /**
  * Minburst specifies the size of the peakrate bucket. For perfect accuracy, should be set to the MTU of the interface. If a peakrate is needed, but some burstiness is acceptable, this size can be raised. A 3000 byte minburst allows around 3mbit/s of peakrate, given 1000 byte packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#minburst DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#minburst}
  */
  readonly minburst?: number;
  /**
  * Peakrate is the maximum depletion rate of the bucket. The peakrate does not need to be set, it is only necessary if perfect millisecond timescale shaping is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#peakrate DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#peakrate}
  */
  readonly peakrate?: number;
  /**
  * Rate is the speed knob. Allows bit, kbit, mbit, gbit, tbit, bps, kbps, mbps, gbps, tbps unit. bps means bytes per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#rate DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#rate}
  */
  readonly rate: string;
}

export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsBandwidthToTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsBandwidth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.numberToTerraform(struct!.buffer),
    limit: cdktf.numberToTerraform(struct!.limit),
    minburst: cdktf.numberToTerraform(struct!.minburst),
    peakrate: cdktf.numberToTerraform(struct!.peakrate),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsBandwidthToHclTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsBandwidth | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsBandwidth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
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

  public set internalValue(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsBandwidth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
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
export interface DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsCorrupt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#correlation DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#correlation}
  */
  readonly correlation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#corrupt DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#corrupt}
  */
  readonly corrupt: string;
}

export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsCorruptToTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsCorrupt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.stringToTerraform(struct!.correlation),
    corrupt: cdktf.stringToTerraform(struct!.corrupt),
  }
}


export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsCorruptToHclTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsCorrupt | cdktf.IResolvable): any {
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
    corrupt: {
      value: cdktf.stringToHclTerraform(struct!.corrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsCorruptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsCorrupt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    if (this._corrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.corrupt = this._corrupt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsCorrupt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlation = undefined;
      this._corrupt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlation = value.correlation;
      this._corrupt = value.corrupt;
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

  // corrupt - computed: false, optional: false, required: true
  private _corrupt?: string; 
  public get corrupt() {
    return this.getStringAttribute('corrupt');
  }
  public set corrupt(value: string) {
    this._corrupt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get corruptInput() {
    return this._corrupt;
  }
}
export interface DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayReorder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#correlation DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#correlation}
  */
  readonly correlation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#gap DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#gap}
  */
  readonly gap: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#reorder DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#reorder}
  */
  readonly reorder: string;
}

export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayReorderToTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayReorder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.stringToTerraform(struct!.correlation),
    gap: cdktf.numberToTerraform(struct!.gap),
    reorder: cdktf.stringToTerraform(struct!.reorder),
  }
}


export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayReorderToHclTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayReorder | cdktf.IResolvable): any {
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
    gap: {
      value: cdktf.numberToHclTerraform(struct!.gap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reorder: {
      value: cdktf.stringToHclTerraform(struct!.reorder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayReorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayReorder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    if (this._gap !== undefined) {
      hasAnyValues = true;
      internalValueResult.gap = this._gap;
    }
    if (this._reorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.reorder = this._reorder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayReorder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlation = undefined;
      this._gap = undefined;
      this._reorder = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlation = value.correlation;
      this._gap = value.gap;
      this._reorder = value.reorder;
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

  // gap - computed: false, optional: false, required: true
  private _gap?: number; 
  public get gap() {
    return this.getNumberAttribute('gap');
  }
  public set gap(value: number) {
    this._gap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gapInput() {
    return this._gap;
  }

  // reorder - computed: false, optional: false, required: true
  private _reorder?: string; 
  public get reorder() {
    return this.getStringAttribute('reorder');
  }
  public set reorder(value: string) {
    this._reorder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reorderInput() {
    return this._reorder;
  }
}
export interface DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelay {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#correlation DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#correlation}
  */
  readonly correlation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#jitter DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#jitter}
  */
  readonly jitter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#latency DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#latency}
  */
  readonly latency: string;
  /**
  * ReorderSpec defines details of packet reorder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#reorder DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#reorder}
  */
  readonly reorder?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayReorder;
}

export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayToTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.stringToTerraform(struct!.correlation),
    jitter: cdktf.stringToTerraform(struct!.jitter),
    latency: cdktf.stringToTerraform(struct!.latency),
    reorder: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayReorderToTerraform(struct!.reorder),
  }
}


export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayToHclTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelay | cdktf.IResolvable): any {
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
    reorder: {
      value: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayReorderToHclTerraform(struct!.reorder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayReorder",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    if (this._jitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitter = this._jitter;
    }
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    if (this._reorder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reorder = this._reorder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlation = undefined;
      this._jitter = undefined;
      this._latency = undefined;
      this._reorder.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlation = value.correlation;
      this._jitter = value.jitter;
      this._latency = value.latency;
      this._reorder.internalValue = value.reorder;
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

  // latency - computed: false, optional: false, required: true
  private _latency?: string; 
  public get latency() {
    return this.getStringAttribute('latency');
  }
  public set latency(value: string) {
    this._latency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }

  // reorder - computed: false, optional: true, required: false
  private _reorder = new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayReorderOutputReference(this, "reorder");
  public get reorder() {
    return this._reorder;
  }
  public putReorder(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayReorder) {
    this._reorder.internalValue = value;
  }
  public resetReorder() {
    this._reorder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reorderInput() {
    return this._reorder.internalValue;
  }
}
export interface DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDuplicate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#correlation DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#correlation}
  */
  readonly correlation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#duplicate DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#duplicate}
  */
  readonly duplicate: string;
}

export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDuplicateToTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDuplicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.stringToTerraform(struct!.correlation),
    duplicate: cdktf.stringToTerraform(struct!.duplicate),
  }
}


export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDuplicateToHclTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDuplicate | cdktf.IResolvable): any {
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
    duplicate: {
      value: cdktf.stringToHclTerraform(struct!.duplicate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDuplicateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDuplicate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    if (this._duplicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplicate = this._duplicate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDuplicate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlation = undefined;
      this._duplicate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlation = value.correlation;
      this._duplicate = value.duplicate;
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

  // duplicate - computed: false, optional: false, required: true
  private _duplicate?: string; 
  public get duplicate() {
    return this.getStringAttribute('duplicate');
  }
  public set duplicate(value: string) {
    this._duplicate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateInput() {
    return this._duplicate;
  }
}
export interface DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsLoss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#correlation DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#correlation}
  */
  readonly correlation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#loss DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#loss}
  */
  readonly loss: string;
}

export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsLossToTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsLoss | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.stringToTerraform(struct!.correlation),
    loss: cdktf.stringToTerraform(struct!.loss),
  }
}


export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsLossToHclTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsLoss | cdktf.IResolvable): any {
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
    loss: {
      value: cdktf.stringToHclTerraform(struct!.loss),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsLossOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsLoss | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    if (this._loss !== undefined) {
      hasAnyValues = true;
      internalValueResult.loss = this._loss;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsLoss | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlation = undefined;
      this._loss = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlation = value.correlation;
      this._loss = value.loss;
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

  // loss - computed: false, optional: false, required: true
  private _loss?: string; 
  public get loss() {
    return this.getStringAttribute('loss');
  }
  public set loss(value: string) {
    this._loss = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lossInput() {
    return this._loss;
  }
}
export interface DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsRate {
  /**
  * Rate is the speed knob. Allows bit, kbit, mbit, gbit, tbit, bps, kbps, mbps, gbps, tbps unit. bps means bytes per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#rate DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#rate}
  */
  readonly rate: string;
}

export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsRateToTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsRateToHclTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsRate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsRate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rate = value.rate;
    }
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
export interface DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcs {
  /**
  * Bandwidth represents the detail about bandwidth control action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#bandwidth DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#bandwidth}
  */
  readonly bandwidth?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsBandwidth;
  /**
  * Corrupt represents the detail about corrupt action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#corrupt DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#corrupt}
  */
  readonly corrupt?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsCorrupt;
  /**
  * Delay represents the detail about delay action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#delay DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#delay}
  */
  readonly delay?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelay;
  /**
  * Device represents the network device to be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#device DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#device}
  */
  readonly device?: string;
  /**
  * DuplicateSpec represents the detail about loss action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#duplicate DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#duplicate}
  */
  readonly duplicate?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDuplicate;
  /**
  * The name of target ipset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#ipset DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#ipset}
  */
  readonly ipset?: string;
  /**
  * Loss represents the detail about loss action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#loss DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#loss}
  */
  readonly loss?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsLoss;
  /**
  * Rate represents the detail about rate control action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#rate DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#rate}
  */
  readonly rate?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsRate;
  /**
  * The name and namespace of the source network chaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#source DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#source}
  */
  readonly source: string;
  /**
  * The type of traffic control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#type DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsToTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsBandwidthToTerraform(struct!.bandwidth),
    corrupt: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsCorruptToTerraform(struct!.corrupt),
    delay: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayToTerraform(struct!.delay),
    device: cdktf.stringToTerraform(struct!.device),
    duplicate: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDuplicateToTerraform(struct!.duplicate),
    ipset: cdktf.stringToTerraform(struct!.ipset),
    loss: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsLossToTerraform(struct!.loss),
    rate: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsRateToTerraform(struct!.rate),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsToHclTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsBandwidthToHclTerraform(struct!.bandwidth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsBandwidth",
    },
    corrupt: {
      value: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsCorruptToHclTerraform(struct!.corrupt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsCorrupt",
    },
    delay: {
      value: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelay",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duplicate: {
      value: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDuplicateToHclTerraform(struct!.duplicate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDuplicate",
    },
    ipset: {
      value: cdktf.stringToHclTerraform(struct!.ipset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loss: {
      value: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsLossToHclTerraform(struct!.loss),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsLoss",
    },
    rate: {
      value: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsRateToHclTerraform(struct!.rate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsRate",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth?.internalValue;
    }
    if (this._corrupt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corrupt = this._corrupt?.internalValue;
    }
    if (this._delay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay?.internalValue;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._duplicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplicate = this._duplicate?.internalValue;
    }
    if (this._ipset !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipset = this._ipset;
    }
    if (this._loss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loss = this._loss?.internalValue;
    }
    if (this._rate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate?.internalValue;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth.internalValue = undefined;
      this._corrupt.internalValue = undefined;
      this._delay.internalValue = undefined;
      this._device = undefined;
      this._duplicate.internalValue = undefined;
      this._ipset = undefined;
      this._loss.internalValue = undefined;
      this._rate.internalValue = undefined;
      this._source = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidth.internalValue = value.bandwidth;
      this._corrupt.internalValue = value.corrupt;
      this._delay.internalValue = value.delay;
      this._device = value.device;
      this._duplicate.internalValue = value.duplicate;
      this._ipset = value.ipset;
      this._loss.internalValue = value.loss;
      this._rate.internalValue = value.rate;
      this._source = value.source;
      this._type = value.type;
    }
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth = new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsBandwidthOutputReference(this, "bandwidth");
  public get bandwidth() {
    return this._bandwidth;
  }
  public putBandwidth(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsBandwidth) {
    this._bandwidth.internalValue = value;
  }
  public resetBandwidth() {
    this._bandwidth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth.internalValue;
  }

  // corrupt - computed: false, optional: true, required: false
  private _corrupt = new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsCorruptOutputReference(this, "corrupt");
  public get corrupt() {
    return this._corrupt;
  }
  public putCorrupt(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsCorrupt) {
    this._corrupt.internalValue = value;
  }
  public resetCorrupt() {
    this._corrupt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corruptInput() {
    return this._corrupt.internalValue;
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
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

  // duplicate - computed: false, optional: true, required: false
  private _duplicate = new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDuplicateOutputReference(this, "duplicate");
  public get duplicate() {
    return this._duplicate;
  }
  public putDuplicate(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsDuplicate) {
    this._duplicate.internalValue = value;
  }
  public resetDuplicate() {
    this._duplicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateInput() {
    return this._duplicate.internalValue;
  }

  // ipset - computed: false, optional: true, required: false
  private _ipset?: string; 
  public get ipset() {
    return this.getStringAttribute('ipset');
  }
  public set ipset(value: string) {
    this._ipset = value;
  }
  public resetIpset() {
    this._ipset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsetInput() {
    return this._ipset;
  }

  // loss - computed: false, optional: true, required: false
  private _loss = new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsLossOutputReference(this, "loss");
  public get loss() {
    return this._loss;
  }
  public putLoss(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsLoss) {
    this._loss.internalValue = value;
  }
  public resetLoss() {
    this._loss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossInput() {
    return this._loss.internalValue;
  }

  // rate - computed: false, optional: true, required: false
  private _rate = new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsRateOutputReference(this, "rate");
  public get rate() {
    return this._rate;
  }
  public putRate(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsRate) {
    this._rate.internalValue = value;
  }
  public resetRate() {
    this._rate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate.internalValue;
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
}

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsOutputReference {
    return new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpec {
  /**
  * The ipset on the pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#ipsets DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#ipsets}
  */
  readonly ipsets?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsets[] | cdktf.IResolvable;
  /**
  * The iptables rules on the pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#iptables DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#iptables}
  */
  readonly iptables?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptables[] | cdktf.IResolvable;
  /**
  * The tc rules on the pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#tcs DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest#tcs}
  */
  readonly tcs?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcs[] | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecToTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipsets: cdktf.listMapper(dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsToTerraform, false)(struct!.ipsets),
    iptables: cdktf.listMapper(dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptablesToTerraform, false)(struct!.iptables),
    tcs: cdktf.listMapper(dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsToTerraform, false)(struct!.tcs),
  }
}


export function dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipsets: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsToHclTerraform, false)(struct!.ipsets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsList",
    },
    iptables: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptablesToHclTerraform, false)(struct!.iptables),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptablesList",
    },
    tcs: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsToHclTerraform, false)(struct!.tcs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsets = this._ipsets?.internalValue;
    }
    if (this._iptables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptables = this._iptables?.internalValue;
    }
    if (this._tcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcs = this._tcs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipsets.internalValue = undefined;
      this._iptables.internalValue = undefined;
      this._tcs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipsets.internalValue = value.ipsets;
      this._iptables.internalValue = value.iptables;
      this._tcs.internalValue = value.tcs;
    }
  }

  // ipsets - computed: false, optional: true, required: false
  private _ipsets = new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsetsList(this, "ipsets", false);
  public get ipsets() {
    return this._ipsets;
  }
  public putIpsets(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIpsets[] | cdktf.IResolvable) {
    this._ipsets.internalValue = value;
  }
  public resetIpsets() {
    this._ipsets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsetsInput() {
    return this._ipsets.internalValue;
  }

  // iptables - computed: false, optional: true, required: false
  private _iptables = new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptablesList(this, "iptables", false);
  public get iptables() {
    return this._iptables;
  }
  public putIptables(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecIptables[] | cdktf.IResolvable) {
    this._iptables.internalValue = value;
  }
  public resetIptables() {
    this._iptables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptablesInput() {
    return this._iptables.internalValue;
  }

  // tcs - computed: false, optional: true, required: false
  private _tcs = new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcsList(this, "tcs", false);
  public get tcs() {
    return this._tcs;
  }
  public putTcs(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecTcs[] | cdktf.IResolvable) {
    this._tcs.internalValue = value;
  }
  public resetTcs() {
    this._tcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcsInput() {
    return this._tcs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest k8s_chaos_mesh_org_pod_network_chaos_v1alpha1_manifest}
*/
export class DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_chaos_mesh_org_pod_network_chaos_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_chaos_mesh_org_pod_network_chaos_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/chaos_mesh_org_pod_network_chaos_v1alpha1_manifest k8s_chaos_mesh_org_pod_network_chaos_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_chaos_mesh_org_pod_network_chaos_v1alpha1_manifest',
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
  private _metadata = new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpec) {
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
      metadata: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgPodNetworkChaosV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
