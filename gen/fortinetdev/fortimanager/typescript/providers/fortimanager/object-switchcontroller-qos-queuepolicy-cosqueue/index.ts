// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerQosQueuepolicyCosqueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue#adom ObjectSwitchcontrollerQosQueuepolicyCosqueue#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue#description ObjectSwitchcontrollerQosQueuepolicyCosqueue#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue#drop_policy ObjectSwitchcontrollerQosQueuepolicyCosqueue#drop_policy}
  */
  readonly dropPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue#ecn ObjectSwitchcontrollerQosQueuepolicyCosqueue#ecn}
  */
  readonly ecn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue#id ObjectSwitchcontrollerQosQueuepolicyCosqueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue#max_rate ObjectSwitchcontrollerQosQueuepolicyCosqueue#max_rate}
  */
  readonly maxRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue#max_rate_percent ObjectSwitchcontrollerQosQueuepolicyCosqueue#max_rate_percent}
  */
  readonly maxRatePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue#min_rate ObjectSwitchcontrollerQosQueuepolicyCosqueue#min_rate}
  */
  readonly minRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue#min_rate_percent ObjectSwitchcontrollerQosQueuepolicyCosqueue#min_rate_percent}
  */
  readonly minRatePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue#name ObjectSwitchcontrollerQosQueuepolicyCosqueue#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue#queue_policy ObjectSwitchcontrollerQosQueuepolicyCosqueue#queue_policy}
  */
  readonly queuePolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue#scopetype ObjectSwitchcontrollerQosQueuepolicyCosqueue#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue#weight ObjectSwitchcontrollerQosQueuepolicyCosqueue#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue fortimanager_object_switchcontroller_qos_queuepolicy_cosqueue}
*/
export class ObjectSwitchcontrollerQosQueuepolicyCosqueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_qos_queuepolicy_cosqueue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerQosQueuepolicyCosqueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerQosQueuepolicyCosqueue to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerQosQueuepolicyCosqueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerQosQueuepolicyCosqueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_qos_queuepolicy_cosqueue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_queuepolicy_cosqueue fortimanager_object_switchcontroller_qos_queuepolicy_cosqueue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerQosQueuepolicyCosqueueConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerQosQueuepolicyCosqueueConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_qos_queuepolicy_cosqueue',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._description = config.description;
    this._dropPolicy = config.dropPolicy;
    this._ecn = config.ecn;
    this._id = config.id;
    this._maxRate = config.maxRate;
    this._maxRatePercent = config.maxRatePercent;
    this._minRate = config.minRate;
    this._minRatePercent = config.minRatePercent;
    this._name = config.name;
    this._queuePolicy = config.queuePolicy;
    this._scopetype = config.scopetype;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

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

  // drop_policy - computed: true, optional: true, required: false
  private _dropPolicy?: string; 
  public get dropPolicy() {
    return this.getStringAttribute('drop_policy');
  }
  public set dropPolicy(value: string) {
    this._dropPolicy = value;
  }
  public resetDropPolicy() {
    this._dropPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropPolicyInput() {
    return this._dropPolicy;
  }

  // ecn - computed: true, optional: true, required: false
  private _ecn?: string; 
  public get ecn() {
    return this.getStringAttribute('ecn');
  }
  public set ecn(value: string) {
    this._ecn = value;
  }
  public resetEcn() {
    this._ecn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecnInput() {
    return this._ecn;
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

  // max_rate - computed: false, optional: true, required: false
  private _maxRate?: number; 
  public get maxRate() {
    return this.getNumberAttribute('max_rate');
  }
  public set maxRate(value: number) {
    this._maxRate = value;
  }
  public resetMaxRate() {
    this._maxRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRateInput() {
    return this._maxRate;
  }

  // max_rate_percent - computed: false, optional: true, required: false
  private _maxRatePercent?: number; 
  public get maxRatePercent() {
    return this.getNumberAttribute('max_rate_percent');
  }
  public set maxRatePercent(value: number) {
    this._maxRatePercent = value;
  }
  public resetMaxRatePercent() {
    this._maxRatePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRatePercentInput() {
    return this._maxRatePercent;
  }

  // min_rate - computed: false, optional: true, required: false
  private _minRate?: number; 
  public get minRate() {
    return this.getNumberAttribute('min_rate');
  }
  public set minRate(value: number) {
    this._minRate = value;
  }
  public resetMinRate() {
    this._minRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRateInput() {
    return this._minRate;
  }

  // min_rate_percent - computed: false, optional: true, required: false
  private _minRatePercent?: number; 
  public get minRatePercent() {
    return this.getNumberAttribute('min_rate_percent');
  }
  public set minRatePercent(value: number) {
    this._minRatePercent = value;
  }
  public resetMinRatePercent() {
    this._minRatePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRatePercentInput() {
    return this._minRatePercent;
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

  // queue_policy - computed: false, optional: false, required: true
  private _queuePolicy?: string; 
  public get queuePolicy() {
    return this.getStringAttribute('queue_policy');
  }
  public set queuePolicy(value: string) {
    this._queuePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queuePolicyInput() {
    return this._queuePolicy;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      description: cdktf.stringToTerraform(this._description),
      drop_policy: cdktf.stringToTerraform(this._dropPolicy),
      ecn: cdktf.stringToTerraform(this._ecn),
      id: cdktf.stringToTerraform(this._id),
      max_rate: cdktf.numberToTerraform(this._maxRate),
      max_rate_percent: cdktf.numberToTerraform(this._maxRatePercent),
      min_rate: cdktf.numberToTerraform(this._minRate),
      min_rate_percent: cdktf.numberToTerraform(this._minRatePercent),
      name: cdktf.stringToTerraform(this._name),
      queue_policy: cdktf.stringToTerraform(this._queuePolicy),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_policy: {
        value: cdktf.stringToHclTerraform(this._dropPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecn: {
        value: cdktf.stringToHclTerraform(this._ecn),
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
      max_rate: {
        value: cdktf.numberToHclTerraform(this._maxRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_rate_percent: {
        value: cdktf.numberToHclTerraform(this._maxRatePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_rate: {
        value: cdktf.numberToHclTerraform(this._minRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_rate_percent: {
        value: cdktf.numberToHclTerraform(this._minRatePercent),
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
      queue_policy: {
        value: cdktf.stringToHclTerraform(this._queuePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
