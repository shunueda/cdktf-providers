// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile#computedadccookieattribute Lbprofile#computedadccookieattribute}
  */
  readonly computedadccookieattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile#cookiepassphrase Lbprofile#cookiepassphrase}
  */
  readonly cookiepassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile#dbslb Lbprofile#dbslb}
  */
  readonly dbslb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile#httponlycookieflag Lbprofile#httponlycookieflag}
  */
  readonly httponlycookieflag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile#id Lbprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile#lbhashalgorithm Lbprofile#lbhashalgorithm}
  */
  readonly lbhashalgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile#lbhashfingers Lbprofile#lbhashfingers}
  */
  readonly lbhashfingers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile#lbprofilename Lbprofile#lbprofilename}
  */
  readonly lbprofilename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile#literaladccookieattribute Lbprofile#literaladccookieattribute}
  */
  readonly literaladccookieattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile#processlocal Lbprofile#processlocal}
  */
  readonly processlocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile#proximityfromself Lbprofile#proximityfromself}
  */
  readonly proximityfromself?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile#storemqttclientidandusername Lbprofile#storemqttclientidandusername}
  */
  readonly storemqttclientidandusername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile#useencryptedpersistencecookie Lbprofile#useencryptedpersistencecookie}
  */
  readonly useencryptedpersistencecookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile#usesecuredpersistencecookie Lbprofile#usesecuredpersistencecookie}
  */
  readonly usesecuredpersistencecookie?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile citrixadc_lbprofile}
