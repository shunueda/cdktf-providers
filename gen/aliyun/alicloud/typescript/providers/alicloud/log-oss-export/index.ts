// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogOssExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#bucket LogOssExport#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#buffer_interval LogOssExport#buffer_interval}
  */
  readonly bufferInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#buffer_size LogOssExport#buffer_size}
  */
  readonly bufferSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#compress_type LogOssExport#compress_type}
  */
  readonly compressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#content_type LogOssExport#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#csv_config_columns LogOssExport#csv_config_columns}
  */
  readonly csvConfigColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#csv_config_delimiter LogOssExport#csv_config_delimiter}
  */
  readonly csvConfigDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#csv_config_escape LogOssExport#csv_config_escape}
  */
  readonly csvConfigEscape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#csv_config_header LogOssExport#csv_config_header}
  */
  readonly csvConfigHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#csv_config_linefeed LogOssExport#csv_config_linefeed}
  */
  readonly csvConfigLinefeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#csv_config_null LogOssExport#csv_config_null}
  */
  readonly csvConfigNull?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#csv_config_quote LogOssExport#csv_config_quote}
  */
  readonly csvConfigQuote?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#display_name LogOssExport#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#export_name LogOssExport#export_name}
  */
  readonly exportName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#from_time LogOssExport#from_time}
  */
  readonly fromTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#id LogOssExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#json_enable_tag LogOssExport#json_enable_tag}
  */
  readonly jsonEnableTag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#log_read_role_arn LogOssExport#log_read_role_arn}
  */
  readonly logReadRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#logstore_name LogOssExport#logstore_name}
  */
  readonly logstoreName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#path_format LogOssExport#path_format}
  */
  readonly pathFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#prefix LogOssExport#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#project_name LogOssExport#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#role_arn LogOssExport#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#suffix LogOssExport#suffix}
  */
  readonly suffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#time_zone LogOssExport#time_zone}
  */
  readonly timeZone: string;
  /**
  * config_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#config_columns LogOssExport#config_columns}
  */
  readonly configColumns?: LogOssExportConfigColumns[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#timeouts LogOssExport#timeouts}
  */
  readonly timeouts?: LogOssExportTimeouts;
}
export interface LogOssExportConfigColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#name LogOssExport#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#type LogOssExport#type}
  */
  readonly type: string;
}

