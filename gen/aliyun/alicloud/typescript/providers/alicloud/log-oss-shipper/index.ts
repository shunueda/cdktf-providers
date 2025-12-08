// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogOssShipperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#buffer_interval LogOssShipper#buffer_interval}
  */
  readonly bufferInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#buffer_size LogOssShipper#buffer_size}
  */
  readonly bufferSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#compress_type LogOssShipper#compress_type}
  */
  readonly compressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#csv_config_columns LogOssShipper#csv_config_columns}
  */
  readonly csvConfigColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#csv_config_delimiter LogOssShipper#csv_config_delimiter}
  */
  readonly csvConfigDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#csv_config_header LogOssShipper#csv_config_header}
  */
  readonly csvConfigHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#csv_config_linefeed LogOssShipper#csv_config_linefeed}
  */
  readonly csvConfigLinefeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#csv_config_nullidentifier LogOssShipper#csv_config_nullidentifier}
  */
  readonly csvConfigNullidentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#csv_config_quote LogOssShipper#csv_config_quote}
  */
  readonly csvConfigQuote?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#format LogOssShipper#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#id LogOssShipper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#json_enable_tag LogOssShipper#json_enable_tag}
  */
  readonly jsonEnableTag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#logstore_name LogOssShipper#logstore_name}
  */
  readonly logstoreName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#oss_bucket LogOssShipper#oss_bucket}
  */
  readonly ossBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#oss_prefix LogOssShipper#oss_prefix}
  */
  readonly ossPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#path_format LogOssShipper#path_format}
  */
  readonly pathFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#project_name LogOssShipper#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#role_arn LogOssShipper#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#shipper_name LogOssShipper#shipper_name}
  */
  readonly shipperName: string;
  /**
  * parquet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#parquet_config LogOssShipper#parquet_config}
  */
  readonly parquetConfig?: LogOssShipperParquetConfig[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#timeouts LogOssShipper#timeouts}
  */
  readonly timeouts?: LogOssShipperTimeouts;
}
export interface LogOssShipperParquetConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#name LogOssShipper#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#type LogOssShipper#type}
  */
  readonly type: string;
}

