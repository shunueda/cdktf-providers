// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLabelingServiceDatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#annotation_format DataLabelingServiceDataset#annotation_format}
  */
  readonly annotationFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#compartment_id DataLabelingServiceDataset#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#defined_tags DataLabelingServiceDataset#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#description DataLabelingServiceDataset#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#display_name DataLabelingServiceDataset#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#freeform_tags DataLabelingServiceDataset#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#id DataLabelingServiceDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#labeling_instructions DataLabelingServiceDataset#labeling_instructions}
  */
  readonly labelingInstructions?: string;
  /**
  * dataset_format_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#dataset_format_details DataLabelingServiceDataset#dataset_format_details}
  */
  readonly datasetFormatDetails: DataLabelingServiceDatasetDatasetFormatDetails;
  /**
  * dataset_source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#dataset_source_details DataLabelingServiceDataset#dataset_source_details}
  */
  readonly datasetSourceDetails: DataLabelingServiceDatasetDatasetSourceDetails;
  /**
  * initial_import_dataset_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#initial_import_dataset_configuration DataLabelingServiceDataset#initial_import_dataset_configuration}
  */
  readonly initialImportDatasetConfiguration?: DataLabelingServiceDatasetInitialImportDatasetConfiguration;
  /**
  * initial_record_generation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#initial_record_generation_configuration DataLabelingServiceDataset#initial_record_generation_configuration}
  */
  readonly initialRecordGenerationConfiguration?: DataLabelingServiceDatasetInitialRecordGenerationConfiguration;
  /**
  * label_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#label_set DataLabelingServiceDataset#label_set}
  */
  readonly labelSet: DataLabelingServiceDatasetLabelSet;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#timeouts DataLabelingServiceDataset#timeouts}
  */
  readonly timeouts?: DataLabelingServiceDatasetTimeouts;
}
export interface DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#column_delimiter DataLabelingServiceDataset#column_delimiter}
  */
  readonly columnDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#column_index DataLabelingServiceDataset#column_index}
  */
  readonly columnIndex: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#column_name DataLabelingServiceDataset#column_name}
  */
  readonly columnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#escape_character DataLabelingServiceDataset#escape_character}
  */
  readonly escapeCharacter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}
  */
  readonly formatType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#line_delimiter DataLabelingServiceDataset#line_delimiter}
  */
  readonly lineDelimiter?: string;
}

export function dataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataToTerraform(struct?: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference | DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_delimiter: cdktf.stringToTerraform(struct!.columnDelimiter),
    column_index: cdktf.numberToTerraform(struct!.columnIndex),
    column_name: cdktf.stringToTerraform(struct!.columnName),
    escape_character: cdktf.stringToTerraform(struct!.escapeCharacter),
    format_type: cdktf.stringToTerraform(struct!.formatType),
    line_delimiter: cdktf.stringToTerraform(struct!.lineDelimiter),
  }
}


