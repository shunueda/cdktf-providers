// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecalgprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsecalgprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecalgprofile#connfailover Ipsecalgprofile#connfailover}
  */
  readonly connfailover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecalgprofile#espgatetimeout Ipsecalgprofile#espgatetimeout}
  */
  readonly espgatetimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecalgprofile#espsessiontimeout Ipsecalgprofile#espsessiontimeout}
  */
  readonly espsessiontimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecalgprofile#id Ipsecalgprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecalgprofile#ikesessiontimeout Ipsecalgprofile#ikesessiontimeout}
  */
  readonly ikesessiontimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecalgprofile#name Ipsecalgprofile#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecalgprofile citrixadc_ipsecalgprofile}
*/
export class Ipsecalgprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_ipsecalgprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipsecalgprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipsecalgprofile to import
  * @param importFromId The id of the existing Ipsecalgprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecalgprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipsecalgprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_ipsecalgprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecalgprofile citrixadc_ipsecalgprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsecalgprofileConfig
  */
  public constructor(scope: Construct, id: string, config: IpsecalgprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_ipsecalgprofile',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connfailover = config.connfailover;
    this._espgatetimeout = config.espgatetimeout;
    this._espsessiontimeout = config.espsessiontimeout;
    this._id = config.id;
    this._ikesessiontimeout = config.ikesessiontimeout;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connfailover - computed: true, optional: true, required: false
  private _connfailover?: string; 
  public get connfailover() {
    return this.getStringAttribute('connfailover');
  }
  public set connfailover(value: string) {
    this._connfailover = value;
  }
  public resetConnfailover() {
    this._connfailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connfailoverInput() {
    return this._connfailover;
  }

  // espgatetimeout - computed: true, optional: true, required: false
  private _espgatetimeout?: number; 
  public get espgatetimeout() {
    return this.getNumberAttribute('espgatetimeout');
  }
  public set espgatetimeout(value: number) {
    this._espgatetimeout = value;
  }
  public resetEspgatetimeout() {
    this._espgatetimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espgatetimeoutInput() {
    return this._espgatetimeout;
  }

  // espsessiontimeout - computed: true, optional: true, required: false
  private _espsessiontimeout?: number; 
  public get espsessiontimeout() {
    return this.getNumberAttribute('espsessiontimeout');
  }
  public set espsessiontimeout(value: number) {
    this._espsessiontimeout = value;
  }
  public resetEspsessiontimeout() {
    this._espsessiontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espsessiontimeoutInput() {
    return this._espsessiontimeout;
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

  // ikesessiontimeout - computed: true, optional: true, required: false
  private _ikesessiontimeout?: number; 
  public get ikesessiontimeout() {
    return this.getNumberAttribute('ikesessiontimeout');
  }
  public set ikesessiontimeout(value: number) {
    this._ikesessiontimeout = value;
  }
  public resetIkesessiontimeout() {
    this._ikesessiontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikesessiontimeoutInput() {
    return this._ikesessiontimeout;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connfailover: cdktf.stringToTerraform(this._connfailover),
      espgatetimeout: cdktf.numberToTerraform(this._espgatetimeout),
      espsessiontimeout: cdktf.numberToTerraform(this._espsessiontimeout),
      id: cdktf.stringToTerraform(this._id),
      ikesessiontimeout: cdktf.numberToTerraform(this._ikesessiontimeout),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connfailover: {
        value: cdktf.stringToHclTerraform(this._connfailover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      espgatetimeout: {
        value: cdktf.numberToHclTerraform(this._espgatetimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      espsessiontimeout: {
        value: cdktf.numberToHclTerraform(this._espsessiontimeout),
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
      ikesessiontimeout: {
        value: cdktf.numberToHclTerraform(this._ikesessiontimeout),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
