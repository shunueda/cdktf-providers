// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/data-sources/wifi_easy_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRouterosWifiEasyConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * (WPA2-EAP only) Anonymous identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/data-sources/wifi_easy_connect#eap_anonymous DataRouterosWifiEasyConnect#eap_anonymous}
  */
  readonly eapAnonymous?: boolean | cdktf.IResolvable;
  /**
  * (WPA2-EAP only) Identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/data-sources/wifi_easy_connect#eap_identity DataRouterosWifiEasyConnect#eap_identity}
  */
  readonly eapIdentity?: string;
  /**
  * (WPA2-EAP only) EAP method, like TTLS or PWD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/data-sources/wifi_easy_connect#eap_method DataRouterosWifiEasyConnect#eap_method}
  */
  readonly eapMethod?: string;
  /**
  * (WPA2-EAP only) Phase 2 method, like `MSCHAPV2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/data-sources/wifi_easy_connect#eap_phase2 DataRouterosWifiEasyConnect#eap_phase2}
  */
  readonly eapPhase2?: string;
  /**
  * True if the network SSID is hidden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/data-sources/wifi_easy_connect#hidden DataRouterosWifiEasyConnect#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/data-sources/wifi_easy_connect#id DataRouterosWifiEasyConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password, ignored if T is nopass (in which case it may be omitted). Enclose in double quotes if it is an ASCII name, but could be interpreted as hex (i.e. "ABCD").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/data-sources/wifi_easy_connect#password DataRouterosWifiEasyConnect#password}
  */
  readonly password: string;
  /**
  * Network SSID. Required. Enclose in double quotes if it is an ASCII name, but could be interpreted as hex (i.e. "ABCD").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/data-sources/wifi_easy_connect#ssid DataRouterosWifiEasyConnect#ssid}
  */
  readonly ssid: string;
  /**
  * Authentication type; can be WEP or WPA or WPA2-EAP, or nopass for no password. Or, omit for no password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/data-sources/wifi_easy_connect#type DataRouterosWifiEasyConnect#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/data-sources/wifi_easy_connect routeros_wifi_easy_connect}
*/
export class DataRouterosWifiEasyConnect extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_wifi_easy_connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRouterosWifiEasyConnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRouterosWifiEasyConnect to import
  * @param importFromId The id of the existing DataRouterosWifiEasyConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/data-sources/wifi_easy_connect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRouterosWifiEasyConnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_wifi_easy_connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/data-sources/wifi_easy_connect routeros_wifi_easy_connect} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRouterosWifiEasyConnectConfig
  */
  public constructor(scope: Construct, id: string, config: DataRouterosWifiEasyConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_wifi_easy_connect',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eapAnonymous = config.eapAnonymous;
    this._eapIdentity = config.eapIdentity;
    this._eapMethod = config.eapMethod;
    this._eapPhase2 = config.eapPhase2;
    this._hidden = config.hidden;
    this._id = config.id;
    this._password = config.password;
    this._ssid = config.ssid;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eap_anonymous - computed: false, optional: true, required: false
  private _eapAnonymous?: boolean | cdktf.IResolvable; 
  public get eapAnonymous() {
    return this.getBooleanAttribute('eap_anonymous');
  }
  public set eapAnonymous(value: boolean | cdktf.IResolvable) {
    this._eapAnonymous = value;
  }
  public resetEapAnonymous() {
    this._eapAnonymous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapAnonymousInput() {
    return this._eapAnonymous;
  }

  // eap_identity - computed: false, optional: true, required: false
  private _eapIdentity?: string; 
  public get eapIdentity() {
    return this.getStringAttribute('eap_identity');
  }
  public set eapIdentity(value: string) {
    this._eapIdentity = value;
  }
  public resetEapIdentity() {
    this._eapIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapIdentityInput() {
    return this._eapIdentity;
  }

  // eap_method - computed: false, optional: true, required: false
  private _eapMethod?: string; 
  public get eapMethod() {
    return this.getStringAttribute('eap_method');
  }
  public set eapMethod(value: string) {
    this._eapMethod = value;
  }
  public resetEapMethod() {
    this._eapMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapMethodInput() {
    return this._eapMethod;
  }

  // eap_phase2 - computed: false, optional: true, required: false
  private _eapPhase2?: string; 
  public get eapPhase2() {
    return this.getStringAttribute('eap_phase2');
  }
  public set eapPhase2(value: string) {
    this._eapPhase2 = value;
  }
  public resetEapPhase2() {
    this._eapPhase2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapPhase2Input() {
    return this._eapPhase2;
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // qr_code - computed: true, optional: false, required: false
  public get qrCode() {
    return this.getStringAttribute('qr_code');
  }

  // ssid - computed: false, optional: false, required: true
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      eap_anonymous: cdktf.booleanToTerraform(this._eapAnonymous),
      eap_identity: cdktf.stringToTerraform(this._eapIdentity),
      eap_method: cdktf.stringToTerraform(this._eapMethod),
      eap_phase2: cdktf.stringToTerraform(this._eapPhase2),
      hidden: cdktf.booleanToTerraform(this._hidden),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      ssid: cdktf.stringToTerraform(this._ssid),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      eap_anonymous: {
        value: cdktf.booleanToHclTerraform(this._eapAnonymous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_identity: {
        value: cdktf.stringToHclTerraform(this._eapIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_method: {
        value: cdktf.stringToHclTerraform(this._eapMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_phase2: {
        value: cdktf.stringToHclTerraform(this._eapPhase2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hidden: {
        value: cdktf.booleanToHclTerraform(this._hidden),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid: {
        value: cdktf.stringToHclTerraform(this._ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
