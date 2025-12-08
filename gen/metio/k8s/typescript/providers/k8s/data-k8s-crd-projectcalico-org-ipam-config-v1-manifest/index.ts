// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_ipam_config_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_ipam_config_v1_manifest#metadata DataK8SCrdProjectcalicoOrgIpamConfigV1Manifest#metadata}
  */
  readonly metadata: DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestMetadata;
  /**
  * IPAMConfigSpec contains the specification for an IPAMConfig resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_ipam_config_v1_manifest#spec DataK8SCrdProjectcalicoOrgIpamConfigV1Manifest#spec}
  */
  readonly spec?: DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestSpec;
}
export interface DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_ipam_config_v1_manifest#annotations DataK8SCrdProjectcalicoOrgIpamConfigV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_ipam_config_v1_manifest#labels DataK8SCrdProjectcalicoOrgIpamConfigV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_ipam_config_v1_manifest#name DataK8SCrdProjectcalicoOrgIpamConfigV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCrdProjectcalicoOrgIpamConfigV1ManifestMetadataToTerraform(struct?: DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCrdProjectcalicoOrgIpamConfigV1ManifestMetadataToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_ipam_config_v1_manifest#auto_allocate_blocks DataK8SCrdProjectcalicoOrgIpamConfigV1Manifest#auto_allocate_blocks}
  */
  readonly autoAllocateBlocks: boolean | cdktf.IResolvable;
  /**
  * MaxBlocksPerHost, if non-zero, is the max number of blocks that can be affine to each host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_ipam_config_v1_manifest#max_blocks_per_host DataK8SCrdProjectcalicoOrgIpamConfigV1Manifest#max_blocks_per_host}
  */
  readonly maxBlocksPerHost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_ipam_config_v1_manifest#strict_affinity DataK8SCrdProjectcalicoOrgIpamConfigV1Manifest#strict_affinity}
  */
  readonly strictAffinity: boolean | cdktf.IResolvable;
}

export function dataK8SCrdProjectcalicoOrgIpamConfigV1ManifestSpecToTerraform(struct?: DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_allocate_blocks: cdktf.booleanToTerraform(struct!.autoAllocateBlocks),
    max_blocks_per_host: cdktf.numberToTerraform(struct!.maxBlocksPerHost),
    strict_affinity: cdktf.booleanToTerraform(struct!.strictAffinity),
  }
}


export function dataK8SCrdProjectcalicoOrgIpamConfigV1ManifestSpecToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_allocate_blocks: {
      value: cdktf.booleanToHclTerraform(struct!.autoAllocateBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_blocks_per_host: {
      value: cdktf.numberToHclTerraform(struct!.maxBlocksPerHost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strict_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.strictAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoAllocateBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAllocateBlocks = this._autoAllocateBlocks;
    }
    if (this._maxBlocksPerHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBlocksPerHost = this._maxBlocksPerHost;
    }
    if (this._strictAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictAffinity = this._strictAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoAllocateBlocks = undefined;
      this._maxBlocksPerHost = undefined;
      this._strictAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoAllocateBlocks = value.autoAllocateBlocks;
      this._maxBlocksPerHost = value.maxBlocksPerHost;
      this._strictAffinity = value.strictAffinity;
    }
  }

  // auto_allocate_blocks - computed: false, optional: false, required: true
  private _autoAllocateBlocks?: boolean | cdktf.IResolvable; 
  public get autoAllocateBlocks() {
    return this.getBooleanAttribute('auto_allocate_blocks');
  }
  public set autoAllocateBlocks(value: boolean | cdktf.IResolvable) {
    this._autoAllocateBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAllocateBlocksInput() {
    return this._autoAllocateBlocks;
  }

  // max_blocks_per_host - computed: false, optional: true, required: false
  private _maxBlocksPerHost?: number; 
  public get maxBlocksPerHost() {
    return this.getNumberAttribute('max_blocks_per_host');
  }
  public set maxBlocksPerHost(value: number) {
    this._maxBlocksPerHost = value;
  }
  public resetMaxBlocksPerHost() {
    this._maxBlocksPerHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBlocksPerHostInput() {
    return this._maxBlocksPerHost;
  }

  // strict_affinity - computed: false, optional: false, required: true
  private _strictAffinity?: boolean | cdktf.IResolvable; 
  public get strictAffinity() {
    return this.getBooleanAttribute('strict_affinity');
  }
  public set strictAffinity(value: boolean | cdktf.IResolvable) {
    this._strictAffinity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strictAffinityInput() {
    return this._strictAffinity;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_ipam_config_v1_manifest k8s_crd_projectcalico_org_ipam_config_v1_manifest}
*/
export class DataK8SCrdProjectcalicoOrgIpamConfigV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_crd_projectcalico_org_ipam_config_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCrdProjectcalicoOrgIpamConfigV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCrdProjectcalicoOrgIpamConfigV1Manifest to import
  * @param importFromId The id of the existing DataK8SCrdProjectcalicoOrgIpamConfigV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_ipam_config_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCrdProjectcalicoOrgIpamConfigV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_crd_projectcalico_org_ipam_config_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_ipam_config_v1_manifest k8s_crd_projectcalico_org_ipam_config_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_crd_projectcalico_org_ipam_config_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestSpec) {
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
      metadata: dataK8SCrdProjectcalicoOrgIpamConfigV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCrdProjectcalicoOrgIpamConfigV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCrdProjectcalicoOrgIpamConfigV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCrdProjectcalicoOrgIpamConfigV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgIpamConfigV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
