// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCanariesFlanksourceComComponentV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#metadata DataK8SCanariesFlanksourceComComponentV1Manifest#metadata}
  */
  readonly metadata: DataK8SCanariesFlanksourceComComponentV1ManifestMetadata;
  /**
  * ComponentSpec defines the specification for a component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#spec DataK8SCanariesFlanksourceComComponentV1Manifest#spec}
  */
  readonly spec?: DataK8SCanariesFlanksourceComComponentV1ManifestSpec;
}
export interface DataK8SCanariesFlanksourceComComponentV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#annotations DataK8SCanariesFlanksourceComComponentV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#labels DataK8SCanariesFlanksourceComComponentV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#name DataK8SCanariesFlanksourceComComponentV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#namespace DataK8SCanariesFlanksourceComComponentV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCanariesFlanksourceComComponentV1ManifestMetadataToTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCanariesFlanksourceComComponentV1ManifestMetadataToHclTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComComponentV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComComponentV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCanariesFlanksourceComComponentV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCanariesFlanksourceComComponentV1ManifestSpecChecks {
}

export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecChecksToTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecChecksToHclTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCanariesFlanksourceComComponentV1ManifestSpecChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecChecks | cdktf.IResolvable | undefined) {
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

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecChecksList extends cdktf.ComplexList {
  public internalValue? : DataK8SCanariesFlanksourceComComponentV1ManifestSpecChecks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCanariesFlanksourceComComponentV1ManifestSpecChecksOutputReference {
    return new DataK8SCanariesFlanksourceComComponentV1ManifestSpecChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigs {
  /**
  * Agent can be the agent id or the name of the agent. Additionally, the special 'self' value can be used to select resources without an agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#agent DataK8SCanariesFlanksourceComComponentV1Manifest#agent}
  */
  readonly agent?: string;
  /**
  * Cache directives 'no-cache' (should not fetch from cache but can be cached) 'no-store' (should not cache) 'max-age=X' (cache for X duration)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#cache DataK8SCanariesFlanksourceComComponentV1Manifest#cache}
  */
  readonly cache?: string;
  /**
  * Deprecated. Use 'fieldSelector (config_class=)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#class DataK8SCanariesFlanksourceComComponentV1Manifest#class}
  */
  readonly class?: string;
  /**
  * Deprecated. Use 'fieldSelector (external_id=)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#external_id DataK8SCanariesFlanksourceComComponentV1Manifest#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#field_selector DataK8SCanariesFlanksourceComComponentV1Manifest#field_selector}
  */
  readonly fieldSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#id DataK8SCanariesFlanksourceComComponentV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#include_deleted DataK8SCanariesFlanksourceComComponentV1Manifest#include_deleted}
  */
  readonly includeDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#label_selector DataK8SCanariesFlanksourceComComponentV1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#limit DataK8SCanariesFlanksourceComComponentV1Manifest#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#name DataK8SCanariesFlanksourceComComponentV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#namespace DataK8SCanariesFlanksourceComComponentV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#scope DataK8SCanariesFlanksourceComComponentV1Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Search query that applies to the resource name, tag & labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#search DataK8SCanariesFlanksourceComComponentV1Manifest#search}
  */
  readonly search?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#statuses DataK8SCanariesFlanksourceComComponentV1Manifest#statuses}
  */
  readonly statuses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#tag_selector DataK8SCanariesFlanksourceComComponentV1Manifest#tag_selector}
  */
  readonly tagSelector?: string;
  /**
  * Deprecated. Use 'labelSelector'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#tags DataK8SCanariesFlanksourceComComponentV1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Deprecated. Use 'types'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#type DataK8SCanariesFlanksourceComComponentV1Manifest#type}
  */
  readonly type?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#types DataK8SCanariesFlanksourceComComponentV1Manifest#types}
  */
  readonly types?: string[];
}

export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigsToTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigs | cdktf.IResolvable): any {
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


export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigsToHclTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigs | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigs | cdktf.IResolvable | undefined) {
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

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigsOutputReference {
    return new DataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCanariesFlanksourceComComponentV1ManifestSpecId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#expr DataK8SCanariesFlanksourceComComponentV1Manifest#expr}
  */
  readonly expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#javascript DataK8SCanariesFlanksourceComComponentV1Manifest#javascript}
  */
  readonly javascript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#json_path DataK8SCanariesFlanksourceComComponentV1Manifest#json_path}
  */
  readonly jsonPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#template DataK8SCanariesFlanksourceComComponentV1Manifest#template}
  */
  readonly template?: string;
}

export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecIdToTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecId | cdktf.IResolvable): any {
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


export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecIdToHclTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecId | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComComponentV1ManifestSpecId | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecId | cdktf.IResolvable | undefined) {
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
export interface DataK8SCanariesFlanksourceComComponentV1ManifestSpecLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#labels DataK8SCanariesFlanksourceComComponentV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#name DataK8SCanariesFlanksourceComComponentV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#type DataK8SCanariesFlanksourceComComponentV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecLogsToTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecLogs | cdktf.IResolvable): any {
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


export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecLogsToHclTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecLogs | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCanariesFlanksourceComComponentV1ManifestSpecLogs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecLogs | cdktf.IResolvable | undefined) {
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

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecLogsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCanariesFlanksourceComComponentV1ManifestSpecLogs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCanariesFlanksourceComComponentV1ManifestSpecLogsOutputReference {
    return new DataK8SCanariesFlanksourceComComponentV1ManifestSpecLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCanariesFlanksourceComComponentV1ManifestSpecParentLookup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#external_id DataK8SCanariesFlanksourceComComponentV1Manifest#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#name DataK8SCanariesFlanksourceComComponentV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#namespace DataK8SCanariesFlanksourceComComponentV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#type DataK8SCanariesFlanksourceComComponentV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecParentLookupToTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecParentLookup | cdktf.IResolvable): any {
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


export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecParentLookupToHclTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecParentLookup | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecParentLookupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComComponentV1ManifestSpecParentLookup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecParentLookup | cdktf.IResolvable | undefined) {
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
export interface DataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationships {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#ref DataK8SCanariesFlanksourceComComponentV1Manifest#ref}
  */
  readonly ref?: string;
  /**
  * The type of relationship, e.g. dependsOn, subcomponentOf, providesApis, consumesApis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#type DataK8SCanariesFlanksourceComComponentV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationshipsToTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationships | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.stringToTerraform(struct!.ref),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationshipsToHclTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationships | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationshipsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationships | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationships | cdktf.IResolvable | undefined) {
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

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationshipsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationships[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationshipsOutputReference {
    return new DataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationshipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectors {
  /**
  * Agent can be the agent id or the name of the agent. Additionally, the special 'self' value can be used to select resources without an agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#agent DataK8SCanariesFlanksourceComComponentV1Manifest#agent}
  */
  readonly agent?: string;
  /**
  * Cache directives 'no-cache' (should not fetch from cache but can be cached) 'no-store' (should not cache) 'max-age=X' (cache for X duration)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#cache DataK8SCanariesFlanksourceComComponentV1Manifest#cache}
  */
  readonly cache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#field_selector DataK8SCanariesFlanksourceComComponentV1Manifest#field_selector}
  */
  readonly fieldSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#id DataK8SCanariesFlanksourceComComponentV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#include_deleted DataK8SCanariesFlanksourceComComponentV1Manifest#include_deleted}
  */
  readonly includeDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#label_selector DataK8SCanariesFlanksourceComComponentV1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#limit DataK8SCanariesFlanksourceComComponentV1Manifest#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#name DataK8SCanariesFlanksourceComComponentV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#namespace DataK8SCanariesFlanksourceComComponentV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#scope DataK8SCanariesFlanksourceComComponentV1Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Search query that applies to the resource name, tag & labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#search DataK8SCanariesFlanksourceComComponentV1Manifest#search}
  */
  readonly search?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#statuses DataK8SCanariesFlanksourceComComponentV1Manifest#statuses}
  */
  readonly statuses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#tag_selector DataK8SCanariesFlanksourceComComponentV1Manifest#tag_selector}
  */
  readonly tagSelector?: string;
  /**
  * StringArray represents a one-dimensional array of the PostgreSQL character types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#types DataK8SCanariesFlanksourceComComponentV1Manifest#types}
  */
  readonly types?: string[];
}

export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectorsToTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectors | cdktf.IResolvable): any {
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


export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectorsToHclTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectors | cdktf.IResolvable): any {
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

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectors | cdktf.IResolvable | undefined) {
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

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectorsOutputReference {
    return new DataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryIncidents {
}

export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryIncidentsToTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryIncidents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryIncidentsToHclTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryIncidents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryIncidentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryIncidents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryIncidents | cdktf.IResolvable | undefined) {
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
export interface DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryInsights {
}

export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryInsightsToTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryInsights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryInsightsToHclTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryInsights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryInsightsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryInsights | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryInsights | cdktf.IResolvable | undefined) {
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
export interface DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#checks DataK8SCanariesFlanksourceComComponentV1Manifest#checks}
  */
  readonly checks?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#healthy DataK8SCanariesFlanksourceComComponentV1Manifest#healthy}
  */
  readonly healthy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#incidents DataK8SCanariesFlanksourceComComponentV1Manifest#incidents}
  */
  readonly incidents?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryIncidents;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#info DataK8SCanariesFlanksourceComComponentV1Manifest#info}
  */
  readonly info?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#insights DataK8SCanariesFlanksourceComComponentV1Manifest#insights}
  */
  readonly insights?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryInsights;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#unhealthy DataK8SCanariesFlanksourceComComponentV1Manifest#unhealthy}
  */
  readonly unhealthy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#warning DataK8SCanariesFlanksourceComComponentV1Manifest#warning}
  */
  readonly warning?: number;
}

export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryToTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checks: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.checks),
    healthy: cdktf.numberToTerraform(struct!.healthy),
    incidents: dataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryIncidentsToTerraform(struct!.incidents),
    info: cdktf.numberToTerraform(struct!.info),
    insights: dataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryInsightsToTerraform(struct!.insights),
    unhealthy: cdktf.numberToTerraform(struct!.unhealthy),
    warning: cdktf.numberToTerraform(struct!.warning),
  }
}


export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryToHclTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummary | cdktf.IResolvable): any {
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
      value: dataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryIncidentsToHclTerraform(struct!.incidents),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryIncidents",
    },
    info: {
      value: cdktf.numberToHclTerraform(struct!.info),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insights: {
      value: dataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryInsightsToHclTerraform(struct!.insights),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryInsights",
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

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummary | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummary | cdktf.IResolvable | undefined) {
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
  private _incidents = new DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryIncidentsOutputReference(this, "incidents");
  public get incidents() {
    return this._incidents;
  }
  public putIncidents(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryIncidents) {
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
  private _insights = new DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryInsightsOutputReference(this, "insights");
  public get insights() {
    return this._insights;
  }
  public putInsights(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryInsights) {
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
export interface DataK8SCanariesFlanksourceComComponentV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#checks DataK8SCanariesFlanksourceComComponentV1Manifest#checks}
  */
  readonly checks?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecChecks[] | cdktf.IResolvable;
  /**
  * Create new child components
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#components DataK8SCanariesFlanksourceComComponentV1Manifest#components}
  */
  readonly components?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#config_id DataK8SCanariesFlanksourceComComponentV1Manifest#config_id}
  */
  readonly configId?: string;
  /**
  * Lookup and associate config items with this component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#configs DataK8SCanariesFlanksourceComComponentV1Manifest#configs}
  */
  readonly configs?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#external_id DataK8SCanariesFlanksourceComComponentV1Manifest#external_id}
  */
  readonly externalId?: string;
  /**
  * Only applies when using lookup, when specified the components and properties specified under ForEach will be templated using the components returned by the lookup ${.properties} can be used to reference the properties of the component ${.component} can be used to reference the component itself
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#for_each DataK8SCanariesFlanksourceComComponentV1Manifest#for_each}
  */
  readonly forEach?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#health DataK8SCanariesFlanksourceComComponentV1Manifest#health}
  */
  readonly health?: string;
  /**
  * healthExpr allows defining a cel expression to evaluate the health of a component based on the summary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#health_expr DataK8SCanariesFlanksourceComComponentV1Manifest#health_expr}
  */
  readonly healthExpr?: string;
  /**
  * If set to true, do not display in UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#hidden DataK8SCanariesFlanksourceComComponentV1Manifest#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#icon DataK8SCanariesFlanksourceComComponentV1Manifest#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#id DataK8SCanariesFlanksourceComComponentV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecId;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#labels DataK8SCanariesFlanksourceComComponentV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The lifecycle state of the component e.g. production, staging, dev, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#lifecycle DataK8SCanariesFlanksourceComComponentV1Manifest#lifecycle}
  */
  readonly lifecycle?: string;
  /**
  * Logs is a list of logs selector for apm-hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#logs DataK8SCanariesFlanksourceComComponentV1Manifest#logs}
  */
  readonly logs?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecLogs[] | cdktf.IResolvable;
  /**
  * Lookup component definitions from an external source, use the forEach property to iterate over the results to further enrich each component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#lookup DataK8SCanariesFlanksourceComComponentV1Manifest#lookup}
  */
  readonly lookup?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#name DataK8SCanariesFlanksourceComComponentV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#namespace DataK8SCanariesFlanksourceComComponentV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#order DataK8SCanariesFlanksourceComComponentV1Manifest#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#owner DataK8SCanariesFlanksourceComComponentV1Manifest#owner}
  */
  readonly owner?: string;
  /**
  * Reference to populate parent_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#parent_lookup DataK8SCanariesFlanksourceComComponentV1Manifest#parent_lookup}
  */
  readonly parentLookup?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecParentLookup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#properties DataK8SCanariesFlanksourceComComponentV1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#relationships DataK8SCanariesFlanksourceComComponentV1Manifest#relationships}
  */
  readonly relationships?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationships[] | cdktf.IResolvable;
  /**
  * Lookup and associcate other components with this component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#selectors DataK8SCanariesFlanksourceComComponentV1Manifest#selectors}
  */
  readonly selectors?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectors[] | cdktf.IResolvable;
  /**
  * statusExpr allows defining a cel expression to evaluate the status of a component based on the summary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#status_expr DataK8SCanariesFlanksourceComComponentV1Manifest#status_expr}
  */
  readonly statusExpr?: string;
  /**
  * Summary is the health, incidents, insights & check summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#summary DataK8SCanariesFlanksourceComComponentV1Manifest#summary}
  */
  readonly summary?: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummary;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#tooltip DataK8SCanariesFlanksourceComComponentV1Manifest#tooltip}
  */
  readonly tooltip?: string;
  /**
  * The type of component, e.g. service, API, website, library, database, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#type DataK8SCanariesFlanksourceComComponentV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecToTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checks: cdktf.listMapper(dataK8SCanariesFlanksourceComComponentV1ManifestSpecChecksToTerraform, false)(struct!.checks),
    components: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.components),
    config_id: cdktf.stringToTerraform(struct!.configId),
    configs: cdktf.listMapper(dataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigsToTerraform, false)(struct!.configs),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    for_each: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.forEach),
    health: cdktf.stringToTerraform(struct!.health),
    health_expr: cdktf.stringToTerraform(struct!.healthExpr),
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    icon: cdktf.stringToTerraform(struct!.icon),
    id: dataK8SCanariesFlanksourceComComponentV1ManifestSpecIdToTerraform(struct!.id),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    lifecycle: cdktf.stringToTerraform(struct!.lifecycle),
    logs: cdktf.listMapper(dataK8SCanariesFlanksourceComComponentV1ManifestSpecLogsToTerraform, false)(struct!.logs),
    lookup: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.lookup),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    order: cdktf.numberToTerraform(struct!.order),
    owner: cdktf.stringToTerraform(struct!.owner),
    parent_lookup: dataK8SCanariesFlanksourceComComponentV1ManifestSpecParentLookupToTerraform(struct!.parentLookup),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    relationships: cdktf.listMapper(dataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationshipsToTerraform, false)(struct!.relationships),
    selectors: cdktf.listMapper(dataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectorsToTerraform, false)(struct!.selectors),
    status_expr: cdktf.stringToTerraform(struct!.statusExpr),
    summary: dataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryToTerraform(struct!.summary),
    tooltip: cdktf.stringToTerraform(struct!.tooltip),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCanariesFlanksourceComComponentV1ManifestSpecToHclTerraform(struct?: DataK8SCanariesFlanksourceComComponentV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checks: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComComponentV1ManifestSpecChecksToHclTerraform, false)(struct!.checks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComComponentV1ManifestSpecChecksList",
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
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigsToHclTerraform, false)(struct!.configs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigsList",
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
      value: dataK8SCanariesFlanksourceComComponentV1ManifestSpecIdToHclTerraform(struct!.id),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComComponentV1ManifestSpecId",
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
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComComponentV1ManifestSpecLogsToHclTerraform, false)(struct!.logs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComComponentV1ManifestSpecLogsList",
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
      value: dataK8SCanariesFlanksourceComComponentV1ManifestSpecParentLookupToHclTerraform(struct!.parentLookup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComComponentV1ManifestSpecParentLookup",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    relationships: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationshipsToHclTerraform, false)(struct!.relationships),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationshipsList",
    },
    selectors: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectorsToHclTerraform, false)(struct!.selectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectorsList",
    },
    status_expr: {
      value: cdktf.stringToHclTerraform(struct!.statusExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: dataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryToHclTerraform(struct!.summary),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummary",
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

export class DataK8SCanariesFlanksourceComComponentV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComComponentV1ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _checks = new DataK8SCanariesFlanksourceComComponentV1ManifestSpecChecksList(this, "checks", false);
  public get checks() {
    return this._checks;
  }
  public putChecks(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecChecks[] | cdktf.IResolvable) {
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
  private _configs = new DataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecConfigs[] | cdktf.IResolvable) {
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
  private _id = new DataK8SCanariesFlanksourceComComponentV1ManifestSpecIdOutputReference(this, "id");
  public get id() {
    return this._id;
  }
  public putId(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecId) {
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
  private _logs = new DataK8SCanariesFlanksourceComComponentV1ManifestSpecLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }
  public putLogs(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecLogs[] | cdktf.IResolvable) {
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
  private _parentLookup = new DataK8SCanariesFlanksourceComComponentV1ManifestSpecParentLookupOutputReference(this, "parent_lookup");
  public get parentLookup() {
    return this._parentLookup;
  }
  public putParentLookup(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecParentLookup) {
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
  private _relationships = new DataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationshipsList(this, "relationships", false);
  public get relationships() {
    return this._relationships;
  }
  public putRelationships(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecRelationships[] | cdktf.IResolvable) {
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
  private _selectors = new DataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectorsList(this, "selectors", false);
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSelectors[] | cdktf.IResolvable) {
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
  private _summary = new DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummaryOutputReference(this, "summary");
  public get summary() {
    return this._summary;
  }
  public putSummary(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpecSummary) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest k8s_canaries_flanksource_com_component_v1_manifest}
*/
export class DataK8SCanariesFlanksourceComComponentV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_canaries_flanksource_com_component_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCanariesFlanksourceComComponentV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCanariesFlanksourceComComponentV1Manifest to import
  * @param importFromId The id of the existing DataK8SCanariesFlanksourceComComponentV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCanariesFlanksourceComComponentV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_canaries_flanksource_com_component_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/canaries_flanksource_com_component_v1_manifest k8s_canaries_flanksource_com_component_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCanariesFlanksourceComComponentV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCanariesFlanksourceComComponentV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_canaries_flanksource_com_component_v1_manifest',
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
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SCanariesFlanksourceComComponentV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCanariesFlanksourceComComponentV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCanariesFlanksourceComComponentV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCanariesFlanksourceComComponentV1ManifestSpec) {
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
      metadata: dataK8SCanariesFlanksourceComComponentV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCanariesFlanksourceComComponentV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCanariesFlanksourceComComponentV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCanariesFlanksourceComComponentV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCanariesFlanksourceComComponentV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCanariesFlanksourceComComponentV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
