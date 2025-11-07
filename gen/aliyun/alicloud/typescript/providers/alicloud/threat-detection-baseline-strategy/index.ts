// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_baseline_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatDetectionBaselineStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_baseline_strategy#baseline_strategy_name ThreatDetectionBaselineStrategy#baseline_strategy_name}
  */
  readonly baselineStrategyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_baseline_strategy#custom_type ThreatDetectionBaselineStrategy#custom_type}
  */
  readonly customType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_baseline_strategy#cycle_days ThreatDetectionBaselineStrategy#cycle_days}
  */
  readonly cycleDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_baseline_strategy#cycle_start_time ThreatDetectionBaselineStrategy#cycle_start_time}
  */
  readonly cycleStartTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_baseline_strategy#end_time ThreatDetectionBaselineStrategy#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_baseline_strategy#id ThreatDetectionBaselineStrategy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_baseline_strategy#risk_sub_type_name ThreatDetectionBaselineStrategy#risk_sub_type_name}
  */
  readonly riskSubTypeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_baseline_strategy#start_time ThreatDetectionBaselineStrategy#start_time}
  */
  readonly startTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_baseline_strategy#target_type ThreatDetectionBaselineStrategy#target_type}
  */
  readonly targetType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_baseline_strategy alicloud_threat_detection_baseline_strategy}
*/
export class ThreatDetectionBaselineStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_baseline_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatDetectionBaselineStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatDetectionBaselineStrategy to import
  * @param importFromId The id of the existing ThreatDetectionBaselineStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_baseline_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatDetectionBaselineStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_baseline_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_baseline_strategy alicloud_threat_detection_baseline_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatDetectionBaselineStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatDetectionBaselineStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_baseline_strategy',
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
    this._baselineStrategyName = config.baselineStrategyName;
    this._customType = config.customType;
    this._cycleDays = config.cycleDays;
    this._cycleStartTime = config.cycleStartTime;
    this._endTime = config.endTime;
    this._id = config.id;
    this._riskSubTypeName = config.riskSubTypeName;
    this._startTime = config.startTime;
    this._targetType = config.targetType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baseline_strategy_id - computed: true, optional: false, required: false
  public get baselineStrategyId() {
    return this.getStringAttribute('baseline_strategy_id');
  }

  // baseline_strategy_name - computed: false, optional: false, required: true
  private _baselineStrategyName?: string; 
  public get baselineStrategyName() {
    return this.getStringAttribute('baseline_strategy_name');
  }
  public set baselineStrategyName(value: string) {
    this._baselineStrategyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineStrategyNameInput() {
    return this._baselineStrategyName;
  }

  // custom_type - computed: false, optional: false, required: true
  private _customType?: string; 
  public get customType() {
    return this.getStringAttribute('custom_type');
  }
  public set customType(value: string) {
    this._customType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeInput() {
    return this._customType;
  }

  // cycle_days - computed: false, optional: false, required: true
  private _cycleDays?: number; 
  public get cycleDays() {
    return this.getNumberAttribute('cycle_days');
  }
  public set cycleDays(value: number) {
    this._cycleDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleDaysInput() {
    return this._cycleDays;
  }

  // cycle_start_time - computed: true, optional: true, required: false
  private _cycleStartTime?: number; 
  public get cycleStartTime() {
    return this.getNumberAttribute('cycle_start_time');
  }
  public set cycleStartTime(value: number) {
    this._cycleStartTime = value;
  }
  public resetCycleStartTime() {
    this._cycleStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleStartTimeInput() {
    return this._cycleStartTime;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // risk_sub_type_name - computed: false, optional: false, required: true
  private _riskSubTypeName?: string; 
  public get riskSubTypeName() {
    return this.getStringAttribute('risk_sub_type_name');
  }
  public set riskSubTypeName(value: string) {
    this._riskSubTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get riskSubTypeNameInput() {
    return this._riskSubTypeName;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      baseline_strategy_name: cdktf.stringToTerraform(this._baselineStrategyName),
      custom_type: cdktf.stringToTerraform(this._customType),
      cycle_days: cdktf.numberToTerraform(this._cycleDays),
      cycle_start_time: cdktf.numberToTerraform(this._cycleStartTime),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      risk_sub_type_name: cdktf.stringToTerraform(this._riskSubTypeName),
      start_time: cdktf.stringToTerraform(this._startTime),
      target_type: cdktf.stringToTerraform(this._targetType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      baseline_strategy_name: {
        value: cdktf.stringToHclTerraform(this._baselineStrategyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_type: {
        value: cdktf.stringToHclTerraform(this._customType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cycle_days: {
        value: cdktf.numberToHclTerraform(this._cycleDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cycle_start_time: {
        value: cdktf.numberToHclTerraform(this._cycleStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      risk_sub_type_name: {
        value: cdktf.stringToHclTerraform(this._riskSubTypeName),
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
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
