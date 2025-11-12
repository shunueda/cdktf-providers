// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest#metadata DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestMetadata;
  /**
  * StorageProviderSpec defines the desired state of 'StorageProvider'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest#spec DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpec;
}
export interface DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest#annotations DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest#labels DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest#name DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecParametersSchema {
  /**
  * Defines which parameters are credential fields, which need to be handled specifically. For instance, these should be stored in a 'Secret' instead of a 'ConfigMap'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest#credential_fields DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest#credential_fields}
  */
  readonly credentialFields?: string[];
  /**
  * Defines the parameters in OpenAPI V3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest#open_apiv3_schema DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest#open_apiv3_schema}
  */
  readonly openApiv3Schema?: { [key: string]: string };
}

export function dataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecParametersSchemaToTerraform(struct?: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecParametersSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.credentialFields),
    open_apiv3_schema: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.openApiv3Schema),
  }
}


export function dataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecParametersSchemaToHclTerraform(struct?: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecParametersSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.credentialFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    open_apiv3_schema: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.openApiv3Schema),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecParametersSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecParametersSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialFields = this._credentialFields;
    }
    if (this._openApiv3Schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiv3Schema = this._openApiv3Schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecParametersSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialFields = undefined;
      this._openApiv3Schema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialFields = value.credentialFields;
      this._openApiv3Schema = value.openApiv3Schema;
    }
  }

  // credential_fields - computed: false, optional: true, required: false
  private _credentialFields?: string[]; 
  public get credentialFields() {
    return this.getListAttribute('credential_fields');
  }
  public set credentialFields(value: string[]) {
    this._credentialFields = value;
  }
  public resetCredentialFields() {
    this._credentialFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialFieldsInput() {
    return this._credentialFields;
  }

  // open_apiv3_schema - computed: false, optional: true, required: false
  private _openApiv3Schema?: { [key: string]: string }; 
  public get openApiv3Schema() {
    return this.getStringMapAttribute('open_apiv3_schema');
  }
  public set openApiv3Schema(value: { [key: string]: string }) {
    this._openApiv3Schema = value;
  }
  public resetOpenApiv3Schema() {
    this._openApiv3Schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiv3SchemaInput() {
    return this._openApiv3Schema;
  }
}
export interface DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpec {
  /**
  * Specifies the name of the CSI driver used to access remote storage. This field can be empty, it indicates that the storage is not accessible via CSI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest#csi_driver_name DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest#csi_driver_name}
  */
  readonly csiDriverName?: string;
  /**
  * A Go template that used to render and generate 'k8s.io/api/core/v1.Secret' resources for a specific CSI driver. For example, 'accessKey' and 'secretKey' needed by CSI-S3 are stored in this 'Secret' resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest#csi_driver_secret_template DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest#csi_driver_secret_template}
  */
  readonly csiDriverSecretTemplate?: string;
  /**
  * A Go template used to render and generate 'k8s.io/api/core/v1.Secret'. This 'Secret' involves the configuration details required by the 'datasafed' tool to access remote storage. For example, the 'Secret' should contain 'endpoint', 'bucket', 'region', 'accessKey', 'secretKey', or something else for S3 storage. This field can be empty, it means this kind of storage is not accessible via the 'datasafed' tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest#datasafed_config_template DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest#datasafed_config_template}
  */
  readonly datasafedConfigTemplate?: string;
  /**
  * Describes the parameters required for storage. The parameters defined here can be referenced in the above templates, and 'kbcli' uses this definition for dynamic command-line parameter parsing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest#parameters_schema DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest#parameters_schema}
  */
  readonly parametersSchema?: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecParametersSchema;
  /**
  * A Go template that renders and generates 'k8s.io/api/core/v1.PersistentVolumeClaim' resources. This PVC can reference the 'StorageClass' created from 'storageClassTemplate', allowing Pods to access remote storage by mounting the PVC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest#persistent_volume_claim_template DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest#persistent_volume_claim_template}
  */
  readonly persistentVolumeClaimTemplate?: string;
  /**
  * A Go template utilized to render and generate 'kubernetes.storage.k8s.io.v1.StorageClass' resources. The 'StorageClass' created by this template is aimed at using the CSI driver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest#storage_class_template DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest#storage_class_template}
  */
  readonly storageClassTemplate?: string;
}

export function dataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecToTerraform(struct?: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csi_driver_name: cdktf.stringToTerraform(struct!.csiDriverName),
    csi_driver_secret_template: cdktf.stringToTerraform(struct!.csiDriverSecretTemplate),
    datasafed_config_template: cdktf.stringToTerraform(struct!.datasafedConfigTemplate),
    parameters_schema: dataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecParametersSchemaToTerraform(struct!.parametersSchema),
    persistent_volume_claim_template: cdktf.stringToTerraform(struct!.persistentVolumeClaimTemplate),
    storage_class_template: cdktf.stringToTerraform(struct!.storageClassTemplate),
  }
}