*/
export class Lbprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lbprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lbprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lbprofile to import
  * @param importFromId The id of the existing Lbprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lbprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lbprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbprofile citrixadc_lbprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbprofileConfig
  */
  public constructor(scope: Construct, id: string, config: LbprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lbprofile',
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
    this._computedadccookieattribute = config.computedadccookieattribute;
    this._cookiepassphrase = config.cookiepassphrase;
    this._dbslb = config.dbslb;
    this._httponlycookieflag = config.httponlycookieflag;
    this._id = config.id;
    this._lbhashalgorithm = config.lbhashalgorithm;
    this._lbhashfingers = config.lbhashfingers;
    this._lbprofilename = config.lbprofilename;
    this._literaladccookieattribute = config.literaladccookieattribute;
    this._processlocal = config.processlocal;
    this._proximityfromself = config.proximityfromself;
    this._storemqttclientidandusername = config.storemqttclientidandusername;
    this._useencryptedpersistencecookie = config.useencryptedpersistencecookie;
    this._usesecuredpersistencecookie = config.usesecuredpersistencecookie;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // computedadccookieattribute - computed: true, optional: true, required: false
  private _computedadccookieattribute?: string; 
  public get computedadccookieattribute() {
    return this.getStringAttribute('computedadccookieattribute');
  }
  public set computedadccookieattribute(value: string) {
    this._computedadccookieattribute = value;
  }
  public resetComputedadccookieattribute() {
    this._computedadccookieattribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computedadccookieattributeInput() {
    return this._computedadccookieattribute;
  }

  // cookiepassphrase - computed: true, optional: true, required: false
  private _cookiepassphrase?: string; 
  public get cookiepassphrase() {
    return this.getStringAttribute('cookiepassphrase');
  }
  public set cookiepassphrase(value: string) {
    this._cookiepassphrase = value;
  }
  public resetCookiepassphrase() {
    this._cookiepassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiepassphraseInput() {
    return this._cookiepassphrase;
  }

  // dbslb - computed: true, optional: true, required: false
  private _dbslb?: string; 
  public get dbslb() {
    return this.getStringAttribute('dbslb');
  }
  public set dbslb(value: string) {
    this._dbslb = value;
  }
  public resetDbslb() {
    this._dbslb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbslbInput() {
    return this._dbslb;
  }

  // httponlycookieflag - computed: true, optional: true, required: false
  private _httponlycookieflag?: string; 
  public get httponlycookieflag() {
    return this.getStringAttribute('httponlycookieflag');
  }
  public set httponlycookieflag(value: string) {
    this._httponlycookieflag = value;
  }
  public resetHttponlycookieflag() {
    this._httponlycookieflag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httponlycookieflagInput() {
    return this._httponlycookieflag;
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

  // lbhashalgorithm - computed: true, optional: true, required: false
  private _lbhashalgorithm?: string; 
  public get lbhashalgorithm() {
    return this.getStringAttribute('lbhashalgorithm');
  }
  public set lbhashalgorithm(value: string) {
    this._lbhashalgorithm = value;
  }
  public resetLbhashalgorithm() {
    this._lbhashalgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbhashalgorithmInput() {
    return this._lbhashalgorithm;
  }

  // lbhashfingers - computed: true, optional: true, required: false
  private _lbhashfingers?: number; 
  public get lbhashfingers() {
    return this.getNumberAttribute('lbhashfingers');
  }
  public set lbhashfingers(value: number) {
    this._lbhashfingers = value;
  }
  public resetLbhashfingers() {
    this._lbhashfingers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbhashfingersInput() {
    return this._lbhashfingers;
  }

  // lbprofilename - computed: false, optional: false, required: true
  private _lbprofilename?: string; 
  public get lbprofilename() {
    return this.getStringAttribute('lbprofilename');
  }
  public set lbprofilename(value: string) {
    this._lbprofilename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbprofilenameInput() {
    return this._lbprofilename;
  }

  // literaladccookieattribute - computed: true, optional: true, required: false
  private _literaladccookieattribute?: string; 
  public get literaladccookieattribute() {
    return this.getStringAttribute('literaladccookieattribute');
  }
  public set literaladccookieattribute(value: string) {
    this._literaladccookieattribute = value;
  }
  public resetLiteraladccookieattribute() {
    this._literaladccookieattribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literaladccookieattributeInput() {
    return this._literaladccookieattribute;
  }

  // processlocal - computed: true, optional: true, required: false
  private _processlocal?: string; 
  public get processlocal() {
    return this.getStringAttribute('processlocal');
  }
  public set processlocal(value: string) {
    this._processlocal = value;
  }
  public resetProcesslocal() {
    this._processlocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processlocalInput() {
    return this._processlocal;
  }

  // proximityfromself - computed: true, optional: true, required: false
  private _proximityfromself?: string; 
  public get proximityfromself() {
    return this.getStringAttribute('proximityfromself');
  }
  public set proximityfromself(value: string) {
    this._proximityfromself = value;
  }
  public resetProximityfromself() {
    this._proximityfromself = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityfromselfInput() {
    return this._proximityfromself;
  }

  // storemqttclientidandusername - computed: true, optional: true, required: false
  private _storemqttclientidandusername?: string; 
  public get storemqttclientidandusername() {
    return this.getStringAttribute('storemqttclientidandusername');
  }
  public set storemqttclientidandusername(value: string) {
    this._storemqttclientidandusername = value;
  }
  public resetStoremqttclientidandusername() {
    this._storemqttclientidandusername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storemqttclientidandusernameInput() {
    return this._storemqttclientidandusername;
  }

  // useencryptedpersistencecookie - computed: true, optional: true, required: false
  private _useencryptedpersistencecookie?: string; 
  public get useencryptedpersistencecookie() {
    return this.getStringAttribute('useencryptedpersistencecookie');
  }
  public set useencryptedpersistencecookie(value: string) {
    this._useencryptedpersistencecookie = value;
  }
  public resetUseencryptedpersistencecookie() {
    this._useencryptedpersistencecookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useencryptedpersistencecookieInput() {
    return this._useencryptedpersistencecookie;
  }

  // usesecuredpersistencecookie - computed: true, optional: true, required: false
  private _usesecuredpersistencecookie?: string; 
  public get usesecuredpersistencecookie() {
    return this.getStringAttribute('usesecuredpersistencecookie');
  }
  public set usesecuredpersistencecookie(value: string) {
    this._usesecuredpersistencecookie = value;
  }
  public resetUsesecuredpersistencecookie() {
    this._usesecuredpersistencecookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usesecuredpersistencecookieInput() {
    return this._usesecuredpersistencecookie;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      computedadccookieattribute: cdktf.stringToTerraform(this._computedadccookieattribute),
      cookiepassphrase: cdktf.stringToTerraform(this._cookiepassphrase),
      dbslb: cdktf.stringToTerraform(this._dbslb),
      httponlycookieflag: cdktf.stringToTerraform(this._httponlycookieflag),
      id: cdktf.stringToTerraform(this._id),
      lbhashalgorithm: cdktf.stringToTerraform(this._lbhashalgorithm),
      lbhashfingers: cdktf.numberToTerraform(this._lbhashfingers),
      lbprofilename: cdktf.stringToTerraform(this._lbprofilename),
      literaladccookieattribute: cdktf.stringToTerraform(this._literaladccookieattribute),
      processlocal: cdktf.stringToTerraform(this._processlocal),
      proximityfromself: cdktf.stringToTerraform(this._proximityfromself),
      storemqttclientidandusername: cdktf.stringToTerraform(this._storemqttclientidandusername),
      useencryptedpersistencecookie: cdktf.stringToTerraform(this._useencryptedpersistencecookie),
      usesecuredpersistencecookie: cdktf.stringToTerraform(this._usesecuredpersistencecookie),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      computedadccookieattribute: {
        value: cdktf.stringToHclTerraform(this._computedadccookieattribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookiepassphrase: {
        value: cdktf.stringToHclTerraform(this._cookiepassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbslb: {
        value: cdktf.stringToHclTerraform(this._dbslb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httponlycookieflag: {
        value: cdktf.stringToHclTerraform(this._httponlycookieflag),
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
      lbhashalgorithm: {
        value: cdktf.stringToHclTerraform(this._lbhashalgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lbhashfingers: {
        value: cdktf.numberToHclTerraform(this._lbhashfingers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lbprofilename: {
        value: cdktf.stringToHclTerraform(this._lbprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      literaladccookieattribute: {
        value: cdktf.stringToHclTerraform(this._literaladccookieattribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      processlocal: {
        value: cdktf.stringToHclTerraform(this._processlocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proximityfromself: {
        value: cdktf.stringToHclTerraform(this._proximityfromself),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storemqttclientidandusername: {
        value: cdktf.stringToHclTerraform(this._storemqttclientidandusername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      useencryptedpersistencecookie: {
        value: cdktf.stringToHclTerraform(this._useencryptedpersistencecookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usesecuredpersistencecookie: {
        value: cdktf.stringToHclTerraform(this._usesecuredpersistencecookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
