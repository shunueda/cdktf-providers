// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#metadata DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestMetadata;
  /**
  * Spec defines the behavior of a pod chaos experiment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#spec DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpec;
}
export interface DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#annotations DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#labels DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#name DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#namespace DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecBandwidth {
  /**
  * Buffer is the maximum amount of bytes that tokens can be available for instantaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#buffer DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#buffer}
  */
  readonly buffer: number;
  /**
  * Limit is the number of bytes that can be queued waiting for tokens to become available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#limit DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#limit}
  */
  readonly limit: number;
  /**
  * Minburst specifies the size of the peakrate bucket. For perfect accuracy, should be set to the MTU of the interface. If a peakrate is needed, but some burstiness is acceptable, this size can be raised. A 3000 byte minburst allows around 3mbit/s of peakrate, given 1000 byte packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#minburst DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#minburst}
  */
  readonly minburst?: number;
  /**
  * Peakrate is the maximum depletion rate of the bucket. The peakrate does not need to be set, it is only necessary if perfect millisecond timescale shaping is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#peakrate DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#peakrate}
  */
  readonly peakrate?: number;
  /**
  * Rate is the speed knob. Allows bit, kbit, mbit, gbit, tbit, bps, kbps, mbps, gbps, tbps unit. bps means bytes per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#rate DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#rate}
  */
  readonly rate: string;
}

export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecBandwidthToTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecBandwidth | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecBandwidthToHclTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecBandwidth | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecBandwidth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecBandwidth | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecCorrupt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#correlation DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#correlation}
  */
  readonly correlation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#corrupt DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#corrupt}
  */
  readonly corrupt: string;
}

export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecCorruptToTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecCorrupt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.stringToTerraform(struct!.correlation),
    corrupt: cdktf.stringToTerraform(struct!.corrupt),
  }
}


export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecCorruptToHclTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecCorrupt | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecCorruptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecCorrupt | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecCorrupt | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayReorder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#correlation DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#correlation}
  */
  readonly correlation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#gap DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#gap}
  */
  readonly gap: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#reorder DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#reorder}
  */
  readonly reorder: string;
}

export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayReorderToTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayReorder | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayReorderToHclTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayReorder | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayReorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayReorder | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayReorder | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelay {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#correlation DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#correlation}
  */
  readonly correlation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#jitter DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#jitter}
  */
  readonly jitter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#latency DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#latency}
  */
  readonly latency: string;
  /**
  * ReorderSpec defines details of packet reorder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#reorder DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#reorder}
  */
  readonly reorder?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayReorder;
}

export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayToTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.stringToTerraform(struct!.correlation),
    jitter: cdktf.stringToTerraform(struct!.jitter),
    latency: cdktf.stringToTerraform(struct!.latency),
    reorder: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayReorderToTerraform(struct!.reorder),
  }
}


export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayToHclTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelay | cdktf.IResolvable): any {
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
      value: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayReorderToHclTerraform(struct!.reorder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayReorder",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelay | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelay | cdktf.IResolvable | undefined) {
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
  private _reorder = new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayReorderOutputReference(this, "reorder");
  public get reorder() {
    return this._reorder;
  }
  public putReorder(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayReorder) {
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
export interface DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDuplicate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#correlation DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#correlation}
  */
  readonly correlation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#duplicate DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#duplicate}
  */
  readonly duplicate: string;
}

export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDuplicateToTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDuplicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.stringToTerraform(struct!.correlation),
    duplicate: cdktf.stringToTerraform(struct!.duplicate),
  }
}


export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDuplicateToHclTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDuplicate | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDuplicateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDuplicate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDuplicate | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecLoss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#correlation DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#correlation}
  */
  readonly correlation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#loss DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#loss}
  */
  readonly loss: string;
}

export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecLossToTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecLoss | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.stringToTerraform(struct!.correlation),
    loss: cdktf.stringToTerraform(struct!.loss),
  }
}


export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecLossToHclTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecLoss | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecLossOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecLoss | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecLoss | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecRate {
  /**
  * Rate is the speed knob. Allows bit, kbit, mbit, gbit, tbit, bps, kbps, mbps, gbps, tbps unit. bps means bytes per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#rate DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#rate}
  */
  readonly rate: string;
}

