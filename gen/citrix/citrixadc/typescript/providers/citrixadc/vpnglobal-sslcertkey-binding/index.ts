// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_sslcertkey_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnglobalSslcertkeyBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_sslcertkey_binding#cacert VpnglobalSslcertkeyBinding#cacert}
  */
  readonly cacert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_sslcertkey_binding#certkeyname VpnglobalSslcertkeyBinding#certkeyname}
  */
  readonly certkeyname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_sslcertkey_binding#crlcheck VpnglobalSslcertkeyBinding#crlcheck}
  */
  readonly crlcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_sslcertkey_binding#gotopriorityexpression VpnglobalSslcertkeyBinding#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_sslcertkey_binding#id VpnglobalSslcertkeyBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_sslcertkey_binding#ocspcheck VpnglobalSslcertkeyBinding#ocspcheck}
  */
  readonly ocspcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_sslcertkey_binding#userdataencryptionkey VpnglobalSslcertkeyBinding#userdataencryptionkey}
  */
  readonly userdataencryptionkey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_sslcertkey_binding citrixadc_vpnglobal_sslcertkey_binding}
*/
export class VpnglobalSslcertkeyBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnglobal_sslcertkey_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnglobalSslcertkeyBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnglobalSslcertkeyBinding to import
  * @param importFromId The id of the existing VpnglobalSslcertkeyBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_sslcertkey_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnglobalSslcertkeyBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnglobal_sslcertkey_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_sslcertkey_binding citrixadc_vpnglobal_sslcertkey_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnglobalSslcertkeyBindingConfig
  */
  public constructor(scope: Construct, id: string, config: VpnglobalSslcertkeyBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnglobal_sslcertkey_binding',
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
    this._cacert = config.cacert;
    this._certkeyname = config.certkeyname;
    this._crlcheck = config.crlcheck;
    this._gotopriorityexpression = config.gotopriorityexpression;
    this._id = config.id;
    this._ocspcheck = config.ocspcheck;
    this._userdataencryptionkey = config.userdataencryptionkey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cacert - computed: true, optional: true, required: false
  private _cacert?: string; 
  public get cacert() {
    return this.getStringAttribute('cacert');
  }
  public set cacert(value: string) {
    this._cacert = value;
  }
  public resetCacert() {
    this._cacert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertInput() {
    return this._cacert;
  }

  // certkeyname - computed: false, optional: false, required: true
  private _certkeyname?: string; 
  public get certkeyname() {
    return this.getStringAttribute('certkeyname');
  }
  public set certkeyname(value: string) {
    this._certkeyname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certkeynameInput() {
    return this._certkeyname;
  }

  // crlcheck - computed: true, optional: true, required: false
  private _crlcheck?: string; 
  public get crlcheck() {
    return this.getStringAttribute('crlcheck');
  }
  public set crlcheck(value: string) {
    this._crlcheck = value;
  }
  public resetCrlcheck() {
    this._crlcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlcheckInput() {
    return this._crlcheck;
  }

  // gotopriorityexpression - computed: true, optional: true, required: false
  private _gotopriorityexpression?: string; 
  public get gotopriorityexpression() {
    return this.getStringAttribute('gotopriorityexpression');
  }
  public set gotopriorityexpression(value: string) {
    this._gotopriorityexpression = value;
  }
  public resetGotopriorityexpression() {
    this._gotopriorityexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gotopriorityexpressionInput() {
    return this._gotopriorityexpression;
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

  // ocspcheck - computed: true, optional: true, required: false
  private _ocspcheck?: string; 
  public get ocspcheck() {
    return this.getStringAttribute('ocspcheck');
  }
  public set ocspcheck(value: string) {
    this._ocspcheck = value;
  }
  public resetOcspcheck() {
    this._ocspcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspcheckInput() {
    return this._ocspcheck;
  }

  // userdataencryptionkey - computed: true, optional: true, required: false
  private _userdataencryptionkey?: string; 
  public get userdataencryptionkey() {
    return this.getStringAttribute('userdataencryptionkey');
  }
  public set userdataencryptionkey(value: string) {
    this._userdataencryptionkey = value;
  }
  public resetUserdataencryptionkey() {
    this._userdataencryptionkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdataencryptionkeyInput() {
    return this._userdataencryptionkey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cacert: cdktf.stringToTerraform(this._cacert),
      certkeyname: cdktf.stringToTerraform(this._certkeyname),
      crlcheck: cdktf.stringToTerraform(this._crlcheck),
      gotopriorityexpression: cdktf.stringToTerraform(this._gotopriorityexpression),
      id: cdktf.stringToTerraform(this._id),
      ocspcheck: cdktf.stringToTerraform(this._ocspcheck),
      userdataencryptionkey: cdktf.stringToTerraform(this._userdataencryptionkey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cacert: {
        value: cdktf.stringToHclTerraform(this._cacert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certkeyname: {
        value: cdktf.stringToHclTerraform(this._certkeyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crlcheck: {
        value: cdktf.stringToHclTerraform(this._crlcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gotopriorityexpression: {
        value: cdktf.stringToHclTerraform(this._gotopriorityexpression),
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
      ocspcheck: {
        value: cdktf.stringToHclTerraform(this._ocspcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userdataencryptionkey: {
        value: cdktf.stringToHclTerraform(this._userdataencryptionkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
