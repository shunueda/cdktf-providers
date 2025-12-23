// https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorS3Config extends cdktf.TerraformMetaArguments {
  /**
  * S3 bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#bucket ConnectorS3#bucket}
  */
  readonly bucket: string;
  /**
  * S3 authentication credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#credentials ConnectorS3#credentials}
  */
  readonly credentials: ConnectorS3Credentials;
  /**
  * File format definition (CSV or PARQUET).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#definition ConnectorS3#definition}
  */
  readonly definition: ConnectorS3Definition;
  /**
  * Whether the connector is enabled (default: true) .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#enabled ConnectorS3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Cron expression for sync frequency: @always, @5minutes, @10minutes, @15minutes, @30minutes, @hourly, @daily, @weekly, @monthly, @annually, @yearly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#frequency ConnectorS3#frequency}
  */
  readonly frequency?: string;
  /**
  * Human-readable name for the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#name ConnectorS3#name}
  */
  readonly name: string;
  /**
  * Handle conflicts by doing nothing (ignore conflicting rows). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#on_conflict_do_nothing ConnectorS3#on_conflict_do_nothing}
  */
  readonly onConflictDoNothing?: boolean | cdktf.IResolvable;
  /**
  * Pattern to match S3 object keys (supports wildcards).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#pattern ConnectorS3#pattern}
  */
  readonly pattern: string;
  /**
  * The service ID to attach the connector to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#service_id ConnectorS3#service_id}
  */
  readonly serviceId: string;
  /**
  * Target table identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#table_identifier ConnectorS3#table_identifier}
  */
  readonly tableIdentifier: ConnectorS3TableIdentifier;
}
export interface ConnectorS3Credentials {
  /**
  * IAM role ARN (required if type is 'RoleARN').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#role_arn ConnectorS3#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Credential type: 'Public' or 'RoleARN'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#type ConnectorS3#type}
  */
  readonly type: string;
}

export function connectorS3CredentialsToTerraform(struct?: ConnectorS3Credentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function connectorS3CredentialsToHclTerraform(struct?: ConnectorS3Credentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
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

export class ConnectorS3CredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorS3Credentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorS3Credentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._type = value.type;
    }
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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
}
export interface ConnectorS3DefinitionCsvColumnMappings {
  /**
  * Destination column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#destination ConnectorS3#destination}
  */
  readonly destination: string;
  /**
  * Source column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#source ConnectorS3#source}
  */
  readonly source: string;
}