export function dataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataToHclTerraform(struct?: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference | DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.columnDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_index: {
      value: cdktf.numberToHclTerraform(struct!.columnIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escape_character: {
      value: cdktf.stringToHclTerraform(struct!.escapeCharacter),
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
    line_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.lineDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDelimiter = this._columnDelimiter;
    }
    if (this._columnIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnIndex = this._columnIndex;
    }
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._escapeCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapeCharacter = this._escapeCharacter;
    }
    if (this._formatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatType = this._formatType;
    }
    if (this._lineDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineDelimiter = this._lineDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnDelimiter = undefined;
      this._columnIndex = undefined;
      this._columnName = undefined;
      this._escapeCharacter = undefined;
      this._formatType = undefined;
      this._lineDelimiter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnDelimiter = value.columnDelimiter;
      this._columnIndex = value.columnIndex;
      this._columnName = value.columnName;
      this._escapeCharacter = value.escapeCharacter;
      this._formatType = value.formatType;
      this._lineDelimiter = value.lineDelimiter;
    }
  }

  // column_delimiter - computed: true, optional: true, required: false
  private _columnDelimiter?: string; 
  public get columnDelimiter() {
    return this.getStringAttribute('column_delimiter');
  }
  public set columnDelimiter(value: string) {
    this._columnDelimiter = value;
  }
  public resetColumnDelimiter() {
    this._columnDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDelimiterInput() {
    return this._columnDelimiter;
  }

  // column_index - computed: false, optional: false, required: true
  private _columnIndex?: number; 
  public get columnIndex() {
    return this.getNumberAttribute('column_index');
  }
  public set columnIndex(value: number) {
    this._columnIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnIndexInput() {
    return this._columnIndex;
  }

  // column_name - computed: true, optional: true, required: false
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // escape_character - computed: true, optional: true, required: false
  private _escapeCharacter?: string; 
  public get escapeCharacter() {
    return this.getStringAttribute('escape_character');
  }
  public set escapeCharacter(value: string) {
    this._escapeCharacter = value;
  }
  public resetEscapeCharacter() {
    this._escapeCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeCharacterInput() {
    return this._escapeCharacter;
  }

  // format_type - computed: false, optional: false, required: true
  private _formatType?: string; 
  public get formatType() {
    return this.getStringAttribute('format_type');
  }
  public set formatType(value: string) {
    this._formatType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTypeInput() {
    return this._formatType;
  }

  // line_delimiter - computed: true, optional: true, required: false
  private _lineDelimiter?: string; 
  public get lineDelimiter() {
    return this.getStringAttribute('line_delimiter');
  }
  public set lineDelimiter(value: string) {
    this._lineDelimiter = value;
  }
  public resetLineDelimiter() {
    this._lineDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineDelimiterInput() {
    return this._lineDelimiter;
  }
}
export interface DataLabelingServiceDatasetDatasetFormatDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}
  */
  readonly formatType: string;
  /**
  * text_file_type_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#text_file_type_metadata DataLabelingServiceDataset#text_file_type_metadata}
  */
  readonly textFileTypeMetadata?: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata;
}

export function dataLabelingServiceDatasetDatasetFormatDetailsToTerraform(struct?: DataLabelingServiceDatasetDatasetFormatDetailsOutputReference | DataLabelingServiceDatasetDatasetFormatDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format_type: cdktf.stringToTerraform(struct!.formatType),
    text_file_type_metadata: dataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataToTerraform(struct!.textFileTypeMetadata),
  }
}


export function dataLabelingServiceDatasetDatasetFormatDetailsToHclTerraform(struct?: DataLabelingServiceDatasetDatasetFormatDetailsOutputReference | DataLabelingServiceDatasetDatasetFormatDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format_type: {
      value: cdktf.stringToHclTerraform(struct!.formatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_file_type_metadata: {
      value: dataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataToHclTerraform(struct!.textFileTypeMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLabelingServiceDatasetDatasetFormatDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLabelingServiceDatasetDatasetFormatDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatType = this._formatType;
    }
    if (this._textFileTypeMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textFileTypeMetadata = this._textFileTypeMetadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLabelingServiceDatasetDatasetFormatDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._formatType = undefined;
      this._textFileTypeMetadata.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._formatType = value.formatType;
      this._textFileTypeMetadata.internalValue = value.textFileTypeMetadata;
    }
  }

  // format_type - computed: false, optional: false, required: true
  private _formatType?: string; 
  public get formatType() {
    return this.getStringAttribute('format_type');
  }
  public set formatType(value: string) {
    this._formatType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTypeInput() {
    return this._formatType;
  }

  // text_file_type_metadata - computed: false, optional: true, required: false
  private _textFileTypeMetadata = new DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference(this, "text_file_type_metadata");
  public get textFileTypeMetadata() {
    return this._textFileTypeMetadata;
  }
  public putTextFileTypeMetadata(value: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata) {
    this._textFileTypeMetadata.internalValue = value;
  }
  public resetTextFileTypeMetadata() {
    this._textFileTypeMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFileTypeMetadataInput() {
    return this._textFileTypeMetadata.internalValue;
  }
}
export interface DataLabelingServiceDatasetDatasetSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#prefix DataLabelingServiceDataset#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}
  */
  readonly sourceType: string;
}

export function dataLabelingServiceDatasetDatasetSourceDetailsToTerraform(struct?: DataLabelingServiceDatasetDatasetSourceDetailsOutputReference | DataLabelingServiceDatasetDatasetSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function dataLabelingServiceDatasetDatasetSourceDetailsToHclTerraform(struct?: DataLabelingServiceDatasetDatasetSourceDetailsOutputReference | DataLabelingServiceDatasetDatasetSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
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
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLabelingServiceDatasetDatasetSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLabelingServiceDatasetDatasetSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLabelingServiceDatasetDatasetSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._namespace = undefined;
      this._prefix = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._namespace = value.namespace;
      this._prefix = value.prefix;
      this._sourceType = value.sourceType;
    }
  }

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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#name DataLabelingServiceDataset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#version DataLabelingServiceDataset#version}
  */
  readonly version?: string;
}

export function dataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatToTerraform(struct?: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference | DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatToHclTerraform(struct?: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference | DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat): any {
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

export class DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
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

  // version - computed: true, optional: true, required: false
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
export interface DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#path DataLabelingServiceDataset#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}
  */
  readonly sourceType: string;
}

export function dataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathToTerraform(struct?: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference | DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    path: cdktf.stringToTerraform(struct!.path),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function dataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathToHclTerraform(struct?: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference | DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._namespace = undefined;
      this._path = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._namespace = value.namespace;
      this._path = value.path;
      this._sourceType = value.sourceType;
    }
  }

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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface DataLabelingServiceDatasetInitialImportDatasetConfiguration {
  /**
  * import_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#import_format DataLabelingServiceDataset#import_format}
  */
  readonly importFormat: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat;
  /**
  * import_metadata_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#import_metadata_path DataLabelingServiceDataset#import_metadata_path}
  */
  readonly importMetadataPath: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath;
}

export function dataLabelingServiceDatasetInitialImportDatasetConfigurationToTerraform(struct?: DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference | DataLabelingServiceDatasetInitialImportDatasetConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    import_format: dataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatToTerraform(struct!.importFormat),
    import_metadata_path: dataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathToTerraform(struct!.importMetadataPath),
  }
}


export function dataLabelingServiceDatasetInitialImportDatasetConfigurationToHclTerraform(struct?: DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference | DataLabelingServiceDatasetInitialImportDatasetConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    import_format: {
      value: dataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatToHclTerraform(struct!.importFormat),
      isBlock: true,
      type: "list",
      storageClassType: "DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList",
    },
    import_metadata_path: {
      value: dataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathToHclTerraform(struct!.importMetadataPath),
      isBlock: true,
      type: "list",
      storageClassType: "DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLabelingServiceDatasetInitialImportDatasetConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._importFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importFormat = this._importFormat?.internalValue;
    }
    if (this._importMetadataPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importMetadataPath = this._importMetadataPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLabelingServiceDatasetInitialImportDatasetConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._importFormat.internalValue = undefined;
      this._importMetadataPath.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._importFormat.internalValue = value.importFormat;
      this._importMetadataPath.internalValue = value.importMetadataPath;
    }
  }

  // import_format - computed: false, optional: false, required: true
  private _importFormat = new DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference(this, "import_format");
  public get importFormat() {
    return this._importFormat;
  }
  public putImportFormat(value: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat) {
    this._importFormat.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importFormatInput() {
    return this._importFormat.internalValue;
  }

  // import_metadata_path - computed: false, optional: false, required: true
  private _importMetadataPath = new DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference(this, "import_metadata_path");
  public get importMetadataPath() {
    return this._importMetadataPath;
  }
  public putImportMetadataPath(value: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath) {
    this._importMetadataPath.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importMetadataPathInput() {
    return this._importMetadataPath.internalValue;
  }
}
export interface DataLabelingServiceDatasetInitialRecordGenerationConfiguration {
}

export function dataLabelingServiceDatasetInitialRecordGenerationConfigurationToTerraform(struct?: DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference | DataLabelingServiceDatasetInitialRecordGenerationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLabelingServiceDatasetInitialRecordGenerationConfigurationToHclTerraform(struct?: DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference | DataLabelingServiceDatasetInitialRecordGenerationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLabelingServiceDatasetInitialRecordGenerationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLabelingServiceDatasetInitialRecordGenerationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLabelingServiceDatasetLabelSetItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#name DataLabelingServiceDataset#name}
  */
  readonly name: string;
}

export function dataLabelingServiceDatasetLabelSetItemsToTerraform(struct?: DataLabelingServiceDatasetLabelSetItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataLabelingServiceDatasetLabelSetItemsToHclTerraform(struct?: DataLabelingServiceDatasetLabelSetItems | cdktf.IResolvable): any {
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

export class DataLabelingServiceDatasetLabelSetItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLabelingServiceDatasetLabelSetItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataLabelingServiceDatasetLabelSetItems | cdktf.IResolvable | undefined) {
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

export class DataLabelingServiceDatasetLabelSetItemsList extends cdktf.ComplexList {
  public internalValue? : DataLabelingServiceDatasetLabelSetItems[] | cdktf.IResolvable

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
  public get(index: number): DataLabelingServiceDatasetLabelSetItemsOutputReference {
    return new DataLabelingServiceDatasetLabelSetItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLabelingServiceDatasetLabelSet {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#items DataLabelingServiceDataset#items}
  */
  readonly items: DataLabelingServiceDatasetLabelSetItems[] | cdktf.IResolvable;
}

export function dataLabelingServiceDatasetLabelSetToTerraform(struct?: DataLabelingServiceDatasetLabelSetOutputReference | DataLabelingServiceDatasetLabelSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataLabelingServiceDatasetLabelSetItemsToTerraform, true)(struct!.items),
  }
}


export function dataLabelingServiceDatasetLabelSetToHclTerraform(struct?: DataLabelingServiceDatasetLabelSetOutputReference | DataLabelingServiceDatasetLabelSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataLabelingServiceDatasetLabelSetItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataLabelingServiceDatasetLabelSetItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLabelingServiceDatasetLabelSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLabelingServiceDatasetLabelSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLabelingServiceDatasetLabelSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new DataLabelingServiceDatasetLabelSetItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataLabelingServiceDatasetLabelSetItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataLabelingServiceDatasetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#create DataLabelingServiceDataset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#delete DataLabelingServiceDataset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#update DataLabelingServiceDataset#update}
  */
  readonly update?: string;
}

export function dataLabelingServiceDatasetTimeoutsToTerraform(struct?: DataLabelingServiceDatasetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataLabelingServiceDatasetTimeoutsToHclTerraform(struct?: DataLabelingServiceDatasetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLabelingServiceDatasetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLabelingServiceDatasetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLabelingServiceDatasetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset oci_data_labeling_service_dataset}
*/
export class DataLabelingServiceDataset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_labeling_service_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLabelingServiceDataset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLabelingServiceDataset to import
  * @param importFromId The id of the existing DataLabelingServiceDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLabelingServiceDataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_labeling_service_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_labeling_service_dataset oci_data_labeling_service_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLabelingServiceDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: DataLabelingServiceDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_labeling_service_dataset',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotationFormat = config.annotationFormat;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._labelingInstructions = config.labelingInstructions;
    this._datasetFormatDetails.internalValue = config.datasetFormatDetails;
    this._datasetSourceDetails.internalValue = config.datasetSourceDetails;
    this._initialImportDatasetConfiguration.internalValue = config.initialImportDatasetConfiguration;
    this._initialRecordGenerationConfiguration.internalValue = config.initialRecordGenerationConfiguration;
    this._labelSet.internalValue = config.labelSet;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new cdktf.StringMap(this, "additional_properties");
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // annotation_format - computed: false, optional: false, required: true
  private _annotationFormat?: string; 
  public get annotationFormat() {
    return this.getStringAttribute('annotation_format');
  }
  public set annotationFormat(value: string) {
    this._annotationFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationFormatInput() {
    return this._annotationFormat;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labeling_instructions - computed: true, optional: true, required: false
  private _labelingInstructions?: string; 
  public get labelingInstructions() {
    return this.getStringAttribute('labeling_instructions');
  }
  public set labelingInstructions(value: string) {
    this._labelingInstructions = value;
  }
  public resetLabelingInstructions() {
    this._labelingInstructions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelingInstructionsInput() {
    return this._labelingInstructions;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecycle_substate - computed: true, optional: false, required: false
  public get lifecycleSubstate() {
    return this.getStringAttribute('lifecycle_substate');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // dataset_format_details - computed: false, optional: false, required: true
  private _datasetFormatDetails = new DataLabelingServiceDatasetDatasetFormatDetailsOutputReference(this, "dataset_format_details");
  public get datasetFormatDetails() {
    return this._datasetFormatDetails;
  }
  public putDatasetFormatDetails(value: DataLabelingServiceDatasetDatasetFormatDetails) {
    this._datasetFormatDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetFormatDetailsInput() {
    return this._datasetFormatDetails.internalValue;
  }

  // dataset_source_details - computed: false, optional: false, required: true
  private _datasetSourceDetails = new DataLabelingServiceDatasetDatasetSourceDetailsOutputReference(this, "dataset_source_details");
  public get datasetSourceDetails() {
    return this._datasetSourceDetails;
  }
  public putDatasetSourceDetails(value: DataLabelingServiceDatasetDatasetSourceDetails) {
    this._datasetSourceDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetSourceDetailsInput() {
    return this._datasetSourceDetails.internalValue;
  }

  // initial_import_dataset_configuration - computed: false, optional: true, required: false
  private _initialImportDatasetConfiguration = new DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference(this, "initial_import_dataset_configuration");
  public get initialImportDatasetConfiguration() {
    return this._initialImportDatasetConfiguration;
  }
  public putInitialImportDatasetConfiguration(value: DataLabelingServiceDatasetInitialImportDatasetConfiguration) {
    this._initialImportDatasetConfiguration.internalValue = value;
  }
  public resetInitialImportDatasetConfiguration() {
    this._initialImportDatasetConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialImportDatasetConfigurationInput() {
    return this._initialImportDatasetConfiguration.internalValue;
  }

  // initial_record_generation_configuration - computed: false, optional: true, required: false
  private _initialRecordGenerationConfiguration = new DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference(this, "initial_record_generation_configuration");
  public get initialRecordGenerationConfiguration() {
    return this._initialRecordGenerationConfiguration;
  }
  public putInitialRecordGenerationConfiguration(value: DataLabelingServiceDatasetInitialRecordGenerationConfiguration) {
    this._initialRecordGenerationConfiguration.internalValue = value;
  }
  public resetInitialRecordGenerationConfiguration() {
    this._initialRecordGenerationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialRecordGenerationConfigurationInput() {
    return this._initialRecordGenerationConfiguration.internalValue;
  }

  // label_set - computed: false, optional: false, required: true
  private _labelSet = new DataLabelingServiceDatasetLabelSetOutputReference(this, "label_set");
  public get labelSet() {
    return this._labelSet;
  }
  public putLabelSet(value: DataLabelingServiceDatasetLabelSet) {
    this._labelSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSetInput() {
    return this._labelSet.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataLabelingServiceDatasetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataLabelingServiceDatasetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation_format: cdktf.stringToTerraform(this._annotationFormat),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      labeling_instructions: cdktf.stringToTerraform(this._labelingInstructions),
      dataset_format_details: dataLabelingServiceDatasetDatasetFormatDetailsToTerraform(this._datasetFormatDetails.internalValue),
      dataset_source_details: dataLabelingServiceDatasetDatasetSourceDetailsToTerraform(this._datasetSourceDetails.internalValue),
      initial_import_dataset_configuration: dataLabelingServiceDatasetInitialImportDatasetConfigurationToTerraform(this._initialImportDatasetConfiguration.internalValue),
      initial_record_generation_configuration: dataLabelingServiceDatasetInitialRecordGenerationConfigurationToTerraform(this._initialRecordGenerationConfiguration.internalValue),
      label_set: dataLabelingServiceDatasetLabelSetToTerraform(this._labelSet.internalValue),
      timeouts: dataLabelingServiceDatasetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation_format: {
        value: cdktf.stringToHclTerraform(this._annotationFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labeling_instructions: {
        value: cdktf.stringToHclTerraform(this._labelingInstructions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset_format_details: {
        value: dataLabelingServiceDatasetDatasetFormatDetailsToHclTerraform(this._datasetFormatDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLabelingServiceDatasetDatasetFormatDetailsList",
      },
      dataset_source_details: {
        value: dataLabelingServiceDatasetDatasetSourceDetailsToHclTerraform(this._datasetSourceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLabelingServiceDatasetDatasetSourceDetailsList",
      },
      initial_import_dataset_configuration: {
        value: dataLabelingServiceDatasetInitialImportDatasetConfigurationToHclTerraform(this._initialImportDatasetConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLabelingServiceDatasetInitialImportDatasetConfigurationList",
      },
      initial_record_generation_configuration: {
        value: dataLabelingServiceDatasetInitialRecordGenerationConfigurationToHclTerraform(this._initialRecordGenerationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLabelingServiceDatasetInitialRecordGenerationConfigurationList",
      },
      label_set: {
        value: dataLabelingServiceDatasetLabelSetToHclTerraform(this._labelSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLabelingServiceDatasetLabelSetList",
      },
      timeouts: {
        value: dataLabelingServiceDatasetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataLabelingServiceDatasetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
