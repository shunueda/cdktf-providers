// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslservicegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#commonname Sslservicegroup#commonname}
  */
  readonly commonname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#id Sslservicegroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#ocspstapling Sslservicegroup#ocspstapling}
  */
  readonly ocspstapling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#sendclosenotify Sslservicegroup#sendclosenotify}
  */
  readonly sendclosenotify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#serverauth Sslservicegroup#serverauth}
  */
  readonly serverauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#servicegroupname Sslservicegroup#servicegroupname}
  */
  readonly servicegroupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#sessreuse Sslservicegroup#sessreuse}
  */
  readonly sessreuse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#sesstimeout Sslservicegroup#sesstimeout}
  */
  readonly sesstimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#snienable Sslservicegroup#snienable}
  */
  readonly snienable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#ssl3 Sslservicegroup#ssl3}
  */
  readonly ssl3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#sslprofile Sslservicegroup#sslprofile}
  */
  readonly sslprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#strictsigdigestcheck Sslservicegroup#strictsigdigestcheck}
  */
  readonly strictsigdigestcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#tls1 Sslservicegroup#tls1}
  */
  readonly tls1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#tls11 Sslservicegroup#tls11}
  */
  readonly tls11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#tls12 Sslservicegroup#tls12}
  */
  readonly tls12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#tls13 Sslservicegroup#tls13}
  */
  readonly tls13?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup citrixadc_sslservicegroup}
