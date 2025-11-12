// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationAzureBlobStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#configuration DestinationAzureBlobStorage#configuration}
  */
  readonly configuration: DestinationAzureBlobStorageConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#definition_id DestinationAzureBlobStorage#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#name DestinationAzureBlobStorage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#workspace_id DestinationAzureBlobStorage#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValues {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#additional_properties DestinationAzureBlobStorage#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "No flattening"; must be one of ["No flattening", "Root level flattening"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#flattening DestinationAzureBlobStorage#flattening}
  */
  readonly flattening?: string;
  /**
  * Default: "CSV"; must be "CSV"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#format_type DestinationAzureBlobStorage#format_type}
  */
  readonly formatType?: string;
}

export function destinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValuesToTerraform(struct?: DestinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    flattening: cdktf.stringToTerraform(struct!.flattening),
    format_type: cdktf.stringToTerraform(struct!.formatType),
  }
}


export function destinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValuesToHclTerraform(struct?: DestinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValues | cdktf.IResolvable): any {
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
    flattening: {
      value: cdktf.stringToHclTerraform(struct!.flattening),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_type: {
      value: cdktf.stringToHclTerraform(struct!.formatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._flattening !== undefined) {
      hasAnyValues = true;
      internalValueResult.flattening = this._flattening;
    }
    if (this._formatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatType = this._formatType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._flattening = undefined;
      this._formatType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._flattening = value.flattening;
      this._formatType = value.formatType;
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

  // flattening - computed: true, optional: true, required: false
  private _flattening?: string; 
  public get flattening() {
    return this.getStringAttribute('flattening');
  }
  public set flattening(value: string) {
    this._flattening = value;
  }
  public resetFlattening() {
    this._flattening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatteningInput() {
    return this._flattening;
  }

  // format_type - computed: true, optional: true, required: false
  private _formatType?: string; 
  public get formatType() {
    return this.getStringAttribute('format_type');
  }
  public set formatType(value: string) {
    this._formatType = value;
  }
  public resetFormatType() {
    this._formatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTypeInput() {
    return this._formatType;
  }
}
export interface DestinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJson {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#additional_properties DestinationAzureBlobStorage#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "No flattening"; must be one of ["No flattening", "Root level flattening"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#flattening DestinationAzureBlobStorage#flattening}
  */
  readonly flattening?: string;
  /**
  * Default: "JSONL"; must be "JSONL"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#format_type DestinationAzureBlobStorage#format_type}
  */
  readonly formatType?: string;
}

export function destinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJsonToTerraform(struct?: DestinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    flattening: cdktf.stringToTerraform(struct!.flattening),
    format_type: cdktf.stringToTerraform(struct!.formatType),
  }
}


export function destinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJsonToHclTerraform(struct?: DestinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable): any {
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
    flattening: {
      value: cdktf.stringToHclTerraform(struct!.flattening),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_type: {
      value: cdktf.stringToHclTerraform(struct!.formatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._flattening !== undefined) {
      hasAnyValues = true;
      internalValueResult.flattening = this._flattening;
    }
    if (this._formatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatType = this._formatType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._flattening = undefined;
      this._formatType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._flattening = value.flattening;
      this._formatType = value.formatType;
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

  // flattening - computed: true, optional: true, required: false
  private _flattening?: string; 
  public get flattening() {
    return this.getStringAttribute('flattening');
  }
  public set flattening(value: string) {
    this._flattening = value;
  }
  public resetFlattening() {
    this._flattening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatteningInput() {
    return this._flattening;
  }

  // format_type - computed: true, optional: true, required: false
  private _formatType?: string; 
  public get formatType() {
    return this.getStringAttribute('format_type');
  }
  public set formatType(value: string) {
    this._formatType = value;
  }
  public resetFormatType() {
    this._formatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTypeInput() {
    return this._formatType;
  }
}
export interface DestinationAzureBlobStorageConfigurationFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#csv_comma_separated_values DestinationAzureBlobStorage#csv_comma_separated_values}
  */
  readonly csvCommaSeparatedValues?: DestinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValues;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#json_lines_newline_delimited_json DestinationAzureBlobStorage#json_lines_newline_delimited_json}
  */
  readonly jsonLinesNewlineDelimitedJson?: DestinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJson;
}

export function destinationAzureBlobStorageConfigurationFormatToTerraform(struct?: DestinationAzureBlobStorageConfigurationFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csv_comma_separated_values: destinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValuesToTerraform(struct!.csvCommaSeparatedValues),
    json_lines_newline_delimited_json: destinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJsonToTerraform(struct!.jsonLinesNewlineDelimitedJson),
  }
}


export function destinationAzureBlobStorageConfigurationFormatToHclTerraform(struct?: DestinationAzureBlobStorageConfigurationFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csv_comma_separated_values: {
      value: destinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValuesToHclTerraform(struct!.csvCommaSeparatedValues),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValues",
    },
    json_lines_newline_delimited_json: {
      value: destinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJsonToHclTerraform(struct!.jsonLinesNewlineDelimitedJson),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJson",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationAzureBlobStorageConfigurationFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAzureBlobStorageConfigurationFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csvCommaSeparatedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvCommaSeparatedValues = this._csvCommaSeparatedValues?.internalValue;
    }
    if (this._jsonLinesNewlineDelimitedJson?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonLinesNewlineDelimitedJson = this._jsonLinesNewlineDelimitedJson?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAzureBlobStorageConfigurationFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csvCommaSeparatedValues.internalValue = undefined;
      this._jsonLinesNewlineDelimitedJson.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csvCommaSeparatedValues.internalValue = value.csvCommaSeparatedValues;
      this._jsonLinesNewlineDelimitedJson.internalValue = value.jsonLinesNewlineDelimitedJson;
    }
  }

  // csv_comma_separated_values - computed: false, optional: true, required: false
  private _csvCommaSeparatedValues = new DestinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValuesOutputReference(this, "csv_comma_separated_values");
  public get csvCommaSeparatedValues() {
    return this._csvCommaSeparatedValues;
  }
  public putCsvCommaSeparatedValues(value: DestinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValues) {
    this._csvCommaSeparatedValues.internalValue = value;
  }
  public resetCsvCommaSeparatedValues() {
    this._csvCommaSeparatedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvCommaSeparatedValuesInput() {
    return this._csvCommaSeparatedValues.internalValue;
  }

  // json_lines_newline_delimited_json - computed: false, optional: true, required: false
  private _jsonLinesNewlineDelimitedJson = new DestinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJsonOutputReference(this, "json_lines_newline_delimited_json");
  public get jsonLinesNewlineDelimitedJson() {
    return this._jsonLinesNewlineDelimitedJson;
  }
  public putJsonLinesNewlineDelimitedJson(value: DestinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJson) {
    this._jsonLinesNewlineDelimitedJson.internalValue = value;
  }
  public resetJsonLinesNewlineDelimitedJson() {
    this._jsonLinesNewlineDelimitedJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonLinesNewlineDelimitedJsonInput() {
    return this._jsonLinesNewlineDelimitedJson.internalValue;
  }
}
export interface DestinationAzureBlobStorageConfiguration {
  /**
  * The Azure blob storage account key. If you set this value, you must not set the Shared Access Signature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#azure_blob_storage_account_key DestinationAzureBlobStorage#azure_blob_storage_account_key}
  */
  readonly azureBlobStorageAccountKey?: string;
  /**
  * The name of the Azure Blob Storage Account. Read more <a href="https://learn.microsoft.com/en-gb/azure/storage/blobs/storage-blobs-introduction#storage-accounts">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#azure_blob_storage_account_name DestinationAzureBlobStorage#azure_blob_storage_account_name}
  */
  readonly azureBlobStorageAccountName: string;
  /**
  * The name of the Azure Blob Storage Container. Read more <a href="https://learn.microsoft.com/en-gb/azure/storage/blobs/storage-blobs-introduction#containers">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#azure_blob_storage_container_name DestinationAzureBlobStorage#azure_blob_storage_container_name}
  */
  readonly azureBlobStorageContainerName: string;
  /**
  * This is Azure Blob Storage endpoint domain name. Leave default value (or leave it empty if run container from command line) to use Microsoft native from example.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#azure_blob_storage_endpoint_domain_name DestinationAzureBlobStorage#azure_blob_storage_endpoint_domain_name}
  */
  readonly azureBlobStorageEndpointDomainName?: string;
  /**
  * The amount of megabytes after which the connector should spill the records in a new blob object. Make sure to configure size greater than individual records. Enter 0 if not applicable. Default: 500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#azure_blob_storage_spill_size DestinationAzureBlobStorage#azure_blob_storage_spill_size}
  */
  readonly azureBlobStorageSpillSize?: number;
  /**
  * Format of the data output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#format DestinationAzureBlobStorage#format}
  */
  readonly format: DestinationAzureBlobStorageConfigurationFormat;
  /**
  * A shared access signature (SAS) provides secure delegated access to resources in your storage account. Read more <a href="https://learn.microsoft.com/en-gb/azure/storage/common/storage-sas-overview?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&bc=%2Fazure%2Fstorage%2Fblobs%2Fbreadcrumb%2Ftoc.json">here</a>. If you set this value, you must not set the account key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#shared_access_signature DestinationAzureBlobStorage#shared_access_signature}
  */
  readonly sharedAccessSignature?: string;
}

export function destinationAzureBlobStorageConfigurationToTerraform(struct?: DestinationAzureBlobStorageConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_blob_storage_account_key: cdktf.stringToTerraform(struct!.azureBlobStorageAccountKey),
    azure_blob_storage_account_name: cdktf.stringToTerraform(struct!.azureBlobStorageAccountName),
    azure_blob_storage_container_name: cdktf.stringToTerraform(struct!.azureBlobStorageContainerName),
    azure_blob_storage_endpoint_domain_name: cdktf.stringToTerraform(struct!.azureBlobStorageEndpointDomainName),
    azure_blob_storage_spill_size: cdktf.numberToTerraform(struct!.azureBlobStorageSpillSize),
    format: destinationAzureBlobStorageConfigurationFormatToTerraform(struct!.format),
    shared_access_signature: cdktf.stringToTerraform(struct!.sharedAccessSignature),
  }
}


export function destinationAzureBlobStorageConfigurationToHclTerraform(struct?: DestinationAzureBlobStorageConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    azure_blob_storage_endpoint_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.azureBlobStorageEndpointDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_blob_storage_spill_size: {
      value: cdktf.numberToHclTerraform(struct!.azureBlobStorageSpillSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    format: {
      value: destinationAzureBlobStorageConfigurationFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationAzureBlobStorageConfigurationFormat",
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

export class DestinationAzureBlobStorageConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAzureBlobStorageConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._azureBlobStorageEndpointDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobStorageEndpointDomainName = this._azureBlobStorageEndpointDomainName;
    }
    if (this._azureBlobStorageSpillSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobStorageSpillSize = this._azureBlobStorageSpillSize;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._sharedAccessSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedAccessSignature = this._sharedAccessSignature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAzureBlobStorageConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureBlobStorageAccountKey = undefined;
      this._azureBlobStorageAccountName = undefined;
      this._azureBlobStorageContainerName = undefined;
      this._azureBlobStorageEndpointDomainName = undefined;
      this._azureBlobStorageSpillSize = undefined;
      this._format.internalValue = undefined;
      this._sharedAccessSignature = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureBlobStorageAccountKey = value.azureBlobStorageAccountKey;
      this._azureBlobStorageAccountName = value.azureBlobStorageAccountName;
      this._azureBlobStorageContainerName = value.azureBlobStorageContainerName;
      this._azureBlobStorageEndpointDomainName = value.azureBlobStorageEndpointDomainName;
      this._azureBlobStorageSpillSize = value.azureBlobStorageSpillSize;
      this._format.internalValue = value.format;
      this._sharedAccessSignature = value.sharedAccessSignature;
    }
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

  // azure_blob_storage_endpoint_domain_name - computed: false, optional: true, required: false
  private _azureBlobStorageEndpointDomainName?: string; 
  public get azureBlobStorageEndpointDomainName() {
    return this.getStringAttribute('azure_blob_storage_endpoint_domain_name');
  }
  public set azureBlobStorageEndpointDomainName(value: string) {
    this._azureBlobStorageEndpointDomainName = value;
  }
  public resetAzureBlobStorageEndpointDomainName() {
    this._azureBlobStorageEndpointDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageEndpointDomainNameInput() {
    return this._azureBlobStorageEndpointDomainName;
  }

  // azure_blob_storage_spill_size - computed: true, optional: true, required: false
  private _azureBlobStorageSpillSize?: number; 
  public get azureBlobStorageSpillSize() {
    return this.getNumberAttribute('azure_blob_storage_spill_size');
  }
  public set azureBlobStorageSpillSize(value: number) {
    this._azureBlobStorageSpillSize = value;
  }
  public resetAzureBlobStorageSpillSize() {
    this._azureBlobStorageSpillSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageSpillSizeInput() {
    return this._azureBlobStorageSpillSize;
  }

  // format - computed: false, optional: false, required: true
  private _format = new DestinationAzureBlobStorageConfigurationFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: DestinationAzureBlobStorageConfigurationFormat) {
    this._format.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
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
export interface DestinationAzureBlobStorageResourceAllocationDefault {
}

export function destinationAzureBlobStorageResourceAllocationDefaultToTerraform(struct?: DestinationAzureBlobStorageResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationAzureBlobStorageResourceAllocationDefaultToHclTerraform(struct?: DestinationAzureBlobStorageResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationAzureBlobStorageResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAzureBlobStorageResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAzureBlobStorageResourceAllocationDefault | undefined) {
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
export interface DestinationAzureBlobStorageResourceAllocationJobSpecificResourceRequirements {
}

export function destinationAzureBlobStorageResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationAzureBlobStorageResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationAzureBlobStorageResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationAzureBlobStorageResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationAzureBlobStorageResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAzureBlobStorageResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAzureBlobStorageResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface DestinationAzureBlobStorageResourceAllocationJobSpecific {
}

export function destinationAzureBlobStorageResourceAllocationJobSpecificToTerraform(struct?: DestinationAzureBlobStorageResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationAzureBlobStorageResourceAllocationJobSpecificToHclTerraform(struct?: DestinationAzureBlobStorageResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationAzureBlobStorageResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationAzureBlobStorageResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAzureBlobStorageResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new DestinationAzureBlobStorageResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationAzureBlobStorageResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationAzureBlobStorageResourceAllocationJobSpecificOutputReference {
    return new DestinationAzureBlobStorageResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationAzureBlobStorageResourceAllocation {
}

export function destinationAzureBlobStorageResourceAllocationToTerraform(struct?: DestinationAzureBlobStorageResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationAzureBlobStorageResourceAllocationToHclTerraform(struct?: DestinationAzureBlobStorageResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationAzureBlobStorageResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAzureBlobStorageResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAzureBlobStorageResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationAzureBlobStorageResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationAzureBlobStorageResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage airbyte_destination_azure_blob_storage}
*/
export class DestinationAzureBlobStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_azure_blob_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationAzureBlobStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationAzureBlobStorage to import
  * @param importFromId The id of the existing DestinationAzureBlobStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationAzureBlobStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_azure_blob_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_azure_blob_storage airbyte_destination_azure_blob_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationAzureBlobStorageConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationAzureBlobStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_azure_blob_storage',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
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
  private _configuration = new DestinationAzureBlobStorageConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationAzureBlobStorageConfiguration) {
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
  private _resourceAllocation = new DestinationAzureBlobStorageResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: destinationAzureBlobStorageConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationAzureBlobStorageConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationAzureBlobStorageConfiguration",
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
