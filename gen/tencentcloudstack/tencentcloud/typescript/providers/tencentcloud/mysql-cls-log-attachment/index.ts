// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mysql_cls_log_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlClsLogAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cls region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mysql_cls_log_attachment#cls_region MysqlClsLogAttachment#cls_region}
  */
  readonly clsRegion?: string;
  /**
  * Whether to create index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mysql_cls_log_attachment#create_index MysqlClsLogAttachment#create_index}
  */
  readonly createIndex?: boolean | cdktf.IResolvable;
  /**
  * Whether to create log set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mysql_cls_log_attachment#create_log_set MysqlClsLogAttachment#create_log_set}
  */
  readonly createLogSet?: boolean | cdktf.IResolvable;
  /**
  * Whether to create log topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mysql_cls_log_attachment#create_log_topic MysqlClsLogAttachment#create_log_topic}
  */
  readonly createLogTopic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mysql_cls_log_attachment#id MysqlClsLogAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The id of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mysql_cls_log_attachment#instance_id MysqlClsLogAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * If `create_log_set` is `true`, use log set name, Else use log set Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mysql_cls_log_attachment#log_set MysqlClsLogAttachment#log_set}
  */
  readonly logSet: string;
  /**
  * If `create_log_topic` is `true`, use log topic name, Else use log topic Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mysql_cls_log_attachment#log_topic MysqlClsLogAttachment#log_topic}
  */
  readonly logTopic: string;
  /**
  * Log type. Support `error` or `slowlog`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mysql_cls_log_attachment#log_type MysqlClsLogAttachment#log_type}
  */
  readonly logType: string;
  /**
  * The validity period of the log theme is 30 days by default when not filled in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mysql_cls_log_attachment#period MysqlClsLogAttachment#period}
  */
  readonly period?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mysql_cls_log_attachment tencentcloud_mysql_cls_log_attachment}
*/
export class MysqlClsLogAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_cls_log_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlClsLogAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlClsLogAttachment to import
  * @param importFromId The id of the existing MysqlClsLogAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mysql_cls_log_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlClsLogAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_cls_log_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mysql_cls_log_attachment tencentcloud_mysql_cls_log_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlClsLogAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlClsLogAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_cls_log_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clsRegion = config.clsRegion;
    this._createIndex = config.createIndex;
    this._createLogSet = config.createLogSet;
    this._createLogTopic = config.createLogTopic;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._logSet = config.logSet;
    this._logTopic = config.logTopic;
    this._logType = config.logType;
    this._period = config.period;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cls_region - computed: true, optional: true, required: false
  private _clsRegion?: string; 
  public get clsRegion() {
    return this.getStringAttribute('cls_region');
  }
  public set clsRegion(value: string) {
    this._clsRegion = value;
  }
  public resetClsRegion() {
    this._clsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clsRegionInput() {
    return this._clsRegion;
  }

  // create_index - computed: false, optional: true, required: false
  private _createIndex?: boolean | cdktf.IResolvable; 
  public get createIndex() {
    return this.getBooleanAttribute('create_index');
  }
  public set createIndex(value: boolean | cdktf.IResolvable) {
    this._createIndex = value;
  }
  public resetCreateIndex() {
    this._createIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIndexInput() {
    return this._createIndex;
  }

  // create_log_set - computed: false, optional: true, required: false
  private _createLogSet?: boolean | cdktf.IResolvable; 
  public get createLogSet() {
    return this.getBooleanAttribute('create_log_set');
  }
  public set createLogSet(value: boolean | cdktf.IResolvable) {
    this._createLogSet = value;
  }
  public resetCreateLogSet() {
    this._createLogSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createLogSetInput() {
    return this._createLogSet;
  }

  // create_log_topic - computed: false, optional: true, required: false
  private _createLogTopic?: boolean | cdktf.IResolvable; 
  public get createLogTopic() {
    return this.getBooleanAttribute('create_log_topic');
  }
  public set createLogTopic(value: boolean | cdktf.IResolvable) {
    this._createLogTopic = value;
  }
  public resetCreateLogTopic() {
    this._createLogTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createLogTopicInput() {
    return this._createLogTopic;
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

  // log_set - computed: false, optional: false, required: true
  private _logSet?: string; 
  public get logSet() {
    return this.getStringAttribute('log_set');
  }
  public set logSet(value: string) {
    this._logSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logSetInput() {
    return this._logSet;
  }

  // log_set_id - computed: true, optional: false, required: false
  public get logSetId() {
    return this.getStringAttribute('log_set_id');
  }

  // log_topic - computed: false, optional: false, required: true
  private _logTopic?: string; 
  public get logTopic() {
    return this.getStringAttribute('log_topic');
  }
  public set logTopic(value: string) {
    this._logTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTopicInput() {
    return this._logTopic;
  }

  // log_topic_id - computed: true, optional: false, required: false
  public get logTopicId() {
    return this.getStringAttribute('log_topic_id');
  }

  // log_type - computed: false, optional: false, required: true
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cls_region: cdktf.stringToTerraform(this._clsRegion),
      create_index: cdktf.booleanToTerraform(this._createIndex),
      create_log_set: cdktf.booleanToTerraform(this._createLogSet),
      create_log_topic: cdktf.booleanToTerraform(this._createLogTopic),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      log_set: cdktf.stringToTerraform(this._logSet),
      log_topic: cdktf.stringToTerraform(this._logTopic),
      log_type: cdktf.stringToTerraform(this._logType),
      period: cdktf.numberToTerraform(this._period),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cls_region: {
        value: cdktf.stringToHclTerraform(this._clsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_index: {
        value: cdktf.booleanToHclTerraform(this._createIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_log_set: {
        value: cdktf.booleanToHclTerraform(this._createLogSet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_log_topic: {
        value: cdktf.booleanToHclTerraform(this._createLogTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      log_set: {
        value: cdktf.stringToHclTerraform(this._logSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_topic: {
        value: cdktf.stringToHclTerraform(this._logTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_type: {
        value: cdktf.stringToHclTerraform(this._logType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
