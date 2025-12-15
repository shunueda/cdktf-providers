// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest#metadata DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestMetadata;
  /**
  * KeyVaultKeySpec defines the desired state of KeyVaultKey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest#spec DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestSpec;
}
export interface DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest#annotations DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest#labels DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest#name DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest#namespace DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestSpec {
  /**
  * JSONWebKeyCurveName enumerates the values for json web key curve name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest#curve DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest#curve}
  */
  readonly curve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest#key_size DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest#key_size}
  */
  readonly keySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest#key_vault DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest#key_vault}
  */
  readonly keyVault?: string;
  /**
  * INSERT ADDITIONAL SPEC FIELDS - desired state of cluster Important: Run 'make' to regenerate code after modifying this file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest#location DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest#operations DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest#resource_group DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * JSONWebKeyType enumerates the values for json web key type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest#type DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curve: cdktf.stringToTerraform(struct!.curve),
    key_size: cdktf.numberToTerraform(struct!.keySize),
    key_vault: cdktf.stringToTerraform(struct!.keyVault),
    location: cdktf.stringToTerraform(struct!.location),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curve: {
      value: cdktf.stringToHclTerraform(struct!.curve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_size: {
      value: cdktf.numberToHclTerraform(struct!.keySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_vault: {
      value: cdktf.stringToHclTerraform(struct!.keyVault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curve !== undefined) {
      hasAnyValues = true;
      internalValueResult.curve = this._curve;
    }
    if (this._keySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySize = this._keySize;
    }
    if (this._keyVault !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVault = this._keyVault;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._curve = undefined;
      this._keySize = undefined;
      this._keyVault = undefined;
      this._location = undefined;
      this._operations = undefined;
      this._resourceGroup = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._curve = value.curve;
      this._keySize = value.keySize;
      this._keyVault = value.keyVault;
      this._location = value.location;
      this._operations = value.operations;
      this._resourceGroup = value.resourceGroup;
      this._type = value.type;
    }
  }

  // curve - computed: false, optional: true, required: false
  private _curve?: string; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve;
  }

  // key_size - computed: false, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // key_vault - computed: false, optional: true, required: false
  private _keyVault?: string; 
  public get keyVault() {
    return this.getStringAttribute('key_vault');
  }
  public set keyVault(value: string) {
    this._keyVault = value;
  }
  public resetKeyVault() {
    this._keyVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultInput() {
    return this._keyVault;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest k8s_azure_microsoft_com_key_vault_key_v1alpha1_manifest}
*/
export class DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_key_vault_key_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_key_vault_key_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_key_vault_key_v1alpha1_manifest k8s_azure_microsoft_com_key_vault_key_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_key_vault_key_v1alpha1_manifest',
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
  private _metadata = new DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComKeyVaultKeyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