*/
export class Sslservicegroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslservicegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslservicegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslservicegroup to import
  * @param importFromId The id of the existing Sslservicegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslservicegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslservicegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservicegroup citrixadc_sslservicegroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslservicegroupConfig
  */
  public constructor(scope: Construct, id: string, config: SslservicegroupConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslservicegroup',
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
    this._commonname = config.commonname;
    this._id = config.id;
    this._ocspstapling = config.ocspstapling;
    this._sendclosenotify = config.sendclosenotify;
    this._serverauth = config.serverauth;
    this._servicegroupname = config.servicegroupname;
    this._sessreuse = config.sessreuse;
    this._sesstimeout = config.sesstimeout;
    this._snienable = config.snienable;
    this._ssl3 = config.ssl3;
    this._sslprofile = config.sslprofile;
    this._strictsigdigestcheck = config.strictsigdigestcheck;
    this._tls1 = config.tls1;
    this._tls11 = config.tls11;
    this._tls12 = config.tls12;
    this._tls13 = config.tls13;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commonname - computed: true, optional: true, required: false
  private _commonname?: string; 
  public get commonname() {
    return this.getStringAttribute('commonname');
  }
  public set commonname(value: string) {
    this._commonname = value;
  }
  public resetCommonname() {
    this._commonname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonnameInput() {
    return this._commonname;
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

  // ocspstapling - computed: true, optional: true, required: false
  private _ocspstapling?: string; 
  public get ocspstapling() {
    return this.getStringAttribute('ocspstapling');
  }
  public set ocspstapling(value: string) {
    this._ocspstapling = value;
  }
  public resetOcspstapling() {
    this._ocspstapling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstaplingInput() {
    return this._ocspstapling;
  }

  // sendclosenotify - computed: true, optional: true, required: false
  private _sendclosenotify?: string; 
  public get sendclosenotify() {
    return this.getStringAttribute('sendclosenotify');
  }
  public set sendclosenotify(value: string) {
    this._sendclosenotify = value;
  }
  public resetSendclosenotify() {
    this._sendclosenotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendclosenotifyInput() {
    return this._sendclosenotify;
  }

  // serverauth - computed: true, optional: true, required: false
  private _serverauth?: string; 
  public get serverauth() {
    return this.getStringAttribute('serverauth');
  }
  public set serverauth(value: string) {
    this._serverauth = value;
  }
  public resetServerauth() {
    this._serverauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverauthInput() {
    return this._serverauth;
  }

  // servicegroupname - computed: false, optional: false, required: true
  private _servicegroupname?: string; 
  public get servicegroupname() {
    return this.getStringAttribute('servicegroupname');
  }
  public set servicegroupname(value: string) {
    this._servicegroupname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicegroupnameInput() {
    return this._servicegroupname;
  }

  // sessreuse - computed: true, optional: true, required: false
  private _sessreuse?: string; 
  public get sessreuse() {
    return this.getStringAttribute('sessreuse');
  }
  public set sessreuse(value: string) {
    this._sessreuse = value;
  }
  public resetSessreuse() {
    this._sessreuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessreuseInput() {
    return this._sessreuse;
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

  // snienable - computed: true, optional: true, required: false
  private _snienable?: string; 
  public get snienable() {
    return this.getStringAttribute('snienable');
  }
  public set snienable(value: string) {
    this._snienable = value;
  }
  public resetSnienable() {
    this._snienable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snienableInput() {
    return this._snienable;
  }

  // ssl3 - computed: true, optional: true, required: false
  private _ssl3?: string; 
  public get ssl3() {
    return this.getStringAttribute('ssl3');
  }
  public set ssl3(value: string) {
    this._ssl3 = value;
  }
  public resetSsl3() {
    this._ssl3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3Input() {
    return this._ssl3;
  }

  // sslprofile - computed: true, optional: true, required: false
  private _sslprofile?: string; 
  public get sslprofile() {
    return this.getStringAttribute('sslprofile');
  }
  public set sslprofile(value: string) {
    this._sslprofile = value;
  }
  public resetSslprofile() {
    this._sslprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslprofileInput() {
    return this._sslprofile;
  }

  // strictsigdigestcheck - computed: true, optional: true, required: false
  private _strictsigdigestcheck?: string; 
  public get strictsigdigestcheck() {
    return this.getStringAttribute('strictsigdigestcheck');
  }
  public set strictsigdigestcheck(value: string) {
    this._strictsigdigestcheck = value;
  }
  public resetStrictsigdigestcheck() {
    this._strictsigdigestcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictsigdigestcheckInput() {
    return this._strictsigdigestcheck;
  }

  // tls1 - computed: true, optional: true, required: false
  private _tls1?: string; 
  public get tls1() {
    return this.getStringAttribute('tls1');
  }
  public set tls1(value: string) {
    this._tls1 = value;
  }
  public resetTls1() {
    this._tls1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1Input() {
    return this._tls1;
  }

  // tls11 - computed: true, optional: true, required: false
  private _tls11?: string; 
  public get tls11() {
    return this.getStringAttribute('tls11');
  }
  public set tls11(value: string) {
    this._tls11 = value;
  }
  public resetTls11() {
    this._tls11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls11Input() {
    return this._tls11;
  }

  // tls12 - computed: true, optional: true, required: false
  private _tls12?: string; 
  public get tls12() {
    return this.getStringAttribute('tls12');
  }
  public set tls12(value: string) {
    this._tls12 = value;
  }
  public resetTls12() {
    this._tls12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12Input() {
    return this._tls12;
  }

  // tls13 - computed: true, optional: true, required: false
  private _tls13?: string; 
  public get tls13() {
    return this.getStringAttribute('tls13');
  }
  public set tls13(value: string) {
    this._tls13 = value;
  }
  public resetTls13() {
    this._tls13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13Input() {
    return this._tls13;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commonname: cdktf.stringToTerraform(this._commonname),
      id: cdktf.stringToTerraform(this._id),
      ocspstapling: cdktf.stringToTerraform(this._ocspstapling),
      sendclosenotify: cdktf.stringToTerraform(this._sendclosenotify),
      serverauth: cdktf.stringToTerraform(this._serverauth),
      servicegroupname: cdktf.stringToTerraform(this._servicegroupname),
      sessreuse: cdktf.stringToTerraform(this._sessreuse),
      sesstimeout: cdktf.numberToTerraform(this._sesstimeout),
      snienable: cdktf.stringToTerraform(this._snienable),
      ssl3: cdktf.stringToTerraform(this._ssl3),
      sslprofile: cdktf.stringToTerraform(this._sslprofile),
      strictsigdigestcheck: cdktf.stringToTerraform(this._strictsigdigestcheck),
      tls1: cdktf.stringToTerraform(this._tls1),
      tls11: cdktf.stringToTerraform(this._tls11),
      tls12: cdktf.stringToTerraform(this._tls12),
      tls13: cdktf.stringToTerraform(this._tls13),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commonname: {
        value: cdktf.stringToHclTerraform(this._commonname),
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
      ocspstapling: {
        value: cdktf.stringToHclTerraform(this._ocspstapling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sendclosenotify: {
        value: cdktf.stringToHclTerraform(this._sendclosenotify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverauth: {
        value: cdktf.stringToHclTerraform(this._serverauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicegroupname: {
        value: cdktf.stringToHclTerraform(this._servicegroupname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessreuse: {
        value: cdktf.stringToHclTerraform(this._sessreuse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sesstimeout: {
        value: cdktf.numberToHclTerraform(this._sesstimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snienable: {
        value: cdktf.stringToHclTerraform(this._snienable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl3: {
        value: cdktf.stringToHclTerraform(this._ssl3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslprofile: {
        value: cdktf.stringToHclTerraform(this._sslprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strictsigdigestcheck: {
        value: cdktf.stringToHclTerraform(this._strictsigdigestcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls1: {
        value: cdktf.stringToHclTerraform(this._tls1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls11: {
        value: cdktf.stringToHclTerraform(this._tls11),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls12: {
        value: cdktf.stringToHclTerraform(this._tls12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls13: {
        value: cdktf.stringToHclTerraform(this._tls13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
