// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#metadata DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestMetadata;
  /**
  * PodHttpChaosSpec defines the desired state of PodHttpChaos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#spec DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpec;
}
export interface DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#annotations DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#labels DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#name DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#namespace DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchBody {
  /**
  * Type represents the patch type, only support 'JSON' as [merge patch json](https://tools.ietf.org/html/rfc7396) currently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#type DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Value is the patch contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#value DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchBodyToTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchBodyToHclTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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
export interface DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatch {
  /**
  * Body is a rule to patch message body of target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#body DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#body}
  */
  readonly body?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchBody;
  /**
  * Headers is a rule to append http headers of target. For example: '[['Set-Cookie', '<one cookie>'], ['Set-Cookie', '<another cookie>']]'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#headers DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * Queries is a rule to append uri queries of target(Request only). For example: '[['foo', 'bar'], ['foo', 'unknown']]'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#queries DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#queries}
  */
  readonly queries?: string[];
}

export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchToTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchBodyToTerraform(struct!.body),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    queries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queries),
  }
}


export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchToHclTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchBody",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    queries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._queries !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body.internalValue = undefined;
      this._headers = undefined;
      this._queries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body.internalValue = value.body;
      this._headers = value.headers;
      this._queries = value.queries;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body = new DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // queries - computed: false, optional: true, required: false
  private _queries?: string[]; 
  public get queries() {
    return this.getListAttribute('queries');
  }
  public set queries(value: string[]) {
    this._queries = value;
  }
  public resetQueries() {
    this._queries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries;
  }
}
export interface DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsReplace {
  /**
  * Body is a rule to replace http message body in target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#body DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#body}
  */
  readonly body?: string;
  /**
  * Code is a rule to replace http status code in response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#code DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#code}
  */
  readonly code?: number;
  /**
  * Headers is a rule to replace http headers of target. The key-value pairs represent header name and header value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#headers DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Method is a rule to replace http method in request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#method DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * Path is rule to to replace uri path in http request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#path DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Queries is a rule to replace uri queries in http request. For example, with value '{ 'foo': 'unknown' }', the '/?foo=bar' will be altered to '/?foo=unknown',
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#queries DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#queries}
  */
  readonly queries?: { [key: string]: string };
}

export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsReplaceToTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsReplace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    code: cdktf.numberToTerraform(struct!.code),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
    queries: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}


export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsReplaceToHclTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsReplace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    queries: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.queries),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsReplaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsReplace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._queries !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsReplace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._code = undefined;
      this._headers = undefined;
      this._method = undefined;
      this._path = undefined;
      this._queries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._code = value.code;
      this._headers = value.headers;
      this._method = value.method;
      this._path = value.path;
      this._queries = value.queries;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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

  // queries - computed: false, optional: true, required: false
  private _queries?: { [key: string]: string }; 
  public get queries() {
    return this.getStringMapAttribute('queries');
  }
  public set queries(value: { [key: string]: string }) {
    this._queries = value;
  }
  public resetQueries() {
    this._queries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries;
  }
}
export interface DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActions {
  /**
  * Abort is a rule to abort a http session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#abort DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#abort}
  */
  readonly abort?: boolean | cdktf.IResolvable;
  /**
  * Delay represents the delay of the target request/response. A duration string is a possibly unsigned sequence of decimal numbers, each with optional fraction and a unit suffix, such as '300ms', '2h45m'. Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#delay DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#delay}
  */
  readonly delay?: string;
  /**
  * Patch is a rule to patch some contents in target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#patch DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#patch}
  */
  readonly patch?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatch;
  /**
  * Replace is a rule to replace some contents in target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#replace DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#replace}
  */
  readonly replace?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsReplace;
}

export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsToTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: cdktf.booleanToTerraform(struct!.abort),
    delay: cdktf.stringToTerraform(struct!.delay),
    patch: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchToTerraform(struct!.patch),
    replace: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsReplaceToTerraform(struct!.replace),
  }
}


export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsToHclTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort: {
      value: cdktf.booleanToHclTerraform(struct!.abort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delay: {
      value: cdktf.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch: {
      value: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchToHclTerraform(struct!.patch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatch",
    },
    replace: {
      value: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsReplaceToHclTerraform(struct!.replace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsReplace",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abort !== undefined) {
      hasAnyValues = true;
      internalValueResult.abort = this._abort;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._patch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch?.internalValue;
    }
    if (this._replace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abort = undefined;
      this._delay = undefined;
      this._patch.internalValue = undefined;
      this._replace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abort = value.abort;
      this._delay = value.delay;
      this._patch.internalValue = value.patch;
      this._replace.internalValue = value.replace;
    }
  }

  // abort - computed: false, optional: true, required: false
  private _abort?: boolean | cdktf.IResolvable; 
  public get abort() {
    return this.getBooleanAttribute('abort');
  }
  public set abort(value: boolean | cdktf.IResolvable) {
    this._abort = value;
  }
  public resetAbort() {
    this._abort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // patch - computed: false, optional: true, required: false
  private _patch = new DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatchOutputReference(this, "patch");
  public get patch() {
    return this._patch;
  }
  public putPatch(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsPatch) {
    this._patch.internalValue = value;
  }
  public resetPatch() {
    this._patch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch.internalValue;
  }

  // replace - computed: false, optional: true, required: false
  private _replace = new DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsReplaceOutputReference(this, "replace");
  public get replace() {
    return this._replace;
  }
  public putReplace(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsReplace) {
    this._replace.internalValue = value;
  }
  public resetReplace() {
    this._replace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace.internalValue;
  }
}
export interface DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesSelector {
  /**
  * Code is a rule to select target by http status code in response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#code DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#code}
  */
  readonly code?: number;
  /**
  * Method is a rule to select target by http method in request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#method DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * Path is a rule to select target by uri path in http request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#path DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Port is a rule to select server listening on specific port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#port DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * RequestHeaders is a rule to select target by http headers in request. The key-value pairs represent header name and header value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#request_headers DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * ResponseHeaders is a rule to select target by http headers in response. The key-value pairs represent header name and header value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#response_headers DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#response_headers}
  */
  readonly responseHeaders?: { [key: string]: string };
}

export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesSelectorToTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestHeaders),
    response_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.responseHeaders),
  }
}