export function dataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csi_driver_name: {
      value: cdktf.stringToHclTerraform(struct!.csiDriverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csi_driver_secret_template: {
      value: cdktf.stringToHclTerraform(struct!.csiDriverSecretTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasafed_config_template: {
      value: cdktf.stringToHclTerraform(struct!.datasafedConfigTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters_schema: {
      value: dataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecParametersSchemaToHclTerraform(struct!.parametersSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecParametersSchema",
    },
    persistent_volume_claim_template: {
      value: cdktf.stringToHclTerraform(struct!.persistentVolumeClaimTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class_template: {
      value: cdktf.stringToHclTerraform(struct!.storageClassTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csiDriverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiDriverName = this._csiDriverName;
    }
    if (this._csiDriverSecretTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiDriverSecretTemplate = this._csiDriverSecretTemplate;
    }
    if (this._datasafedConfigTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasafedConfigTemplate = this._datasafedConfigTemplate;
    }
    if (this._parametersSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parametersSchema = this._parametersSchema?.internalValue;
    }
    if (this._persistentVolumeClaimTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaimTemplate = this._persistentVolumeClaimTemplate;
    }
    if (this._storageClassTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassTemplate = this._storageClassTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csiDriverName = undefined;
      this._csiDriverSecretTemplate = undefined;
      this._datasafedConfigTemplate = undefined;
      this._parametersSchema.internalValue = undefined;
      this._persistentVolumeClaimTemplate = undefined;
      this._storageClassTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csiDriverName = value.csiDriverName;
      this._csiDriverSecretTemplate = value.csiDriverSecretTemplate;
      this._datasafedConfigTemplate = value.datasafedConfigTemplate;
      this._parametersSchema.internalValue = value.parametersSchema;
      this._persistentVolumeClaimTemplate = value.persistentVolumeClaimTemplate;
      this._storageClassTemplate = value.storageClassTemplate;
    }
  }

  // csi_driver_name - computed: false, optional: true, required: false
  private _csiDriverName?: string; 
  public get csiDriverName() {
    return this.getStringAttribute('csi_driver_name');
  }
  public set csiDriverName(value: string) {
    this._csiDriverName = value;
  }
  public resetCsiDriverName() {
    this._csiDriverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiDriverNameInput() {
    return this._csiDriverName;
  }

  // csi_driver_secret_template - computed: false, optional: true, required: false
  private _csiDriverSecretTemplate?: string; 
  public get csiDriverSecretTemplate() {
    return this.getStringAttribute('csi_driver_secret_template');
  }
  public set csiDriverSecretTemplate(value: string) {
    this._csiDriverSecretTemplate = value;
  }
  public resetCsiDriverSecretTemplate() {
    this._csiDriverSecretTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiDriverSecretTemplateInput() {
    return this._csiDriverSecretTemplate;
  }

  // datasafed_config_template - computed: false, optional: true, required: false
  private _datasafedConfigTemplate?: string; 
  public get datasafedConfigTemplate() {
    return this.getStringAttribute('datasafed_config_template');
  }
  public set datasafedConfigTemplate(value: string) {
    this._datasafedConfigTemplate = value;
  }
  public resetDatasafedConfigTemplate() {
    this._datasafedConfigTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasafedConfigTemplateInput() {
    return this._datasafedConfigTemplate;
  }

  // parameters_schema - computed: false, optional: true, required: false
  private _parametersSchema = new DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecParametersSchemaOutputReference(this, "parameters_schema");
  public get parametersSchema() {
    return this._parametersSchema;
  }
  public putParametersSchema(value: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecParametersSchema) {
    this._parametersSchema.internalValue = value;
  }
  public resetParametersSchema() {
    this._parametersSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersSchemaInput() {
    return this._parametersSchema.internalValue;
  }

  // persistent_volume_claim_template - computed: false, optional: true, required: false
  private _persistentVolumeClaimTemplate?: string; 
  public get persistentVolumeClaimTemplate() {
    return this.getStringAttribute('persistent_volume_claim_template');
  }
  public set persistentVolumeClaimTemplate(value: string) {
    this._persistentVolumeClaimTemplate = value;
  }
  public resetPersistentVolumeClaimTemplate() {
    this._persistentVolumeClaimTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimTemplateInput() {
    return this._persistentVolumeClaimTemplate;
  }

  // storage_class_template - computed: false, optional: true, required: false
  private _storageClassTemplate?: string; 
  public get storageClassTemplate() {
    return this.getStringAttribute('storage_class_template');
  }
  public set storageClassTemplate(value: string) {
    this._storageClassTemplate = value;
  }
  public resetStorageClassTemplate() {
    this._storageClassTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassTemplateInput() {
    return this._storageClassTemplate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest k8s_storage_kubeblocks_io_storage_provider_v1alpha1_manifest}
*/
export class DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_storage_kubeblocks_io_storage_provider_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SStorageKubeblocksIoStorageProviderV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_storage_kubeblocks_io_storage_provider_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/storage_kubeblocks_io_storage_provider_v1alpha1_manifest k8s_storage_kubeblocks_io_storage_provider_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_storage_kubeblocks_io_storage_provider_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpec) {
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
      metadata: dataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SStorageKubeblocksIoStorageProviderV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
