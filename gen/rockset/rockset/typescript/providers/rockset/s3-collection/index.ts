// https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3CollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Text describing the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#description S3Collection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#id S3Collection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ingest transformation SQL query. Turns the collection into insert_only mode.
  * 
  * When inserting data into Rockset, you can transform the data by providing a single SQL query, 
  * that contains all of the desired data transformations. 
  * This is referred to as the collection’s ingest transformation or, historically, its field mapping query.
  * 
  * For more information see https://rockset.com/docs/ingest-transformation/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#ingest_transformation S3Collection#ingest_transformation}
  */
  readonly ingestTransformation?: string;
  /**
  * Unique identifier for the collection. Can contain alphanumeric or dash characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#name S3Collection#name}
  */
  readonly name: string;
  /**
  * Number of seconds after which data is purged. Based on event time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#retention_secs S3Collection#retention_secs}
  */
  readonly retentionSecs?: number;
  /**
  * RocksDB storage compression type. Possible values: ZSTD, LZ4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#storage_compression_type S3Collection#storage_compression_type}
  */
  readonly storageCompressionType?: string;
  /**
  * Wait until the collection is ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#wait_for_collection S3Collection#wait_for_collection}
  */
  readonly waitForCollection?: boolean | cdktf.IResolvable;
  /**
  * Wait until the collection has documents. The default is to wait for 0 documents, which means it doesn't wait.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#wait_for_documents S3Collection#wait_for_documents}
  */
  readonly waitForDocuments?: number;
  /**
  * The name of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#workspace S3Collection#workspace}
  */
  readonly workspace: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#source S3Collection#source}
  */
  readonly source?: S3CollectionSource[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#timeouts S3Collection#timeouts}
  */
  readonly timeouts?: S3CollectionTimeouts;
}
export interface S3CollectionSourceCsv {
  /**
  * The names of the columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#column_names S3Collection#column_names}
  */
  readonly columnNames?: string[];
  /**
  * The types of the columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#column_types S3Collection#column_types}
  */
  readonly columnTypes?: string[];
  /**
  * Can be one of: UTF-8, ISO_8859_1, UTF-16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#encoding S3Collection#encoding}
  */
  readonly encoding?: string;
  /**
  * Escape character removes any special meaning from the character that follows it. Defaults to backslash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#escape_char S3Collection#escape_char}
  */
  readonly escapeChar?: string;
  /**
  * If the first line in every object specifies the column names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#first_line_as_column_names S3Collection#first_line_as_column_names}
  */
  readonly firstLineAsColumnNames?: boolean | cdktf.IResolvable;
  /**
  * Character within which a cell value is enclosed. Defaults to double quote.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#quote_char S3Collection#quote_char}
  */
  readonly quoteChar?: string;
  /**
  * A single character that is the column separator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#separator S3Collection#separator}
  */
  readonly separator?: string;
}

export function s3CollectionSourceCsvToTerraform(struct?: S3CollectionSourceCsvOutputReference | S3CollectionSourceCsv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    column_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnTypes),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    escape_char: cdktf.stringToTerraform(struct!.escapeChar),
    first_line_as_column_names: cdktf.booleanToTerraform(struct!.firstLineAsColumnNames),
    quote_char: cdktf.stringToTerraform(struct!.quoteChar),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}