export function logOssExportConfigColumnsToTerraform(struct?: LogOssExportConfigColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logOssExportConfigColumnsToHclTerraform(struct?: LogOssExportConfigColumns | cdktf.IResolvable): any {
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

export class LogOssExportConfigColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogOssExportConfigColumns | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogOssExportConfigColumns | cdktf.IResolvable | undefined) {
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

export class LogOssExportConfigColumnsList extends cdktf.ComplexList {
  public internalValue? : LogOssExportConfigColumns[] | cdktf.IResolvable

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
  public get(index: number): LogOssExportConfigColumnsOutputReference {
    return new LogOssExportConfigColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogOssExportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#create LogOssExport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#delete LogOssExport#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#update LogOssExport#update}
  */
  readonly update?: string;
}

export function logOssExportTimeoutsToTerraform(struct?: LogOssExportTimeouts | cdktf.IResolvable): any {
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


export function logOssExportTimeoutsToHclTerraform(struct?: LogOssExportTimeouts | cdktf.IResolvable): any {
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

export class LogOssExportTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogOssExportTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogOssExportTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export alicloud_log_oss_export}
*/
export class LogOssExport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_log_oss_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogOssExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogOssExport to import
  * @param importFromId The id of the existing LogOssExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogOssExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_log_oss_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_oss_export alicloud_log_oss_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogOssExportConfig
  */
  public constructor(scope: Construct, id: string, config: LogOssExportConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_log_oss_export',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
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
    this._bufferInterval = config.bufferInterval;
    this._bufferSize = config.bufferSize;
    this._compressType = config.compressType;
    this._contentType = config.contentType;
    this._csvConfigColumns = config.csvConfigColumns;
    this._csvConfigDelimiter = config.csvConfigDelimiter;
    this._csvConfigEscape = config.csvConfigEscape;
    this._csvConfigHeader = config.csvConfigHeader;
    this._csvConfigLinefeed = config.csvConfigLinefeed;
    this._csvConfigNull = config.csvConfigNull;
    this._csvConfigQuote = config.csvConfigQuote;
    this._displayName = config.displayName;
    this._exportName = config.exportName;
    this._fromTime = config.fromTime;
    this._id = config.id;
    this._jsonEnableTag = config.jsonEnableTag;
    this._logReadRoleArn = config.logReadRoleArn;
    this._logstoreName = config.logstoreName;
    this._pathFormat = config.pathFormat;
    this._prefix = config.prefix;
    this._projectName = config.projectName;
    this._roleArn = config.roleArn;
    this._suffix = config.suffix;
    this._timeZone = config.timeZone;
    this._configColumns.internalValue = config.configColumns;
    this._timeouts.internalValue = config.timeouts;
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

  // compress_type - computed: true, optional: true, required: false
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

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
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

  // csv_config_escape - computed: false, optional: true, required: false
  private _csvConfigEscape?: string; 
  public get csvConfigEscape() {
    return this.getStringAttribute('csv_config_escape');
  }
  public set csvConfigEscape(value: string) {
    this._csvConfigEscape = value;
  }
  public resetCsvConfigEscape() {
    this._csvConfigEscape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvConfigEscapeInput() {
    return this._csvConfigEscape;
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

  // csv_config_null - computed: false, optional: true, required: false
  private _csvConfigNull?: string; 
  public get csvConfigNull() {
    return this.getStringAttribute('csv_config_null');
  }
  public set csvConfigNull(value: string) {
    this._csvConfigNull = value;
  }
  public resetCsvConfigNull() {
    this._csvConfigNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvConfigNullInput() {
    return this._csvConfigNull;
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

  // display_name - computed: false, optional: true, required: false
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

  // export_name - computed: false, optional: false, required: true
  private _exportName?: string; 
  public get exportName() {
    return this.getStringAttribute('export_name');
  }
  public set exportName(value: string) {
    this._exportName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportNameInput() {
    return this._exportName;
  }

  // from_time - computed: false, optional: true, required: false
  private _fromTime?: number; 
  public get fromTime() {
    return this.getNumberAttribute('from_time');
  }
  public set fromTime(value: number) {
    this._fromTime = value;
  }
  public resetFromTime() {
    this._fromTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromTimeInput() {
    return this._fromTime;
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

  // log_read_role_arn - computed: false, optional: true, required: false
  private _logReadRoleArn?: string; 
  public get logReadRoleArn() {
    return this.getStringAttribute('log_read_role_arn');
  }
  public set logReadRoleArn(value: string) {
    this._logReadRoleArn = value;
  }
  public resetLogReadRoleArn() {
    this._logReadRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logReadRoleArnInput() {
    return this._logReadRoleArn;
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

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // config_columns - computed: false, optional: true, required: false
  private _configColumns = new LogOssExportConfigColumnsList(this, "config_columns", true);
  public get configColumns() {
    return this._configColumns;
  }
  public putConfigColumns(value: LogOssExportConfigColumns[] | cdktf.IResolvable) {
    this._configColumns.internalValue = value;
  }
  public resetConfigColumns() {
    this._configColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configColumnsInput() {
    return this._configColumns.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogOssExportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogOssExportTimeouts) {
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
      bucket: cdktf.stringToTerraform(this._bucket),
      buffer_interval: cdktf.numberToTerraform(this._bufferInterval),
      buffer_size: cdktf.numberToTerraform(this._bufferSize),
      compress_type: cdktf.stringToTerraform(this._compressType),
      content_type: cdktf.stringToTerraform(this._contentType),
      csv_config_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._csvConfigColumns),
      csv_config_delimiter: cdktf.stringToTerraform(this._csvConfigDelimiter),
      csv_config_escape: cdktf.stringToTerraform(this._csvConfigEscape),
      csv_config_header: cdktf.booleanToTerraform(this._csvConfigHeader),
      csv_config_linefeed: cdktf.stringToTerraform(this._csvConfigLinefeed),
      csv_config_null: cdktf.stringToTerraform(this._csvConfigNull),
      csv_config_quote: cdktf.stringToTerraform(this._csvConfigQuote),
      display_name: cdktf.stringToTerraform(this._displayName),
      export_name: cdktf.stringToTerraform(this._exportName),
      from_time: cdktf.numberToTerraform(this._fromTime),
      id: cdktf.stringToTerraform(this._id),
      json_enable_tag: cdktf.booleanToTerraform(this._jsonEnableTag),
      log_read_role_arn: cdktf.stringToTerraform(this._logReadRoleArn),
      logstore_name: cdktf.stringToTerraform(this._logstoreName),
      path_format: cdktf.stringToTerraform(this._pathFormat),
      prefix: cdktf.stringToTerraform(this._prefix),
      project_name: cdktf.stringToTerraform(this._projectName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      suffix: cdktf.stringToTerraform(this._suffix),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      config_columns: cdktf.listMapper(logOssExportConfigColumnsToTerraform, true)(this._configColumns.internalValue),
      timeouts: logOssExportTimeoutsToTerraform(this._timeouts.internalValue),
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
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
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
      csv_config_escape: {
        value: cdktf.stringToHclTerraform(this._csvConfigEscape),
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
      csv_config_null: {
        value: cdktf.stringToHclTerraform(this._csvConfigNull),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_name: {
        value: cdktf.stringToHclTerraform(this._exportName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_time: {
        value: cdktf.numberToHclTerraform(this._fromTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      log_read_role_arn: {
        value: cdktf.stringToHclTerraform(this._logReadRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logstore_name: {
        value: cdktf.stringToHclTerraform(this._logstoreName),
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
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
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
      suffix: {
        value: cdktf.stringToHclTerraform(this._suffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_columns: {
        value: cdktf.listMapperHcl(logOssExportConfigColumnsToHclTerraform, true)(this._configColumns.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogOssExportConfigColumnsList",
      },
      timeouts: {
        value: logOssExportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogOssExportTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
