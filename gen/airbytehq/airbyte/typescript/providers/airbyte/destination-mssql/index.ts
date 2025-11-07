// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationMssqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#configuration DestinationMssql#configuration}
  */
  readonly configuration: DestinationMssqlConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#definition_id DestinationMssql#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#name DestinationMssql#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#workspace_id DestinationMssql#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationMssqlConfigurationLoadTypeBulkLoad {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#additional_properties DestinationMssql#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The Azure blob storage account key. Mutually exclusive with a Shared Access Signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#azure_blob_storage_account_key DestinationMssql#azure_blob_storage_account_key}
  */
  readonly azureBlobStorageAccountKey?: string;
  /**
  * The name of the Azure Blob Storage account. See: https://learn.microsoft.com/azure/storage/blobs/storage-blobs-introduction#storage-accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#azure_blob_storage_account_name DestinationMssql#azure_blob_storage_account_name}
  */
  readonly azureBlobStorageAccountName: string;
  /**
  * The name of the Azure Blob Storage container. See: https://learn.microsoft.com/azure/storage/blobs/storage-blobs-introduction#containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#azure_blob_storage_container_name DestinationMssql#azure_blob_storage_container_name}
  */
  readonly azureBlobStorageContainerName: string;
  /**
  * Specifies the external data source name configured in MSSQL, which references the Azure Blob container. See: https://learn.microsoft.com/sql/t-sql/statements/bulk-insert-transact-sql
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#bulk_load_data_source DestinationMssql#bulk_load_data_source}
  */
  readonly bulkLoadDataSource: string;
  /**
  * When enabled, Airbyte will validate all values before loading them into the destination table. This provides stronger data integrity guarantees but may significantly impact performance. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#bulk_load_validate_values_pre_load DestinationMssql#bulk_load_validate_values_pre_load}
  */
  readonly bulkLoadValidateValuesPreLoad?: boolean | cdktf.IResolvable;
  /**
  * Default: "BULK"; must be "BULK"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#load_type DestinationMssql#load_type}
  */
  readonly loadType?: string;
  /**
  * A shared access signature (SAS) provides secure delegated access to resources in your storage account. See: https://learn.microsoft.com/azure/storage/common/storage-sas-overview.Mutually exclusive with an account key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#shared_access_signature DestinationMssql#shared_access_signature}
  */
  readonly sharedAccessSignature?: string;
}

export function destinationMssqlConfigurationLoadTypeBulkLoadToTerraform(struct?: DestinationMssqlConfigurationLoadTypeBulkLoad | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    azure_blob_storage_account_key: cdktf.stringToTerraform(struct!.azureBlobStorageAccountKey),
    azure_blob_storage_account_name: cdktf.stringToTerraform(struct!.azureBlobStorageAccountName),
    azure_blob_storage_container_name: cdktf.stringToTerraform(struct!.azureBlobStorageContainerName),
    bulk_load_data_source: cdktf.stringToTerraform(struct!.bulkLoadDataSource),
    bulk_load_validate_values_pre_load: cdktf.booleanToTerraform(struct!.bulkLoadValidateValuesPreLoad),
    load_type: cdktf.stringToTerraform(struct!.loadType),
    shared_access_signature: cdktf.stringToTerraform(struct!.sharedAccessSignature),
  }
}


