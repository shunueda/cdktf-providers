// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest#metadata DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestMetadata;
  /**
  * APDosPolicySpec defines the desired state of APDosPolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest#spec DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestSpec;
}
export interface DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest#annotations DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest#labels DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest#name DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest#namespace DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestMetadataToTerraform(struct?: DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest#automation_tools_detection DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest#automation_tools_detection}
  */
  readonly automationToolsDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest#bad_actors DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest#bad_actors}
  */
  readonly badActors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest#mitigation_mode DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest#mitigation_mode}
  */
  readonly mitigationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest#signatures DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest#signatures}
  */
  readonly signatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest#tls_fingerprint DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest#tls_fingerprint}
  */
  readonly tlsFingerprint?: string;
}

export function dataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestSpecToTerraform(struct?: DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automation_tools_detection: cdktf.stringToTerraform(struct!.automationToolsDetection),
    bad_actors: cdktf.stringToTerraform(struct!.badActors),
    mitigation_mode: cdktf.stringToTerraform(struct!.mitigationMode),
    signatures: cdktf.stringToTerraform(struct!.signatures),
    tls_fingerprint: cdktf.stringToTerraform(struct!.tlsFingerprint),
  }
}


export function dataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automation_tools_detection: {
      value: cdktf.stringToHclTerraform(struct!.automationToolsDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bad_actors: {
      value: cdktf.stringToHclTerraform(struct!.badActors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mitigation_mode: {
      value: cdktf.stringToHclTerraform(struct!.mitigationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signatures: {
      value: cdktf.stringToHclTerraform(struct!.signatures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.tlsFingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automationToolsDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.automationToolsDetection = this._automationToolsDetection;
    }
    if (this._badActors !== undefined) {
      hasAnyValues = true;
      internalValueResult.badActors = this._badActors;
    }
    if (this._mitigationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigationMode = this._mitigationMode;
    }
    if (this._signatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatures = this._signatures;
    }
    if (this._tlsFingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprint = this._tlsFingerprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automationToolsDetection = undefined;
      this._badActors = undefined;
      this._mitigationMode = undefined;
      this._signatures = undefined;
      this._tlsFingerprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automationToolsDetection = value.automationToolsDetection;
      this._badActors = value.badActors;
      this._mitigationMode = value.mitigationMode;
      this._signatures = value.signatures;
      this._tlsFingerprint = value.tlsFingerprint;
    }
  }

  // automation_tools_detection - computed: false, optional: true, required: false
  private _automationToolsDetection?: string; 
  public get automationToolsDetection() {
    return this.getStringAttribute('automation_tools_detection');
  }
  public set automationToolsDetection(value: string) {
    this._automationToolsDetection = value;
  }
  public resetAutomationToolsDetection() {
    this._automationToolsDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationToolsDetectionInput() {
    return this._automationToolsDetection;
  }

  // bad_actors - computed: false, optional: true, required: false
  private _badActors?: string; 
  public get badActors() {
    return this.getStringAttribute('bad_actors');
  }
  public set badActors(value: string) {
    this._badActors = value;
  }
  public resetBadActors() {
    this._badActors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badActorsInput() {
    return this._badActors;
  }

  // mitigation_mode - computed: false, optional: true, required: false
  private _mitigationMode?: string; 
  public get mitigationMode() {
    return this.getStringAttribute('mitigation_mode');
  }
  public set mitigationMode(value: string) {
    this._mitigationMode = value;
  }
  public resetMitigationMode() {
    this._mitigationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationModeInput() {
    return this._mitigationMode;
  }

  // signatures - computed: false, optional: true, required: false
  private _signatures?: string; 
  public get signatures() {
    return this.getStringAttribute('signatures');
  }
  public set signatures(value: string) {
    this._signatures = value;
  }
  public resetSignatures() {
    this._signatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturesInput() {
    return this._signatures;
  }

  // tls_fingerprint - computed: false, optional: true, required: false
  private _tlsFingerprint?: string; 
  public get tlsFingerprint() {
    return this.getStringAttribute('tls_fingerprint');
  }
  public set tlsFingerprint(value: string) {
    this._tlsFingerprint = value;
  }
  public resetTlsFingerprint() {
    this._tlsFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintInput() {
    return this._tlsFingerprint;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest k8s_appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest}
*/
export class DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppprotectdosF5ComApDosPolicyV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest k8s_appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_appprotectdos_f5_com_ap_dos_policy_v1beta1_manifest',
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
  private _metadata = new DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestSpec) {
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
      metadata: dataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppprotectdosF5ComApDosPolicyV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
