// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCanariesFlanksourceComTopologyV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#metadata DataK8SCanariesFlanksourceComTopologyV1Manifest#metadata}
  */
  readonly metadata: DataK8SCanariesFlanksourceComTopologyV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#spec DataK8SCanariesFlanksourceComTopologyV1Manifest#spec}
  */
  readonly spec?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpec;
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#annotations DataK8SCanariesFlanksourceComTopologyV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#labels DataK8SCanariesFlanksourceComTopologyV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#namespace DataK8SCanariesFlanksourceComTopologyV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestMetadataToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCanariesFlanksourceComTopologyV1ManifestMetadataToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksSelector {
  /**
  * Agent can be the agent id or the name of the agent. Additionally, the special 'self' value can be used to select resources without an agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#agent DataK8SCanariesFlanksourceComTopologyV1Manifest#agent}
  */
  readonly agent?: string;
  /**
  * Cache directives 'no-cache' (should not fetch from cache but can be cached) 'no-store' (should not cache) 'max-age=X' (cache for X duration)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#cache DataK8SCanariesFlanksourceComTopologyV1Manifest#cache}
  */
  readonly cache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#field_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#field_selector}
  */
  readonly fieldSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#id DataK8SCanariesFlanksourceComTopologyV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#include_deleted DataK8SCanariesFlanksourceComTopologyV1Manifest#include_deleted}
  */
  readonly includeDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#label_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#limit DataK8SCanariesFlanksourceComTopologyV1Manifest#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#namespace DataK8SCanariesFlanksourceComTopologyV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#scope DataK8SCanariesFlanksourceComTopologyV1Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Search query that applies to the resource name, tag & labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#search DataK8SCanariesFlanksourceComTopologyV1Manifest#search}
  */
  readonly search?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#statuses DataK8SCanariesFlanksourceComTopologyV1Manifest#statuses}
  */
  readonly statuses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#tag_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#tag_selector}
  */
  readonly tagSelector?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#types DataK8SCanariesFlanksourceComTopologyV1Manifest#types}
  */
  readonly types?: string[];
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksSelectorToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    cache: cdktf.stringToTerraform(struct!.cache),
    field_selector: cdktf.stringToTerraform(struct!.fieldSelector),
    id: cdktf.stringToTerraform(struct!.id),
    include_deleted: cdktf.booleanToTerraform(struct!.includeDeleted),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    limit: cdktf.numberToTerraform(struct!.limit),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    scope: cdktf.stringToTerraform(struct!.scope),
    search: cdktf.stringToTerraform(struct!.search),
    statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statuses),
    tag_selector: cdktf.stringToTerraform(struct!.tagSelector),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksSelectorToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache: {
      value: cdktf.stringToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_selector: {
      value: cdktf.stringToHclTerraform(struct!.fieldSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.includeDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_selector: {
      value: cdktf.stringToHclTerraform(struct!.tagSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._fieldSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelector = this._fieldSelector;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._includeDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDeleted = this._includeDeleted;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._statuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.statuses = this._statuses;
    }
    if (this._tagSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSelector = this._tagSelector;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent = undefined;
      this._cache = undefined;
      this._fieldSelector = undefined;
      this._id = undefined;
      this._includeDeleted = undefined;
      this._labelSelector = undefined;
      this._limit = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._scope = undefined;
      this._search = undefined;
      this._statuses = undefined;
      this._tagSelector = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent = value.agent;
      this._cache = value.cache;
      this._fieldSelector = value.fieldSelector;
      this._id = value.id;
      this._includeDeleted = value.includeDeleted;
      this._labelSelector = value.labelSelector;
      this._limit = value.limit;
      this._name = value.name;
      this._namespace = value.namespace;
      this._scope = value.scope;
      this._search = value.search;
      this._statuses = value.statuses;
      this._tagSelector = value.tagSelector;
      this._types = value.types;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: string; 
  public get cache() {
    return this.getStringAttribute('cache');
  }
  public set cache(value: string) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // field_selector - computed: false, optional: true, required: false
  private _fieldSelector?: string; 
  public get fieldSelector() {
    return this.getStringAttribute('field_selector');
  }
  public set fieldSelector(value: string) {
    this._fieldSelector = value;
  }
  public resetFieldSelector() {
    this._fieldSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorInput() {
    return this._fieldSelector;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_deleted - computed: false, optional: true, required: false
  private _includeDeleted?: boolean | cdktf.IResolvable; 
  public get includeDeleted() {
    return this.getBooleanAttribute('include_deleted');
  }
  public set includeDeleted(value: boolean | cdktf.IResolvable) {
    this._includeDeleted = value;
  }
  public resetIncludeDeleted() {
    this._includeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedInput() {
    return this._includeDeleted;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // statuses - computed: false, optional: true, required: false
  private _statuses?: string[]; 
  public get statuses() {
    return this.getListAttribute('statuses');
  }
  public set statuses(value: string[]) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
  }

  // tag_selector - computed: false, optional: true, required: false
  private _tagSelector?: string; 
  public get tagSelector() {
    return this.getStringAttribute('tag_selector');
  }
  public set tagSelector(value: string) {
    this._tagSelector = value;
  }
  public resetTagSelector() {
    this._tagSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSelectorInput() {
    return this._tagSelector;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecks {
  /**
  * CanarySpec defines the desired state of Canary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#inline DataK8SCanariesFlanksourceComTopologyV1Manifest#inline}
  */
  readonly inline?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#selector DataK8SCanariesFlanksourceComTopologyV1Manifest#selector}
  */
  readonly selector?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksSelector;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.inline),
    selector: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.inline),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    selector: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inline !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inline = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inline = value.inline;
      this._selector.internalValue = value.selector;
    }
  }

  // inline - computed: false, optional: true, required: false
  private _inline?: { [key: string]: string }; 
  public get inline() {
    return this.getStringMapAttribute('inline');
  }
  public set inline(value: { [key: string]: string }) {
    this._inline = value;
  }
  public resetInline() {
    this._inline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksList extends cdktf.ComplexList {
  public internalValue? : DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksOutputReference {
    return new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigs {
  /**
  * Agent can be the agent id or the name of the agent. Additionally, the special 'self' value can be used to select resources without an agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#agent DataK8SCanariesFlanksourceComTopologyV1Manifest#agent}
  */
  readonly agent?: string;
  /**
  * Cache directives 'no-cache' (should not fetch from cache but can be cached) 'no-store' (should not cache) 'max-age=X' (cache for X duration)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#cache DataK8SCanariesFlanksourceComTopologyV1Manifest#cache}
  */
  readonly cache?: string;
  /**
  * Deprecated. Use 'fieldSelector (config_class=)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#class DataK8SCanariesFlanksourceComTopologyV1Manifest#class}
  */
  readonly class?: string;
  /**
  * Deprecated. Use 'fieldSelector (external_id=)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#external_id DataK8SCanariesFlanksourceComTopologyV1Manifest#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#field_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#field_selector}
  */
  readonly fieldSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#id DataK8SCanariesFlanksourceComTopologyV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#include_deleted DataK8SCanariesFlanksourceComTopologyV1Manifest#include_deleted}
  */
  readonly includeDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#label_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#limit DataK8SCanariesFlanksourceComTopologyV1Manifest#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#namespace DataK8SCanariesFlanksourceComTopologyV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#scope DataK8SCanariesFlanksourceComTopologyV1Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Search query that applies to the resource name, tag & labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#search DataK8SCanariesFlanksourceComTopologyV1Manifest#search}
  */
  readonly search?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#statuses DataK8SCanariesFlanksourceComTopologyV1Manifest#statuses}
  */
  readonly statuses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#tag_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#tag_selector}
  */
  readonly tagSelector?: string;
  /**
  * Deprecated. Use 'labelSelector'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#tags DataK8SCanariesFlanksourceComTopologyV1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Deprecated. Use 'types'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#type DataK8SCanariesFlanksourceComTopologyV1Manifest#type}
  */
  readonly type?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#types DataK8SCanariesFlanksourceComTopologyV1Manifest#types}
  */
  readonly types?: string[];
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigsToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    cache: cdktf.stringToTerraform(struct!.cache),
    class: cdktf.stringToTerraform(struct!.class),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    field_selector: cdktf.stringToTerraform(struct!.fieldSelector),
    id: cdktf.stringToTerraform(struct!.id),
    include_deleted: cdktf.booleanToTerraform(struct!.includeDeleted),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    limit: cdktf.numberToTerraform(struct!.limit),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    scope: cdktf.stringToTerraform(struct!.scope),
    search: cdktf.stringToTerraform(struct!.search),
    statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statuses),
    tag_selector: cdktf.stringToTerraform(struct!.tagSelector),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigsToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache: {
      value: cdktf.stringToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_selector: {
      value: cdktf.stringToHclTerraform(struct!.fieldSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.includeDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_selector: {
      value: cdktf.stringToHclTerraform(struct!.tagSelector),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._fieldSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelector = this._fieldSelector;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._includeDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDeleted = this._includeDeleted;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._statuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.statuses = this._statuses;
    }
    if (this._tagSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSelector = this._tagSelector;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent = undefined;
      this._cache = undefined;
      this._class = undefined;
      this._externalId = undefined;
      this._fieldSelector = undefined;
      this._id = undefined;
      this._includeDeleted = undefined;
      this._labelSelector = undefined;
      this._limit = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._scope = undefined;
      this._search = undefined;
      this._statuses = undefined;
      this._tagSelector = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent = value.agent;
      this._cache = value.cache;
      this._class = value.class;
      this._externalId = value.externalId;
      this._fieldSelector = value.fieldSelector;
      this._id = value.id;
      this._includeDeleted = value.includeDeleted;
      this._labelSelector = value.labelSelector;
      this._limit = value.limit;
      this._name = value.name;
      this._namespace = value.namespace;
      this._scope = value.scope;
      this._search = value.search;
      this._statuses = value.statuses;
      this._tagSelector = value.tagSelector;
      this._tags = value.tags;
      this._type = value.type;
      this._types = value.types;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: string; 
  public get cache() {
    return this.getStringAttribute('cache');
  }
  public set cache(value: string) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // field_selector - computed: false, optional: true, required: false
  private _fieldSelector?: string; 
  public get fieldSelector() {
    return this.getStringAttribute('field_selector');
  }
  public set fieldSelector(value: string) {
    this._fieldSelector = value;
  }
  public resetFieldSelector() {
    this._fieldSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorInput() {
    return this._fieldSelector;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_deleted - computed: false, optional: true, required: false
  private _includeDeleted?: boolean | cdktf.IResolvable; 
  public get includeDeleted() {
    return this.getBooleanAttribute('include_deleted');
  }
  public set includeDeleted(value: boolean | cdktf.IResolvable) {
    this._includeDeleted = value;
  }
  public resetIncludeDeleted() {
    this._includeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedInput() {
    return this._includeDeleted;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // statuses - computed: false, optional: true, required: false
  private _statuses?: string[]; 
  public get statuses() {
    return this.getListAttribute('statuses');
  }
  public set statuses(value: string[]) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
  }

  // tag_selector - computed: false, optional: true, required: false
  private _tagSelector?: string; 
  public get tagSelector() {
    return this.getStringAttribute('tag_selector');
  }
  public set tagSelector(value: string) {
    this._tagSelector = value;
  }
  public resetTagSelector() {
    this._tagSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSelectorInput() {
    return this._tagSelector;
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

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigsOutputReference {
    return new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#expr DataK8SCanariesFlanksourceComTopologyV1Manifest#expr}
  */
  readonly expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#javascript DataK8SCanariesFlanksourceComTopologyV1Manifest#javascript}
  */
  readonly javascript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#json_path DataK8SCanariesFlanksourceComTopologyV1Manifest#json_path}
  */
  readonly jsonPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#template DataK8SCanariesFlanksourceComTopologyV1Manifest#template}
  */
  readonly template?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsIdToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expr: cdktf.stringToTerraform(struct!.expr),
    javascript: cdktf.stringToTerraform(struct!.javascript),
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsIdToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expr: {
      value: cdktf.stringToHclTerraform(struct!.expr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    javascript: {
      value: cdktf.stringToHclTerraform(struct!.javascript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_path: {
      value: cdktf.stringToHclTerraform(struct!.jsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expr !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr;
    }
    if (this._javascript !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascript = this._javascript;
    }
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expr = undefined;
      this._javascript = undefined;
      this._jsonPath = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expr = value.expr;
      this._javascript = value.javascript;
      this._jsonPath = value.jsonPath;
      this._template = value.template;
    }
  }

  // expr - computed: false, optional: true, required: false
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  public resetExpr() {
    this._expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
  }

  // javascript - computed: false, optional: true, required: false
  private _javascript?: string; 
  public get javascript() {
    return this.getStringAttribute('javascript');
  }
  public set javascript(value: string) {
    this._javascript = value;
  }
  public resetJavascript() {
    this._javascript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptInput() {
    return this._javascript;
  }

  // json_path - computed: false, optional: true, required: false
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  public resetJsonPath() {
    this._jsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#labels DataK8SCanariesFlanksourceComTopologyV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#type DataK8SCanariesFlanksourceComTopologyV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogsToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogsToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
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

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
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
      this._labels = value.labels;
      this._name = value.name;
      this._type = value.type;
    }
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogsOutputReference {
    return new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsParentLookup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#external_id DataK8SCanariesFlanksourceComTopologyV1Manifest#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#namespace DataK8SCanariesFlanksourceComTopologyV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#type DataK8SCanariesFlanksourceComTopologyV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsParentLookupToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsParentLookup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsParentLookupToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsParentLookup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsParentLookupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsParentLookup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsParentLookup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationships {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#ref DataK8SCanariesFlanksourceComTopologyV1Manifest#ref}
  */
  readonly ref?: string;
  /**
  * The type of relationship, e.g. dependsOn, subcomponentOf, providesApis, consumesApis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#type DataK8SCanariesFlanksourceComTopologyV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationshipsToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationships | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.stringToTerraform(struct!.ref),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationshipsToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationships | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationshipsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationships | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationships | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ref = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ref = value.ref;
      this._type = value.type;
    }
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationshipsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationships[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationshipsOutputReference {
    return new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationshipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectors {
  /**
  * Agent can be the agent id or the name of the agent. Additionally, the special 'self' value can be used to select resources without an agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#agent DataK8SCanariesFlanksourceComTopologyV1Manifest#agent}
  */
  readonly agent?: string;
  /**
  * Cache directives 'no-cache' (should not fetch from cache but can be cached) 'no-store' (should not cache) 'max-age=X' (cache for X duration)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#cache DataK8SCanariesFlanksourceComTopologyV1Manifest#cache}
  */
  readonly cache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#field_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#field_selector}
  */
  readonly fieldSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#id DataK8SCanariesFlanksourceComTopologyV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#include_deleted DataK8SCanariesFlanksourceComTopologyV1Manifest#include_deleted}
  */
  readonly includeDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#label_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#limit DataK8SCanariesFlanksourceComTopologyV1Manifest#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#namespace DataK8SCanariesFlanksourceComTopologyV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#scope DataK8SCanariesFlanksourceComTopologyV1Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Search query that applies to the resource name, tag & labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#search DataK8SCanariesFlanksourceComTopologyV1Manifest#search}
  */
  readonly search?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#statuses DataK8SCanariesFlanksourceComTopologyV1Manifest#statuses}
  */
  readonly statuses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#tag_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#tag_selector}
  */
  readonly tagSelector?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#types DataK8SCanariesFlanksourceComTopologyV1Manifest#types}
  */
  readonly types?: string[];
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectorsToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    cache: cdktf.stringToTerraform(struct!.cache),
    field_selector: cdktf.stringToTerraform(struct!.fieldSelector),
    id: cdktf.stringToTerraform(struct!.id),
    include_deleted: cdktf.booleanToTerraform(struct!.includeDeleted),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    limit: cdktf.numberToTerraform(struct!.limit),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    scope: cdktf.stringToTerraform(struct!.scope),
    search: cdktf.stringToTerraform(struct!.search),
    statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statuses),
    tag_selector: cdktf.stringToTerraform(struct!.tagSelector),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectorsToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache: {
      value: cdktf.stringToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_selector: {
      value: cdktf.stringToHclTerraform(struct!.fieldSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.includeDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_selector: {
      value: cdktf.stringToHclTerraform(struct!.tagSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._fieldSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelector = this._fieldSelector;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._includeDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDeleted = this._includeDeleted;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._statuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.statuses = this._statuses;
    }
    if (this._tagSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSelector = this._tagSelector;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent = undefined;
      this._cache = undefined;
      this._fieldSelector = undefined;
      this._id = undefined;
      this._includeDeleted = undefined;
      this._labelSelector = undefined;
      this._limit = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._scope = undefined;
      this._search = undefined;
      this._statuses = undefined;
      this._tagSelector = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent = value.agent;
      this._cache = value.cache;
      this._fieldSelector = value.fieldSelector;
      this._id = value.id;
      this._includeDeleted = value.includeDeleted;
      this._labelSelector = value.labelSelector;
      this._limit = value.limit;
      this._name = value.name;
      this._namespace = value.namespace;
      this._scope = value.scope;
      this._search = value.search;
      this._statuses = value.statuses;
      this._tagSelector = value.tagSelector;
      this._types = value.types;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: string; 
  public get cache() {
    return this.getStringAttribute('cache');
  }
  public set cache(value: string) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // field_selector - computed: false, optional: true, required: false
  private _fieldSelector?: string; 
  public get fieldSelector() {
    return this.getStringAttribute('field_selector');
  }
  public set fieldSelector(value: string) {
    this._fieldSelector = value;
  }
  public resetFieldSelector() {
    this._fieldSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorInput() {
    return this._fieldSelector;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_deleted - computed: false, optional: true, required: false
  private _includeDeleted?: boolean | cdktf.IResolvable; 
  public get includeDeleted() {
    return this.getBooleanAttribute('include_deleted');
  }
  public set includeDeleted(value: boolean | cdktf.IResolvable) {
    this._includeDeleted = value;
  }
  public resetIncludeDeleted() {
    this._includeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedInput() {
    return this._includeDeleted;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // statuses - computed: false, optional: true, required: false
  private _statuses?: string[]; 
  public get statuses() {
    return this.getListAttribute('statuses');
  }
  public set statuses(value: string[]) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
  }

  // tag_selector - computed: false, optional: true, required: false
  private _tagSelector?: string; 
  public get tagSelector() {
    return this.getStringAttribute('tag_selector');
  }
  public set tagSelector(value: string) {
    this._tagSelector = value;
  }
  public resetTagSelector() {
    this._tagSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSelectorInput() {
    return this._tagSelector;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectorsOutputReference {
    return new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryIncidents {
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryIncidentsToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryIncidents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryIncidentsToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryIncidents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryIncidentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryIncidents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryIncidents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryInsights {
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryInsightsToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryInsights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryInsightsToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryInsights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryInsightsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryInsights | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryInsights | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#checks DataK8SCanariesFlanksourceComTopologyV1Manifest#checks}
  */
  readonly checks?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#healthy DataK8SCanariesFlanksourceComTopologyV1Manifest#healthy}
  */
  readonly healthy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#incidents DataK8SCanariesFlanksourceComTopologyV1Manifest#incidents}
  */
  readonly incidents?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryIncidents;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#info DataK8SCanariesFlanksourceComTopologyV1Manifest#info}
  */
  readonly info?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#insights DataK8SCanariesFlanksourceComTopologyV1Manifest#insights}
  */
  readonly insights?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryInsights;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#unhealthy DataK8SCanariesFlanksourceComTopologyV1Manifest#unhealthy}
  */
  readonly unhealthy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#warning DataK8SCanariesFlanksourceComTopologyV1Manifest#warning}
  */
  readonly warning?: number;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checks: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.checks),
    healthy: cdktf.numberToTerraform(struct!.healthy),
    incidents: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryIncidentsToTerraform(struct!.incidents),
    info: cdktf.numberToTerraform(struct!.info),
    insights: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryInsightsToTerraform(struct!.insights),
    unhealthy: cdktf.numberToTerraform(struct!.unhealthy),
    warning: cdktf.numberToTerraform(struct!.warning),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checks: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.checks),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    healthy: {
      value: cdktf.numberToHclTerraform(struct!.healthy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    incidents: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryIncidentsToHclTerraform(struct!.incidents),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryIncidents",
    },
    info: {
      value: cdktf.numberToHclTerraform(struct!.info),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insights: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryInsightsToHclTerraform(struct!.insights),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryInsights",
    },
    unhealthy: {
      value: cdktf.numberToHclTerraform(struct!.unhealthy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning: {
      value: cdktf.numberToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checks !== undefined) {
      hasAnyValues = true;
      internalValueResult.checks = this._checks;
    }
    if (this._healthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy;
    }
    if (this._incidents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidents = this._incidents?.internalValue;
    }
    if (this._info !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info;
    }
    if (this._insights?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insights = this._insights?.internalValue;
    }
    if (this._unhealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthy = this._unhealthy;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checks = undefined;
      this._healthy = undefined;
      this._incidents.internalValue = undefined;
      this._info = undefined;
      this._insights.internalValue = undefined;
      this._unhealthy = undefined;
      this._warning = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checks = value.checks;
      this._healthy = value.healthy;
      this._incidents.internalValue = value.incidents;
      this._info = value.info;
      this._insights.internalValue = value.insights;
      this._unhealthy = value.unhealthy;
      this._warning = value.warning;
    }
  }

  // checks - computed: false, optional: true, required: false
  private _checks?: { [key: string]: string }; 
  public get checks() {
    return this.getStringMapAttribute('checks');
  }
  public set checks(value: { [key: string]: string }) {
    this._checks = value;
  }
  public resetChecks() {
    this._checks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksInput() {
    return this._checks;
  }

  // healthy - computed: false, optional: true, required: false
  private _healthy?: number; 
  public get healthy() {
    return this.getNumberAttribute('healthy');
  }
  public set healthy(value: number) {
    this._healthy = value;
  }
  public resetHealthy() {
    this._healthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy;
  }

  // incidents - computed: false, optional: true, required: false
  private _incidents = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryIncidentsOutputReference(this, "incidents");
  public get incidents() {
    return this._incidents;
  }
  public putIncidents(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryIncidents) {
    this._incidents.internalValue = value;
  }
  public resetIncidents() {
    this._incidents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentsInput() {
    return this._incidents.internalValue;
  }

  // info - computed: false, optional: true, required: false
  private _info?: number; 
  public get info() {
    return this.getNumberAttribute('info');
  }
  public set info(value: number) {
    this._info = value;
  }
  public resetInfo() {
    this._info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info;
  }

  // insights - computed: false, optional: true, required: false
  private _insights = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryInsightsOutputReference(this, "insights");
  public get insights() {
    return this._insights;
  }
  public putInsights(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryInsights) {
    this._insights.internalValue = value;
  }
  public resetInsights() {
    this._insights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsInput() {
    return this._insights.internalValue;
  }

  // unhealthy - computed: false, optional: true, required: false
  private _unhealthy?: number; 
  public get unhealthy() {
    return this.getNumberAttribute('unhealthy');
  }
  public set unhealthy(value: number) {
    this._unhealthy = value;
  }
  public resetUnhealthy() {
    this._unhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyInput() {
    return this._unhealthy;
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: number; 
  public get warning() {
    return this.getNumberAttribute('warning');
  }
  public set warning(value: number) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#checks DataK8SCanariesFlanksourceComTopologyV1Manifest#checks}
  */
  readonly checks?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecks[] | cdktf.IResolvable;
  /**
  * Create new child components
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#components DataK8SCanariesFlanksourceComTopologyV1Manifest#components}
  */
  readonly components?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#config_id DataK8SCanariesFlanksourceComTopologyV1Manifest#config_id}
  */
  readonly configId?: string;
  /**
  * Lookup and associate config items with this component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#configs DataK8SCanariesFlanksourceComTopologyV1Manifest#configs}
  */
  readonly configs?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#external_id DataK8SCanariesFlanksourceComTopologyV1Manifest#external_id}
  */
  readonly externalId?: string;
  /**
  * Only applies when using lookup, when specified the components and properties specified under ForEach will be templated using the components returned by the lookup ${.properties} can be used to reference the properties of the component ${.component} can be used to reference the component itself
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#for_each DataK8SCanariesFlanksourceComTopologyV1Manifest#for_each}
  */
  readonly forEach?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#health DataK8SCanariesFlanksourceComTopologyV1Manifest#health}
  */
  readonly health?: string;
  /**
  * healthExpr allows defining a cel expression to evaluate the health of a component based on the summary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#health_expr DataK8SCanariesFlanksourceComTopologyV1Manifest#health_expr}
  */
  readonly healthExpr?: string;
  /**
  * If set to true, do not display in UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#hidden DataK8SCanariesFlanksourceComTopologyV1Manifest#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#icon DataK8SCanariesFlanksourceComTopologyV1Manifest#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#id DataK8SCanariesFlanksourceComTopologyV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsId;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#labels DataK8SCanariesFlanksourceComTopologyV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The lifecycle state of the component e.g. production, staging, dev, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#lifecycle DataK8SCanariesFlanksourceComTopologyV1Manifest#lifecycle}
  */
  readonly lifecycle?: string;
  /**
  * Logs is a list of logs selector for apm-hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#logs DataK8SCanariesFlanksourceComTopologyV1Manifest#logs}
  */
  readonly logs?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogs[] | cdktf.IResolvable;
  /**
  * Lookup component definitions from an external source, use the forEach property to iterate over the results to further enrich each component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#lookup DataK8SCanariesFlanksourceComTopologyV1Manifest#lookup}
  */
  readonly lookup?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#namespace DataK8SCanariesFlanksourceComTopologyV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#order DataK8SCanariesFlanksourceComTopologyV1Manifest#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#owner DataK8SCanariesFlanksourceComTopologyV1Manifest#owner}
  */
  readonly owner?: string;
  /**
  * Reference to populate parent_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#parent_lookup DataK8SCanariesFlanksourceComTopologyV1Manifest#parent_lookup}
  */
  readonly parentLookup?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsParentLookup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#properties DataK8SCanariesFlanksourceComTopologyV1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#relationships DataK8SCanariesFlanksourceComTopologyV1Manifest#relationships}
  */
  readonly relationships?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationships[] | cdktf.IResolvable;
  /**
  * Lookup and associcate other components with this component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#selectors DataK8SCanariesFlanksourceComTopologyV1Manifest#selectors}
  */
  readonly selectors?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectors[] | cdktf.IResolvable;
  /**
  * statusExpr allows defining a cel expression to evaluate the status of a component based on the summary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#status_expr DataK8SCanariesFlanksourceComTopologyV1Manifest#status_expr}
  */
  readonly statusExpr?: string;
  /**
  * Summary is the health, incidents, insights & check summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#summary DataK8SCanariesFlanksourceComTopologyV1Manifest#summary}
  */
  readonly summary?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummary;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#tooltip DataK8SCanariesFlanksourceComTopologyV1Manifest#tooltip}
  */
  readonly tooltip?: string;
  /**
  * The type of component, e.g. service, API, website, library, database, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#type DataK8SCanariesFlanksourceComTopologyV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checks: cdktf.listMapper(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksToTerraform, false)(struct!.checks),
    components: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.components),
    config_id: cdktf.stringToTerraform(struct!.configId),
    configs: cdktf.listMapper(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigsToTerraform, false)(struct!.configs),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    for_each: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.forEach),
    health: cdktf.stringToTerraform(struct!.health),
    health_expr: cdktf.stringToTerraform(struct!.healthExpr),
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    icon: cdktf.stringToTerraform(struct!.icon),
    id: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsIdToTerraform(struct!.id),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    lifecycle: cdktf.stringToTerraform(struct!.lifecycle),
    logs: cdktf.listMapper(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogsToTerraform, false)(struct!.logs),
    lookup: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.lookup),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    order: cdktf.numberToTerraform(struct!.order),
    owner: cdktf.stringToTerraform(struct!.owner),
    parent_lookup: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsParentLookupToTerraform(struct!.parentLookup),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    relationships: cdktf.listMapper(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationshipsToTerraform, false)(struct!.relationships),
    selectors: cdktf.listMapper(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectorsToTerraform, false)(struct!.selectors),
    status_expr: cdktf.stringToTerraform(struct!.statusExpr),
    summary: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryToTerraform(struct!.summary),
    tooltip: cdktf.stringToTerraform(struct!.tooltip),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checks: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksToHclTerraform, false)(struct!.checks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksList",
    },
    components: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.components),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config_id: {
      value: cdktf.stringToHclTerraform(struct!.configId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configs: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigsToHclTerraform, false)(struct!.configs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigsList",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    for_each: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.forEach),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    health: {
      value: cdktf.stringToHclTerraform(struct!.health),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_expr: {
      value: cdktf.stringToHclTerraform(struct!.healthExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsIdToHclTerraform(struct!.id),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsId",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    lifecycle: {
      value: cdktf.stringToHclTerraform(struct!.lifecycle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logs: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogsToHclTerraform, false)(struct!.logs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogsList",
    },
    lookup: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.lookup),
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
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_lookup: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsParentLookupToHclTerraform(struct!.parentLookup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsParentLookup",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    relationships: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationshipsToHclTerraform, false)(struct!.relationships),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationshipsList",
    },
    selectors: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectorsToHclTerraform, false)(struct!.selectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectorsList",
    },
    status_expr: {
      value: cdktf.stringToHclTerraform(struct!.statusExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryToHclTerraform(struct!.summary),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummary",
    },
    tooltip: {
      value: cdktf.stringToHclTerraform(struct!.tooltip),
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checks = this._checks?.internalValue;
    }
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._configId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configId = this._configId;
    }
    if (this._configs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs?.internalValue;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._forEach !== undefined) {
      hasAnyValues = true;
      internalValueResult.forEach = this._forEach;
    }
    if (this._health !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health;
    }
    if (this._healthExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthExpr = this._healthExpr;
    }
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._id?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id?.internalValue;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._lifecycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._lookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookup = this._lookup;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._parentLookup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentLookup = this._parentLookup?.internalValue;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._relationships?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationships = this._relationships?.internalValue;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._statusExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusExpr = this._statusExpr;
    }
    if (this._summary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary?.internalValue;
    }
    if (this._tooltip !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checks.internalValue = undefined;
      this._components = undefined;
      this._configId = undefined;
      this._configs.internalValue = undefined;
      this._externalId = undefined;
      this._forEach = undefined;
      this._health = undefined;
      this._healthExpr = undefined;
      this._hidden = undefined;
      this._icon = undefined;
      this._id.internalValue = undefined;
      this._labels = undefined;
      this._lifecycle = undefined;
      this._logs.internalValue = undefined;
      this._lookup = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._order = undefined;
      this._owner = undefined;
      this._parentLookup.internalValue = undefined;
      this._properties = undefined;
      this._relationships.internalValue = undefined;
      this._selectors.internalValue = undefined;
      this._statusExpr = undefined;
      this._summary.internalValue = undefined;
      this._tooltip = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checks.internalValue = value.checks;
      this._components = value.components;
      this._configId = value.configId;
      this._configs.internalValue = value.configs;
      this._externalId = value.externalId;
      this._forEach = value.forEach;
      this._health = value.health;
      this._healthExpr = value.healthExpr;
      this._hidden = value.hidden;
      this._icon = value.icon;
      this._id.internalValue = value.id;
      this._labels = value.labels;
      this._lifecycle = value.lifecycle;
      this._logs.internalValue = value.logs;
      this._lookup = value.lookup;
      this._name = value.name;
      this._namespace = value.namespace;
      this._order = value.order;
      this._owner = value.owner;
      this._parentLookup.internalValue = value.parentLookup;
      this._properties = value.properties;
      this._relationships.internalValue = value.relationships;
      this._selectors.internalValue = value.selectors;
      this._statusExpr = value.statusExpr;
      this._summary.internalValue = value.summary;
      this._tooltip = value.tooltip;
      this._type = value.type;
    }
  }

  // checks - computed: false, optional: true, required: false
  private _checks = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecksList(this, "checks", false);
  public get checks() {
    return this._checks;
  }
  public putChecks(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsChecks[] | cdktf.IResolvable) {
    this._checks.internalValue = value;
  }
  public resetChecks() {
    this._checks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksInput() {
    return this._checks.internalValue;
  }

  // components - computed: false, optional: true, required: false
  private _components?: { [key: string]: string }; 
  public get components() {
    return this.getStringMapAttribute('components');
  }
  public set components(value: { [key: string]: string }) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // config_id - computed: false, optional: true, required: false
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // configs - computed: false, optional: true, required: false
  private _configs = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsConfigs[] | cdktf.IResolvable) {
    this._configs.internalValue = value;
  }
  public resetConfigs() {
    this._configs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs.internalValue;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // for_each - computed: false, optional: true, required: false
  private _forEach?: { [key: string]: string }; 
  public get forEach() {
    return this.getStringMapAttribute('for_each');
  }
  public set forEach(value: { [key: string]: string }) {
    this._forEach = value;
  }
  public resetForEach() {
    this._forEach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forEachInput() {
    return this._forEach;
  }

  // health - computed: false, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // health_expr - computed: false, optional: true, required: false
  private _healthExpr?: string; 
  public get healthExpr() {
    return this.getStringAttribute('health_expr');
  }
  public set healthExpr(value: string) {
    this._healthExpr = value;
  }
  public resetHealthExpr() {
    this._healthExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthExprInput() {
    return this._healthExpr;
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: false, optional: true, required: false
  private _id = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsIdOutputReference(this, "id");
  public get id() {
    return this._id;
  }
  public putId(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsId) {
    this._id.internalValue = value;
  }
  public resetId() {
    this._id.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id.internalValue;
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

  // lifecycle - computed: false, optional: true, required: false
  private _lifecycle?: string; 
  public get lifecycle() {
    return this.getStringAttribute('lifecycle');
  }
  public set lifecycle(value: string) {
    this._lifecycle = value;
  }
  public resetLifecycle() {
    this._lifecycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle;
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }
  public putLogs(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsLogs[] | cdktf.IResolvable) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // lookup - computed: false, optional: true, required: false
  private _lookup?: { [key: string]: string }; 
  public get lookup() {
    return this.getStringMapAttribute('lookup');
  }
  public set lookup(value: { [key: string]: string }) {
    this._lookup = value;
  }
  public resetLookup() {
    this._lookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupInput() {
    return this._lookup;
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

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // parent_lookup - computed: false, optional: true, required: false
  private _parentLookup = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsParentLookupOutputReference(this, "parent_lookup");
  public get parentLookup() {
    return this._parentLookup;
  }
  public putParentLookup(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsParentLookup) {
    this._parentLookup.internalValue = value;
  }
  public resetParentLookup() {
    this._parentLookup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentLookupInput() {
    return this._parentLookup.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // relationships - computed: false, optional: true, required: false
  private _relationships = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationshipsList(this, "relationships", false);
  public get relationships() {
    return this._relationships;
  }
  public putRelationships(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsRelationships[] | cdktf.IResolvable) {
    this._relationships.internalValue = value;
  }
  public resetRelationships() {
    this._relationships.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationshipsInput() {
    return this._relationships.internalValue;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectorsList(this, "selectors", false);
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSelectors[] | cdktf.IResolvable) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // status_expr - computed: false, optional: true, required: false
  private _statusExpr?: string; 
  public get statusExpr() {
    return this.getStringAttribute('status_expr');
  }
  public set statusExpr(value: string) {
    this._statusExpr = value;
  }
  public resetStatusExpr() {
    this._statusExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusExprInput() {
    return this._statusExpr;
  }

  // summary - computed: false, optional: true, required: false
  private _summary = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummaryOutputReference(this, "summary");
  public get summary() {
    return this._summary;
  }
  public putSummary(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsSummary) {
    this._summary.internalValue = value;
  }
  public resetSummary() {
    this._summary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary.internalValue;
  }

  // tooltip - computed: false, optional: true, required: false
  private _tooltip?: string; 
  public get tooltip() {
    return this.getStringAttribute('tooltip');
  }
  public set tooltip(value: string) {
    this._tooltip = value;
  }
  public resetTooltip() {
    this._tooltip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip;
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponents[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsOutputReference {
    return new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigs {
  /**
  * Agent can be the agent id or the name of the agent. Additionally, the special 'self' value can be used to select resources without an agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#agent DataK8SCanariesFlanksourceComTopologyV1Manifest#agent}
  */
  readonly agent?: string;
  /**
  * Cache directives 'no-cache' (should not fetch from cache but can be cached) 'no-store' (should not cache) 'max-age=X' (cache for X duration)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#cache DataK8SCanariesFlanksourceComTopologyV1Manifest#cache}
  */
  readonly cache?: string;
  /**
  * Deprecated. Use 'fieldSelector (config_class=)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#class DataK8SCanariesFlanksourceComTopologyV1Manifest#class}
  */
  readonly class?: string;
  /**
  * Deprecated. Use 'fieldSelector (external_id=)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#external_id DataK8SCanariesFlanksourceComTopologyV1Manifest#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#field_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#field_selector}
  */
  readonly fieldSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#id DataK8SCanariesFlanksourceComTopologyV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#include_deleted DataK8SCanariesFlanksourceComTopologyV1Manifest#include_deleted}
  */
  readonly includeDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#label_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#limit DataK8SCanariesFlanksourceComTopologyV1Manifest#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#namespace DataK8SCanariesFlanksourceComTopologyV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#scope DataK8SCanariesFlanksourceComTopologyV1Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Search query that applies to the resource name, tag & labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#search DataK8SCanariesFlanksourceComTopologyV1Manifest#search}
  */
  readonly search?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#statuses DataK8SCanariesFlanksourceComTopologyV1Manifest#statuses}
  */
  readonly statuses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#tag_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#tag_selector}
  */
  readonly tagSelector?: string;
  /**
  * Deprecated. Use 'labelSelector'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#tags DataK8SCanariesFlanksourceComTopologyV1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Deprecated. Use 'types'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#type DataK8SCanariesFlanksourceComTopologyV1Manifest#type}
  */
  readonly type?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#types DataK8SCanariesFlanksourceComTopologyV1Manifest#types}
  */
  readonly types?: string[];
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigsToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    cache: cdktf.stringToTerraform(struct!.cache),
    class: cdktf.stringToTerraform(struct!.class),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    field_selector: cdktf.stringToTerraform(struct!.fieldSelector),
    id: cdktf.stringToTerraform(struct!.id),
    include_deleted: cdktf.booleanToTerraform(struct!.includeDeleted),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    limit: cdktf.numberToTerraform(struct!.limit),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    scope: cdktf.stringToTerraform(struct!.scope),
    search: cdktf.stringToTerraform(struct!.search),
    statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statuses),
    tag_selector: cdktf.stringToTerraform(struct!.tagSelector),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigsToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache: {
      value: cdktf.stringToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_selector: {
      value: cdktf.stringToHclTerraform(struct!.fieldSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.includeDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_selector: {
      value: cdktf.stringToHclTerraform(struct!.tagSelector),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._fieldSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelector = this._fieldSelector;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._includeDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDeleted = this._includeDeleted;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._statuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.statuses = this._statuses;
    }
    if (this._tagSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSelector = this._tagSelector;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent = undefined;
      this._cache = undefined;
      this._class = undefined;
      this._externalId = undefined;
      this._fieldSelector = undefined;
      this._id = undefined;
      this._includeDeleted = undefined;
      this._labelSelector = undefined;
      this._limit = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._scope = undefined;
      this._search = undefined;
      this._statuses = undefined;
      this._tagSelector = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent = value.agent;
      this._cache = value.cache;
      this._class = value.class;
      this._externalId = value.externalId;
      this._fieldSelector = value.fieldSelector;
      this._id = value.id;
      this._includeDeleted = value.includeDeleted;
      this._labelSelector = value.labelSelector;
      this._limit = value.limit;
      this._name = value.name;
      this._namespace = value.namespace;
      this._scope = value.scope;
      this._search = value.search;
      this._statuses = value.statuses;
      this._tagSelector = value.tagSelector;
      this._tags = value.tags;
      this._type = value.type;
      this._types = value.types;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: string; 
  public get cache() {
    return this.getStringAttribute('cache');
  }
  public set cache(value: string) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // field_selector - computed: false, optional: true, required: false
  private _fieldSelector?: string; 
  public get fieldSelector() {
    return this.getStringAttribute('field_selector');
  }
  public set fieldSelector(value: string) {
    this._fieldSelector = value;
  }
  public resetFieldSelector() {
    this._fieldSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorInput() {
    return this._fieldSelector;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_deleted - computed: false, optional: true, required: false
  private _includeDeleted?: boolean | cdktf.IResolvable; 
  public get includeDeleted() {
    return this.getBooleanAttribute('include_deleted');
  }
  public set includeDeleted(value: boolean | cdktf.IResolvable) {
    this._includeDeleted = value;
  }
  public resetIncludeDeleted() {
    this._includeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedInput() {
    return this._includeDeleted;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // statuses - computed: false, optional: true, required: false
  private _statuses?: string[]; 
  public get statuses() {
    return this.getListAttribute('statuses');
  }
  public set statuses(value: string[]) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
  }

  // tag_selector - computed: false, optional: true, required: false
  private _tagSelector?: string; 
  public get tagSelector() {
    return this.getStringAttribute('tag_selector');
  }
  public set tagSelector(value: string) {
    this._tagSelector = value;
  }
  public resetTagSelector() {
    this._tagSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSelectorInput() {
    return this._tagSelector;
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

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigsOutputReference {
    return new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBySelector {
  /**
  * Agent can be the agent id or the name of the agent. Additionally, the special 'self' value can be used to select resources without an agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#agent DataK8SCanariesFlanksourceComTopologyV1Manifest#agent}
  */
  readonly agent?: string;
  /**
  * Cache directives 'no-cache' (should not fetch from cache but can be cached) 'no-store' (should not cache) 'max-age=X' (cache for X duration)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#cache DataK8SCanariesFlanksourceComTopologyV1Manifest#cache}
  */
  readonly cache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#field_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#field_selector}
  */
  readonly fieldSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#id DataK8SCanariesFlanksourceComTopologyV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#include_deleted DataK8SCanariesFlanksourceComTopologyV1Manifest#include_deleted}
  */
  readonly includeDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#label_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#limit DataK8SCanariesFlanksourceComTopologyV1Manifest#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#namespace DataK8SCanariesFlanksourceComTopologyV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#scope DataK8SCanariesFlanksourceComTopologyV1Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Search query that applies to the resource name, tag & labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#search DataK8SCanariesFlanksourceComTopologyV1Manifest#search}
  */
  readonly search?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#statuses DataK8SCanariesFlanksourceComTopologyV1Manifest#statuses}
  */
  readonly statuses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#tag_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#tag_selector}
  */
  readonly tagSelector?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#types DataK8SCanariesFlanksourceComTopologyV1Manifest#types}
  */
  readonly types?: string[];
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBySelectorToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBySelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    cache: cdktf.stringToTerraform(struct!.cache),
    field_selector: cdktf.stringToTerraform(struct!.fieldSelector),
    id: cdktf.stringToTerraform(struct!.id),
    include_deleted: cdktf.booleanToTerraform(struct!.includeDeleted),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    limit: cdktf.numberToTerraform(struct!.limit),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    scope: cdktf.stringToTerraform(struct!.scope),
    search: cdktf.stringToTerraform(struct!.search),
    statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statuses),
    tag_selector: cdktf.stringToTerraform(struct!.tagSelector),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBySelectorToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBySelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache: {
      value: cdktf.stringToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_selector: {
      value: cdktf.stringToHclTerraform(struct!.fieldSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.includeDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_selector: {
      value: cdktf.stringToHclTerraform(struct!.tagSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBySelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBySelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._fieldSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelector = this._fieldSelector;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._includeDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDeleted = this._includeDeleted;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._statuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.statuses = this._statuses;
    }
    if (this._tagSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSelector = this._tagSelector;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBySelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent = undefined;
      this._cache = undefined;
      this._fieldSelector = undefined;
      this._id = undefined;
      this._includeDeleted = undefined;
      this._labelSelector = undefined;
      this._limit = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._scope = undefined;
      this._search = undefined;
      this._statuses = undefined;
      this._tagSelector = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent = value.agent;
      this._cache = value.cache;
      this._fieldSelector = value.fieldSelector;
      this._id = value.id;
      this._includeDeleted = value.includeDeleted;
      this._labelSelector = value.labelSelector;
      this._limit = value.limit;
      this._name = value.name;
      this._namespace = value.namespace;
      this._scope = value.scope;
      this._search = value.search;
      this._statuses = value.statuses;
      this._tagSelector = value.tagSelector;
      this._types = value.types;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: string; 
  public get cache() {
    return this.getStringAttribute('cache');
  }
  public set cache(value: string) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // field_selector - computed: false, optional: true, required: false
  private _fieldSelector?: string; 
  public get fieldSelector() {
    return this.getStringAttribute('field_selector');
  }
  public set fieldSelector(value: string) {
    this._fieldSelector = value;
  }
  public resetFieldSelector() {
    this._fieldSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorInput() {
    return this._fieldSelector;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_deleted - computed: false, optional: true, required: false
  private _includeDeleted?: boolean | cdktf.IResolvable; 
  public get includeDeleted() {
    return this.getBooleanAttribute('include_deleted');
  }
  public set includeDeleted(value: boolean | cdktf.IResolvable) {
    this._includeDeleted = value;
  }
  public resetIncludeDeleted() {
    this._includeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedInput() {
    return this._includeDeleted;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // statuses - computed: false, optional: true, required: false
  private _statuses?: string[]; 
  public get statuses() {
    return this.getListAttribute('statuses');
  }
  public set statuses(value: string[]) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
  }

  // tag_selector - computed: false, optional: true, required: false
  private _tagSelector?: string; 
  public get tagSelector() {
    return this.getStringAttribute('tag_selector');
  }
  public set tagSelector(value: string) {
    this._tagSelector = value;
  }
  public resetTagSelector() {
    this._tagSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSelectorInput() {
    return this._tagSelector;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#selector DataK8SCanariesFlanksourceComTopologyV1Manifest#selector}
  */
  readonly selector?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBySelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#tag DataK8SCanariesFlanksourceComTopologyV1Manifest#tag}
  */
  readonly tag: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupByToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBySelectorToTerraform(struct!.selector),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupByToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBySelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBySelector",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selector.internalValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selector.internalValue = value.selector;
      this._tag = value.tag;
    }
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBySelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBySelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#expr DataK8SCanariesFlanksourceComTopologyV1Manifest#expr}
  */
  readonly expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#javascript DataK8SCanariesFlanksourceComTopologyV1Manifest#javascript}
  */
  readonly javascript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#json_path DataK8SCanariesFlanksourceComTopologyV1Manifest#json_path}
  */
  readonly jsonPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#template DataK8SCanariesFlanksourceComTopologyV1Manifest#template}
  */
  readonly template?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecIdToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expr: cdktf.stringToTerraform(struct!.expr),
    javascript: cdktf.stringToTerraform(struct!.javascript),
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecIdToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expr: {
      value: cdktf.stringToHclTerraform(struct!.expr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    javascript: {
      value: cdktf.stringToHclTerraform(struct!.javascript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_path: {
      value: cdktf.stringToHclTerraform(struct!.jsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expr !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr;
    }
    if (this._javascript !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascript = this._javascript;
    }
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expr = undefined;
      this._javascript = undefined;
      this._jsonPath = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expr = value.expr;
      this._javascript = value.javascript;
      this._jsonPath = value.jsonPath;
      this._template = value.template;
    }
  }

  // expr - computed: false, optional: true, required: false
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  public resetExpr() {
    this._expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
  }

  // javascript - computed: false, optional: true, required: false
  private _javascript?: string; 
  public get javascript() {
    return this.getStringAttribute('javascript');
  }
  public set javascript(value: string) {
    this._javascript = value;
  }
  public resetJavascript() {
    this._javascript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptInput() {
    return this._javascript;
  }

  // json_path - computed: false, optional: true, required: false
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  public resetJsonPath() {
    this._jsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupConfig {
  /**
  * Agent can be the agent id or the name of the agent. Additionally, the special 'self' value can be used to select resources without an agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#agent DataK8SCanariesFlanksourceComTopologyV1Manifest#agent}
  */
  readonly agent?: string;
  /**
  * Cache directives 'no-cache' (should not fetch from cache but can be cached) 'no-store' (should not cache) 'max-age=X' (cache for X duration)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#cache DataK8SCanariesFlanksourceComTopologyV1Manifest#cache}
  */
  readonly cache?: string;
  /**
  * Deprecated. Use 'fieldSelector (config_class=)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#class DataK8SCanariesFlanksourceComTopologyV1Manifest#class}
  */
  readonly class?: string;
  /**
  * Deprecated. Use 'fieldSelector (external_id=)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#external_id DataK8SCanariesFlanksourceComTopologyV1Manifest#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#field_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#field_selector}
  */
  readonly fieldSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#id DataK8SCanariesFlanksourceComTopologyV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#include_deleted DataK8SCanariesFlanksourceComTopologyV1Manifest#include_deleted}
  */
  readonly includeDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#label_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#limit DataK8SCanariesFlanksourceComTopologyV1Manifest#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#namespace DataK8SCanariesFlanksourceComTopologyV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#scope DataK8SCanariesFlanksourceComTopologyV1Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Search query that applies to the resource name, tag & labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#search DataK8SCanariesFlanksourceComTopologyV1Manifest#search}
  */
  readonly search?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#statuses DataK8SCanariesFlanksourceComTopologyV1Manifest#statuses}
  */
  readonly statuses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#tag_selector DataK8SCanariesFlanksourceComTopologyV1Manifest#tag_selector}
  */
  readonly tagSelector?: string;
  /**
  * Deprecated. Use 'labelSelector'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#tags DataK8SCanariesFlanksourceComTopologyV1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Deprecated. Use 'types'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#type DataK8SCanariesFlanksourceComTopologyV1Manifest#type}
  */
  readonly type?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#types DataK8SCanariesFlanksourceComTopologyV1Manifest#types}
  */
  readonly types?: string[];
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupConfigToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    cache: cdktf.stringToTerraform(struct!.cache),
    class: cdktf.stringToTerraform(struct!.class),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    field_selector: cdktf.stringToTerraform(struct!.fieldSelector),
    id: cdktf.stringToTerraform(struct!.id),
    include_deleted: cdktf.booleanToTerraform(struct!.includeDeleted),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    limit: cdktf.numberToTerraform(struct!.limit),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    scope: cdktf.stringToTerraform(struct!.scope),
    search: cdktf.stringToTerraform(struct!.search),
    statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statuses),
    tag_selector: cdktf.stringToTerraform(struct!.tagSelector),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupConfigToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache: {
      value: cdktf.stringToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_selector: {
      value: cdktf.stringToHclTerraform(struct!.fieldSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.includeDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_selector: {
      value: cdktf.stringToHclTerraform(struct!.tagSelector),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._fieldSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelector = this._fieldSelector;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._includeDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDeleted = this._includeDeleted;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._statuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.statuses = this._statuses;
    }
    if (this._tagSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSelector = this._tagSelector;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent = undefined;
      this._cache = undefined;
      this._class = undefined;
      this._externalId = undefined;
      this._fieldSelector = undefined;
      this._id = undefined;
      this._includeDeleted = undefined;
      this._labelSelector = undefined;
      this._limit = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._scope = undefined;
      this._search = undefined;
      this._statuses = undefined;
      this._tagSelector = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent = value.agent;
      this._cache = value.cache;
      this._class = value.class;
      this._externalId = value.externalId;
      this._fieldSelector = value.fieldSelector;
      this._id = value.id;
      this._includeDeleted = value.includeDeleted;
      this._labelSelector = value.labelSelector;
      this._limit = value.limit;
      this._name = value.name;
      this._namespace = value.namespace;
      this._scope = value.scope;
      this._search = value.search;
      this._statuses = value.statuses;
      this._tagSelector = value.tagSelector;
      this._tags = value.tags;
      this._type = value.type;
      this._types = value.types;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: string; 
  public get cache() {
    return this.getStringAttribute('cache');
  }
  public set cache(value: string) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // field_selector - computed: false, optional: true, required: false
  private _fieldSelector?: string; 
  public get fieldSelector() {
    return this.getStringAttribute('field_selector');
  }
  public set fieldSelector(value: string) {
    this._fieldSelector = value;
  }
  public resetFieldSelector() {
    this._fieldSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorInput() {
    return this._fieldSelector;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_deleted - computed: false, optional: true, required: false
  private _includeDeleted?: boolean | cdktf.IResolvable; 
  public get includeDeleted() {
    return this.getBooleanAttribute('include_deleted');
  }
  public set includeDeleted(value: boolean | cdktf.IResolvable) {
    this._includeDeleted = value;
  }
  public resetIncludeDeleted() {
    this._includeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedInput() {
    return this._includeDeleted;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // statuses - computed: false, optional: true, required: false
  private _statuses?: string[]; 
  public get statuses() {
    return this.getListAttribute('statuses');
  }
  public set statuses(value: string[]) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
  }

  // tag_selector - computed: false, optional: true, required: false
  private _tagSelector?: string; 
  public get tagSelector() {
    return this.getStringAttribute('tag_selector');
  }
  public set tagSelector(value: string) {
    this._tagSelector = value;
  }
  public resetTagSelector() {
    this._tagSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSelectorInput() {
    return this._tagSelector;
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

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupDisplay {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#expr DataK8SCanariesFlanksourceComTopologyV1Manifest#expr}
  */
  readonly expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#javascript DataK8SCanariesFlanksourceComTopologyV1Manifest#javascript}
  */
  readonly javascript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#json_path DataK8SCanariesFlanksourceComTopologyV1Manifest#json_path}
  */
  readonly jsonPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#template DataK8SCanariesFlanksourceComTopologyV1Manifest#template}
  */
  readonly template?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupDisplayToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupDisplay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expr: cdktf.stringToTerraform(struct!.expr),
    javascript: cdktf.stringToTerraform(struct!.javascript),
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupDisplayToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupDisplay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expr: {
      value: cdktf.stringToHclTerraform(struct!.expr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    javascript: {
      value: cdktf.stringToHclTerraform(struct!.javascript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_path: {
      value: cdktf.stringToHclTerraform(struct!.jsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupDisplayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupDisplay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expr !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr;
    }
    if (this._javascript !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascript = this._javascript;
    }
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupDisplay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expr = undefined;
      this._javascript = undefined;
      this._jsonPath = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expr = value.expr;
      this._javascript = value.javascript;
      this._jsonPath = value.jsonPath;
      this._template = value.template;
    }
  }

  // expr - computed: false, optional: true, required: false
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  public resetExpr() {
    this._expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
  }

  // javascript - computed: false, optional: true, required: false
  private _javascript?: string; 
  public get javascript() {
    return this.getStringAttribute('javascript');
  }
  public set javascript(value: string) {
    this._javascript = value;
  }
  public resetJavascript() {
    this._javascript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptInput() {
    return this._javascript;
  }

  // json_path - computed: false, optional: true, required: false
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  public resetJsonPath() {
    this._jsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookup {
  /**
  * Lookup a config by it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#config DataK8SCanariesFlanksourceComTopologyV1Manifest#config}
  */
  readonly config?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupConfig;
  /**
  * Apply transformations to the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#display DataK8SCanariesFlanksourceComTopologyV1Manifest#display}
  */
  readonly display?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupDisplay;
  /**
  * A JSONPath expression to lookup the value in the config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#field DataK8SCanariesFlanksourceComTopologyV1Manifest#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#id DataK8SCanariesFlanksourceComTopologyV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupConfigToTerraform(struct!.config),
    display: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupDisplayToTerraform(struct!.display),
    field: cdktf.stringToTerraform(struct!.field),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupConfig",
    },
    display: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupDisplayToHclTerraform(struct!.display),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupDisplay",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._display?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display?.internalValue;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._display.internalValue = undefined;
      this._field = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._display.internalValue = value.display;
      this._field = value.field;
      this._id = value.id;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // display - computed: false, optional: true, required: false
  private _display = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupDisplayOutputReference(this, "display");
  public get display() {
    return this._display;
  }
  public putDisplay(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupDisplay) {
    this._display.internalValue = value;
  }
  public resetDisplay() {
    this._display.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display.internalValue;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#icon DataK8SCanariesFlanksourceComTopologyV1Manifest#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#label DataK8SCanariesFlanksourceComTopologyV1Manifest#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#text DataK8SCanariesFlanksourceComTopologyV1Manifest#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#tooltip DataK8SCanariesFlanksourceComTopologyV1Manifest#tooltip}
  */
  readonly tooltip?: string;
  /**
  * e.g. documentation, support, playbook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#type DataK8SCanariesFlanksourceComTopologyV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#url DataK8SCanariesFlanksourceComTopologyV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinksToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icon: cdktf.stringToTerraform(struct!.icon),
    label: cdktf.stringToTerraform(struct!.label),
    text: cdktf.stringToTerraform(struct!.text),
    tooltip: cdktf.stringToTerraform(struct!.tooltip),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinksToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tooltip: {
      value: cdktf.stringToHclTerraform(struct!.tooltip),
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._tooltip !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icon = undefined;
      this._label = undefined;
      this._text = undefined;
      this._tooltip = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icon = value.icon;
      this._label = value.label;
      this._text = value.text;
      this._tooltip = value.tooltip;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // tooltip - computed: false, optional: true, required: false
  private _tooltip?: string; 
  public get tooltip() {
    return this.getStringAttribute('tooltip');
  }
  public set tooltip(value: string) {
    this._tooltip = value;
  }
  public resetTooltip() {
    this._tooltip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinksList extends cdktf.ComplexList {
  public internalValue? : DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinksOutputReference {
    return new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesSummary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#expr DataK8SCanariesFlanksourceComTopologyV1Manifest#expr}
  */
  readonly expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#javascript DataK8SCanariesFlanksourceComTopologyV1Manifest#javascript}
  */
  readonly javascript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#json_path DataK8SCanariesFlanksourceComTopologyV1Manifest#json_path}
  */
  readonly jsonPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#template DataK8SCanariesFlanksourceComTopologyV1Manifest#template}
  */
  readonly template?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesSummaryToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expr: cdktf.stringToTerraform(struct!.expr),
    javascript: cdktf.stringToTerraform(struct!.javascript),
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesSummaryToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expr: {
      value: cdktf.stringToHclTerraform(struct!.expr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    javascript: {
      value: cdktf.stringToHclTerraform(struct!.javascript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_path: {
      value: cdktf.stringToHclTerraform(struct!.jsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesSummary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expr !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr;
    }
    if (this._javascript !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascript = this._javascript;
    }
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesSummary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expr = undefined;
      this._javascript = undefined;
      this._jsonPath = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expr = value.expr;
      this._javascript = value.javascript;
      this._jsonPath = value.jsonPath;
      this._template = value.template;
    }
  }

  // expr - computed: false, optional: true, required: false
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  public resetExpr() {
    this._expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
  }

  // javascript - computed: false, optional: true, required: false
  private _javascript?: string; 
  public get javascript() {
    return this.getStringAttribute('javascript');
  }
  public set javascript(value: string) {
    this._javascript = value;
  }
  public resetJavascript() {
    this._javascript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptInput() {
    return this._javascript;
  }

  // json_path - computed: false, optional: true, required: false
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  public resetJsonPath() {
    this._jsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#color DataK8SCanariesFlanksourceComTopologyV1Manifest#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#config_lookup DataK8SCanariesFlanksourceComTopologyV1Manifest#config_lookup}
  */
  readonly configLookup?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#headline DataK8SCanariesFlanksourceComTopologyV1Manifest#headline}
  */
  readonly headline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#icon DataK8SCanariesFlanksourceComTopologyV1Manifest#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#label DataK8SCanariesFlanksourceComTopologyV1Manifest#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#last_transition DataK8SCanariesFlanksourceComTopologyV1Manifest#last_transition}
  */
  readonly lastTransition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#links DataK8SCanariesFlanksourceComTopologyV1Manifest#links}
  */
  readonly links?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinks[] | cdktf.IResolvable;
  /**
  * CanarySpec defines the desired state of Canary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#lookup DataK8SCanariesFlanksourceComTopologyV1Manifest#lookup}
  */
  readonly lookup?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#max DataK8SCanariesFlanksourceComTopologyV1Manifest#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#min DataK8SCanariesFlanksourceComTopologyV1Manifest#min}
  */
  readonly min?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#order DataK8SCanariesFlanksourceComTopologyV1Manifest#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#status DataK8SCanariesFlanksourceComTopologyV1Manifest#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#summary DataK8SCanariesFlanksourceComTopologyV1Manifest#summary}
  */
  readonly summary?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesSummary;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#text DataK8SCanariesFlanksourceComTopologyV1Manifest#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#tooltip DataK8SCanariesFlanksourceComTopologyV1Manifest#tooltip}
  */
  readonly tooltip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#type DataK8SCanariesFlanksourceComTopologyV1Manifest#type}
  */
  readonly type?: string;
  /**
  * e.g. milliseconds, bytes, millicores, epoch etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#unit DataK8SCanariesFlanksourceComTopologyV1Manifest#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value DataK8SCanariesFlanksourceComTopologyV1Manifest#value}
  */
  readonly value?: number;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    config_lookup: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupToTerraform(struct!.configLookup),
    headline: cdktf.booleanToTerraform(struct!.headline),
    icon: cdktf.stringToTerraform(struct!.icon),
    label: cdktf.stringToTerraform(struct!.label),
    last_transition: cdktf.stringToTerraform(struct!.lastTransition),
    links: cdktf.listMapper(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinksToTerraform, false)(struct!.links),
    lookup: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.lookup),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    status: cdktf.stringToTerraform(struct!.status),
    summary: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesSummaryToTerraform(struct!.summary),
    text: cdktf.stringToTerraform(struct!.text),
    tooltip: cdktf.stringToTerraform(struct!.tooltip),
    type: cdktf.stringToTerraform(struct!.type),
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_lookup: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupToHclTerraform(struct!.configLookup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookup",
    },
    headline: {
      value: cdktf.booleanToHclTerraform(struct!.headline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_transition: {
      value: cdktf.stringToHclTerraform(struct!.lastTransition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    links: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinksToHclTerraform, false)(struct!.links),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinksList",
    },
    lookup: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.lookup),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesSummaryToHclTerraform(struct!.summary),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesSummary",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tooltip: {
      value: cdktf.stringToHclTerraform(struct!.tooltip),
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
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._configLookup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configLookup = this._configLookup?.internalValue;
    }
    if (this._headline !== undefined) {
      hasAnyValues = true;
      internalValueResult.headline = this._headline;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._lastTransition !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastTransition = this._lastTransition;
    }
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    if (this._lookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookup = this._lookup;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._summary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary?.internalValue;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._tooltip !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._configLookup.internalValue = undefined;
      this._headline = undefined;
      this._icon = undefined;
      this._label = undefined;
      this._lastTransition = undefined;
      this._links.internalValue = undefined;
      this._lookup = undefined;
      this._max = undefined;
      this._min = undefined;
      this._name = undefined;
      this._order = undefined;
      this._status = undefined;
      this._summary.internalValue = undefined;
      this._text = undefined;
      this._tooltip = undefined;
      this._type = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._configLookup.internalValue = value.configLookup;
      this._headline = value.headline;
      this._icon = value.icon;
      this._label = value.label;
      this._lastTransition = value.lastTransition;
      this._links.internalValue = value.links;
      this._lookup = value.lookup;
      this._max = value.max;
      this._min = value.min;
      this._name = value.name;
      this._order = value.order;
      this._status = value.status;
      this._summary.internalValue = value.summary;
      this._text = value.text;
      this._tooltip = value.tooltip;
      this._type = value.type;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // config_lookup - computed: false, optional: true, required: false
  private _configLookup = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookupOutputReference(this, "config_lookup");
  public get configLookup() {
    return this._configLookup;
  }
  public putConfigLookup(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesConfigLookup) {
    this._configLookup.internalValue = value;
  }
  public resetConfigLookup() {
    this._configLookup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configLookupInput() {
    return this._configLookup.internalValue;
  }

  // headline - computed: false, optional: true, required: false
  private _headline?: boolean | cdktf.IResolvable; 
  public get headline() {
    return this.getBooleanAttribute('headline');
  }
  public set headline(value: boolean | cdktf.IResolvable) {
    this._headline = value;
  }
  public resetHeadline() {
    this._headline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headlineInput() {
    return this._headline;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // last_transition - computed: false, optional: true, required: false
  private _lastTransition?: string; 
  public get lastTransition() {
    return this.getStringAttribute('last_transition');
  }
  public set lastTransition(value: string) {
    this._lastTransition = value;
  }
  public resetLastTransition() {
    this._lastTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastTransitionInput() {
    return this._lastTransition;
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinksList(this, "links", false);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // lookup - computed: false, optional: true, required: false
  private _lookup?: { [key: string]: string }; 
  public get lookup() {
    return this.getStringMapAttribute('lookup');
  }
  public set lookup(value: { [key: string]: string }) {
    this._lookup = value;
  }
  public resetLookup() {
    this._lookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupInput() {
    return this._lookup;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // summary - computed: false, optional: true, required: false
  private _summary = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesSummaryOutputReference(this, "summary");
  public get summary() {
    return this._summary;
  }
  public putSummary(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesSummary) {
    this._summary.internalValue = value;
  }
  public resetSummary() {
    this._summary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary.internalValue;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // tooltip - computed: false, optional: true, required: false
  private _tooltip?: string; 
  public get tooltip() {
    return this.getStringAttribute('tooltip');
  }
  public set tooltip(value: string) {
    this._tooltip = value;
  }
  public resetTooltip() {
    this._tooltip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip;
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

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCanariesFlanksourceComTopologyV1ManifestSpecProperties[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesOutputReference {
    return new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromHelmRef {
  /**
  * Key is a JSONPath expression used to fetch the key from the merged JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromHelmRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromHelmRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromHelmRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromHelmRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromHelmRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromHelmRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromHelmRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromSecretKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#config_map_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromConfigMapKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#helm_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#helm_ref}
  */
  readonly helmRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromHelmRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#secret_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromSecretKeyRef;
  /**
  * ServiceAccount specifies the service account whose token should be fetched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#service_account DataK8SCanariesFlanksourceComTopologyV1Manifest#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    helm_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromHelmRefToTerraform(struct!.helmRef),
    secret_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromConfigMapKeyRef",
    },
    helm_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromHelmRefToHclTerraform(struct!.helmRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromHelmRef",
    },
    secret_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromSecretKeyRef",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._helmRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmRef = this._helmRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._helmRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._helmRef.internalValue = value.helmRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // helm_ref - computed: false, optional: true, required: false
  private _helmRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromHelmRefOutputReference(this, "helm_ref");
  public get helmRef() {
    return this._helmRef;
  }
  public putHelmRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromHelmRef) {
    this._helmRef.internalValue = value;
  }
  public resetHelmRef() {
    this._helmRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmRefInput() {
    return this._helmRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
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
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value DataK8SCanariesFlanksourceComTopologyV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value_from DataK8SCanariesFlanksourceComTopologyV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFrom;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearer | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearer | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromHelmRef {
  /**
  * Key is a JSONPath expression used to fetch the key from the merged JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromHelmRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromHelmRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromHelmRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromHelmRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromHelmRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromHelmRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromHelmRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromSecretKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#config_map_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromConfigMapKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#helm_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#helm_ref}
  */
  readonly helmRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromHelmRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#secret_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromSecretKeyRef;
  /**
  * ServiceAccount specifies the service account whose token should be fetched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#service_account DataK8SCanariesFlanksourceComTopologyV1Manifest#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    helm_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromHelmRefToTerraform(struct!.helmRef),
    secret_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromConfigMapKeyRef",
    },
    helm_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromHelmRefToHclTerraform(struct!.helmRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromHelmRef",
    },
    secret_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromSecretKeyRef",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._helmRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmRef = this._helmRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._helmRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._helmRef.internalValue = value.helmRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // helm_ref - computed: false, optional: true, required: false
  private _helmRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromHelmRefOutputReference(this, "helm_ref");
  public get helmRef() {
    return this._helmRef;
  }
  public putHelmRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromHelmRef) {
    this._helmRef.internalValue = value;
  }
  public resetHelmRef() {
    this._helmRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmRefInput() {
    return this._helmRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
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
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value DataK8SCanariesFlanksourceComTopologyV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value_from DataK8SCanariesFlanksourceComTopologyV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFrom;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientId | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientId | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromHelmRef {
  /**
  * Key is a JSONPath expression used to fetch the key from the merged JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromHelmRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromHelmRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromHelmRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromHelmRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromHelmRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromHelmRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromHelmRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromSecretKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#config_map_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromConfigMapKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#helm_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#helm_ref}
  */
  readonly helmRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromHelmRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#secret_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromSecretKeyRef;
  /**
  * ServiceAccount specifies the service account whose token should be fetched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#service_account DataK8SCanariesFlanksourceComTopologyV1Manifest#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    helm_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromHelmRefToTerraform(struct!.helmRef),
    secret_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromConfigMapKeyRef",
    },
    helm_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromHelmRefToHclTerraform(struct!.helmRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromHelmRef",
    },
    secret_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromSecretKeyRef",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._helmRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmRef = this._helmRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._helmRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._helmRef.internalValue = value.helmRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // helm_ref - computed: false, optional: true, required: false
  private _helmRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromHelmRefOutputReference(this, "helm_ref");
  public get helmRef() {
    return this._helmRef;
  }
  public putHelmRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromHelmRef) {
    this._helmRef.internalValue = value;
  }
  public resetHelmRef() {
    this._helmRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmRefInput() {
    return this._helmRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
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
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value DataK8SCanariesFlanksourceComTopologyV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value_from DataK8SCanariesFlanksourceComTopologyV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFrom;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecret | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecret | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#client_id DataK8SCanariesFlanksourceComTopologyV1Manifest#client_id}
  */
  readonly clientId?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientId;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#client_secret DataK8SCanariesFlanksourceComTopologyV1Manifest#client_secret}
  */
  readonly clientSecret?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#params DataK8SCanariesFlanksourceComTopologyV1Manifest#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#scope DataK8SCanariesFlanksourceComTopologyV1Manifest#scope}
  */
  readonly scope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#token_url DataK8SCanariesFlanksourceComTopologyV1Manifest#token_url}
  */
  readonly tokenUrl?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdToTerraform(struct!.clientId),
    client_secret: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretToTerraform(struct!.clientSecret),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scope),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdToHclTerraform(struct!.clientId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientId",
    },
    client_secret: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecret",
    },
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId?.internalValue;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId.internalValue = undefined;
      this._clientSecret.internalValue = undefined;
      this._params = undefined;
      this._scope = undefined;
      this._tokenUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId.internalValue = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._params = value.params;
      this._scope = value.scope;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientIdOutputReference(this, "client_id");
  public get clientId() {
    return this._clientId;
  }
  public putClientId(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientId) {
    this._clientId.internalValue = value;
  }
  public resetClientId() {
    this._clientId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId.internalValue;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // token_url - computed: false, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromHelmRef {
  /**
  * Key is a JSONPath expression used to fetch the key from the merged JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromHelmRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromHelmRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromHelmRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromHelmRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromHelmRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromHelmRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromHelmRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromSecretKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#config_map_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromConfigMapKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#helm_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#helm_ref}
  */
  readonly helmRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromHelmRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#secret_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromSecretKeyRef;
  /**
  * ServiceAccount specifies the service account whose token should be fetched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#service_account DataK8SCanariesFlanksourceComTopologyV1Manifest#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    helm_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromHelmRefToTerraform(struct!.helmRef),
    secret_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromConfigMapKeyRef",
    },
    helm_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromHelmRefToHclTerraform(struct!.helmRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromHelmRef",
    },
    secret_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromSecretKeyRef",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._helmRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmRef = this._helmRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._helmRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._helmRef.internalValue = value.helmRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // helm_ref - computed: false, optional: true, required: false
  private _helmRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromHelmRefOutputReference(this, "helm_ref");
  public get helmRef() {
    return this._helmRef;
  }
  public putHelmRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromHelmRef) {
    this._helmRef.internalValue = value;
  }
  public resetHelmRef() {
    this._helmRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmRefInput() {
    return this._helmRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
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
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value DataK8SCanariesFlanksourceComTopologyV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value_from DataK8SCanariesFlanksourceComTopologyV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFrom;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPassword | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPassword | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromHelmRef {
  /**
  * Key is a JSONPath expression used to fetch the key from the merged JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromHelmRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromHelmRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromHelmRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromHelmRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromHelmRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromHelmRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromHelmRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromSecretKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#config_map_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromConfigMapKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#helm_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#helm_ref}
  */
  readonly helmRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromHelmRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#secret_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromSecretKeyRef;
  /**
  * ServiceAccount specifies the service account whose token should be fetched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#service_account DataK8SCanariesFlanksourceComTopologyV1Manifest#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    helm_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromHelmRefToTerraform(struct!.helmRef),
    secret_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromConfigMapKeyRef",
    },
    helm_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromHelmRefToHclTerraform(struct!.helmRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromHelmRef",
    },
    secret_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromSecretKeyRef",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._helmRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmRef = this._helmRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._helmRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._helmRef.internalValue = value.helmRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // helm_ref - computed: false, optional: true, required: false
  private _helmRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromHelmRefOutputReference(this, "helm_ref");
  public get helmRef() {
    return this._helmRef;
  }
  public putHelmRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromHelmRef) {
    this._helmRef.internalValue = value;
  }
  public resetHelmRef() {
    this._helmRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmRefInput() {
    return this._helmRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
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
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value DataK8SCanariesFlanksourceComTopologyV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value_from DataK8SCanariesFlanksourceComTopologyV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFrom;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCa | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCa | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromHelmRef {
  /**
  * Key is a JSONPath expression used to fetch the key from the merged JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromHelmRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromHelmRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromHelmRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromHelmRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromHelmRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromHelmRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromHelmRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromSecretKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#config_map_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromConfigMapKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#helm_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#helm_ref}
  */
  readonly helmRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromHelmRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#secret_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromSecretKeyRef;
  /**
  * ServiceAccount specifies the service account whose token should be fetched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#service_account DataK8SCanariesFlanksourceComTopologyV1Manifest#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    helm_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromHelmRefToTerraform(struct!.helmRef),
    secret_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromConfigMapKeyRef",
    },
    helm_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromHelmRefToHclTerraform(struct!.helmRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromHelmRef",
    },
    secret_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromSecretKeyRef",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._helmRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmRef = this._helmRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._helmRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._helmRef.internalValue = value.helmRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // helm_ref - computed: false, optional: true, required: false
  private _helmRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromHelmRefOutputReference(this, "helm_ref");
  public get helmRef() {
    return this._helmRef;
  }
  public putHelmRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromHelmRef) {
    this._helmRef.internalValue = value;
  }
  public resetHelmRef() {
    this._helmRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmRefInput() {
    return this._helmRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
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
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value DataK8SCanariesFlanksourceComTopologyV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value_from DataK8SCanariesFlanksourceComTopologyV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFrom;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCert | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCert | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromHelmRef {
  /**
  * Key is a JSONPath expression used to fetch the key from the merged JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromHelmRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromHelmRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromHelmRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromHelmRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromHelmRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromHelmRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromHelmRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromSecretKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#config_map_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromConfigMapKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#helm_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#helm_ref}
  */
  readonly helmRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromHelmRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#secret_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromSecretKeyRef;
  /**
  * ServiceAccount specifies the service account whose token should be fetched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#service_account DataK8SCanariesFlanksourceComTopologyV1Manifest#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    helm_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromHelmRefToTerraform(struct!.helmRef),
    secret_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromConfigMapKeyRef",
    },
    helm_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromHelmRefToHclTerraform(struct!.helmRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromHelmRef",
    },
    secret_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromSecretKeyRef",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._helmRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmRef = this._helmRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._helmRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._helmRef.internalValue = value.helmRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // helm_ref - computed: false, optional: true, required: false
  private _helmRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromHelmRefOutputReference(this, "helm_ref");
  public get helmRef() {
    return this._helmRef;
  }
  public putHelmRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromHelmRef) {
    this._helmRef.internalValue = value;
  }
  public resetHelmRef() {
    this._helmRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmRefInput() {
    return this._helmRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
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
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value DataK8SCanariesFlanksourceComTopologyV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value_from DataK8SCanariesFlanksourceComTopologyV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFrom;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKey | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKey | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTls {
  /**
  * PEM encoded certificate of the CA to verify the server certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#ca DataK8SCanariesFlanksourceComTopologyV1Manifest#ca}
  */
  readonly ca?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCa;
  /**
  * PEM encoded client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#cert DataK8SCanariesFlanksourceComTopologyV1Manifest#cert}
  */
  readonly cert?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCert;
  /**
  * HandshakeTimeout defaults to 10 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#handshake_timeout DataK8SCanariesFlanksourceComTopologyV1Manifest#handshake_timeout}
  */
  readonly handshakeTimeout?: number;
  /**
  * InsecureSkipVerify controls whether a client verifies the server's certificate chain and host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#insecure_skip_verify DataK8SCanariesFlanksourceComTopologyV1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * PEM encoded client private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKey;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaToTerraform(struct!.ca),
    cert: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertToTerraform(struct!.cert),
    handshake_timeout: cdktf.numberToTerraform(struct!.handshakeTimeout),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyToTerraform(struct!.key),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCa",
    },
    cert: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCert",
    },
    handshake_timeout: {
      value: cdktf.numberToHclTerraform(struct!.handshakeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._handshakeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.handshakeTimeout = this._handshakeTimeout;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._cert.internalValue = undefined;
      this._handshakeTimeout = undefined;
      this._insecureSkipVerify = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._cert.internalValue = value.cert;
      this._handshakeTimeout = value.handshakeTimeout;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._key.internalValue = value.key;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // cert - computed: false, optional: true, required: false
  private _cert = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsCert) {
    this._cert.internalValue = value;
  }
  public resetCert() {
    this._cert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // handshake_timeout - computed: false, optional: true, required: false
  private _handshakeTimeout?: number; 
  public get handshakeTimeout() {
    return this.getNumberAttribute('handshake_timeout');
  }
  public set handshakeTimeout(value: number) {
    this._handshakeTimeout = value;
  }
  public resetHandshakeTimeout() {
    this._handshakeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handshakeTimeoutInput() {
    return this._handshakeTimeout;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // key - computed: false, optional: true, required: false
  private _key = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsKey) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromHelmRef {
  /**
  * Key is a JSONPath expression used to fetch the key from the merged JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromHelmRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromHelmRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromHelmRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromHelmRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromHelmRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromHelmRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromHelmRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#key DataK8SCanariesFlanksourceComTopologyV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromSecretKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#config_map_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromConfigMapKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#helm_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#helm_ref}
  */
  readonly helmRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromHelmRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#secret_key_ref DataK8SCanariesFlanksourceComTopologyV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromSecretKeyRef;
  /**
  * ServiceAccount specifies the service account whose token should be fetched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#service_account DataK8SCanariesFlanksourceComTopologyV1Manifest#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    helm_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromHelmRefToTerraform(struct!.helmRef),
    secret_key_ref: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromConfigMapKeyRef",
    },
    helm_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromHelmRefToHclTerraform(struct!.helmRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromHelmRef",
    },
    secret_key_ref: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromSecretKeyRef",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._helmRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmRef = this._helmRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._helmRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._helmRef.internalValue = value.helmRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // helm_ref - computed: false, optional: true, required: false
  private _helmRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromHelmRefOutputReference(this, "helm_ref");
  public get helmRef() {
    return this._helmRef;
  }
  public putHelmRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromHelmRef) {
    this._helmRef.internalValue = value;
  }
  public resetHelmRef() {
    this._helmRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmRefInput() {
    return this._helmRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
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
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsername {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#name DataK8SCanariesFlanksourceComTopologyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value DataK8SCanariesFlanksourceComTopologyV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#value_from DataK8SCanariesFlanksourceComTopologyV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFrom;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsername | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsername | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPush {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#bearer DataK8SCanariesFlanksourceComTopologyV1Manifest#bearer}
  */
  readonly bearer?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#connection DataK8SCanariesFlanksourceComTopologyV1Manifest#connection}
  */
  readonly connection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#digest DataK8SCanariesFlanksourceComTopologyV1Manifest#digest}
  */
  readonly digest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#ntlm DataK8SCanariesFlanksourceComTopologyV1Manifest#ntlm}
  */
  readonly ntlm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#ntlmv2 DataK8SCanariesFlanksourceComTopologyV1Manifest#ntlmv2}
  */
  readonly ntlmv2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#oauth DataK8SCanariesFlanksourceComTopologyV1Manifest#oauth}
  */
  readonly oauth?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#password DataK8SCanariesFlanksourceComTopologyV1Manifest#password}
  */
  readonly password?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPassword;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#tls DataK8SCanariesFlanksourceComTopologyV1Manifest#tls}
  */
  readonly tls?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#url DataK8SCanariesFlanksourceComTopologyV1Manifest#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#username DataK8SCanariesFlanksourceComTopologyV1Manifest#username}
  */
  readonly username?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsername;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPush | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerToTerraform(struct!.bearer),
    connection: cdktf.stringToTerraform(struct!.connection),
    digest: cdktf.booleanToTerraform(struct!.digest),
    ntlm: cdktf.booleanToTerraform(struct!.ntlm),
    ntlmv2: cdktf.booleanToTerraform(struct!.ntlmv2),
    oauth: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthToTerraform(struct!.oauth),
    password: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordToTerraform(struct!.password),
    tls: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsToTerraform(struct!.tls),
    url: cdktf.stringToTerraform(struct!.url),
    username: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameToTerraform(struct!.username),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPush | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerToHclTerraform(struct!.bearer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearer",
    },
    connection: {
      value: cdktf.stringToHclTerraform(struct!.connection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    digest: {
      value: cdktf.booleanToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ntlm: {
      value: cdktf.booleanToHclTerraform(struct!.ntlm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ntlmv2: {
      value: cdktf.booleanToHclTerraform(struct!.ntlmv2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oauth: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthToHclTerraform(struct!.oauth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauth",
    },
    password: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPassword",
    },
    tls: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTls",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPush | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearer = this._bearer?.internalValue;
    }
    if (this._connection !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection;
    }
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._ntlm !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlm = this._ntlm;
    }
    if (this._ntlmv2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmv2 = this._ntlmv2;
    }
    if (this._oauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth = this._oauth?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPush | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bearer.internalValue = undefined;
      this._connection = undefined;
      this._digest = undefined;
      this._ntlm = undefined;
      this._ntlmv2 = undefined;
      this._oauth.internalValue = undefined;
      this._password.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._url = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bearer.internalValue = value.bearer;
      this._connection = value.connection;
      this._digest = value.digest;
      this._ntlm = value.ntlm;
      this._ntlmv2 = value.ntlmv2;
      this._oauth.internalValue = value.oauth;
      this._password.internalValue = value.password;
      this._tls.internalValue = value.tls;
      this._url = value.url;
      this._username.internalValue = value.username;
    }
  }

  // bearer - computed: false, optional: true, required: false
  private _bearer = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearerOutputReference(this, "bearer");
  public get bearer() {
    return this._bearer;
  }
  public putBearer(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushBearer) {
    this._bearer.internalValue = value;
  }
  public resetBearer() {
    this._bearer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerInput() {
    return this._bearer.internalValue;
  }

  // connection - computed: false, optional: true, required: false
  private _connection?: string; 
  public get connection() {
    return this.getStringAttribute('connection');
  }
  public set connection(value: string) {
    this._connection = value;
  }
  public resetConnection() {
    this._connection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection;
  }

  // digest - computed: false, optional: true, required: false
  private _digest?: boolean | cdktf.IResolvable; 
  public get digest() {
    return this.getBooleanAttribute('digest');
  }
  public set digest(value: boolean | cdktf.IResolvable) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // ntlm - computed: false, optional: true, required: false
  private _ntlm?: boolean | cdktf.IResolvable; 
  public get ntlm() {
    return this.getBooleanAttribute('ntlm');
  }
  public set ntlm(value: boolean | cdktf.IResolvable) {
    this._ntlm = value;
  }
  public resetNtlm() {
    this._ntlm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmInput() {
    return this._ntlm;
  }

  // ntlmv2 - computed: false, optional: true, required: false
  private _ntlmv2?: boolean | cdktf.IResolvable; 
  public get ntlmv2() {
    return this.getBooleanAttribute('ntlmv2');
  }
  public set ntlmv2(value: boolean | cdktf.IResolvable) {
    this._ntlmv2 = value;
  }
  public resetNtlmv2() {
    this._ntlmv2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmv2Input() {
    return this._ntlmv2;
  }

  // oauth - computed: false, optional: true, required: false
  private _oauth = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauthOutputReference(this, "oauth");
  public get oauth() {
    return this._oauth;
  }
  public putOauth(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOauth) {
    this._oauth.internalValue = value;
  }
  public resetOauth() {
    this._oauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthInput() {
    return this._oauth.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SCanariesFlanksourceComTopologyV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#components DataK8SCanariesFlanksourceComTopologyV1Manifest#components}
  */
  readonly components?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponents[] | cdktf.IResolvable;
  /**
  * Lookup and associate config items with this component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#configs DataK8SCanariesFlanksourceComTopologyV1Manifest#configs}
  */
  readonly configs?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigs[] | cdktf.IResolvable;
  /**
  * Specify the catalog tag (& optionally the tag selector) to group the topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#group_by DataK8SCanariesFlanksourceComTopologyV1Manifest#group_by}
  */
  readonly groupBy?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBy;
  /**
  * statusExpr allows defining a cel expression to evaluate the status of a component based on the summary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#health_expr DataK8SCanariesFlanksourceComTopologyV1Manifest#health_expr}
  */
  readonly healthExpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#icon DataK8SCanariesFlanksourceComTopologyV1Manifest#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#id DataK8SCanariesFlanksourceComTopologyV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecId;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#label DataK8SCanariesFlanksourceComTopologyV1Manifest#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#owner DataK8SCanariesFlanksourceComTopologyV1Manifest#owner}
  */
  readonly owner?: string;
  /**
  * Properties are created once the full component tree is created, property lookup functions can return a map of coomponent name => properties to allow for bulk property lookups being applied to multiple components in the tree
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#properties DataK8SCanariesFlanksourceComTopologyV1Manifest#properties}
  */
  readonly properties?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecProperties[] | cdktf.IResolvable;
  /**
  * Agent will push topology to specified path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#push DataK8SCanariesFlanksourceComTopologyV1Manifest#push}
  */
  readonly push?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPush;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#schedule DataK8SCanariesFlanksourceComTopologyV1Manifest#schedule}
  */
  readonly schedule?: string;
  /**
  * statusExpr allows defining a cel expression to evaluate the status of a component based on the summary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#status_expr DataK8SCanariesFlanksourceComTopologyV1Manifest#status_expr}
  */
  readonly statusExpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#text DataK8SCanariesFlanksourceComTopologyV1Manifest#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#tooltip DataK8SCanariesFlanksourceComTopologyV1Manifest#tooltip}
  */
  readonly tooltip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#type DataK8SCanariesFlanksourceComTopologyV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecToTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: cdktf.listMapper(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsToTerraform, false)(struct!.components),
    configs: cdktf.listMapper(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigsToTerraform, false)(struct!.configs),
    group_by: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupByToTerraform(struct!.groupBy),
    health_expr: cdktf.stringToTerraform(struct!.healthExpr),
    icon: cdktf.stringToTerraform(struct!.icon),
    id: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecIdToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    owner: cdktf.stringToTerraform(struct!.owner),
    properties: cdktf.listMapper(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesToTerraform, false)(struct!.properties),
    push: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushToTerraform(struct!.push),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    status_expr: cdktf.stringToTerraform(struct!.statusExpr),
    text: cdktf.stringToTerraform(struct!.text),
    tooltip: cdktf.stringToTerraform(struct!.tooltip),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCanariesFlanksourceComTopologyV1ManifestSpecToHclTerraform(struct?: DataK8SCanariesFlanksourceComTopologyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsToHclTerraform, false)(struct!.components),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsList",
    },
    configs: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigsToHclTerraform, false)(struct!.configs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigsList",
    },
    group_by: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupByToHclTerraform(struct!.groupBy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBy",
    },
    health_expr: {
      value: cdktf.stringToHclTerraform(struct!.healthExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecIdToHclTerraform(struct!.id),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecId",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesToHclTerraform, false)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesList",
    },
    push: {
      value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushToHclTerraform(struct!.push),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPush",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_expr: {
      value: cdktf.stringToHclTerraform(struct!.statusExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tooltip: {
      value: cdktf.stringToHclTerraform(struct!.tooltip),
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

export class DataK8SCanariesFlanksourceComTopologyV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComTopologyV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    if (this._configs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._healthExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthExpr = this._healthExpr;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._id?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id?.internalValue;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._push?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.push = this._push?.internalValue;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._statusExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusExpr = this._statusExpr;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._tooltip !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components.internalValue = undefined;
      this._configs.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._healthExpr = undefined;
      this._icon = undefined;
      this._id.internalValue = undefined;
      this._label = undefined;
      this._owner = undefined;
      this._properties.internalValue = undefined;
      this._push.internalValue = undefined;
      this._schedule = undefined;
      this._statusExpr = undefined;
      this._text = undefined;
      this._tooltip = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._components.internalValue = value.components;
      this._configs.internalValue = value.configs;
      this._groupBy.internalValue = value.groupBy;
      this._healthExpr = value.healthExpr;
      this._icon = value.icon;
      this._id.internalValue = value.id;
      this._label = value.label;
      this._owner = value.owner;
      this._properties.internalValue = value.properties;
      this._push.internalValue = value.push;
      this._schedule = value.schedule;
      this._statusExpr = value.statusExpr;
      this._text = value.text;
      this._tooltip = value.tooltip;
      this._type = value.type;
    }
  }

  // components - computed: false, optional: true, required: false
  private _components = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }
  public putComponents(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  public resetComponents() {
    this._components.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }

  // configs - computed: false, optional: true, required: false
  private _configs = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecConfigs[] | cdktf.IResolvable) {
    this._configs.internalValue = value;
  }
  public resetConfigs() {
    this._configs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupByOutputReference(this, "group_by");
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecGroupBy) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // health_expr - computed: false, optional: true, required: false
  private _healthExpr?: string; 
  public get healthExpr() {
    return this.getStringAttribute('health_expr');
  }
  public set healthExpr(value: string) {
    this._healthExpr = value;
  }
  public resetHealthExpr() {
    this._healthExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthExprInput() {
    return this._healthExpr;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: false, optional: true, required: false
  private _id = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecIdOutputReference(this, "id");
  public get id() {
    return this._id;
  }
  public putId(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecId) {
    this._id.internalValue = value;
  }
  public resetId() {
    this._id.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // push - computed: false, optional: true, required: false
  private _push = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPushOutputReference(this, "push");
  public get push() {
    return this._push;
  }
  public putPush(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpecPush) {
    this._push.internalValue = value;
  }
  public resetPush() {
    this._push.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // status_expr - computed: false, optional: true, required: false
  private _statusExpr?: string; 
  public get statusExpr() {
    return this.getStringAttribute('status_expr');
  }
  public set statusExpr(value: string) {
    this._statusExpr = value;
  }
  public resetStatusExpr() {
    this._statusExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusExprInput() {
    return this._statusExpr;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // tooltip - computed: false, optional: true, required: false
  private _tooltip?: string; 
  public get tooltip() {
    return this.getStringAttribute('tooltip');
  }
  public set tooltip(value: string) {
    this._tooltip = value;
  }
  public resetTooltip() {
    this._tooltip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest k8s_canaries_flanksource_com_topology_v1_manifest}
*/
export class DataK8SCanariesFlanksourceComTopologyV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_canaries_flanksource_com_topology_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCanariesFlanksourceComTopologyV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCanariesFlanksourceComTopologyV1Manifest to import
  * @param importFromId The id of the existing DataK8SCanariesFlanksourceComTopologyV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCanariesFlanksourceComTopologyV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_canaries_flanksource_com_topology_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/canaries_flanksource_com_topology_v1_manifest k8s_canaries_flanksource_com_topology_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCanariesFlanksourceComTopologyV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCanariesFlanksourceComTopologyV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_canaries_flanksource_com_topology_v1_manifest',
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
  private _metadata = new DataK8SCanariesFlanksourceComTopologyV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCanariesFlanksourceComTopologyV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCanariesFlanksourceComTopologyV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCanariesFlanksourceComTopologyV1ManifestSpec) {
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
      metadata: dataK8SCanariesFlanksourceComTopologyV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCanariesFlanksourceComTopologyV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCanariesFlanksourceComTopologyV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCanariesFlanksourceComTopologyV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
