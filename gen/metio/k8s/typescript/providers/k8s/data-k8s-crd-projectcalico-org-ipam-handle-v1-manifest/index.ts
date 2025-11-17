// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_ipam_handle_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_ipam_handle_v1_manifest#metadata DataK8SCrdProjectcalicoOrgIpamHandleV1Manifest#metadata}
  */
  readonly metadata: DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestMetadata;
  /**
  * IPAMHandleSpec contains the specification for an IPAMHandle resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_ipam_handle_v1_manifest#spec DataK8SCrdProjectcalicoOrgIpamHandleV1Manifest#spec}
  */
  readonly spec?: DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestSpec;
}
export interface DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_ipam_handle_v1_manifest#annotations DataK8SCrdProjectcalicoOrgIpamHandleV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_ipam_handle_v1_manifest#labels DataK8SCrdProjectcalicoOrgIpamHandleV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_ipam_handle_v1_manifest#name DataK8SCrdProjectcalicoOrgIpamHandleV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCrdProjectcalicoOrgIpamHandleV1ManifestMetadataToTerraform(struct?: DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCrdProjectcalicoOrgIpamHandleV1ManifestMetadataToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_ipam_handle_v1_manifest#block DataK8SCrdProjectcalicoOrgIpamHandleV1Manifest#block}
  */
  readonly block: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_ipam_handle_v1_manifest#deleted DataK8SCrdProjectcalicoOrgIpamHandleV1Manifest#deleted}
  */
  readonly deleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_ipam_handle_v1_manifest#handle_id DataK8SCrdProjectcalicoOrgIpamHandleV1Manifest#handle_id}
  */
  readonly handleId: string;
}

export function dataK8SCrdProjectcalicoOrgIpamHandleV1ManifestSpecToTerraform(struct?: DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.block),
    deleted: cdktf.booleanToTerraform(struct!.deleted),
    handle_id: cdktf.stringToTerraform(struct!.handleId),
  }
}


export function dataK8SCrdProjectcalicoOrgIpamHandleV1ManifestSpecToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.block),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    deleted: {
      value: cdktf.booleanToHclTerraform(struct!.deleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    handle_id: {
      value: cdktf.stringToHclTerraform(struct!.handleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._deleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleted = this._deleted;
    }
    if (this._handleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.handleId = this._handleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._block = undefined;
      this._deleted = undefined;
      this._handleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._block = value.block;
      this._deleted = value.deleted;
      this._handleId = value.handleId;
    }
  }

  // block - computed: false, optional: false, required: true
  private _block?: { [key: string]: string }; 
  public get block() {
    return this.getStringMapAttribute('block');
  }
  public set block(value: { [key: string]: string }) {
    this._block = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // deleted - computed: false, optional: true, required: false
  private _deleted?: boolean | cdktf.IResolvable; 
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }
  public set deleted(value: boolean | cdktf.IResolvable) {
    this._deleted = value;
  }
  public resetDeleted() {
    this._deleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedInput() {
    return this._deleted;
  }

  // handle_id - computed: false, optional: false, required: true
  private _handleId?: string; 
  public get handleId() {
    return this.getStringAttribute('handle_id');
  }
  public set handleId(value: string) {
    this._handleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handleIdInput() {
    return this._handleId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_ipam_handle_v1_manifest k8s_crd_projectcalico_org_ipam_handle_v1_manifest}
*/
export class DataK8SCrdProjectcalicoOrgIpamHandleV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_crd_projectcalico_org_ipam_handle_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCrdProjectcalicoOrgIpamHandleV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCrdProjectcalicoOrgIpamHandleV1Manifest to import
  * @param importFromId The id of the existing DataK8SCrdProjectcalicoOrgIpamHandleV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_ipam_handle_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCrdProjectcalicoOrgIpamHandleV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_crd_projectcalico_org_ipam_handle_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_ipam_handle_v1_manifest k8s_crd_projectcalico_org_ipam_handle_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_crd_projectcalico_org_ipam_handle_v1_manifest',
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
  private _metadata = new DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestSpec) {
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
      metadata: dataK8SCrdProjectcalicoOrgIpamHandleV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCrdProjectcalicoOrgIpamHandleV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCrdProjectcalicoOrgIpamHandleV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCrdProjectcalicoOrgIpamHandleV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgIpamHandleV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
