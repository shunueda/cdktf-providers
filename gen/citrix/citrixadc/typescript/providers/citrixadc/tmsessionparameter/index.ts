// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/tmsessionparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TmsessionparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/tmsessionparameter#defaultauthorizationaction Tmsessionparameter#defaultauthorizationaction}
  */
  readonly defaultauthorizationaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/tmsessionparameter#homepage Tmsessionparameter#homepage}
  */
  readonly homepage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/tmsessionparameter#httponlycookie Tmsessionparameter#httponlycookie}
  */
  readonly httponlycookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/tmsessionparameter#id Tmsessionparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/tmsessionparameter#kcdaccount Tmsessionparameter#kcdaccount}
  */
  readonly kcdaccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/tmsessionparameter#persistentcookie Tmsessionparameter#persistentcookie}
  */
  readonly persistentcookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/tmsessionparameter#persistentcookievalidity Tmsessionparameter#persistentcookievalidity}
  */
  readonly persistentcookievalidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/tmsessionparameter#sesstimeout Tmsessionparameter#sesstimeout}
  */
  readonly sesstimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/tmsessionparameter#sso Tmsessionparameter#sso}
  */
  readonly sso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/tmsessionparameter#ssocredential Tmsessionparameter#ssocredential}
  */
  readonly ssocredential?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/tmsessionparameter#ssodomain Tmsessionparameter#ssodomain}
  */
  readonly ssodomain?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/tmsessionparameter citrixadc_tmsessionparameter}
