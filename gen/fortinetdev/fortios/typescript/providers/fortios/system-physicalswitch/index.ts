// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_physicalswitch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemPhysicalswitchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_physicalswitch#age_enable SystemPhysicalswitch#age_enable}
  */
  readonly ageEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_physicalswitch#age_val SystemPhysicalswitch#age_val}
  */
  readonly ageVal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_physicalswitch#id SystemPhysicalswitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_physicalswitch#name SystemPhysicalswitch#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_physicalswitch#vdomparam SystemPhysicalswitch#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_physicalswitch fortios_system_physicalswitch}
*/
export class SystemPhysicalswitch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_physicalswitch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemPhysicalswitch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemPhysicalswitch to import
  * @param importFromId The id of the existing SystemPhysicalswitch that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_physicalswitch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemPhysicalswitch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_physicalswitch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_physicalswitch fortios_system_physicalswitch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemPhysicalswitchConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemPhysicalswitchConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_physicalswitch',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ageEnable = config.ageEnable;
    this._ageVal = config.ageVal;
    this._id = config.id;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // age_enable - computed: true, optional: true, required: false
  private _ageEnable?: string; 
  public get ageEnable() {
    return this.getStringAttribute('age_enable');
  }
  public set ageEnable(value: string) {
    this._ageEnable = value;
  }
  public resetAgeEnable() {
    this._ageEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageEnableInput() {
    return this._ageEnable;
  }

  // age_val - computed: true, optional: true, required: false
  private _ageVal?: number; 
  public get ageVal() {
    return this.getNumberAttribute('age_val');
  }
  public set ageVal(value: number) {
    this._ageVal = value;
  }
  public resetAgeVal() {
    this._ageVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageValInput() {
    return this._ageVal;
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

  // name - computed: true, optional: true, required: false
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      age_enable: cdktf.stringToTerraform(this._ageEnable),
      age_val: cdktf.numberToTerraform(this._ageVal),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      age_enable: {
        value: cdktf.stringToHclTerraform(this._ageEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      age_val: {
        value: cdktf.numberToHclTerraform(this._ageVal),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
