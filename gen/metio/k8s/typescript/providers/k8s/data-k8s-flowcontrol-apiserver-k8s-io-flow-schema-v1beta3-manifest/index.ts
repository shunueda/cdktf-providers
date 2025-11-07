// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#metadata DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#metadata}
  */
  readonly metadata: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestMetadata;
  /**
  * FlowSchemaSpec describes how the FlowSchema's specification looks like.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#spec DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#spec}
  */
  readonly spec?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpec;
}
export interface DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#annotations DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#labels DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#name DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestMetadataToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestMetadataToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecDistinguisherMethod {
  /**
  * 'type' is the type of flow distinguisher method The supported types are 'ByUser' and 'ByNamespace'. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#type DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#type}
  */
  readonly type: string;
}

export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecDistinguisherMethodToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecDistinguisherMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecDistinguisherMethodToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecDistinguisherMethod | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecDistinguisherMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecDistinguisherMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecDistinguisherMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
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
}
export interface DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecPriorityLevelConfiguration {
  /**
  * 'name' is the name of the priority level configuration being referenced Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#name DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecPriorityLevelConfigurationToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecPriorityLevelConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecPriorityLevelConfigurationToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecPriorityLevelConfiguration | cdktf.IResolvable): any {
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

export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecPriorityLevelConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecPriorityLevelConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecPriorityLevelConfiguration | cdktf.IResolvable | undefined) {
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
export interface DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRules {
  /**
  * 'nonResourceURLs' is a set of url prefixes that a user should have access to and may not be empty. For example: - '/healthz' is legal - '/hea*' is illegal - '/hea' is legal but matches nothing - '/hea/*' also matches nothing - '/healthz/*' matches all per-component health checks. '*' matches all non-resource urls. if it is present, it must be the only entry. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#non_resource_urls DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#non_resource_urls}
  */
  readonly nonResourceUrls: string[];
  /**
  * 'verbs' is a list of matching verbs and may not be empty. '*' matches all verbs. If it is present, it must be the only entry. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#verbs DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#verbs}
  */
  readonly verbs: string[];
}

export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRulesToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_resource_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonResourceUrls),
    verbs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verbs),
  }
}


export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRulesToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_resource_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonResourceUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verbs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verbs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonResourceUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonResourceUrls = this._nonResourceUrls;
    }
    if (this._verbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbs = this._verbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonResourceUrls = undefined;
      this._verbs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonResourceUrls = value.nonResourceUrls;
      this._verbs = value.verbs;
    }
  }

  // non_resource_urls - computed: false, optional: false, required: true
  private _nonResourceUrls?: string[]; 
  public get nonResourceUrls() {
    return this.getListAttribute('non_resource_urls');
  }
  public set nonResourceUrls(value: string[]) {
    this._nonResourceUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nonResourceUrlsInput() {
    return this._nonResourceUrls;
  }

  // verbs - computed: false, optional: false, required: true
  private _verbs?: string[]; 
  public get verbs() {
    return this.getListAttribute('verbs');
  }
  public set verbs(value: string[]) {
    this._verbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verbsInput() {
    return this._verbs;
  }
}

export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRulesOutputReference {
    return new DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRules {
  /**
  * 'apiGroups' is a list of matching API groups and may not be empty. '*' matches all API groups and, if present, must be the only entry. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#api_groups DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * 'clusterScope' indicates whether to match requests that do not specify a namespace (which happens either because the resource is not namespaced or the request targets all namespaces). If this field is omitted or false then the 'namespaces' field must contain a non-empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#cluster_scope DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#cluster_scope}
  */
  readonly clusterScope?: boolean | cdktf.IResolvable;
  /**
  * 'namespaces' is a list of target namespaces that restricts matches. A request that specifies a target namespace matches only if either (a) this list contains that target namespace or (b) this list contains '*'. Note that '*' matches any specified namespace but does not match a request that _does not specify_ a namespace (see the 'clusterScope' field for that). This list may be empty, but only if 'clusterScope' is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#namespaces DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * 'resources' is a list of matching resources (i.e., lowercase and plural) with, if desired, subresource. For example, [ 'services', 'nodes/status' ]. This list may not be empty. '*' matches all resources and, if present, must be the only entry. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#resources DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#resources}
  */
  readonly resources: string[];
  /**
  * 'verbs' is a list of matching verbs and may not be empty. '*' matches all verbs and, if present, must be the only entry. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#verbs DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#verbs}
  */
  readonly verbs: string[];
}

export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRulesToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    cluster_scope: cdktf.booleanToTerraform(struct!.clusterScope),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    verbs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verbs),
  }
}


