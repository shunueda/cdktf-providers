// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest#metadata DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest#spec DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpec;
}
export interface DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest#annotations DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest#labels DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest#name DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestMetadataToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecAutoDetect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest#cluster_ip DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1Manifest#cluster_ip}
  */
  readonly clusterIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest#node_ip DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1Manifest#node_ip}
  */
  readonly nodeIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest#pod_cidr_mode DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1Manifest#pod_cidr_mode}
  */
  readonly podCidrMode?: string;
}

export function dataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecAutoDetectToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecAutoDetect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ip: cdktf.booleanToTerraform(struct!.clusterIp),
    node_ip: cdktf.booleanToTerraform(struct!.nodeIp),
    pod_cidr_mode: cdktf.stringToTerraform(struct!.podCidrMode),
  }
}


export function dataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecAutoDetectToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecAutoDetect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ip: {
      value: cdktf.booleanToHclTerraform(struct!.clusterIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_ip: {
      value: cdktf.booleanToHclTerraform(struct!.nodeIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_cidr_mode: {
      value: cdktf.stringToHclTerraform(struct!.podCidrMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecAutoDetectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecAutoDetect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIp = this._clusterIp;
    }
    if (this._nodeIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeIp = this._nodeIp;
    }
    if (this._podCidrMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidrMode = this._podCidrMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecAutoDetect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterIp = undefined;
      this._nodeIp = undefined;
      this._podCidrMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterIp = value.clusterIp;
      this._nodeIp = value.nodeIp;
      this._podCidrMode = value.podCidrMode;
    }
  }

  // cluster_ip - computed: false, optional: true, required: false
  private _clusterIp?: boolean | cdktf.IResolvable; 
  public get clusterIp() {
    return this.getBooleanAttribute('cluster_ip');
  }
  public set clusterIp(value: boolean | cdktf.IResolvable) {
    this._clusterIp = value;
  }
  public resetClusterIp() {
    this._clusterIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpInput() {
    return this._clusterIp;
  }

  // node_ip - computed: false, optional: true, required: false
  private _nodeIp?: boolean | cdktf.IResolvable; 
  public get nodeIp() {
    return this.getBooleanAttribute('node_ip');
  }
  public set nodeIp(value: boolean | cdktf.IResolvable) {
    this._nodeIp = value;
  }
  public resetNodeIp() {
    this._nodeIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIpInput() {
    return this._nodeIp;
  }

  // pod_cidr_mode - computed: false, optional: true, required: false
  private _podCidrMode?: string; 
  public get podCidrMode() {
    return this.getStringAttribute('pod_cidr_mode');
  }
  public set podCidrMode(value: string) {
    this._podCidrMode = value;
  }
  public resetPodCidrMode() {
    this._podCidrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrModeInput() {
    return this._podCidrMode;
  }
}
export interface DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest#auto_detect DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1Manifest#auto_detect}
  */
  readonly autoDetect?: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecAutoDetect;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest#extra_cidr DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1Manifest#extra_cidr}
  */
  readonly extraCidr?: string[];
}

export function dataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_detect: dataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecAutoDetectToTerraform(struct!.autoDetect),
    extra_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraCidr),
  }
}


export function dataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_detect: {
      value: dataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecAutoDetectToHclTerraform(struct!.autoDetect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecAutoDetect",
    },
    extra_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraCidr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDetect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDetect = this._autoDetect?.internalValue;
    }
    if (this._extraCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraCidr = this._extraCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDetect.internalValue = undefined;
      this._extraCidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDetect.internalValue = value.autoDetect;
      this._extraCidr = value.extraCidr;
    }
  }

  // auto_detect - computed: false, optional: true, required: false
  private _autoDetect = new DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecAutoDetectOutputReference(this, "auto_detect");
  public get autoDetect() {
    return this._autoDetect;
  }
  public putAutoDetect(value: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecAutoDetect) {
    this._autoDetect.internalValue = value;
  }
  public resetAutoDetect() {
    this._autoDetect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectInput() {
    return this._autoDetect.internalValue;
  }

  // extra_cidr - computed: false, optional: true, required: false
  private _extraCidr?: string[]; 
  public get extraCidr() {
    return this.getListAttribute('extra_cidr');
  }
  public set extraCidr(value: string[]) {
    this._extraCidr = value;
  }
  public resetExtraCidr() {
    this._extraCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraCidrInput() {
    return this._extraCidr;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest k8s_egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest}
*/
export class DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest k8s_egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_egressgateway_spidernet_io_egress_cluster_info_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpec) {
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
      metadata: dataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEgressgatewaySpidernetIoEgressClusterInfoV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
