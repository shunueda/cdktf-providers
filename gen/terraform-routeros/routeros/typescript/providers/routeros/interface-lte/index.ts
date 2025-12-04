// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceLteConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#___path___ InterfaceLte#___path___}
  */
  readonly path?: string;
  /**
  * Enable data roaming for connecting to other countries data-providers. Not all LTE modems support this feature. Some modems, that do not fully support this feature, will connect to the network but will not establish an IP data connection with allow-roaming set to no.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#allow_roaming InterfaceLte#allow_roaming}
  */
  readonly allowRoaming?: boolean | cdktf.IResolvable;
  /**
  * Which APN profile to use for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#apn_profiles InterfaceLte#apn_profiles}
  */
  readonly apnProfiles?: string;
  /**
  * LTE Frequency band used in communication [LTE Bands and bandwidths](https://en.wikipedia.org/wiki/LTE_frequency_bands#Frequency_bands_and_channel_bandwidths).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#band InterfaceLte#band}
  */
  readonly band?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#comment InterfaceLte#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#disabled InterfaceLte#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#id InterfaceLte#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Modem init string (AT command that will be executed at modem startup).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#modem_init InterfaceLte#modem_init}
  */
  readonly modemInit?: string;
  /**
  * Layer3 Maximum transmission unit ('auto', 0 .. 65535). Look for the exact minimum value in the MikroTik documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#mtu InterfaceLte#mtu}
  */
  readonly mtu?: string;
  /**
  * Descriptive name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#name InterfaceLte#name}
  */
  readonly name: string;
  /**
  * Select/force mode for LTE interface to operate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#network_mode InterfaceLte#network_mode}
  */
  readonly networkMode?: string[];
  /**
  * 5G NR Frequency band used in communication [5G NR Bands and bandwidths](https://en.wikipedia.org/wiki/5G_NR_frequency_bands).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#nr_band InterfaceLte#nr_band}
  */
  readonly nrBand?: number[];
  /**
  * Used to lock the device to a specific operator full PLMN number is used for the lock consisting of MCC+MNC. [PLMN codes](https://en.wikipedia.org/wiki/Public_land_mobile_network).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#operator InterfaceLte#operator}
  */
  readonly operator?: number;
  /**
  * SIM Card's PIN code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#pin InterfaceLte#pin}
  */
  readonly pin?: string;
  /**
  * SMS functionality. `mbim`: uses MBIM driver. `at`: uses AT-Commands. `auto`: selects the appropriate option depending on the modem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#sms_protocol InterfaceLte#sms_protocol}
  */
  readonly smsProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#sms_read InterfaceLte#sms_read}
  */
  readonly smsRead?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte routeros_interface_lte}
