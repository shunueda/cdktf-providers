// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_car
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagQosCarConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_car#description SagQosCar#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_car#id SagQosCar#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_car#limit_type SagQosCar#limit_type}
  */
  readonly limitType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_car#max_bandwidth_abs SagQosCar#max_bandwidth_abs}
  */
  readonly maxBandwidthAbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_car#max_bandwidth_percent SagQosCar#max_bandwidth_percent}
  */
  readonly maxBandwidthPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_car#min_bandwidth_abs SagQosCar#min_bandwidth_abs}
  */
  readonly minBandwidthAbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_car#min_bandwidth_percent SagQosCar#min_bandwidth_percent}
  */
  readonly minBandwidthPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_car#name SagQosCar#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_car#percent_source_type SagQosCar#percent_source_type}
  */
  readonly percentSourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_car#priority SagQosCar#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_car#qos_id SagQosCar#qos_id}
  */
  readonly qosId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_car alicloud_sag_qos_car}
*/
export class SagQosCar extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sag_qos_car";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagQosCar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagQosCar to import
  * @param importFromId The id of the existing SagQosCar that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_car#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagQosCar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sag_qos_car", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_car alicloud_sag_qos_car} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagQosCarConfig
  */
  public constructor(scope: Construct, id: string, config: SagQosCarConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sag_qos_car',
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
    this._description = config.description;
    this._id = config.id;
    this._limitType = config.limitType;
    this._maxBandwidthAbs = config.maxBandwidthAbs;
    this._maxBandwidthPercent = config.maxBandwidthPercent;
    this._minBandwidthAbs = config.minBandwidthAbs;
    this._minBandwidthPercent = config.minBandwidthPercent;
    this._name = config.name;
    this._percentSourceType = config.percentSourceType;
    this._priority = config.priority;
    this._qosId = config.qosId;
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

  // limit_type - computed: false, optional: false, required: true
  private _limitType?: string; 
  public get limitType() {
    return this.getStringAttribute('limit_type');
  }
  public set limitType(value: string) {
    this._limitType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitTypeInput() {
    return this._limitType;
  }

  // max_bandwidth_abs - computed: false, optional: true, required: false
  private _maxBandwidthAbs?: number; 
  public get maxBandwidthAbs() {
    return this.getNumberAttribute('max_bandwidth_abs');
  }
  public set maxBandwidthAbs(value: number) {
    this._maxBandwidthAbs = value;
  }
  public resetMaxBandwidthAbs() {
    this._maxBandwidthAbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBandwidthAbsInput() {
    return this._maxBandwidthAbs;
  }

  // max_bandwidth_percent - computed: false, optional: true, required: false
  private _maxBandwidthPercent?: number; 
  public get maxBandwidthPercent() {
    return this.getNumberAttribute('max_bandwidth_percent');
  }
  public set maxBandwidthPercent(value: number) {
    this._maxBandwidthPercent = value;
  }
  public resetMaxBandwidthPercent() {
    this._maxBandwidthPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBandwidthPercentInput() {
    return this._maxBandwidthPercent;
  }

  // min_bandwidth_abs - computed: false, optional: true, required: false
  private _minBandwidthAbs?: number; 
  public get minBandwidthAbs() {
    return this.getNumberAttribute('min_bandwidth_abs');
  }
  public set minBandwidthAbs(value: number) {
    this._minBandwidthAbs = value;
  }
  public resetMinBandwidthAbs() {
    this._minBandwidthAbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBandwidthAbsInput() {
    return this._minBandwidthAbs;
  }

  // min_bandwidth_percent - computed: false, optional: true, required: false
  private _minBandwidthPercent?: number; 
  public get minBandwidthPercent() {
    return this.getNumberAttribute('min_bandwidth_percent');
  }
  public set minBandwidthPercent(value: number) {
    this._minBandwidthPercent = value;
  }
  public resetMinBandwidthPercent() {
    this._minBandwidthPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBandwidthPercentInput() {
    return this._minBandwidthPercent;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // percent_source_type - computed: false, optional: true, required: false
  private _percentSourceType?: string; 
  public get percentSourceType() {
    return this.getStringAttribute('percent_source_type');
  }
  public set percentSourceType(value: string) {
    this._percentSourceType = value;
  }
  public resetPercentSourceType() {
    this._percentSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentSourceTypeInput() {
    return this._percentSourceType;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // qos_id - computed: false, optional: false, required: true
  private _qosId?: string; 
  public get qosId() {
    return this.getStringAttribute('qos_id');
  }
  public set qosId(value: string) {
    this._qosId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qosIdInput() {
    return this._qosId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      limit_type: cdktf.stringToTerraform(this._limitType),
      max_bandwidth_abs: cdktf.numberToTerraform(this._maxBandwidthAbs),
      max_bandwidth_percent: cdktf.numberToTerraform(this._maxBandwidthPercent),
      min_bandwidth_abs: cdktf.numberToTerraform(this._minBandwidthAbs),
      min_bandwidth_percent: cdktf.numberToTerraform(this._minBandwidthPercent),
      name: cdktf.stringToTerraform(this._name),
      percent_source_type: cdktf.stringToTerraform(this._percentSourceType),
      priority: cdktf.numberToTerraform(this._priority),
      qos_id: cdktf.stringToTerraform(this._qosId),
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
      limit_type: {
        value: cdktf.stringToHclTerraform(this._limitType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_bandwidth_abs: {
        value: cdktf.numberToHclTerraform(this._maxBandwidthAbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_bandwidth_percent: {
        value: cdktf.numberToHclTerraform(this._maxBandwidthPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_bandwidth_abs: {
        value: cdktf.numberToHclTerraform(this._minBandwidthAbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_bandwidth_percent: {
        value: cdktf.numberToHclTerraform(this._minBandwidthPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      percent_source_type: {
        value: cdktf.stringToHclTerraform(this._percentSourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_id: {
        value: cdktf.stringToHclTerraform(this._qosId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
