// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#metadata DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestMetadata;
  /**
  * AzureKeyVaultSecretSpec is the spec for a AzureKeyVaultSecret resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#spec DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#spec}
  */
  readonly spec: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpec;
}
export interface DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#annotations DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#labels DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#name DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#namespace DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestMetadataToTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputConfigMap {
  /**
  * The key to use in Kubernetes ConfigMap when setting the value from Azure Key Vault object data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#data_key DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#data_key}
  */
  readonly dataKey: string;
  /**
  * Name for Kubernetes ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#name DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputConfigMapToTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_key: cdktf.stringToTerraform(struct!.dataKey),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputConfigMapToHclTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_key: {
      value: cdktf.stringToHclTerraform(struct!.dataKey),
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

export class DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataKey = this._dataKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataKey = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataKey = value.dataKey;
      this._name = value.name;
    }
  }

  // data_key - computed: false, optional: false, required: true
  private _dataKey?: string; 
  public get dataKey() {
    return this.getStringAttribute('data_key');
  }
  public set dataKey(value: string) {
    this._dataKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataKeyInput() {
    return this._dataKey;
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
export interface DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputSecret {
  /**
  * By setting chainOrder to ensureserverfirst the server certificate will be moved first in the chain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#chain_order DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#chain_order}
  */
  readonly chainOrder?: string;
  /**
  * The key to use in Kubernetes secret when setting the value from Azure Key Vault object data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#data_key DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#data_key}
  */
  readonly dataKey?: string;
  /**
  * Name for Kubernetes secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#name DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Type of Secret in Kubernetes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#type DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputSecretToTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chain_order: cdktf.stringToTerraform(struct!.chainOrder),
    data_key: cdktf.stringToTerraform(struct!.dataKey),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputSecretToHclTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chain_order: {
      value: cdktf.stringToHclTerraform(struct!.chainOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_key: {
      value: cdktf.stringToHclTerraform(struct!.dataKey),
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

export class DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chainOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.chainOrder = this._chainOrder;
    }
    if (this._dataKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataKey = this._dataKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chainOrder = undefined;
      this._dataKey = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chainOrder = value.chainOrder;
      this._dataKey = value.dataKey;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // chain_order - computed: false, optional: true, required: false
  private _chainOrder?: string; 
  public get chainOrder() {
    return this.getStringAttribute('chain_order');
  }
  public set chainOrder(value: string) {
    this._chainOrder = value;
  }
  public resetChainOrder() {
    this._chainOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainOrderInput() {
    return this._chainOrder;
  }

  // data_key - computed: false, optional: true, required: false
  private _dataKey?: string; 
  public get dataKey() {
    return this.getStringAttribute('data_key');
  }
  public set dataKey(value: string) {
    this._dataKey = value;
  }
  public resetDataKey() {
    this._dataKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataKeyInput() {
    return this._dataKey;
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
export interface DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutput {
  /**
  * AzureKeyVaultOutputConfigMap has information needed to output a secret from Azure Key Vault to Kubernetes as a ConfigMap resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#config_map DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputConfigMap;
  /**
  * AzureKeyVaultOutputSecret has information needed to output a secret from Azure Key Vault to Kubernetes as a Secret resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#secret DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#transform DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#transform}
  */
  readonly transform?: string[];
}

export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputToTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputConfigMapToTerraform(struct!.configMap),
    secret: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputSecretToTerraform(struct!.secret),
    transform: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transform),
  }
}


