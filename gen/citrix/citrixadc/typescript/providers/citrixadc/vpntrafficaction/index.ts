// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpntrafficactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction#apptimeout Vpntrafficaction#apptimeout}
  */
  readonly apptimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction#formssoaction Vpntrafficaction#formssoaction}
  */
  readonly formssoaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction#fta Vpntrafficaction#fta}
  */
  readonly fta?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction#hdx Vpntrafficaction#hdx}
  */
  readonly hdx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction#id Vpntrafficaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction#kcdaccount Vpntrafficaction#kcdaccount}
  */
  readonly kcdaccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction#name Vpntrafficaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction#passwdexpression Vpntrafficaction#passwdexpression}
  */
  readonly passwdexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction#proxy Vpntrafficaction#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction#qual Vpntrafficaction#qual}
  */
  readonly qual: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction#samlssoprofile Vpntrafficaction#samlssoprofile}
  */
  readonly samlssoprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction#sso Vpntrafficaction#sso}
  */
  readonly sso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction#userexpression Vpntrafficaction#userexpression}
  */
  readonly userexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction#wanscaler Vpntrafficaction#wanscaler}
  */
  readonly wanscaler?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction citrixadc_vpntrafficaction}
*/
export class Vpntrafficaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpntrafficaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpntrafficaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpntrafficaction to import
  * @param importFromId The id of the existing Vpntrafficaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpntrafficaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpntrafficaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpntrafficaction citrixadc_vpntrafficaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpntrafficactionConfig
  */
  public constructor(scope: Construct, id: string, config: VpntrafficactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpntrafficaction',
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
    this._apptimeout = config.apptimeout;
    this._formssoaction = config.formssoaction;
    this._fta = config.fta;
    this._hdx = config.hdx;
    this._id = config.id;
    this._kcdaccount = config.kcdaccount;
    this._name = config.name;
    this._passwdexpression = config.passwdexpression;
    this._proxy = config.proxy;
    this._qual = config.qual;
    this._samlssoprofile = config.samlssoprofile;
    this._sso = config.sso;
    this._userexpression = config.userexpression;
    this._wanscaler = config.wanscaler;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apptimeout - computed: true, optional: true, required: false
  private _apptimeout?: number; 
  public get apptimeout() {
    return this.getNumberAttribute('apptimeout');
  }
  public set apptimeout(value: number) {
    this._apptimeout = value;
  }
  public resetApptimeout() {
    this._apptimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apptimeoutInput() {
    return this._apptimeout;
  }

  // formssoaction - computed: true, optional: true, required: false
  private _formssoaction?: string; 
  public get formssoaction() {
    return this.getStringAttribute('formssoaction');
  }
  public set formssoaction(value: string) {
    this._formssoaction = value;
  }
  public resetFormssoaction() {
    this._formssoaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formssoactionInput() {
    return this._formssoaction;
  }

  // fta - computed: true, optional: true, required: false
  private _fta?: string; 
  public get fta() {
    return this.getStringAttribute('fta');
  }
  public set fta(value: string) {
    this._fta = value;
  }
  public resetFta() {
    this._fta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftaInput() {
    return this._fta;
  }

  // hdx - computed: true, optional: true, required: false
  private _hdx?: string; 
  public get hdx() {
    return this.getStringAttribute('hdx');
  }
  public set hdx(value: string) {
    this._hdx = value;
  }
  public resetHdx() {
    this._hdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdxInput() {
    return this._hdx;
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

  // passwdexpression - computed: true, optional: true, required: false
  private _passwdexpression?: string; 
  public get passwdexpression() {
    return this.getStringAttribute('passwdexpression');
  }
  public set passwdexpression(value: string) {
    this._passwdexpression = value;
  }
  public resetPasswdexpression() {
    this._passwdexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdexpressionInput() {
    return this._passwdexpression;
  }

  // proxy - computed: true, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // qual - computed: false, optional: false, required: true
  private _qual?: string; 
  public get qual() {
    return this.getStringAttribute('qual');
  }
  public set qual(value: string) {
    this._qual = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualInput() {
    return this._qual;
  }

  // samlssoprofile - computed: true, optional: true, required: false
  private _samlssoprofile?: string; 
  public get samlssoprofile() {
    return this.getStringAttribute('samlssoprofile');
  }
  public set samlssoprofile(value: string) {
    this._samlssoprofile = value;
  }
  public resetSamlssoprofile() {
    this._samlssoprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlssoprofileInput() {
    return this._samlssoprofile;
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

  // userexpression - computed: true, optional: true, required: false
  private _userexpression?: string; 
  public get userexpression() {
    return this.getStringAttribute('userexpression');
  }
  public set userexpression(value: string) {
    this._userexpression = value;
  }
  public resetUserexpression() {
    this._userexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userexpressionInput() {
    return this._userexpression;
  }

  // wanscaler - computed: true, optional: true, required: false
  private _wanscaler?: string; 
  public get wanscaler() {
    return this.getStringAttribute('wanscaler');
  }
  public set wanscaler(value: string) {
    this._wanscaler = value;
  }
  public resetWanscaler() {
    this._wanscaler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanscalerInput() {
    return this._wanscaler;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apptimeout: cdktf.numberToTerraform(this._apptimeout),
      formssoaction: cdktf.stringToTerraform(this._formssoaction),
      fta: cdktf.stringToTerraform(this._fta),
      hdx: cdktf.stringToTerraform(this._hdx),
      id: cdktf.stringToTerraform(this._id),
      kcdaccount: cdktf.stringToTerraform(this._kcdaccount),
      name: cdktf.stringToTerraform(this._name),
      passwdexpression: cdktf.stringToTerraform(this._passwdexpression),
      proxy: cdktf.stringToTerraform(this._proxy),
      qual: cdktf.stringToTerraform(this._qual),
      samlssoprofile: cdktf.stringToTerraform(this._samlssoprofile),
      sso: cdktf.stringToTerraform(this._sso),
      userexpression: cdktf.stringToTerraform(this._userexpression),
      wanscaler: cdktf.stringToTerraform(this._wanscaler),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apptimeout: {
        value: cdktf.numberToHclTerraform(this._apptimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      formssoaction: {
        value: cdktf.stringToHclTerraform(this._formssoaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fta: {
        value: cdktf.stringToHclTerraform(this._fta),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hdx: {
        value: cdktf.stringToHclTerraform(this._hdx),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwdexpression: {
        value: cdktf.stringToHclTerraform(this._passwdexpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qual: {
        value: cdktf.stringToHclTerraform(this._qual),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samlssoprofile: {
        value: cdktf.stringToHclTerraform(this._samlssoprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso: {
        value: cdktf.stringToHclTerraform(this._sso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userexpression: {
        value: cdktf.stringToHclTerraform(this._userexpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wanscaler: {
        value: cdktf.stringToHclTerraform(this._wanscaler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
