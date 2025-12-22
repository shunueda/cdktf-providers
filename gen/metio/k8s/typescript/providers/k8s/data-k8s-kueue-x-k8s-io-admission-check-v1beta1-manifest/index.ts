// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_admission_check_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_admission_check_v1beta1_manifest#metadata DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestMetadata;
  /**
  * AdmissionCheckSpec defines the desired state of AdmissionCheck
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_admission_check_v1beta1_manifest#spec DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpec;
}
export interface DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_admission_check_v1beta1_manifest#annotations DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_admission_check_v1beta1_manifest#labels DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_admission_check_v1beta1_manifest#name DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestMetadataToTerraform(struct?: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecParameters {
  /**
  * ApiGroup is the group for the resource being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_admission_check_v1beta1_manifest#api_group DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest#api_group}
  */
  readonly apiGroup: string;
  /**
  * Kind is the type of the resource being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_admission_check_v1beta1_manifest#kind DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the resource being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_admission_check_v1beta1_manifest#name DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecParametersToTerraform(struct?: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecParametersToHclTerraform(struct?: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecParameters | cdktf.IResolvable): any {
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

export class DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecParameters | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
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
      this._name = value.name;
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
export interface DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpec {
  /**
  * controllerName identifies the controller that processes the AdmissionCheck, not necessarily a Kubernetes Pod or Deployment name. Cannot be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_admission_check_v1beta1_manifest#controller_name DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest#controller_name}
  */
  readonly controllerName: string;
  /**
  * Parameters identifies a configuration with additional parameters for the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_admission_check_v1beta1_manifest#parameters DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest#parameters}
  */
  readonly parameters?: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecParameters;
  /**
  * RetryDelayMinutes specifies how long to keep the workload suspended after a failed check (after it transitioned to False). When the delay period has passed, the check state goes to 'Unknown'. The default is 15 min. Deprecated: retryDelayMinutes has already been deprecated since v0.8 and will be removed in v1beta2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_admission_check_v1beta1_manifest#retry_delay_minutes DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest#retry_delay_minutes}
  */
  readonly retryDelayMinutes?: number;
}

export function dataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecToTerraform(struct?: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_name: cdktf.stringToTerraform(struct!.controllerName),
    parameters: dataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecParametersToTerraform(struct!.parameters),
    retry_delay_minutes: cdktf.numberToTerraform(struct!.retryDelayMinutes),
  }
}


export function dataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_name: {
      value: cdktf.stringToHclTerraform(struct!.controllerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: dataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecParameters",
    },
    retry_delay_minutes: {
      value: cdktf.numberToHclTerraform(struct!.retryDelayMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerName = this._controllerName;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._retryDelayMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDelayMinutes = this._retryDelayMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerName = undefined;
      this._parameters.internalValue = undefined;
      this._retryDelayMinutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerName = value.controllerName;
      this._parameters.internalValue = value.parameters;
      this._retryDelayMinutes = value.retryDelayMinutes;
    }
  }

  // controller_name - computed: false, optional: false, required: true
  private _controllerName?: string; 
  public get controllerName() {
    return this.getStringAttribute('controller_name');
  }
  public set controllerName(value: string) {
    this._controllerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerNameInput() {
    return this._controllerName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // retry_delay_minutes - computed: false, optional: true, required: false
  private _retryDelayMinutes?: number; 
  public get retryDelayMinutes() {
    return this.getNumberAttribute('retry_delay_minutes');
  }
  public set retryDelayMinutes(value: number) {
    this._retryDelayMinutes = value;
  }
  public resetRetryDelayMinutes() {
    this._retryDelayMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDelayMinutesInput() {
    return this._retryDelayMinutes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_admission_check_v1beta1_manifest k8s_kueue_x_k8s_io_admission_check_v1beta1_manifest}
*/
export class DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kueue_x_k8s_io_admission_check_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_admission_check_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKueueXK8SIoAdmissionCheckV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kueue_x_k8s_io_admission_check_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_admission_check_v1beta1_manifest k8s_kueue_x_k8s_io_admission_check_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kueue_x_k8s_io_admission_check_v1beta1_manifest',
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
  private _metadata = new DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpec) {
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
      metadata: dataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKueueXK8SIoAdmissionCheckV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
