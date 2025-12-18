// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#allowboundsvcremoval Lbparameter#allowboundsvcremoval}
  */
  readonly allowboundsvcremoval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#computedadccookieattribute Lbparameter#computedadccookieattribute}
  */
  readonly computedadccookieattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#consolidatedlconn Lbparameter#consolidatedlconn}
  */
  readonly consolidatedlconn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#cookiepassphrase Lbparameter#cookiepassphrase}
  */
  readonly cookiepassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#dbsttl Lbparameter#dbsttl}
  */
  readonly dbsttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#dropmqttjumbomessage Lbparameter#dropmqttjumbomessage}
  */
  readonly dropmqttjumbomessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#httponlycookieflag Lbparameter#httponlycookieflag}
  */
  readonly httponlycookieflag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#lbhashalgorithm Lbparameter#lbhashalgorithm}
  */
  readonly lbhashalgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#lbhashfingers Lbparameter#lbhashfingers}
  */
  readonly lbhashfingers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#literaladccookieattribute Lbparameter#literaladccookieattribute}
  */
  readonly literaladccookieattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#maxpipelinenat Lbparameter#maxpipelinenat}
  */
  readonly maxpipelinenat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#monitorconnectionclose Lbparameter#monitorconnectionclose}
  */
  readonly monitorconnectionclose?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#monitorskipmaxclient Lbparameter#monitorskipmaxclient}
  */
  readonly monitorskipmaxclient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#preferdirectroute Lbparameter#preferdirectroute}
  */
  readonly preferdirectroute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#proximityfromself Lbparameter#proximityfromself}
  */
  readonly proximityfromself?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#retainservicestate Lbparameter#retainservicestate}
  */
  readonly retainservicestate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#sessionsthreshold Lbparameter#sessionsthreshold}
  */
  readonly sessionsthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#startuprrfactor Lbparameter#startuprrfactor}
  */
  readonly startuprrfactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#storemqttclientidandusername Lbparameter#storemqttclientidandusername}
  */
  readonly storemqttclientidandusername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#undefaction Lbparameter#undefaction}
  */
  readonly undefaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#useencryptedpersistencecookie Lbparameter#useencryptedpersistencecookie}
  */
  readonly useencryptedpersistencecookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#useportforhashlb Lbparameter#useportforhashlb}
  */
  readonly useportforhashlb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#usesecuredpersistencecookie Lbparameter#usesecuredpersistencecookie}
  */
  readonly usesecuredpersistencecookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#vserverspecificmac Lbparameter#vserverspecificmac}
  */
  readonly vserverspecificmac?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter citrixadc_lbparameter}