export function destinationMssqlConfigurationLoadTypeBulkLoadToHclTerraform(struct?: DestinationMssqlConfigurationLoadTypeBulkLoad | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_blob_storage_account_key: {
      value: cdktf.stringToHclTerraform(struct!.azureBlobStorageAccountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_blob_storage_account_name: {
      value: cdktf.stringToHclTerraform(struct!.azureBlobStorageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_blob_storage_container_name: {
      value: cdktf.stringToHclTerraform(struct!.azureBlobStorageContainerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bulk_load_data_source: {
      value: cdktf.stringToHclTerraform(struct!.bulkLoadDataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bulk_load_validate_values_pre_load: {
      value: cdktf.booleanToHclTerraform(struct!.bulkLoadValidateValuesPreLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_type: {
      value: cdktf.stringToHclTerraform(struct!.loadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_access_signature: {
      value: cdktf.stringToHclTerraform(struct!.sharedAccessSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMssqlConfigurationLoadTypeBulkLoadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMssqlConfigurationLoadTypeBulkLoad | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._azureBlobStorageAccountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobStorageAccountKey = this._azureBlobStorageAccountKey;
    }
    if (this._azureBlobStorageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobStorageAccountName = this._azureBlobStorageAccountName;
    }
    if (this._azureBlobStorageContainerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobStorageContainerName = this._azureBlobStorageContainerName;
    }
    if (this._bulkLoadDataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.bulkLoadDataSource = this._bulkLoadDataSource;
    }
    if (this._bulkLoadValidateValuesPreLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.bulkLoadValidateValuesPreLoad = this._bulkLoadValidateValuesPreLoad;
    }
    if (this._loadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadType = this._loadType;
    }
    if (this._sharedAccessSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedAccessSignature = this._sharedAccessSignature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMssqlConfigurationLoadTypeBulkLoad | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._azureBlobStorageAccountKey = undefined;
      this._azureBlobStorageAccountName = undefined;
      this._azureBlobStorageContainerName = undefined;
      this._bulkLoadDataSource = undefined;
      this._bulkLoadValidateValuesPreLoad = undefined;
      this._loadType = undefined;
      this._sharedAccessSignature = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._azureBlobStorageAccountKey = value.azureBlobStorageAccountKey;
      this._azureBlobStorageAccountName = value.azureBlobStorageAccountName;
      this._azureBlobStorageContainerName = value.azureBlobStorageContainerName;
      this._bulkLoadDataSource = value.bulkLoadDataSource;
      this._bulkLoadValidateValuesPreLoad = value.bulkLoadValidateValuesPreLoad;
      this._loadType = value.loadType;
      this._sharedAccessSignature = value.sharedAccessSignature;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // azure_blob_storage_account_key - computed: false, optional: true, required: false
  private _azureBlobStorageAccountKey?: string; 
  public get azureBlobStorageAccountKey() {
    return this.getStringAttribute('azure_blob_storage_account_key');
  }
  public set azureBlobStorageAccountKey(value: string) {
    this._azureBlobStorageAccountKey = value;
  }
  public resetAzureBlobStorageAccountKey() {
    this._azureBlobStorageAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageAccountKeyInput() {
    return this._azureBlobStorageAccountKey;
  }

  // azure_blob_storage_account_name - computed: false, optional: false, required: true
  private _azureBlobStorageAccountName?: string; 
  public get azureBlobStorageAccountName() {
    return this.getStringAttribute('azure_blob_storage_account_name');
  }
  public set azureBlobStorageAccountName(value: string) {
    this._azureBlobStorageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageAccountNameInput() {
    return this._azureBlobStorageAccountName;
  }

  // azure_blob_storage_container_name - computed: false, optional: false, required: true
  private _azureBlobStorageContainerName?: string; 
  public get azureBlobStorageContainerName() {
    return this.getStringAttribute('azure_blob_storage_container_name');
  }
  public set azureBlobStorageContainerName(value: string) {
    this._azureBlobStorageContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageContainerNameInput() {
    return this._azureBlobStorageContainerName;
  }

  // bulk_load_data_source - computed: false, optional: false, required: true
  private _bulkLoadDataSource?: string; 
  public get bulkLoadDataSource() {
    return this.getStringAttribute('bulk_load_data_source');
  }
  public set bulkLoadDataSource(value: string) {
    this._bulkLoadDataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkLoadDataSourceInput() {
    return this._bulkLoadDataSource;
  }

  // bulk_load_validate_values_pre_load - computed: true, optional: true, required: false
  private _bulkLoadValidateValuesPreLoad?: boolean | cdktf.IResolvable; 
  public get bulkLoadValidateValuesPreLoad() {
    return this.getBooleanAttribute('bulk_load_validate_values_pre_load');
  }
  public set bulkLoadValidateValuesPreLoad(value: boolean | cdktf.IResolvable) {
    this._bulkLoadValidateValuesPreLoad = value;
  }
  public resetBulkLoadValidateValuesPreLoad() {
    this._bulkLoadValidateValuesPreLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkLoadValidateValuesPreLoadInput() {
    return this._bulkLoadValidateValuesPreLoad;
  }

  // load_type - computed: true, optional: true, required: false
  private _loadType?: string; 
  public get loadType() {
    return this.getStringAttribute('load_type');
  }
  public set loadType(value: string) {
    this._loadType = value;
  }
  public resetLoadType() {
    this._loadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadTypeInput() {
    return this._loadType;
  }

  // shared_access_signature - computed: false, optional: true, required: false
  private _sharedAccessSignature?: string; 
  public get sharedAccessSignature() {
    return this.getStringAttribute('shared_access_signature');
  }
  public set sharedAccessSignature(value: string) {
    this._sharedAccessSignature = value;
  }
  public resetSharedAccessSignature() {
    this._sharedAccessSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessSignatureInput() {
    return this._sharedAccessSignature;
  }
}
export interface DestinationMssqlConfigurationLoadTypeInsertLoad {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#additional_properties DestinationMssql#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "INSERT"; must be "INSERT"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#load_type DestinationMssql#load_type}
  */
  readonly loadType?: string;
}

export function destinationMssqlConfigurationLoadTypeInsertLoadToTerraform(struct?: DestinationMssqlConfigurationLoadTypeInsertLoad | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    load_type: cdktf.stringToTerraform(struct!.loadType),
  }
}


export function destinationMssqlConfigurationLoadTypeInsertLoadToHclTerraform(struct?: DestinationMssqlConfigurationLoadTypeInsertLoad | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_type: {
      value: cdktf.stringToHclTerraform(struct!.loadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMssqlConfigurationLoadTypeInsertLoadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMssqlConfigurationLoadTypeInsertLoad | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._loadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadType = this._loadType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMssqlConfigurationLoadTypeInsertLoad | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._loadType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._loadType = value.loadType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // load_type - computed: true, optional: true, required: false
  private _loadType?: string; 
  public get loadType() {
    return this.getStringAttribute('load_type');
  }
  public set loadType(value: string) {
    this._loadType = value;
  }
  public resetLoadType() {
    this._loadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadTypeInput() {
    return this._loadType;
  }
}
export interface DestinationMssqlConfigurationLoadType {
  /**
  * Configuration details for using the BULK loading mechanism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#bulk_load DestinationMssql#bulk_load}
  */
  readonly bulkLoad?: DestinationMssqlConfigurationLoadTypeBulkLoad;
  /**
  * Configuration details for using the INSERT loading mechanism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#insert_load DestinationMssql#insert_load}
  */
  readonly insertLoad?: DestinationMssqlConfigurationLoadTypeInsertLoad;
}

export function destinationMssqlConfigurationLoadTypeToTerraform(struct?: DestinationMssqlConfigurationLoadType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bulk_load: destinationMssqlConfigurationLoadTypeBulkLoadToTerraform(struct!.bulkLoad),
    insert_load: destinationMssqlConfigurationLoadTypeInsertLoadToTerraform(struct!.insertLoad),
  }
}


export function destinationMssqlConfigurationLoadTypeToHclTerraform(struct?: DestinationMssqlConfigurationLoadType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bulk_load: {
      value: destinationMssqlConfigurationLoadTypeBulkLoadToHclTerraform(struct!.bulkLoad),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMssqlConfigurationLoadTypeBulkLoad",
    },
    insert_load: {
      value: destinationMssqlConfigurationLoadTypeInsertLoadToHclTerraform(struct!.insertLoad),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMssqlConfigurationLoadTypeInsertLoad",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMssqlConfigurationLoadTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMssqlConfigurationLoadType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bulkLoad?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bulkLoad = this._bulkLoad?.internalValue;
    }
    if (this._insertLoad?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertLoad = this._insertLoad?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMssqlConfigurationLoadType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bulkLoad.internalValue = undefined;
      this._insertLoad.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bulkLoad.internalValue = value.bulkLoad;
      this._insertLoad.internalValue = value.insertLoad;
    }
  }

  // bulk_load - computed: false, optional: true, required: false
  private _bulkLoad = new DestinationMssqlConfigurationLoadTypeBulkLoadOutputReference(this, "bulk_load");
  public get bulkLoad() {
    return this._bulkLoad;
  }
  public putBulkLoad(value: DestinationMssqlConfigurationLoadTypeBulkLoad) {
    this._bulkLoad.internalValue = value;
  }
  public resetBulkLoad() {
    this._bulkLoad.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkLoadInput() {
    return this._bulkLoad.internalValue;
  }

  // insert_load - computed: false, optional: true, required: false
  private _insertLoad = new DestinationMssqlConfigurationLoadTypeInsertLoadOutputReference(this, "insert_load");
  public get insertLoad() {
    return this._insertLoad;
  }
  public putInsertLoad(value: DestinationMssqlConfigurationLoadTypeInsertLoad) {
    this._insertLoad.internalValue = value;
  }
  public resetInsertLoad() {
    this._insertLoad.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertLoadInput() {
    return this._insertLoad.internalValue;
  }
}
export interface DestinationMssqlConfigurationSslMethodEncryptedTrustServerCertificate {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#additional_properties DestinationMssql#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "encrypted_trust_server_certificate"; must be "encrypted_trust_server_certificate"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#name DestinationMssql#name}
  */
  readonly name?: string;
}

export function destinationMssqlConfigurationSslMethodEncryptedTrustServerCertificateToTerraform(struct?: DestinationMssqlConfigurationSslMethodEncryptedTrustServerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function destinationMssqlConfigurationSslMethodEncryptedTrustServerCertificateToHclTerraform(struct?: DestinationMssqlConfigurationSslMethodEncryptedTrustServerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
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

export class DestinationMssqlConfigurationSslMethodEncryptedTrustServerCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMssqlConfigurationSslMethodEncryptedTrustServerCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMssqlConfigurationSslMethodEncryptedTrustServerCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._name = value.name;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // name - computed: true, optional: true, required: false
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
export interface DestinationMssqlConfigurationSslMethodEncryptedVerifyCertificate {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#additional_properties DestinationMssql#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Specifies the host name of the server. The value of this property must match the subject property of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#host_name_in_certificate DestinationMssql#host_name_in_certificate}
  */
  readonly hostNameInCertificate?: string;
  /**
  * Default: "encrypted_verify_certificate"; must be "encrypted_verify_certificate"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#name DestinationMssql#name}
  */
  readonly name?: string;
  /**
  * Specifies the name of the trust store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#trust_store_name DestinationMssql#trust_store_name}
  */
  readonly trustStoreName?: string;
  /**
  * Specifies the password of the trust store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#trust_store_password DestinationMssql#trust_store_password}
  */
  readonly trustStorePassword?: string;
}

export function destinationMssqlConfigurationSslMethodEncryptedVerifyCertificateToTerraform(struct?: DestinationMssqlConfigurationSslMethodEncryptedVerifyCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    host_name_in_certificate: cdktf.stringToTerraform(struct!.hostNameInCertificate),
    name: cdktf.stringToTerraform(struct!.name),
    trust_store_name: cdktf.stringToTerraform(struct!.trustStoreName),
    trust_store_password: cdktf.stringToTerraform(struct!.trustStorePassword),
  }
}


export function destinationMssqlConfigurationSslMethodEncryptedVerifyCertificateToHclTerraform(struct?: DestinationMssqlConfigurationSslMethodEncryptedVerifyCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name_in_certificate: {
      value: cdktf.stringToHclTerraform(struct!.hostNameInCertificate),
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
    trust_store_name: {
      value: cdktf.stringToHclTerraform(struct!.trustStoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_password: {
      value: cdktf.stringToHclTerraform(struct!.trustStorePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMssqlConfigurationSslMethodEncryptedVerifyCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMssqlConfigurationSslMethodEncryptedVerifyCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._hostNameInCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNameInCertificate = this._hostNameInCertificate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._trustStoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStoreName = this._trustStoreName;
    }
    if (this._trustStorePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStorePassword = this._trustStorePassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMssqlConfigurationSslMethodEncryptedVerifyCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._hostNameInCertificate = undefined;
      this._name = undefined;
      this._trustStoreName = undefined;
      this._trustStorePassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._hostNameInCertificate = value.hostNameInCertificate;
      this._name = value.name;
      this._trustStoreName = value.trustStoreName;
      this._trustStorePassword = value.trustStorePassword;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // host_name_in_certificate - computed: false, optional: true, required: false
  private _hostNameInCertificate?: string; 
  public get hostNameInCertificate() {
    return this.getStringAttribute('host_name_in_certificate');
  }
  public set hostNameInCertificate(value: string) {
    this._hostNameInCertificate = value;
  }
  public resetHostNameInCertificate() {
    this._hostNameInCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInCertificateInput() {
    return this._hostNameInCertificate;
  }

  // name - computed: true, optional: true, required: false
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

  // trust_store_name - computed: false, optional: true, required: false
  private _trustStoreName?: string; 
  public get trustStoreName() {
    return this.getStringAttribute('trust_store_name');
  }
  public set trustStoreName(value: string) {
    this._trustStoreName = value;
  }
  public resetTrustStoreName() {
    this._trustStoreName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreNameInput() {
    return this._trustStoreName;
  }

  // trust_store_password - computed: false, optional: true, required: false
  private _trustStorePassword?: string; 
  public get trustStorePassword() {
    return this.getStringAttribute('trust_store_password');
  }
  public set trustStorePassword(value: string) {
    this._trustStorePassword = value;
  }
  public resetTrustStorePassword() {
    this._trustStorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePasswordInput() {
    return this._trustStorePassword;
  }
}
export interface DestinationMssqlConfigurationSslMethodUnencrypted {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#additional_properties DestinationMssql#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "unencrypted"; must be "unencrypted"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#name DestinationMssql#name}
  */
  readonly name?: string;
}

export function destinationMssqlConfigurationSslMethodUnencryptedToTerraform(struct?: DestinationMssqlConfigurationSslMethodUnencrypted | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function destinationMssqlConfigurationSslMethodUnencryptedToHclTerraform(struct?: DestinationMssqlConfigurationSslMethodUnencrypted | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
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

export class DestinationMssqlConfigurationSslMethodUnencryptedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMssqlConfigurationSslMethodUnencrypted | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMssqlConfigurationSslMethodUnencrypted | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._name = value.name;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // name - computed: true, optional: true, required: false
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
export interface DestinationMssqlConfigurationSslMethod {
  /**
  * Use the certificate provided by the server without verification. (For testing purposes only!)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#encrypted_trust_server_certificate DestinationMssql#encrypted_trust_server_certificate}
  */
  readonly encryptedTrustServerCertificate?: DestinationMssqlConfigurationSslMethodEncryptedTrustServerCertificate;
  /**
  * Verify and use the certificate provided by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#encrypted_verify_certificate DestinationMssql#encrypted_verify_certificate}
  */
  readonly encryptedVerifyCertificate?: DestinationMssqlConfigurationSslMethodEncryptedVerifyCertificate;
  /**
  * The data transfer will not be encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#unencrypted DestinationMssql#unencrypted}
  */
  readonly unencrypted?: DestinationMssqlConfigurationSslMethodUnencrypted;
}

export function destinationMssqlConfigurationSslMethodToTerraform(struct?: DestinationMssqlConfigurationSslMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_trust_server_certificate: destinationMssqlConfigurationSslMethodEncryptedTrustServerCertificateToTerraform(struct!.encryptedTrustServerCertificate),
    encrypted_verify_certificate: destinationMssqlConfigurationSslMethodEncryptedVerifyCertificateToTerraform(struct!.encryptedVerifyCertificate),
    unencrypted: destinationMssqlConfigurationSslMethodUnencryptedToTerraform(struct!.unencrypted),
  }
}


export function destinationMssqlConfigurationSslMethodToHclTerraform(struct?: DestinationMssqlConfigurationSslMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_trust_server_certificate: {
      value: destinationMssqlConfigurationSslMethodEncryptedTrustServerCertificateToHclTerraform(struct!.encryptedTrustServerCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMssqlConfigurationSslMethodEncryptedTrustServerCertificate",
    },
    encrypted_verify_certificate: {
      value: destinationMssqlConfigurationSslMethodEncryptedVerifyCertificateToHclTerraform(struct!.encryptedVerifyCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMssqlConfigurationSslMethodEncryptedVerifyCertificate",
    },
    unencrypted: {
      value: destinationMssqlConfigurationSslMethodUnencryptedToHclTerraform(struct!.unencrypted),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMssqlConfigurationSslMethodUnencrypted",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMssqlConfigurationSslMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMssqlConfigurationSslMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedTrustServerCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedTrustServerCertificate = this._encryptedTrustServerCertificate?.internalValue;
    }
    if (this._encryptedVerifyCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedVerifyCertificate = this._encryptedVerifyCertificate?.internalValue;
    }
    if (this._unencrypted?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unencrypted = this._unencrypted?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMssqlConfigurationSslMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedTrustServerCertificate.internalValue = undefined;
      this._encryptedVerifyCertificate.internalValue = undefined;
      this._unencrypted.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptedTrustServerCertificate.internalValue = value.encryptedTrustServerCertificate;
      this._encryptedVerifyCertificate.internalValue = value.encryptedVerifyCertificate;
      this._unencrypted.internalValue = value.unencrypted;
    }
  }

  // encrypted_trust_server_certificate - computed: false, optional: true, required: false
  private _encryptedTrustServerCertificate = new DestinationMssqlConfigurationSslMethodEncryptedTrustServerCertificateOutputReference(this, "encrypted_trust_server_certificate");
  public get encryptedTrustServerCertificate() {
    return this._encryptedTrustServerCertificate;
  }
  public putEncryptedTrustServerCertificate(value: DestinationMssqlConfigurationSslMethodEncryptedTrustServerCertificate) {
    this._encryptedTrustServerCertificate.internalValue = value;
  }
  public resetEncryptedTrustServerCertificate() {
    this._encryptedTrustServerCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedTrustServerCertificateInput() {
    return this._encryptedTrustServerCertificate.internalValue;
  }

  // encrypted_verify_certificate - computed: false, optional: true, required: false
  private _encryptedVerifyCertificate = new DestinationMssqlConfigurationSslMethodEncryptedVerifyCertificateOutputReference(this, "encrypted_verify_certificate");
  public get encryptedVerifyCertificate() {
    return this._encryptedVerifyCertificate;
  }
  public putEncryptedVerifyCertificate(value: DestinationMssqlConfigurationSslMethodEncryptedVerifyCertificate) {
    this._encryptedVerifyCertificate.internalValue = value;
  }
  public resetEncryptedVerifyCertificate() {
    this._encryptedVerifyCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedVerifyCertificateInput() {
    return this._encryptedVerifyCertificate.internalValue;
  }

  // unencrypted - computed: false, optional: true, required: false
  private _unencrypted = new DestinationMssqlConfigurationSslMethodUnencryptedOutputReference(this, "unencrypted");
  public get unencrypted() {
    return this._unencrypted;
  }
  public putUnencrypted(value: DestinationMssqlConfigurationSslMethodUnencrypted) {
    this._unencrypted.internalValue = value;
  }
  public resetUnencrypted() {
    this._unencrypted.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unencryptedInput() {
    return this._unencrypted.internalValue;
  }
}
export interface DestinationMssqlConfiguration {
  /**
  * The name of the MSSQL database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#database DestinationMssql#database}
  */
  readonly database: string;
  /**
  * The host name of the MSSQL database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#host DestinationMssql#host}
  */
  readonly host: string;
  /**
  * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#jdbc_url_params DestinationMssql#jdbc_url_params}
  */
  readonly jdbcUrlParams?: string;
  /**
  * Specifies the type of load mechanism (e.g., BULK, INSERT) and its associated configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#load_type DestinationMssql#load_type}
  */
  readonly loadType: DestinationMssqlConfigurationLoadType;
  /**
  * The password associated with this username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#password DestinationMssql#password}
  */
  readonly password?: string;
  /**
  * The port of the MSSQL database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#port DestinationMssql#port}
  */
  readonly port: number;
  /**
  * The default schema tables are written to if the source does not specify a namespace. The usual value for this field is "public". Default: "public"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#schema DestinationMssql#schema}
  */
  readonly schema?: string;
  /**
  * The encryption method which is used to communicate with the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#ssl_method DestinationMssql#ssl_method}
  */
  readonly sslMethod: DestinationMssqlConfigurationSslMethod;
  /**
  * The username which is used to access the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#user DestinationMssql#user}
  */
  readonly user: string;
}

export function destinationMssqlConfigurationToTerraform(struct?: DestinationMssqlConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    jdbc_url_params: cdktf.stringToTerraform(struct!.jdbcUrlParams),
    load_type: destinationMssqlConfigurationLoadTypeToTerraform(struct!.loadType),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    schema: cdktf.stringToTerraform(struct!.schema),
    ssl_method: destinationMssqlConfigurationSslMethodToTerraform(struct!.sslMethod),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function destinationMssqlConfigurationToHclTerraform(struct?: DestinationMssqlConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jdbc_url_params: {
      value: cdktf.stringToHclTerraform(struct!.jdbcUrlParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_type: {
      value: destinationMssqlConfigurationLoadTypeToHclTerraform(struct!.loadType),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMssqlConfigurationLoadType",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_method: {
      value: destinationMssqlConfigurationSslMethodToHclTerraform(struct!.sslMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMssqlConfigurationSslMethod",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMssqlConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMssqlConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._jdbcUrlParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.jdbcUrlParams = this._jdbcUrlParams;
    }
    if (this._loadType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadType = this._loadType?.internalValue;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._sslMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMethod = this._sslMethod?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMssqlConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._jdbcUrlParams = undefined;
      this._loadType.internalValue = undefined;
      this._password = undefined;
      this._port = undefined;
      this._schema = undefined;
      this._sslMethod.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._jdbcUrlParams = value.jdbcUrlParams;
      this._loadType.internalValue = value.loadType;
      this._password = value.password;
      this._port = value.port;
      this._schema = value.schema;
      this._sslMethod.internalValue = value.sslMethod;
      this._user = value.user;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // jdbc_url_params - computed: false, optional: true, required: false
  private _jdbcUrlParams?: string; 
  public get jdbcUrlParams() {
    return this.getStringAttribute('jdbc_url_params');
  }
  public set jdbcUrlParams(value: string) {
    this._jdbcUrlParams = value;
  }
  public resetJdbcUrlParams() {
    this._jdbcUrlParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcUrlParamsInput() {
    return this._jdbcUrlParams;
  }

  // load_type - computed: false, optional: false, required: true
  private _loadType = new DestinationMssqlConfigurationLoadTypeOutputReference(this, "load_type");
  public get loadType() {
    return this._loadType;
  }
  public putLoadType(value: DestinationMssqlConfigurationLoadType) {
    this._loadType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadTypeInput() {
    return this._loadType.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // ssl_method - computed: false, optional: false, required: true
  private _sslMethod = new DestinationMssqlConfigurationSslMethodOutputReference(this, "ssl_method");
  public get sslMethod() {
    return this._sslMethod;
  }
  public putSslMethod(value: DestinationMssqlConfigurationSslMethod) {
    this._sslMethod.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMethodInput() {
    return this._sslMethod.internalValue;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DestinationMssqlResourceAllocationDefault {
}

export function destinationMssqlResourceAllocationDefaultToTerraform(struct?: DestinationMssqlResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMssqlResourceAllocationDefaultToHclTerraform(struct?: DestinationMssqlResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMssqlResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMssqlResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMssqlResourceAllocationDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationMssqlResourceAllocationJobSpecificResourceRequirements {
}

export function destinationMssqlResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationMssqlResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMssqlResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationMssqlResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMssqlResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMssqlResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMssqlResourceAllocationJobSpecificResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationMssqlResourceAllocationJobSpecific {
}

export function destinationMssqlResourceAllocationJobSpecificToTerraform(struct?: DestinationMssqlResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMssqlResourceAllocationJobSpecificToHclTerraform(struct?: DestinationMssqlResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMssqlResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DestinationMssqlResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMssqlResourceAllocationJobSpecific | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DestinationMssqlResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationMssqlResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationMssqlResourceAllocationJobSpecificOutputReference {
    return new DestinationMssqlResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationMssqlResourceAllocation {
}

export function destinationMssqlResourceAllocationToTerraform(struct?: DestinationMssqlResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMssqlResourceAllocationToHclTerraform(struct?: DestinationMssqlResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMssqlResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMssqlResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMssqlResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationMssqlResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationMssqlResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql airbyte_destination_mssql}
*/
export class DestinationMssql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_mssql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationMssql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationMssql to import
  * @param importFromId The id of the existing DestinationMssql that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationMssql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_mssql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mssql airbyte_destination_mssql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationMssqlConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationMssqlConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_mssql',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._definitionId = config.definitionId;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DestinationMssqlConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationMssqlConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // definition_id - computed: true, optional: true, required: false
  private _definitionId?: string; 
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }
  public set definitionId(value: string) {
    this._definitionId = value;
  }
  public resetDefinitionId() {
    this._definitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
  }

  // destination_id - computed: true, optional: false, required: false
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
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

  // resource_allocation - computed: true, optional: false, required: false
  private _resourceAllocation = new DestinationMssqlResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: destinationMssqlConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationMssqlConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationMssqlConfiguration",
      },
      definition_id: {
        value: cdktf.stringToHclTerraform(this._definitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
