// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor_sslcertkey_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbmonitorSslcertkeyBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor_sslcertkey_binding#ca LbmonitorSslcertkeyBinding#ca}
  */
  readonly ca?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor_sslcertkey_binding#certkeyname LbmonitorSslcertkeyBinding#certkeyname}
  */
  readonly certkeyname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor_sslcertkey_binding#crlcheck LbmonitorSslcertkeyBinding#crlcheck}
  */
  readonly crlcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor_sslcertkey_binding#id LbmonitorSslcertkeyBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor_sslcertkey_binding#monitorname LbmonitorSslcertkeyBinding#monitorname}
  */
  readonly monitorname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor_sslcertkey_binding#ocspcheck LbmonitorSslcertkeyBinding#ocspcheck}
  */
  readonly ocspcheck?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor_sslcertkey_binding citrixadc_lbmonitor_sslcertkey_binding}
*/
export class LbmonitorSslcertkeyBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lbmonitor_sslcertkey_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbmonitorSslcertkeyBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbmonitorSslcertkeyBinding to import
  * @param importFromId The id of the existing LbmonitorSslcertkeyBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor_sslcertkey_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbmonitorSslcertkeyBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lbmonitor_sslcertkey_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor_sslcertkey_binding citrixadc_lbmonitor_sslcertkey_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbmonitorSslcertkeyBindingConfig
  */
  public constructor(scope: Construct, id: string, config: LbmonitorSslcertkeyBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lbmonitor_sslcertkey_binding',
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
    this._ca = config.ca;
    this._certkeyname = config.certkeyname;
    this._crlcheck = config.crlcheck;
    this._id = config.id;
    this._monitorname = config.monitorname;
    this._ocspcheck = config.ocspcheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca - computed: true, optional: true, required: false
  private _ca?: boolean | cdktf.IResolvable; 
  public get ca() {
    return this.getBooleanAttribute('ca');
  }
  public set ca(value: boolean | cdktf.IResolvable) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
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

  // monitorname - computed: false, optional: false, required: true
  private _monitorname?: string; 
  public get monitorname() {
    return this.getStringAttribute('monitorname');
  }
  public set monitorname(value: string) {
    this._monitorname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitornameInput() {
    return this._monitorname;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca: cdktf.booleanToTerraform(this._ca),
      certkeyname: cdktf.stringToTerraform(this._certkeyname),
      crlcheck: cdktf.stringToTerraform(this._crlcheck),
      id: cdktf.stringToTerraform(this._id),
      monitorname: cdktf.stringToTerraform(this._monitorname),
      ocspcheck: cdktf.stringToTerraform(this._ocspcheck),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca: {
        value: cdktf.booleanToHclTerraform(this._ca),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitorname: {
        value: cdktf.stringToHclTerraform(this._monitorname),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