*/
export class Lbparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lbparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lbparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lbparameter to import
  * @param importFromId The id of the existing Lbparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lbparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lbparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbparameter citrixadc_lbparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LbparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lbparameter',
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
    this._allowboundsvcremoval = config.allowboundsvcremoval;
    this._computedadccookieattribute = config.computedadccookieattribute;
    this._consolidatedlconn = config.consolidatedlconn;
    this._cookiepassphrase = config.cookiepassphrase;
    this._dbsttl = config.dbsttl;
    this._dropmqttjumbomessage = config.dropmqttjumbomessage;
    this._httponlycookieflag = config.httponlycookieflag;
    this._lbhashalgorithm = config.lbhashalgorithm;
    this._lbhashfingers = config.lbhashfingers;
    this._literaladccookieattribute = config.literaladccookieattribute;
    this._maxpipelinenat = config.maxpipelinenat;
    this._monitorconnectionclose = config.monitorconnectionclose;
    this._monitorskipmaxclient = config.monitorskipmaxclient;
    this._preferdirectroute = config.preferdirectroute;
    this._proximityfromself = config.proximityfromself;
    this._retainservicestate = config.retainservicestate;
    this._sessionsthreshold = config.sessionsthreshold;
    this._startuprrfactor = config.startuprrfactor;
    this._storemqttclientidandusername = config.storemqttclientidandusername;
    this._undefaction = config.undefaction;
    this._useencryptedpersistencecookie = config.useencryptedpersistencecookie;
    this._useportforhashlb = config.useportforhashlb;
    this._usesecuredpersistencecookie = config.usesecuredpersistencecookie;
    this._vserverspecificmac = config.vserverspecificmac;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowboundsvcremoval - computed: true, optional: true, required: false
  private _allowboundsvcremoval?: string; 
  public get allowboundsvcremoval() {
    return this.getStringAttribute('allowboundsvcremoval');
  }
  public set allowboundsvcremoval(value: string) {
    this._allowboundsvcremoval = value;
  }
  public resetAllowboundsvcremoval() {
    this._allowboundsvcremoval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowboundsvcremovalInput() {
    return this._allowboundsvcremoval;
  }

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

  // consolidatedlconn - computed: true, optional: true, required: false
  private _consolidatedlconn?: string; 
  public get consolidatedlconn() {
    return this.getStringAttribute('consolidatedlconn');
  }
  public set consolidatedlconn(value: string) {
    this._consolidatedlconn = value;
  }
  public resetConsolidatedlconn() {
    this._consolidatedlconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidatedlconnInput() {
    return this._consolidatedlconn;
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

  // dbsttl - computed: true, optional: true, required: false
  private _dbsttl?: number; 
  public get dbsttl() {
    return this.getNumberAttribute('dbsttl');
  }
  public set dbsttl(value: number) {
    this._dbsttl = value;
  }
  public resetDbsttl() {
    this._dbsttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbsttlInput() {
    return this._dbsttl;
  }

  // dropmqttjumbomessage - computed: true, optional: true, required: false
  private _dropmqttjumbomessage?: string; 
  public get dropmqttjumbomessage() {
    return this.getStringAttribute('dropmqttjumbomessage');
  }
  public set dropmqttjumbomessage(value: string) {
    this._dropmqttjumbomessage = value;
  }
  public resetDropmqttjumbomessage() {
    this._dropmqttjumbomessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropmqttjumbomessageInput() {
    return this._dropmqttjumbomessage;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // maxpipelinenat - computed: true, optional: true, required: false
  private _maxpipelinenat?: number; 
  public get maxpipelinenat() {
    return this.getNumberAttribute('maxpipelinenat');
  }
  public set maxpipelinenat(value: number) {
    this._maxpipelinenat = value;
  }
  public resetMaxpipelinenat() {
    this._maxpipelinenat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpipelinenatInput() {
    return this._maxpipelinenat;
  }

  // monitorconnectionclose - computed: true, optional: true, required: false
  private _monitorconnectionclose?: string; 
  public get monitorconnectionclose() {
    return this.getStringAttribute('monitorconnectionclose');
  }
  public set monitorconnectionclose(value: string) {
    this._monitorconnectionclose = value;
  }
  public resetMonitorconnectionclose() {
    this._monitorconnectionclose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorconnectioncloseInput() {
    return this._monitorconnectionclose;
  }

  // monitorskipmaxclient - computed: true, optional: true, required: false
  private _monitorskipmaxclient?: string; 
  public get monitorskipmaxclient() {
    return this.getStringAttribute('monitorskipmaxclient');
  }
  public set monitorskipmaxclient(value: string) {
    this._monitorskipmaxclient = value;
  }
  public resetMonitorskipmaxclient() {
    this._monitorskipmaxclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorskipmaxclientInput() {
    return this._monitorskipmaxclient;
  }

  // preferdirectroute - computed: true, optional: true, required: false
  private _preferdirectroute?: string; 
  public get preferdirectroute() {
    return this.getStringAttribute('preferdirectroute');
  }
  public set preferdirectroute(value: string) {
    this._preferdirectroute = value;
  }
  public resetPreferdirectroute() {
    this._preferdirectroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferdirectrouteInput() {
    return this._preferdirectroute;
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

  // retainservicestate - computed: true, optional: true, required: false
  private _retainservicestate?: string; 
  public get retainservicestate() {
    return this.getStringAttribute('retainservicestate');
  }
  public set retainservicestate(value: string) {
    this._retainservicestate = value;
  }
  public resetRetainservicestate() {
    this._retainservicestate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainservicestateInput() {
    return this._retainservicestate;
  }

  // sessionsthreshold - computed: true, optional: true, required: false
  private _sessionsthreshold?: number; 
  public get sessionsthreshold() {
    return this.getNumberAttribute('sessionsthreshold');
  }
  public set sessionsthreshold(value: number) {
    this._sessionsthreshold = value;
  }
  public resetSessionsthreshold() {
    this._sessionsthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsthresholdInput() {
    return this._sessionsthreshold;
  }

  // startuprrfactor - computed: true, optional: true, required: false
  private _startuprrfactor?: number; 
  public get startuprrfactor() {
    return this.getNumberAttribute('startuprrfactor');
  }
  public set startuprrfactor(value: number) {
    this._startuprrfactor = value;
  }
  public resetStartuprrfactor() {
    this._startuprrfactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startuprrfactorInput() {
    return this._startuprrfactor;
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

  // undefaction - computed: true, optional: true, required: false
  private _undefaction?: string; 
  public get undefaction() {
    return this.getStringAttribute('undefaction');
  }
  public set undefaction(value: string) {
    this._undefaction = value;
  }
  public resetUndefaction() {
    this._undefaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefactionInput() {
    return this._undefaction;
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

  // useportforhashlb - computed: true, optional: true, required: false
  private _useportforhashlb?: string; 
  public get useportforhashlb() {
    return this.getStringAttribute('useportforhashlb');
  }
  public set useportforhashlb(value: string) {
    this._useportforhashlb = value;
  }
  public resetUseportforhashlb() {
    this._useportforhashlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useportforhashlbInput() {
    return this._useportforhashlb;
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

  // vserverspecificmac - computed: true, optional: true, required: false
  private _vserverspecificmac?: string; 
  public get vserverspecificmac() {
    return this.getStringAttribute('vserverspecificmac');
  }
  public set vserverspecificmac(value: string) {
    this._vserverspecificmac = value;
  }
  public resetVserverspecificmac() {
    this._vserverspecificmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverspecificmacInput() {
    return this._vserverspecificmac;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowboundsvcremoval: cdktf.stringToTerraform(this._allowboundsvcremoval),
      computedadccookieattribute: cdktf.stringToTerraform(this._computedadccookieattribute),
      consolidatedlconn: cdktf.stringToTerraform(this._consolidatedlconn),
      cookiepassphrase: cdktf.stringToTerraform(this._cookiepassphrase),
      dbsttl: cdktf.numberToTerraform(this._dbsttl),
      dropmqttjumbomessage: cdktf.stringToTerraform(this._dropmqttjumbomessage),
      httponlycookieflag: cdktf.stringToTerraform(this._httponlycookieflag),
      lbhashalgorithm: cdktf.stringToTerraform(this._lbhashalgorithm),
      lbhashfingers: cdktf.numberToTerraform(this._lbhashfingers),
      literaladccookieattribute: cdktf.stringToTerraform(this._literaladccookieattribute),
      maxpipelinenat: cdktf.numberToTerraform(this._maxpipelinenat),
      monitorconnectionclose: cdktf.stringToTerraform(this._monitorconnectionclose),
      monitorskipmaxclient: cdktf.stringToTerraform(this._monitorskipmaxclient),
      preferdirectroute: cdktf.stringToTerraform(this._preferdirectroute),
      proximityfromself: cdktf.stringToTerraform(this._proximityfromself),
      retainservicestate: cdktf.stringToTerraform(this._retainservicestate),
      sessionsthreshold: cdktf.numberToTerraform(this._sessionsthreshold),
      startuprrfactor: cdktf.numberToTerraform(this._startuprrfactor),
      storemqttclientidandusername: cdktf.stringToTerraform(this._storemqttclientidandusername),
      undefaction: cdktf.stringToTerraform(this._undefaction),
      useencryptedpersistencecookie: cdktf.stringToTerraform(this._useencryptedpersistencecookie),
      useportforhashlb: cdktf.stringToTerraform(this._useportforhashlb),
      usesecuredpersistencecookie: cdktf.stringToTerraform(this._usesecuredpersistencecookie),
      vserverspecificmac: cdktf.stringToTerraform(this._vserverspecificmac),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowboundsvcremoval: {
        value: cdktf.stringToHclTerraform(this._allowboundsvcremoval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      computedadccookieattribute: {
        value: cdktf.stringToHclTerraform(this._computedadccookieattribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consolidatedlconn: {
        value: cdktf.stringToHclTerraform(this._consolidatedlconn),
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
      dbsttl: {
        value: cdktf.numberToHclTerraform(this._dbsttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dropmqttjumbomessage: {
        value: cdktf.stringToHclTerraform(this._dropmqttjumbomessage),
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
      literaladccookieattribute: {
        value: cdktf.stringToHclTerraform(this._literaladccookieattribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxpipelinenat: {
        value: cdktf.numberToHclTerraform(this._maxpipelinenat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitorconnectionclose: {
        value: cdktf.stringToHclTerraform(this._monitorconnectionclose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitorskipmaxclient: {
        value: cdktf.stringToHclTerraform(this._monitorskipmaxclient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferdirectroute: {
        value: cdktf.stringToHclTerraform(this._preferdirectroute),
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
      retainservicestate: {
        value: cdktf.stringToHclTerraform(this._retainservicestate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessionsthreshold: {
        value: cdktf.numberToHclTerraform(this._sessionsthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      startuprrfactor: {
        value: cdktf.numberToHclTerraform(this._startuprrfactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storemqttclientidandusername: {
        value: cdktf.stringToHclTerraform(this._storemqttclientidandusername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      undefaction: {
        value: cdktf.stringToHclTerraform(this._undefaction),
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
      useportforhashlb: {
        value: cdktf.stringToHclTerraform(this._useportforhashlb),
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
      vserverspecificmac: {
        value: cdktf.stringToHclTerraform(this._vserverspecificmac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
