// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_tier_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCrdProjectcalicoOrgTierV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_tier_v1_manifest#metadata DataK8SCrdProjectcalicoOrgTierV1Manifest#metadata}
  */
  readonly metadata: DataK8SCrdProjectcalicoOrgTierV1ManifestMetadata;
  /**
  * TierSpec contains the specification for a security policy tier resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_tier_v1_manifest#spec DataK8SCrdProjectcalicoOrgTierV1Manifest#spec}
  */
  readonly spec?: DataK8SCrdProjectcalicoOrgTierV1ManifestSpec;
}
export interface DataK8SCrdProjectcalicoOrgTierV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_tier_v1_manifest#annotations DataK8SCrdProjectcalicoOrgTierV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_tier_v1_manifest#labels DataK8SCrdProjectcalicoOrgTierV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_tier_v1_manifest#name DataK8SCrdProjectcalicoOrgTierV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCrdProjectcalicoOrgTierV1ManifestMetadataToTerraform(struct?: DataK8SCrdProjectcalicoOrgTierV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCrdProjectcalicoOrgTierV1ManifestMetadataToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgTierV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgTierV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgTierV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgTierV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCrdProjectcalicoOrgTierV1ManifestSpec {
  /**
  * DefaultAction specifies the action applied to workloads selected by a policy in the tier, but not rule matched the workload's traffic. [Default: Deny]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_tier_v1_manifest#default_action DataK8SCrdProjectcalicoOrgTierV1Manifest#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Order is an optional field that specifies the order in which the tier is applied. Tiers with higher 'order' are applied after those with lower order. If the order is omitted, it may be considered to be 'infinite' - i.e. the tier will be applied last. Tiers with identical order will be applied in alphanumerical order based on the Tier 'Name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_tier_v1_manifest#order DataK8SCrdProjectcalicoOrgTierV1Manifest#order}
  */
  readonly order?: number;
}

export function dataK8SCrdProjectcalicoOrgTierV1ManifestSpecToTerraform(struct?: DataK8SCrdProjectcalicoOrgTierV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    order: cdktf.numberToTerraform(struct!.order),
  }
}


export function dataK8SCrdProjectcalicoOrgTierV1ManifestSpecToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgTierV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgTierV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgTierV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgTierV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultAction = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultAction = value.defaultAction;
      this._order = value.order;
    }
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_tier_v1_manifest k8s_crd_projectcalico_org_tier_v1_manifest}
*/
export class DataK8SCrdProjectcalicoOrgTierV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_crd_projectcalico_org_tier_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCrdProjectcalicoOrgTierV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCrdProjectcalicoOrgTierV1Manifest to import
  * @param importFromId The id of the existing DataK8SCrdProjectcalicoOrgTierV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_tier_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCrdProjectcalicoOrgTierV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_crd_projectcalico_org_tier_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_tier_v1_manifest k8s_crd_projectcalico_org_tier_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCrdProjectcalicoOrgTierV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCrdProjectcalicoOrgTierV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_crd_projectcalico_org_tier_v1_manifest',
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
  private _metadata = new DataK8SCrdProjectcalicoOrgTierV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCrdProjectcalicoOrgTierV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCrdProjectcalicoOrgTierV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCrdProjectcalicoOrgTierV1ManifestSpec) {
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
      metadata: dataK8SCrdProjectcalicoOrgTierV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCrdProjectcalicoOrgTierV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCrdProjectcalicoOrgTierV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgTierV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCrdProjectcalicoOrgTierV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgTierV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
