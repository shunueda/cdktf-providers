// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkClientSplashAuthorizationStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#client_id NetworkClientSplashAuthorizationStatus#client_id}
  */
  readonly clientId: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#network_id NetworkClientSplashAuthorizationStatus#network_id}
  */
  readonly networkId: string;
  /**
  * New authorization status for the SSID (true, false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#ssids_0_is_authorized NetworkClientSplashAuthorizationStatus#ssids_0_is_authorized}
  */
  readonly ssids0IsAuthorized?: boolean | cdktf.IResolvable;
  /**
  * New authorization status for the SSID (true, false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#ssids_10_is_authorized NetworkClientSplashAuthorizationStatus#ssids_10_is_authorized}
  */
  readonly ssids10IsAuthorized?: boolean | cdktf.IResolvable;
  /**
  * New authorization status for the SSID (true, false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#ssids_11_is_authorized NetworkClientSplashAuthorizationStatus#ssids_11_is_authorized}
  */
  readonly ssids11IsAuthorized?: boolean | cdktf.IResolvable;
  /**
  * New authorization status for the SSID (true, false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#ssids_12_is_authorized NetworkClientSplashAuthorizationStatus#ssids_12_is_authorized}
  */
  readonly ssids12IsAuthorized?: boolean | cdktf.IResolvable;
  /**
  * New authorization status for the SSID (true, false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#ssids_13_is_authorized NetworkClientSplashAuthorizationStatus#ssids_13_is_authorized}
  */
  readonly ssids13IsAuthorized?: boolean | cdktf.IResolvable;
  /**
  * New authorization status for the SSID (true, false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#ssids_14_is_authorized NetworkClientSplashAuthorizationStatus#ssids_14_is_authorized}
  */
  readonly ssids14IsAuthorized?: boolean | cdktf.IResolvable;
  /**
  * New authorization status for the SSID (true, false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#ssids_1_is_authorized NetworkClientSplashAuthorizationStatus#ssids_1_is_authorized}
  */
  readonly ssids1IsAuthorized?: boolean | cdktf.IResolvable;
  /**
  * New authorization status for the SSID (true, false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#ssids_2_is_authorized NetworkClientSplashAuthorizationStatus#ssids_2_is_authorized}
  */
  readonly ssids2IsAuthorized?: boolean | cdktf.IResolvable;
  /**
  * New authorization status for the SSID (true, false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#ssids_3_is_authorized NetworkClientSplashAuthorizationStatus#ssids_3_is_authorized}
  */
  readonly ssids3IsAuthorized?: boolean | cdktf.IResolvable;
  /**
  * New authorization status for the SSID (true, false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#ssids_4_is_authorized NetworkClientSplashAuthorizationStatus#ssids_4_is_authorized}
  */
  readonly ssids4IsAuthorized?: boolean | cdktf.IResolvable;
  /**
  * New authorization status for the SSID (true, false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#ssids_5_is_authorized NetworkClientSplashAuthorizationStatus#ssids_5_is_authorized}
  */
  readonly ssids5IsAuthorized?: boolean | cdktf.IResolvable;
  /**
  * New authorization status for the SSID (true, false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#ssids_6_is_authorized NetworkClientSplashAuthorizationStatus#ssids_6_is_authorized}
  */
  readonly ssids6IsAuthorized?: boolean | cdktf.IResolvable;
  /**
  * New authorization status for the SSID (true, false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#ssids_7_is_authorized NetworkClientSplashAuthorizationStatus#ssids_7_is_authorized}
  */
  readonly ssids7IsAuthorized?: boolean | cdktf.IResolvable;
  /**
  * New authorization status for the SSID (true, false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#ssids_8_is_authorized NetworkClientSplashAuthorizationStatus#ssids_8_is_authorized}
  */
  readonly ssids8IsAuthorized?: boolean | cdktf.IResolvable;
  /**
  * New authorization status for the SSID (true, false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#ssids_9_is_authorized NetworkClientSplashAuthorizationStatus#ssids_9_is_authorized}
  */
  readonly ssids9IsAuthorized?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status meraki_network_client_splash_authorization_status}
