// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerTrafficpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy#cos_queue SwitchcontrollerTrafficpolicy#cos_queue}
  */
  readonly cosQueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy#description SwitchcontrollerTrafficpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy#device_name SwitchcontrollerTrafficpolicy#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy#device_vdom SwitchcontrollerTrafficpolicy#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy#fosid SwitchcontrollerTrafficpolicy#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy#guaranteed_bandwidth SwitchcontrollerTrafficpolicy#guaranteed_bandwidth}
  */
  readonly guaranteedBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy#guaranteed_burst SwitchcontrollerTrafficpolicy#guaranteed_burst}
  */
  readonly guaranteedBurst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy#id SwitchcontrollerTrafficpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy#maximum_burst SwitchcontrollerTrafficpolicy#maximum_burst}
  */
  readonly maximumBurst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy#name SwitchcontrollerTrafficpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy#policer_status SwitchcontrollerTrafficpolicy#policer_status}
  */
  readonly policerStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy#type SwitchcontrollerTrafficpolicy#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy fmgdevice_switchcontroller_trafficpolicy}
*/
export class SwitchcontrollerTrafficpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_trafficpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerTrafficpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerTrafficpolicy to import
  * @param importFromId The id of the existing SwitchcontrollerTrafficpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerTrafficpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_trafficpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficpolicy fmgdevice_switchcontroller_trafficpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerTrafficpolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerTrafficpolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_trafficpolicy',
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
    this._cosQueue = config.cosQueue;
    this._description = config.description;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._fosid = config.fosid;
    this._guaranteedBandwidth = config.guaranteedBandwidth;
    this._guaranteedBurst = config.guaranteedBurst;
    this._id = config.id;
    this._maximumBurst = config.maximumBurst;
    this._name = config.name;
    this._policerStatus = config.policerStatus;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cos_queue - computed: false, optional: true, required: false
  private _cosQueue?: number; 
  public get cosQueue() {
    return this.getNumberAttribute('cos_queue');
  }
  public set cosQueue(value: number) {
    this._cosQueue = value;
  }
  public resetCosQueue() {
    this._cosQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosQueueInput() {
    return this._cosQueue;
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

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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

  // guaranteed_bandwidth - computed: true, optional: true, required: false
  private _guaranteedBandwidth?: number; 
  public get guaranteedBandwidth() {
    return this.getNumberAttribute('guaranteed_bandwidth');
  }
  public set guaranteedBandwidth(value: number) {
    this._guaranteedBandwidth = value;
  }
  public resetGuaranteedBandwidth() {
    this._guaranteedBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedBandwidthInput() {
    return this._guaranteedBandwidth;
  }

  // guaranteed_burst - computed: true, optional: true, required: false
  private _guaranteedBurst?: number; 
  public get guaranteedBurst() {
    return this.getNumberAttribute('guaranteed_burst');
  }
  public set guaranteedBurst(value: number) {
    this._guaranteedBurst = value;
  }
  public resetGuaranteedBurst() {
    this._guaranteedBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedBurstInput() {
    return this._guaranteedBurst;
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

  // maximum_burst - computed: true, optional: true, required: false
  private _maximumBurst?: number; 
  public get maximumBurst() {
    return this.getNumberAttribute('maximum_burst');
  }
  public set maximumBurst(value: number) {
    this._maximumBurst = value;
  }
  public resetMaximumBurst() {
    this._maximumBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBurstInput() {
    return this._maximumBurst;
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

  // policer_status - computed: true, optional: true, required: false
  private _policerStatus?: string; 
  public get policerStatus() {
    return this.getStringAttribute('policer_status');
  }
  public set policerStatus(value: string) {
    this._policerStatus = value;
  }
  public resetPolicerStatus() {
    this._policerStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policerStatusInput() {
    return this._policerStatus;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
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
      cos_queue: cdktf.numberToTerraform(this._cosQueue),
      description: cdktf.stringToTerraform(this._description),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fosid: cdktf.numberToTerraform(this._fosid),
      guaranteed_bandwidth: cdktf.numberToTerraform(this._guaranteedBandwidth),
      guaranteed_burst: cdktf.numberToTerraform(this._guaranteedBurst),
      id: cdktf.stringToTerraform(this._id),
      maximum_burst: cdktf.numberToTerraform(this._maximumBurst),
      name: cdktf.stringToTerraform(this._name),
      policer_status: cdktf.stringToTerraform(this._policerStatus),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cos_queue: {
        value: cdktf.numberToHclTerraform(this._cosQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
      guaranteed_bandwidth: {
        value: cdktf.numberToHclTerraform(this._guaranteedBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_burst: {
        value: cdktf.numberToHclTerraform(this._guaranteedBurst),
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
      maximum_burst: {
        value: cdktf.numberToHclTerraform(this._maximumBurst),
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
      policer_status: {
        value: cdktf.stringToHclTerraform(this._policerStatus),
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
