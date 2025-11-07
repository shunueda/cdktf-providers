// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationstitch_actions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAutomationstitchActionsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationstitch_actions#action SystemAutomationstitchActionsA#action}
  */
  readonly action?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationstitch_actions#automation_stitch SystemAutomationstitchActionsA#automation_stitch}
  */
  readonly automationStitch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationstitch_actions#delay SystemAutomationstitchActionsA#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationstitch_actions#device_name SystemAutomationstitchActionsA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationstitch_actions#fosid SystemAutomationstitchActionsA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationstitch_actions#id SystemAutomationstitchActionsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationstitch_actions#required SystemAutomationstitchActionsA#required}
  */
  readonly required?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationstitch_actions fmgdevice_system_automationstitch_actions}
*/
export class SystemAutomationstitchActionsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_automationstitch_actions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAutomationstitchActionsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAutomationstitchActionsA to import
  * @param importFromId The id of the existing SystemAutomationstitchActionsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationstitch_actions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAutomationstitchActionsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_automationstitch_actions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationstitch_actions fmgdevice_system_automationstitch_actions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAutomationstitchActionsAConfig
  */
  public constructor(scope: Construct, id: string, config: SystemAutomationstitchActionsAConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_automationstitch_actions',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._automationStitch = config.automationStitch;
    this._delay = config.delay;
    this._deviceName = config.deviceName;
    this._fosid = config.fosid;
    this._id = config.id;
    this._required = config.required;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string[]; 
  public get action() {
    return cdktf.Fn.tolist(this.getListAttribute('action'));
  }
  public set action(value: string[]) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // automation_stitch - computed: false, optional: false, required: true
  private _automationStitch?: string; 
  public get automationStitch() {
    return this.getStringAttribute('automation_stitch');
  }
  public set automationStitch(value: string) {
    this._automationStitch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automationStitchInput() {
    return this._automationStitch;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // required - computed: true, optional: true, required: false
  private _required?: string; 
  public get required() {
    return this.getStringAttribute('required');
  }
  public set required(value: string) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.listMapper(cdktf.stringToTerraform, false)(this._action),
      automation_stitch: cdktf.stringToTerraform(this._automationStitch),
      delay: cdktf.numberToTerraform(this._delay),
      device_name: cdktf.stringToTerraform(this._deviceName),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      required: cdktf.stringToTerraform(this._required),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._action),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      automation_stitch: {
        value: cdktf.stringToHclTerraform(this._automationStitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      required: {
        value: cdktf.stringToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