*/
export class Tmsessionparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_tmsessionparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tmsessionparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tmsessionparameter to import
  * @param importFromId The id of the existing Tmsessionparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/tmsessionparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tmsessionparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_tmsessionparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/tmsessionparameter citrixadc_tmsessionparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TmsessionparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TmsessionparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_tmsessionparameter',
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
    this._defaultauthorizationaction = config.defaultauthorizationaction;
    this._homepage = config.homepage;
    this._httponlycookie = config.httponlycookie;
    this._id = config.id;
    this._kcdaccount = config.kcdaccount;
    this._persistentcookie = config.persistentcookie;
    this._persistentcookievalidity = config.persistentcookievalidity;
    this._sesstimeout = config.sesstimeout;
    this._sso = config.sso;
    this._ssocredential = config.ssocredential;
    this._ssodomain = config.ssodomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defaultauthorizationaction - computed: true, optional: true, required: false
  private _defaultauthorizationaction?: string; 
  public get defaultauthorizationaction() {
    return this.getStringAttribute('defaultauthorizationaction');
  }
  public set defaultauthorizationaction(value: string) {
    this._defaultauthorizationaction = value;
  }
  public resetDefaultauthorizationaction() {
    this._defaultauthorizationaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultauthorizationactionInput() {
    return this._defaultauthorizationaction;
  }

  // homepage - computed: true, optional: true, required: false
  private _homepage?: string; 
  public get homepage() {
    return this.getStringAttribute('homepage');
  }
  public set homepage(value: string) {
    this._homepage = value;
  }
  public resetHomepage() {
    this._homepage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homepageInput() {
    return this._homepage;
  }

  // httponlycookie - computed: true, optional: true, required: false
  private _httponlycookie?: string; 
  public get httponlycookie() {
    return this.getStringAttribute('httponlycookie');
  }
  public set httponlycookie(value: string) {
    this._httponlycookie = value;
  }
  public resetHttponlycookie() {
    this._httponlycookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httponlycookieInput() {
    return this._httponlycookie;
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

  // kcdaccount - computed: true, optional: true, required: false
  private _kcdaccount?: string; 
  public get kcdaccount() {
    return this.getStringAttribute('kcdaccount');
  }
  public set kcdaccount(value: string) {
    this._kcdaccount = value;
  }
  public resetKcdaccount() {
    this._kcdaccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kcdaccountInput() {
    return this._kcdaccount;
  }

  // persistentcookie - computed: true, optional: true, required: false
  private _persistentcookie?: string; 
  public get persistentcookie() {
    return this.getStringAttribute('persistentcookie');
  }
  public set persistentcookie(value: string) {
    this._persistentcookie = value;
  }
  public resetPersistentcookie() {
    this._persistentcookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentcookieInput() {
    return this._persistentcookie;
  }

  // persistentcookievalidity - computed: true, optional: true, required: false
  private _persistentcookievalidity?: number; 
  public get persistentcookievalidity() {
    return this.getNumberAttribute('persistentcookievalidity');
  }
  public set persistentcookievalidity(value: number) {
    this._persistentcookievalidity = value;
  }
  public resetPersistentcookievalidity() {
    this._persistentcookievalidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentcookievalidityInput() {
    return this._persistentcookievalidity;
  }

  // sesstimeout - computed: true, optional: true, required: false
  private _sesstimeout?: number; 
  public get sesstimeout() {
    return this.getNumberAttribute('sesstimeout');
  }
  public set sesstimeout(value: number) {
    this._sesstimeout = value;
  }
  public resetSesstimeout() {
    this._sesstimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesstimeoutInput() {
    return this._sesstimeout;
  }

  // sso - computed: true, optional: true, required: false
  private _sso?: string; 
  public get sso() {
    return this.getStringAttribute('sso');
  }
  public set sso(value: string) {
    this._sso = value;
  }
  public resetSso() {
    this._sso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoInput() {
    return this._sso;
  }

  // ssocredential - computed: true, optional: true, required: false
  private _ssocredential?: string; 
  public get ssocredential() {
    return this.getStringAttribute('ssocredential');
  }
  public set ssocredential(value: string) {
    this._ssocredential = value;
  }
  public resetSsocredential() {
    this._ssocredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssocredentialInput() {
    return this._ssocredential;
  }

  // ssodomain - computed: true, optional: true, required: false
  private _ssodomain?: string; 
  public get ssodomain() {
    return this.getStringAttribute('ssodomain');
  }
  public set ssodomain(value: string) {
    this._ssodomain = value;
  }
  public resetSsodomain() {
    this._ssodomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssodomainInput() {
    return this._ssodomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defaultauthorizationaction: cdktf.stringToTerraform(this._defaultauthorizationaction),
      homepage: cdktf.stringToTerraform(this._homepage),
      httponlycookie: cdktf.stringToTerraform(this._httponlycookie),
      id: cdktf.stringToTerraform(this._id),
      kcdaccount: cdktf.stringToTerraform(this._kcdaccount),
      persistentcookie: cdktf.stringToTerraform(this._persistentcookie),
      persistentcookievalidity: cdktf.numberToTerraform(this._persistentcookievalidity),
      sesstimeout: cdktf.numberToTerraform(this._sesstimeout),
      sso: cdktf.stringToTerraform(this._sso),
      ssocredential: cdktf.stringToTerraform(this._ssocredential),
      ssodomain: cdktf.stringToTerraform(this._ssodomain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defaultauthorizationaction: {
        value: cdktf.stringToHclTerraform(this._defaultauthorizationaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      homepage: {
        value: cdktf.stringToHclTerraform(this._homepage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httponlycookie: {
        value: cdktf.stringToHclTerraform(this._httponlycookie),
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
      kcdaccount: {
        value: cdktf.stringToHclTerraform(this._kcdaccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistentcookie: {
        value: cdktf.stringToHclTerraform(this._persistentcookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistentcookievalidity: {
        value: cdktf.numberToHclTerraform(this._persistentcookievalidity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sesstimeout: {
        value: cdktf.numberToHclTerraform(this._sesstimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sso: {
        value: cdktf.stringToHclTerraform(this._sso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssocredential: {
        value: cdktf.stringToHclTerraform(this._ssocredential),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssodomain: {
        value: cdktf.stringToHclTerraform(this._ssodomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
