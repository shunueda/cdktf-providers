// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SBoskosK8SIoDrlcObjectV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest#metadata DataK8SBoskosK8SIoDrlcObjectV1Manifest#metadata}
  */
  readonly metadata: DataK8SBoskosK8SIoDrlcObjectV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest#spec DataK8SBoskosK8SIoDrlcObjectV1Manifest#spec}
  */
  readonly spec?: DataK8SBoskosK8SIoDrlcObjectV1ManifestSpec;
}
export interface DataK8SBoskosK8SIoDrlcObjectV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest#annotations DataK8SBoskosK8SIoDrlcObjectV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest#labels DataK8SBoskosK8SIoDrlcObjectV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest#name DataK8SBoskosK8SIoDrlcObjectV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest#namespace DataK8SBoskosK8SIoDrlcObjectV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SBoskosK8SIoDrlcObjectV1ManifestMetadataToTerraform(struct?: DataK8SBoskosK8SIoDrlcObjectV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SBoskosK8SIoDrlcObjectV1ManifestMetadataToHclTerraform(struct?: DataK8SBoskosK8SIoDrlcObjectV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SBoskosK8SIoDrlcObjectV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBoskosK8SIoDrlcObjectV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBoskosK8SIoDrlcObjectV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SBoskosK8SIoDrlcObjectV1ManifestSpecConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest#content DataK8SBoskosK8SIoDrlcObjectV1Manifest#content}
  */
  readonly content?: string;
  /**
  * The dynamic resource type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest#type DataK8SBoskosK8SIoDrlcObjectV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SBoskosK8SIoDrlcObjectV1ManifestSpecConfigToTerraform(struct?: DataK8SBoskosK8SIoDrlcObjectV1ManifestSpecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SBoskosK8SIoDrlcObjectV1ManifestSpecConfigToHclTerraform(struct?: DataK8SBoskosK8SIoDrlcObjectV1ManifestSpecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
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

export class DataK8SBoskosK8SIoDrlcObjectV1ManifestSpecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBoskosK8SIoDrlcObjectV1ManifestSpecConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBoskosK8SIoDrlcObjectV1ManifestSpecConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._type = value.type;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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
export interface DataK8SBoskosK8SIoDrlcObjectV1ManifestSpec {
  /**
  * Config information about how to create the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest#config DataK8SBoskosK8SIoDrlcObjectV1Manifest#config}
  */
  readonly config?: DataK8SBoskosK8SIoDrlcObjectV1ManifestSpecConfig;
  /**
  * Lifespan of a resource, time after which the resource should be reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest#lifespan DataK8SBoskosK8SIoDrlcObjectV1Manifest#lifespan}
  */
  readonly lifespan?: number;
  /**
  * Maxiumum number of resources expected. This maximum may be temporarily exceeded while resources are in the process of being deleted, though this is only expected when MaxCount is lowered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest#max_count DataK8SBoskosK8SIoDrlcObjectV1Manifest#max_count}
  */
  readonly maxCount?: number;
  /**
  * Minimum number of resources to be used as a buffer. Resources in the process of being deleted and cleaned up are included in this count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest#min_count DataK8SBoskosK8SIoDrlcObjectV1Manifest#min_count}
  */
  readonly minCount?: number;
  /**
  * Define the resource needs to create the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest#needs DataK8SBoskosK8SIoDrlcObjectV1Manifest#needs}
  */
  readonly needs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest#state DataK8SBoskosK8SIoDrlcObjectV1Manifest#state}
  */
  readonly state?: string;
}

export function dataK8SBoskosK8SIoDrlcObjectV1ManifestSpecToTerraform(struct?: DataK8SBoskosK8SIoDrlcObjectV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: dataK8SBoskosK8SIoDrlcObjectV1ManifestSpecConfigToTerraform(struct!.config),
    lifespan: cdktf.numberToTerraform(struct!.lifespan),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    needs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.needs),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function dataK8SBoskosK8SIoDrlcObjectV1ManifestSpecToHclTerraform(struct?: DataK8SBoskosK8SIoDrlcObjectV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: dataK8SBoskosK8SIoDrlcObjectV1ManifestSpecConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBoskosK8SIoDrlcObjectV1ManifestSpecConfig",
    },
    lifespan: {
      value: cdktf.numberToHclTerraform(struct!.lifespan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    needs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.needs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBoskosK8SIoDrlcObjectV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBoskosK8SIoDrlcObjectV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._lifespan !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifespan = this._lifespan;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._needs !== undefined) {
      hasAnyValues = true;
      internalValueResult.needs = this._needs;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBoskosK8SIoDrlcObjectV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._lifespan = undefined;
      this._maxCount = undefined;
      this._minCount = undefined;
      this._needs = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._lifespan = value.lifespan;
      this._maxCount = value.maxCount;
      this._minCount = value.minCount;
      this._needs = value.needs;
      this._state = value.state;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SBoskosK8SIoDrlcObjectV1ManifestSpecConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SBoskosK8SIoDrlcObjectV1ManifestSpecConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // lifespan - computed: false, optional: true, required: false
  private _lifespan?: number; 
  public get lifespan() {
    return this.getNumberAttribute('lifespan');
  }
  public set lifespan(value: number) {
    this._lifespan = value;
  }
  public resetLifespan() {
    this._lifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifespanInput() {
    return this._lifespan;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // needs - computed: false, optional: true, required: false
  private _needs?: { [key: string]: string }; 
  public get needs() {
    return this.getStringMapAttribute('needs');
  }
  public set needs(value: { [key: string]: string }) {
    this._needs = value;
  }
  public resetNeeds() {
    this._needs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needsInput() {
    return this._needs;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest k8s_boskos_k8s_io_drlc_object_v1_manifest}
*/
export class DataK8SBoskosK8SIoDrlcObjectV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_boskos_k8s_io_drlc_object_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SBoskosK8SIoDrlcObjectV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SBoskosK8SIoDrlcObjectV1Manifest to import
  * @param importFromId The id of the existing DataK8SBoskosK8SIoDrlcObjectV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SBoskosK8SIoDrlcObjectV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_boskos_k8s_io_drlc_object_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/boskos_k8s_io_drlc_object_v1_manifest k8s_boskos_k8s_io_drlc_object_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SBoskosK8SIoDrlcObjectV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SBoskosK8SIoDrlcObjectV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_boskos_k8s_io_drlc_object_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SBoskosK8SIoDrlcObjectV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SBoskosK8SIoDrlcObjectV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SBoskosK8SIoDrlcObjectV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SBoskosK8SIoDrlcObjectV1ManifestSpec) {
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
      metadata: dataK8SBoskosK8SIoDrlcObjectV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SBoskosK8SIoDrlcObjectV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SBoskosK8SIoDrlcObjectV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SBoskosK8SIoDrlcObjectV1ManifestMetadata",
      },
      spec: {
        value: dataK8SBoskosK8SIoDrlcObjectV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SBoskosK8SIoDrlcObjectV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