*/
export class NetworkClientSplashAuthorizationStatus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_client_splash_authorization_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkClientSplashAuthorizationStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkClientSplashAuthorizationStatus to import
  * @param importFromId The id of the existing NetworkClientSplashAuthorizationStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkClientSplashAuthorizationStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_client_splash_authorization_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_client_splash_authorization_status meraki_network_client_splash_authorization_status} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkClientSplashAuthorizationStatusConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkClientSplashAuthorizationStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_client_splash_authorization_status',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._networkId = config.networkId;
    this._ssids0IsAuthorized = config.ssids0IsAuthorized;
    this._ssids10IsAuthorized = config.ssids10IsAuthorized;
    this._ssids11IsAuthorized = config.ssids11IsAuthorized;
    this._ssids12IsAuthorized = config.ssids12IsAuthorized;
    this._ssids13IsAuthorized = config.ssids13IsAuthorized;
    this._ssids14IsAuthorized = config.ssids14IsAuthorized;
    this._ssids1IsAuthorized = config.ssids1IsAuthorized;
    this._ssids2IsAuthorized = config.ssids2IsAuthorized;
    this._ssids3IsAuthorized = config.ssids3IsAuthorized;
    this._ssids4IsAuthorized = config.ssids4IsAuthorized;
    this._ssids5IsAuthorized = config.ssids5IsAuthorized;
    this._ssids6IsAuthorized = config.ssids6IsAuthorized;
    this._ssids7IsAuthorized = config.ssids7IsAuthorized;
    this._ssids8IsAuthorized = config.ssids8IsAuthorized;
    this._ssids9IsAuthorized = config.ssids9IsAuthorized;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // ssids_0_is_authorized - computed: false, optional: true, required: false
  private _ssids0IsAuthorized?: boolean | cdktf.IResolvable; 
  public get ssids0IsAuthorized() {
    return this.getBooleanAttribute('ssids_0_is_authorized');
  }
  public set ssids0IsAuthorized(value: boolean | cdktf.IResolvable) {
    this._ssids0IsAuthorized = value;
  }
  public resetSsids0IsAuthorized() {
    this._ssids0IsAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssids0IsAuthorizedInput() {
    return this._ssids0IsAuthorized;
  }

  // ssids_10_is_authorized - computed: false, optional: true, required: false
  private _ssids10IsAuthorized?: boolean | cdktf.IResolvable; 
  public get ssids10IsAuthorized() {
    return this.getBooleanAttribute('ssids_10_is_authorized');
  }
  public set ssids10IsAuthorized(value: boolean | cdktf.IResolvable) {
    this._ssids10IsAuthorized = value;
  }
  public resetSsids10IsAuthorized() {
    this._ssids10IsAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssids10IsAuthorizedInput() {
    return this._ssids10IsAuthorized;
  }

  // ssids_11_is_authorized - computed: false, optional: true, required: false
  private _ssids11IsAuthorized?: boolean | cdktf.IResolvable; 
  public get ssids11IsAuthorized() {
    return this.getBooleanAttribute('ssids_11_is_authorized');
  }
  public set ssids11IsAuthorized(value: boolean | cdktf.IResolvable) {
    this._ssids11IsAuthorized = value;
  }
  public resetSsids11IsAuthorized() {
    this._ssids11IsAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssids11IsAuthorizedInput() {
    return this._ssids11IsAuthorized;
  }

  // ssids_12_is_authorized - computed: false, optional: true, required: false
  private _ssids12IsAuthorized?: boolean | cdktf.IResolvable; 
  public get ssids12IsAuthorized() {
    return this.getBooleanAttribute('ssids_12_is_authorized');
  }
  public set ssids12IsAuthorized(value: boolean | cdktf.IResolvable) {
    this._ssids12IsAuthorized = value;
  }
  public resetSsids12IsAuthorized() {
    this._ssids12IsAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssids12IsAuthorizedInput() {
    return this._ssids12IsAuthorized;
  }

  // ssids_13_is_authorized - computed: false, optional: true, required: false
  private _ssids13IsAuthorized?: boolean | cdktf.IResolvable; 
  public get ssids13IsAuthorized() {
    return this.getBooleanAttribute('ssids_13_is_authorized');
  }
  public set ssids13IsAuthorized(value: boolean | cdktf.IResolvable) {
    this._ssids13IsAuthorized = value;
  }
  public resetSsids13IsAuthorized() {
    this._ssids13IsAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssids13IsAuthorizedInput() {
    return this._ssids13IsAuthorized;
  }

  // ssids_14_is_authorized - computed: false, optional: true, required: false
  private _ssids14IsAuthorized?: boolean | cdktf.IResolvable; 
  public get ssids14IsAuthorized() {
    return this.getBooleanAttribute('ssids_14_is_authorized');
  }
  public set ssids14IsAuthorized(value: boolean | cdktf.IResolvable) {
    this._ssids14IsAuthorized = value;
  }
  public resetSsids14IsAuthorized() {
    this._ssids14IsAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssids14IsAuthorizedInput() {
    return this._ssids14IsAuthorized;
  }

  // ssids_1_is_authorized - computed: false, optional: true, required: false
  private _ssids1IsAuthorized?: boolean | cdktf.IResolvable; 
  public get ssids1IsAuthorized() {
    return this.getBooleanAttribute('ssids_1_is_authorized');
  }
  public set ssids1IsAuthorized(value: boolean | cdktf.IResolvable) {
    this._ssids1IsAuthorized = value;
  }
  public resetSsids1IsAuthorized() {
    this._ssids1IsAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssids1IsAuthorizedInput() {
    return this._ssids1IsAuthorized;
  }

  // ssids_2_is_authorized - computed: false, optional: true, required: false
  private _ssids2IsAuthorized?: boolean | cdktf.IResolvable; 
  public get ssids2IsAuthorized() {
    return this.getBooleanAttribute('ssids_2_is_authorized');
  }
  public set ssids2IsAuthorized(value: boolean | cdktf.IResolvable) {
    this._ssids2IsAuthorized = value;
  }
  public resetSsids2IsAuthorized() {
    this._ssids2IsAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssids2IsAuthorizedInput() {
    return this._ssids2IsAuthorized;
  }

  // ssids_3_is_authorized - computed: false, optional: true, required: false
  private _ssids3IsAuthorized?: boolean | cdktf.IResolvable; 
  public get ssids3IsAuthorized() {
    return this.getBooleanAttribute('ssids_3_is_authorized');
  }
  public set ssids3IsAuthorized(value: boolean | cdktf.IResolvable) {
    this._ssids3IsAuthorized = value;
  }
  public resetSsids3IsAuthorized() {
    this._ssids3IsAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssids3IsAuthorizedInput() {
    return this._ssids3IsAuthorized;
  }

  // ssids_4_is_authorized - computed: false, optional: true, required: false
  private _ssids4IsAuthorized?: boolean | cdktf.IResolvable; 
  public get ssids4IsAuthorized() {
    return this.getBooleanAttribute('ssids_4_is_authorized');
  }
  public set ssids4IsAuthorized(value: boolean | cdktf.IResolvable) {
    this._ssids4IsAuthorized = value;
  }
  public resetSsids4IsAuthorized() {
    this._ssids4IsAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssids4IsAuthorizedInput() {
    return this._ssids4IsAuthorized;
  }

  // ssids_5_is_authorized - computed: false, optional: true, required: false
  private _ssids5IsAuthorized?: boolean | cdktf.IResolvable; 
  public get ssids5IsAuthorized() {
    return this.getBooleanAttribute('ssids_5_is_authorized');
  }
  public set ssids5IsAuthorized(value: boolean | cdktf.IResolvable) {
    this._ssids5IsAuthorized = value;
  }
  public resetSsids5IsAuthorized() {
    this._ssids5IsAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssids5IsAuthorizedInput() {
    return this._ssids5IsAuthorized;
  }

  // ssids_6_is_authorized - computed: false, optional: true, required: false
  private _ssids6IsAuthorized?: boolean | cdktf.IResolvable; 
  public get ssids6IsAuthorized() {
    return this.getBooleanAttribute('ssids_6_is_authorized');
  }
  public set ssids6IsAuthorized(value: boolean | cdktf.IResolvable) {
    this._ssids6IsAuthorized = value;
  }
  public resetSsids6IsAuthorized() {
    this._ssids6IsAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssids6IsAuthorizedInput() {
    return this._ssids6IsAuthorized;
  }

  // ssids_7_is_authorized - computed: false, optional: true, required: false
  private _ssids7IsAuthorized?: boolean | cdktf.IResolvable; 
  public get ssids7IsAuthorized() {
    return this.getBooleanAttribute('ssids_7_is_authorized');
  }
  public set ssids7IsAuthorized(value: boolean | cdktf.IResolvable) {
    this._ssids7IsAuthorized = value;
  }
  public resetSsids7IsAuthorized() {
    this._ssids7IsAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssids7IsAuthorizedInput() {
    return this._ssids7IsAuthorized;
  }

  // ssids_8_is_authorized - computed: false, optional: true, required: false
  private _ssids8IsAuthorized?: boolean | cdktf.IResolvable; 
  public get ssids8IsAuthorized() {
    return this.getBooleanAttribute('ssids_8_is_authorized');
  }
  public set ssids8IsAuthorized(value: boolean | cdktf.IResolvable) {
    this._ssids8IsAuthorized = value;
  }
  public resetSsids8IsAuthorized() {
    this._ssids8IsAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssids8IsAuthorizedInput() {
    return this._ssids8IsAuthorized;
  }

  // ssids_9_is_authorized - computed: false, optional: true, required: false
  private _ssids9IsAuthorized?: boolean | cdktf.IResolvable; 
  public get ssids9IsAuthorized() {
    return this.getBooleanAttribute('ssids_9_is_authorized');
  }
  public set ssids9IsAuthorized(value: boolean | cdktf.IResolvable) {
    this._ssids9IsAuthorized = value;
  }
  public resetSsids9IsAuthorized() {
    this._ssids9IsAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssids9IsAuthorizedInput() {
    return this._ssids9IsAuthorized;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      network_id: cdktf.stringToTerraform(this._networkId),
      ssids_0_is_authorized: cdktf.booleanToTerraform(this._ssids0IsAuthorized),
      ssids_10_is_authorized: cdktf.booleanToTerraform(this._ssids10IsAuthorized),
      ssids_11_is_authorized: cdktf.booleanToTerraform(this._ssids11IsAuthorized),
      ssids_12_is_authorized: cdktf.booleanToTerraform(this._ssids12IsAuthorized),
      ssids_13_is_authorized: cdktf.booleanToTerraform(this._ssids13IsAuthorized),
      ssids_14_is_authorized: cdktf.booleanToTerraform(this._ssids14IsAuthorized),
      ssids_1_is_authorized: cdktf.booleanToTerraform(this._ssids1IsAuthorized),
      ssids_2_is_authorized: cdktf.booleanToTerraform(this._ssids2IsAuthorized),
      ssids_3_is_authorized: cdktf.booleanToTerraform(this._ssids3IsAuthorized),
      ssids_4_is_authorized: cdktf.booleanToTerraform(this._ssids4IsAuthorized),
      ssids_5_is_authorized: cdktf.booleanToTerraform(this._ssids5IsAuthorized),
      ssids_6_is_authorized: cdktf.booleanToTerraform(this._ssids6IsAuthorized),
      ssids_7_is_authorized: cdktf.booleanToTerraform(this._ssids7IsAuthorized),
      ssids_8_is_authorized: cdktf.booleanToTerraform(this._ssids8IsAuthorized),
      ssids_9_is_authorized: cdktf.booleanToTerraform(this._ssids9IsAuthorized),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssids_0_is_authorized: {
        value: cdktf.booleanToHclTerraform(this._ssids0IsAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssids_10_is_authorized: {
        value: cdktf.booleanToHclTerraform(this._ssids10IsAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssids_11_is_authorized: {
        value: cdktf.booleanToHclTerraform(this._ssids11IsAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssids_12_is_authorized: {
        value: cdktf.booleanToHclTerraform(this._ssids12IsAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssids_13_is_authorized: {
        value: cdktf.booleanToHclTerraform(this._ssids13IsAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssids_14_is_authorized: {
        value: cdktf.booleanToHclTerraform(this._ssids14IsAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssids_1_is_authorized: {
        value: cdktf.booleanToHclTerraform(this._ssids1IsAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssids_2_is_authorized: {
        value: cdktf.booleanToHclTerraform(this._ssids2IsAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssids_3_is_authorized: {
        value: cdktf.booleanToHclTerraform(this._ssids3IsAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssids_4_is_authorized: {
        value: cdktf.booleanToHclTerraform(this._ssids4IsAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssids_5_is_authorized: {
        value: cdktf.booleanToHclTerraform(this._ssids5IsAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssids_6_is_authorized: {
        value: cdktf.booleanToHclTerraform(this._ssids6IsAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssids_7_is_authorized: {
        value: cdktf.booleanToHclTerraform(this._ssids7IsAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssids_8_is_authorized: {
        value: cdktf.booleanToHclTerraform(this._ssids8IsAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssids_9_is_authorized: {
        value: cdktf.booleanToHclTerraform(this._ssids9IsAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
