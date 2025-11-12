// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_ignore_validation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysUtEventActionIgnoreValidationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Skip validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_ignore_validation#all SysUtEventActionIgnoreValidationA#all}
  */
  readonly all?: number;
  /**
  * Direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_ignore_validation#direction SysUtEventActionIgnoreValidationA#direction}
  */
  readonly direction: string;
  /**
  * EventNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_ignore_validation#event_number SysUtEventActionIgnoreValidationA#event_number}
  */
  readonly eventNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_ignore_validation#id SysUtEventActionIgnoreValidationA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Dont validate TX descriptor. This includes Tx port, Len & vlan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_ignore_validation#l1 SysUtEventActionIgnoreValidationA#l1}
  */
  readonly l1?: number;
  /**
  * Dont validate L2 header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_ignore_validation#l2 SysUtEventActionIgnoreValidationA#l2}
  */
  readonly l2?: number;
  /**
  * Dont validate L3 header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_ignore_validation#l3 SysUtEventActionIgnoreValidationA#l3}
  */
  readonly l3?: number;
  /**
  * Dont validate L4 header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_ignore_validation#l4 SysUtEventActionIgnoreValidationA#l4}
  */
  readonly l4?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_ignore_validation#uuid SysUtEventActionIgnoreValidationA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_ignore_validation thunder_sys_ut_event_action_ignore_validation}
*/
export class SysUtEventActionIgnoreValidationA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sys_ut_event_action_ignore_validation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysUtEventActionIgnoreValidationA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysUtEventActionIgnoreValidationA to import
  * @param importFromId The id of the existing SysUtEventActionIgnoreValidationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_ignore_validation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysUtEventActionIgnoreValidationA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sys_ut_event_action_ignore_validation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_ignore_validation thunder_sys_ut_event_action_ignore_validation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysUtEventActionIgnoreValidationAConfig
  */
  public constructor(scope: Construct, id: string, config: SysUtEventActionIgnoreValidationAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_sys_ut_event_action_ignore_validation',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._all = config.all;
    this._direction = config.direction;
    this._eventNumber = config.eventNumber;
    this._id = config.id;
    this._l1 = config.l1;
    this._l2 = config.l2;
    this._l3 = config.l3;
    this._l4 = config.l4;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // event_number - computed: false, optional: false, required: true
  private _eventNumber?: string; 
  public get eventNumber() {
    return this.getStringAttribute('event_number');
  }
  public set eventNumber(value: string) {
    this._eventNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNumberInput() {
    return this._eventNumber;
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

  // l1 - computed: false, optional: true, required: false
  private _l1?: number; 
  public get l1() {
    return this.getNumberAttribute('l1');
  }
  public set l1(value: number) {
    this._l1 = value;
  }
  public resetL1() {
    this._l1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l1Input() {
    return this._l1;
  }

  // l2 - computed: false, optional: true, required: false
  private _l2?: number; 
  public get l2() {
    return this.getNumberAttribute('l2');
  }
  public set l2(value: number) {
    this._l2 = value;
  }
  public resetL2() {
    this._l2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2Input() {
    return this._l2;
  }

  // l3 - computed: false, optional: true, required: false
  private _l3?: number; 
  public get l3() {
    return this.getNumberAttribute('l3');
  }
  public set l3(value: number) {
    this._l3 = value;
  }
  public resetL3() {
    this._l3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3Input() {
    return this._l3;
  }

  // l4 - computed: false, optional: true, required: false
  private _l4?: number; 
  public get l4() {
    return this.getNumberAttribute('l4');
  }
  public set l4(value: number) {
    this._l4 = value;
  }
  public resetL4() {
    this._l4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Input() {
    return this._l4;
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
      all: cdktf.numberToTerraform(this._all),
      direction: cdktf.stringToTerraform(this._direction),
      event_number: cdktf.stringToTerraform(this._eventNumber),
      id: cdktf.stringToTerraform(this._id),
      l1: cdktf.numberToTerraform(this._l1),
      l2: cdktf.numberToTerraform(this._l2),
      l3: cdktf.numberToTerraform(this._l3),
      l4: cdktf.numberToTerraform(this._l4),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.numberToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_number: {
        value: cdktf.stringToHclTerraform(this._eventNumber),
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
      l1: {
        value: cdktf.numberToHclTerraform(this._l1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2: {
        value: cdktf.numberToHclTerraform(this._l2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3: {
        value: cdktf.numberToHclTerraform(this._l3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4: {
        value: cdktf.numberToHclTerraform(this._l4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
