// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotsettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings#defaultnonintrusiveprofile Botsettings#defaultnonintrusiveprofile}
  */
  readonly defaultnonintrusiveprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings#defaultprofile Botsettings#defaultprofile}
  */
  readonly defaultprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings#dfprequestlimit Botsettings#dfprequestlimit}
  */
  readonly dfprequestlimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings#id Botsettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings#javascriptname Botsettings#javascriptname}
  */
  readonly javascriptname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings#proxyport Botsettings#proxyport}
  */
  readonly proxyport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings#proxyserver Botsettings#proxyserver}
  */
  readonly proxyserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings#sessioncookiename Botsettings#sessioncookiename}
  */
  readonly sessioncookiename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings#sessiontimeout Botsettings#sessiontimeout}
  */
  readonly sessiontimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings#signatureautoupdate Botsettings#signatureautoupdate}
  */
  readonly signatureautoupdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings#signatureurl Botsettings#signatureurl}
  */
  readonly signatureurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings#trapurlautogenerate Botsettings#trapurlautogenerate}
  */
  readonly trapurlautogenerate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings#trapurlinterval Botsettings#trapurlinterval}
  */
  readonly trapurlinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings#trapurllength Botsettings#trapurllength}
  */
  readonly trapurllength?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings citrixadc_botsettings}
