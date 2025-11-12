// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_affinitypacketredistribution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAffinitypacketredistributionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_affinitypacketredistribution#affinity_cpumask SystemAffinitypacketredistribution#affinity_cpumask}
  */
  readonly affinityCpumask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_affinitypacketredistribution#device_name SystemAffinitypacketredistribution#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_affinitypacketredistribution#fosid SystemAffinitypacketredistribution#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_affinitypacketredistribution#id SystemAffinitypacketredistribution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_affinitypacketredistribution#interface SystemAffinitypacketredistribution#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_affinitypacketredistribution#round_robin SystemAffinitypacketredistribution#round_robin}
  */
  readonly roundRobin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_affinitypacketredistribution#rxqid SystemAffinitypacketredistribution#rxqid}
  */
  readonly rxqid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_affinitypacketredistribution fmgdevice_system_affinitypacketredistribution}
*/
export class SystemAffinitypacketredistribution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_affinitypacketredistribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAffinitypacketredistribution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAffinitypacketredistribution to import
  * @param importFromId The id of the existing SystemAffinitypacketredistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_affinitypacketredistribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAffinitypacketredistribution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_affinitypacketredistribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_affinitypacketredistribution fmgdevice_system_affinitypacketredistribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAffinitypacketredistributionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAffinitypacketredistributionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_affinitypacketredistribution',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._affinityCpumask = config.affinityCpumask;
    this._deviceName = config.deviceName;
    this._fosid = config.fosid;
    this._id = config.id;
    this._interface = config.interface;
    this._roundRobin = config.roundRobin;
    this._rxqid = config.rxqid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_cpumask - computed: false, optional: true, required: false
  private _affinityCpumask?: string; 
  public get affinityCpumask() {
    return this.getStringAttribute('affinity_cpumask');
  }
  public set affinityCpumask(value: string) {
    this._affinityCpumask = value;
  }
  public resetAffinityCpumask() {
    this._affinityCpumask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityCpumaskInput() {
    return this._affinityCpumask;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // round_robin - computed: true, optional: true, required: false
  private _roundRobin?: string; 
  public get roundRobin() {
    return this.getStringAttribute('round_robin');
  }
  public set roundRobin(value: string) {
    this._roundRobin = value;
  }
  public resetRoundRobin() {
    this._roundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundRobinInput() {
    return this._roundRobin;
  }

  // rxqid - computed: false, optional: true, required: false
  private _rxqid?: number; 
  public get rxqid() {
    return this.getNumberAttribute('rxqid');
  }
  public set rxqid(value: number) {
    this._rxqid = value;
  }
  public resetRxqid() {
    this._rxqid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxqidInput() {
    return this._rxqid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affinity_cpumask: cdktf.stringToTerraform(this._affinityCpumask),
      device_name: cdktf.stringToTerraform(this._deviceName),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      round_robin: cdktf.stringToTerraform(this._roundRobin),
      rxqid: cdktf.numberToTerraform(this._rxqid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affinity_cpumask: {
        value: cdktf.stringToHclTerraform(this._affinityCpumask),
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
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      round_robin: {
        value: cdktf.stringToHclTerraform(this._roundRobin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rxqid: {
        value: cdktf.numberToHclTerraform(this._rxqid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
