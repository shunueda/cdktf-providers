// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#metadata DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestMetadata;
  /**
  * EventhubSpec defines the desired state of Eventhub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#spec DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpec;
}
export interface DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#annotations DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#labels DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#name DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#namespace DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecAuthorizationRule {
  /**
  * Name - Name of AuthorizationRule for eventhub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#name DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Rights - Rights set on the AuthorizationRule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#rights DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#rights}
  */
  readonly rights?: string[];
}

export function dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecAuthorizationRuleToTerraform(struct?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecAuthorizationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rights: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rights),
  }
}


export function dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecAuthorizationRuleToHclTerraform(struct?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecAuthorizationRule | cdktf.IResolvable): any {
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
    rights: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rights),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecAuthorizationRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecAuthorizationRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rights !== undefined) {
      hasAnyValues = true;
      internalValueResult.rights = this._rights;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecAuthorizationRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rights = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rights = value.rights;
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

  // rights - computed: false, optional: true, required: false
  private _rights?: string[]; 
  public get rights() {
    return this.getListAttribute('rights');
  }
  public set rights(value: string[]) {
    this._rights = value;
  }
  public resetRights() {
    this._rights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightsInput() {
    return this._rights;
  }
}
export interface DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationStorageAccount {
  /**
  * AccountName - Name of the storage account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#account_name DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#account_name}
  */
  readonly accountName?: string;
  /**
  * ResourceGroup - Name of the storage account resource group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#resource_group DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#resource_group}
  */
  readonly resourceGroup?: string;
}

export function dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationStorageAccountToTerraform(struct?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationStorageAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
  }
}


export function dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationStorageAccountToHclTerraform(struct?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationStorageAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationStorageAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationStorageAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationStorageAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountName = undefined;
      this._resourceGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountName = value.accountName;
      this._resourceGroup = value.resourceGroup;
    }
  }

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }
}
export interface DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestination {
  /**
  * ArchiveNameFormat - Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#archive_name_format DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#archive_name_format}
  */
  readonly archiveNameFormat?: string;
  /**
  * BlobContainer - Blob container Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#blob_container DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#blob_container}
  */
  readonly blobContainer?: string;
  /**
  * Name - Name for capture destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#name DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * StorageAccount - Details of the storage account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#storage_account DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#storage_account}
  */
  readonly storageAccount?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationStorageAccount;
}

export function dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationToTerraform(struct?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_name_format: cdktf.stringToTerraform(struct!.archiveNameFormat),
    blob_container: cdktf.stringToTerraform(struct!.blobContainer),
    name: cdktf.stringToTerraform(struct!.name),
    storage_account: dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationStorageAccountToTerraform(struct!.storageAccount),
  }
}


