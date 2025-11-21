// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_log_post_cls_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafLogPostClsFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * The region where the CLS is delivered. The default value is ap-shanghai.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_log_post_cls_flow#cls_region WafLogPostClsFlow#cls_region}
  */
  readonly clsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_log_post_cls_flow#id WafLogPostClsFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the log subject where the submitted CLS is located. The default value is waf_post_logtopic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_log_post_cls_flow#log_topic_name WafLogPostClsFlow#log_topic_name}
  */
  readonly logTopicName?: string;
  /**
  * 1- Access log, 2- Attack log, the default is access log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_log_post_cls_flow#log_type WafLogPostClsFlow#log_type}
  */
  readonly logType?: number;
  /**
  * The name of the log set where the delivered CLS is located. The default value is waf_post_logset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_log_post_cls_flow#logset_name WafLogPostClsFlow#logset_name}
  */
  readonly logsetName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_log_post_cls_flow tencentcloud_waf_log_post_cls_flow}
*/
export class WafLogPostClsFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_log_post_cls_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafLogPostClsFlow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafLogPostClsFlow to import
  * @param importFromId The id of the existing WafLogPostClsFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_log_post_cls_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafLogPostClsFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_log_post_cls_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_log_post_cls_flow tencentcloud_waf_log_post_cls_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafLogPostClsFlowConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WafLogPostClsFlowConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_log_post_cls_flow',
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
    this._id = config.id;
    this._logTopicName = config.logTopicName;
    this._logType = config.logType;
    this._logsetName = config.logsetName;
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

  // flow_id - computed: true, optional: false, required: false
  public get flowId() {
    return this.getNumberAttribute('flow_id');
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

  // log_topic_id - computed: true, optional: false, required: false
  public get logTopicId() {
    return this.getStringAttribute('log_topic_id');
  }

  // log_topic_name - computed: true, optional: true, required: false
  private _logTopicName?: string; 
  public get logTopicName() {
    return this.getStringAttribute('log_topic_name');
  }
  public set logTopicName(value: string) {
    this._logTopicName = value;
  }
  public resetLogTopicName() {
    this._logTopicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTopicNameInput() {
    return this._logTopicName;
  }

  // log_type - computed: true, optional: true, required: false
  private _logType?: number; 
  public get logType() {
    return this.getNumberAttribute('log_type');
  }
  public set logType(value: number) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // logset_id - computed: true, optional: false, required: false
  public get logsetId() {
    return this.getStringAttribute('logset_id');
  }

  // logset_name - computed: true, optional: true, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cls_region: cdktf.stringToTerraform(this._clsRegion),
      id: cdktf.stringToTerraform(this._id),
      log_topic_name: cdktf.stringToTerraform(this._logTopicName),
      log_type: cdktf.numberToTerraform(this._logType),
      logset_name: cdktf.stringToTerraform(this._logsetName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_topic_name: {
        value: cdktf.stringToHclTerraform(this._logTopicName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_type: {
        value: cdktf.numberToHclTerraform(this._logType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logset_name: {
        value: cdktf.stringToHclTerraform(this._logsetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
