// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/metacontroller_k8s_io_controller_revision_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/metacontroller_k8s_io_controller_revision_v1alpha1_manifest#children DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1Manifest#children}
  */
  readonly children?: DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildren[] | cdktf.IResolvable;
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/metacontroller_k8s_io_controller_revision_v1alpha1_manifest#metadata DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/metacontroller_k8s_io_controller_revision_v1alpha1_manifest#parent_patch DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1Manifest#parent_patch}
  */
  readonly parentPatch: { [key: string]: string };
}
export interface DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildren {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/metacontroller_k8s_io_controller_revision_v1alpha1_manifest#api_group DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1Manifest#api_group}
  */
  readonly apiGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/metacontroller_k8s_io_controller_revision_v1alpha1_manifest#kind DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/metacontroller_k8s_io_controller_revision_v1alpha1_manifest#names DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1Manifest#names}
  */
  readonly names: string[];
}

export function dataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildrenToTerraform(struct?: DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildren | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function dataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildrenToHclTerraform(struct?: DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildren | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildrenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildren | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildren | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._names = value.names;
    }
  }

  // api_group - computed: false, optional: false, required: true
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
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

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}

export class DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildrenList extends cdktf.ComplexList {
  public internalValue? : DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildren[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildrenOutputReference {
    return new DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildrenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/metacontroller_k8s_io_controller_revision_v1alpha1_manifest#annotations DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/metacontroller_k8s_io_controller_revision_v1alpha1_manifest#labels DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/metacontroller_k8s_io_controller_revision_v1alpha1_manifest#name DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/metacontroller_k8s_io_controller_revision_v1alpha1_manifest#namespace DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/metacontroller_k8s_io_controller_revision_v1alpha1_manifest k8s_metacontroller_k8s_io_controller_revision_v1alpha1_manifest}
*/
export class DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_metacontroller_k8s_io_controller_revision_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/metacontroller_k8s_io_controller_revision_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_metacontroller_k8s_io_controller_revision_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/metacontroller_k8s_io_controller_revision_v1alpha1_manifest k8s_metacontroller_k8s_io_controller_revision_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_metacontroller_k8s_io_controller_revision_v1alpha1_manifest',
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
    this._children.internalValue = config.children;
    this._metadata.internalValue = config.metadata;
    this._parentPatch = config.parentPatch;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // children - computed: false, optional: true, required: false
  private _children = new DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildrenList(this, "children", false);
  public get children() {
    return this._children;
  }
  public putChildren(value: DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildren[] | cdktf.IResolvable) {
    this._children.internalValue = value;
  }
  public resetChildren() {
    this._children.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childrenInput() {
    return this._children.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // parent_patch - computed: false, optional: false, required: true
  private _parentPatch?: { [key: string]: string }; 
  public get parentPatch() {
    return this.getStringMapAttribute('parent_patch');
  }
  public set parentPatch(value: { [key: string]: string }) {
    this._parentPatch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPatchInput() {
    return this._parentPatch;
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
      children: cdktf.listMapper(dataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildrenToTerraform, false)(this._children.internalValue),
      metadata: dataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      parent_patch: cdktf.hashMapper(cdktf.stringToTerraform)(this._parentPatch),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      children: {
        value: cdktf.listMapperHcl(dataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildrenToHclTerraform, false)(this._children.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestChildrenList",
      },
      metadata: {
        value: dataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMetacontrollerK8SIoControllerRevisionV1Alpha1ManifestMetadata",
      },
      parent_patch: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parentPatch),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
