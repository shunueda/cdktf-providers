// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbroute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbrouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbroute#gatewayname Lbroute#gatewayname}
  */
  readonly gatewayname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbroute#id Lbroute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbroute#netmask Lbroute#netmask}
  */
  readonly netmask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbroute#network Lbroute#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbroute#td Lbroute#td}
  */
  readonly td?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbroute citrixadc_lbroute}
*/
export class Lbroute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lbroute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lbroute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lbroute to import
  * @param importFromId The id of the existing Lbroute that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbroute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lbroute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lbroute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbroute citrixadc_lbroute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbrouteConfig
  */
  public constructor(scope: Construct, id: string, config: LbrouteConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lbroute',
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
    this._gatewayname = config.gatewayname;
    this._id = config.id;
    this._netmask = config.netmask;
    this._network = config.network;
    this._td = config.td;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gatewayname - computed: false, optional: false, required: true
  private _gatewayname?: string; 
  public get gatewayname() {
    return this.getStringAttribute('gatewayname');
  }
  public set gatewayname(value: string) {
    this._gatewayname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaynameInput() {
    return this._gatewayname;
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

  // netmask - computed: false, optional: false, required: true
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // td - computed: false, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gatewayname: cdktf.stringToTerraform(this._gatewayname),
      id: cdktf.stringToTerraform(this._id),
      netmask: cdktf.stringToTerraform(this._netmask),
      network: cdktf.stringToTerraform(this._network),
      td: cdktf.numberToTerraform(this._td),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gatewayname: {
        value: cdktf.stringToHclTerraform(this._gatewayname),
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
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