export function logOssShipperParquetConfigToTerraform(struct?: LogOssShipperParquetConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logOssShipperParquetConfigToHclTerraform(struct?: LogOssShipperParquetConfig | cdktf.IResolvable): any {
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

export class LogOssShipperParquetConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogOssShipperParquetConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: LogOssShipperParquetConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._type = value.type;
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

export class LogOssShipperParquetConfigList extends cdktf.ComplexList {
  public internalValue? : LogOssShipperParquetConfig[] | cdktf.IResolvable

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
  public get(index: number): LogOssShipperParquetConfigOutputReference {
    return new LogOssShipperParquetConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogOssShipperTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#create LogOssShipper#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#delete LogOssShipper#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#update LogOssShipper#update}
  */
  readonly update?: string;
}

export function logOssShipperTimeoutsToTerraform(struct?: LogOssShipperTimeouts | cdktf.IResolvable): any {
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


export function logOssShipperTimeoutsToHclTerraform(struct?: LogOssShipperTimeouts | cdktf.IResolvable): any {
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

export class LogOssShipperTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogOssShipperTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogOssShipperTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper alicloud_log_oss_shipper}
*/
export class LogOssShipper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_log_oss_shipper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogOssShipper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogOssShipper to import
  * @param importFromId The id of the existing LogOssShipper that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogOssShipper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_log_oss_shipper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_oss_shipper alicloud_log_oss_shipper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogOssShipperConfig
  */
  public constructor(scope: Construct, id: string, config: LogOssShipperConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_log_oss_shipper',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bufferInterval = config.bufferInterval;
    this._bufferSize = config.bufferSize;
    this._compressType = config.compressType;
    this._csvConfigColumns = config.csvConfigColumns;
    this._csvConfigDelimiter = config.csvConfigDelimiter;
    this._csvConfigHeader = config.csvConfigHeader;
    this._csvConfigLinefeed = config.csvConfigLinefeed;
    this._csvConfigNullidentifier = config.csvConfigNullidentifier;
    this._csvConfigQuote = config.csvConfigQuote;
    this._format = config.format;
    this._id = config.id;
    this._jsonEnableTag = config.jsonEnableTag;
    this._logstoreName = config.logstoreName;
    this._ossBucket = config.ossBucket;
    this._ossPrefix = config.ossPrefix;
    this._pathFormat = config.pathFormat;
    this._projectName = config.projectName;
    this._roleArn = config.roleArn;
    this._shipperName = config.shipperName;
    this._parquetConfig.internalValue = config.parquetConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // buffer_interval - computed: false, optional: false, required: true
  private _bufferInterval?: number; 
  public get bufferInterval() {
    return this.getNumberAttribute('buffer_interval');
  }
  public set bufferInterval(value: number) {
    this._bufferInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferIntervalInput() {
    return this._bufferInterval;
  }

  // buffer_size - computed: false, optional: false, required: true
  private _bufferSize?: number; 
  public get bufferSize() {
    return this.getNumberAttribute('buffer_size');
  }
  public set bufferSize(value: number) {
    this._bufferSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // compress_type - computed: false, optional: true, required: false
  private _compressType?: string; 
  public get compressType() {
    return this.getStringAttribute('compress_type');
  }
  public set compressType(value: string) {
    this._compressType = value;
  }
  public resetCompressType() {
    this._compressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressTypeInput() {
    return this._compressType;
  }

  // csv_config_columns - computed: false, optional: true, required: false
  private _csvConfigColumns?: string[]; 
  public get csvConfigColumns() {
    return this.getListAttribute('csv_config_columns');
  }
  public set csvConfigColumns(value: string[]) {
    this._csvConfigColumns = value;
  }
  public resetCsvConfigColumns() {
    this._csvConfigColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvConfigColumnsInput() {
    return this._csvConfigColumns;
  }

  // csv_config_delimiter - computed: false, optional: true, required: false
  private _csvConfigDelimiter?: string; 
  public get csvConfigDelimiter() {
    return this.getStringAttribute('csv_config_delimiter');
  }
  public set csvConfigDelimiter(value: string) {
    this._csvConfigDelimiter = value;
  }
  public resetCsvConfigDelimiter() {
    this._csvConfigDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvConfigDelimiterInput() {
    return this._csvConfigDelimiter;
  }

  // csv_config_header - computed: false, optional: true, required: false
  private _csvConfigHeader?: boolean | cdktf.IResolvable; 
  public get csvConfigHeader() {
    return this.getBooleanAttribute('csv_config_header');
  }
  public set csvConfigHeader(value: boolean | cdktf.IResolvable) {
    this._csvConfigHeader = value;
  }
  public resetCsvConfigHeader() {
    this._csvConfigHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvConfigHeaderInput() {
    return this._csvConfigHeader;
  }

  // csv_config_linefeed - computed: false, optional: true, required: false
  private _csvConfigLinefeed?: string; 
  public get csvConfigLinefeed() {
    return this.getStringAttribute('csv_config_linefeed');
  }
  public set csvConfigLinefeed(value: string) {
    this._csvConfigLinefeed = value;
  }
  public resetCsvConfigLinefeed() {
    this._csvConfigLinefeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvConfigLinefeedInput() {
    return this._csvConfigLinefeed;
  }

  // csv_config_nullidentifier - computed: false, optional: true, required: false
  private _csvConfigNullidentifier?: string; 
  public get csvConfigNullidentifier() {
    return this.getStringAttribute('csv_config_nullidentifier');
  }
  public set csvConfigNullidentifier(value: string) {
    this._csvConfigNullidentifier = value;
  }
  public resetCsvConfigNullidentifier() {
    this._csvConfigNullidentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvConfigNullidentifierInput() {
    return this._csvConfigNullidentifier;
  }

  // csv_config_quote - computed: false, optional: true, required: false
  private _csvConfigQuote?: string; 
  public get csvConfigQuote() {
    return this.getStringAttribute('csv_config_quote');
  }
  public set csvConfigQuote(value: string) {
    this._csvConfigQuote = value;
  }
  public resetCsvConfigQuote() {
    this._csvConfigQuote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvConfigQuoteInput() {
    return this._csvConfigQuote;
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

  // json_enable_tag - computed: false, optional: true, required: false
  private _jsonEnableTag?: boolean | cdktf.IResolvable; 
  public get jsonEnableTag() {
    return this.getBooleanAttribute('json_enable_tag');
  }
  public set jsonEnableTag(value: boolean | cdktf.IResolvable) {
    this._jsonEnableTag = value;
  }
  public resetJsonEnableTag() {
    this._jsonEnableTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonEnableTagInput() {
    return this._jsonEnableTag;
  }

  // logstore_name - computed: false, optional: false, required: true
  private _logstoreName?: string; 
  public get logstoreName() {
    return this.getStringAttribute('logstore_name');
  }
  public set logstoreName(value: string) {
    this._logstoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logstoreNameInput() {
    return this._logstoreName;
  }

  // oss_bucket - computed: false, optional: false, required: true
  private _ossBucket?: string; 
  public get ossBucket() {
    return this.getStringAttribute('oss_bucket');
  }
  public set ossBucket(value: string) {
    this._ossBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ossBucketInput() {
    return this._ossBucket;
  }

  // oss_prefix - computed: false, optional: true, required: false
  private _ossPrefix?: string; 
  public get ossPrefix() {
    return this.getStringAttribute('oss_prefix');
  }
  public set ossPrefix(value: string) {
    this._ossPrefix = value;
  }
  public resetOssPrefix() {
    this._ossPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossPrefixInput() {
    return this._ossPrefix;
  }

  // path_format - computed: false, optional: false, required: true
  private _pathFormat?: string; 
  public get pathFormat() {
    return this.getStringAttribute('path_format');
  }
  public set pathFormat(value: string) {
    this._pathFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathFormatInput() {
    return this._pathFormat;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
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

  // shipper_name - computed: false, optional: false, required: true
  private _shipperName?: string; 
  public get shipperName() {
    return this.getStringAttribute('shipper_name');
  }
  public set shipperName(value: string) {
    this._shipperName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shipperNameInput() {
    return this._shipperName;
  }

  // parquet_config - computed: false, optional: true, required: false
  private _parquetConfig = new LogOssShipperParquetConfigList(this, "parquet_config", true);
  public get parquetConfig() {
    return this._parquetConfig;
  }
  public putParquetConfig(value: LogOssShipperParquetConfig[] | cdktf.IResolvable) {
    this._parquetConfig.internalValue = value;
  }
  public resetParquetConfig() {
    this._parquetConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetConfigInput() {
    return this._parquetConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogOssShipperTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogOssShipperTimeouts) {
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
      buffer_interval: cdktf.numberToTerraform(this._bufferInterval),
      buffer_size: cdktf.numberToTerraform(this._bufferSize),
      compress_type: cdktf.stringToTerraform(this._compressType),
      csv_config_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._csvConfigColumns),
      csv_config_delimiter: cdktf.stringToTerraform(this._csvConfigDelimiter),
      csv_config_header: cdktf.booleanToTerraform(this._csvConfigHeader),
      csv_config_linefeed: cdktf.stringToTerraform(this._csvConfigLinefeed),
      csv_config_nullidentifier: cdktf.stringToTerraform(this._csvConfigNullidentifier),
      csv_config_quote: cdktf.stringToTerraform(this._csvConfigQuote),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      json_enable_tag: cdktf.booleanToTerraform(this._jsonEnableTag),
      logstore_name: cdktf.stringToTerraform(this._logstoreName),
      oss_bucket: cdktf.stringToTerraform(this._ossBucket),
      oss_prefix: cdktf.stringToTerraform(this._ossPrefix),
      path_format: cdktf.stringToTerraform(this._pathFormat),
      project_name: cdktf.stringToTerraform(this._projectName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      shipper_name: cdktf.stringToTerraform(this._shipperName),
      parquet_config: cdktf.listMapper(logOssShipperParquetConfigToTerraform, true)(this._parquetConfig.internalValue),
      timeouts: logOssShipperTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      buffer_interval: {
        value: cdktf.numberToHclTerraform(this._bufferInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      buffer_size: {
        value: cdktf.numberToHclTerraform(this._bufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compress_type: {
        value: cdktf.stringToHclTerraform(this._compressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csv_config_columns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._csvConfigColumns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      csv_config_delimiter: {
        value: cdktf.stringToHclTerraform(this._csvConfigDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csv_config_header: {
        value: cdktf.booleanToHclTerraform(this._csvConfigHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      csv_config_linefeed: {
        value: cdktf.stringToHclTerraform(this._csvConfigLinefeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csv_config_nullidentifier: {
        value: cdktf.stringToHclTerraform(this._csvConfigNullidentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csv_config_quote: {
        value: cdktf.stringToHclTerraform(this._csvConfigQuote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      json_enable_tag: {
        value: cdktf.booleanToHclTerraform(this._jsonEnableTag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logstore_name: {
        value: cdktf.stringToHclTerraform(this._logstoreName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_bucket: {
        value: cdktf.stringToHclTerraform(this._ossBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_prefix: {
        value: cdktf.stringToHclTerraform(this._ossPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_format: {
        value: cdktf.stringToHclTerraform(this._pathFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shipper_name: {
        value: cdktf.stringToHclTerraform(this._shipperName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parquet_config: {
        value: cdktf.listMapperHcl(logOssShipperParquetConfigToHclTerraform, true)(this._parquetConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogOssShipperParquetConfigList",
      },
      timeouts: {
        value: logOssShipperTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogOssShipperTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
