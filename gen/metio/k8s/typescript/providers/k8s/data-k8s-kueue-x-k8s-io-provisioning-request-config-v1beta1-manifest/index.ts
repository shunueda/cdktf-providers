// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest#metadata DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestMetadata;
  /**
  * ProvisioningRequestConfigSpec defines the desired state of ProvisioningRequestConfig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest#spec DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestSpec;
}
export interface DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest#annotations DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest#labels DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest#name DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestMetadataToTerraform(struct?: DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestSpec {
  /**
  * managedResources contains the list of resources managed by the autoscaling. If empty, all resources are considered managed. If not empty, the ProvisioningRequest will contain only the podsets that are requesting at least one of them. If none of the workloads podsets is requesting at least a managed resource, the workload is considered ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest#managed_resources DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1Manifest#managed_resources}
  */
  readonly managedResources?: string[];
  /**
  * Parameters contains all other parameters classes may require.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest#parameters DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * ProvisioningClassName describes the different modes of provisioning the resources. Check autoscaling.x-k8s.io ProvisioningRequestSpec.ProvisioningClassName for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest#provisioning_class_name DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1Manifest#provisioning_class_name}
  */
  readonly provisioningClassName: string;
}

export function dataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestSpecToTerraform(struct?: DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedResources),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    provisioning_class_name: cdktf.stringToTerraform(struct!.provisioningClassName),
  }
}


export function dataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    provisioning_class_name: {
      value: cdktf.stringToHclTerraform(struct!.provisioningClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedResources = this._managedResources;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._provisioningClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningClassName = this._provisioningClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managedResources = undefined;
      this._parameters = undefined;
      this._provisioningClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managedResources = value.managedResources;
      this._parameters = value.parameters;
      this._provisioningClassName = value.provisioningClassName;
    }
  }

  // managed_resources - computed: false, optional: true, required: false
  private _managedResources?: string[]; 
  public get managedResources() {
    return this.getListAttribute('managed_resources');
  }
  public set managedResources(value: string[]) {
    this._managedResources = value;
  }
  public resetManagedResources() {
    this._managedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourcesInput() {
    return this._managedResources;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // provisioning_class_name - computed: false, optional: false, required: true
  private _provisioningClassName?: string; 
  public get provisioningClassName() {
    return this.getStringAttribute('provisioning_class_name');
  }
  public set provisioningClassName(value: string) {
    this._provisioningClassName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningClassNameInput() {
    return this._provisioningClassName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest k8s_kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest}
*/
export class DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest k8s_kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kueue_x_k8s_io_provisioning_request_config_v1beta1_manifest',
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
  private _metadata = new DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestSpec) {
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
      metadata: dataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKueueXK8SIoProvisioningRequestConfigV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
