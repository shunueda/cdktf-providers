// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_export_instance_error_logs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CynosdbExportInstanceErrorLogsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Latest log time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_export_instance_error_logs#end_time CynosdbExportInstanceErrorLogs#end_time}
  */
  readonly endTime?: string;
  /**
  * File type, optional values: csv, original.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_export_instance_error_logs#file_type CynosdbExportInstanceErrorLogs#file_type}
  */
  readonly fileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_export_instance_error_logs#id CynosdbExportInstanceErrorLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_export_instance_error_logs#instance_id CynosdbExportInstanceErrorLogs#instance_id}
  */
  readonly instanceId: string;
  /**
  * keyword.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_export_instance_error_logs#key_words CynosdbExportInstanceErrorLogs#key_words}
  */
  readonly keyWords?: string[];
  /**
  * Log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_export_instance_error_logs#log_levels CynosdbExportInstanceErrorLogs#log_levels}
  */
  readonly logLevels?: string[];
  /**
  * Optional value Timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_export_instance_error_logs#order_by CynosdbExportInstanceErrorLogs#order_by}
  */
  readonly orderBy?: string;
  /**
  * ASC or DESC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_export_instance_error_logs#order_by_type CynosdbExportInstanceErrorLogs#order_by_type}
  */
  readonly orderByType?: string;
  /**
  * Log earliest time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_export_instance_error_logs#start_time CynosdbExportInstanceErrorLogs#start_time}
  */
  readonly startTime?: string;
}
export interface CynosdbExportInstanceErrorLogsErrorLogItemExport {
}

export function cynosdbExportInstanceErrorLogsErrorLogItemExportToTerraform(struct?: CynosdbExportInstanceErrorLogsErrorLogItemExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cynosdbExportInstanceErrorLogsErrorLogItemExportToHclTerraform(struct?: CynosdbExportInstanceErrorLogsErrorLogItemExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CynosdbExportInstanceErrorLogsErrorLogItemExportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CynosdbExportInstanceErrorLogsErrorLogItemExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbExportInstanceErrorLogsErrorLogItemExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}

export class CynosdbExportInstanceErrorLogsErrorLogItemExportList extends cdktf.ComplexList {

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
  public get(index: number): CynosdbExportInstanceErrorLogsErrorLogItemExportOutputReference {
    return new CynosdbExportInstanceErrorLogsErrorLogItemExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_export_instance_error_logs tencentcloud_cynosdb_export_instance_error_logs}
*/
export class CynosdbExportInstanceErrorLogs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_export_instance_error_logs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CynosdbExportInstanceErrorLogs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CynosdbExportInstanceErrorLogs to import
  * @param importFromId The id of the existing CynosdbExportInstanceErrorLogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_export_instance_error_logs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CynosdbExportInstanceErrorLogs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_export_instance_error_logs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_export_instance_error_logs tencentcloud_cynosdb_export_instance_error_logs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CynosdbExportInstanceErrorLogsConfig
  */
  public constructor(scope: Construct, id: string, config: CynosdbExportInstanceErrorLogsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_export_instance_error_logs',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endTime = config.endTime;
    this._fileType = config.fileType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._keyWords = config.keyWords;
    this._logLevels = config.logLevels;
    this._orderBy = config.orderBy;
    this._orderByType = config.orderByType;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // error_log_item_export - computed: true, optional: false, required: false
  private _errorLogItemExport = new CynosdbExportInstanceErrorLogsErrorLogItemExportList(this, "error_log_item_export", false);
  public get errorLogItemExport() {
    return this._errorLogItemExport;
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // key_words - computed: false, optional: true, required: false
  private _keyWords?: string[]; 
  public get keyWords() {
    return cdktf.Fn.tolist(this.getListAttribute('key_words'));
  }
  public set keyWords(value: string[]) {
    this._keyWords = value;
  }
  public resetKeyWords() {
    this._keyWords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyWordsInput() {
    return this._keyWords;
  }

  // log_levels - computed: false, optional: true, required: false
  private _logLevels?: string[]; 
  public get logLevels() {
    return cdktf.Fn.tolist(this.getListAttribute('log_levels'));
  }
  public set logLevels(value: string[]) {
    this._logLevels = value;
  }
  public resetLogLevels() {
    this._logLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelsInput() {
    return this._logLevels;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // order_by_type - computed: false, optional: true, required: false
  private _orderByType?: string; 
  public get orderByType() {
    return this.getStringAttribute('order_by_type');
  }
  public set orderByType(value: string) {
    this._orderByType = value;
  }
  public resetOrderByType() {
    this._orderByType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByTypeInput() {
    return this._orderByType;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_time: cdktf.stringToTerraform(this._endTime),
      file_type: cdktf.stringToTerraform(this._fileType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      key_words: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyWords),
      log_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logLevels),
      order_by: cdktf.stringToTerraform(this._orderBy),
      order_by_type: cdktf.stringToTerraform(this._orderByType),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_type: {
        value: cdktf.stringToHclTerraform(this._fileType),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_words: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyWords),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      log_levels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logLevels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by_type: {
        value: cdktf.stringToHclTerraform(this._orderByType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
