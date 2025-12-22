// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * StorageAccountAdditionalResources holds the additional resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#additional_resources DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#additional_resources}
  */
  readonly additionalResources?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestAdditionalResources;
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#metadata DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestMetadata;
  /**
  * StorageAccountOutput is the object that contains the output from creating a Storage Account object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#output DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#output}
  */
  readonly output?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestOutput;
  /**
  * StorageAccountSpec defines the desired state of Storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#spec DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpec;
}
export interface DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestAdditionalResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#secrets DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#secrets}
  */
  readonly secrets?: string[];
}

export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestAdditionalResourcesToTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestAdditionalResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secrets),
  }
}


export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestAdditionalResourcesToHclTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestAdditionalResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestAdditionalResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestAdditionalResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestAdditionalResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secrets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secrets = value.secrets;
    }
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string[]; 
  public get secrets() {
    return this.getListAttribute('secrets');
  }
  public set secrets(value: string[]) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }
}
export interface DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#annotations DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#labels DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#name DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#namespace DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#connection_string1 DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#connection_string1}
  */
  readonly connectionString1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#connection_string2 DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#connection_string2}
  */
  readonly connectionString2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#key1 DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#key1}
  */
  readonly key1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#key2 DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#key2}
  */
  readonly key2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#storage_account_name DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#storage_account_name}
  */
  readonly storageAccountName?: string;
}

export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestOutputToTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_string1: cdktf.stringToTerraform(struct!.connectionString1),
    connection_string2: cdktf.stringToTerraform(struct!.connectionString2),
    key1: cdktf.stringToTerraform(struct!.key1),
    key2: cdktf.stringToTerraform(struct!.key2),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
  }
}