export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRulesToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_scope: {
      value: cdktf.booleanToHclTerraform(struct!.clusterScope),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
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
    verbs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verbs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._clusterScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterScope = this._clusterScope;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._verbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbs = this._verbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._clusterScope = undefined;
      this._namespaces = undefined;
      this._resources = undefined;
      this._verbs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroups = value.apiGroups;
      this._clusterScope = value.clusterScope;
      this._namespaces = value.namespaces;
      this._resources = value.resources;
      this._verbs = value.verbs;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // cluster_scope - computed: false, optional: true, required: false
  private _clusterScope?: boolean | cdktf.IResolvable; 
  public get clusterScope() {
    return this.getBooleanAttribute('cluster_scope');
  }
  public set clusterScope(value: boolean | cdktf.IResolvable) {
    this._clusterScope = value;
  }
  public resetClusterScope() {
    this._clusterScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterScopeInput() {
    return this._clusterScope;
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

  // verbs - computed: false, optional: false, required: true
  private _verbs?: string[]; 
  public get verbs() {
    return this.getListAttribute('verbs');
  }
  public set verbs(value: string[]) {
    this._verbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verbsInput() {
    return this._verbs;
  }
}

export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRulesOutputReference {
    return new DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsGroup {
  /**
  * name is the user group that matches, or '*' to match all user groups. See https://github.com/kubernetes/apiserver/blob/master/pkg/authentication/user/user.go for some well-known group names. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#name DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsGroupToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsGroupToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsGroup | cdktf.IResolvable): any {
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

export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsGroup | cdktf.IResolvable | undefined) {
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
export interface DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsServiceAccount {
  /**
  * 'name' is the name of matching ServiceAccount objects, or '*' to match regardless of name. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#name DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#name}
  */
  readonly name: string;
  /**
  * 'namespace' is the namespace of matching ServiceAccount objects. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#namespace DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsServiceAccountToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsServiceAccountToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsServiceAccount | cdktf.IResolvable): any {
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

export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsUser {
  /**
  * 'name' is the username that matches, or '*' to match all usernames. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#name DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsUserToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsUserToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsUser | cdktf.IResolvable): any {
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

export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsUser | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsUser | cdktf.IResolvable | undefined) {
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
export interface DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjects {
  /**
  * GroupSubject holds detailed information for group-kind subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#group DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#group}
  */
  readonly group?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsGroup;
  /**
  * 'kind' indicates which one of the other fields is non-empty. Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#kind DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#kind}
  */
  readonly kind: string;
  /**
  * ServiceAccountSubject holds detailed information for service-account-kind subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#service_account DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#service_account}
  */
  readonly serviceAccount?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsServiceAccount;
  /**
  * UserSubject holds detailed information for user-kind subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#user DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#user}
  */
  readonly user?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsUser;
}

export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsGroupToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    service_account: dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsServiceAccountToTerraform(struct!.serviceAccount),
    user: dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsUserToTerraform(struct!.user),
  }
}


export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsGroup",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsServiceAccount",
    },
    user: {
      value: dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._serviceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group.internalValue = undefined;
      this._kind = undefined;
      this._serviceAccount.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group.internalValue = value.group;
      this._kind = value.kind;
      this._serviceAccount.internalValue = value.serviceAccount;
      this._user.internalValue = value.user;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group = new DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
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

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}

export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsOutputReference {
    return new DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRules {
  /**
  * 'nonResourceRules' is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#non_resource_rules DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#non_resource_rules}
  */
  readonly nonResourceRules?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRules[] | cdktf.IResolvable;
  /**
  * 'resourceRules' is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of 'resourceRules' and 'nonResourceRules' has to be non-empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#resource_rules DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#resource_rules}
  */
  readonly resourceRules?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRules[] | cdktf.IResolvable;
  /**
  * subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#subjects DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#subjects}
  */
  readonly subjects: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjects[] | cdktf.IResolvable;
}

export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_resource_rules: cdktf.listMapper(dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRulesToTerraform, false)(struct!.nonResourceRules),
    resource_rules: cdktf.listMapper(dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRulesToTerraform, false)(struct!.resourceRules),
    subjects: cdktf.listMapper(dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_resource_rules: {
      value: cdktf.listMapperHcl(dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRulesToHclTerraform, false)(struct!.nonResourceRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRulesList",
    },
    resource_rules: {
      value: cdktf.listMapperHcl(dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRulesToHclTerraform, false)(struct!.resourceRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRulesList",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonResourceRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonResourceRules = this._nonResourceRules?.internalValue;
    }
    if (this._resourceRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRules = this._resourceRules?.internalValue;
    }
    if (this._subjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonResourceRules.internalValue = undefined;
      this._resourceRules.internalValue = undefined;
      this._subjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonResourceRules.internalValue = value.nonResourceRules;
      this._resourceRules.internalValue = value.resourceRules;
      this._subjects.internalValue = value.subjects;
    }
  }

  // non_resource_rules - computed: false, optional: true, required: false
  private _nonResourceRules = new DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRulesList(this, "non_resource_rules", false);
  public get nonResourceRules() {
    return this._nonResourceRules;
  }
  public putNonResourceRules(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesNonResourceRules[] | cdktf.IResolvable) {
    this._nonResourceRules.internalValue = value;
  }
  public resetNonResourceRules() {
    this._nonResourceRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonResourceRulesInput() {
    return this._nonResourceRules.internalValue;
  }

  // resource_rules - computed: false, optional: true, required: false
  private _resourceRules = new DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRulesList(this, "resource_rules", false);
  public get resourceRules() {
    return this._resourceRules;
  }
  public putResourceRules(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesResourceRules[] | cdktf.IResolvable) {
    this._resourceRules.internalValue = value;
  }
  public resetResourceRules() {
    this._resourceRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRulesInput() {
    return this._resourceRules.internalValue;
  }

  // subjects - computed: false, optional: false, required: true
  private _subjects = new DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesSubjects[] | cdktf.IResolvable) {
    this._subjects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects.internalValue;
  }
}

export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesOutputReference {
    return new DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpec {
  /**
  * FlowDistinguisherMethod specifies the method of a flow distinguisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#distinguisher_method DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#distinguisher_method}
  */
  readonly distinguisherMethod?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecDistinguisherMethod;
  /**
  * 'matchingPrecedence' is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence. Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#matching_precedence DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#matching_precedence}
  */
  readonly matchingPrecedence?: number;
  /**
  * PriorityLevelConfigurationReference contains information that points to the 'request-priority' being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#priority_level_configuration DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#priority_level_configuration}
  */
  readonly priorityLevelConfiguration: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecPriorityLevelConfiguration;
  /**
  * 'rules' describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#rules DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest#rules}
  */
  readonly rules?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRules[] | cdktf.IResolvable;
}

export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distinguisher_method: dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecDistinguisherMethodToTerraform(struct!.distinguisherMethod),
    matching_precedence: cdktf.numberToTerraform(struct!.matchingPrecedence),
    priority_level_configuration: dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecPriorityLevelConfigurationToTerraform(struct!.priorityLevelConfiguration),
    rules: cdktf.listMapper(dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distinguisher_method: {
      value: dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecDistinguisherMethodToHclTerraform(struct!.distinguisherMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecDistinguisherMethod",
    },
    matching_precedence: {
      value: cdktf.numberToHclTerraform(struct!.matchingPrecedence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_level_configuration: {
      value: dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecPriorityLevelConfigurationToHclTerraform(struct!.priorityLevelConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecPriorityLevelConfiguration",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distinguisherMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguisherMethod = this._distinguisherMethod?.internalValue;
    }
    if (this._matchingPrecedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingPrecedence = this._matchingPrecedence;
    }
    if (this._priorityLevelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityLevelConfiguration = this._priorityLevelConfiguration?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distinguisherMethod.internalValue = undefined;
      this._matchingPrecedence = undefined;
      this._priorityLevelConfiguration.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distinguisherMethod.internalValue = value.distinguisherMethod;
      this._matchingPrecedence = value.matchingPrecedence;
      this._priorityLevelConfiguration.internalValue = value.priorityLevelConfiguration;
      this._rules.internalValue = value.rules;
    }
  }

  // distinguisher_method - computed: false, optional: true, required: false
  private _distinguisherMethod = new DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecDistinguisherMethodOutputReference(this, "distinguisher_method");
  public get distinguisherMethod() {
    return this._distinguisherMethod;
  }
  public putDistinguisherMethod(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecDistinguisherMethod) {
    this._distinguisherMethod.internalValue = value;
  }
  public resetDistinguisherMethod() {
    this._distinguisherMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguisherMethodInput() {
    return this._distinguisherMethod.internalValue;
  }

  // matching_precedence - computed: false, optional: true, required: false
  private _matchingPrecedence?: number; 
  public get matchingPrecedence() {
    return this.getNumberAttribute('matching_precedence');
  }
  public set matchingPrecedence(value: number) {
    this._matchingPrecedence = value;
  }
  public resetMatchingPrecedence() {
    this._matchingPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingPrecedenceInput() {
    return this._matchingPrecedence;
  }

  // priority_level_configuration - computed: false, optional: false, required: true
  private _priorityLevelConfiguration = new DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecPriorityLevelConfigurationOutputReference(this, "priority_level_configuration");
  public get priorityLevelConfiguration() {
    return this._priorityLevelConfiguration;
  }
  public putPriorityLevelConfiguration(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecPriorityLevelConfiguration) {
    this._priorityLevelConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityLevelConfigurationInput() {
    return this._priorityLevelConfiguration.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest k8s_flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest}
*/
export class DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest to import
  * @param importFromId The id of the existing DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest k8s_flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_flowcontrol_apiserver_k8s_io_flow_schema_v1beta3_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpec) {
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
      metadata: dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestMetadata",
      },
      spec: {
        value: dataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFlowcontrolApiserverK8SIoFlowSchemaV1Beta3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
