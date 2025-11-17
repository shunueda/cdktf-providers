// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_v1alpha1_manifest#metadata DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_v1alpha1_manifest#spec DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestSpec;
}
export interface DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_v1alpha1_manifest#annotations DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_v1alpha1_manifest#labels DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_v1alpha1_manifest#name DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestSpec {
  /**
  * ArgoCD applicationset name which is used for installation of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_v1alpha1_manifest#cluster_definition DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1Manifest#cluster_definition}
  */
  readonly clusterDefinition: string;
  /**
  * Array of ArgoCD applicationset names which are used for post installation setup of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_v1alpha1_manifest#cluster_setup DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1Manifest#cluster_setup}
  */
  readonly clusterSetup?: string[];
  /**
  * Cost of the cluster, used for quotas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_v1alpha1_manifest#cost DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1Manifest#cost}
  */
  readonly cost?: number;
  /**
  * Skip the registration of the cluster to the hub cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_v1alpha1_manifest#skip_cluster_registration DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1Manifest#skip_cluster_registration}
  */
  readonly skipClusterRegistration?: boolean | cdktf.IResolvable;
}

export function dataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestSpecToTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_definition: cdktf.stringToTerraform(struct!.clusterDefinition),
    cluster_setup: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterSetup),
    cost: cdktf.numberToTerraform(struct!.cost),
    skip_cluster_registration: cdktf.booleanToTerraform(struct!.skipClusterRegistration),
  }
}


export function dataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_definition: {
      value: cdktf.stringToHclTerraform(struct!.clusterDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_setup: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterSetup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_cluster_registration: {
      value: cdktf.booleanToHclTerraform(struct!.skipClusterRegistration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDefinition = this._clusterDefinition;
    }
    if (this._clusterSetup !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSetup = this._clusterSetup;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._skipClusterRegistration !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipClusterRegistration = this._skipClusterRegistration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterDefinition = undefined;
      this._clusterSetup = undefined;
      this._cost = undefined;
      this._skipClusterRegistration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterDefinition = value.clusterDefinition;
      this._clusterSetup = value.clusterSetup;
      this._cost = value.cost;
      this._skipClusterRegistration = value.skipClusterRegistration;
    }
  }

  // cluster_definition - computed: false, optional: false, required: true
  private _clusterDefinition?: string; 
  public get clusterDefinition() {
    return this.getStringAttribute('cluster_definition');
  }
  public set clusterDefinition(value: string) {
    this._clusterDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDefinitionInput() {
    return this._clusterDefinition;
  }

  // cluster_setup - computed: false, optional: true, required: false
  private _clusterSetup?: string[]; 
  public get clusterSetup() {
    return this.getListAttribute('cluster_setup');
  }
  public set clusterSetup(value: string[]) {
    this._clusterSetup = value;
  }
  public resetClusterSetup() {
    this._clusterSetup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSetupInput() {
    return this._clusterSetup;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // skip_cluster_registration - computed: false, optional: true, required: false
  private _skipClusterRegistration?: boolean | cdktf.IResolvable; 
  public get skipClusterRegistration() {
    return this.getBooleanAttribute('skip_cluster_registration');
  }
  public set skipClusterRegistration(value: boolean | cdktf.IResolvable) {
    this._skipClusterRegistration = value;
  }
  public resetSkipClusterRegistration() {
    this._skipClusterRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipClusterRegistrationInput() {
    return this._skipClusterRegistration;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_v1alpha1_manifest k8s_clustertemplate_openshift_io_cluster_template_v1alpha1_manifest}
*/
export class DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_clustertemplate_openshift_io_cluster_template_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_clustertemplate_openshift_io_cluster_template_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_v1alpha1_manifest k8s_clustertemplate_openshift_io_cluster_template_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_clustertemplate_openshift_io_cluster_template_v1alpha1_manifest',
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
  private _metadata = new DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClustertemplateOpenshiftIoClusterTemplateV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
