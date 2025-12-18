// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationdfaaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationdfaactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationdfaaction#clientid Authenticationdfaaction#clientid}
  */
  readonly clientid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationdfaaction#defaultauthenticationgroup Authenticationdfaaction#defaultauthenticationgroup}
  */
  readonly defaultauthenticationgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationdfaaction#id Authenticationdfaaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationdfaaction#name Authenticationdfaaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationdfaaction#passphrase Authenticationdfaaction#passphrase}
  */
  readonly passphrase: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationdfaaction#serverurl Authenticationdfaaction#serverurl}
  */
  readonly serverurl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationdfaaction citrixadc_authenticationdfaaction}
*/
export class Authenticationdfaaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationdfaaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationdfaaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationdfaaction to import
  * @param importFromId The id of the existing Authenticationdfaaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationdfaaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationdfaaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationdfaaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationdfaaction citrixadc_authenticationdfaaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationdfaactionConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationdfaactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationdfaaction',
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
    this._clientid = config.clientid;
    this._defaultauthenticationgroup = config.defaultauthenticationgroup;
    this._id = config.id;
    this._name = config.name;
    this._passphrase = config.passphrase;
    this._serverurl = config.serverurl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clientid - computed: false, optional: false, required: true
  private _clientid?: string; 
  public get clientid() {
    return this.getStringAttribute('clientid');
  }
  public set clientid(value: string) {
    this._clientid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientidInput() {
    return this._clientid;
  }

  // defaultauthenticationgroup - computed: true, optional: true, required: false
  private _defaultauthenticationgroup?: string; 
  public get defaultauthenticationgroup() {
    return this.getStringAttribute('defaultauthenticationgroup');
  }
  public set defaultauthenticationgroup(value: string) {
    this._defaultauthenticationgroup = value;
  }
  public resetDefaultauthenticationgroup() {
    this._defaultauthenticationgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultauthenticationgroupInput() {
    return this._defaultauthenticationgroup;
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

  // passphrase - computed: false, optional: false, required: true
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // serverurl - computed: false, optional: false, required: true
  private _serverurl?: string; 
  public get serverurl() {
    return this.getStringAttribute('serverurl');
  }
  public set serverurl(value: string) {
    this._serverurl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverurlInput() {
    return this._serverurl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clientid: cdktf.stringToTerraform(this._clientid),
      defaultauthenticationgroup: cdktf.stringToTerraform(this._defaultauthenticationgroup),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      serverurl: cdktf.stringToTerraform(this._serverurl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clientid: {
        value: cdktf.stringToHclTerraform(this._clientid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultauthenticationgroup: {
        value: cdktf.stringToHclTerraform(this._defaultauthenticationgroup),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverurl: {
        value: cdktf.stringToHclTerraform(this._serverurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