export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestOutputToHclTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_string1: {
      value: cdktf.stringToHclTerraform(struct!.connectionString1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_string2: {
      value: cdktf.stringToHclTerraform(struct!.connectionString2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key1: {
      value: cdktf.stringToHclTerraform(struct!.key1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key2: {
      value: cdktf.stringToHclTerraform(struct!.key2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_name: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestOutput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionString1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString1 = this._connectionString1;
    }
    if (this._connectionString2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString2 = this._connectionString2;
    }
    if (this._key1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.key1 = this._key1;
    }
    if (this._key2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.key2 = this._key2;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestOutput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionString1 = undefined;
      this._connectionString2 = undefined;
      this._key1 = undefined;
      this._key2 = undefined;
      this._storageAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionString1 = value.connectionString1;
      this._connectionString2 = value.connectionString2;
      this._key1 = value.key1;
      this._key2 = value.key2;
      this._storageAccountName = value.storageAccountName;
    }
  }

  // connection_string1 - computed: false, optional: true, required: false
  private _connectionString1?: string; 
  public get connectionString1() {
    return this.getStringAttribute('connection_string1');
  }
  public set connectionString1(value: string) {
    this._connectionString1 = value;
  }
  public resetConnectionString1() {
    this._connectionString1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionString1Input() {
    return this._connectionString1;
  }

  // connection_string2 - computed: false, optional: true, required: false
  private _connectionString2?: string; 
  public get connectionString2() {
    return this.getStringAttribute('connection_string2');
  }
  public set connectionString2(value: string) {
    this._connectionString2 = value;
  }
  public resetConnectionString2() {
    this._connectionString2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionString2Input() {
    return this._connectionString2;
  }

  // key1 - computed: false, optional: true, required: false
  private _key1?: string; 
  public get key1() {
    return this.getStringAttribute('key1');
  }
  public set key1(value: string) {
    this._key1 = value;
  }
  public resetKey1() {
    this._key1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get key1Input() {
    return this._key1;
  }

  // key2 - computed: false, optional: true, required: false
  private _key2?: string; 
  public get key2() {
    return this.getStringAttribute('key2');
  }
  public set key2(value: string) {
    this._key2 = value;
  }
  public resetKey2() {
    this._key2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get key2Input() {
    return this._key2;
  }

  // storage_account_name - computed: false, optional: true, required: false
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }
}
export interface DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRules {
  /**
  * IPAddressOrRange - Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#ip_address_or_range DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#ip_address_or_range}
  */
  readonly ipAddressOrRange?: string;
}

export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRulesToTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address_or_range: cdktf.stringToTerraform(struct!.ipAddressOrRange),
  }
}


export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRulesToHclTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address_or_range: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressOrRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressOrRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressOrRange = this._ipAddressOrRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressOrRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressOrRange = value.ipAddressOrRange;
    }
  }

  // ip_address_or_range - computed: false, optional: true, required: false
  private _ipAddressOrRange?: string; 
  public get ipAddressOrRange() {
    return this.getStringAttribute('ip_address_or_range');
  }
  public set ipAddressOrRange(value: string) {
    this._ipAddressOrRange = value;
  }
  public resetIpAddressOrRange() {
    this._ipAddressOrRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressOrRangeInput() {
    return this._ipAddressOrRange;
  }
}

export class DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRulesOutputReference {
    return new DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules {
  /**
  * SubnetId - Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#subnet_id DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#subnet_id}
  */
  readonly subnetId?: string;
}

export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesToTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesToHclTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetId = value.subnetId;
    }
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesOutputReference {
    return new DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRule {
  /**
  * Bypass - Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging|Metrics|AzureServices (For example, 'Logging, Metrics'), or None to bypass none of those traffics. Possible values include: 'None', 'Logging', 'Metrics', 'AzureServices'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#bypass DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#bypass}
  */
  readonly bypass?: string;
  /**
  * DefaultAction - Specifies the default action of allow or deny when no other rules match. Possible values include: 'DefaultActionAllow', 'DefaultActionDeny'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#default_action DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#default_action}
  */
  readonly defaultAction?: string;
  /**
  * IPRules - Sets the IP ACL rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#ip_rules DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#ip_rules}
  */
  readonly ipRules?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRules[] | cdktf.IResolvable;
  /**
  * VirtualNetworkRules - Sets the virtual network rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#virtual_network_rules DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#virtual_network_rules}
  */
  readonly virtualNetworkRules?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules[] | cdktf.IResolvable;
}

export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleToTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass: cdktf.stringToTerraform(struct!.bypass),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rules: cdktf.listMapper(dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRulesToTerraform, false)(struct!.ipRules),
    virtual_network_rules: cdktf.listMapper(dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesToTerraform, false)(struct!.virtualNetworkRules),
  }
}


export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleToHclTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass: {
      value: cdktf.stringToHclTerraform(struct!.bypass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_rules: {
      value: cdktf.listMapperHcl(dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRulesToHclTerraform, false)(struct!.ipRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRulesList",
    },
    virtual_network_rules: {
      value: cdktf.listMapperHcl(dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesToHclTerraform, false)(struct!.virtualNetworkRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypass = this._bypass;
    }
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._ipRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRules = this._ipRules?.internalValue;
    }
    if (this._virtualNetworkRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkRules = this._virtualNetworkRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypass = undefined;
      this._defaultAction = undefined;
      this._ipRules.internalValue = undefined;
      this._virtualNetworkRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypass = value.bypass;
      this._defaultAction = value.defaultAction;
      this._ipRules.internalValue = value.ipRules;
      this._virtualNetworkRules.internalValue = value.virtualNetworkRules;
    }
  }

  // bypass - computed: false, optional: true, required: false
  private _bypass?: string; 
  public get bypass() {
    return this.getStringAttribute('bypass');
  }
  public set bypass(value: string) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
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

  // ip_rules - computed: false, optional: true, required: false
  private _ipRules = new DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRulesList(this, "ip_rules", false);
  public get ipRules() {
    return this._ipRules;
  }
  public putIpRules(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleIpRules[] | cdktf.IResolvable) {
    this._ipRules.internalValue = value;
  }
  public resetIpRules() {
    this._ipRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules.internalValue;
  }

  // virtual_network_rules - computed: false, optional: true, required: false
  private _virtualNetworkRules = new DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesList(this, "virtual_network_rules", false);
  public get virtualNetworkRules() {
    return this._virtualNetworkRules;
  }
  public putVirtualNetworkRules(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules[] | cdktf.IResolvable) {
    this._virtualNetworkRules.internalValue = value;
  }
  public resetVirtualNetworkRules() {
    this._virtualNetworkRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkRulesInput() {
    return this._virtualNetworkRules.internalValue;
  }
}
export interface DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecSku {
  /**
  * Name - The SKU name. Required for account creation; optional for update. Possible values include: 'Standard_LRS', 'Standard_GRS', 'Standard_RAGRS', 'Standard_ZRS', 'Premium_LRS', 'Premium_ZRS', 'Standard_GZRS', 'Standard_RAGZRS'. For the full list of allowed options, see: https://docs.microsoft.com/en-us/rest/api/storagerp/storageaccounts/create#skuname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#name DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecSkuToTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecSkuToHclTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecSku | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecSku | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpec {
  /**
  * StorageAccountAccessTier enumerates the values for access tier. Only one of the following access tiers may be specified. If none of the following access tiers is specified, the default one is Hot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#access_tier DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#access_tier}
  */
  readonly accessTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#data_lake_enabled DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#data_lake_enabled}
  */
  readonly dataLakeEnabled?: boolean | cdktf.IResolvable;
  /**
  * StorageAccountKind enumerates the values for kind. Only one of the following kinds may be specified. If none of the following kinds is specified, the default one is StorageV2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#kind DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#location DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#network_rule DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#network_rule}
  */
  readonly networkRule?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#resource_group DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * StorageAccountSku the SKU of the storage account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#sku DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#sku}
  */
  readonly sku?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecSku;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#supports_https_traffic_only DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest#supports_https_traffic_only}
  */
  readonly supportsHttpsTrafficOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_tier: cdktf.stringToTerraform(struct!.accessTier),
    data_lake_enabled: cdktf.booleanToTerraform(struct!.dataLakeEnabled),
    kind: cdktf.stringToTerraform(struct!.kind),
    location: cdktf.stringToTerraform(struct!.location),
    network_rule: dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleToTerraform(struct!.networkRule),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    sku: dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecSkuToTerraform(struct!.sku),
    supports_https_traffic_only: cdktf.booleanToTerraform(struct!.supportsHttpsTrafficOnly),
  }
}


export function dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_tier: {
      value: cdktf.stringToHclTerraform(struct!.accessTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lake_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dataLakeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    network_rule: {
      value: dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleToHclTerraform(struct!.networkRule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRule",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecSkuToHclTerraform(struct!.sku),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecSku",
    },
    supports_https_traffic_only: {
      value: cdktf.booleanToHclTerraform(struct!.supportsHttpsTrafficOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTier = this._accessTier;
    }
    if (this._dataLakeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLakeEnabled = this._dataLakeEnabled;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._networkRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkRule = this._networkRule?.internalValue;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._sku?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku?.internalValue;
    }
    if (this._supportsHttpsTrafficOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportsHttpsTrafficOnly = this._supportsHttpsTrafficOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTier = undefined;
      this._dataLakeEnabled = undefined;
      this._kind = undefined;
      this._location = undefined;
      this._networkRule.internalValue = undefined;
      this._resourceGroup = undefined;
      this._sku.internalValue = undefined;
      this._supportsHttpsTrafficOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTier = value.accessTier;
      this._dataLakeEnabled = value.dataLakeEnabled;
      this._kind = value.kind;
      this._location = value.location;
      this._networkRule.internalValue = value.networkRule;
      this._resourceGroup = value.resourceGroup;
      this._sku.internalValue = value.sku;
      this._supportsHttpsTrafficOnly = value.supportsHttpsTrafficOnly;
    }
  }

  // access_tier - computed: false, optional: true, required: false
  private _accessTier?: string; 
  public get accessTier() {
    return this.getStringAttribute('access_tier');
  }
  public set accessTier(value: string) {
    this._accessTier = value;
  }
  public resetAccessTier() {
    this._accessTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTierInput() {
    return this._accessTier;
  }

  // data_lake_enabled - computed: false, optional: true, required: false
  private _dataLakeEnabled?: boolean | cdktf.IResolvable; 
  public get dataLakeEnabled() {
    return this.getBooleanAttribute('data_lake_enabled');
  }
  public set dataLakeEnabled(value: boolean | cdktf.IResolvable) {
    this._dataLakeEnabled = value;
  }
  public resetDataLakeEnabled() {
    this._dataLakeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLakeEnabledInput() {
    return this._dataLakeEnabled;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // network_rule - computed: false, optional: true, required: false
  private _networkRule = new DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRuleOutputReference(this, "network_rule");
  public get networkRule() {
    return this._networkRule;
  }
  public putNetworkRule(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecNetworkRule) {
    this._networkRule.internalValue = value;
  }
  public resetNetworkRule() {
    this._networkRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRuleInput() {
    return this._networkRule.internalValue;
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

  // sku - computed: false, optional: true, required: false
  private _sku = new DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecSkuOutputReference(this, "sku");
  public get sku() {
    return this._sku;
  }
  public putSku(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecSku) {
    this._sku.internalValue = value;
  }
  public resetSku() {
    this._sku.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // supports_https_traffic_only - computed: false, optional: true, required: false
  private _supportsHttpsTrafficOnly?: boolean | cdktf.IResolvable; 
  public get supportsHttpsTrafficOnly() {
    return this.getBooleanAttribute('supports_https_traffic_only');
  }
  public set supportsHttpsTrafficOnly(value: boolean | cdktf.IResolvable) {
    this._supportsHttpsTrafficOnly = value;
  }
  public resetSupportsHttpsTrafficOnly() {
    this._supportsHttpsTrafficOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsHttpsTrafficOnlyInput() {
    return this._supportsHttpsTrafficOnly;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest k8s_azure_microsoft_com_storage_account_v1alpha1_manifest}
*/
export class DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_storage_account_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComStorageAccountV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_storage_account_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_storage_account_v1alpha1_manifest k8s_azure_microsoft_com_storage_account_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_storage_account_v1alpha1_manifest',
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
    this._additionalResources.internalValue = config.additionalResources;
    this._metadata.internalValue = config.metadata;
    this._output.internalValue = config.output;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_resources - computed: false, optional: true, required: false
  private _additionalResources = new DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestAdditionalResourcesOutputReference(this, "additional_resources");
  public get additionalResources() {
    return this._additionalResources;
  }
  public putAdditionalResources(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestAdditionalResources) {
    this._additionalResources.internalValue = value;
  }
  public resetAdditionalResources() {
    this._additionalResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalResourcesInput() {
    return this._additionalResources.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output = new DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestOutput) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpec) {
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
      additional_resources: dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestAdditionalResourcesToTerraform(this._additionalResources.internalValue),
      metadata: dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      output: dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestOutputToTerraform(this._output.internalValue),
      spec: dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_resources: {
        value: dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestAdditionalResourcesToHclTerraform(this._additionalResources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestAdditionalResources",
      },
      metadata: {
        value: dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestMetadata",
      },
      output: {
        value: dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestOutputToHclTerraform(this._output.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestOutput",
      },
      spec: {
        value: dataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComStorageAccountV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