export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecRateToTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecRateToHclTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecRate | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecRate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecRate | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectors {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#key DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#operator DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#values DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToHclTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable | undefined) {
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

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsOutputReference {
    return new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelector {
  /**
  * Map of string keys and values that can be used to select objects. A selector based on annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#annotation_selectors DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#annotation_selectors}
  */
  readonly annotationSelectors?: { [key: string]: string };
  /**
  * a slice of label selector expressions that can be used to select objects. A list of selectors based on set-based label expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#expression_selectors DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#expression_selectors}
  */
  readonly expressionSelectors?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectors[] | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to select objects. A selector based on fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#field_selectors DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#field_selectors}
  */
  readonly fieldSelectors?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to select objects. A selector based on labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#label_selectors DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#label_selectors}
  */
  readonly labelSelectors?: { [key: string]: string };
  /**
  * Namespaces is a set of namespace to which objects belong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#namespaces DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Map of string keys and values that can be used to select nodes. Selector which must match a node's labels, and objects must belong to these selected nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#node_selectors DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#node_selectors}
  */
  readonly nodeSelectors?: { [key: string]: string };
  /**
  * Nodes is a set of node name and objects must belong to these nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#nodes DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#nodes}
  */
  readonly nodes?: string[];
  /**
  * PodPhaseSelectors is a set of condition of a pod at the current time. supported value: Pending / Running / Succeeded / Failed / Unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#pod_phase_selectors DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#pod_phase_selectors}
  */
  readonly podPhaseSelectors?: string[];
  /**
  * Pods is a map of string keys and a set values that used to select pods. The key defines the namespace which pods belong, and the each values is a set of pod names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#pods DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#pods}
  */
  readonly pods?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorToTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotationSelectors),
    expression_selectors: cdktf.listMapper(dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToTerraform, false)(struct!.expressionSelectors),
    field_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fieldSelectors),
    label_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labelSelectors),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    node_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelectors),
    nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodes),
    pod_phase_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podPhaseSelectors),
    pods: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.pods),
  }
}


export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorToHclTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToHclTerraform, false)(struct!.expressionSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsList",
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
    node_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pod_phase_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podPhaseSelectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pods: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.pods),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined {
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
    if (this._nodeSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectors = this._nodeSelectors;
    }
    if (this._nodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes;
    }
    if (this._podPhaseSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPhaseSelectors = this._podPhaseSelectors;
    }
    if (this._pods !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelectors = undefined;
      this._expressionSelectors.internalValue = undefined;
      this._fieldSelectors = undefined;
      this._labelSelectors = undefined;
      this._namespaces = undefined;
      this._nodeSelectors = undefined;
      this._nodes = undefined;
      this._podPhaseSelectors = undefined;
      this._pods = undefined;
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
      this._nodeSelectors = value.nodeSelectors;
      this._nodes = value.nodes;
      this._podPhaseSelectors = value.podPhaseSelectors;
      this._pods = value.pods;
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
  private _expressionSelectors = new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsList(this, "expression_selectors", false);
  public get expressionSelectors() {
    return this._expressionSelectors;
  }
  public putExpressionSelectors(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorExpressionSelectors[] | cdktf.IResolvable) {
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

  // node_selectors - computed: false, optional: true, required: false
  private _nodeSelectors?: { [key: string]: string }; 
  public get nodeSelectors() {
    return this.getStringMapAttribute('node_selectors');
  }
  public set nodeSelectors(value: { [key: string]: string }) {
    this._nodeSelectors = value;
  }
  public resetNodeSelectors() {
    this._nodeSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorsInput() {
    return this._nodeSelectors;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes?: string[]; 
  public get nodes() {
    return this.getListAttribute('nodes');
  }
  public set nodes(value: string[]) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // pod_phase_selectors - computed: false, optional: true, required: false
  private _podPhaseSelectors?: string[]; 
  public get podPhaseSelectors() {
    return this.getListAttribute('pod_phase_selectors');
  }
  public set podPhaseSelectors(value: string[]) {
    this._podPhaseSelectors = value;
  }
  public resetPodPhaseSelectors() {
    this._podPhaseSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPhaseSelectorsInput() {
    return this._podPhaseSelectors;
  }

  // pods - computed: false, optional: true, required: false
  private _pods?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get pods() {
    return this.interpolationForAttribute('pods');
  }
  public set pods(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._pods = value;
  }
  public resetPods() {
    this._pods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods;
  }
}
export interface DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectors {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#key DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#operator DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#values DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectorsToTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectors | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectorsToHclTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectors | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectors | cdktf.IResolvable | undefined) {
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

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectorsOutputReference {
    return new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelector {
  /**
  * Map of string keys and values that can be used to select objects. A selector based on annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#annotation_selectors DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#annotation_selectors}
  */
  readonly annotationSelectors?: { [key: string]: string };
  /**
  * a slice of label selector expressions that can be used to select objects. A list of selectors based on set-based label expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#expression_selectors DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#expression_selectors}
  */
  readonly expressionSelectors?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectors[] | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to select objects. A selector based on fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#field_selectors DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#field_selectors}
  */
  readonly fieldSelectors?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to select objects. A selector based on labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#label_selectors DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#label_selectors}
  */
  readonly labelSelectors?: { [key: string]: string };
  /**
  * Namespaces is a set of namespace to which objects belong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#namespaces DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Map of string keys and values that can be used to select nodes. Selector which must match a node's labels, and objects must belong to these selected nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#node_selectors DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#node_selectors}
  */
  readonly nodeSelectors?: { [key: string]: string };
  /**
  * Nodes is a set of node name and objects must belong to these nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#nodes DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#nodes}
  */
  readonly nodes?: string[];
  /**
  * PodPhaseSelectors is a set of condition of a pod at the current time. supported value: Pending / Running / Succeeded / Failed / Unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#pod_phase_selectors DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#pod_phase_selectors}
  */
  readonly podPhaseSelectors?: string[];
  /**
  * Pods is a map of string keys and a set values that used to select pods. The key defines the namespace which pods belong, and the each values is a set of pod names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#pods DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#pods}
  */
  readonly pods?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorToTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotationSelectors),
    expression_selectors: cdktf.listMapper(dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectorsToTerraform, false)(struct!.expressionSelectors),
    field_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fieldSelectors),
    label_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labelSelectors),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    node_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelectors),
    nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodes),
    pod_phase_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podPhaseSelectors),
    pods: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.pods),
  }
}


