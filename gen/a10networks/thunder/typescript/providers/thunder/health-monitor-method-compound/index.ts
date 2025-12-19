// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_compound
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodCompoundAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Compound type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_compound#compound HealthMonitorMethodCompoundA#compound}
  */
  readonly compound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_compound#id HealthMonitorMethodCompoundA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_compound#monitor_name HealthMonitorMethodCompoundA#monitor_name}
  */
  readonly monitorName: string;
  /**
  * Enter Reverse Polish Notation, example: sub hm1 sub hm2 and
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_compound#rpn_string HealthMonitorMethodCompoundA#rpn_string}
  */
  readonly rpnString?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_compound#uuid HealthMonitorMethodCompoundA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_compound thunder_health_monitor_method_compound}
*/
export class HealthMonitorMethodCompoundA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_compound";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodCompoundA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodCompoundA to import
  * @param importFromId The id of the existing HealthMonitorMethodCompoundA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_compound#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodCompoundA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_compound", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_compound thunder_health_monitor_method_compound} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodCompoundAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodCompoundAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_compound',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compound = config.compound;
    this._id = config.id;
    this._monitorName = config.monitorName;
    this._rpnString = config.rpnString;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compound - computed: false, optional: true, required: false
  private _compound?: number; 
  public get compound() {
    return this.getNumberAttribute('compound');
  }
  public set compound(value: number) {
    this._compound = value;
  }
  public resetCompound() {
    this._compound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compoundInput() {
    return this._compound;
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

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // rpn_string - computed: false, optional: true, required: false
  private _rpnString?: string; 
  public get rpnString() {
    return this.getStringAttribute('rpn_string');
  }
  public set rpnString(value: string) {
    this._rpnString = value;
  }
  public resetRpnString() {
    this._rpnString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpnStringInput() {
    return this._rpnString;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compound: cdktf.numberToTerraform(this._compound),
      id: cdktf.stringToTerraform(this._id),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      rpn_string: cdktf.stringToTerraform(this._rpnString),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compound: {
        value: cdktf.numberToHclTerraform(this._compound),
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
      monitor_name: {
        value: cdktf.stringToHclTerraform(this._monitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpn_string: {
        value: cdktf.stringToHclTerraform(this._rpnString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
