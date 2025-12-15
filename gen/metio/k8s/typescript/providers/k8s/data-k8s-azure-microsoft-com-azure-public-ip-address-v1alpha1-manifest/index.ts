// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest#metadata DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestMetadata;
  /**
  * AzurePublicIPAddressSpec defines the desired state of AzurePublicIPAddress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest#spec DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestSpec;
}
export interface DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest#annotations DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest#labels DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest#name DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest#namespace DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest#idle_timeout_in_minutes DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest#ip_tags DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest#ip_tags}
  */
  readonly ipTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest#location DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest#public_ip_address_version DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest#public_ip_address_version}
  */
  readonly publicIpAddressVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest#public_ip_allocation_method DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest#public_ip_allocation_method}
  */
  readonly publicIpAllocationMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest#resource_group DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest#sku_name DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest#sku_name}
  */
  readonly skuName: string;
}

export function dataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    ip_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ipTags),
    location: cdktf.stringToTerraform(struct!.location),
    public_ip_address_version: cdktf.stringToTerraform(struct!.publicIpAddressVersion),
    public_ip_allocation_method: cdktf.stringToTerraform(struct!.publicIpAllocationMethod),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    sku_name: cdktf.stringToTerraform(struct!.skuName),
  }
}


export function dataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ipTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_address_version: {
      value: cdktf.stringToHclTerraform(struct!.publicIpAddressVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_allocation_method: {
      value: cdktf.stringToHclTerraform(struct!.publicIpAllocationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku_name: {
      value: cdktf.stringToHclTerraform(struct!.skuName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._ipTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTags = this._ipTags;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._publicIpAddressVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAddressVersion = this._publicIpAddressVersion;
    }
    if (this._publicIpAllocationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAllocationMethod = this._publicIpAllocationMethod;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._skuName !== undefined) {
      hasAnyValues = true;
      internalValueResult.skuName = this._skuName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleTimeoutInMinutes = undefined;
      this._ipTags = undefined;
      this._location = undefined;
      this._publicIpAddressVersion = undefined;
      this._publicIpAllocationMethod = undefined;
      this._resourceGroup = undefined;
      this._skuName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._ipTags = value.ipTags;
      this._location = value.location;
      this._publicIpAddressVersion = value.publicIpAddressVersion;
      this._publicIpAllocationMethod = value.publicIpAllocationMethod;
      this._resourceGroup = value.resourceGroup;
      this._skuName = value.skuName;
    }
  }

  // idle_timeout_in_minutes - computed: false, optional: false, required: true
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // ip_tags - computed: false, optional: true, required: false
  private _ipTags?: { [key: string]: string }; 
  public get ipTags() {
    return this.getStringMapAttribute('ip_tags');
  }
  public set ipTags(value: { [key: string]: string }) {
    this._ipTags = value;
  }
  public resetIpTags() {
    this._ipTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTagsInput() {
    return this._ipTags;
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

  // public_ip_address_version - computed: false, optional: false, required: true
  private _publicIpAddressVersion?: string; 
  public get publicIpAddressVersion() {
    return this.getStringAttribute('public_ip_address_version');
  }
  public set publicIpAddressVersion(value: string) {
    this._publicIpAddressVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressVersionInput() {
    return this._publicIpAddressVersion;
  }

  // public_ip_allocation_method - computed: false, optional: false, required: true
  private _publicIpAllocationMethod?: string; 
  public get publicIpAllocationMethod() {
    return this.getStringAttribute('public_ip_allocation_method');
  }
  public set publicIpAllocationMethod(value: string) {
    this._publicIpAllocationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAllocationMethodInput() {
    return this._publicIpAllocationMethod;
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

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest k8s_azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest}
*/
export class DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest k8s_azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_azure_public_ip_address_v1alpha1_manifest',
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
  private _metadata = new DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComAzurePublicIpAddressV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