export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorToHclTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelector | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectorsToHclTerraform, false)(struct!.expressionSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectorsList",
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
    node_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pod_phase_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podPhaseSelectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pods: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.pods),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelector | cdktf.IResolvable | undefined {
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
    if (this._nodeSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectors = this._nodeSelectors;
    }
    if (this._nodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes;
    }
    if (this._podPhaseSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPhaseSelectors = this._podPhaseSelectors;
    }
    if (this._pods !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelectors = undefined;
      this._expressionSelectors.internalValue = undefined;
      this._fieldSelectors = undefined;
      this._labelSelectors = undefined;
      this._namespaces = undefined;
      this._nodeSelectors = undefined;
      this._nodes = undefined;
      this._podPhaseSelectors = undefined;
      this._pods = undefined;
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
      this._nodeSelectors = value.nodeSelectors;
      this._nodes = value.nodes;
      this._podPhaseSelectors = value.podPhaseSelectors;
      this._pods = value.pods;
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
  private _expressionSelectors = new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectorsList(this, "expression_selectors", false);
  public get expressionSelectors() {
    return this._expressionSelectors;
  }
  public putExpressionSelectors(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorExpressionSelectors[] | cdktf.IResolvable) {
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

  // node_selectors - computed: false, optional: true, required: false
  private _nodeSelectors?: { [key: string]: string }; 
  public get nodeSelectors() {
    return this.getStringMapAttribute('node_selectors');
  }
  public set nodeSelectors(value: { [key: string]: string }) {
    this._nodeSelectors = value;
  }
  public resetNodeSelectors() {
    this._nodeSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorsInput() {
    return this._nodeSelectors;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes?: string[]; 
  public get nodes() {
    return this.getListAttribute('nodes');
  }
  public set nodes(value: string[]) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // pod_phase_selectors - computed: false, optional: true, required: false
  private _podPhaseSelectors?: string[]; 
  public get podPhaseSelectors() {
    return this.getListAttribute('pod_phase_selectors');
  }
  public set podPhaseSelectors(value: string[]) {
    this._podPhaseSelectors = value;
  }
  public resetPodPhaseSelectors() {
    this._podPhaseSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPhaseSelectorsInput() {
    return this._podPhaseSelectors;
  }

  // pods - computed: false, optional: true, required: false
  private _pods?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get pods() {
    return this.interpolationForAttribute('pods');
  }
  public set pods(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._pods = value;
  }
  public resetPods() {
    this._pods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods;
  }
}
export interface DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTarget {
  /**
  * Mode defines the mode to run chaos action. Supported mode: one / all / fixed / fixed-percent / random-max-percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#mode DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#mode}
  */
  readonly mode: string;
  /**
  * Selector is used to select pods that are used to inject chaos action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#selector DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#selector}
  */
  readonly selector: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelector;
  /**
  * Value is required when the mode is set to 'FixedMode' / 'FixedPercentMode' / 'RandomMaxPercentMode'. If 'FixedMode', provide an integer of pods to do chaos action. If 'FixedPercentMode', provide a number from 0-100 to specify the percent of pods the server can do chaos action. IF 'RandomMaxPercentMode', provide a number from 0-100 to specify the max percent of pods to do chaos action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#value DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetToTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    selector: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorToTerraform(struct!.selector),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetToHclTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelector",
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

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._selector.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._selector.internalValue = value.selector;
      this._value = value.value;
    }
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

  // selector - computed: false, optional: false, required: true
  private _selector = new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
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
export interface DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpec {
  /**
  * Action defines the specific network chaos action. Supported action: partition, netem, delay, loss, duplicate, corrupt Default action: delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#action DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#action}
  */
  readonly action: string;
  /**
  * Bandwidth represents the detail about bandwidth control action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#bandwidth DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#bandwidth}
  */
  readonly bandwidth?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecBandwidth;
  /**
  * Corrupt represents the detail about corrupt action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#corrupt DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#corrupt}
  */
  readonly corrupt?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecCorrupt;
  /**
  * Delay represents the detail about delay action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#delay DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#delay}
  */
  readonly delay?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelay;
  /**
  * Device represents the network device to be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#device DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#device}
  */
  readonly device?: string;
  /**
  * Direction represents the direction, this applies on netem and network partition action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#direction DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#direction}
  */
  readonly direction?: string;
  /**
  * DuplicateSpec represents the detail about loss action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#duplicate DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#duplicate}
  */
  readonly duplicate?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDuplicate;
  /**
  * Duration represents the duration of the chaos action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#duration DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * ExternalTargets represents network targets outside k8s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#external_targets DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#external_targets}
  */
  readonly externalTargets?: string[];
  /**
  * Loss represents the detail about loss action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#loss DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#loss}
  */
  readonly loss?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecLoss;
  /**
  * Mode defines the mode to run chaos action. Supported mode: one / all / fixed / fixed-percent / random-max-percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#mode DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#mode}
  */
  readonly mode: string;
  /**
  * Rate represents the detail about rate control action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#rate DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#rate}
  */
  readonly rate?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecRate;
  /**
  * RemoteCluster represents the remote cluster where the chaos will be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#remote_cluster DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#remote_cluster}
  */
  readonly remoteCluster?: string;
  /**
  * Selector is used to select pods that are used to inject chaos action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#selector DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#selector}
  */
  readonly selector: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelector;
  /**
  * Target represents network target, this applies on netem and network partition action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#target DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#target}
  */
  readonly target?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTarget;
  /**
  * TargetDevice represents the network device to be affected in target scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#target_device DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#target_device}
  */
  readonly targetDevice?: string;
  /**
  * Value is required when the mode is set to 'FixedMode' / 'FixedPercentMode' / 'RandomMaxPercentMode'. If 'FixedMode', provide an integer of pods to do chaos action. If 'FixedPercentMode', provide a number from 0-100 to specify the percent of pods the server can do chaos action. IF 'RandomMaxPercentMode', provide a number from 0-100 to specify the max percent of pods to do chaos action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#value DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecToTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    bandwidth: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecBandwidthToTerraform(struct!.bandwidth),
    corrupt: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecCorruptToTerraform(struct!.corrupt),
    delay: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayToTerraform(struct!.delay),
    device: cdktf.stringToTerraform(struct!.device),
    direction: cdktf.stringToTerraform(struct!.direction),
    duplicate: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDuplicateToTerraform(struct!.duplicate),
    duration: cdktf.stringToTerraform(struct!.duration),
    external_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalTargets),
    loss: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecLossToTerraform(struct!.loss),
    mode: cdktf.stringToTerraform(struct!.mode),
    rate: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecRateToTerraform(struct!.rate),
    remote_cluster: cdktf.stringToTerraform(struct!.remoteCluster),
    selector: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorToTerraform(struct!.selector),
    target: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetToTerraform(struct!.target),
    target_device: cdktf.stringToTerraform(struct!.targetDevice),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
    bandwidth: {
      value: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecBandwidthToHclTerraform(struct!.bandwidth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecBandwidth",
    },
    corrupt: {
      value: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecCorruptToHclTerraform(struct!.corrupt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecCorrupt",
    },
    delay: {
      value: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelay",
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
    duplicate: {
      value: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDuplicateToHclTerraform(struct!.duplicate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDuplicate",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalTargets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    loss: {
      value: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecLossToHclTerraform(struct!.loss),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecLoss",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecRateToHclTerraform(struct!.rate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecRate",
    },
    remote_cluster: {
      value: cdktf.stringToHclTerraform(struct!.remoteCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelector",
    },
    target: {
      value: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTarget",
    },
    target_device: {
      value: cdktf.stringToHclTerraform(struct!.targetDevice),
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

export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
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
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._duplicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplicate = this._duplicate?.internalValue;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._externalTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTargets = this._externalTargets;
    }
    if (this._loss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loss = this._loss?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._rate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate?.internalValue;
    }
    if (this._remoteCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteCluster = this._remoteCluster;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._targetDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDevice = this._targetDevice;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._bandwidth.internalValue = undefined;
      this._corrupt.internalValue = undefined;
      this._delay.internalValue = undefined;
      this._device = undefined;
      this._direction = undefined;
      this._duplicate.internalValue = undefined;
      this._duration = undefined;
      this._externalTargets = undefined;
      this._loss.internalValue = undefined;
      this._mode = undefined;
      this._rate.internalValue = undefined;
      this._remoteCluster = undefined;
      this._selector.internalValue = undefined;
      this._target.internalValue = undefined;
      this._targetDevice = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._bandwidth.internalValue = value.bandwidth;
      this._corrupt.internalValue = value.corrupt;
      this._delay.internalValue = value.delay;
      this._device = value.device;
      this._direction = value.direction;
      this._duplicate.internalValue = value.duplicate;
      this._duration = value.duration;
      this._externalTargets = value.externalTargets;
      this._loss.internalValue = value.loss;
      this._mode = value.mode;
      this._rate.internalValue = value.rate;
      this._remoteCluster = value.remoteCluster;
      this._selector.internalValue = value.selector;
      this._target.internalValue = value.target;
      this._targetDevice = value.targetDevice;
      this._value = value.value;
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

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth = new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecBandwidthOutputReference(this, "bandwidth");
  public get bandwidth() {
    return this._bandwidth;
  }
  public putBandwidth(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecBandwidth) {
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
  private _corrupt = new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecCorruptOutputReference(this, "corrupt");
  public get corrupt() {
    return this._corrupt;
  }
  public putCorrupt(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecCorrupt) {
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
  private _delay = new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDelay) {
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

  // duplicate - computed: false, optional: true, required: false
  private _duplicate = new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDuplicateOutputReference(this, "duplicate");
  public get duplicate() {
    return this._duplicate;
  }
  public putDuplicate(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecDuplicate) {
    this._duplicate.internalValue = value;
  }
  public resetDuplicate() {
    this._duplicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateInput() {
    return this._duplicate.internalValue;
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

  // external_targets - computed: false, optional: true, required: false
  private _externalTargets?: string[]; 
  public get externalTargets() {
    return this.getListAttribute('external_targets');
  }
  public set externalTargets(value: string[]) {
    this._externalTargets = value;
  }
  public resetExternalTargets() {
    this._externalTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTargetsInput() {
    return this._externalTargets;
  }

  // loss - computed: false, optional: true, required: false
  private _loss = new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecLossOutputReference(this, "loss");
  public get loss() {
    return this._loss;
  }
  public putLoss(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecLoss) {
    this._loss.internalValue = value;
  }
  public resetLoss() {
    this._loss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossInput() {
    return this._loss.internalValue;
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

  // rate - computed: false, optional: true, required: false
  private _rate = new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecRateOutputReference(this, "rate");
  public get rate() {
    return this._rate;
  }
  public putRate(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecRate) {
    this._rate.internalValue = value;
  }
  public resetRate() {
    this._rate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate.internalValue;
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

  // selector - computed: false, optional: false, required: true
  private _selector = new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // target_device - computed: false, optional: true, required: false
  private _targetDevice?: string; 
  public get targetDevice() {
    return this.getStringAttribute('target_device');
  }
  public set targetDevice(value: string) {
    this._targetDevice = value;
  }
  public resetTargetDevice() {
    this._targetDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDeviceInput() {
    return this._targetDevice;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest k8s_chaos_mesh_org_network_chaos_v1alpha1_manifest}
*/
export class DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_chaos_mesh_org_network_chaos_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SChaosMeshOrgNetworkChaosV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_chaos_mesh_org_network_chaos_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_network_chaos_v1alpha1_manifest k8s_chaos_mesh_org_network_chaos_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_chaos_mesh_org_network_chaos_v1alpha1_manifest',
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
  private _metadata = new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpec) {
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
      metadata: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgNetworkChaosV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
