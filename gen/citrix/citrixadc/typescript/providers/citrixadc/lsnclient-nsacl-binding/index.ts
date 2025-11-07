// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_nsacl_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsnclientNsaclBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_nsacl_binding#aclname LsnclientNsaclBinding#aclname}
  */
  readonly aclname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_nsacl_binding#clientname LsnclientNsaclBinding#clientname}
  */
  readonly clientname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_nsacl_binding#id LsnclientNsaclBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_nsacl_binding#td LsnclientNsaclBinding#td}
  */
  readonly td?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_nsacl_binding citrixadc_lsnclient_nsacl_binding}
*/
export class LsnclientNsaclBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsnclient_nsacl_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LsnclientNsaclBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LsnclientNsaclBinding to import
  * @param importFromId The id of the existing LsnclientNsaclBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_nsacl_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LsnclientNsaclBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsnclient_nsacl_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnclient_nsacl_binding citrixadc_lsnclient_nsacl_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsnclientNsaclBindingConfig
  */
  public constructor(scope: Construct, id: string, config: LsnclientNsaclBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsnclient_nsacl_binding',
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
    this._aclname = config.aclname;
    this._clientname = config.clientname;
    this._id = config.id;
    this._td = config.td;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aclname - computed: false, optional: false, required: true
  private _aclname?: string; 
  public get aclname() {
    return this.getStringAttribute('aclname');
  }
  public set aclname(value: string) {
    this._aclname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclnameInput() {
    return this._aclname;
  }

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
      aclname: cdktf.stringToTerraform(this._aclname),
      clientname: cdktf.stringToTerraform(this._clientname),
      id: cdktf.stringToTerraform(this._id),
      td: cdktf.numberToTerraform(this._td),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aclname: {
        value: cdktf.stringToHclTerraform(this._aclname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
