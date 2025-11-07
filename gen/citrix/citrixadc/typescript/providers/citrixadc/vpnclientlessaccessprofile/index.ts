// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnclientlessaccessprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile#clientconsumedcookies Vpnclientlessaccessprofile#clientconsumedcookies}
  */
  readonly clientconsumedcookies?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile#id Vpnclientlessaccessprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile#javascriptrewritepolicylabel Vpnclientlessaccessprofile#javascriptrewritepolicylabel}
  */
  readonly javascriptrewritepolicylabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile#profilename Vpnclientlessaccessprofile#profilename}
  */
  readonly profilename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile#regexforfindingcustomurls Vpnclientlessaccessprofile#regexforfindingcustomurls}
  */
  readonly regexforfindingcustomurls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile#regexforfindingurlincss Vpnclientlessaccessprofile#regexforfindingurlincss}
  */
  readonly regexforfindingurlincss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile#regexforfindingurlinjavascript Vpnclientlessaccessprofile#regexforfindingurlinjavascript}
  */
  readonly regexforfindingurlinjavascript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile#regexforfindingurlinxcomponent Vpnclientlessaccessprofile#regexforfindingurlinxcomponent}
  */
  readonly regexforfindingurlinxcomponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile#regexforfindingurlinxml Vpnclientlessaccessprofile#regexforfindingurlinxml}
  */
  readonly regexforfindingurlinxml?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile#reqhdrrewritepolicylabel Vpnclientlessaccessprofile#reqhdrrewritepolicylabel}
  */
  readonly reqhdrrewritepolicylabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile#requirepersistentcookie Vpnclientlessaccessprofile#requirepersistentcookie}
  */
  readonly requirepersistentcookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile#reshdrrewritepolicylabel Vpnclientlessaccessprofile#reshdrrewritepolicylabel}
  */
  readonly reshdrrewritepolicylabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile#urlrewritepolicylabel Vpnclientlessaccessprofile#urlrewritepolicylabel}
  */
  readonly urlrewritepolicylabel?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile citrixadc_vpnclientlessaccessprofile}
