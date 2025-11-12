// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest#metadata DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestMetadata;
  /**
  * ObjectSyncSpec stores the details of objects that persist to the edge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest#spec DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestSpec;
}
export interface DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest#annotations DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest#labels DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest#name DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestSpec {
  /**
  * ObjectAPIVersion is the APIVersion of the object that was successfully persist to the edge node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest#object_api_version DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1Manifest#object_api_version}
  */
  readonly objectApiVersion?: string;
  /**
  * ObjectType is the kind of the object that was successfully persist to the edge node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest#object_kind DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1Manifest#object_kind}
  */
  readonly objectKind?: string;
  /**
  * ObjectName is the name of the object that was successfully persist to the edge node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest#object_name DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1Manifest#object_name}
  */
  readonly objectName?: string;
}

export function dataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestSpecToTerraform(struct?: DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_api_version: cdktf.stringToTerraform(struct!.objectApiVersion),
    object_kind: cdktf.stringToTerraform(struct!.objectKind),
    object_name: cdktf.stringToTerraform(struct!.objectName),
  }
}


export function dataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_api_version: {
      value: cdktf.stringToHclTerraform(struct!.objectApiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_kind: {
      value: cdktf.stringToHclTerraform(struct!.objectKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_name: {
      value: cdktf.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectApiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectApiVersion = this._objectApiVersion;
    }
    if (this._objectKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectKind = this._objectKind;
    }
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectApiVersion = undefined;
      this._objectKind = undefined;
      this._objectName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectApiVersion = value.objectApiVersion;
      this._objectKind = value.objectKind;
      this._objectName = value.objectName;
    }
  }

  // object_api_version - computed: false, optional: true, required: false
  private _objectApiVersion?: string; 
  public get objectApiVersion() {
    return this.getStringAttribute('object_api_version');
  }
  public set objectApiVersion(value: string) {
    this._objectApiVersion = value;
  }
  public resetObjectApiVersion() {
    this._objectApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectApiVersionInput() {
    return this._objectApiVersion;
  }

  // object_kind - computed: false, optional: true, required: false
  private _objectKind?: string; 
  public get objectKind() {
    return this.getStringAttribute('object_kind');
  }
  public set objectKind(value: string) {
    this._objectKind = value;
  }
  public resetObjectKind() {
    this._objectKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectKindInput() {
    return this._objectKind;
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest k8s_reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest}
*/
export class DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest k8s_reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_reliablesyncs_kubeedge_io_cluster_object_sync_v1alpha1_manifest',
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
  private _metadata = new DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestSpec) {
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
      metadata: dataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SReliablesyncsKubeedgeIoClusterObjectSyncV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