*/
export class InterfaceLte extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_lte";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceLte resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceLte to import
  * @param importFromId The id of the existing InterfaceLte that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceLte to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_lte", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_lte routeros_interface_lte} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceLteConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceLteConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_lte',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._allowRoaming = config.allowRoaming;
    this._apnProfiles = config.apnProfiles;
    this._band = config.band;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._modemInit = config.modemInit;
    this._mtu = config.mtu;
    this._name = config.name;
    this._networkMode = config.networkMode;
    this._nrBand = config.nrBand;
    this._operator = config.operator;
    this._pin = config.pin;
    this._smsProtocol = config.smsProtocol;
    this._smsRead = config.smsRead;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // allow_roaming - computed: false, optional: true, required: false
  private _allowRoaming?: boolean | cdktf.IResolvable; 
  public get allowRoaming() {
    return this.getBooleanAttribute('allow_roaming');
  }
  public set allowRoaming(value: boolean | cdktf.IResolvable) {
    this._allowRoaming = value;
  }
  public resetAllowRoaming() {
    this._allowRoaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRoamingInput() {
    return this._allowRoaming;
  }

  // apn_profiles - computed: false, optional: true, required: false
  private _apnProfiles?: string; 
  public get apnProfiles() {
    return this.getStringAttribute('apn_profiles');
  }
  public set apnProfiles(value: string) {
    this._apnProfiles = value;
  }
  public resetApnProfiles() {
    this._apnProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnProfilesInput() {
    return this._apnProfiles;
  }

  // band - computed: false, optional: true, required: false
  private _band?: number[]; 
  public get band() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('band')));
  }
  public set band(value: number[]) {
    this._band = value;
  }
  public resetBand() {
    this._band = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandInput() {
    return this._band;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // default_name - computed: true, optional: false, required: false
  public get defaultName() {
    return this.getStringAttribute('default_name');
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // inactive - computed: true, optional: false, required: false
  public get inactive() {
    return this.getBooleanAttribute('inactive');
  }

  // modem_init - computed: false, optional: true, required: false
  private _modemInit?: string; 
  public get modemInit() {
    return this.getStringAttribute('modem_init');
  }
  public set modemInit(value: string) {
    this._modemInit = value;
  }
  public resetModemInit() {
    this._modemInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modemInitInput() {
    return this._modemInit;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // network_mode - computed: false, optional: true, required: false
  private _networkMode?: string[]; 
  public get networkMode() {
    return cdktf.Fn.tolist(this.getListAttribute('network_mode'));
  }
  public set networkMode(value: string[]) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // nr_band - computed: false, optional: true, required: false
  private _nrBand?: number[]; 
  public get nrBand() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('nr_band')));
  }
  public set nrBand(value: number[]) {
    this._nrBand = value;
  }
  public resetNrBand() {
    this._nrBand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrBandInput() {
    return this._nrBand;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: number; 
  public get operator() {
    return this.getNumberAttribute('operator');
  }
  public set operator(value: number) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // pin - computed: false, optional: true, required: false
  private _pin?: string; 
  public get pin() {
    return this.getStringAttribute('pin');
  }
  public set pin(value: string) {
    this._pin = value;
  }
  public resetPin() {
    this._pin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinInput() {
    return this._pin;
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }

  // sms_protocol - computed: false, optional: true, required: false
  private _smsProtocol?: string; 
  public get smsProtocol() {
    return this.getStringAttribute('sms_protocol');
  }
  public set smsProtocol(value: string) {
    this._smsProtocol = value;
  }
  public resetSmsProtocol() {
    this._smsProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsProtocolInput() {
    return this._smsProtocol;
  }

  // sms_read - computed: false, optional: true, required: false
  private _smsRead?: boolean | cdktf.IResolvable; 
  public get smsRead() {
    return this.getBooleanAttribute('sms_read');
  }
  public set smsRead(value: boolean | cdktf.IResolvable) {
    this._smsRead = value;
  }
  public resetSmsRead() {
    this._smsRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsReadInput() {
    return this._smsRead;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      allow_roaming: cdktf.booleanToTerraform(this._allowRoaming),
      apn_profiles: cdktf.stringToTerraform(this._apnProfiles),
      band: cdktf.listMapper(cdktf.numberToTerraform, false)(this._band),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      modem_init: cdktf.stringToTerraform(this._modemInit),
      mtu: cdktf.stringToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      network_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkMode),
      nr_band: cdktf.listMapper(cdktf.numberToTerraform, false)(this._nrBand),
      operator: cdktf.numberToTerraform(this._operator),
      pin: cdktf.stringToTerraform(this._pin),
      sms_protocol: cdktf.stringToTerraform(this._smsProtocol),
      sms_read: cdktf.booleanToTerraform(this._smsRead),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_roaming: {
        value: cdktf.booleanToHclTerraform(this._allowRoaming),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      apn_profiles: {
        value: cdktf.stringToHclTerraform(this._apnProfiles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      band: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._band),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modem_init: {
        value: cdktf.stringToHclTerraform(this._modemInit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
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
      network_mode: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkMode),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      nr_band: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._nrBand),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      operator: {
        value: cdktf.numberToHclTerraform(this._operator),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pin: {
        value: cdktf.stringToHclTerraform(this._pin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_protocol: {
        value: cdktf.stringToHclTerraform(this._smsProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_read: {
        value: cdktf.booleanToHclTerraform(this._smsRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
