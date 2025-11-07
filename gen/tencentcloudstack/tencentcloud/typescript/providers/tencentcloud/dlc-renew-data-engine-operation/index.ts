// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_renew_data_engine_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcRenewDataEngineOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * CU queue name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_renew_data_engine_operation#data_engine_name DlcRenewDataEngineOperation#data_engine_name}
  */
  readonly dataEngineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_renew_data_engine_operation#id DlcRenewDataEngineOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Payment type. It is 1 by default and is prepaid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_renew_data_engine_operation#pay_mode DlcRenewDataEngineOperation#pay_mode}
  */
  readonly payMode?: number;
  /**
  * Auto-renewal flag: 0 means the initial status, and there is no automatic renewal by default. If the user has the privilege to retain services with prepayment, there will be an automatic renewal. 1 means that there is an automatic renewal. 2 means that there is surely no automatic renewal. If it is not specified, the parameter is 0 by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_renew_data_engine_operation#renew_flag DlcRenewDataEngineOperation#renew_flag}
  */
  readonly renewFlag?: number;
  /**
  * Renewal period in months, which is at least one month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_renew_data_engine_operation#time_span DlcRenewDataEngineOperation#time_span}
  */
  readonly timeSpan: number;
  /**
  * Unit. It is m by default, and only m can be filled in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_renew_data_engine_operation#time_unit DlcRenewDataEngineOperation#time_unit}
  */
  readonly timeUnit?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_renew_data_engine_operation tencentcloud_dlc_renew_data_engine_operation}
*/
export class DlcRenewDataEngineOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_renew_data_engine_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcRenewDataEngineOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcRenewDataEngineOperation to import
  * @param importFromId The id of the existing DlcRenewDataEngineOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_renew_data_engine_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcRenewDataEngineOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_renew_data_engine_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_renew_data_engine_operation tencentcloud_dlc_renew_data_engine_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcRenewDataEngineOperationConfig
  */
  public constructor(scope: Construct, id: string, config: DlcRenewDataEngineOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_renew_data_engine_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataEngineName = config.dataEngineName;
    this._id = config.id;
    this._payMode = config.payMode;
    this._renewFlag = config.renewFlag;
    this._timeSpan = config.timeSpan;
    this._timeUnit = config.timeUnit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_engine_name - computed: false, optional: false, required: true
  private _dataEngineName?: string; 
  public get dataEngineName() {
    return this.getStringAttribute('data_engine_name');
  }
  public set dataEngineName(value: string) {
    this._dataEngineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineNameInput() {
    return this._dataEngineName;
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

  // pay_mode - computed: false, optional: true, required: false
  private _payMode?: number; 
  public get payMode() {
    return this.getNumberAttribute('pay_mode');
  }
  public set payMode(value: number) {
    this._payMode = value;
  }
  public resetPayMode() {
    this._payMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payModeInput() {
    return this._payMode;
  }

  // renew_flag - computed: false, optional: true, required: false
  private _renewFlag?: number; 
  public get renewFlag() {
    return this.getNumberAttribute('renew_flag');
  }
  public set renewFlag(value: number) {
    this._renewFlag = value;
  }
  public resetRenewFlag() {
    this._renewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewFlagInput() {
    return this._renewFlag;
  }

  // time_span - computed: false, optional: false, required: true
  private _timeSpan?: number; 
  public get timeSpan() {
    return this.getNumberAttribute('time_span');
  }
  public set timeSpan(value: number) {
    this._timeSpan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanInput() {
    return this._timeSpan;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_engine_name: cdktf.stringToTerraform(this._dataEngineName),
      id: cdktf.stringToTerraform(this._id),
      pay_mode: cdktf.numberToTerraform(this._payMode),
      renew_flag: cdktf.numberToTerraform(this._renewFlag),
      time_span: cdktf.numberToTerraform(this._timeSpan),
      time_unit: cdktf.stringToTerraform(this._timeUnit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_engine_name: {
        value: cdktf.stringToHclTerraform(this._dataEngineName),
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
      pay_mode: {
        value: cdktf.numberToHclTerraform(this._payMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renew_flag: {
        value: cdktf.numberToHclTerraform(this._renewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_span: {
        value: cdktf.numberToHclTerraform(this._timeSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_unit: {
        value: cdktf.stringToHclTerraform(this._timeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
