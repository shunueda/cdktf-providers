// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_network6_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsnclientNetwork6BindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_network6_binding#clientname LsnclientNetwork6Binding#clientname}
  */
  readonly clientname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_network6_binding#id LsnclientNetwork6Binding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_network6_binding#network6 LsnclientNetwork6Binding#network6}
  */
  readonly network6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_network6_binding#td LsnclientNetwork6Binding#td}
  */
  readonly td?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_network6_binding citrixadc_lsnclient_network6_binding}
*/
export class LsnclientNetwork6Binding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsnclient_network6_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LsnclientNetwork6Binding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LsnclientNetwork6Binding to import
  * @param importFromId The id of the existing LsnclientNetwork6Binding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_network6_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LsnclientNetwork6Binding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsnclient_network6_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_network6_binding citrixadc_lsnclient_network6_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsnclientNetwork6BindingConfig
  */
  public constructor(scope: Construct, id: string, config: LsnclientNetwork6BindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsnclient_network6_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientname = config.clientname;
    this._id = config.id;
    this._network6 = config.network6;
    this._td = config.td;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clientname - computed: false, optional: false, required: true
  private _clientname?: string; 
  public get clientname() {
    return this.getStringAttribute('clientname');
  }
  public set clientname(value: string) {
    this._clientname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientnameInput() {
    return this._clientname;
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

  // network6 - computed: false, optional: false, required: true
  private _network6?: string; 
  public get network6() {
    return this.getStringAttribute('network6');
  }
  public set network6(value: string) {
    this._network6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get network6Input() {
    return this._network6;
  }

  // td - computed: true, optional: true, required: false
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
      clientname: cdktf.stringToTerraform(this._clientname),
      id: cdktf.stringToTerraform(this._id),
      network6: cdktf.stringToTerraform(this._network6),
      td: cdktf.numberToTerraform(this._td),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clientname: {
        value: cdktf.stringToHclTerraform(this._clientname),
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
      network6: {
        value: cdktf.stringToHclTerraform(this._network6),
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