export function connectorS3DefinitionCsvColumnMappingsToTerraform(struct?: ConnectorS3DefinitionCsvColumnMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function connectorS3DefinitionCsvColumnMappingsToHclTerraform(struct?: ConnectorS3DefinitionCsvColumnMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorS3DefinitionCsvColumnMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorS3DefinitionCsvColumnMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorS3DefinitionCsvColumnMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._source = value.source;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ConnectorS3DefinitionCsvColumnMappingsList extends cdktf.ComplexList {
  public internalValue? : ConnectorS3DefinitionCsvColumnMappings[] | cdktf.IResolvable

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
  public get(index: number): ConnectorS3DefinitionCsvColumnMappingsOutputReference {
    return new ConnectorS3DefinitionCsvColumnMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorS3DefinitionCsv {
  /**
  * Automatically map columns by name (mutually exclusive with column_names and column_mappings).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#auto_column_mapping ConnectorS3#auto_column_mapping}
  */
  readonly autoColumnMapping?: boolean | cdktf.IResolvable;
  /**
  * Column mappings from source to destination (mutually exclusive with column_names and auto_column_mapping).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#column_mappings ConnectorS3#column_mappings}
  */
  readonly columnMappings?: ConnectorS3DefinitionCsvColumnMappings[] | cdktf.IResolvable;
  /**
  * Column names (mutually exclusive with column_mappings and auto_column_mapping).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#column_names ConnectorS3#column_names}
  */
  readonly columnNames?: string[];
  /**
  * CSV delimiter (default: ',').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#delimiter ConnectorS3#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Whether to skip the first row as header (default: false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#skip_header ConnectorS3#skip_header}
  */
  readonly skipHeader?: boolean | cdktf.IResolvable;
}

export function connectorS3DefinitionCsvToTerraform(struct?: ConnectorS3DefinitionCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_column_mapping: cdktf.booleanToTerraform(struct!.autoColumnMapping),
    column_mappings: cdktf.listMapper(connectorS3DefinitionCsvColumnMappingsToTerraform, false)(struct!.columnMappings),
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    skip_header: cdktf.booleanToTerraform(struct!.skipHeader),
  }
}


export function connectorS3DefinitionCsvToHclTerraform(struct?: ConnectorS3DefinitionCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_column_mapping: {
      value: cdktf.booleanToHclTerraform(struct!.autoColumnMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    column_mappings: {
      value: cdktf.listMapperHcl(connectorS3DefinitionCsvColumnMappingsToHclTerraform, false)(struct!.columnMappings),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorS3DefinitionCsvColumnMappingsList",
    },
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_header: {
      value: cdktf.booleanToHclTerraform(struct!.skipHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorS3DefinitionCsvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorS3DefinitionCsv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoColumnMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoColumnMapping = this._autoColumnMapping;
    }
    if (this._columnMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnMappings = this._columnMappings?.internalValue;
    }
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._skipHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipHeader = this._skipHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorS3DefinitionCsv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoColumnMapping = undefined;
      this._columnMappings.internalValue = undefined;
      this._columnNames = undefined;
      this._delimiter = undefined;
      this._skipHeader = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoColumnMapping = value.autoColumnMapping;
      this._columnMappings.internalValue = value.columnMappings;
      this._columnNames = value.columnNames;
      this._delimiter = value.delimiter;
      this._skipHeader = value.skipHeader;
    }
  }

  // auto_column_mapping - computed: true, optional: true, required: false
  private _autoColumnMapping?: boolean | cdktf.IResolvable; 
  public get autoColumnMapping() {
    return this.getBooleanAttribute('auto_column_mapping');
  }
  public set autoColumnMapping(value: boolean | cdktf.IResolvable) {
    this._autoColumnMapping = value;
  }
  public resetAutoColumnMapping() {
    this._autoColumnMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoColumnMappingInput() {
    return this._autoColumnMapping;
  }

  // column_mappings - computed: false, optional: true, required: false
  private _columnMappings = new ConnectorS3DefinitionCsvColumnMappingsList(this, "column_mappings", false);
  public get columnMappings() {
    return this._columnMappings;
  }
  public putColumnMappings(value: ConnectorS3DefinitionCsvColumnMappings[] | cdktf.IResolvable) {
    this._columnMappings.internalValue = value;
  }
  public resetColumnMappings() {
    this._columnMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnMappingsInput() {
    return this._columnMappings.internalValue;
  }

  // column_names - computed: false, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // skip_header - computed: true, optional: true, required: false
  private _skipHeader?: boolean | cdktf.IResolvable; 
  public get skipHeader() {
    return this.getBooleanAttribute('skip_header');
  }
  public set skipHeader(value: boolean | cdktf.IResolvable) {
    this._skipHeader = value;
  }
  public resetSkipHeader() {
    this._skipHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipHeaderInput() {
    return this._skipHeader;
  }
}
export interface ConnectorS3DefinitionParquetColumnMappings {
  /**
  * Destination column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#destination ConnectorS3#destination}
  */
  readonly destination: string;
  /**
  * Source column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#source ConnectorS3#source}
  */
  readonly source: string;
}

export function connectorS3DefinitionParquetColumnMappingsToTerraform(struct?: ConnectorS3DefinitionParquetColumnMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function connectorS3DefinitionParquetColumnMappingsToHclTerraform(struct?: ConnectorS3DefinitionParquetColumnMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorS3DefinitionParquetColumnMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorS3DefinitionParquetColumnMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorS3DefinitionParquetColumnMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._source = value.source;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ConnectorS3DefinitionParquetColumnMappingsList extends cdktf.ComplexList {
  public internalValue? : ConnectorS3DefinitionParquetColumnMappings[] | cdktf.IResolvable

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
  public get(index: number): ConnectorS3DefinitionParquetColumnMappingsOutputReference {
    return new ConnectorS3DefinitionParquetColumnMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorS3DefinitionParquet {
  /**
  * Automatically map columns by name (mutually exclusive with column_mappings).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#auto_column_mapping ConnectorS3#auto_column_mapping}
  */
  readonly autoColumnMapping?: boolean | cdktf.IResolvable;
  /**
  * Column mappings from source to destination (mutually exclusive with auto_column_mapping).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#column_mappings ConnectorS3#column_mappings}
  */
  readonly columnMappings?: ConnectorS3DefinitionParquetColumnMappings[] | cdktf.IResolvable;
}

export function connectorS3DefinitionParquetToTerraform(struct?: ConnectorS3DefinitionParquet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_column_mapping: cdktf.booleanToTerraform(struct!.autoColumnMapping),
    column_mappings: cdktf.listMapper(connectorS3DefinitionParquetColumnMappingsToTerraform, false)(struct!.columnMappings),
  }
}


export function connectorS3DefinitionParquetToHclTerraform(struct?: ConnectorS3DefinitionParquet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_column_mapping: {
      value: cdktf.booleanToHclTerraform(struct!.autoColumnMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    column_mappings: {
      value: cdktf.listMapperHcl(connectorS3DefinitionParquetColumnMappingsToHclTerraform, false)(struct!.columnMappings),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorS3DefinitionParquetColumnMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorS3DefinitionParquetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorS3DefinitionParquet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoColumnMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoColumnMapping = this._autoColumnMapping;
    }
    if (this._columnMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnMappings = this._columnMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorS3DefinitionParquet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoColumnMapping = undefined;
      this._columnMappings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoColumnMapping = value.autoColumnMapping;
      this._columnMappings.internalValue = value.columnMappings;
    }
  }

  // auto_column_mapping - computed: true, optional: true, required: false
  private _autoColumnMapping?: boolean | cdktf.IResolvable; 
  public get autoColumnMapping() {
    return this.getBooleanAttribute('auto_column_mapping');
  }
  public set autoColumnMapping(value: boolean | cdktf.IResolvable) {
    this._autoColumnMapping = value;
  }
  public resetAutoColumnMapping() {
    this._autoColumnMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoColumnMappingInput() {
    return this._autoColumnMapping;
  }

  // column_mappings - computed: false, optional: true, required: false
  private _columnMappings = new ConnectorS3DefinitionParquetColumnMappingsList(this, "column_mappings", false);
  public get columnMappings() {
    return this._columnMappings;
  }
  public putColumnMappings(value: ConnectorS3DefinitionParquetColumnMappings[] | cdktf.IResolvable) {
    this._columnMappings.internalValue = value;
  }
  public resetColumnMappings() {
    this._columnMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnMappingsInput() {
    return this._columnMappings.internalValue;
  }
}
export interface ConnectorS3Definition {
  /**
  * CSV file configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#csv ConnectorS3#csv}
  */
  readonly csv?: ConnectorS3DefinitionCsv;
  /**
  * Parquet file configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#parquet ConnectorS3#parquet}
  */
  readonly parquet?: ConnectorS3DefinitionParquet;
  /**
  * File type: 'CSV' or 'PARQUET'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#type ConnectorS3#type}
  */
  readonly type: string;
}

export function connectorS3DefinitionToTerraform(struct?: ConnectorS3Definition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csv: connectorS3DefinitionCsvToTerraform(struct!.csv),
    parquet: connectorS3DefinitionParquetToTerraform(struct!.parquet),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function connectorS3DefinitionToHclTerraform(struct?: ConnectorS3Definition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csv: {
      value: connectorS3DefinitionCsvToHclTerraform(struct!.csv),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectorS3DefinitionCsv",
    },
    parquet: {
      value: connectorS3DefinitionParquetToHclTerraform(struct!.parquet),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectorS3DefinitionParquet",
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

export class ConnectorS3DefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorS3Definition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    if (this._parquet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquet = this._parquet?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorS3Definition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csv.internalValue = undefined;
      this._parquet.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csv.internalValue = value.csv;
      this._parquet.internalValue = value.parquet;
      this._type = value.type;
    }
  }

  // csv - computed: false, optional: true, required: false
  private _csv = new ConnectorS3DefinitionCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }
  public putCsv(value: ConnectorS3DefinitionCsv) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }

  // parquet - computed: false, optional: true, required: false
  private _parquet = new ConnectorS3DefinitionParquetOutputReference(this, "parquet");
  public get parquet() {
    return this._parquet;
  }
  public putParquet(value: ConnectorS3DefinitionParquet) {
    this._parquet.internalValue = value;
  }
  public resetParquet() {
    this._parquet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetInput() {
    return this._parquet.internalValue;
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
}
export interface ConnectorS3TableIdentifier {
  /**
  * Schema name (defaults to 'public').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#schema_name ConnectorS3#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#table_name ConnectorS3#table_name}
  */
  readonly tableName: string;
}

export function connectorS3TableIdentifierToTerraform(struct?: ConnectorS3TableIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function connectorS3TableIdentifierToHclTerraform(struct?: ConnectorS3TableIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorS3TableIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorS3TableIdentifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorS3TableIdentifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schemaName = undefined;
      this._tableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schemaName = value.schemaName;
      this._tableName = value.tableName;
    }
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3 timescale_connector_s3}
*/
export class ConnectorS3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "timescale_connector_s3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorS3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorS3 to import
  * @param importFromId The id of the existing ConnectorS3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorS3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "timescale_connector_s3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/connector_s3 timescale_connector_s3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorS3Config
  */
  public constructor(scope: Construct, id: string, config: ConnectorS3Config) {
    super(scope, id, {
      terraformResourceType: 'timescale_connector_s3',
      terraformGeneratorMetadata: {
        providerName: 'timescale',
        providerVersion: '2.7.0',
        providerVersionConstraint: '2.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._credentials.internalValue = config.credentials;
    this._definition.internalValue = config.definition;
    this._enabled = config.enabled;
    this._frequency = config.frequency;
    this._name = config.name;
    this._onConflictDoNothing = config.onConflictDoNothing;
    this._pattern = config.pattern;
    this._serviceId = config.serviceId;
    this._tableIdentifier.internalValue = config.tableIdentifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new ConnectorS3CredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: ConnectorS3Credentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // definition - computed: false, optional: false, required: true
  private _definition = new ConnectorS3DefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: ConnectorS3Definition) {
    this._definition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // on_conflict_do_nothing - computed: true, optional: true, required: false
  private _onConflictDoNothing?: boolean | cdktf.IResolvable; 
  public get onConflictDoNothing() {
    return this.getBooleanAttribute('on_conflict_do_nothing');
  }
  public set onConflictDoNothing(value: boolean | cdktf.IResolvable) {
    this._onConflictDoNothing = value;
  }
  public resetOnConflictDoNothing() {
    this._onConflictDoNothing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onConflictDoNothingInput() {
    return this._onConflictDoNothing;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // table_identifier - computed: false, optional: false, required: true
  private _tableIdentifier = new ConnectorS3TableIdentifierOutputReference(this, "table_identifier");
  public get tableIdentifier() {
    return this._tableIdentifier;
  }
  public putTableIdentifier(value: ConnectorS3TableIdentifier) {
    this._tableIdentifier.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdentifierInput() {
    return this._tableIdentifier.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      credentials: connectorS3CredentialsToTerraform(this._credentials.internalValue),
      definition: connectorS3DefinitionToTerraform(this._definition.internalValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      frequency: cdktf.stringToTerraform(this._frequency),
      name: cdktf.stringToTerraform(this._name),
      on_conflict_do_nothing: cdktf.booleanToTerraform(this._onConflictDoNothing),
      pattern: cdktf.stringToTerraform(this._pattern),
      service_id: cdktf.stringToTerraform(this._serviceId),
      table_identifier: connectorS3TableIdentifierToTerraform(this._tableIdentifier.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: connectorS3CredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorS3Credentials",
      },
      definition: {
        value: connectorS3DefinitionToHclTerraform(this._definition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorS3Definition",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
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
      on_conflict_do_nothing: {
        value: cdktf.booleanToHclTerraform(this._onConflictDoNothing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_identifier: {
        value: connectorS3TableIdentifierToHclTerraform(this._tableIdentifier.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorS3TableIdentifier",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