*/
export class Botsettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_botsettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Botsettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Botsettings to import
  * @param importFromId The id of the existing Botsettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Botsettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_botsettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botsettings citrixadc_botsettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotsettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BotsettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_botsettings',
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
    this._defaultnonintrusiveprofile = config.defaultnonintrusiveprofile;
    this._defaultprofile = config.defaultprofile;
    this._dfprequestlimit = config.dfprequestlimit;
    this._id = config.id;
    this._javascriptname = config.javascriptname;
    this._proxyport = config.proxyport;
    this._proxyserver = config.proxyserver;
    this._sessioncookiename = config.sessioncookiename;
    this._sessiontimeout = config.sessiontimeout;
    this._signatureautoupdate = config.signatureautoupdate;
    this._signatureurl = config.signatureurl;
    this._trapurlautogenerate = config.trapurlautogenerate;
    this._trapurlinterval = config.trapurlinterval;
    this._trapurllength = config.trapurllength;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defaultnonintrusiveprofile - computed: true, optional: true, required: false
  private _defaultnonintrusiveprofile?: string; 
  public get defaultnonintrusiveprofile() {
    return this.getStringAttribute('defaultnonintrusiveprofile');
  }
  public set defaultnonintrusiveprofile(value: string) {
    this._defaultnonintrusiveprofile = value;
  }
  public resetDefaultnonintrusiveprofile() {
    this._defaultnonintrusiveprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultnonintrusiveprofileInput() {
    return this._defaultnonintrusiveprofile;
  }

  // defaultprofile - computed: true, optional: true, required: false
  private _defaultprofile?: string; 
  public get defaultprofile() {
    return this.getStringAttribute('defaultprofile');
  }
  public set defaultprofile(value: string) {
    this._defaultprofile = value;
  }
  public resetDefaultprofile() {
    this._defaultprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultprofileInput() {
    return this._defaultprofile;
  }

  // dfprequestlimit - computed: true, optional: true, required: false
  private _dfprequestlimit?: number; 
  public get dfprequestlimit() {
    return this.getNumberAttribute('dfprequestlimit');
  }
  public set dfprequestlimit(value: number) {
    this._dfprequestlimit = value;
  }
  public resetDfprequestlimit() {
    this._dfprequestlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfprequestlimitInput() {
    return this._dfprequestlimit;
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

  // javascriptname - computed: true, optional: true, required: false
  private _javascriptname?: string; 
  public get javascriptname() {
    return this.getStringAttribute('javascriptname');
  }
  public set javascriptname(value: string) {
    this._javascriptname = value;
  }
  public resetJavascriptname() {
    this._javascriptname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptnameInput() {
    return this._javascriptname;
  }

  // proxyport - computed: true, optional: true, required: false
  private _proxyport?: number; 
  public get proxyport() {
    return this.getNumberAttribute('proxyport');
  }
  public set proxyport(value: number) {
    this._proxyport = value;
  }
  public resetProxyport() {
    this._proxyport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyportInput() {
    return this._proxyport;
  }

  // proxyserver - computed: true, optional: true, required: false
  private _proxyserver?: string; 
  public get proxyserver() {
    return this.getStringAttribute('proxyserver');
  }
  public set proxyserver(value: string) {
    this._proxyserver = value;
  }
  public resetProxyserver() {
    this._proxyserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyserverInput() {
    return this._proxyserver;
  }

  // sessioncookiename - computed: true, optional: true, required: false
  private _sessioncookiename?: string; 
  public get sessioncookiename() {
    return this.getStringAttribute('sessioncookiename');
  }
  public set sessioncookiename(value: string) {
    this._sessioncookiename = value;
  }
  public resetSessioncookiename() {
    this._sessioncookiename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessioncookienameInput() {
    return this._sessioncookiename;
  }

  // sessiontimeout - computed: true, optional: true, required: false
  private _sessiontimeout?: number; 
  public get sessiontimeout() {
    return this.getNumberAttribute('sessiontimeout');
  }
  public set sessiontimeout(value: number) {
    this._sessiontimeout = value;
  }
  public resetSessiontimeout() {
    this._sessiontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessiontimeoutInput() {
    return this._sessiontimeout;
  }

  // signatureautoupdate - computed: true, optional: true, required: false
  private _signatureautoupdate?: string; 
  public get signatureautoupdate() {
    return this.getStringAttribute('signatureautoupdate');
  }
  public set signatureautoupdate(value: string) {
    this._signatureautoupdate = value;
  }
  public resetSignatureautoupdate() {
    this._signatureautoupdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureautoupdateInput() {
    return this._signatureautoupdate;
  }

  // signatureurl - computed: true, optional: true, required: false
  private _signatureurl?: string; 
  public get signatureurl() {
    return this.getStringAttribute('signatureurl');
  }
  public set signatureurl(value: string) {
    this._signatureurl = value;
  }
  public resetSignatureurl() {
    this._signatureurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureurlInput() {
    return this._signatureurl;
  }

  // trapurlautogenerate - computed: true, optional: true, required: false
  private _trapurlautogenerate?: string; 
  public get trapurlautogenerate() {
    return this.getStringAttribute('trapurlautogenerate');
  }
  public set trapurlautogenerate(value: string) {
    this._trapurlautogenerate = value;
  }
  public resetTrapurlautogenerate() {
    this._trapurlautogenerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapurlautogenerateInput() {
    return this._trapurlautogenerate;
  }

  // trapurlinterval - computed: true, optional: true, required: false
  private _trapurlinterval?: number; 
  public get trapurlinterval() {
    return this.getNumberAttribute('trapurlinterval');
  }
  public set trapurlinterval(value: number) {
    this._trapurlinterval = value;
  }
  public resetTrapurlinterval() {
    this._trapurlinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapurlintervalInput() {
    return this._trapurlinterval;
  }

  // trapurllength - computed: true, optional: true, required: false
  private _trapurllength?: number; 
  public get trapurllength() {
    return this.getNumberAttribute('trapurllength');
  }
  public set trapurllength(value: number) {
    this._trapurllength = value;
  }
  public resetTrapurllength() {
    this._trapurllength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapurllengthInput() {
    return this._trapurllength;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defaultnonintrusiveprofile: cdktf.stringToTerraform(this._defaultnonintrusiveprofile),
      defaultprofile: cdktf.stringToTerraform(this._defaultprofile),
      dfprequestlimit: cdktf.numberToTerraform(this._dfprequestlimit),
      id: cdktf.stringToTerraform(this._id),
      javascriptname: cdktf.stringToTerraform(this._javascriptname),
      proxyport: cdktf.numberToTerraform(this._proxyport),
      proxyserver: cdktf.stringToTerraform(this._proxyserver),
      sessioncookiename: cdktf.stringToTerraform(this._sessioncookiename),
      sessiontimeout: cdktf.numberToTerraform(this._sessiontimeout),
      signatureautoupdate: cdktf.stringToTerraform(this._signatureautoupdate),
      signatureurl: cdktf.stringToTerraform(this._signatureurl),
      trapurlautogenerate: cdktf.stringToTerraform(this._trapurlautogenerate),
      trapurlinterval: cdktf.numberToTerraform(this._trapurlinterval),
      trapurllength: cdktf.numberToTerraform(this._trapurllength),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defaultnonintrusiveprofile: {
        value: cdktf.stringToHclTerraform(this._defaultnonintrusiveprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultprofile: {
        value: cdktf.stringToHclTerraform(this._defaultprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dfprequestlimit: {
        value: cdktf.numberToHclTerraform(this._dfprequestlimit),
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
      javascriptname: {
        value: cdktf.stringToHclTerraform(this._javascriptname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxyport: {
        value: cdktf.numberToHclTerraform(this._proxyport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxyserver: {
        value: cdktf.stringToHclTerraform(this._proxyserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessioncookiename: {
        value: cdktf.stringToHclTerraform(this._sessioncookiename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessiontimeout: {
        value: cdktf.numberToHclTerraform(this._sessiontimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signatureautoupdate: {
        value: cdktf.stringToHclTerraform(this._signatureautoupdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signatureurl: {
        value: cdktf.stringToHclTerraform(this._signatureurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trapurlautogenerate: {
        value: cdktf.stringToHclTerraform(this._trapurlautogenerate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trapurlinterval: {
        value: cdktf.numberToHclTerraform(this._trapurlinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trapurllength: {
        value: cdktf.numberToHclTerraform(this._trapurllength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
