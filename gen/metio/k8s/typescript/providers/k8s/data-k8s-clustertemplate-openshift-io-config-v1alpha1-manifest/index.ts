// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/clustertemplate_openshift_io_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/clustertemplate_openshift_io_config_v1alpha1_manifest#metadata DataK8SClustertemplateOpenshiftIoConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/clustertemplate_openshift_io_config_v1alpha1_manifest#spec DataK8SClustertemplateOpenshiftIoConfigV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestSpec;
}
export interface DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/clustertemplate_openshift_io_config_v1alpha1_manifest#annotations DataK8SClustertemplateOpenshiftIoConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/clustertemplate_openshift_io_config_v1alpha1_manifest#labels DataK8SClustertemplateOpenshiftIoConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/clustertemplate_openshift_io_config_v1alpha1_manifest#name DataK8SClustertemplateOpenshiftIoConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestSpec {
  /**
  * ArgoCd namespace where the ArgoCD instance is running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/clustertemplate_openshift_io_config_v1alpha1_manifest#argo_cd_namespace DataK8SClustertemplateOpenshiftIoConfigV1Alpha1Manifest#argo_cd_namespace}
  */
  readonly argoCdNamespace?: string;
  /**
  * Override default timeout for logging into the new cluster. The default is set to 10 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/clustertemplate_openshift_io_config_v1alpha1_manifest#login_attempt_timeout_override DataK8SClustertemplateOpenshiftIoConfigV1Alpha1Manifest#login_attempt_timeout_override}
  */
  readonly loginAttemptTimeoutOverride?: string;
  /**
  * Flag that indicate if UI console plugin should be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/clustertemplate_openshift_io_config_v1alpha1_manifest#ui_enabled DataK8SClustertemplateOpenshiftIoConfigV1Alpha1Manifest#ui_enabled}
  */
  readonly uiEnabled?: boolean | cdktf.IResolvable;
  /**
  * Custom UI image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/clustertemplate_openshift_io_config_v1alpha1_manifest#ui_image DataK8SClustertemplateOpenshiftIoConfigV1Alpha1Manifest#ui_image}
  */
  readonly uiImage?: string;
}

export function dataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    argo_cd_namespace: cdktf.stringToTerraform(struct!.argoCdNamespace),
    login_attempt_timeout_override: cdktf.stringToTerraform(struct!.loginAttemptTimeoutOverride),
    ui_enabled: cdktf.booleanToTerraform(struct!.uiEnabled),
    ui_image: cdktf.stringToTerraform(struct!.uiImage),
  }
}


export function dataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    argo_cd_namespace: {
      value: cdktf.stringToHclTerraform(struct!.argoCdNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_attempt_timeout_override: {
      value: cdktf.stringToHclTerraform(struct!.loginAttemptTimeoutOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ui_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.uiEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ui_image: {
      value: cdktf.stringToHclTerraform(struct!.uiImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argoCdNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.argoCdNamespace = this._argoCdNamespace;
    }
    if (this._loginAttemptTimeoutOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginAttemptTimeoutOverride = this._loginAttemptTimeoutOverride;
    }
    if (this._uiEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiEnabled = this._uiEnabled;
    }
    if (this._uiImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiImage = this._uiImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argoCdNamespace = undefined;
      this._loginAttemptTimeoutOverride = undefined;
      this._uiEnabled = undefined;
      this._uiImage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argoCdNamespace = value.argoCdNamespace;
      this._loginAttemptTimeoutOverride = value.loginAttemptTimeoutOverride;
      this._uiEnabled = value.uiEnabled;
      this._uiImage = value.uiImage;
    }
  }

  // argo_cd_namespace - computed: false, optional: true, required: false
  private _argoCdNamespace?: string; 
  public get argoCdNamespace() {
    return this.getStringAttribute('argo_cd_namespace');
  }
  public set argoCdNamespace(value: string) {
    this._argoCdNamespace = value;
  }
  public resetArgoCdNamespace() {
    this._argoCdNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argoCdNamespaceInput() {
    return this._argoCdNamespace;
  }

  // login_attempt_timeout_override - computed: false, optional: true, required: false
  private _loginAttemptTimeoutOverride?: string; 
  public get loginAttemptTimeoutOverride() {
    return this.getStringAttribute('login_attempt_timeout_override');
  }
  public set loginAttemptTimeoutOverride(value: string) {
    this._loginAttemptTimeoutOverride = value;
  }
  public resetLoginAttemptTimeoutOverride() {
    this._loginAttemptTimeoutOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAttemptTimeoutOverrideInput() {
    return this._loginAttemptTimeoutOverride;
  }

  // ui_enabled - computed: false, optional: true, required: false
  private _uiEnabled?: boolean | cdktf.IResolvable; 
  public get uiEnabled() {
    return this.getBooleanAttribute('ui_enabled');
  }
  public set uiEnabled(value: boolean | cdktf.IResolvable) {
    this._uiEnabled = value;
  }
  public resetUiEnabled() {
    this._uiEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiEnabledInput() {
    return this._uiEnabled;
  }

  // ui_image - computed: false, optional: true, required: false
  private _uiImage?: string; 
  public get uiImage() {
    return this.getStringAttribute('ui_image');
  }
  public set uiImage(value: string) {
    this._uiImage = value;
  }
  public resetUiImage() {
    this._uiImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiImageInput() {
    return this._uiImage;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/clustertemplate_openshift_io_config_v1alpha1_manifest k8s_clustertemplate_openshift_io_config_v1alpha1_manifest}
*/
export class DataK8SClustertemplateOpenshiftIoConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_clustertemplate_openshift_io_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SClustertemplateOpenshiftIoConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SClustertemplateOpenshiftIoConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SClustertemplateOpenshiftIoConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/clustertemplate_openshift_io_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SClustertemplateOpenshiftIoConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_clustertemplate_openshift_io_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/clustertemplate_openshift_io_config_v1alpha1_manifest k8s_clustertemplate_openshift_io_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_clustertemplate_openshift_io_config_v1alpha1_manifest',
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
  private _metadata = new DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClustertemplateOpenshiftIoConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
