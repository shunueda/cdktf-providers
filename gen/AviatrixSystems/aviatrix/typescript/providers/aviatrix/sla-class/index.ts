// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/sla_class
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlaClassConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/sla_class#id SlaClass#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Jitter of sla class in ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/sla_class#jitter SlaClass#jitter}
  */
  readonly jitter: number;
  /**
  * Latency of sla class in ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/sla_class#latency SlaClass#latency}
  */
  readonly latency: number;
  /**
  * Name of SLA class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/sla_class#name SlaClass#name}
  */
  readonly name: string;
  /**
  * Packet drop rate of sla class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/sla_class#packet_drop_rate SlaClass#packet_drop_rate}
  */
  readonly packetDropRate: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/sla_class aviatrix_sla_class}
*/
export class SlaClass extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_sla_class";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlaClass resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlaClass to import
  * @param importFromId The id of the existing SlaClass that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/sla_class#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlaClass to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_sla_class", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/sla_class aviatrix_sla_class} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlaClassConfig
  */
  public constructor(scope: Construct, id: string, config: SlaClassConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_sla_class',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._jitter = config.jitter;
    this._latency = config.latency;
    this._name = config.name;
    this._packetDropRate = config.packetDropRate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // jitter - computed: false, optional: false, required: true
  private _jitter?: number; 
  public get jitter() {
    return this.getNumberAttribute('jitter');
  }
  public set jitter(value: number) {
    this._jitter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterInput() {
    return this._jitter;
  }

  // latency - computed: false, optional: false, required: true
  private _latency?: number; 
  public get latency() {
    return this.getNumberAttribute('latency');
  }
  public set latency(value: number) {
    this._latency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // packet_drop_rate - computed: false, optional: false, required: true
  private _packetDropRate?: number; 
  public get packetDropRate() {
    return this.getNumberAttribute('packet_drop_rate');
  }
  public set packetDropRate(value: number) {
    this._packetDropRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDropRateInput() {
    return this._packetDropRate;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      jitter: cdktf.numberToTerraform(this._jitter),
      latency: cdktf.numberToTerraform(this._latency),
      name: cdktf.stringToTerraform(this._name),
      packet_drop_rate: cdktf.numberToTerraform(this._packetDropRate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jitter: {
        value: cdktf.numberToHclTerraform(this._jitter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      latency: {
        value: cdktf.numberToHclTerraform(this._latency),
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
      packet_drop_rate: {
        value: cdktf.numberToHclTerraform(this._packetDropRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
