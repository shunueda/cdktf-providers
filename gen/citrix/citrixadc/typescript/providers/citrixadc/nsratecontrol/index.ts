// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsratecontrol
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsratecontrolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsratecontrol#icmpthreshold Nsratecontrol#icmpthreshold}
  */
  readonly icmpthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsratecontrol#id Nsratecontrol#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsratecontrol#tcprstthreshold Nsratecontrol#tcprstthreshold}
  */
  readonly tcprstthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsratecontrol#tcpthreshold Nsratecontrol#tcpthreshold}
  */
  readonly tcpthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsratecontrol#udpthreshold Nsratecontrol#udpthreshold}
  */
  readonly udpthreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsratecontrol citrixadc_nsratecontrol}
*/
export class Nsratecontrol extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsratecontrol";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsratecontrol resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsratecontrol to import
  * @param importFromId The id of the existing Nsratecontrol that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsratecontrol#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsratecontrol to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsratecontrol", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsratecontrol citrixadc_nsratecontrol} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsratecontrolConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NsratecontrolConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsratecontrol',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._icmpthreshold = config.icmpthreshold;
    this._id = config.id;
    this._tcprstthreshold = config.tcprstthreshold;
    this._tcpthreshold = config.tcpthreshold;
    this._udpthreshold = config.udpthreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // icmpthreshold - computed: true, optional: true, required: false
  private _icmpthreshold?: number; 
  public get icmpthreshold() {
    return this.getNumberAttribute('icmpthreshold');
  }
  public set icmpthreshold(value: number) {
    this._icmpthreshold = value;
  }
  public resetIcmpthreshold() {
    this._icmpthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpthresholdInput() {
    return this._icmpthreshold;
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

  // tcprstthreshold - computed: true, optional: true, required: false
  private _tcprstthreshold?: number; 
  public get tcprstthreshold() {
    return this.getNumberAttribute('tcprstthreshold');
  }
  public set tcprstthreshold(value: number) {
    this._tcprstthreshold = value;
  }
  public resetTcprstthreshold() {
    this._tcprstthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcprstthresholdInput() {
    return this._tcprstthreshold;
  }

  // tcpthreshold - computed: true, optional: true, required: false
  private _tcpthreshold?: number; 
  public get tcpthreshold() {
    return this.getNumberAttribute('tcpthreshold');
  }
  public set tcpthreshold(value: number) {
    this._tcpthreshold = value;
  }
  public resetTcpthreshold() {
    this._tcpthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpthresholdInput() {
    return this._tcpthreshold;
  }

  // udpthreshold - computed: true, optional: true, required: false
  private _udpthreshold?: number; 
  public get udpthreshold() {
    return this.getNumberAttribute('udpthreshold');
  }
  public set udpthreshold(value: number) {
    this._udpthreshold = value;
  }
  public resetUdpthreshold() {
    this._udpthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpthresholdInput() {
    return this._udpthreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      icmpthreshold: cdktf.numberToTerraform(this._icmpthreshold),
      id: cdktf.stringToTerraform(this._id),
      tcprstthreshold: cdktf.numberToTerraform(this._tcprstthreshold),
      tcpthreshold: cdktf.numberToTerraform(this._tcpthreshold),
      udpthreshold: cdktf.numberToTerraform(this._udpthreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      icmpthreshold: {
        value: cdktf.numberToHclTerraform(this._icmpthreshold),
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
      tcprstthreshold: {
        value: cdktf.numberToHclTerraform(this._tcprstthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcpthreshold: {
        value: cdktf.numberToHclTerraform(this._tcpthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udpthreshold: {
        value: cdktf.numberToHclTerraform(this._udpthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
