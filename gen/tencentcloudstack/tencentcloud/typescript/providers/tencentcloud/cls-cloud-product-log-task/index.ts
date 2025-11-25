// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cls_cloud_product_log_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClsCloudProductLogTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud product identification, Values: CDS, CWP, CDB, TDSQL-C, MongoDB, TDStore, DCDB, MariaDB, PostgreSQL, BH, APIS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cls_cloud_product_log_task#assumer_name ClsCloudProductLogTask#assumer_name}
  */
  readonly assumerName: string;
  /**
  * Cloud product region. There are differences in the input format of different log types in different regions. Please refer to the following example:
  * - CDS(all log type): ap-guangzhou
  * - CDB-AUDIT: gz
  * - TDSQL-C-AUDIT: gz
  * - MongoDB-AUDIT: gz
  * - MongoDB-SlowLog: ap-guangzhou
  * - MongoDB-ErrorLog: ap-guangzhou
  * - TDMYSQL-SLOW: gz
  * - DCDB(all log type): gz
  * - MariaDB(all log type): gz
  * - PostgreSQL(all log type): gz
  * - BH(all log type): overseas-polaris(Domestic sites overseas)/fsi-polaris(Domestic sites finance)/general-polaris(Domestic sites)/intl-sg-prod(International sites)
  * - APIS(all log type): gz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cls_cloud_product_log_task#cloud_product_region ClsCloudProductLogTask#cloud_product_region}
  */
  readonly cloudProductRegion: string;
  /**
  * CLS target region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cls_cloud_product_log_task#cls_region ClsCloudProductLogTask#cls_region}
  */
  readonly clsRegion: string;
  /**
  * Log configuration extension information, generally used to store additional log delivery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cls_cloud_product_log_task#extend ClsCloudProductLogTask#extend}
  */
  readonly extend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cls_cloud_product_log_task#id ClsCloudProductLogTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cls_cloud_product_log_task#instance_id ClsCloudProductLogTask#instance_id}
  */
  readonly instanceId: string;
  /**
  * Log type, Values: CDS-AUDIT, CDS-RISK, CDB-AUDIT, TDSQL-C-AUDIT, MongoDB-AUDIT, MongoDB-SlowLog, MongoDB-ErrorLog, TDMYSQL-SLOW, DCDB-AUDIT, DCDB-SLOW, DCDB-ERROR, MariaDB-AUDIT, MariaDB-SLOW, MariaDB-ERROR, PostgreSQL-SLOW, PostgreSQL-ERROR, PostgreSQL-AUDIT, BH-FILELOG, BH-COMMANDLOG, APIS-ACCESS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cls_cloud_product_log_task#log_type ClsCloudProductLogTask#log_type}
  */
  readonly logType: string;
  /**
  * Log set name, it will be automatically created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cls_cloud_product_log_task#logset_name ClsCloudProductLogTask#logset_name}
  */
  readonly logsetName?: string;
  /**
  * The name of the log topic, it will be automatically created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cls_cloud_product_log_task#topic_name ClsCloudProductLogTask#topic_name}
  */
  readonly topicName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cls_cloud_product_log_task tencentcloud_cls_cloud_product_log_task}
*/
export class ClsCloudProductLogTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_cloud_product_log_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClsCloudProductLogTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClsCloudProductLogTask to import
  * @param importFromId The id of the existing ClsCloudProductLogTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cls_cloud_product_log_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClsCloudProductLogTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_cloud_product_log_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cls_cloud_product_log_task tencentcloud_cls_cloud_product_log_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClsCloudProductLogTaskConfig
  */
  public constructor(scope: Construct, id: string, config: ClsCloudProductLogTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_cloud_product_log_task',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assumerName = config.assumerName;
    this._cloudProductRegion = config.cloudProductRegion;
    this._clsRegion = config.clsRegion;
    this._extend = config.extend;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._logType = config.logType;
    this._logsetName = config.logsetName;
    this._topicName = config.topicName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assumer_name - computed: false, optional: false, required: true
  private _assumerName?: string; 
  public get assumerName() {
    return this.getStringAttribute('assumer_name');
  }
  public set assumerName(value: string) {
    this._assumerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assumerNameInput() {
    return this._assumerName;
  }

  // cloud_product_region - computed: false, optional: false, required: true
  private _cloudProductRegion?: string; 
  public get cloudProductRegion() {
    return this.getStringAttribute('cloud_product_region');
  }
  public set cloudProductRegion(value: string) {
    this._cloudProductRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProductRegionInput() {
    return this._cloudProductRegion;
  }

  // cls_region - computed: false, optional: false, required: true
  private _clsRegion?: string; 
  public get clsRegion() {
    return this.getStringAttribute('cls_region');
  }
  public set clsRegion(value: string) {
    this._clsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clsRegionInput() {
    return this._clsRegion;
  }

  // extend - computed: true, optional: true, required: false
  private _extend?: string; 
  public get extend() {
    return this.getStringAttribute('extend');
  }
  public set extend(value: string) {
    this._extend = value;
  }
  public resetExtend() {
    this._extend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendInput() {
    return this._extend;
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

  // logset_id - computed: true, optional: false, required: false
  public get logsetId() {
    return this.getStringAttribute('logset_id');
  }

  // logset_name - computed: false, optional: true, required: false
  private _logsetName?: string; 
  public get logsetName() {
    return this.getStringAttribute('logset_name');
  }
  public set logsetName(value: string) {
    this._logsetName = value;
  }
  public resetLogsetName() {
    this._logsetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsetNameInput() {
    return this._logsetName;
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }

  // topic_name - computed: false, optional: true, required: false
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  public resetTopicName() {
    this._topicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assumer_name: cdktf.stringToTerraform(this._assumerName),
      cloud_product_region: cdktf.stringToTerraform(this._cloudProductRegion),
      cls_region: cdktf.stringToTerraform(this._clsRegion),
      extend: cdktf.stringToTerraform(this._extend),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      log_type: cdktf.stringToTerraform(this._logType),
      logset_name: cdktf.stringToTerraform(this._logsetName),
      topic_name: cdktf.stringToTerraform(this._topicName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assumer_name: {
        value: cdktf.stringToHclTerraform(this._assumerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_product_region: {
        value: cdktf.stringToHclTerraform(this._cloudProductRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cls_region: {
        value: cdktf.stringToHclTerraform(this._clsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extend: {
        value: cdktf.stringToHclTerraform(this._extend),
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
      log_type: {
        value: cdktf.stringToHclTerraform(this._logType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logset_name: {
        value: cdktf.stringToHclTerraform(this._logsetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_name: {
        value: cdktf.stringToHclTerraform(this._topicName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
