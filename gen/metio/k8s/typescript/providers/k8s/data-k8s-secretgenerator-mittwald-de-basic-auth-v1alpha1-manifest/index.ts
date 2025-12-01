// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest#metadata DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestMetadata;
  /**
  * BasicAuthSpec defines the desired state of BasicAuth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest#spec DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestSpec;
}
export interface DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest#annotations DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest#labels DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest#name DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest#namespace DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest#data DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest#encoding DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest#force_regenerate DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest#force_regenerate}
  */
  readonly forceRegenerate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest#length DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest#length}
  */
  readonly length?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest#username DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest#username}
  */
  readonly username: string;
}

export function dataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    force_regenerate: cdktf.booleanToTerraform(struct!.forceRegenerate),
    length: cdktf.stringToTerraform(struct!.length),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_regenerate: {
      value: cdktf.booleanToHclTerraform(struct!.forceRegenerate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    length: {
      value: cdktf.stringToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._forceRegenerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceRegenerate = this._forceRegenerate;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._encoding = undefined;
      this._forceRegenerate = undefined;
      this._length = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._encoding = value.encoding;
      this._forceRegenerate = value.forceRegenerate;
      this._length = value.length;
      this._username = value.username;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // force_regenerate - computed: false, optional: true, required: false
  private _forceRegenerate?: boolean | cdktf.IResolvable; 
  public get forceRegenerate() {
    return this.getBooleanAttribute('force_regenerate');
  }
  public set forceRegenerate(value: boolean | cdktf.IResolvable) {
    this._forceRegenerate = value;
  }
  public resetForceRegenerate() {
    this._forceRegenerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRegenerateInput() {
    return this._forceRegenerate;
  }

  // length - computed: false, optional: true, required: false
  private _length?: string; 
  public get length() {
    return this.getStringAttribute('length');
  }
  public set length(value: string) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest k8s_secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest}
*/
export class DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest k8s_secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_secretgenerator_mittwald_de_basic_auth_v1alpha1_manifest',
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
  private _metadata = new DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretgeneratorMittwaldDeBasicAuthV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
