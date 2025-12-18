// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#crlmemorysizemb Sslparameter#crlmemorysizemb}
  */
  readonly crlmemorysizemb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#cryptodevdisablelimit Sslparameter#cryptodevdisablelimit}
  */
  readonly cryptodevdisablelimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#defaultprofile Sslparameter#defaultprofile}
  */
  readonly defaultprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#denysslreneg Sslparameter#denysslreneg}
  */
  readonly denysslreneg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#dropreqwithnohostheader Sslparameter#dropreqwithnohostheader}
  */
  readonly dropreqwithnohostheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#encrypttriggerpktcount Sslparameter#encrypttriggerpktcount}
  */
  readonly encrypttriggerpktcount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#heterogeneoussslhw Sslparameter#heterogeneoussslhw}
  */
  readonly heterogeneoussslhw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#hybridfipsmode Sslparameter#hybridfipsmode}
  */
  readonly hybridfipsmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#id Sslparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#insertcertspace Sslparameter#insertcertspace}
  */
  readonly insertcertspace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#insertionencoding Sslparameter#insertionencoding}
  */
  readonly insertionencoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#ndcppcompliancecertcheck Sslparameter#ndcppcompliancecertcheck}
  */
  readonly ndcppcompliancecertcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#ocspcachesize Sslparameter#ocspcachesize}
  */
  readonly ocspcachesize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#operationqueuelimit Sslparameter#operationqueuelimit}
  */
  readonly operationqueuelimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#pushenctriggertimeout Sslparameter#pushenctriggertimeout}
  */
  readonly pushenctriggertimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#pushflag Sslparameter#pushflag}
  */
  readonly pushflag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#quantumsize Sslparameter#quantumsize}
  */
  readonly quantumsize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#sendclosenotify Sslparameter#sendclosenotify}
  */
  readonly sendclosenotify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#sigdigesttype Sslparameter#sigdigesttype}
  */
  readonly sigdigesttype?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#snihttphostmatch Sslparameter#snihttphostmatch}
  */
  readonly snihttphostmatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#softwarecryptothreshold Sslparameter#softwarecryptothreshold}
  */
  readonly softwarecryptothreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#sslierrorcache Sslparameter#sslierrorcache}
  */
  readonly sslierrorcache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#sslimaxerrorcachemem Sslparameter#sslimaxerrorcachemem}
  */
  readonly sslimaxerrorcachemem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#ssltriggertimeout Sslparameter#ssltriggertimeout}
  */
  readonly ssltriggertimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#strictcachecks Sslparameter#strictcachecks}
  */
  readonly strictcachecks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#undefactioncontrol Sslparameter#undefactioncontrol}
  */
  readonly undefactioncontrol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#undefactiondata Sslparameter#undefactiondata}
  */
  readonly undefactiondata?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter citrixadc_sslparameter}