export function s3CollectionSourceCsvToHclTerraform(struct?: S3CollectionSourceCsvOutputReference | S3CollectionSourceCsv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    column_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escape_char: {
      value: cdktf.stringToHclTerraform(struct!.escapeChar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_line_as_column_names: {
      value: cdktf.booleanToHclTerraform(struct!.firstLineAsColumnNames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    quote_char: {
      value: cdktf.stringToHclTerraform(struct!.quoteChar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3CollectionSourceCsvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3CollectionSourceCsv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._columnTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnTypes = this._columnTypes;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._escapeChar !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapeChar = this._escapeChar;
    }
    if (this._firstLineAsColumnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstLineAsColumnNames = this._firstLineAsColumnNames;
    }
    if (this._quoteChar !== undefined) {
      hasAnyValues = true;
      internalValueResult.quoteChar = this._quoteChar;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3CollectionSourceCsv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnNames = undefined;
      this._columnTypes = undefined;
      this._encoding = undefined;
      this._escapeChar = undefined;
      this._firstLineAsColumnNames = undefined;
      this._quoteChar = undefined;
      this._separator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnNames = value.columnNames;
      this._columnTypes = value.columnTypes;
      this._encoding = value.encoding;
      this._escapeChar = value.escapeChar;
      this._firstLineAsColumnNames = value.firstLineAsColumnNames;
      this._quoteChar = value.quoteChar;
      this._separator = value.separator;
    }
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

  // column_types - computed: false, optional: true, required: false
  private _columnTypes?: string[]; 
  public get columnTypes() {
    return this.getListAttribute('column_types');
  }
  public set columnTypes(value: string[]) {
    this._columnTypes = value;
  }
  public resetColumnTypes() {
    this._columnTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTypesInput() {
    return this._columnTypes;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // escape_char - computed: false, optional: true, required: false
  private _escapeChar?: string; 
  public get escapeChar() {
    return this.getStringAttribute('escape_char');
  }
  public set escapeChar(value: string) {
    this._escapeChar = value;
  }
  public resetEscapeChar() {
    this._escapeChar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeCharInput() {
    return this._escapeChar;
  }

  // first_line_as_column_names - computed: false, optional: true, required: false
  private _firstLineAsColumnNames?: boolean | cdktf.IResolvable; 
  public get firstLineAsColumnNames() {
    return this.getBooleanAttribute('first_line_as_column_names');
  }
  public set firstLineAsColumnNames(value: boolean | cdktf.IResolvable) {
    this._firstLineAsColumnNames = value;
  }
  public resetFirstLineAsColumnNames() {
    this._firstLineAsColumnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstLineAsColumnNamesInput() {
    return this._firstLineAsColumnNames;
  }

  // quote_char - computed: false, optional: true, required: false
  private _quoteChar?: string; 
  public get quoteChar() {
    return this.getStringAttribute('quote_char');
  }
  public set quoteChar(value: string) {
    this._quoteChar = value;
  }
  public resetQuoteChar() {
    this._quoteChar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteCharInput() {
    return this._quoteChar;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }
}
export interface S3CollectionSourceXml {
  /**
  * Tag to differentiate between attributes and elements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#attribute_prefix S3Collection#attribute_prefix}
  */
  readonly attributePrefix?: string;
  /**
  * Tags with which documents are identified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#doc_tag S3Collection#doc_tag}
  */
  readonly docTag?: string;
  /**
  * Encoding in which data source is encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#encoding S3Collection#encoding}
  */
  readonly encoding?: string;
  /**
  * Tag until which xml is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#root_tag S3Collection#root_tag}
  */
  readonly rootTag?: string;
  /**
  * Tag used for the value when there are attributes in the element having no child.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#value_tag S3Collection#value_tag}
  */
  readonly valueTag?: string;
}

export function s3CollectionSourceXmlToTerraform(struct?: S3CollectionSourceXmlOutputReference | S3CollectionSourceXml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_prefix: cdktf.stringToTerraform(struct!.attributePrefix),
    doc_tag: cdktf.stringToTerraform(struct!.docTag),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    root_tag: cdktf.stringToTerraform(struct!.rootTag),
    value_tag: cdktf.stringToTerraform(struct!.valueTag),
  }
}


export function s3CollectionSourceXmlToHclTerraform(struct?: S3CollectionSourceXmlOutputReference | S3CollectionSourceXml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_prefix: {
      value: cdktf.stringToHclTerraform(struct!.attributePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    doc_tag: {
      value: cdktf.stringToHclTerraform(struct!.docTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_tag: {
      value: cdktf.stringToHclTerraform(struct!.rootTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_tag: {
      value: cdktf.stringToHclTerraform(struct!.valueTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3CollectionSourceXmlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3CollectionSourceXml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributePrefix = this._attributePrefix;
    }
    if (this._docTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.docTag = this._docTag;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._rootTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootTag = this._rootTag;
    }
    if (this._valueTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueTag = this._valueTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3CollectionSourceXml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributePrefix = undefined;
      this._docTag = undefined;
      this._encoding = undefined;
      this._rootTag = undefined;
      this._valueTag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributePrefix = value.attributePrefix;
      this._docTag = value.docTag;
      this._encoding = value.encoding;
      this._rootTag = value.rootTag;
      this._valueTag = value.valueTag;
    }
  }

  // attribute_prefix - computed: false, optional: true, required: false
  private _attributePrefix?: string; 
  public get attributePrefix() {
    return this.getStringAttribute('attribute_prefix');
  }
  public set attributePrefix(value: string) {
    this._attributePrefix = value;
  }
  public resetAttributePrefix() {
    this._attributePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributePrefixInput() {
    return this._attributePrefix;
  }

  // doc_tag - computed: false, optional: true, required: false
  private _docTag?: string; 
  public get docTag() {
    return this.getStringAttribute('doc_tag');
  }
  public set docTag(value: string) {
    this._docTag = value;
  }
  public resetDocTag() {
    this._docTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docTagInput() {
    return this._docTag;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // root_tag - computed: false, optional: true, required: false
  private _rootTag?: string; 
  public get rootTag() {
    return this.getStringAttribute('root_tag');
  }
  public set rootTag(value: string) {
    this._rootTag = value;
  }
  public resetRootTag() {
    this._rootTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootTagInput() {
    return this._rootTag;
  }

  // value_tag - computed: false, optional: true, required: false
  private _valueTag?: string; 
  public get valueTag() {
    return this.getStringAttribute('value_tag');
  }
  public set valueTag(value: string) {
    this._valueTag = value;
  }
  public resetValueTag() {
    this._valueTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTagInput() {
    return this._valueTag;
  }
}
export interface S3CollectionSource {
  /**
  * S3 bucket containing the target data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#bucket S3Collection#bucket}
  */
  readonly bucket: string;
  /**
  * Format of the data. One of: json, csv, xml. xml and csv blocks can only be set for their respective formats. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#format S3Collection#format}
  */
  readonly format: string;
  /**
  * The name of the Rockset S3 integration. If no S3 integration is provided only data in public S3 buckets are accessible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#integration_name S3Collection#integration_name}
  */
  readonly integrationName: string;
  /**
  * Regex path pattern to S3 keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#pattern S3Collection#pattern}
  */
  readonly pattern?: string;
  /**
  * Simple path prefix to S3 keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#prefix S3Collection#prefix}
  */
  readonly prefix?: string;
  /**
  * csv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#csv S3Collection#csv}
  */
  readonly csv?: S3CollectionSourceCsv;
  /**
  * xml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#xml S3Collection#xml}
  */
  readonly xml?: S3CollectionSourceXml;
}

export function s3CollectionSourceToTerraform(struct?: S3CollectionSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    format: cdktf.stringToTerraform(struct!.format),
    integration_name: cdktf.stringToTerraform(struct!.integrationName),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    csv: s3CollectionSourceCsvToTerraform(struct!.csv),
    xml: s3CollectionSourceXmlToTerraform(struct!.xml),
  }
}


export function s3CollectionSourceToHclTerraform(struct?: S3CollectionSource | cdktf.IResolvable): any {
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
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_name: {
      value: cdktf.stringToHclTerraform(struct!.integrationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
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
    csv: {
      value: s3CollectionSourceCsvToHclTerraform(struct!.csv),
      isBlock: true,
      type: "set",
      storageClassType: "S3CollectionSourceCsvList",
    },
    xml: {
      value: s3CollectionSourceXmlToHclTerraform(struct!.xml),
      isBlock: true,
      type: "set",
      storageClassType: "S3CollectionSourceXmlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3CollectionSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3CollectionSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._integrationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationName = this._integrationName;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    if (this._xml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xml = this._xml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3CollectionSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._format = undefined;
      this._integrationName = undefined;
      this._pattern = undefined;
      this._prefix = undefined;
      this._csv.internalValue = undefined;
      this._xml.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._format = value.format;
      this._integrationName = value.integrationName;
      this._pattern = value.pattern;
      this._prefix = value.prefix;
      this._csv.internalValue = value.csv;
      this._xml.internalValue = value.xml;
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

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // integration_name - computed: false, optional: false, required: true
  private _integrationName?: string; 
  public get integrationName() {
    return this.getStringAttribute('integration_name');
  }
  public set integrationName(value: string) {
    this._integrationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationNameInput() {
    return this._integrationName;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // prefix - computed: false, optional: true, required: false
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

  // csv - computed: false, optional: true, required: false
  private _csv = new S3CollectionSourceCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }
  public putCsv(value: S3CollectionSourceCsv) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }

  // xml - computed: false, optional: true, required: false
  private _xml = new S3CollectionSourceXmlOutputReference(this, "xml");
  public get xml() {
    return this._xml;
  }
  public putXml(value: S3CollectionSourceXml) {
    this._xml.internalValue = value;
  }
  public resetXml() {
    this._xml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlInput() {
    return this._xml.internalValue;
  }
}

export class S3CollectionSourceList extends cdktf.ComplexList {
  public internalValue? : S3CollectionSource[] | cdktf.IResolvable

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
  public get(index: number): S3CollectionSourceOutputReference {
    return new S3CollectionSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3CollectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#create S3Collection#create}
  */
  readonly create?: string;
}

export function s3CollectionTimeoutsToTerraform(struct?: S3CollectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function s3CollectionTimeoutsToHclTerraform(struct?: S3CollectionTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3CollectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3CollectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3CollectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection rockset_s3_collection}
*/
export class S3Collection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rockset_s3_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3Collection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3Collection to import
  * @param importFromId The id of the existing S3Collection that should be imported. Refer to the {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3Collection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rockset_s3_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/s3_collection rockset_s3_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3CollectionConfig
  */
  public constructor(scope: Construct, id: string, config: S3CollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'rockset_s3_collection',
      terraformGeneratorMetadata: {
        providerName: 'rockset',
        providerVersion: '0.9.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._ingestTransformation = config.ingestTransformation;
    this._name = config.name;
    this._retentionSecs = config.retentionSecs;
    this._storageCompressionType = config.storageCompressionType;
    this._waitForCollection = config.waitForCollection;
    this._waitForDocuments = config.waitForDocuments;
    this._workspace = config.workspace;
    this._source.internalValue = config.source;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // ingest_transformation - computed: false, optional: true, required: false
  private _ingestTransformation?: string; 
  public get ingestTransformation() {
    return this.getStringAttribute('ingest_transformation');
  }
  public set ingestTransformation(value: string) {
    this._ingestTransformation = value;
  }
  public resetIngestTransformation() {
    this._ingestTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestTransformationInput() {
    return this._ingestTransformation;
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

  // retention_secs - computed: false, optional: true, required: false
  private _retentionSecs?: number; 
  public get retentionSecs() {
    return this.getNumberAttribute('retention_secs');
  }
  public set retentionSecs(value: number) {
    this._retentionSecs = value;
  }
  public resetRetentionSecs() {
    this._retentionSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionSecsInput() {
    return this._retentionSecs;
  }

  // storage_compression_type - computed: false, optional: true, required: false
  private _storageCompressionType?: string; 
  public get storageCompressionType() {
    return this.getStringAttribute('storage_compression_type');
  }
  public set storageCompressionType(value: string) {
    this._storageCompressionType = value;
  }
  public resetStorageCompressionType() {
    this._storageCompressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCompressionTypeInput() {
    return this._storageCompressionType;
  }

  // wait_for_collection - computed: false, optional: true, required: false
  private _waitForCollection?: boolean | cdktf.IResolvable; 
  public get waitForCollection() {
    return this.getBooleanAttribute('wait_for_collection');
  }
  public set waitForCollection(value: boolean | cdktf.IResolvable) {
    this._waitForCollection = value;
  }
  public resetWaitForCollection() {
    this._waitForCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCollectionInput() {
    return this._waitForCollection;
  }

  // wait_for_documents - computed: false, optional: true, required: false
  private _waitForDocuments?: number; 
  public get waitForDocuments() {
    return this.getNumberAttribute('wait_for_documents');
  }
  public set waitForDocuments(value: number) {
    this._waitForDocuments = value;
  }
  public resetWaitForDocuments() {
    this._waitForDocuments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDocumentsInput() {
    return this._waitForDocuments;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // source - computed: false, optional: true, required: false
  private _source = new S3CollectionSourceList(this, "source", true);
  public get source() {
    return this._source;
  }
  public putSource(value: S3CollectionSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new S3CollectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: S3CollectionTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ingest_transformation: cdktf.stringToTerraform(this._ingestTransformation),
      name: cdktf.stringToTerraform(this._name),
      retention_secs: cdktf.numberToTerraform(this._retentionSecs),
      storage_compression_type: cdktf.stringToTerraform(this._storageCompressionType),
      wait_for_collection: cdktf.booleanToTerraform(this._waitForCollection),
      wait_for_documents: cdktf.numberToTerraform(this._waitForDocuments),
      workspace: cdktf.stringToTerraform(this._workspace),
      source: cdktf.listMapper(s3CollectionSourceToTerraform, true)(this._source.internalValue),
      timeouts: s3CollectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingest_transformation: {
        value: cdktf.stringToHclTerraform(this._ingestTransformation),
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
      retention_secs: {
        value: cdktf.numberToHclTerraform(this._retentionSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_compression_type: {
        value: cdktf.stringToHclTerraform(this._storageCompressionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_collection: {
        value: cdktf.booleanToHclTerraform(this._waitForCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_documents: {
        value: cdktf.numberToHclTerraform(this._waitForDocuments),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workspace: {
        value: cdktf.stringToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.listMapperHcl(s3CollectionSourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3CollectionSourceList",
      },
      timeouts: {
        value: s3CollectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3CollectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
