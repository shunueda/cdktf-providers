// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#metadata DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestMetadata;
  /**
  * Spec defines the desired state of the ObservabilityPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#spec DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpec;
}
export interface DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#annotations DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#labels DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#name DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#namespace DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefs {
  /**
  * Group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#group DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#kind DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#name DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefsToTerraform(struct?: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefsToHclTerraform(struct?: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
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

  public set internalValue(value: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

export class DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefsOutputReference {
    return new DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributes {
  /**
  * Key is the key for a span attribute. Format: must have all ``` escaped and must not contain any '$' or end with an unescaped ''
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#key DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Value is the value for a span attribute. Format: must have all ``` escaped and must not contain any '$' or end with an unescaped ''
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#value DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributesToTerraform(struct?: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributesToHclTerraform(struct?: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributes | cdktf.IResolvable): any {
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

export class DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

export class DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributesOutputReference {
    return new DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracing {
  /**
  * Context specifies how to propagate traceparent/tracestate headers. Default: https://nginx.org/en/docs/ngx_otel_module.html#otel_trace_context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#context DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Ratio is the percentage of traffic that should be sampled. Integer from 0 to 100. By default, 100% of http requests are traced. Not applicable for parent-based tracing. If ratio is set to 0, tracing is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#ratio DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#ratio}
  */
  readonly ratio?: number;
  /**
  * SpanAttributes are custom key/value attributes that are added to each span.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#span_attributes DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#span_attributes}
  */
  readonly spanAttributes?: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributes[] | cdktf.IResolvable;
  /**
  * SpanName defines the name of the Otel span. By default is the name of the location for a request. If specified, applies to all locations that are created for a route. Format: must have all ``` escaped and must not contain any '$' or end with an unescaped '' Examples of invalid names: some-$value, quoted-'value'-name, unescaped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#span_name DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#span_name}
  */
  readonly spanName?: string;
  /**
  * Strategy defines if tracing is ratio-based or parent-based.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#strategy DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#strategy}
  */
  readonly strategy: string;
}

export function dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingToTerraform(struct?: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    ratio: cdktf.numberToTerraform(struct!.ratio),
    span_attributes: cdktf.listMapper(dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributesToTerraform, false)(struct!.spanAttributes),
    span_name: cdktf.stringToTerraform(struct!.spanName),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingToHclTerraform(struct?: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ratio: {
      value: cdktf.numberToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    span_attributes: {
      value: cdktf.listMapperHcl(dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributesToHclTerraform, false)(struct!.spanAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributesList",
    },
    span_name: {
      value: cdktf.stringToHclTerraform(struct!.spanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    if (this._spanAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanAttributes = this._spanAttributes?.internalValue;
    }
    if (this._spanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanName = this._spanName;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._ratio = undefined;
      this._spanAttributes.internalValue = undefined;
      this._spanName = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._ratio = value.ratio;
      this._spanAttributes.internalValue = value.spanAttributes;
      this._spanName = value.spanName;
      this._strategy = value.strategy;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }

  // span_attributes - computed: false, optional: true, required: false
  private _spanAttributes = new DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributesList(this, "span_attributes", false);
  public get spanAttributes() {
    return this._spanAttributes;
  }
  public putSpanAttributes(value: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingSpanAttributes[] | cdktf.IResolvable) {
    this._spanAttributes.internalValue = value;
  }
  public resetSpanAttributes() {
    this._spanAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanAttributesInput() {
    return this._spanAttributes.internalValue;
  }

  // span_name - computed: false, optional: true, required: false
  private _spanName?: string; 
  public get spanName() {
    return this.getStringAttribute('span_name');
  }
  public set spanName(value: string) {
    this._spanName = value;
  }
  public resetSpanName() {
    this._spanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanNameInput() {
    return this._spanName;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpec {
  /**
  * TargetRefs identifies the API object(s) to apply the policy to. Objects must be in the same namespace as the policy. Support: HTTPRoute, GRPCRoute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#target_refs DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#target_refs}
  */
  readonly targetRefs: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefs[] | cdktf.IResolvable;
  /**
  * Tracing allows for enabling and configuring tracing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#tracing DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest#tracing}
  */
  readonly tracing?: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracing;
}

export function dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_refs: cdktf.listMapper(dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefsToTerraform, false)(struct!.targetRefs),
    tracing: dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingToTerraform(struct!.tracing),
  }
}


export function dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_refs: {
      value: cdktf.listMapperHcl(dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefsToHclTerraform, false)(struct!.targetRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefsList",
    },
    tracing: {
      value: dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingToHclTerraform(struct!.tracing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRefs = this._targetRefs?.internalValue;
    }
    if (this._tracing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetRefs.internalValue = undefined;
      this._tracing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetRefs.internalValue = value.targetRefs;
      this._tracing.internalValue = value.tracing;
    }
  }

  // target_refs - computed: false, optional: false, required: true
  private _targetRefs = new DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefsList(this, "target_refs", false);
  public get targetRefs() {
    return this._targetRefs;
  }
  public putTargetRefs(value: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTargetRefs[] | cdktf.IResolvable) {
    this._targetRefs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefsInput() {
    return this._targetRefs.internalValue;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing = new DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracingOutputReference(this, "tracing");
  public get tracing() {
    return this._tracing;
  }
  public putTracing(value: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecTracing) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest k8s_gateway_nginx_org_observability_policy_v1alpha1_manifest}
*/
export class DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_gateway_nginx_org_observability_policy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_gateway_nginx_org_observability_policy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/gateway_nginx_org_observability_policy_v1alpha1_manifest k8s_gateway_nginx_org_observability_policy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_gateway_nginx_org_observability_policy_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNginxOrgObservabilityPolicyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