export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputToHclTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputConfigMap",
    },
    secret: {
      value: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputSecret",
    },
    transform: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transform),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._transform !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._transform = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
      this._transform = value.transform;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // transform - computed: false, optional: true, required: false
  private _transform?: string[]; 
  public get transform() {
    return this.getListAttribute('transform');
  }
  public set transform(value: string[]) {
    this._transform = value;
  }
  public resetTransform() {
    this._transform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform;
  }
}
export interface DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultAzureIdentity {
  /**
  * Name of the azureIdentity to use for Azure Key Vault authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#name DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultAzureIdentityToTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultAzureIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultAzureIdentityToHclTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultAzureIdentity | cdktf.IResolvable): any {
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

export class DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultAzureIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultAzureIdentity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultAzureIdentity | cdktf.IResolvable | undefined) {
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
export interface DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultObject {
  /**
  * AzureKeyVaultObjectContentType defines what content type a secret contains, only used when type is multi-key-value-secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#content_type DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * The object name in Azure Key Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#name DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * AzureKeyVaultObjectType defines which Object type to get from Azure Key Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#type DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * The object version in Azure Key Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#version DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultObjectToTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultObjectToHclTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._name = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._name = value.name;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVault {
  /**
  * AzureIdentity has information about the azure identity used for Azure Key Vault authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#azure_identity DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#azure_identity}
  */
  readonly azureIdentity?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultAzureIdentity;
  /**
  * Name of the Azure Key Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#name DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * AzureKeyVaultObject has information about the Azure Key Vault object to get from Azure Key Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#object DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#object}
  */
  readonly object: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultObject;
}

export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultToTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_identity: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultAzureIdentityToTerraform(struct!.azureIdentity),
    name: cdktf.stringToTerraform(struct!.name),
    object: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultObjectToTerraform(struct!.object),
  }
}


export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultToHclTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_identity: {
      value: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultAzureIdentityToHclTerraform(struct!.azureIdentity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultAzureIdentity",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultObjectToHclTerraform(struct!.object),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultObject",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureIdentity = this._azureIdentity?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._object?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureIdentity.internalValue = undefined;
      this._name = undefined;
      this._object.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureIdentity.internalValue = value.azureIdentity;
      this._name = value.name;
      this._object.internalValue = value.object;
    }
  }

  // azure_identity - computed: false, optional: true, required: false
  private _azureIdentity = new DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultAzureIdentityOutputReference(this, "azure_identity");
  public get azureIdentity() {
    return this._azureIdentity;
  }
  public putAzureIdentity(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultAzureIdentity) {
    this._azureIdentity.internalValue = value;
  }
  public resetAzureIdentity() {
    this._azureIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureIdentityInput() {
    return this._azureIdentity.internalValue;
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

  // object - computed: false, optional: false, required: true
  private _object = new DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultObjectOutputReference(this, "object");
  public get object() {
    return this._object;
  }
  public putObject(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultObject) {
    this._object.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }
}
export interface DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpec {
  /**
  * AzureKeyVaultOutput defines output sources, supports Secret and Configmap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#output DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#output}
  */
  readonly output?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutput;
  /**
  * AzureKeyVault contains information needed to get the Azure Key Vault secret from Azure Key Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#vault DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest#vault}
  */
  readonly vault: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVault;
}

export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecToTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputToTerraform(struct!.output),
    vault: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultToTerraform(struct!.vault),
  }
}


export function dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output: {
      value: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputToHclTerraform(struct!.output),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutput",
    },
    vault: {
      value: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultToHclTerraform(struct!.vault),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVault",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output?.internalValue;
    }
    if (this._vault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._output.internalValue = undefined;
      this._vault.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._output.internalValue = value.output;
      this._vault.internalValue = value.vault;
    }
  }

  // output - computed: false, optional: true, required: false
  private _output = new DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutput) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // vault - computed: false, optional: false, required: true
  private _vault = new DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }
  public putVault(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecVault) {
    this._vault.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest k8s_spv_no_azure_key_vault_secret_v2alpha1_manifest}
*/
export class DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_spv_no_azure_key_vault_secret_v2alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSpvNoAzureKeyVaultSecretV2Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_spv_no_azure_key_vault_secret_v2alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/spv_no_azure_key_vault_secret_v2alpha1_manifest k8s_spv_no_azure_key_vault_secret_v2alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_spv_no_azure_key_vault_secret_v2alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpec) {
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
      metadata: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSpvNoAzureKeyVaultSecretV2Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