*/
export class Sslparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslparameter to import
  * @param importFromId The id of the existing Sslparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslparameter citrixadc_sslparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SslparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslparameter',
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
    this._crlmemorysizemb = config.crlmemorysizemb;
    this._cryptodevdisablelimit = config.cryptodevdisablelimit;
    this._defaultprofile = config.defaultprofile;
    this._denysslreneg = config.denysslreneg;
    this._dropreqwithnohostheader = config.dropreqwithnohostheader;
    this._encrypttriggerpktcount = config.encrypttriggerpktcount;
    this._heterogeneoussslhw = config.heterogeneoussslhw;
    this._hybridfipsmode = config.hybridfipsmode;
    this._id = config.id;
    this._insertcertspace = config.insertcertspace;
    this._insertionencoding = config.insertionencoding;
    this._ndcppcompliancecertcheck = config.ndcppcompliancecertcheck;
    this._ocspcachesize = config.ocspcachesize;
    this._operationqueuelimit = config.operationqueuelimit;
    this._pushenctriggertimeout = config.pushenctriggertimeout;
    this._pushflag = config.pushflag;
    this._quantumsize = config.quantumsize;
    this._sendclosenotify = config.sendclosenotify;
    this._sigdigesttype = config.sigdigesttype;
    this._snihttphostmatch = config.snihttphostmatch;
    this._softwarecryptothreshold = config.softwarecryptothreshold;
    this._sslierrorcache = config.sslierrorcache;
    this._sslimaxerrorcachemem = config.sslimaxerrorcachemem;
    this._ssltriggertimeout = config.ssltriggertimeout;
    this._strictcachecks = config.strictcachecks;
    this._undefactioncontrol = config.undefactioncontrol;
    this._undefactiondata = config.undefactiondata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crlmemorysizemb - computed: true, optional: true, required: false
  private _crlmemorysizemb?: number; 
  public get crlmemorysizemb() {
    return this.getNumberAttribute('crlmemorysizemb');
  }
  public set crlmemorysizemb(value: number) {
    this._crlmemorysizemb = value;
  }
  public resetCrlmemorysizemb() {
    this._crlmemorysizemb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlmemorysizembInput() {
    return this._crlmemorysizemb;
  }

  // cryptodevdisablelimit - computed: true, optional: true, required: false
  private _cryptodevdisablelimit?: number; 
  public get cryptodevdisablelimit() {
    return this.getNumberAttribute('cryptodevdisablelimit');
  }
  public set cryptodevdisablelimit(value: number) {
    this._cryptodevdisablelimit = value;
  }
  public resetCryptodevdisablelimit() {
    this._cryptodevdisablelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptodevdisablelimitInput() {
    return this._cryptodevdisablelimit;
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

  // denysslreneg - computed: true, optional: true, required: false
  private _denysslreneg?: string; 
  public get denysslreneg() {
    return this.getStringAttribute('denysslreneg');
  }
  public set denysslreneg(value: string) {
    this._denysslreneg = value;
  }
  public resetDenysslreneg() {
    this._denysslreneg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denysslrenegInput() {
    return this._denysslreneg;
  }

  // dropreqwithnohostheader - computed: true, optional: true, required: false
  private _dropreqwithnohostheader?: string; 
  public get dropreqwithnohostheader() {
    return this.getStringAttribute('dropreqwithnohostheader');
  }
  public set dropreqwithnohostheader(value: string) {
    this._dropreqwithnohostheader = value;
  }
  public resetDropreqwithnohostheader() {
    this._dropreqwithnohostheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropreqwithnohostheaderInput() {
    return this._dropreqwithnohostheader;
  }

  // encrypttriggerpktcount - computed: true, optional: true, required: false
  private _encrypttriggerpktcount?: number; 
  public get encrypttriggerpktcount() {
    return this.getNumberAttribute('encrypttriggerpktcount');
  }
  public set encrypttriggerpktcount(value: number) {
    this._encrypttriggerpktcount = value;
  }
  public resetEncrypttriggerpktcount() {
    this._encrypttriggerpktcount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encrypttriggerpktcountInput() {
    return this._encrypttriggerpktcount;
  }

  // heterogeneoussslhw - computed: true, optional: true, required: false
  private _heterogeneoussslhw?: string; 
  public get heterogeneoussslhw() {
    return this.getStringAttribute('heterogeneoussslhw');
  }
  public set heterogeneoussslhw(value: string) {
    this._heterogeneoussslhw = value;
  }
  public resetHeterogeneoussslhw() {
    this._heterogeneoussslhw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heterogeneoussslhwInput() {
    return this._heterogeneoussslhw;
  }

  // hybridfipsmode - computed: true, optional: true, required: false
  private _hybridfipsmode?: string; 
  public get hybridfipsmode() {
    return this.getStringAttribute('hybridfipsmode');
  }
  public set hybridfipsmode(value: string) {
    this._hybridfipsmode = value;
  }
  public resetHybridfipsmode() {
    this._hybridfipsmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridfipsmodeInput() {
    return this._hybridfipsmode;
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

  // insertcertspace - computed: true, optional: true, required: false
  private _insertcertspace?: string; 
  public get insertcertspace() {
    return this.getStringAttribute('insertcertspace');
  }
  public set insertcertspace(value: string) {
    this._insertcertspace = value;
  }
  public resetInsertcertspace() {
    this._insertcertspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertcertspaceInput() {
    return this._insertcertspace;
  }

  // insertionencoding - computed: true, optional: true, required: false
  private _insertionencoding?: string; 
  public get insertionencoding() {
    return this.getStringAttribute('insertionencoding');
  }
  public set insertionencoding(value: string) {
    this._insertionencoding = value;
  }
  public resetInsertionencoding() {
    this._insertionencoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertionencodingInput() {
    return this._insertionencoding;
  }

  // ndcppcompliancecertcheck - computed: true, optional: true, required: false
  private _ndcppcompliancecertcheck?: string; 
  public get ndcppcompliancecertcheck() {
    return this.getStringAttribute('ndcppcompliancecertcheck');
  }
  public set ndcppcompliancecertcheck(value: string) {
    this._ndcppcompliancecertcheck = value;
  }
  public resetNdcppcompliancecertcheck() {
    this._ndcppcompliancecertcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndcppcompliancecertcheckInput() {
    return this._ndcppcompliancecertcheck;
  }

  // ocspcachesize - computed: true, optional: true, required: false
  private _ocspcachesize?: number; 
  public get ocspcachesize() {
    return this.getNumberAttribute('ocspcachesize');
  }
  public set ocspcachesize(value: number) {
    this._ocspcachesize = value;
  }
  public resetOcspcachesize() {
    this._ocspcachesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspcachesizeInput() {
    return this._ocspcachesize;
  }

  // operationqueuelimit - computed: true, optional: true, required: false
  private _operationqueuelimit?: number; 
  public get operationqueuelimit() {
    return this.getNumberAttribute('operationqueuelimit');
  }
  public set operationqueuelimit(value: number) {
    this._operationqueuelimit = value;
  }
  public resetOperationqueuelimit() {
    this._operationqueuelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationqueuelimitInput() {
    return this._operationqueuelimit;
  }

  // pushenctriggertimeout - computed: true, optional: true, required: false
  private _pushenctriggertimeout?: number; 
  public get pushenctriggertimeout() {
    return this.getNumberAttribute('pushenctriggertimeout');
  }
  public set pushenctriggertimeout(value: number) {
    this._pushenctriggertimeout = value;
  }
  public resetPushenctriggertimeout() {
    this._pushenctriggertimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushenctriggertimeoutInput() {
    return this._pushenctriggertimeout;
  }

  // pushflag - computed: true, optional: true, required: false
  private _pushflag?: number; 
  public get pushflag() {
    return this.getNumberAttribute('pushflag');
  }
  public set pushflag(value: number) {
    this._pushflag = value;
  }
  public resetPushflag() {
    this._pushflag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushflagInput() {
    return this._pushflag;
  }

  // quantumsize - computed: true, optional: true, required: false
  private _quantumsize?: string; 
  public get quantumsize() {
    return this.getStringAttribute('quantumsize');
  }
  public set quantumsize(value: string) {
    this._quantumsize = value;
  }
  public resetQuantumsize() {
    this._quantumsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantumsizeInput() {
    return this._quantumsize;
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

  // sigdigesttype - computed: true, optional: true, required: false
  private _sigdigesttype?: string[]; 
  public get sigdigesttype() {
    return this.getListAttribute('sigdigesttype');
  }
  public set sigdigesttype(value: string[]) {
    this._sigdigesttype = value;
  }
  public resetSigdigesttype() {
    this._sigdigesttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigdigesttypeInput() {
    return this._sigdigesttype;
  }

  // snihttphostmatch - computed: true, optional: true, required: false
  private _snihttphostmatch?: string; 
  public get snihttphostmatch() {
    return this.getStringAttribute('snihttphostmatch');
  }
  public set snihttphostmatch(value: string) {
    this._snihttphostmatch = value;
  }
  public resetSnihttphostmatch() {
    this._snihttphostmatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snihttphostmatchInput() {
    return this._snihttphostmatch;
  }

  // softwarecryptothreshold - computed: true, optional: true, required: false
  private _softwarecryptothreshold?: number; 
  public get softwarecryptothreshold() {
    return this.getNumberAttribute('softwarecryptothreshold');
  }
  public set softwarecryptothreshold(value: number) {
    this._softwarecryptothreshold = value;
  }
  public resetSoftwarecryptothreshold() {
    this._softwarecryptothreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwarecryptothresholdInput() {
    return this._softwarecryptothreshold;
  }

  // sslierrorcache - computed: true, optional: true, required: false
  private _sslierrorcache?: string; 
  public get sslierrorcache() {
    return this.getStringAttribute('sslierrorcache');
  }
  public set sslierrorcache(value: string) {
    this._sslierrorcache = value;
  }
  public resetSslierrorcache() {
    this._sslierrorcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslierrorcacheInput() {
    return this._sslierrorcache;
  }

  // sslimaxerrorcachemem - computed: true, optional: true, required: false
  private _sslimaxerrorcachemem?: number; 
  public get sslimaxerrorcachemem() {
    return this.getNumberAttribute('sslimaxerrorcachemem');
  }
  public set sslimaxerrorcachemem(value: number) {
    this._sslimaxerrorcachemem = value;
  }
  public resetSslimaxerrorcachemem() {
    this._sslimaxerrorcachemem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslimaxerrorcachememInput() {
    return this._sslimaxerrorcachemem;
  }

  // ssltriggertimeout - computed: true, optional: true, required: false
  private _ssltriggertimeout?: number; 
  public get ssltriggertimeout() {
    return this.getNumberAttribute('ssltriggertimeout');
  }
  public set ssltriggertimeout(value: number) {
    this._ssltriggertimeout = value;
  }
  public resetSsltriggertimeout() {
    this._ssltriggertimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssltriggertimeoutInput() {
    return this._ssltriggertimeout;
  }

  // strictcachecks - computed: true, optional: true, required: false
  private _strictcachecks?: string; 
  public get strictcachecks() {
    return this.getStringAttribute('strictcachecks');
  }
  public set strictcachecks(value: string) {
    this._strictcachecks = value;
  }
  public resetStrictcachecks() {
    this._strictcachecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictcachecksInput() {
    return this._strictcachecks;
  }

  // undefactioncontrol - computed: true, optional: true, required: false
  private _undefactioncontrol?: string; 
  public get undefactioncontrol() {
    return this.getStringAttribute('undefactioncontrol');
  }
  public set undefactioncontrol(value: string) {
    this._undefactioncontrol = value;
  }
  public resetUndefactioncontrol() {
    this._undefactioncontrol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefactioncontrolInput() {
    return this._undefactioncontrol;
  }

  // undefactiondata - computed: true, optional: true, required: false
  private _undefactiondata?: string; 
  public get undefactiondata() {
    return this.getStringAttribute('undefactiondata');
  }
  public set undefactiondata(value: string) {
    this._undefactiondata = value;
  }
  public resetUndefactiondata() {
    this._undefactiondata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefactiondataInput() {
    return this._undefactiondata;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      crlmemorysizemb: cdktf.numberToTerraform(this._crlmemorysizemb),
      cryptodevdisablelimit: cdktf.numberToTerraform(this._cryptodevdisablelimit),
      defaultprofile: cdktf.stringToTerraform(this._defaultprofile),
      denysslreneg: cdktf.stringToTerraform(this._denysslreneg),
      dropreqwithnohostheader: cdktf.stringToTerraform(this._dropreqwithnohostheader),
      encrypttriggerpktcount: cdktf.numberToTerraform(this._encrypttriggerpktcount),
      heterogeneoussslhw: cdktf.stringToTerraform(this._heterogeneoussslhw),
      hybridfipsmode: cdktf.stringToTerraform(this._hybridfipsmode),
      id: cdktf.stringToTerraform(this._id),
      insertcertspace: cdktf.stringToTerraform(this._insertcertspace),
      insertionencoding: cdktf.stringToTerraform(this._insertionencoding),
      ndcppcompliancecertcheck: cdktf.stringToTerraform(this._ndcppcompliancecertcheck),
      ocspcachesize: cdktf.numberToTerraform(this._ocspcachesize),
      operationqueuelimit: cdktf.numberToTerraform(this._operationqueuelimit),
      pushenctriggertimeout: cdktf.numberToTerraform(this._pushenctriggertimeout),
      pushflag: cdktf.numberToTerraform(this._pushflag),
      quantumsize: cdktf.stringToTerraform(this._quantumsize),
      sendclosenotify: cdktf.stringToTerraform(this._sendclosenotify),
      sigdigesttype: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sigdigesttype),
      snihttphostmatch: cdktf.stringToTerraform(this._snihttphostmatch),
      softwarecryptothreshold: cdktf.numberToTerraform(this._softwarecryptothreshold),
      sslierrorcache: cdktf.stringToTerraform(this._sslierrorcache),
      sslimaxerrorcachemem: cdktf.numberToTerraform(this._sslimaxerrorcachemem),
      ssltriggertimeout: cdktf.numberToTerraform(this._ssltriggertimeout),
      strictcachecks: cdktf.stringToTerraform(this._strictcachecks),
      undefactioncontrol: cdktf.stringToTerraform(this._undefactioncontrol),
      undefactiondata: cdktf.stringToTerraform(this._undefactiondata),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crlmemorysizemb: {
        value: cdktf.numberToHclTerraform(this._crlmemorysizemb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cryptodevdisablelimit: {
        value: cdktf.numberToHclTerraform(this._cryptodevdisablelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defaultprofile: {
        value: cdktf.stringToHclTerraform(this._defaultprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      denysslreneg: {
        value: cdktf.stringToHclTerraform(this._denysslreneg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dropreqwithnohostheader: {
        value: cdktf.stringToHclTerraform(this._dropreqwithnohostheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypttriggerpktcount: {
        value: cdktf.numberToHclTerraform(this._encrypttriggerpktcount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      heterogeneoussslhw: {
        value: cdktf.stringToHclTerraform(this._heterogeneoussslhw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hybridfipsmode: {
        value: cdktf.stringToHclTerraform(this._hybridfipsmode),
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
      insertcertspace: {
        value: cdktf.stringToHclTerraform(this._insertcertspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insertionencoding: {
        value: cdktf.stringToHclTerraform(this._insertionencoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ndcppcompliancecertcheck: {
        value: cdktf.stringToHclTerraform(this._ndcppcompliancecertcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocspcachesize: {
        value: cdktf.numberToHclTerraform(this._ocspcachesize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      operationqueuelimit: {
        value: cdktf.numberToHclTerraform(this._operationqueuelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pushenctriggertimeout: {
        value: cdktf.numberToHclTerraform(this._pushenctriggertimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pushflag: {
        value: cdktf.numberToHclTerraform(this._pushflag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quantumsize: {
        value: cdktf.stringToHclTerraform(this._quantumsize),
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
      sigdigesttype: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sigdigesttype),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      snihttphostmatch: {
        value: cdktf.stringToHclTerraform(this._snihttphostmatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      softwarecryptothreshold: {
        value: cdktf.numberToHclTerraform(this._softwarecryptothreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslierrorcache: {
        value: cdktf.stringToHclTerraform(this._sslierrorcache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslimaxerrorcachemem: {
        value: cdktf.numberToHclTerraform(this._sslimaxerrorcachemem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssltriggertimeout: {
        value: cdktf.numberToHclTerraform(this._ssltriggertimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      strictcachecks: {
        value: cdktf.stringToHclTerraform(this._strictcachecks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      undefactioncontrol: {
        value: cdktf.stringToHclTerraform(this._undefactioncontrol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      undefactiondata: {
        value: cdktf.stringToHclTerraform(this._undefactiondata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
