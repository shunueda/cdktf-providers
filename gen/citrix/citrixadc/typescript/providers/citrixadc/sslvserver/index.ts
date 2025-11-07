// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslvserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#cipherredirect Sslvserver#cipherredirect}
  */
  readonly cipherredirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#cipherurl Sslvserver#cipherurl}
  */
  readonly cipherurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#cleartextport Sslvserver#cleartextport}
  */
  readonly cleartextport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#clientauth Sslvserver#clientauth}
  */
  readonly clientauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#clientcert Sslvserver#clientcert}
  */
  readonly clientcert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#dh Sslvserver#dh}
  */
  readonly dh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#dhcount Sslvserver#dhcount}
  */
  readonly dhcount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#dhekeyexchangewithpsk Sslvserver#dhekeyexchangewithpsk}
  */
  readonly dhekeyexchangewithpsk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#dhfile Sslvserver#dhfile}
  */
  readonly dhfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#dhkeyexpsizelimit Sslvserver#dhkeyexpsizelimit}
  */
  readonly dhkeyexpsizelimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#dtls1 Sslvserver#dtls1}
  */
  readonly dtls1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#dtls12 Sslvserver#dtls12}
  */
  readonly dtls12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#dtlsprofilename Sslvserver#dtlsprofilename}
  */
  readonly dtlsprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#ersa Sslvserver#ersa}
  */
  readonly ersa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#ersacount Sslvserver#ersacount}
  */
  readonly ersacount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#hsts Sslvserver#hsts}
  */
  readonly hsts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#id Sslvserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#includesubdomains Sslvserver#includesubdomains}
  */
  readonly includesubdomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#maxage Sslvserver#maxage}
  */
  readonly maxage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#ocspstapling Sslvserver#ocspstapling}
  */
  readonly ocspstapling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#preload Sslvserver#preload}
  */
  readonly preload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#pushenctrigger Sslvserver#pushenctrigger}
  */
  readonly pushenctrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#redirectportrewrite Sslvserver#redirectportrewrite}
  */
  readonly redirectportrewrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#sendclosenotify Sslvserver#sendclosenotify}
  */
  readonly sendclosenotify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#sessreuse Sslvserver#sessreuse}
  */
  readonly sessreuse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#sesstimeout Sslvserver#sesstimeout}
  */
  readonly sesstimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#snienable Sslvserver#snienable}
  */
  readonly snienable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#ssl2 Sslvserver#ssl2}
  */
  readonly ssl2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#ssl3 Sslvserver#ssl3}
  */
  readonly ssl3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#sslprofile Sslvserver#sslprofile}
  */
  readonly sslprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#sslredirect Sslvserver#sslredirect}
  */
  readonly sslredirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#sslv2redirect Sslvserver#sslv2redirect}
  */
  readonly sslv2Redirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#sslv2url Sslvserver#sslv2url}
  */
  readonly sslv2Url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#strictsigdigestcheck Sslvserver#strictsigdigestcheck}
  */
  readonly strictsigdigestcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#tls1 Sslvserver#tls1}
  */
  readonly tls1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#tls11 Sslvserver#tls11}
  */
  readonly tls11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#tls12 Sslvserver#tls12}
  */
  readonly tls12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#tls13 Sslvserver#tls13}
  */
  readonly tls13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#tls13sessionticketsperauthcontext Sslvserver#tls13sessionticketsperauthcontext}
  */
  readonly tls13Sessionticketsperauthcontext?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#vservername Sslvserver#vservername}
  */
  readonly vservername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#zerorttearlydata Sslvserver#zerorttearlydata}
  */
  readonly zerorttearlydata?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver citrixadc_sslvserver}