*/
export class Vpnclientlessaccessprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnclientlessaccessprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpnclientlessaccessprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpnclientlessaccessprofile to import
  * @param importFromId The id of the existing Vpnclientlessaccessprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpnclientlessaccessprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnclientlessaccessprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnclientlessaccessprofile citrixadc_vpnclientlessaccessprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnclientlessaccessprofileConfig
  */
  public constructor(scope: Construct, id: string, config: VpnclientlessaccessprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnclientlessaccessprofile',
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
    this._clientconsumedcookies = config.clientconsumedcookies;
    this._id = config.id;
    this._javascriptrewritepolicylabel = config.javascriptrewritepolicylabel;
    this._profilename = config.profilename;
    this._regexforfindingcustomurls = config.regexforfindingcustomurls;
    this._regexforfindingurlincss = config.regexforfindingurlincss;
    this._regexforfindingurlinjavascript = config.regexforfindingurlinjavascript;
    this._regexforfindingurlinxcomponent = config.regexforfindingurlinxcomponent;
    this._regexforfindingurlinxml = config.regexforfindingurlinxml;
    this._reqhdrrewritepolicylabel = config.reqhdrrewritepolicylabel;
    this._requirepersistentcookie = config.requirepersistentcookie;
    this._reshdrrewritepolicylabel = config.reshdrrewritepolicylabel;
    this._urlrewritepolicylabel = config.urlrewritepolicylabel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clientconsumedcookies - computed: true, optional: true, required: false
  private _clientconsumedcookies?: string; 
  public get clientconsumedcookies() {
    return this.getStringAttribute('clientconsumedcookies');
  }
  public set clientconsumedcookies(value: string) {
    this._clientconsumedcookies = value;
  }
  public resetClientconsumedcookies() {
    this._clientconsumedcookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientconsumedcookiesInput() {
    return this._clientconsumedcookies;
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

  // javascriptrewritepolicylabel - computed: true, optional: true, required: false
  private _javascriptrewritepolicylabel?: string; 
  public get javascriptrewritepolicylabel() {
    return this.getStringAttribute('javascriptrewritepolicylabel');
  }
  public set javascriptrewritepolicylabel(value: string) {
    this._javascriptrewritepolicylabel = value;
  }
  public resetJavascriptrewritepolicylabel() {
    this._javascriptrewritepolicylabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptrewritepolicylabelInput() {
    return this._javascriptrewritepolicylabel;
  }

  // profilename - computed: false, optional: false, required: true
  private _profilename?: string; 
  public get profilename() {
    return this.getStringAttribute('profilename');
  }
  public set profilename(value: string) {
    this._profilename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profilenameInput() {
    return this._profilename;
  }

  // regexforfindingcustomurls - computed: true, optional: true, required: false
  private _regexforfindingcustomurls?: string; 
  public get regexforfindingcustomurls() {
    return this.getStringAttribute('regexforfindingcustomurls');
  }
  public set regexforfindingcustomurls(value: string) {
    this._regexforfindingcustomurls = value;
  }
  public resetRegexforfindingcustomurls() {
    this._regexforfindingcustomurls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexforfindingcustomurlsInput() {
    return this._regexforfindingcustomurls;
  }

  // regexforfindingurlincss - computed: true, optional: true, required: false
  private _regexforfindingurlincss?: string; 
  public get regexforfindingurlincss() {
    return this.getStringAttribute('regexforfindingurlincss');
  }
  public set regexforfindingurlincss(value: string) {
    this._regexforfindingurlincss = value;
  }
  public resetRegexforfindingurlincss() {
    this._regexforfindingurlincss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexforfindingurlincssInput() {
    return this._regexforfindingurlincss;
  }

  // regexforfindingurlinjavascript - computed: true, optional: true, required: false
  private _regexforfindingurlinjavascript?: string; 
  public get regexforfindingurlinjavascript() {
    return this.getStringAttribute('regexforfindingurlinjavascript');
  }
  public set regexforfindingurlinjavascript(value: string) {
    this._regexforfindingurlinjavascript = value;
  }
  public resetRegexforfindingurlinjavascript() {
    this._regexforfindingurlinjavascript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexforfindingurlinjavascriptInput() {
    return this._regexforfindingurlinjavascript;
  }

  // regexforfindingurlinxcomponent - computed: true, optional: true, required: false
  private _regexforfindingurlinxcomponent?: string; 
  public get regexforfindingurlinxcomponent() {
    return this.getStringAttribute('regexforfindingurlinxcomponent');
  }
  public set regexforfindingurlinxcomponent(value: string) {
    this._regexforfindingurlinxcomponent = value;
  }
  public resetRegexforfindingurlinxcomponent() {
    this._regexforfindingurlinxcomponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexforfindingurlinxcomponentInput() {
    return this._regexforfindingurlinxcomponent;
  }

  // regexforfindingurlinxml - computed: true, optional: true, required: false
  private _regexforfindingurlinxml?: string; 
  public get regexforfindingurlinxml() {
    return this.getStringAttribute('regexforfindingurlinxml');
  }
  public set regexforfindingurlinxml(value: string) {
    this._regexforfindingurlinxml = value;
  }
  public resetRegexforfindingurlinxml() {
    this._regexforfindingurlinxml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexforfindingurlinxmlInput() {
    return this._regexforfindingurlinxml;
  }

  // reqhdrrewritepolicylabel - computed: true, optional: true, required: false
  private _reqhdrrewritepolicylabel?: string; 
  public get reqhdrrewritepolicylabel() {
    return this.getStringAttribute('reqhdrrewritepolicylabel');
  }
  public set reqhdrrewritepolicylabel(value: string) {
    this._reqhdrrewritepolicylabel = value;
  }
  public resetReqhdrrewritepolicylabel() {
    this._reqhdrrewritepolicylabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqhdrrewritepolicylabelInput() {
    return this._reqhdrrewritepolicylabel;
  }

  // requirepersistentcookie - computed: true, optional: true, required: false
  private _requirepersistentcookie?: string; 
  public get requirepersistentcookie() {
    return this.getStringAttribute('requirepersistentcookie');
  }
  public set requirepersistentcookie(value: string) {
    this._requirepersistentcookie = value;
  }
  public resetRequirepersistentcookie() {
    this._requirepersistentcookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirepersistentcookieInput() {
    return this._requirepersistentcookie;
  }

  // reshdrrewritepolicylabel - computed: true, optional: true, required: false
  private _reshdrrewritepolicylabel?: string; 
  public get reshdrrewritepolicylabel() {
    return this.getStringAttribute('reshdrrewritepolicylabel');
  }
  public set reshdrrewritepolicylabel(value: string) {
    this._reshdrrewritepolicylabel = value;
  }
  public resetReshdrrewritepolicylabel() {
    this._reshdrrewritepolicylabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reshdrrewritepolicylabelInput() {
    return this._reshdrrewritepolicylabel;
  }

  // urlrewritepolicylabel - computed: true, optional: true, required: false
  private _urlrewritepolicylabel?: string; 
  public get urlrewritepolicylabel() {
    return this.getStringAttribute('urlrewritepolicylabel');
  }
  public set urlrewritepolicylabel(value: string) {
    this._urlrewritepolicylabel = value;
  }
  public resetUrlrewritepolicylabel() {
    this._urlrewritepolicylabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlrewritepolicylabelInput() {
    return this._urlrewritepolicylabel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clientconsumedcookies: cdktf.stringToTerraform(this._clientconsumedcookies),
      id: cdktf.stringToTerraform(this._id),
      javascriptrewritepolicylabel: cdktf.stringToTerraform(this._javascriptrewritepolicylabel),
      profilename: cdktf.stringToTerraform(this._profilename),
      regexforfindingcustomurls: cdktf.stringToTerraform(this._regexforfindingcustomurls),
      regexforfindingurlincss: cdktf.stringToTerraform(this._regexforfindingurlincss),
      regexforfindingurlinjavascript: cdktf.stringToTerraform(this._regexforfindingurlinjavascript),
      regexforfindingurlinxcomponent: cdktf.stringToTerraform(this._regexforfindingurlinxcomponent),
      regexforfindingurlinxml: cdktf.stringToTerraform(this._regexforfindingurlinxml),
      reqhdrrewritepolicylabel: cdktf.stringToTerraform(this._reqhdrrewritepolicylabel),
      requirepersistentcookie: cdktf.stringToTerraform(this._requirepersistentcookie),
      reshdrrewritepolicylabel: cdktf.stringToTerraform(this._reshdrrewritepolicylabel),
      urlrewritepolicylabel: cdktf.stringToTerraform(this._urlrewritepolicylabel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clientconsumedcookies: {
        value: cdktf.stringToHclTerraform(this._clientconsumedcookies),
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
      javascriptrewritepolicylabel: {
        value: cdktf.stringToHclTerraform(this._javascriptrewritepolicylabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profilename: {
        value: cdktf.stringToHclTerraform(this._profilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regexforfindingcustomurls: {
        value: cdktf.stringToHclTerraform(this._regexforfindingcustomurls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regexforfindingurlincss: {
        value: cdktf.stringToHclTerraform(this._regexforfindingurlincss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regexforfindingurlinjavascript: {
        value: cdktf.stringToHclTerraform(this._regexforfindingurlinjavascript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regexforfindingurlinxcomponent: {
        value: cdktf.stringToHclTerraform(this._regexforfindingurlinxcomponent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regexforfindingurlinxml: {
        value: cdktf.stringToHclTerraform(this._regexforfindingurlinxml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reqhdrrewritepolicylabel: {
        value: cdktf.stringToHclTerraform(this._reqhdrrewritepolicylabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requirepersistentcookie: {
        value: cdktf.stringToHclTerraform(this._requirepersistentcookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reshdrrewritepolicylabel: {
        value: cdktf.stringToHclTerraform(this._reshdrrewritepolicylabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urlrewritepolicylabel: {
        value: cdktf.stringToHclTerraform(this._urlrewritepolicylabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
