// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationcaptchaaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationcaptchaactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationcaptchaaction#defaultauthenticationgroup Authenticationcaptchaaction#defaultauthenticationgroup}
  */
  readonly defaultauthenticationgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationcaptchaaction#id Authenticationcaptchaaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationcaptchaaction#name Authenticationcaptchaaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationcaptchaaction#scorethreshold Authenticationcaptchaaction#scorethreshold}
  */
  readonly scorethreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationcaptchaaction#secretkey Authenticationcaptchaaction#secretkey}
  */
  readonly secretkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationcaptchaaction#serverurl Authenticationcaptchaaction#serverurl}
  */
  readonly serverurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationcaptchaaction#sitekey Authenticationcaptchaaction#sitekey}
  */
  readonly sitekey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationcaptchaaction citrixadc_authenticationcaptchaaction}
*/
export class Authenticationcaptchaaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationcaptchaaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationcaptchaaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationcaptchaaction to import
  * @param importFromId The id of the existing Authenticationcaptchaaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationcaptchaaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationcaptchaaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationcaptchaaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationcaptchaaction citrixadc_authenticationcaptchaaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationcaptchaactionConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationcaptchaactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationcaptchaaction',
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
    this._defaultauthenticationgroup = config.defaultauthenticationgroup;
    this._id = config.id;
    this._name = config.name;
    this._scorethreshold = config.scorethreshold;
    this._secretkey = config.secretkey;
    this._serverurl = config.serverurl;
    this._sitekey = config.sitekey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // scorethreshold - computed: true, optional: true, required: false
  private _scorethreshold?: number; 
  public get scorethreshold() {
    return this.getNumberAttribute('scorethreshold');
  }
  public set scorethreshold(value: number) {
    this._scorethreshold = value;
  }
  public resetScorethreshold() {
    this._scorethreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scorethresholdInput() {
    return this._scorethreshold;
  }

  // secretkey - computed: false, optional: false, required: true
  private _secretkey?: string; 
  public get secretkey() {
    return this.getStringAttribute('secretkey');
  }
  public set secretkey(value: string) {
    this._secretkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretkeyInput() {
    return this._secretkey;
  }

  // serverurl - computed: true, optional: true, required: false
  private _serverurl?: string; 
  public get serverurl() {
    return this.getStringAttribute('serverurl');
  }
  public set serverurl(value: string) {
    this._serverurl = value;
  }
  public resetServerurl() {
    this._serverurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverurlInput() {
    return this._serverurl;
  }

  // sitekey - computed: false, optional: false, required: true
  private _sitekey?: string; 
  public get sitekey() {
    return this.getStringAttribute('sitekey');
  }
  public set sitekey(value: string) {
    this._sitekey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sitekeyInput() {
    return this._sitekey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defaultauthenticationgroup: cdktf.stringToTerraform(this._defaultauthenticationgroup),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scorethreshold: cdktf.numberToTerraform(this._scorethreshold),
      secretkey: cdktf.stringToTerraform(this._secretkey),
      serverurl: cdktf.stringToTerraform(this._serverurl),
      sitekey: cdktf.stringToTerraform(this._sitekey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      scorethreshold: {
        value: cdktf.numberToHclTerraform(this._scorethreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secretkey: {
        value: cdktf.stringToHclTerraform(this._secretkey),
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
      sitekey: {
        value: cdktf.stringToHclTerraform(this._sitekey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
