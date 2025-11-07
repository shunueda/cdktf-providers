// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_job_monitor_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtsJobMonitorRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_job_monitor_rule#delay_rule_time DtsJobMonitorRule#delay_rule_time}
  */
  readonly delayRuleTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_job_monitor_rule#dts_job_id DtsJobMonitorRule#dts_job_id}
  */
  readonly dtsJobId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_job_monitor_rule#id DtsJobMonitorRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_job_monitor_rule#phone DtsJobMonitorRule#phone}
  */
  readonly phone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_job_monitor_rule#state DtsJobMonitorRule#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_job_monitor_rule#type DtsJobMonitorRule#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_job_monitor_rule alicloud_dts_job_monitor_rule}
*/
export class DtsJobMonitorRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dts_job_monitor_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtsJobMonitorRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtsJobMonitorRule to import
  * @param importFromId The id of the existing DtsJobMonitorRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_job_monitor_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtsJobMonitorRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dts_job_monitor_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_job_monitor_rule alicloud_dts_job_monitor_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtsJobMonitorRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DtsJobMonitorRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dts_job_monitor_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delayRuleTime = config.delayRuleTime;
    this._dtsJobId = config.dtsJobId;
    this._id = config.id;
    this._phone = config.phone;
    this._state = config.state;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay_rule_time - computed: true, optional: true, required: false
  private _delayRuleTime?: string; 
  public get delayRuleTime() {
    return this.getStringAttribute('delay_rule_time');
  }
  public set delayRuleTime(value: string) {
    this._delayRuleTime = value;
  }
  public resetDelayRuleTime() {
    this._delayRuleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayRuleTimeInput() {
    return this._delayRuleTime;
  }

  // dts_job_id - computed: false, optional: false, required: true
  private _dtsJobId?: string; 
  public get dtsJobId() {
    return this.getStringAttribute('dts_job_id');
  }
  public set dtsJobId(value: string) {
    this._dtsJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dtsJobIdInput() {
    return this._dtsJobId;
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

  // phone - computed: false, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delay_rule_time: cdktf.stringToTerraform(this._delayRuleTime),
      dts_job_id: cdktf.stringToTerraform(this._dtsJobId),
      id: cdktf.stringToTerraform(this._id),
      phone: cdktf.stringToTerraform(this._phone),
      state: cdktf.stringToTerraform(this._state),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay_rule_time: {
        value: cdktf.stringToHclTerraform(this._delayRuleTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dts_job_id: {
        value: cdktf.stringToHclTerraform(this._dtsJobId),
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
      phone: {
        value: cdktf.stringToHclTerraform(this._phone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