export function dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationToHclTerraform(struct?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_name_format: {
      value: cdktf.stringToHclTerraform(struct!.archiveNameFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blob_container: {
      value: cdktf.stringToHclTerraform(struct!.blobContainer),
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
    storage_account: {
      value: dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationStorageAccountToHclTerraform(struct!.storageAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationStorageAccount",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveNameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveNameFormat = this._archiveNameFormat;
    }
    if (this._blobContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobContainer = this._blobContainer;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storageAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccount = this._storageAccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archiveNameFormat = undefined;
      this._blobContainer = undefined;
      this._name = undefined;
      this._storageAccount.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archiveNameFormat = value.archiveNameFormat;
      this._blobContainer = value.blobContainer;
      this._name = value.name;
      this._storageAccount.internalValue = value.storageAccount;
    }
  }

  // archive_name_format - computed: false, optional: true, required: false
  private _archiveNameFormat?: string; 
  public get archiveNameFormat() {
    return this.getStringAttribute('archive_name_format');
  }
  public set archiveNameFormat(value: string) {
    this._archiveNameFormat = value;
  }
  public resetArchiveNameFormat() {
    this._archiveNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveNameFormatInput() {
    return this._archiveNameFormat;
  }

  // blob_container - computed: false, optional: true, required: false
  private _blobContainer?: string; 
  public get blobContainer() {
    return this.getStringAttribute('blob_container');
  }
  public set blobContainer(value: string) {
    this._blobContainer = value;
  }
  public resetBlobContainer() {
    this._blobContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobContainerInput() {
    return this._blobContainer;
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

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount = new DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationStorageAccountOutputReference(this, "storage_account");
  public get storageAccount() {
    return this._storageAccount;
  }
  public putStorageAccount(value: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationStorageAccount) {
    this._storageAccount.internalValue = value;
  }
  public resetStorageAccount() {
    this._storageAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount.internalValue;
  }
}
export interface DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescription {
  /**
  * Destination - Resource id of the storage account to be used to create the blobs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#destination DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#destination}
  */
  readonly destination?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestination;
  /**
  * Enabled - indicates whether capture is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#enabled DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * IntervalInSeconds - The time window allows you to set the frequency with which the capture to Azure Blobs will happen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#interval_in_seconds DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * SizeLimitInBytes - The size window defines the amount of data built up in your Event Hub before an capture operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#size_limit_in_bytes DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#size_limit_in_bytes}
  */
  readonly sizeLimitInBytes?: number;
}

export function dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionToTerraform(struct?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationToTerraform(struct!.destination),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_limit_in_bytes: cdktf.numberToTerraform(struct!.sizeLimitInBytes),
  }
}


export function dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionToHclTerraform(struct?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestination",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_limit_in_bytes: {
      value: cdktf.numberToHclTerraform(struct!.sizeLimitInBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescription | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._intervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalInSeconds = this._intervalInSeconds;
    }
    if (this._sizeLimitInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimitInBytes = this._sizeLimitInBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescription | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._enabled = undefined;
      this._intervalInSeconds = undefined;
      this._sizeLimitInBytes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._enabled = value.enabled;
      this._intervalInSeconds = value.intervalInSeconds;
      this._sizeLimitInBytes = value.sizeLimitInBytes;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // interval_in_seconds - computed: false, optional: true, required: false
  private _intervalInSeconds?: number; 
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }
  public set intervalInSeconds(value: number) {
    this._intervalInSeconds = value;
  }
  public resetIntervalInSeconds() {
    this._intervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInSecondsInput() {
    return this._intervalInSeconds;
  }

  // size_limit_in_bytes - computed: false, optional: true, required: false
  private _sizeLimitInBytes?: number; 
  public get sizeLimitInBytes() {
    return this.getNumberAttribute('size_limit_in_bytes');
  }
  public set sizeLimitInBytes(value: number) {
    this._sizeLimitInBytes = value;
  }
  public resetSizeLimitInBytes() {
    this._sizeLimitInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInBytesInput() {
    return this._sizeLimitInBytes;
  }
}
export interface DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecProperties {
  /**
  * CaptureDescription - Details specifying EventHub capture to persistent storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#capture_description DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#capture_description}
  */
  readonly captureDescription?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescription;
  /**
  * MessageRetentionInDays - Number of days to retain the events for this Event Hub, value should be 1 to 7 days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#message_retention_in_days DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#message_retention_in_days}
  */
  readonly messageRetentionInDays?: number;
  /**
  * PartitionCount - Number of partitions created for the Event Hub, allowed values are from 2 to 32 partitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#partition_count DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#partition_count}
  */
  readonly partitionCount?: number;
}

export function dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesToTerraform(struct?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_description: dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionToTerraform(struct!.captureDescription),
    message_retention_in_days: cdktf.numberToTerraform(struct!.messageRetentionInDays),
    partition_count: cdktf.numberToTerraform(struct!.partitionCount),
  }
}


export function dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesToHclTerraform(struct?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_description: {
      value: dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionToHclTerraform(struct!.captureDescription),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescription",
    },
    message_retention_in_days: {
      value: cdktf.numberToHclTerraform(struct!.messageRetentionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition_count: {
      value: cdktf.numberToHclTerraform(struct!.partitionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureDescription?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureDescription = this._captureDescription?.internalValue;
    }
    if (this._messageRetentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageRetentionInDays = this._messageRetentionInDays;
    }
    if (this._partitionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionCount = this._partitionCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureDescription.internalValue = undefined;
      this._messageRetentionInDays = undefined;
      this._partitionCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureDescription.internalValue = value.captureDescription;
      this._messageRetentionInDays = value.messageRetentionInDays;
      this._partitionCount = value.partitionCount;
    }
  }

  // capture_description - computed: false, optional: true, required: false
  private _captureDescription = new DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescriptionOutputReference(this, "capture_description");
  public get captureDescription() {
    return this._captureDescription;
  }
  public putCaptureDescription(value: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesCaptureDescription) {
    this._captureDescription.internalValue = value;
  }
  public resetCaptureDescription() {
    this._captureDescription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureDescriptionInput() {
    return this._captureDescription.internalValue;
  }

  // message_retention_in_days - computed: false, optional: true, required: false
  private _messageRetentionInDays?: number; 
  public get messageRetentionInDays() {
    return this.getNumberAttribute('message_retention_in_days');
  }
  public set messageRetentionInDays(value: number) {
    this._messageRetentionInDays = value;
  }
  public resetMessageRetentionInDays() {
    this._messageRetentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionInDaysInput() {
    return this._messageRetentionInDays;
  }

  // partition_count - computed: false, optional: true, required: false
  private _partitionCount?: number; 
  public get partitionCount() {
    return this.getNumberAttribute('partition_count');
  }
  public set partitionCount(value: number) {
    this._partitionCount = value;
  }
  public resetPartitionCount() {
    this._partitionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionCountInput() {
    return this._partitionCount;
  }
}
export interface DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpec {
  /**
  * EventhubAuthorizationRule defines the name and rights of the access policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#authorization_rule DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#authorization_rule}
  */
  readonly authorizationRule?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecAuthorizationRule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#key_vault_to_store_secrets DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#key_vault_to_store_secrets}
  */
  readonly keyVaultToStoreSecrets?: string;
  /**
  * INSERT ADDITIONAL SPEC FIELDS - desired state of cluster Important: Run 'make' to regenerate code after modifying this file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#location DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#namespace DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * EventhubProperties defines the namespace properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#properties DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#properties}
  */
  readonly properties?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#resource_group DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * SecretName - Used to specify the name of the secret. Defaults to Event Hub name if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#secret_name DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_rule: dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecAuthorizationRuleToTerraform(struct!.authorizationRule),
    key_vault_to_store_secrets: cdktf.stringToTerraform(struct!.keyVaultToStoreSecrets),
    location: cdktf.stringToTerraform(struct!.location),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    properties: dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesToTerraform(struct!.properties),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_rule: {
      value: dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecAuthorizationRuleToHclTerraform(struct!.authorizationRule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecAuthorizationRule",
    },
    key_vault_to_store_secrets: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultToStoreSecrets),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecProperties",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationRule = this._authorizationRule?.internalValue;
    }
    if (this._keyVaultToStoreSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultToStoreSecrets = this._keyVaultToStoreSecrets;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationRule.internalValue = undefined;
      this._keyVaultToStoreSecrets = undefined;
      this._location = undefined;
      this._namespace = undefined;
      this._properties.internalValue = undefined;
      this._resourceGroup = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationRule.internalValue = value.authorizationRule;
      this._keyVaultToStoreSecrets = value.keyVaultToStoreSecrets;
      this._location = value.location;
      this._namespace = value.namespace;
      this._properties.internalValue = value.properties;
      this._resourceGroup = value.resourceGroup;
      this._secretName = value.secretName;
    }
  }

  // authorization_rule - computed: false, optional: true, required: false
  private _authorizationRule = new DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecAuthorizationRuleOutputReference(this, "authorization_rule");
  public get authorizationRule() {
    return this._authorizationRule;
  }
  public putAuthorizationRule(value: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecAuthorizationRule) {
    this._authorizationRule.internalValue = value;
  }
  public resetAuthorizationRule() {
    this._authorizationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationRuleInput() {
    return this._authorizationRule.internalValue;
  }

  // key_vault_to_store_secrets - computed: false, optional: true, required: false
  private _keyVaultToStoreSecrets?: string; 
  public get keyVaultToStoreSecrets() {
    return this.getStringAttribute('key_vault_to_store_secrets');
  }
  public set keyVaultToStoreSecrets(value: string) {
    this._keyVaultToStoreSecrets = value;
  }
  public resetKeyVaultToStoreSecrets() {
    this._keyVaultToStoreSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultToStoreSecretsInput() {
    return this._keyVaultToStoreSecrets;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
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

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest k8s_azure_microsoft_com_eventhub_v1alpha1_manifest}
*/
export class DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_eventhub_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComEventhubV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_eventhub_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_eventhub_v1alpha1_manifest k8s_azure_microsoft_com_eventhub_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_eventhub_v1alpha1_manifest',
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
  private _metadata = new DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComEventhubV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