*/
export class Sslvserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslvserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslvserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslvserver to import
  * @param importFromId The id of the existing Sslvserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslvserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslvserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver citrixadc_sslvserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslvserverConfig
  */
  public constructor(scope: Construct, id: string, config: SslvserverConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslvserver',
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
    this._cipherredirect = config.cipherredirect;
    this._cipherurl = config.cipherurl;
    this._cleartextport = config.cleartextport;
    this._clientauth = config.clientauth;
    this._clientcert = config.clientcert;
    this._dh = config.dh;
    this._dhcount = config.dhcount;
    this._dhekeyexchangewithpsk = config.dhekeyexchangewithpsk;
    this._dhfile = config.dhfile;
    this._dhkeyexpsizelimit = config.dhkeyexpsizelimit;
    this._dtls1 = config.dtls1;
    this._dtls12 = config.dtls12;
    this._dtlsprofilename = config.dtlsprofilename;
    this._ersa = config.ersa;
    this._ersacount = config.ersacount;
    this._hsts = config.hsts;
    this._id = config.id;
    this._includesubdomains = config.includesubdomains;
    this._maxage = config.maxage;
    this._ocspstapling = config.ocspstapling;
    this._preload = config.preload;
    this._pushenctrigger = config.pushenctrigger;
    this._redirectportrewrite = config.redirectportrewrite;
    this._sendclosenotify = config.sendclosenotify;
    this._sessreuse = config.sessreuse;
    this._sesstimeout = config.sesstimeout;
    this._snienable = config.snienable;
    this._ssl2 = config.ssl2;
    this._ssl3 = config.ssl3;
    this._sslprofile = config.sslprofile;
    this._sslredirect = config.sslredirect;
    this._sslv2Redirect = config.sslv2Redirect;
    this._sslv2Url = config.sslv2Url;
    this._strictsigdigestcheck = config.strictsigdigestcheck;
    this._tls1 = config.tls1;
    this._tls11 = config.tls11;
    this._tls12 = config.tls12;
    this._tls13 = config.tls13;
    this._tls13Sessionticketsperauthcontext = config.tls13Sessionticketsperauthcontext;
    this._vservername = config.vservername;
    this._zerorttearlydata = config.zerorttearlydata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cipherredirect - computed: true, optional: true, required: false
  private _cipherredirect?: string; 
  public get cipherredirect() {
    return this.getStringAttribute('cipherredirect');
  }
  public set cipherredirect(value: string) {
    this._cipherredirect = value;
  }
  public resetCipherredirect() {
    this._cipherredirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherredirectInput() {
    return this._cipherredirect;
  }

  // cipherurl - computed: true, optional: true, required: false
  private _cipherurl?: string; 
  public get cipherurl() {
    return this.getStringAttribute('cipherurl');
  }
  public set cipherurl(value: string) {
    this._cipherurl = value;
  }
  public resetCipherurl() {
    this._cipherurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherurlInput() {
    return this._cipherurl;
  }

  // cleartextport - computed: true, optional: true, required: false
  private _cleartextport?: number; 
  public get cleartextport() {
    return this.getNumberAttribute('cleartextport');
  }
  public set cleartextport(value: number) {
    this._cleartextport = value;
  }
  public resetCleartextport() {
    this._cleartextport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleartextportInput() {
    return this._cleartextport;
  }

  // clientauth - computed: true, optional: true, required: false
  private _clientauth?: string; 
  public get clientauth() {
    return this.getStringAttribute('clientauth');
  }
  public set clientauth(value: string) {
    this._clientauth = value;
  }
  public resetClientauth() {
    this._clientauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientauthInput() {
    return this._clientauth;
  }

  // clientcert - computed: true, optional: true, required: false
  private _clientcert?: string; 
  public get clientcert() {
    return this.getStringAttribute('clientcert');
  }
  public set clientcert(value: string) {
    this._clientcert = value;
  }
  public resetClientcert() {
    this._clientcert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientcertInput() {
    return this._clientcert;
  }

  // dh - computed: true, optional: true, required: false
  private _dh?: string; 
  public get dh() {
    return this.getStringAttribute('dh');
  }
  public set dh(value: string) {
    this._dh = value;
  }
  public resetDh() {
    this._dh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhInput() {
    return this._dh;
  }

  // dhcount - computed: true, optional: true, required: false
  private _dhcount?: number; 
  public get dhcount() {
    return this.getNumberAttribute('dhcount');
  }
  public set dhcount(value: number) {
    this._dhcount = value;
  }
  public resetDhcount() {
    this._dhcount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcountInput() {
    return this._dhcount;
  }

  // dhekeyexchangewithpsk - computed: true, optional: true, required: false
  private _dhekeyexchangewithpsk?: string; 
  public get dhekeyexchangewithpsk() {
    return this.getStringAttribute('dhekeyexchangewithpsk');
  }
  public set dhekeyexchangewithpsk(value: string) {
    this._dhekeyexchangewithpsk = value;
  }
  public resetDhekeyexchangewithpsk() {
    this._dhekeyexchangewithpsk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhekeyexchangewithpskInput() {
    return this._dhekeyexchangewithpsk;
  }

  // dhfile - computed: true, optional: true, required: false
  private _dhfile?: string; 
  public get dhfile() {
    return this.getStringAttribute('dhfile');
  }
  public set dhfile(value: string) {
    this._dhfile = value;
  }
  public resetDhfile() {
    this._dhfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhfileInput() {
    return this._dhfile;
  }

  // dhkeyexpsizelimit - computed: true, optional: true, required: false
  private _dhkeyexpsizelimit?: string; 
  public get dhkeyexpsizelimit() {
    return this.getStringAttribute('dhkeyexpsizelimit');
  }
  public set dhkeyexpsizelimit(value: string) {
    this._dhkeyexpsizelimit = value;
  }
  public resetDhkeyexpsizelimit() {
    this._dhkeyexpsizelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhkeyexpsizelimitInput() {
    return this._dhkeyexpsizelimit;
  }

  // dtls1 - computed: true, optional: true, required: false
  private _dtls1?: string; 
  public get dtls1() {
    return this.getStringAttribute('dtls1');
  }
  public set dtls1(value: string) {
    this._dtls1 = value;
  }
  public resetDtls1() {
    this._dtls1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtls1Input() {
    return this._dtls1;
  }

  // dtls12 - computed: true, optional: true, required: false
  private _dtls12?: string; 
  public get dtls12() {
    return this.getStringAttribute('dtls12');
  }
  public set dtls12(value: string) {
    this._dtls12 = value;
  }
  public resetDtls12() {
    this._dtls12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtls12Input() {
    return this._dtls12;
  }

  // dtlsprofilename - computed: true, optional: true, required: false
  private _dtlsprofilename?: string; 
  public get dtlsprofilename() {
    return this.getStringAttribute('dtlsprofilename');
  }
  public set dtlsprofilename(value: string) {
    this._dtlsprofilename = value;
  }
  public resetDtlsprofilename() {
    this._dtlsprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtlsprofilenameInput() {
    return this._dtlsprofilename;
  }

  // ersa - computed: true, optional: true, required: false
  private _ersa?: string; 
  public get ersa() {
    return this.getStringAttribute('ersa');
  }
  public set ersa(value: string) {
    this._ersa = value;
  }
  public resetErsa() {
    this._ersa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ersaInput() {
    return this._ersa;
  }

  // ersacount - computed: true, optional: true, required: false
  private _ersacount?: number; 
  public get ersacount() {
    return this.getNumberAttribute('ersacount');
  }
  public set ersacount(value: number) {
    this._ersacount = value;
  }
  public resetErsacount() {
    this._ersacount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ersacountInput() {
    return this._ersacount;
  }

  // hsts - computed: true, optional: true, required: false
  private _hsts?: string; 
  public get hsts() {
    return this.getStringAttribute('hsts');
  }
  public set hsts(value: string) {
    this._hsts = value;
  }
  public resetHsts() {
    this._hsts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsInput() {
    return this._hsts;
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

  // includesubdomains - computed: true, optional: true, required: false
  private _includesubdomains?: string; 
  public get includesubdomains() {
    return this.getStringAttribute('includesubdomains');
  }
  public set includesubdomains(value: string) {
    this._includesubdomains = value;
  }
  public resetIncludesubdomains() {
    this._includesubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesubdomainsInput() {
    return this._includesubdomains;
  }

  // maxage - computed: true, optional: true, required: false
  private _maxage?: number; 
  public get maxage() {
    return this.getNumberAttribute('maxage');
  }
  public set maxage(value: number) {
    this._maxage = value;
  }
  public resetMaxage() {
    this._maxage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxageInput() {
    return this._maxage;
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

  // preload - computed: true, optional: true, required: false
  private _preload?: string; 
  public get preload() {
    return this.getStringAttribute('preload');
  }
  public set preload(value: string) {
    this._preload = value;
  }
  public resetPreload() {
    this._preload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadInput() {
    return this._preload;
  }

  // pushenctrigger - computed: true, optional: true, required: false
  private _pushenctrigger?: string; 
  public get pushenctrigger() {
    return this.getStringAttribute('pushenctrigger');
  }
  public set pushenctrigger(value: string) {
    this._pushenctrigger = value;
  }
  public resetPushenctrigger() {
    this._pushenctrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushenctriggerInput() {
    return this._pushenctrigger;
  }

  // redirectportrewrite - computed: true, optional: true, required: false
  private _redirectportrewrite?: string; 
  public get redirectportrewrite() {
    return this.getStringAttribute('redirectportrewrite');
  }
  public set redirectportrewrite(value: string) {
    this._redirectportrewrite = value;
  }
  public resetRedirectportrewrite() {
    this._redirectportrewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectportrewriteInput() {
    return this._redirectportrewrite;
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

  // ssl2 - computed: true, optional: true, required: false
  private _ssl2?: string; 
  public get ssl2() {
    return this.getStringAttribute('ssl2');
  }
  public set ssl2(value: string) {
    this._ssl2 = value;
  }
  public resetSsl2() {
    this._ssl2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl2Input() {
    return this._ssl2;
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

  // sslredirect - computed: true, optional: true, required: false
  private _sslredirect?: string; 
  public get sslredirect() {
    return this.getStringAttribute('sslredirect');
  }
  public set sslredirect(value: string) {
    this._sslredirect = value;
  }
  public resetSslredirect() {
    this._sslredirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslredirectInput() {
    return this._sslredirect;
  }

  // sslv2redirect - computed: true, optional: true, required: false
  private _sslv2Redirect?: string; 
  public get sslv2Redirect() {
    return this.getStringAttribute('sslv2redirect');
  }
  public set sslv2Redirect(value: string) {
    this._sslv2Redirect = value;
  }
  public resetSslv2Redirect() {
    this._sslv2Redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv2RedirectInput() {
    return this._sslv2Redirect;
  }

  // sslv2url - computed: true, optional: true, required: false
  private _sslv2Url?: string; 
  public get sslv2Url() {
    return this.getStringAttribute('sslv2url');
  }
  public set sslv2Url(value: string) {
    this._sslv2Url = value;
  }
  public resetSslv2Url() {
    this._sslv2Url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv2UrlInput() {
    return this._sslv2Url;
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

  // tls13sessionticketsperauthcontext - computed: true, optional: true, required: false
  private _tls13Sessionticketsperauthcontext?: number; 
  public get tls13Sessionticketsperauthcontext() {
    return this.getNumberAttribute('tls13sessionticketsperauthcontext');
  }
  public set tls13Sessionticketsperauthcontext(value: number) {
    this._tls13Sessionticketsperauthcontext = value;
  }
  public resetTls13Sessionticketsperauthcontext() {
    this._tls13Sessionticketsperauthcontext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13SessionticketsperauthcontextInput() {
    return this._tls13Sessionticketsperauthcontext;
  }

  // vservername - computed: false, optional: false, required: true
  private _vservername?: string; 
  public get vservername() {
    return this.getStringAttribute('vservername');
  }
  public set vservername(value: string) {
    this._vservername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vservernameInput() {
    return this._vservername;
  }

  // zerorttearlydata - computed: true, optional: true, required: false
  private _zerorttearlydata?: string; 
  public get zerorttearlydata() {
    return this.getStringAttribute('zerorttearlydata');
  }
  public set zerorttearlydata(value: string) {
    this._zerorttearlydata = value;
  }
  public resetZerorttearlydata() {
    this._zerorttearlydata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zerorttearlydataInput() {
    return this._zerorttearlydata;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cipherredirect: cdktf.stringToTerraform(this._cipherredirect),
      cipherurl: cdktf.stringToTerraform(this._cipherurl),
      cleartextport: cdktf.numberToTerraform(this._cleartextport),
      clientauth: cdktf.stringToTerraform(this._clientauth),
      clientcert: cdktf.stringToTerraform(this._clientcert),
      dh: cdktf.stringToTerraform(this._dh),
      dhcount: cdktf.numberToTerraform(this._dhcount),
      dhekeyexchangewithpsk: cdktf.stringToTerraform(this._dhekeyexchangewithpsk),
      dhfile: cdktf.stringToTerraform(this._dhfile),
      dhkeyexpsizelimit: cdktf.stringToTerraform(this._dhkeyexpsizelimit),
      dtls1: cdktf.stringToTerraform(this._dtls1),
      dtls12: cdktf.stringToTerraform(this._dtls12),
      dtlsprofilename: cdktf.stringToTerraform(this._dtlsprofilename),
      ersa: cdktf.stringToTerraform(this._ersa),
      ersacount: cdktf.numberToTerraform(this._ersacount),
      hsts: cdktf.stringToTerraform(this._hsts),
      id: cdktf.stringToTerraform(this._id),
      includesubdomains: cdktf.stringToTerraform(this._includesubdomains),
      maxage: cdktf.numberToTerraform(this._maxage),
      ocspstapling: cdktf.stringToTerraform(this._ocspstapling),
      preload: cdktf.stringToTerraform(this._preload),
      pushenctrigger: cdktf.stringToTerraform(this._pushenctrigger),
      redirectportrewrite: cdktf.stringToTerraform(this._redirectportrewrite),
      sendclosenotify: cdktf.stringToTerraform(this._sendclosenotify),
      sessreuse: cdktf.stringToTerraform(this._sessreuse),
      sesstimeout: cdktf.numberToTerraform(this._sesstimeout),
      snienable: cdktf.stringToTerraform(this._snienable),
      ssl2: cdktf.stringToTerraform(this._ssl2),
      ssl3: cdktf.stringToTerraform(this._ssl3),
      sslprofile: cdktf.stringToTerraform(this._sslprofile),
      sslredirect: cdktf.stringToTerraform(this._sslredirect),
      sslv2redirect: cdktf.stringToTerraform(this._sslv2Redirect),
      sslv2url: cdktf.stringToTerraform(this._sslv2Url),
      strictsigdigestcheck: cdktf.stringToTerraform(this._strictsigdigestcheck),
      tls1: cdktf.stringToTerraform(this._tls1),
      tls11: cdktf.stringToTerraform(this._tls11),
      tls12: cdktf.stringToTerraform(this._tls12),
      tls13: cdktf.stringToTerraform(this._tls13),
      tls13sessionticketsperauthcontext: cdktf.numberToTerraform(this._tls13Sessionticketsperauthcontext),
      vservername: cdktf.stringToTerraform(this._vservername),
      zerorttearlydata: cdktf.stringToTerraform(this._zerorttearlydata),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cipherredirect: {
        value: cdktf.stringToHclTerraform(this._cipherredirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipherurl: {
        value: cdktf.stringToHclTerraform(this._cipherurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cleartextport: {
        value: cdktf.numberToHclTerraform(this._cleartextport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clientauth: {
        value: cdktf.stringToHclTerraform(this._clientauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientcert: {
        value: cdktf.stringToHclTerraform(this._clientcert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh: {
        value: cdktf.stringToHclTerraform(this._dh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcount: {
        value: cdktf.numberToHclTerraform(this._dhcount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhekeyexchangewithpsk: {
        value: cdktf.stringToHclTerraform(this._dhekeyexchangewithpsk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhfile: {
        value: cdktf.stringToHclTerraform(this._dhfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhkeyexpsizelimit: {
        value: cdktf.stringToHclTerraform(this._dhkeyexpsizelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dtls1: {
        value: cdktf.stringToHclTerraform(this._dtls1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dtls12: {
        value: cdktf.stringToHclTerraform(this._dtls12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dtlsprofilename: {
        value: cdktf.stringToHclTerraform(this._dtlsprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ersa: {
        value: cdktf.stringToHclTerraform(this._ersa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ersacount: {
        value: cdktf.numberToHclTerraform(this._ersacount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hsts: {
        value: cdktf.stringToHclTerraform(this._hsts),
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
      includesubdomains: {
        value: cdktf.stringToHclTerraform(this._includesubdomains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxage: {
        value: cdktf.numberToHclTerraform(this._maxage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocspstapling: {
        value: cdktf.stringToHclTerraform(this._ocspstapling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preload: {
        value: cdktf.stringToHclTerraform(this._preload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pushenctrigger: {
        value: cdktf.stringToHclTerraform(this._pushenctrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirectportrewrite: {
        value: cdktf.stringToHclTerraform(this._redirectportrewrite),
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
      ssl2: {
        value: cdktf.stringToHclTerraform(this._ssl2),
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
      sslredirect: {
        value: cdktf.stringToHclTerraform(this._sslredirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslv2redirect: {
        value: cdktf.stringToHclTerraform(this._sslv2Redirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslv2url: {
        value: cdktf.stringToHclTerraform(this._sslv2Url),
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
      tls13sessionticketsperauthcontext: {
        value: cdktf.numberToHclTerraform(this._tls13Sessionticketsperauthcontext),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vservername: {
        value: cdktf.stringToHclTerraform(this._vservername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zerorttearlydata: {
        value: cdktf.stringToHclTerraform(this._zerorttearlydata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
