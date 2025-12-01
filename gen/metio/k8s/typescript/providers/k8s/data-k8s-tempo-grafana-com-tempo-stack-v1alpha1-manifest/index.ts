// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#metadata DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestMetadata;
  /**
  * TempoStackSpec defines the desired state of TempoStack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#spec DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpec;
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#annotations DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#labels DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#namespace DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecExtraConfig {
  /**
  * Tempo defines any extra Tempo configuration, which will be merged with the operator's generated Tempo configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tempo DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tempo}
  */
  readonly tempo?: { [key: string]: string };
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecExtraConfigToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecExtraConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tempo: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tempo),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecExtraConfigToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecExtraConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tempo: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tempo),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecExtraConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecExtraConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tempo !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempo = this._tempo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecExtraConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tempo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tempo = value.tempo;
    }
  }

  // tempo - computed: false, optional: true, required: false
  private _tempo?: { [key: string]: string }; 
  public get tempo() {
    return this.getStringMapAttribute('tempo');
  }
  public set tempo(value: { [key: string]: string }) {
    this._tempo = value;
  }
  public resetTempo() {
    this._tempo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempoInput() {
    return this._tempo;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingMemberlistStruct {
  /**
  * EnableIPv6 enables IPv6 support for the memberlist based hash ring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#enable_i_pv6 DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#enable_i_pv6}
  */
  readonly enableIPv6?: boolean | cdktf.IResolvable;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingMemberlistStructToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingMemberlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_i_pv6: cdktf.booleanToTerraform(struct!.enableIPv6),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingMemberlistStructToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingMemberlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_i_pv6: {
      value: cdktf.booleanToHclTerraform(struct!.enableIPv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingMemberlistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingMemberlistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIPv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIPv6 = this._enableIPv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingMemberlistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableIPv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableIPv6 = value.enableIPv6;
    }
  }

  // enable_i_pv6 - computed: false, optional: true, required: false
  private _enableIPv6?: boolean | cdktf.IResolvable; 
  public get enableIPv6() {
    return this.getBooleanAttribute('enable_i_pv6');
  }
  public set enableIPv6(value: boolean | cdktf.IResolvable) {
    this._enableIPv6 = value;
  }
  public resetEnableIPv6() {
    this._enableIPv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIPv6Input() {
    return this._enableIPv6;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRing {
  /**
  * MemberList configuration spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#memberlist DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#memberlist}
  */
  readonly memberlist?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingMemberlistStruct;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memberlist: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingMemberlistStructToTerraform(struct!.memberlist),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memberlist: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingMemberlistStructToHclTerraform(struct!.memberlist),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingMemberlistStruct",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberlist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberlist = this._memberlist?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberlist.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberlist.internalValue = value.memberlist;
    }
  }

  // memberlist - computed: false, optional: true, required: false
  private _memberlist = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingMemberlistStructOutputReference(this, "memberlist");
  public get memberlist() {
    return this._memberlist;
  }
  public putMemberlist(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingMemberlistStruct) {
    this._memberlist.internalValue = value;
  }
  public resetMemberlist() {
    this._memberlist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberlistInput() {
    return this._memberlist.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecImages {
  /**
  * JaegerQuery defines the tempo-query container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#jaeger_query DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#jaeger_query}
  */
  readonly jaegerQuery?: string;
  /**
  * OauthProxy defines the oauth proxy image used to protect the jaegerUI on single tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#oauth_proxy DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#oauth_proxy}
  */
  readonly oauthProxy?: string;
  /**
  * Tempo defines the tempo container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tempo DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tempo}
  */
  readonly tempo?: string;
  /**
  * TempoGateway defines the tempo-gateway container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tempo_gateway DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tempo_gateway}
  */
  readonly tempoGateway?: string;
  /**
  * TempoGatewayOpa defines the OPA sidecar container for TempoGateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tempo_gateway_opa DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tempo_gateway_opa}
  */
  readonly tempoGatewayOpa?: string;
  /**
  * TempoQuery defines the tempo-query container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tempo_query DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tempo_query}
  */
  readonly tempoQuery?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecImagesToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jaeger_query: cdktf.stringToTerraform(struct!.jaegerQuery),
    oauth_proxy: cdktf.stringToTerraform(struct!.oauthProxy),
    tempo: cdktf.stringToTerraform(struct!.tempo),
    tempo_gateway: cdktf.stringToTerraform(struct!.tempoGateway),
    tempo_gateway_opa: cdktf.stringToTerraform(struct!.tempoGatewayOpa),
    tempo_query: cdktf.stringToTerraform(struct!.tempoQuery),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecImagesToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jaeger_query: {
      value: cdktf.stringToHclTerraform(struct!.jaegerQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_proxy: {
      value: cdktf.stringToHclTerraform(struct!.oauthProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tempo: {
      value: cdktf.stringToHclTerraform(struct!.tempo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tempo_gateway: {
      value: cdktf.stringToHclTerraform(struct!.tempoGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tempo_gateway_opa: {
      value: cdktf.stringToHclTerraform(struct!.tempoGatewayOpa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tempo_query: {
      value: cdktf.stringToHclTerraform(struct!.tempoQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecImagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jaegerQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.jaegerQuery = this._jaegerQuery;
    }
    if (this._oauthProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthProxy = this._oauthProxy;
    }
    if (this._tempo !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempo = this._tempo;
    }
    if (this._tempoGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempoGateway = this._tempoGateway;
    }
    if (this._tempoGatewayOpa !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempoGatewayOpa = this._tempoGatewayOpa;
    }
    if (this._tempoQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempoQuery = this._tempoQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jaegerQuery = undefined;
      this._oauthProxy = undefined;
      this._tempo = undefined;
      this._tempoGateway = undefined;
      this._tempoGatewayOpa = undefined;
      this._tempoQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jaegerQuery = value.jaegerQuery;
      this._oauthProxy = value.oauthProxy;
      this._tempo = value.tempo;
      this._tempoGateway = value.tempoGateway;
      this._tempoGatewayOpa = value.tempoGatewayOpa;
      this._tempoQuery = value.tempoQuery;
    }
  }

  // jaeger_query - computed: false, optional: true, required: false
  private _jaegerQuery?: string; 
  public get jaegerQuery() {
    return this.getStringAttribute('jaeger_query');
  }
  public set jaegerQuery(value: string) {
    this._jaegerQuery = value;
  }
  public resetJaegerQuery() {
    this._jaegerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jaegerQueryInput() {
    return this._jaegerQuery;
  }

  // oauth_proxy - computed: false, optional: true, required: false
  private _oauthProxy?: string; 
  public get oauthProxy() {
    return this.getStringAttribute('oauth_proxy');
  }
  public set oauthProxy(value: string) {
    this._oauthProxy = value;
  }
  public resetOauthProxy() {
    this._oauthProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthProxyInput() {
    return this._oauthProxy;
  }

  // tempo - computed: false, optional: true, required: false
  private _tempo?: string; 
  public get tempo() {
    return this.getStringAttribute('tempo');
  }
  public set tempo(value: string) {
    this._tempo = value;
  }
  public resetTempo() {
    this._tempo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempoInput() {
    return this._tempo;
  }

  // tempo_gateway - computed: false, optional: true, required: false
  private _tempoGateway?: string; 
  public get tempoGateway() {
    return this.getStringAttribute('tempo_gateway');
  }
  public set tempoGateway(value: string) {
    this._tempoGateway = value;
  }
  public resetTempoGateway() {
    this._tempoGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempoGatewayInput() {
    return this._tempoGateway;
  }

  // tempo_gateway_opa - computed: false, optional: true, required: false
  private _tempoGatewayOpa?: string; 
  public get tempoGatewayOpa() {
    return this.getStringAttribute('tempo_gateway_opa');
  }
  public set tempoGatewayOpa(value: string) {
    this._tempoGatewayOpa = value;
  }
  public resetTempoGatewayOpa() {
    this._tempoGatewayOpa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempoGatewayOpaInput() {
    return this._tempoGatewayOpa;
  }

  // tempo_query - computed: false, optional: true, required: false
  private _tempoQuery?: string; 
  public get tempoQuery() {
    return this.getStringAttribute('tempo_query');
  }
  public set tempoQuery(value: string) {
    this._tempoQuery = value;
  }
  public resetTempoQuery() {
    this._tempoQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempoQueryInput() {
    return this._tempoQuery;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalIngestion {
  /**
  * IngestionBurstSizeBytes defines the burst size (bytes) used in ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#ingestion_burst_size_bytes DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#ingestion_burst_size_bytes}
  */
  readonly ingestionBurstSizeBytes?: number;
  /**
  * IngestionRateLimitBytes defines the Per-user ingestion rate limit (bytes) used in ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#ingestion_rate_limit_bytes DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#ingestion_rate_limit_bytes}
  */
  readonly ingestionRateLimitBytes?: number;
  /**
  * MaxBytesPerTrace defines the maximum number of bytes of an acceptable trace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#max_bytes_per_trace DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#max_bytes_per_trace}
  */
  readonly maxBytesPerTrace?: number;
  /**
  * MaxTracesPerUser defines the maximum number of traces a user can send.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#max_traces_per_user DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#max_traces_per_user}
  */
  readonly maxTracesPerUser?: number;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalIngestionToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalIngestion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingestion_burst_size_bytes: cdktf.numberToTerraform(struct!.ingestionBurstSizeBytes),
    ingestion_rate_limit_bytes: cdktf.numberToTerraform(struct!.ingestionRateLimitBytes),
    max_bytes_per_trace: cdktf.numberToTerraform(struct!.maxBytesPerTrace),
    max_traces_per_user: cdktf.numberToTerraform(struct!.maxTracesPerUser),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalIngestionToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalIngestion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingestion_burst_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.ingestionBurstSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingestion_rate_limit_bytes: {
      value: cdktf.numberToHclTerraform(struct!.ingestionRateLimitBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_per_trace: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesPerTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_traces_per_user: {
      value: cdktf.numberToHclTerraform(struct!.maxTracesPerUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalIngestionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalIngestion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingestionBurstSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionBurstSizeBytes = this._ingestionBurstSizeBytes;
    }
    if (this._ingestionRateLimitBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionRateLimitBytes = this._ingestionRateLimitBytes;
    }
    if (this._maxBytesPerTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesPerTrace = this._maxBytesPerTrace;
    }
    if (this._maxTracesPerUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTracesPerUser = this._maxTracesPerUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalIngestion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingestionBurstSizeBytes = undefined;
      this._ingestionRateLimitBytes = undefined;
      this._maxBytesPerTrace = undefined;
      this._maxTracesPerUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingestionBurstSizeBytes = value.ingestionBurstSizeBytes;
      this._ingestionRateLimitBytes = value.ingestionRateLimitBytes;
      this._maxBytesPerTrace = value.maxBytesPerTrace;
      this._maxTracesPerUser = value.maxTracesPerUser;
    }
  }

  // ingestion_burst_size_bytes - computed: false, optional: true, required: false
  private _ingestionBurstSizeBytes?: number; 
  public get ingestionBurstSizeBytes() {
    return this.getNumberAttribute('ingestion_burst_size_bytes');
  }
  public set ingestionBurstSizeBytes(value: number) {
    this._ingestionBurstSizeBytes = value;
  }
  public resetIngestionBurstSizeBytes() {
    this._ingestionBurstSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionBurstSizeBytesInput() {
    return this._ingestionBurstSizeBytes;
  }

  // ingestion_rate_limit_bytes - computed: false, optional: true, required: false
  private _ingestionRateLimitBytes?: number; 
  public get ingestionRateLimitBytes() {
    return this.getNumberAttribute('ingestion_rate_limit_bytes');
  }
  public set ingestionRateLimitBytes(value: number) {
    this._ingestionRateLimitBytes = value;
  }
  public resetIngestionRateLimitBytes() {
    this._ingestionRateLimitBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionRateLimitBytesInput() {
    return this._ingestionRateLimitBytes;
  }

  // max_bytes_per_trace - computed: false, optional: true, required: false
  private _maxBytesPerTrace?: number; 
  public get maxBytesPerTrace() {
    return this.getNumberAttribute('max_bytes_per_trace');
  }
  public set maxBytesPerTrace(value: number) {
    this._maxBytesPerTrace = value;
  }
  public resetMaxBytesPerTrace() {
    this._maxBytesPerTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesPerTraceInput() {
    return this._maxBytesPerTrace;
  }

  // max_traces_per_user - computed: false, optional: true, required: false
  private _maxTracesPerUser?: number; 
  public get maxTracesPerUser() {
    return this.getNumberAttribute('max_traces_per_user');
  }
  public set maxTracesPerUser(value: number) {
    this._maxTracesPerUser = value;
  }
  public resetMaxTracesPerUser() {
    this._maxTracesPerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTracesPerUserInput() {
    return this._maxTracesPerUser;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalQuery {
  /**
  * MaxBytesPerTagValues defines the maximum size in bytes of a tag-values query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#max_bytes_per_tag_values DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#max_bytes_per_tag_values}
  */
  readonly maxBytesPerTagValues?: number;
  /**
  * DEPRECATED. MaxSearchBytesPerTrace defines the maximum size of search data for a single trace in bytes. default: '0' to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#max_search_bytes_per_trace DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#max_search_bytes_per_trace}
  */
  readonly maxSearchBytesPerTrace?: number;
  /**
  * MaxSearchDuration defines the maximum allowed time range for a search. If this value is not set, then spec.search.maxDuration is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#max_search_duration DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#max_search_duration}
  */
  readonly maxSearchDuration?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalQueryToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes_per_tag_values: cdktf.numberToTerraform(struct!.maxBytesPerTagValues),
    max_search_bytes_per_trace: cdktf.numberToTerraform(struct!.maxSearchBytesPerTrace),
    max_search_duration: cdktf.stringToTerraform(struct!.maxSearchDuration),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalQueryToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes_per_tag_values: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesPerTagValues),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_search_bytes_per_trace: {
      value: cdktf.numberToHclTerraform(struct!.maxSearchBytesPerTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_search_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxSearchDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytesPerTagValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesPerTagValues = this._maxBytesPerTagValues;
    }
    if (this._maxSearchBytesPerTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSearchBytesPerTrace = this._maxSearchBytesPerTrace;
    }
    if (this._maxSearchDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSearchDuration = this._maxSearchDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxBytesPerTagValues = undefined;
      this._maxSearchBytesPerTrace = undefined;
      this._maxSearchDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxBytesPerTagValues = value.maxBytesPerTagValues;
      this._maxSearchBytesPerTrace = value.maxSearchBytesPerTrace;
      this._maxSearchDuration = value.maxSearchDuration;
    }
  }

  // max_bytes_per_tag_values - computed: false, optional: true, required: false
  private _maxBytesPerTagValues?: number; 
  public get maxBytesPerTagValues() {
    return this.getNumberAttribute('max_bytes_per_tag_values');
  }
  public set maxBytesPerTagValues(value: number) {
    this._maxBytesPerTagValues = value;
  }
  public resetMaxBytesPerTagValues() {
    this._maxBytesPerTagValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesPerTagValuesInput() {
    return this._maxBytesPerTagValues;
  }

  // max_search_bytes_per_trace - computed: false, optional: true, required: false
  private _maxSearchBytesPerTrace?: number; 
  public get maxSearchBytesPerTrace() {
    return this.getNumberAttribute('max_search_bytes_per_trace');
  }
  public set maxSearchBytesPerTrace(value: number) {
    this._maxSearchBytesPerTrace = value;
  }
  public resetMaxSearchBytesPerTrace() {
    this._maxSearchBytesPerTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSearchBytesPerTraceInput() {
    return this._maxSearchBytesPerTrace;
  }

  // max_search_duration - computed: false, optional: true, required: false
  private _maxSearchDuration?: string; 
  public get maxSearchDuration() {
    return this.getStringAttribute('max_search_duration');
  }
  public set maxSearchDuration(value: string) {
    this._maxSearchDuration = value;
  }
  public resetMaxSearchDuration() {
    this._maxSearchDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSearchDurationInput() {
    return this._maxSearchDuration;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobal {
  /**
  * Ingestion is used to define ingestion rate limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#ingestion DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#ingestion}
  */
  readonly ingestion?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalIngestion;
  /**
  * Query is used to define query rate limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#query DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#query}
  */
  readonly query?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalQuery;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingestion: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalIngestionToTerraform(struct!.ingestion),
    query: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalQueryToTerraform(struct!.query),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingestion: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalIngestionToHclTerraform(struct!.ingestion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalIngestion",
    },
    query: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalQuery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingestion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestion = this._ingestion?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingestion.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingestion.internalValue = value.ingestion;
      this._query.internalValue = value.query;
    }
  }

  // ingestion - computed: false, optional: true, required: false
  private _ingestion = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalIngestionOutputReference(this, "ingestion");
  public get ingestion() {
    return this._ingestion;
  }
  public putIngestion(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalIngestion) {
    this._ingestion.internalValue = value;
  }
  public resetIngestion() {
    this._ingestion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionInput() {
    return this._ingestion.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantIngestion {
  /**
  * IngestionBurstSizeBytes defines the burst size (bytes) used in ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#ingestion_burst_size_bytes DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#ingestion_burst_size_bytes}
  */
  readonly ingestionBurstSizeBytes?: number;
  /**
  * IngestionRateLimitBytes defines the Per-user ingestion rate limit (bytes) used in ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#ingestion_rate_limit_bytes DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#ingestion_rate_limit_bytes}
  */
  readonly ingestionRateLimitBytes?: number;
  /**
  * MaxBytesPerTrace defines the maximum number of bytes of an acceptable trace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#max_bytes_per_trace DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#max_bytes_per_trace}
  */
  readonly maxBytesPerTrace?: number;
  /**
  * MaxTracesPerUser defines the maximum number of traces a user can send.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#max_traces_per_user DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#max_traces_per_user}
  */
  readonly maxTracesPerUser?: number;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantIngestionToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantIngestion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingestion_burst_size_bytes: cdktf.numberToTerraform(struct!.ingestionBurstSizeBytes),
    ingestion_rate_limit_bytes: cdktf.numberToTerraform(struct!.ingestionRateLimitBytes),
    max_bytes_per_trace: cdktf.numberToTerraform(struct!.maxBytesPerTrace),
    max_traces_per_user: cdktf.numberToTerraform(struct!.maxTracesPerUser),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantIngestionToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantIngestion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingestion_burst_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.ingestionBurstSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingestion_rate_limit_bytes: {
      value: cdktf.numberToHclTerraform(struct!.ingestionRateLimitBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_per_trace: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesPerTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_traces_per_user: {
      value: cdktf.numberToHclTerraform(struct!.maxTracesPerUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantIngestionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantIngestion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingestionBurstSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionBurstSizeBytes = this._ingestionBurstSizeBytes;
    }
    if (this._ingestionRateLimitBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionRateLimitBytes = this._ingestionRateLimitBytes;
    }
    if (this._maxBytesPerTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesPerTrace = this._maxBytesPerTrace;
    }
    if (this._maxTracesPerUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTracesPerUser = this._maxTracesPerUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantIngestion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingestionBurstSizeBytes = undefined;
      this._ingestionRateLimitBytes = undefined;
      this._maxBytesPerTrace = undefined;
      this._maxTracesPerUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingestionBurstSizeBytes = value.ingestionBurstSizeBytes;
      this._ingestionRateLimitBytes = value.ingestionRateLimitBytes;
      this._maxBytesPerTrace = value.maxBytesPerTrace;
      this._maxTracesPerUser = value.maxTracesPerUser;
    }
  }

  // ingestion_burst_size_bytes - computed: false, optional: true, required: false
  private _ingestionBurstSizeBytes?: number; 
  public get ingestionBurstSizeBytes() {
    return this.getNumberAttribute('ingestion_burst_size_bytes');
  }
  public set ingestionBurstSizeBytes(value: number) {
    this._ingestionBurstSizeBytes = value;
  }
  public resetIngestionBurstSizeBytes() {
    this._ingestionBurstSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionBurstSizeBytesInput() {
    return this._ingestionBurstSizeBytes;
  }

  // ingestion_rate_limit_bytes - computed: false, optional: true, required: false
  private _ingestionRateLimitBytes?: number; 
  public get ingestionRateLimitBytes() {
    return this.getNumberAttribute('ingestion_rate_limit_bytes');
  }
  public set ingestionRateLimitBytes(value: number) {
    this._ingestionRateLimitBytes = value;
  }
  public resetIngestionRateLimitBytes() {
    this._ingestionRateLimitBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionRateLimitBytesInput() {
    return this._ingestionRateLimitBytes;
  }

  // max_bytes_per_trace - computed: false, optional: true, required: false
  private _maxBytesPerTrace?: number; 
  public get maxBytesPerTrace() {
    return this.getNumberAttribute('max_bytes_per_trace');
  }
  public set maxBytesPerTrace(value: number) {
    this._maxBytesPerTrace = value;
  }
  public resetMaxBytesPerTrace() {
    this._maxBytesPerTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesPerTraceInput() {
    return this._maxBytesPerTrace;
  }

  // max_traces_per_user - computed: false, optional: true, required: false
  private _maxTracesPerUser?: number; 
  public get maxTracesPerUser() {
    return this.getNumberAttribute('max_traces_per_user');
  }
  public set maxTracesPerUser(value: number) {
    this._maxTracesPerUser = value;
  }
  public resetMaxTracesPerUser() {
    this._maxTracesPerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTracesPerUserInput() {
    return this._maxTracesPerUser;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantQuery {
  /**
  * MaxBytesPerTagValues defines the maximum size in bytes of a tag-values query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#max_bytes_per_tag_values DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#max_bytes_per_tag_values}
  */
  readonly maxBytesPerTagValues?: number;
  /**
  * DEPRECATED. MaxSearchBytesPerTrace defines the maximum size of search data for a single trace in bytes. default: '0' to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#max_search_bytes_per_trace DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#max_search_bytes_per_trace}
  */
  readonly maxSearchBytesPerTrace?: number;
  /**
  * MaxSearchDuration defines the maximum allowed time range for a search. If this value is not set, then spec.search.maxDuration is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#max_search_duration DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#max_search_duration}
  */
  readonly maxSearchDuration?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantQueryToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes_per_tag_values: cdktf.numberToTerraform(struct!.maxBytesPerTagValues),
    max_search_bytes_per_trace: cdktf.numberToTerraform(struct!.maxSearchBytesPerTrace),
    max_search_duration: cdktf.stringToTerraform(struct!.maxSearchDuration),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantQueryToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes_per_tag_values: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesPerTagValues),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_search_bytes_per_trace: {
      value: cdktf.numberToHclTerraform(struct!.maxSearchBytesPerTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_search_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxSearchDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytesPerTagValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesPerTagValues = this._maxBytesPerTagValues;
    }
    if (this._maxSearchBytesPerTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSearchBytesPerTrace = this._maxSearchBytesPerTrace;
    }
    if (this._maxSearchDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSearchDuration = this._maxSearchDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxBytesPerTagValues = undefined;
      this._maxSearchBytesPerTrace = undefined;
      this._maxSearchDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxBytesPerTagValues = value.maxBytesPerTagValues;
      this._maxSearchBytesPerTrace = value.maxSearchBytesPerTrace;
      this._maxSearchDuration = value.maxSearchDuration;
    }
  }

  // max_bytes_per_tag_values - computed: false, optional: true, required: false
  private _maxBytesPerTagValues?: number; 
  public get maxBytesPerTagValues() {
    return this.getNumberAttribute('max_bytes_per_tag_values');
  }
  public set maxBytesPerTagValues(value: number) {
    this._maxBytesPerTagValues = value;
  }
  public resetMaxBytesPerTagValues() {
    this._maxBytesPerTagValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesPerTagValuesInput() {
    return this._maxBytesPerTagValues;
  }

  // max_search_bytes_per_trace - computed: false, optional: true, required: false
  private _maxSearchBytesPerTrace?: number; 
  public get maxSearchBytesPerTrace() {
    return this.getNumberAttribute('max_search_bytes_per_trace');
  }
  public set maxSearchBytesPerTrace(value: number) {
    this._maxSearchBytesPerTrace = value;
  }
  public resetMaxSearchBytesPerTrace() {
    this._maxSearchBytesPerTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSearchBytesPerTraceInput() {
    return this._maxSearchBytesPerTrace;
  }

  // max_search_duration - computed: false, optional: true, required: false
  private _maxSearchDuration?: string; 
  public get maxSearchDuration() {
    return this.getStringAttribute('max_search_duration');
  }
  public set maxSearchDuration(value: string) {
    this._maxSearchDuration = value;
  }
  public resetMaxSearchDuration() {
    this._maxSearchDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSearchDurationInput() {
    return this._maxSearchDuration;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenant {
  /**
  * Ingestion is used to define ingestion rate limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#ingestion DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#ingestion}
  */
  readonly ingestion?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantIngestion;
  /**
  * Query is used to define query rate limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#query DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#query}
  */
  readonly query?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantQuery;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingestion: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantIngestionToTerraform(struct!.ingestion),
    query: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantQueryToTerraform(struct!.query),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingestion: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantIngestionToHclTerraform(struct!.ingestion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantIngestion",
    },
    query: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantQuery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingestion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestion = this._ingestion?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingestion.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingestion.internalValue = value.ingestion;
      this._query.internalValue = value.query;
    }
  }

  // ingestion - computed: false, optional: true, required: false
  private _ingestion = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantIngestionOutputReference(this, "ingestion");
  public get ingestion() {
    return this._ingestion;
  }
  public putIngestion(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantIngestion) {
    this._ingestion.internalValue = value;
  }
  public resetIngestion() {
    this._ingestion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionInput() {
    return this._ingestion.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimits {
  /**
  * Global is used to define global rate limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#global DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#global}
  */
  readonly global?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobal;
  /**
  * PerTenant is used to define rate limits per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#per_tenant DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#per_tenant}
  */
  readonly perTenant?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenant;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalToTerraform(struct!.global),
    per_tenant: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantToTerraform(struct!.perTenant),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobal",
    },
    per_tenant: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantToHclTerraform(struct!.perTenant),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenant",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._perTenant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTenant = this._perTenant?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._global.internalValue = undefined;
      this._perTenant.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._global.internalValue = value.global;
      this._perTenant.internalValue = value.perTenant;
    }
  }

  // global - computed: false, optional: true, required: false
  private _global = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsGlobal) {
    this._global.internalValue = value;
  }
  public resetGlobal() {
    this._global.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // per_tenant - computed: false, optional: true, required: false
  private _perTenant = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenantOutputReference(this, "per_tenant");
  public get perTenant() {
    return this._perTenant;
  }
  public putPerTenant(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsPerTenant) {
    this._perTenant.internalValue = value;
  }
  public resetPerTenant() {
    this._perTenant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTenantInput() {
    return this._perTenant.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#key DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#operator DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#values DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressionsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressionsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressionsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#match_expressions DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#match_labels DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafana {
  /**
  * CreateDatasource specifies if a Grafana Datasource should be created for Tempo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#create_datasource DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#create_datasource}
  */
  readonly createDatasource?: boolean | cdktf.IResolvable;
  /**
  * InstanceSelector specifies the Grafana instance where the datasource should be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#instance_selector DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#instance_selector}
  */
  readonly instanceSelector?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelector;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_datasource: cdktf.booleanToTerraform(struct!.createDatasource),
    instance_selector: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorToTerraform(struct!.instanceSelector),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_datasource: {
      value: cdktf.booleanToHclTerraform(struct!.createDatasource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_selector: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorToHclTerraform(struct!.instanceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafana | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createDatasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDatasource = this._createDatasource;
    }
    if (this._instanceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSelector = this._instanceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafana | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createDatasource = undefined;
      this._instanceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createDatasource = value.createDatasource;
      this._instanceSelector.internalValue = value.instanceSelector;
    }
  }

  // create_datasource - computed: false, optional: true, required: false
  private _createDatasource?: boolean | cdktf.IResolvable; 
  public get createDatasource() {
    return this.getBooleanAttribute('create_datasource');
  }
  public set createDatasource(value: boolean | cdktf.IResolvable) {
    this._createDatasource = value;
  }
  public resetCreateDatasource() {
    this._createDatasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDatasourceInput() {
    return this._createDatasource;
  }

  // instance_selector - computed: false, optional: true, required: false
  private _instanceSelector = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelectorOutputReference(this, "instance_selector");
  public get instanceSelector() {
    return this._instanceSelector;
  }
  public putInstanceSelector(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaInstanceSelector) {
    this._instanceSelector.internalValue = value;
  }
  public resetInstanceSelector() {
    this._instanceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectorInput() {
    return this._instanceSelector.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityMetrics {
  /**
  * CreatePrometheusRules specifies if Prometheus rules for alerts should be created for Tempo components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#create_prometheus_rules DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#create_prometheus_rules}
  */
  readonly createPrometheusRules?: boolean | cdktf.IResolvable;
  /**
  * CreateServiceMonitors specifies if ServiceMonitors should be created for Tempo components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#create_service_monitors DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#create_service_monitors}
  */
  readonly createServiceMonitors?: boolean | cdktf.IResolvable;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityMetricsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_prometheus_rules: cdktf.booleanToTerraform(struct!.createPrometheusRules),
    create_service_monitors: cdktf.booleanToTerraform(struct!.createServiceMonitors),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityMetricsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_prometheus_rules: {
      value: cdktf.booleanToHclTerraform(struct!.createPrometheusRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_service_monitors: {
      value: cdktf.booleanToHclTerraform(struct!.createServiceMonitors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createPrometheusRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPrometheusRules = this._createPrometheusRules;
    }
    if (this._createServiceMonitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.createServiceMonitors = this._createServiceMonitors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createPrometheusRules = undefined;
      this._createServiceMonitors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createPrometheusRules = value.createPrometheusRules;
      this._createServiceMonitors = value.createServiceMonitors;
    }
  }

  // create_prometheus_rules - computed: false, optional: true, required: false
  private _createPrometheusRules?: boolean | cdktf.IResolvable; 
  public get createPrometheusRules() {
    return this.getBooleanAttribute('create_prometheus_rules');
  }
  public set createPrometheusRules(value: boolean | cdktf.IResolvable) {
    this._createPrometheusRules = value;
  }
  public resetCreatePrometheusRules() {
    this._createPrometheusRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPrometheusRulesInput() {
    return this._createPrometheusRules;
  }

  // create_service_monitors - computed: false, optional: true, required: false
  private _createServiceMonitors?: boolean | cdktf.IResolvable; 
  public get createServiceMonitors() {
    return this.getBooleanAttribute('create_service_monitors');
  }
  public set createServiceMonitors(value: boolean | cdktf.IResolvable) {
    this._createServiceMonitors = value;
  }
  public resetCreateServiceMonitors() {
    this._createServiceMonitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createServiceMonitorsInput() {
    return this._createServiceMonitors;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityTracing {
  /**
  * JaegerAgentEndpoint defines the jaeger endpoint data gets send to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#jaeger_agent_endpoint DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#jaeger_agent_endpoint}
  */
  readonly jaegerAgentEndpoint?: string;
  /**
  * SamplingFraction defines the sampling ratio. Valid values are 0 to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#sampling_fraction DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#sampling_fraction}
  */
  readonly samplingFraction?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityTracingToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jaeger_agent_endpoint: cdktf.stringToTerraform(struct!.jaegerAgentEndpoint),
    sampling_fraction: cdktf.stringToTerraform(struct!.samplingFraction),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityTracingToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jaeger_agent_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.jaegerAgentEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_fraction: {
      value: cdktf.stringToHclTerraform(struct!.samplingFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityTracingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityTracing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jaegerAgentEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.jaegerAgentEndpoint = this._jaegerAgentEndpoint;
    }
    if (this._samplingFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingFraction = this._samplingFraction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityTracing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jaegerAgentEndpoint = undefined;
      this._samplingFraction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jaegerAgentEndpoint = value.jaegerAgentEndpoint;
      this._samplingFraction = value.samplingFraction;
    }
  }

  // jaeger_agent_endpoint - computed: false, optional: true, required: false
  private _jaegerAgentEndpoint?: string; 
  public get jaegerAgentEndpoint() {
    return this.getStringAttribute('jaeger_agent_endpoint');
  }
  public set jaegerAgentEndpoint(value: string) {
    this._jaegerAgentEndpoint = value;
  }
  public resetJaegerAgentEndpoint() {
    this._jaegerAgentEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jaegerAgentEndpointInput() {
    return this._jaegerAgentEndpoint;
  }

  // sampling_fraction - computed: false, optional: true, required: false
  private _samplingFraction?: string; 
  public get samplingFraction() {
    return this.getStringAttribute('sampling_fraction');
  }
  public set samplingFraction(value: string) {
    this._samplingFraction = value;
  }
  public resetSamplingFraction() {
    this._samplingFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingFractionInput() {
    return this._samplingFraction;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservability {
  /**
  * Grafana defines the Grafana configuration for operands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#grafana DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#grafana}
  */
  readonly grafana?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafana;
  /**
  * Metrics defines the metrics configuration for operands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#metrics DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityMetrics;
  /**
  * Tracing defines a config for operands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tracing DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tracing}
  */
  readonly tracing?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityTracing;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grafana: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaToTerraform(struct!.grafana),
    metrics: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityMetricsToTerraform(struct!.metrics),
    tracing: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityTracingToTerraform(struct!.tracing),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grafana: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaToHclTerraform(struct!.grafana),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafana",
    },
    metrics: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityMetrics",
    },
    tracing: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityTracingToHclTerraform(struct!.tracing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityTracing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grafana?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafana = this._grafana?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._tracing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grafana.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._tracing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grafana.internalValue = value.grafana;
      this._metrics.internalValue = value.metrics;
      this._tracing.internalValue = value.tracing;
    }
  }

  // grafana - computed: false, optional: true, required: false
  private _grafana = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafanaOutputReference(this, "grafana");
  public get grafana() {
    return this._grafana;
  }
  public putGrafana(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityGrafana) {
    this._grafana.internalValue = value;
  }
  public resetGrafana() {
    this._grafana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaInput() {
    return this._grafana.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityTracingOutputReference(this, "tracing");
  public get tracing() {
    return this._tracing;
  }
  public putTracing(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityTracing) {
    this._tracing.internalValue = value;
  }
  public resetTracing() {
    this._tracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaimsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaimsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaimsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotal {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#claims DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#limits DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#requests DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResources {
  /**
  * The total amount of resources for Tempo instance. The operator autonomously splits resources between deployed Tempo components. Only limits are supported, the operator calculates requests automatically. See http://github.com/grafana/tempo/issues/1540.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#total DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#total}
  */
  readonly total?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotal;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalToTerraform(struct!.total),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalToHclTerraform(struct!.total),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotal",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._total?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._total.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._total.internalValue = value.total;
    }
  }

  // total - computed: false, optional: true, required: false
  private _total = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotalOutputReference(this, "total");
  public get total() {
    return this._total;
  }
  public putTotal(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesTotal) {
    this._total.internalValue = value;
  }
  public resetTotal() {
    this._total.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionGlobal {
  /**
  * Traces defines retention period. Supported parameter suffixes are 's', 'm' and 'h'. example: 336h default: value is 48h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#traces DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#traces}
  */
  readonly traces?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionGlobalToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    traces: cdktf.stringToTerraform(struct!.traces),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionGlobalToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    traces: {
      value: cdktf.stringToHclTerraform(struct!.traces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionGlobal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._traces !== undefined) {
      hasAnyValues = true;
      internalValueResult.traces = this._traces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionGlobal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._traces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._traces = value.traces;
    }
  }

  // traces - computed: false, optional: true, required: false
  private _traces?: string; 
  public get traces() {
    return this.getStringAttribute('traces');
  }
  public set traces(value: string) {
    this._traces = value;
  }
  public resetTraces() {
    this._traces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracesInput() {
    return this._traces;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionPerTenant {
  /**
  * Traces defines retention period. Supported parameter suffixes are 's', 'm' and 'h'. example: 336h default: value is 48h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#traces DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#traces}
  */
  readonly traces?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionPerTenantToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionPerTenant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    traces: cdktf.stringToTerraform(struct!.traces),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionPerTenantToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionPerTenant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    traces: {
      value: cdktf.stringToHclTerraform(struct!.traces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionPerTenantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionPerTenant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._traces !== undefined) {
      hasAnyValues = true;
      internalValueResult.traces = this._traces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionPerTenant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._traces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._traces = value.traces;
    }
  }

  // traces - computed: false, optional: true, required: false
  private _traces?: string; 
  public get traces() {
    return this.getStringAttribute('traces');
  }
  public set traces(value: string) {
    this._traces = value;
  }
  public resetTraces() {
    this._traces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracesInput() {
    return this._traces;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetention {
  /**
  * Global is used to configure global retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#global DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#global}
  */
  readonly global?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionGlobal;
  /**
  * PerTenant is used to configure retention per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#per_tenant DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#per_tenant}
  */
  readonly perTenant?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionPerTenant;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionGlobalToTerraform(struct!.global),
    per_tenant: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionPerTenantToTerraform(struct!.perTenant),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionGlobal",
    },
    per_tenant: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionPerTenantToHclTerraform(struct!.perTenant),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionPerTenant",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._perTenant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTenant = this._perTenant?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._global.internalValue = undefined;
      this._perTenant.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._global.internalValue = value.global;
      this._perTenant.internalValue = value.perTenant;
    }
  }

  // global - computed: false, optional: true, required: false
  private _global = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionGlobal) {
    this._global.internalValue = value;
  }
  public resetGlobal() {
    this._global.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // per_tenant - computed: false, optional: true, required: false
  private _perTenant = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionPerTenantOutputReference(this, "per_tenant");
  public get perTenant() {
    return this._perTenant;
  }
  public putPerTenant(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionPerTenant) {
    this._perTenant.internalValue = value;
  }
  public resetPerTenant() {
    this._perTenant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTenantInput() {
    return this._perTenant.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecSearch {
  /**
  * Limit used for search requests if none is set by the caller (default: 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#default_result_limit DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#default_result_limit}
  */
  readonly defaultResultLimit?: number;
  /**
  * The maximum allowed time range for a search, default: 0s which means unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#max_duration DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#max_duration}
  */
  readonly maxDuration?: string;
  /**
  * The maximum allowed value of the limit parameter on search requests. If the search request limit parameter exceeds the value configured here it will be set to the value configured here. The default value of 0 disables this limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#max_result_limit DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#max_result_limit}
  */
  readonly maxResultLimit?: number;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecSearchToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_result_limit: cdktf.numberToTerraform(struct!.defaultResultLimit),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
    max_result_limit: cdktf.numberToTerraform(struct!.maxResultLimit),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecSearchToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_result_limit: {
      value: cdktf.numberToHclTerraform(struct!.defaultResultLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_result_limit: {
      value: cdktf.numberToHclTerraform(struct!.maxResultLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResultLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResultLimit = this._defaultResultLimit;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    if (this._maxResultLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResultLimit = this._maxResultLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultResultLimit = undefined;
      this._maxDuration = undefined;
      this._maxResultLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultResultLimit = value.defaultResultLimit;
      this._maxDuration = value.maxDuration;
      this._maxResultLimit = value.maxResultLimit;
    }
  }

  // default_result_limit - computed: false, optional: true, required: false
  private _defaultResultLimit?: number; 
  public get defaultResultLimit() {
    return this.getNumberAttribute('default_result_limit');
  }
  public set defaultResultLimit(value: number) {
    this._defaultResultLimit = value;
  }
  public resetDefaultResultLimit() {
    this._defaultResultLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResultLimitInput() {
    return this._defaultResultLimit;
  }

  // max_duration - computed: false, optional: true, required: false
  private _maxDuration?: string; 
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
  public set maxDuration(value: string) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }

  // max_result_limit - computed: false, optional: true, required: false
  private _maxResultLimit?: number; 
  public get maxResultLimit() {
    return this.getNumberAttribute('max_result_limit');
  }
  public set maxResultLimit(value: number) {
    this._maxResultLimit = value;
  }
  public resetMaxResultLimit() {
    this._maxResultLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultLimitInput() {
    return this._maxResultLimit;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageSecret {
  /**
  * Name of a secret in the namespace configured for object storage secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Type of object storage that should be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#type DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageSecretToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageSecretToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageSecret | cdktf.IResolvable): any {
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageTls {
  /**
  * CA is the name of a ConfigMap containing a CA certificate (service-ca.crt). It needs to be in the same namespace as the Tempo custom resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#ca_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#ca_name}
  */
  readonly caName?: string;
  /**
  * Cert is the name of a Secret containing a certificate (tls.crt) and private key (tls.key). It needs to be in the same namespace as the Tempo custom resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#cert_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#cert_name}
  */
  readonly certName?: string;
  /**
  * Enabled defines if TLS is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#enabled DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * MinVersion defines the minimum acceptable TLS version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#min_version DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#min_version}
  */
  readonly minVersion?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageTlsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_name: cdktf.stringToTerraform(struct!.caName),
    cert_name: cdktf.stringToTerraform(struct!.certName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageTlsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_name: {
      value: cdktf.stringToHclTerraform(struct!.caName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_name: {
      value: cdktf.stringToHclTerraform(struct!.certName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caName !== undefined) {
      hasAnyValues = true;
      internalValueResult.caName = this._caName;
    }
    if (this._certName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certName = this._certName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caName = undefined;
      this._certName = undefined;
      this._enabled = undefined;
      this._minVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caName = value.caName;
      this._certName = value.certName;
      this._enabled = value.enabled;
      this._minVersion = value.minVersion;
    }
  }

  // ca_name - computed: false, optional: true, required: false
  private _caName?: string; 
  public get caName() {
    return this.getStringAttribute('ca_name');
  }
  public set caName(value: string) {
    this._caName = value;
  }
  public resetCaName() {
    this._caName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caNameInput() {
    return this._caName;
  }

  // cert_name - computed: false, optional: true, required: false
  private _certName?: string; 
  public get certName() {
    return this.getStringAttribute('cert_name');
  }
  public set certName(value: string) {
    this._certName = value;
  }
  public resetCertName() {
    this._certName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certNameInput() {
    return this._certName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorage {
  /**
  * Secret for object storage authentication. Name of a secret in the same namespace as the TempoStack custom resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#secret DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#secret}
  */
  readonly secret: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageSecret;
  /**
  * TLS configuration for reaching the object storage endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tls DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageTls;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageSecretToTerraform(struct!.secret),
    tls: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageTlsToTerraform(struct!.tls),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageSecret",
    },
    tls: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secret.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secret.internalValue = value.secret;
      this._tls.internalValue = value.tls;
    }
  }

  // secret - computed: false, optional: false, required: true
  private _secret = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageSecret) {
    this._secret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#level DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#role DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#type DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#user DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#localhost_profile DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#type DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeccompProfileToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctls {
  /**
  * Name of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#value DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctlsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctlsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctls | cdktf.IResolvable): any {
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctlsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#gmsa_credential_spec DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#gmsa_credential_spec_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#host_process DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_user_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextWindowsOptionsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#fs_group DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are 'OnRootMismatch' and 'Always'. If not specified, 'Always' is used. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#fs_group_change_policy DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_group DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_non_root DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_user DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#se_linux_options DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#seccomp_profile DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeccompProfile;
  /**
  * A list of groups applied to the first process run in each container, in addition to the container's primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#supplemental_groups DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#sysctls DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#sysctls}
  */
  readonly sysctls?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#windows_options DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextWindowsOptions;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    sysctls: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
      this._sysctls.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
      this._sysctls.internalValue = value.sysctls;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaimsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaimsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaimsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#claims DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#limits DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#requests DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#effect DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#key DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#operator DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#toleration_seconds DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#value DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerationsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerationsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerationsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactor {
  /**
  * NodeSelector defines the simple form of the node-selection constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#node_selector DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * PodSecurityContext defines security context will be applied to all pods of this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#pod_security_context DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContext;
  /**
  * Replicas defines the number of replicas to be created for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#replicas DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources defines resources for this component, this will override the calculated resources derived from total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#resources DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResources;
  /**
  * Tolerations defines component-specific pod tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tolerations DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerations[] | cdktf.IResolvable;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_security_context: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextToTerraform(struct!.podSecurityContext),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesToTerraform(struct!.resources),
    tolerations: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_security_context: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContext",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResources",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorPodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#level DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#role DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#type DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#user DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#localhost_profile DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#type DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeccompProfileToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctls {
  /**
  * Name of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#value DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctlsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctlsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctls | cdktf.IResolvable): any {
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctlsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#gmsa_credential_spec DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#gmsa_credential_spec_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#host_process DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_user_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextWindowsOptionsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#fs_group DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are 'OnRootMismatch' and 'Always'. If not specified, 'Always' is used. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#fs_group_change_policy DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_group DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_non_root DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_user DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#se_linux_options DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#seccomp_profile DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeccompProfile;
  /**
  * A list of groups applied to the first process run in each container, in addition to the container's primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#supplemental_groups DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#sysctls DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#sysctls}
  */
  readonly sysctls?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#windows_options DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextWindowsOptions;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    sysctls: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
      this._sysctls.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
      this._sysctls.internalValue = value.sysctls;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaimsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaimsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaimsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#claims DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#limits DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#requests DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#effect DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#key DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#operator DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#toleration_seconds DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#value DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerationsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerationsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerationsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponent {
  /**
  * NodeSelector defines the simple form of the node-selection constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#node_selector DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * PodSecurityContext defines security context will be applied to all pods of this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#pod_security_context DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContext;
  /**
  * Replicas defines the number of replicas to be created for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#replicas DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources defines resources for this component, this will override the calculated resources derived from total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#resources DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResources;
  /**
  * Tolerations defines component-specific pod tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tolerations DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerations[] | cdktf.IResolvable;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_security_context: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextToTerraform(struct!.podSecurityContext),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesToTerraform(struct!.resources),
    tolerations: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_security_context: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContext",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResources",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentPodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorTls {
  /**
  * CA is the name of a ConfigMap containing a CA certificate (service-ca.crt). It needs to be in the same namespace as the Tempo custom resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#ca_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#ca_name}
  */
  readonly caName?: string;
  /**
  * Cert is the name of a Secret containing a certificate (tls.crt) and private key (tls.key). It needs to be in the same namespace as the Tempo custom resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#cert_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#cert_name}
  */
  readonly certName?: string;
  /**
  * Enabled defines if TLS is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#enabled DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * MinVersion defines the minimum acceptable TLS version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#min_version DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#min_version}
  */
  readonly minVersion?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorTlsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_name: cdktf.stringToTerraform(struct!.caName),
    cert_name: cdktf.stringToTerraform(struct!.certName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorTlsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_name: {
      value: cdktf.stringToHclTerraform(struct!.caName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_name: {
      value: cdktf.stringToHclTerraform(struct!.certName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caName !== undefined) {
      hasAnyValues = true;
      internalValueResult.caName = this._caName;
    }
    if (this._certName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certName = this._certName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caName = undefined;
      this._certName = undefined;
      this._enabled = undefined;
      this._minVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caName = value.caName;
      this._certName = value.certName;
      this._enabled = value.enabled;
      this._minVersion = value.minVersion;
    }
  }

  // ca_name - computed: false, optional: true, required: false
  private _caName?: string; 
  public get caName() {
    return this.getStringAttribute('ca_name');
  }
  public set caName(value: string) {
    this._caName = value;
  }
  public resetCaName() {
    this._caName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caNameInput() {
    return this._caName;
  }

  // cert_name - computed: false, optional: true, required: false
  private _certName?: string; 
  public get certName() {
    return this.getStringAttribute('cert_name');
  }
  public set certName(value: string) {
    this._certName = value;
  }
  public resetCertName() {
    this._certName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certNameInput() {
    return this._certName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributor {
  /**
  * TempoComponentSpec is embedded to extend this definition with further options. Currently, there is no way to inline this field. See: https://github.com/golang/go/issues/6213
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#component DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#component}
  */
  readonly component?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponent;
  /**
  * TLS defines TLS configuration for distributor receivers If openshift feature flag 'servingCertsService' is enabled and TLS is enabled but no certName or caName is specified, OpenShift service serving certificates will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tls DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorTls;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentToTerraform(struct!.component),
    tls: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorTlsToTerraform(struct!.tls),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentToHclTerraform(struct!.component),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponent",
    },
    tls: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._component.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._component.internalValue = value.component;
      this._tls.internalValue = value.tls;
    }
  }

  // component - computed: false, optional: true, required: false
  private _component = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponentOutputReference(this, "component");
  public get component() {
    return this._component;
  }
  public putComponent(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorComponent) {
    this._component.internalValue = value;
  }
  public resetComponent() {
    this._component.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#level DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#role DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#type DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#user DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#localhost_profile DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#type DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeccompProfileToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctls {
  /**
  * Name of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#value DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctlsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctlsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctls | cdktf.IResolvable): any {
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctlsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#gmsa_credential_spec DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#gmsa_credential_spec_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#host_process DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_user_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextWindowsOptionsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#fs_group DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are 'OnRootMismatch' and 'Always'. If not specified, 'Always' is used. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#fs_group_change_policy DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_group DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_non_root DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_user DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#se_linux_options DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#seccomp_profile DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeccompProfile;
  /**
  * A list of groups applied to the first process run in each container, in addition to the container's primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#supplemental_groups DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#sysctls DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#sysctls}
  */
  readonly sysctls?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#windows_options DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextWindowsOptions;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    sysctls: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
      this._sysctls.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
      this._sysctls.internalValue = value.sysctls;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaimsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaimsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaimsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#claims DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#limits DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#requests DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#effect DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#key DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#operator DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#toleration_seconds DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#value DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerationsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerationsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerationsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponent {
  /**
  * NodeSelector defines the simple form of the node-selection constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#node_selector DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * PodSecurityContext defines security context will be applied to all pods of this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#pod_security_context DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContext;
  /**
  * Replicas defines the number of replicas to be created for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#replicas DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources defines resources for this component, this will override the calculated resources derived from total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#resources DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResources;
  /**
  * Tolerations defines component-specific pod tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tolerations DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerations[] | cdktf.IResolvable;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_security_context: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextToTerraform(struct!.podSecurityContext),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesToTerraform(struct!.resources),
    tolerations: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_security_context: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContext",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResources",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentPodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressRoute {
  /**
  * Termination defines the termination type. The default is 'edge'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#termination DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#termination}
  */
  readonly termination?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressRouteToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    termination: cdktf.stringToTerraform(struct!.termination),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressRouteToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    termination: {
      value: cdktf.stringToHclTerraform(struct!.termination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._termination !== undefined) {
      hasAnyValues = true;
      internalValueResult.termination = this._termination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._termination = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._termination = value.termination;
    }
  }

  // termination - computed: false, optional: true, required: false
  private _termination?: string; 
  public get termination() {
    return this.getStringAttribute('termination');
  }
  public set termination(value: string) {
    this._termination = value;
  }
  public resetTermination() {
    this._termination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationInput() {
    return this._termination;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngress {
  /**
  * Annotations defines the annotations of the Ingress object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#annotations DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Host defines the hostname of the Ingress object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#host DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * IngressClassName defines the name of an IngressClass cluster resource. Defines which ingress controller serves this ingress resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#ingress_class_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * Route defines the options for the OpenShift route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#route DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#route}
  */
  readonly route?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressRoute;
  /**
  * Type defines the type of Ingress for the Jaeger Query UI. Currently ingress, route and none are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#type DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    host: cdktf.stringToTerraform(struct!.host),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    route: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressRouteToTerraform(struct!.route),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngress | cdktf.IResolvable): any {
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
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressRoute",
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._host = undefined;
      this._ingressClassName = undefined;
      this._route.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._host = value.host;
      this._ingressClassName = value.ingressClassName;
      this._route.internalValue = value.route;
      this._type = value.type;
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

  // ingress_class_name - computed: false, optional: true, required: false
  private _ingressClassName?: string; 
  public get ingressClassName() {
    return this.getStringAttribute('ingress_class_name');
  }
  public set ingressClassName(value: string) {
    this._ingressClassName = value;
  }
  public resetIngressClassName() {
    this._ingressClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassNameInput() {
    return this._ingressClassName;
  }

  // route - computed: false, optional: true, required: false
  private _route = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGateway {
  /**
  * TempoComponentSpec is embedded to extend this definition with further options. Currently there is no way to inline this field. See: https://github.com/golang/go/issues/6213
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#component DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#component}
  */
  readonly component?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponent;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#enabled DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Ingress defines gateway Ingress options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#ingress DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#ingress}
  */
  readonly ingress?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngress;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentToTerraform(struct!.component),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ingress: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressToTerraform(struct!.ingress),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentToHclTerraform(struct!.component),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponent",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ingress: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._component.internalValue = undefined;
      this._enabled = undefined;
      this._ingress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._component.internalValue = value.component;
      this._enabled = value.enabled;
      this._ingress.internalValue = value.ingress;
    }
  }

  // component - computed: false, optional: true, required: false
  private _component = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponentOutputReference(this, "component");
  public get component() {
    return this._component;
  }
  public putComponent(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayComponent) {
    this._component.internalValue = value;
  }
  public resetComponent() {
    this._component.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#level DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#role DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#type DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#user DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#localhost_profile DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#type DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeccompProfileToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctls {
  /**
  * Name of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#value DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctlsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctlsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctls | cdktf.IResolvable): any {
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctlsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#gmsa_credential_spec DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#gmsa_credential_spec_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#host_process DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_user_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextWindowsOptionsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#fs_group DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are 'OnRootMismatch' and 'Always'. If not specified, 'Always' is used. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#fs_group_change_policy DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_group DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_non_root DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_user DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#se_linux_options DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#seccomp_profile DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeccompProfile;
  /**
  * A list of groups applied to the first process run in each container, in addition to the container's primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#supplemental_groups DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#sysctls DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#sysctls}
  */
  readonly sysctls?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#windows_options DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextWindowsOptions;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    sysctls: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
      this._sysctls.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
      this._sysctls.internalValue = value.sysctls;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaimsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaimsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaimsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#claims DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#limits DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#requests DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#effect DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#key DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#operator DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#toleration_seconds DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#value DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerationsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerationsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerationsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngester {
  /**
  * NodeSelector defines the simple form of the node-selection constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#node_selector DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * PodSecurityContext defines security context will be applied to all pods of this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#pod_security_context DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContext;
  /**
  * Replicas defines the number of replicas to be created for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#replicas DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources defines resources for this component, this will override the calculated resources derived from total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#resources DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResources;
  /**
  * Tolerations defines component-specific pod tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tolerations DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerations[] | cdktf.IResolvable;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngester | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_security_context: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextToTerraform(struct!.podSecurityContext),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesToTerraform(struct!.resources),
    tolerations: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngester | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_security_context: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContext",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResources",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngester | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngester | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterPodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#level DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#role DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#type DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#user DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#localhost_profile DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#type DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeccompProfileToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctls {
  /**
  * Name of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#value DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctlsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctlsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctls | cdktf.IResolvable): any {
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctlsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#gmsa_credential_spec DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#gmsa_credential_spec_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#host_process DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_user_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextWindowsOptionsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#fs_group DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are 'OnRootMismatch' and 'Always'. If not specified, 'Always' is used. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#fs_group_change_policy DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_group DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_non_root DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_user DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#se_linux_options DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#seccomp_profile DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeccompProfile;
  /**
  * A list of groups applied to the first process run in each container, in addition to the container's primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#supplemental_groups DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#sysctls DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#sysctls}
  */
  readonly sysctls?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#windows_options DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextWindowsOptions;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    sysctls: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
      this._sysctls.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
      this._sysctls.internalValue = value.sysctls;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaimsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaimsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaimsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#claims DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#limits DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#requests DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#effect DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#key DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#operator DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#toleration_seconds DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#value DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerationsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerationsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerationsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerier {
  /**
  * NodeSelector defines the simple form of the node-selection constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#node_selector DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * PodSecurityContext defines security context will be applied to all pods of this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#pod_security_context DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContext;
  /**
  * Replicas defines the number of replicas to be created for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#replicas DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources defines resources for this component, this will override the calculated resources derived from total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#resources DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResources;
  /**
  * Tolerations defines component-specific pod tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tolerations DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerations[] | cdktf.IResolvable;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_security_context: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextToTerraform(struct!.podSecurityContext),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesToTerraform(struct!.resources),
    tolerations: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_security_context: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContext",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResources",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierPodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#level DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#role DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#type DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#user DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#localhost_profile DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#type DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeccompProfileToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctls {
  /**
  * Name of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#value DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctlsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctlsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctls | cdktf.IResolvable): any {
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctlsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#gmsa_credential_spec DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#gmsa_credential_spec_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#host_process DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_user_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextWindowsOptionsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#fs_group DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are 'OnRootMismatch' and 'Always'. If not specified, 'Always' is used. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#fs_group_change_policy DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_group DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_non_root DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#run_as_user DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#se_linux_options DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#seccomp_profile DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeccompProfile;
  /**
  * A list of groups applied to the first process run in each container, in addition to the container's primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#supplemental_groups DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#sysctls DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#sysctls}
  */
  readonly sysctls?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#windows_options DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextWindowsOptions;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    sysctls: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
      this._sysctls.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
      this._sysctls.internalValue = value.sysctls;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaimsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaimsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaimsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#claims DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#limits DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#requests DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#effect DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#key DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#operator DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#toleration_seconds DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#value DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerationsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerationsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerationsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponent {
  /**
  * NodeSelector defines the simple form of the node-selection constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#node_selector DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * PodSecurityContext defines security context will be applied to all pods of this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#pod_security_context DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContext;
  /**
  * Replicas defines the number of replicas to be created for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#replicas DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources defines resources for this component, this will override the calculated resources derived from total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#resources DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResources;
  /**
  * Tolerations defines component-specific pod tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tolerations DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerations[] | cdktf.IResolvable;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_security_context: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextToTerraform(struct!.podSecurityContext),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesToTerraform(struct!.resources),
    tolerations: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_security_context: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContext",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResources",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentPodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaimsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaimsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaimsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#claims DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#limits DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#requests DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthentication {
  /**
  * Defines if the authentication will be enabled for jaeger UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#enabled DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Resources defines the compute resource requirements of the OAuth Proxy container. The OAuth Proxy performs authentication and authorization of incoming requests to Jaeger UI when multi-tenancy is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#resources DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResources;
  /**
  * SAR defines the SAR to be used in the oauth-proxy default is '{'namespace': '<tempo_stack_namespace>', 'resource': 'pods', 'verb': 'get'}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#sar DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#sar}
  */
  readonly sar?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    resources: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesToTerraform(struct!.resources),
    sar: cdktf.stringToTerraform(struct!.sar),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResources",
    },
    sar: {
      value: cdktf.stringToHclTerraform(struct!.sar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._sar !== undefined) {
      hasAnyValues = true;
      internalValueResult.sar = this._sar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._resources.internalValue = undefined;
      this._sar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._resources.internalValue = value.resources;
      this._sar = value.sar;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // sar - computed: false, optional: true, required: false
  private _sar?: string; 
  public get sar() {
    return this.getStringAttribute('sar');
  }
  public set sar(value: string) {
    this._sar = value;
  }
  public resetSar() {
    this._sar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sarInput() {
    return this._sar;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressRoute {
  /**
  * Termination defines the termination type. The default is 'edge'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#termination DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#termination}
  */
  readonly termination?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressRouteToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    termination: cdktf.stringToTerraform(struct!.termination),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressRouteToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    termination: {
      value: cdktf.stringToHclTerraform(struct!.termination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._termination !== undefined) {
      hasAnyValues = true;
      internalValueResult.termination = this._termination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._termination = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._termination = value.termination;
    }
  }

  // termination - computed: false, optional: true, required: false
  private _termination?: string; 
  public get termination() {
    return this.getStringAttribute('termination');
  }
  public set termination(value: string) {
    this._termination = value;
  }
  public resetTermination() {
    this._termination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationInput() {
    return this._termination;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngress {
  /**
  * Annotations defines the annotations of the Ingress object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#annotations DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Host defines the hostname of the Ingress object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#host DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * IngressClassName defines the name of an IngressClass cluster resource. Defines which ingress controller serves this ingress resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#ingress_class_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * Route defines the options for the OpenShift route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#route DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#route}
  */
  readonly route?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressRoute;
  /**
  * Type defines the type of Ingress for the Jaeger Query UI. Currently ingress, route and none are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#type DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    host: cdktf.stringToTerraform(struct!.host),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    route: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressRouteToTerraform(struct!.route),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngress | cdktf.IResolvable): any {
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
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressRoute",
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._host = undefined;
      this._ingressClassName = undefined;
      this._route.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._host = value.host;
      this._ingressClassName = value.ingressClassName;
      this._route.internalValue = value.route;
      this._type = value.type;
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

  // ingress_class_name - computed: false, optional: true, required: false
  private _ingressClassName?: string; 
  public get ingressClassName() {
    return this.getStringAttribute('ingress_class_name');
  }
  public set ingressClassName(value: string) {
    this._ingressClassName = value;
  }
  public resetIngressClassName() {
    this._ingressClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassNameInput() {
    return this._ingressClassName;
  }

  // route - computed: false, optional: true, required: false
  private _route = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryMonitorTab {
  /**
  * Enabled enables the monitor tab in the Jaeger console. The PrometheusEndpoint must be configured to enable this feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#enabled DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * PrometheusEndpoint defines the endpoint to the Prometheus instance that contains the span rate, error, and duration (RED) metrics. For instance on OpenShift this is set to https://thanos-querier.openshift-monitoring.svc.cluster.local:9091
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#prometheus_endpoint DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#prometheus_endpoint}
  */
  readonly prometheusEndpoint?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryMonitorTabToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryMonitorTab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    prometheus_endpoint: cdktf.stringToTerraform(struct!.prometheusEndpoint),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryMonitorTabToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryMonitorTab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prometheus_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.prometheusEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryMonitorTabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryMonitorTab | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._prometheusEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusEndpoint = this._prometheusEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryMonitorTab | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._prometheusEndpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._prometheusEndpoint = value.prometheusEndpoint;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // prometheus_endpoint - computed: false, optional: true, required: false
  private _prometheusEndpoint?: string; 
  public get prometheusEndpoint() {
    return this.getStringAttribute('prometheus_endpoint');
  }
  public set prometheusEndpoint(value: string) {
    this._prometheusEndpoint = value;
  }
  public resetPrometheusEndpoint() {
    this._prometheusEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusEndpointInput() {
    return this._prometheusEndpoint;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaimsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaimsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaimsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#claims DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#limits DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#requests DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaimsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaimsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaimsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#claims DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#limits DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#requests DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQuery {
  /**
  * Resources defines resources for this component, this will override the calculated resources derived from total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#resources DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResources;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesToTerraform(struct!.resources),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQuery {
  /**
  * Authentication defines the options for the oauth proxy used to protect jaeger UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#authentication DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#authentication}
  */
  readonly authentication?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthentication;
  /**
  * Enabled defines if the Jaeger Query component should be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#enabled DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * FindTracesConcurrentRequests defines how many concurrent request a single trace search can submit (defaults querier.replicas*2). The search for traces in Jaeger submits limit+1 requests. First requests finds trace IDs and then it fetches entire traces by ID. This property allows Jaeger to fetch traces in parallel. Note that by default a single Tempo querier can process 20 concurrent search jobs. Increasing this property might require scaling up querier instances, especially on error 'job queue full' See also Tempo's extraConfig: querier.max_concurrent_queries (20 default) query_frontend.max_outstanding_per_tenant: (2000 default). Increase if the query-frontend returns 429
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#find_traces_concurrent_requests DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#find_traces_concurrent_requests}
  */
  readonly findTracesConcurrentRequests?: number;
  /**
  * Ingress defines the options for the Jaeger Query ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#ingress DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#ingress}
  */
  readonly ingress?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngress;
  /**
  * MonitorTab defines the monitor tab configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#monitor_tab DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#monitor_tab}
  */
  readonly monitorTab?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryMonitorTab;
  /**
  * Resources defines resources for this component, this will override the calculated resources derived from total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#resources DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResources;
  /**
  * ServicesQueryDuration defines how long the services will be available in the services list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#services_query_duration DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#services_query_duration}
  */
  readonly servicesQueryDuration?: string;
  /**
  * TempoQuery defines options specific to the Tempoo Query component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tempo_query DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tempo_query}
  */
  readonly tempoQuery?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQuery;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationToTerraform(struct!.authentication),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    find_traces_concurrent_requests: cdktf.numberToTerraform(struct!.findTracesConcurrentRequests),
    ingress: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressToTerraform(struct!.ingress),
    monitor_tab: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryMonitorTabToTerraform(struct!.monitorTab),
    resources: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesToTerraform(struct!.resources),
    services_query_duration: cdktf.stringToTerraform(struct!.servicesQueryDuration),
    tempo_query: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryToTerraform(struct!.tempoQuery),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthentication",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    find_traces_concurrent_requests: {
      value: cdktf.numberToHclTerraform(struct!.findTracesConcurrentRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingress: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngress",
    },
    monitor_tab: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryMonitorTabToHclTerraform(struct!.monitorTab),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryMonitorTab",
    },
    resources: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResources",
    },
    services_query_duration: {
      value: cdktf.stringToHclTerraform(struct!.servicesQueryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tempo_query: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryToHclTerraform(struct!.tempoQuery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQuery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._findTracesConcurrentRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.findTracesConcurrentRequests = this._findTracesConcurrentRequests;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._monitorTab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorTab = this._monitorTab?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._servicesQueryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesQueryDuration = this._servicesQueryDuration;
    }
    if (this._tempoQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempoQuery = this._tempoQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._enabled = undefined;
      this._findTracesConcurrentRequests = undefined;
      this._ingress.internalValue = undefined;
      this._monitorTab.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._servicesQueryDuration = undefined;
      this._tempoQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._enabled = value.enabled;
      this._findTracesConcurrentRequests = value.findTracesConcurrentRequests;
      this._ingress.internalValue = value.ingress;
      this._monitorTab.internalValue = value.monitorTab;
      this._resources.internalValue = value.resources;
      this._servicesQueryDuration = value.servicesQueryDuration;
      this._tempoQuery.internalValue = value.tempoQuery;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // find_traces_concurrent_requests - computed: false, optional: true, required: false
  private _findTracesConcurrentRequests?: number; 
  public get findTracesConcurrentRequests() {
    return this.getNumberAttribute('find_traces_concurrent_requests');
  }
  public set findTracesConcurrentRequests(value: number) {
    this._findTracesConcurrentRequests = value;
  }
  public resetFindTracesConcurrentRequests() {
    this._findTracesConcurrentRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findTracesConcurrentRequestsInput() {
    return this._findTracesConcurrentRequests;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // monitor_tab - computed: false, optional: true, required: false
  private _monitorTab = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryMonitorTabOutputReference(this, "monitor_tab");
  public get monitorTab() {
    return this._monitorTab;
  }
  public putMonitorTab(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryMonitorTab) {
    this._monitorTab.internalValue = value;
  }
  public resetMonitorTab() {
    this._monitorTab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTabInput() {
    return this._monitorTab.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // services_query_duration - computed: false, optional: true, required: false
  private _servicesQueryDuration?: string; 
  public get servicesQueryDuration() {
    return this.getStringAttribute('services_query_duration');
  }
  public set servicesQueryDuration(value: string) {
    this._servicesQueryDuration = value;
  }
  public resetServicesQueryDuration() {
    this._servicesQueryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesQueryDurationInput() {
    return this._servicesQueryDuration;
  }

  // tempo_query - computed: false, optional: true, required: false
  private _tempoQuery = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQueryOutputReference(this, "tempo_query");
  public get tempoQuery() {
    return this._tempoQuery;
  }
  public putTempoQuery(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryTempoQuery) {
    this._tempoQuery.internalValue = value;
  }
  public resetTempoQuery() {
    this._tempoQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempoQueryInput() {
    return this._tempoQuery.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontend {
  /**
  * TempoComponentSpec is embedded to extend this definition with further options. Currently there is no way to inline this field. See: https://github.com/golang/go/issues/6213
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#component DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#component}
  */
  readonly component?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponent;
  /**
  * JaegerQuery defines options specific to the Jaeger Query component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#jaeger_query DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#jaeger_query}
  */
  readonly jaegerQuery?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQuery;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentToTerraform(struct!.component),
    jaeger_query: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryToTerraform(struct!.jaegerQuery),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentToHclTerraform(struct!.component),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponent",
    },
    jaeger_query: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryToHclTerraform(struct!.jaegerQuery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQuery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component?.internalValue;
    }
    if (this._jaegerQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jaegerQuery = this._jaegerQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._component.internalValue = undefined;
      this._jaegerQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._component.internalValue = value.component;
      this._jaegerQuery.internalValue = value.jaegerQuery;
    }
  }

  // component - computed: false, optional: true, required: false
  private _component = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponentOutputReference(this, "component");
  public get component() {
    return this._component;
  }
  public putComponent(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendComponent) {
    this._component.internalValue = value;
  }
  public resetComponent() {
    this._component.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component.internalValue;
  }

  // jaeger_query - computed: false, optional: true, required: false
  private _jaegerQuery = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQueryOutputReference(this, "jaeger_query");
  public get jaegerQuery() {
    return this._jaegerQuery;
  }
  public putJaegerQuery(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendJaegerQuery) {
    this._jaegerQuery.internalValue = value;
  }
  public resetJaegerQuery() {
    this._jaegerQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jaegerQueryInput() {
    return this._jaegerQuery.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplate {
  /**
  * Compactor defines the tempo compactor component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#compactor DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#compactor}
  */
  readonly compactor?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactor;
  /**
  * Distributor defines the distributor component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#distributor DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#distributor}
  */
  readonly distributor?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributor;
  /**
  * Gateway defines the tempo gateway spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#gateway DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#gateway}
  */
  readonly gateway?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGateway;
  /**
  * Ingester defines the ingester component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#ingester DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#ingester}
  */
  readonly ingester?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngester;
  /**
  * Querier defines the querier component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#querier DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#querier}
  */
  readonly querier?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerier;
  /**
  * TempoQueryFrontendSpec defines the query frontend spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#query_frontend DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#query_frontend}
  */
  readonly queryFrontend?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontend;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compactor: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorToTerraform(struct!.compactor),
    distributor: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorToTerraform(struct!.distributor),
    gateway: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayToTerraform(struct!.gateway),
    ingester: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterToTerraform(struct!.ingester),
    querier: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierToTerraform(struct!.querier),
    query_frontend: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendToTerraform(struct!.queryFrontend),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compactor: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorToHclTerraform(struct!.compactor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactor",
    },
    distributor: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorToHclTerraform(struct!.distributor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributor",
    },
    gateway: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGateway",
    },
    ingester: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterToHclTerraform(struct!.ingester),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngester",
    },
    querier: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierToHclTerraform(struct!.querier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerier",
    },
    query_frontend: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendToHclTerraform(struct!.queryFrontend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontend",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compactor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compactor = this._compactor?.internalValue;
    }
    if (this._distributor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributor = this._distributor?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._ingester?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingester = this._ingester?.internalValue;
    }
    if (this._querier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.querier = this._querier?.internalValue;
    }
    if (this._queryFrontend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFrontend = this._queryFrontend?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compactor.internalValue = undefined;
      this._distributor.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._ingester.internalValue = undefined;
      this._querier.internalValue = undefined;
      this._queryFrontend.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compactor.internalValue = value.compactor;
      this._distributor.internalValue = value.distributor;
      this._gateway.internalValue = value.gateway;
      this._ingester.internalValue = value.ingester;
      this._querier.internalValue = value.querier;
      this._queryFrontend.internalValue = value.queryFrontend;
    }
  }

  // compactor - computed: false, optional: true, required: false
  private _compactor = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactorOutputReference(this, "compactor");
  public get compactor() {
    return this._compactor;
  }
  public putCompactor(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateCompactor) {
    this._compactor.internalValue = value;
  }
  public resetCompactor() {
    this._compactor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactorInput() {
    return this._compactor.internalValue;
  }

  // distributor - computed: false, optional: true, required: false
  private _distributor = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributorOutputReference(this, "distributor");
  public get distributor() {
    return this._distributor;
  }
  public putDistributor(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateDistributor) {
    this._distributor.internalValue = value;
  }
  public resetDistributor() {
    this._distributor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributorInput() {
    return this._distributor.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // ingester - computed: false, optional: true, required: false
  private _ingester = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngesterOutputReference(this, "ingester");
  public get ingester() {
    return this._ingester;
  }
  public putIngester(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateIngester) {
    this._ingester.internalValue = value;
  }
  public resetIngester() {
    this._ingester.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingesterInput() {
    return this._ingester.internalValue;
  }

  // querier - computed: false, optional: true, required: false
  private _querier = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerierOutputReference(this, "querier");
  public get querier() {
    return this._querier;
  }
  public putQuerier(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQuerier) {
    this._querier.internalValue = value;
  }
  public resetQuerier() {
    this._querier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querierInput() {
    return this._querier.internalValue;
  }

  // query_frontend - computed: false, optional: true, required: false
  private _queryFrontend = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontendOutputReference(this, "query_frontend");
  public get queryFrontend() {
    return this._queryFrontend;
  }
  public putQueryFrontend(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateQueryFrontend) {
    this._queryFrontend.internalValue = value;
  }
  public resetQueryFrontend() {
    this._queryFrontend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFrontendInput() {
    return this._queryFrontend.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcSecret {
  /**
  * Name of a secret in the namespace configured for tenant secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcSecretToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcSecretToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcSecret | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidc {
  /**
  * Group claim field from ID Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#group_claim DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#group_claim}
  */
  readonly groupClaim?: string;
  /**
  * IssuerURL defines the URL for issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#issuer_url DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#issuer_url}
  */
  readonly issuerUrl?: string;
  /**
  * RedirectURL defines the URL for redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#redirect_url DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Secret defines the spec for the clientID, clientSecret and issuerCAPath for tenant's authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#secret DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcSecret;
  /**
  * User claim field from ID Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#username_claim DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#username_claim}
  */
  readonly usernameClaim?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_claim: cdktf.stringToTerraform(struct!.groupClaim),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    secret: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcSecretToTerraform(struct!.secret),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_claim: {
      value: cdktf.stringToHclTerraform(struct!.groupClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.redirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcSecret",
    },
    username_claim: {
      value: cdktf.stringToHclTerraform(struct!.usernameClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupClaim = this._groupClaim;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._usernameClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameClaim = this._usernameClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupClaim = undefined;
      this._issuerUrl = undefined;
      this._redirectUrl = undefined;
      this._secret.internalValue = undefined;
      this._usernameClaim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupClaim = value.groupClaim;
      this._issuerUrl = value.issuerUrl;
      this._redirectUrl = value.redirectUrl;
      this._secret.internalValue = value.secret;
      this._usernameClaim = value.usernameClaim;
    }
  }

  // group_claim - computed: false, optional: true, required: false
  private _groupClaim?: string; 
  public get groupClaim() {
    return this.getStringAttribute('group_claim');
  }
  public set groupClaim(value: string) {
    this._groupClaim = value;
  }
  public resetGroupClaim() {
    this._groupClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupClaimInput() {
    return this._groupClaim;
  }

  // issuer_url - computed: false, optional: true, required: false
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  public resetIssuerUrl() {
    this._issuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // username_claim - computed: false, optional: true, required: false
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  public resetUsernameClaim() {
    this._usernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthentication {
  /**
  * OIDC defines the spec for the OIDC tenant's authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#oidc DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#oidc}
  */
  readonly oidc?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidc;
  /**
  * TenantID defines a universally unique identifier of the tenant. Unlike the tenantName, which must be unique at a given time, the tenantId must be unique over the entire lifetime of the Tempo deployment. Tempo uses this ID to prefix objects in the object storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tenant_id DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tenant_id}
  */
  readonly tenantId: string;
  /**
  * TenantName defines a human readable, unique name of the tenant. The value of this field must be specified in the X-Scope-OrgID header and in the resources field of a ClusterRole to identify the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tenant_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tenant_name}
  */
  readonly tenantName: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oidc: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcToTerraform(struct!.oidc),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    tenant_name: cdktf.stringToTerraform(struct!.tenantName),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oidc: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidc",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._tenantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantName = this._tenantName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oidc.internalValue = undefined;
      this._tenantId = undefined;
      this._tenantName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oidc.internalValue = value.oidc;
      this._tenantId = value.tenantId;
      this._tenantName = value.tenantName;
    }
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tenant_name - computed: false, optional: false, required: true
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthentication[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjects {
  /**
  * SubjectKind is a kind of Tempo Gateway RBAC subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#kind DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjects | cdktf.IResolvable): any {
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#roles DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#roles}
  */
  readonly roles: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#subjects DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#subjects}
  */
  readonly subjects: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjects[] | cdktf.IResolvable;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    subjects: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindings | cdktf.IResolvable): any {
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
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._subjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._roles = undefined;
      this._subjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._roles = value.roles;
      this._subjects.internalValue = value.subjects;
    }
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

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // subjects - computed: false, optional: false, required: true
  private _subjects = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsSubjects[] | cdktf.IResolvable) {
    this._subjects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects.internalValue;
  }
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#permissions DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#permissions}
  */
  readonly permissions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#resources DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#resources}
  */
  readonly resources: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tenants DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tenants}
  */
  readonly tenants: string[];
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRolesToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenants),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRolesToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoles | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tenants: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenants),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._tenants !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenants = this._tenants;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permissions = undefined;
      this._resources = undefined;
      this._tenants = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permissions = value.permissions;
      this._resources = value.resources;
      this._tenants = value.tenants;
    }
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return this.getListAttribute('permissions');
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // tenants - computed: false, optional: false, required: true
  private _tenants?: string[]; 
  public get tenants() {
    return this.getListAttribute('tenants');
  }
  public set tenants(value: string[]) {
    this._tenants = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants;
  }
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRolesOutputReference {
    return new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorization {
  /**
  * RoleBindings defines configuration to bind a set of roles to a set of subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#role_bindings DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#role_bindings}
  */
  readonly roleBindings?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindings[] | cdktf.IResolvable;
  /**
  * Roles defines a set of permissions to interact with a tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#roles DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#roles}
  */
  readonly roles?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoles[] | cdktf.IResolvable;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_bindings: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsToTerraform, false)(struct!.roleBindings),
    roles: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRolesToTerraform, false)(struct!.roles),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_bindings: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsToHclTerraform, false)(struct!.roleBindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsList",
    },
    roles: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRolesToHclTerraform, false)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleBindings = this._roleBindings?.internalValue;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleBindings.internalValue = undefined;
      this._roles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleBindings.internalValue = value.roleBindings;
      this._roles.internalValue = value.roles;
    }
  }

  // role_bindings - computed: false, optional: true, required: false
  private _roleBindings = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindingsList(this, "role_bindings", false);
  public get roleBindings() {
    return this._roleBindings;
  }
  public putRoleBindings(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoleBindings[] | cdktf.IResolvable) {
    this._roleBindings.internalValue = value;
  }
  public resetRoleBindings() {
    this._roleBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBindingsInput() {
    return this._roleBindings.internalValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenants {
  /**
  * Authentication defines the tempo-gateway component authentication configuration spec per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#authentication DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#authentication}
  */
  readonly authentication?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthentication[] | cdktf.IResolvable;
  /**
  * Authorization defines the tempo-gateway component authorization configuration spec per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#authorization DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#authorization}
  */
  readonly authorization?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorization;
  /**
  * Mode defines the multitenancy mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#mode DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#mode}
  */
  readonly mode: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.listMapper(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationToTerraform, false)(struct!.authentication),
    authorization: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationToTerraform(struct!.authorization),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.listMapperHcl(dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationToHclTerraform, false)(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationList",
    },
    authorization: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorization",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._authorization.internalValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._authorization.internalValue = value.authorization;
      this._mode = value.mode;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthenticationList(this, "authentication", false);
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthentication[] | cdktf.IResolvable) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
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
}
export interface DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpec {
  /**
  * ExtraConfigSpec defines extra configurations for tempo that will be merged with the operator generated, configurations defined here has precedence and could override generated config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#extra_config DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#extra_config}
  */
  readonly extraConfig?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecExtraConfig;
  /**
  * HashRing defines the spec for the distributed hash ring configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#hash_ring DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#hash_ring}
  */
  readonly hashRing?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRing;
  /**
  * Images defines the image for each container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#images DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#images}
  */
  readonly images?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecImages;
  /**
  * LimitSpec is used to limit ingestion and querying rates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#limits DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#limits}
  */
  readonly limits?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimits;
  /**
  * ManagementState defines if the CR should be managed by the operator or not. Default is managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#management_state DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#management_state}
  */
  readonly managementState?: string;
  /**
  * ObservabilitySpec defines how telemetry data gets handled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#observability DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#observability}
  */
  readonly observability?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservability;
  /**
  * The replication factor is a configuration setting that determines how many ingesters need to acknowledge the data from the distributors before accepting a span.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#replication_factor DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * Resources defines resources configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#resources DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResources;
  /**
  * Retention period defined by dataset. User can specify how long data should be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#retention DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#retention}
  */
  readonly retention?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetention;
  /**
  * SearchSpec control the configuration for the search capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#search DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#search}
  */
  readonly search?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecSearch;
  /**
  * ServiceAccount defines the service account to use for all tempo components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#service_account DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Storage defines the spec for the object storage endpoint to store traces. User is required to create secret and supply it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#storage DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#storage}
  */
  readonly storage: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorage;
  /**
  * StorageClassName for PVCs used by ingester. Defaults to nil (default storage class in the cluster).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#storage_class_name DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * StorageSize for PVCs used by ingester. Defaults to 10Gi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#storage_size DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#storage_size}
  */
  readonly storageSize?: string;
  /**
  * Template defines requirements for a set of tempo components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#template DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#template}
  */
  readonly template?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplate;
  /**
  * Tenants defines the per-tenant authentication and authorization spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#tenants DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#tenants}
  */
  readonly tenants?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenants;
  /**
  * Timeout configures the same timeout on all components starting at ingress down to the ingestor/querier. Timeout configuration on a specific component has a higher precedence. Defaults to 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#timeout DataK8STempoGrafanaComTempoStackV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecToTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extra_config: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecExtraConfigToTerraform(struct!.extraConfig),
    hash_ring: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingToTerraform(struct!.hashRing),
    images: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecImagesToTerraform(struct!.images),
    limits: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsToTerraform(struct!.limits),
    management_state: cdktf.stringToTerraform(struct!.managementState),
    observability: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityToTerraform(struct!.observability),
    replication_factor: cdktf.numberToTerraform(struct!.replicationFactor),
    resources: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesToTerraform(struct!.resources),
    retention: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionToTerraform(struct!.retention),
    search: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecSearchToTerraform(struct!.search),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    storage: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageToTerraform(struct!.storage),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    storage_size: cdktf.stringToTerraform(struct!.storageSize),
    template: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateToTerraform(struct!.template),
    tenants: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsToTerraform(struct!.tenants),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extra_config: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecExtraConfigToHclTerraform(struct!.extraConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecExtraConfig",
    },
    hash_ring: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingToHclTerraform(struct!.hashRing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRing",
    },
    images: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecImagesToHclTerraform(struct!.images),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecImages",
    },
    limits: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimits",
    },
    management_state: {
      value: cdktf.stringToHclTerraform(struct!.managementState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    observability: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityToHclTerraform(struct!.observability),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservability",
    },
    replication_factor: {
      value: cdktf.numberToHclTerraform(struct!.replicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResources",
    },
    retention: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionToHclTerraform(struct!.retention),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetention",
    },
    search: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecSearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecSearch",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorage",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_size: {
      value: cdktf.stringToHclTerraform(struct!.storageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplate",
    },
    tenants: {
      value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsToHclTerraform(struct!.tenants),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenants",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraConfig = this._extraConfig?.internalValue;
    }
    if (this._hashRing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashRing = this._hashRing?.internalValue;
    }
    if (this._images?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images?.internalValue;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._managementState !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementState = this._managementState;
    }
    if (this._observability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.observability = this._observability?.internalValue;
    }
    if (this._replicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFactor = this._replicationFactor;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._storageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSize = this._storageSize;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._tenants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenants = this._tenants?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extraConfig.internalValue = undefined;
      this._hashRing.internalValue = undefined;
      this._images.internalValue = undefined;
      this._limits.internalValue = undefined;
      this._managementState = undefined;
      this._observability.internalValue = undefined;
      this._replicationFactor = undefined;
      this._resources.internalValue = undefined;
      this._retention.internalValue = undefined;
      this._search.internalValue = undefined;
      this._serviceAccount = undefined;
      this._storage.internalValue = undefined;
      this._storageClassName = undefined;
      this._storageSize = undefined;
      this._template.internalValue = undefined;
      this._tenants.internalValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extraConfig.internalValue = value.extraConfig;
      this._hashRing.internalValue = value.hashRing;
      this._images.internalValue = value.images;
      this._limits.internalValue = value.limits;
      this._managementState = value.managementState;
      this._observability.internalValue = value.observability;
      this._replicationFactor = value.replicationFactor;
      this._resources.internalValue = value.resources;
      this._retention.internalValue = value.retention;
      this._search.internalValue = value.search;
      this._serviceAccount = value.serviceAccount;
      this._storage.internalValue = value.storage;
      this._storageClassName = value.storageClassName;
      this._storageSize = value.storageSize;
      this._template.internalValue = value.template;
      this._tenants.internalValue = value.tenants;
      this._timeout = value.timeout;
    }
  }

  // extra_config - computed: false, optional: true, required: false
  private _extraConfig = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecExtraConfigOutputReference(this, "extra_config");
  public get extraConfig() {
    return this._extraConfig;
  }
  public putExtraConfig(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecExtraConfig) {
    this._extraConfig.internalValue = value;
  }
  public resetExtraConfig() {
    this._extraConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigInput() {
    return this._extraConfig.internalValue;
  }

  // hash_ring - computed: false, optional: true, required: false
  private _hashRing = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRingOutputReference(this, "hash_ring");
  public get hashRing() {
    return this._hashRing;
  }
  public putHashRing(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecHashRing) {
    this._hashRing.internalValue = value;
  }
  public resetHashRing() {
    this._hashRing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashRingInput() {
    return this._hashRing.internalValue;
  }

  // images - computed: false, optional: true, required: false
  private _images = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecImagesOutputReference(this, "images");
  public get images() {
    return this._images;
  }
  public putImages(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecImages) {
    this._images.internalValue = value;
  }
  public resetImages() {
    this._images.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // management_state - computed: false, optional: true, required: false
  private _managementState?: string; 
  public get managementState() {
    return this.getStringAttribute('management_state');
  }
  public set managementState(value: string) {
    this._managementState = value;
  }
  public resetManagementState() {
    this._managementState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementStateInput() {
    return this._managementState;
  }

  // observability - computed: false, optional: true, required: false
  private _observability = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservabilityOutputReference(this, "observability");
  public get observability() {
    return this._observability;
  }
  public putObservability(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecObservability) {
    this._observability.internalValue = value;
  }
  public resetObservability() {
    this._observability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityInput() {
    return this._observability.internalValue;
  }

  // replication_factor - computed: false, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // retention - computed: false, optional: true, required: false
  private _retention = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecRetention) {
    this._retention.internalValue = value;
  }
  public resetRetention() {
    this._retention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }

  // search - computed: false, optional: true, required: false
  private _search = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecSearch) {
    this._search.internalValue = value;
  }
  public resetSearch() {
    this._search.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // storage_size - computed: false, optional: true, required: false
  private _storageSize?: string; 
  public get storageSize() {
    return this.getStringAttribute('storage_size');
  }
  public set storageSize(value: string) {
    this._storageSize = value;
  }
  public resetStorageSize() {
    this._storageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // tenants - computed: false, optional: true, required: false
  private _tenants = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenantsOutputReference(this, "tenants");
  public get tenants() {
    return this._tenants;
  }
  public putTenants(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecTenants) {
    this._tenants.internalValue = value;
  }
  public resetTenants() {
    this._tenants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest k8s_tempo_grafana_com_tempo_stack_v1alpha1_manifest}
*/
export class DataK8STempoGrafanaComTempoStackV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_tempo_grafana_com_tempo_stack_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STempoGrafanaComTempoStackV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STempoGrafanaComTempoStackV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STempoGrafanaComTempoStackV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STempoGrafanaComTempoStackV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_tempo_grafana_com_tempo_stack_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tempo_grafana_com_tempo_stack_v1alpha1_manifest k8s_tempo_grafana_com_tempo_stack_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STempoGrafanaComTempoStackV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_tempo_grafana_com_tempo_stack_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpec) {
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
      metadata: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STempoGrafanaComTempoStackV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