export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesSelectorToHclTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
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
    request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    response_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.responseHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesSelector | cdktf.IResolvable | undefined {
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
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._responseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._method = undefined;
      this._path = undefined;
      this._port = undefined;
      this._requestHeaders = undefined;
      this._responseHeaders = undefined;
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
      this._requestHeaders = value.requestHeaders;
      this._responseHeaders = value.responseHeaders;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
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

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders?: { [key: string]: string }; 
  public get responseHeaders() {
    return this.getStringMapAttribute('response_headers');
  }
  public set responseHeaders(value: { [key: string]: string }) {
    this._responseHeaders = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders;
  }
}
export interface DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRules {
  /**
  * Actions contains rules to inject target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#actions DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#actions}
  */
  readonly actions: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActions;
  /**
  * Port represents the target port to be proxy of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#port DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Selector contains the rules to select target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#selector DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#selector}
  */
  readonly selector: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesSelector;
  /**
  * Source represents the source of current rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#source DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#source}
  */
  readonly source?: string;
  /**
  * Target is the object to be selected and injected, <Request|Response>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#target DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#target}
  */
  readonly target: string;
}

export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesToTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsToTerraform(struct!.actions),
    port: cdktf.numberToTerraform(struct!.port),
    selector: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesSelectorToTerraform(struct!.selector),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesToHclTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActions",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selector: {
      value: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesSelector",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._port = undefined;
      this._selector.internalValue = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._port = value.port;
      this._selector.internalValue = value.selector;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
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

  // selector - computed: false, optional: false, required: true
  private _selector = new DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
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

export class DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesOutputReference {
    return new DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecTls {
  /**
  * CAName represents the data name of ca file in secret, 'ca.crt' for example
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#ca_name DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#ca_name}
  */
  readonly caName?: string;
  /**
  * CertName represents the data name of cert file in secret, 'tls.crt' for example
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#cert_name DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#cert_name}
  */
  readonly certName: string;
  /**
  * KeyName represents the data name of key file in secret, 'tls.key' for example
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#key_name DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#key_name}
  */
  readonly keyName: string;
  /**
  * SecretName represents the name of required secret resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#secret_name DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * SecretNamespace represents the namespace of required secret resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#secret_namespace DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#secret_namespace}
  */
  readonly secretNamespace: string;
}

export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecTlsToTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_name: cdktf.stringToTerraform(struct!.caName),
    cert_name: cdktf.stringToTerraform(struct!.certName),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_namespace: cdktf.stringToTerraform(struct!.secretNamespace),
  }
}


export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecTlsToHclTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecTls | cdktf.IResolvable): any {
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
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_namespace: {
      value: cdktf.stringToHclTerraform(struct!.secretNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecTls | cdktf.IResolvable | undefined {
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
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNamespace = this._secretNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caName = undefined;
      this._certName = undefined;
      this._keyName = undefined;
      this._secretName = undefined;
      this._secretNamespace = undefined;
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
      this._keyName = value.keyName;
      this._secretName = value.secretName;
      this._secretNamespace = value.secretNamespace;
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

  // cert_name - computed: false, optional: false, required: true
  private _certName?: string; 
  public get certName() {
    return this.getStringAttribute('cert_name');
  }
  public set certName(value: string) {
    this._certName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certNameInput() {
    return this._certName;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_namespace - computed: false, optional: false, required: true
  private _secretNamespace?: string; 
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }
  public set secretNamespace(value: string) {
    this._secretNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamespaceInput() {
    return this._secretNamespace;
  }
}
export interface DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpec {
  /**
  * Rules are a list of injection rule for http request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#rules DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#rules}
  */
  readonly rules?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRules[] | cdktf.IResolvable;
  /**
  * TLS is the tls config, will be override if there are multiple HTTPChaos experiments are applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#tls DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecTls;
}

export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecToTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesToTerraform, false)(struct!.rules),
    tls: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecTlsToTerraform(struct!.tls),
  }
}


export function dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesList",
    },
    tls: {
      value: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
      this._tls.internalValue = value.tls;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecTls) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest k8s_chaos_mesh_org_pod_http_chaos_v1alpha1_manifest}
*/
export class DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_chaos_mesh_org_pod_http_chaos_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SChaosMeshOrgPodHttpChaosV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_chaos_mesh_org_pod_http_chaos_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chaos_mesh_org_pod_http_chaos_v1alpha1_manifest k8s_chaos_mesh_org_pod_http_chaos_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_chaos_mesh_org_pod_http_chaos_v1alpha1_manifest',
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
  private _metadata = new DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpec) {
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
      metadata: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgPodHttpChaosV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
