// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest#metadata DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestMetadata;
  /**
  * PreflightValidationSpec describes the desired state of the resource, such as the kernel version that Module CRs need to be verified against as well as the debug configuration of the logs More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest#spec DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2Manifest#spec}
  */
  readonly spec: DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestSpec;
}
export interface DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest#annotations DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest#labels DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest#name DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestMetadataToTerraform(struct?: DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestSpec {
  /**
  * KernelVersion describes the kernel image that all Modules need to be checked against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest#kernel_version DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2Manifest#kernel_version}
  */
  readonly kernelVersion: string;
  /**
  * Boolean flag that determines whether images build during preflight must also be pushed to a defined repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest#push_built_image DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2Manifest#push_built_image}
  */
  readonly pushBuiltImage?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestSpecToTerraform(struct?: DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kernel_version: cdktf.stringToTerraform(struct!.kernelVersion),
    push_built_image: cdktf.booleanToTerraform(struct!.pushBuiltImage),
  }
}


export function dataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kernel_version: {
      value: cdktf.stringToHclTerraform(struct!.kernelVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    push_built_image: {
      value: cdktf.booleanToHclTerraform(struct!.pushBuiltImage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kernelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelVersion = this._kernelVersion;
    }
    if (this._pushBuiltImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushBuiltImage = this._pushBuiltImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kernelVersion = undefined;
      this._pushBuiltImage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kernelVersion = value.kernelVersion;
      this._pushBuiltImage = value.pushBuiltImage;
    }
  }

  // kernel_version - computed: false, optional: false, required: true
  private _kernelVersion?: string; 
  public get kernelVersion() {
    return this.getStringAttribute('kernel_version');
  }
  public set kernelVersion(value: string) {
    this._kernelVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelVersionInput() {
    return this._kernelVersion;
  }

  // push_built_image - computed: false, optional: true, required: false
  private _pushBuiltImage?: boolean | cdktf.IResolvable; 
  public get pushBuiltImage() {
    return this.getBooleanAttribute('push_built_image');
  }
  public set pushBuiltImage(value: boolean | cdktf.IResolvable) {
    this._pushBuiltImage = value;
  }
  public resetPushBuiltImage() {
    this._pushBuiltImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushBuiltImageInput() {
    return this._pushBuiltImage;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest k8s_kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest}
*/
export class DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest k8s_kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kmm_sigs_x_k8s_io_preflight_validation_v1beta2_manifest',
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
  private _metadata = new DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestSpec) {
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
      metadata: dataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKmmSigsXK8SIoPreflightValidationV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
