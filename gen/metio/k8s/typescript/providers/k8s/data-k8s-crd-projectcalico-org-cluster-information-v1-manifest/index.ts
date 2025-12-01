// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/crd_projectcalico_org_cluster_information_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/crd_projectcalico_org_cluster_information_v1_manifest#metadata DataK8SCrdProjectcalicoOrgClusterInformationV1Manifest#metadata}
  */
  readonly metadata: DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestMetadata;
  /**
  * ClusterInformationSpec contains the values of describing the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/crd_projectcalico_org_cluster_information_v1_manifest#spec DataK8SCrdProjectcalicoOrgClusterInformationV1Manifest#spec}
  */
  readonly spec?: DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestSpec;
}
export interface DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/crd_projectcalico_org_cluster_information_v1_manifest#annotations DataK8SCrdProjectcalicoOrgClusterInformationV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/crd_projectcalico_org_cluster_information_v1_manifest#labels DataK8SCrdProjectcalicoOrgClusterInformationV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/crd_projectcalico_org_cluster_information_v1_manifest#name DataK8SCrdProjectcalicoOrgClusterInformationV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCrdProjectcalicoOrgClusterInformationV1ManifestMetadataToTerraform(struct?: DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCrdProjectcalicoOrgClusterInformationV1ManifestMetadataToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestSpec {
  /**
  * CalicoVersion is the version of Calico that the cluster is running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/crd_projectcalico_org_cluster_information_v1_manifest#calico_version DataK8SCrdProjectcalicoOrgClusterInformationV1Manifest#calico_version}
  */
  readonly calicoVersion?: string;
  /**
  * ClusterGUID is the GUID of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/crd_projectcalico_org_cluster_information_v1_manifest#cluster_guid DataK8SCrdProjectcalicoOrgClusterInformationV1Manifest#cluster_guid}
  */
  readonly clusterGuid?: string;
  /**
  * ClusterType describes the type of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/crd_projectcalico_org_cluster_information_v1_manifest#cluster_type DataK8SCrdProjectcalicoOrgClusterInformationV1Manifest#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * DatastoreReady is used during significant datastore migrations to signal to components such as Felix that it should wait before accessing the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/crd_projectcalico_org_cluster_information_v1_manifest#datastore_ready DataK8SCrdProjectcalicoOrgClusterInformationV1Manifest#datastore_ready}
  */
  readonly datastoreReady?: boolean | cdktf.IResolvable;
  /**
  * Variant declares which variant of Calico should be active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/crd_projectcalico_org_cluster_information_v1_manifest#variant DataK8SCrdProjectcalicoOrgClusterInformationV1Manifest#variant}
  */
  readonly variant?: string;
}

export function dataK8SCrdProjectcalicoOrgClusterInformationV1ManifestSpecToTerraform(struct?: DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calico_version: cdktf.stringToTerraform(struct!.calicoVersion),
    cluster_guid: cdktf.stringToTerraform(struct!.clusterGuid),
    cluster_type: cdktf.stringToTerraform(struct!.clusterType),
    datastore_ready: cdktf.booleanToTerraform(struct!.datastoreReady),
    variant: cdktf.stringToTerraform(struct!.variant),
  }
}


export function dataK8SCrdProjectcalicoOrgClusterInformationV1ManifestSpecToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calico_version: {
      value: cdktf.stringToHclTerraform(struct!.calicoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_guid: {
      value: cdktf.stringToHclTerraform(struct!.clusterGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_type: {
      value: cdktf.stringToHclTerraform(struct!.clusterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore_ready: {
      value: cdktf.booleanToHclTerraform(struct!.datastoreReady),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    variant: {
      value: cdktf.stringToHclTerraform(struct!.variant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calicoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.calicoVersion = this._calicoVersion;
    }
    if (this._clusterGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGuid = this._clusterGuid;
    }
    if (this._clusterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterType = this._clusterType;
    }
    if (this._datastoreReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreReady = this._datastoreReady;
    }
    if (this._variant !== undefined) {
      hasAnyValues = true;
      internalValueResult.variant = this._variant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calicoVersion = undefined;
      this._clusterGuid = undefined;
      this._clusterType = undefined;
      this._datastoreReady = undefined;
      this._variant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calicoVersion = value.calicoVersion;
      this._clusterGuid = value.clusterGuid;
      this._clusterType = value.clusterType;
      this._datastoreReady = value.datastoreReady;
      this._variant = value.variant;
    }
  }

  // calico_version - computed: false, optional: true, required: false
  private _calicoVersion?: string; 
  public get calicoVersion() {
    return this.getStringAttribute('calico_version');
  }
  public set calicoVersion(value: string) {
    this._calicoVersion = value;
  }
  public resetCalicoVersion() {
    this._calicoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calicoVersionInput() {
    return this._calicoVersion;
  }

  // cluster_guid - computed: false, optional: true, required: false
  private _clusterGuid?: string; 
  public get clusterGuid() {
    return this.getStringAttribute('cluster_guid');
  }
  public set clusterGuid(value: string) {
    this._clusterGuid = value;
  }
  public resetClusterGuid() {
    this._clusterGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGuidInput() {
    return this._clusterGuid;
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // datastore_ready - computed: false, optional: true, required: false
  private _datastoreReady?: boolean | cdktf.IResolvable; 
  public get datastoreReady() {
    return this.getBooleanAttribute('datastore_ready');
  }
  public set datastoreReady(value: boolean | cdktf.IResolvable) {
    this._datastoreReady = value;
  }
  public resetDatastoreReady() {
    this._datastoreReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreReadyInput() {
    return this._datastoreReady;
  }

  // variant - computed: false, optional: true, required: false
  private _variant?: string; 
  public get variant() {
    return this.getStringAttribute('variant');
  }
  public set variant(value: string) {
    this._variant = value;
  }
  public resetVariant() {
    this._variant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantInput() {
    return this._variant;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/crd_projectcalico_org_cluster_information_v1_manifest k8s_crd_projectcalico_org_cluster_information_v1_manifest}
*/
export class DataK8SCrdProjectcalicoOrgClusterInformationV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_crd_projectcalico_org_cluster_information_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCrdProjectcalicoOrgClusterInformationV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCrdProjectcalicoOrgClusterInformationV1Manifest to import
  * @param importFromId The id of the existing DataK8SCrdProjectcalicoOrgClusterInformationV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/crd_projectcalico_org_cluster_information_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCrdProjectcalicoOrgClusterInformationV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_crd_projectcalico_org_cluster_information_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/crd_projectcalico_org_cluster_information_v1_manifest k8s_crd_projectcalico_org_cluster_information_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_crd_projectcalico_org_cluster_information_v1_manifest',
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
  private _metadata = new DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestSpec) {
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
      metadata: dataK8SCrdProjectcalicoOrgClusterInformationV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCrdProjectcalicoOrgClusterInformationV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCrdProjectcalicoOrgClusterInformationV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCrdProjectcalicoOrgClusterInformationV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgClusterInformationV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
