// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_client_splash_authorization_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiNetworkClientSplashAuthorizationStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_client_splash_authorization_status#client_id DataMerakiNetworkClientSplashAuthorizationStatus#client_id}
  */
  readonly clientId: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_client_splash_authorization_status#network_id DataMerakiNetworkClientSplashAuthorizationStatus#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_client_splash_authorization_status meraki_network_client_splash_authorization_status}
*/
export class DataMerakiNetworkClientSplashAuthorizationStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_client_splash_authorization_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiNetworkClientSplashAuthorizationStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiNetworkClientSplashAuthorizationStatus to import
  * @param importFromId The id of the existing DataMerakiNetworkClientSplashAuthorizationStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_client_splash_authorization_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiNetworkClientSplashAuthorizationStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_client_splash_authorization_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_client_splash_authorization_status meraki_network_client_splash_authorization_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiNetworkClientSplashAuthorizationStatusConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiNetworkClientSplashAuthorizationStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_client_splash_authorization_status',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
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

  // ssids_0_is_authorized - computed: true, optional: false, required: false
  public get ssids0IsAuthorized() {
    return this.getBooleanAttribute('ssids_0_is_authorized');
  }

  // ssids_10_is_authorized - computed: true, optional: false, required: false
  public get ssids10IsAuthorized() {
    return this.getBooleanAttribute('ssids_10_is_authorized');
  }

  // ssids_11_is_authorized - computed: true, optional: false, required: false
  public get ssids11IsAuthorized() {
    return this.getBooleanAttribute('ssids_11_is_authorized');
  }

  // ssids_12_is_authorized - computed: true, optional: false, required: false
  public get ssids12IsAuthorized() {
    return this.getBooleanAttribute('ssids_12_is_authorized');
  }

  // ssids_13_is_authorized - computed: true, optional: false, required: false
  public get ssids13IsAuthorized() {
    return this.getBooleanAttribute('ssids_13_is_authorized');
  }

  // ssids_14_is_authorized - computed: true, optional: false, required: false
  public get ssids14IsAuthorized() {
    return this.getBooleanAttribute('ssids_14_is_authorized');
  }

  // ssids_1_is_authorized - computed: true, optional: false, required: false
  public get ssids1IsAuthorized() {
    return this.getBooleanAttribute('ssids_1_is_authorized');
  }

  // ssids_2_is_authorized - computed: true, optional: false, required: false
  public get ssids2IsAuthorized() {
    return this.getBooleanAttribute('ssids_2_is_authorized');
  }

  // ssids_3_is_authorized - computed: true, optional: false, required: false
  public get ssids3IsAuthorized() {
    return this.getBooleanAttribute('ssids_3_is_authorized');
  }

  // ssids_4_is_authorized - computed: true, optional: false, required: false
  public get ssids4IsAuthorized() {
    return this.getBooleanAttribute('ssids_4_is_authorized');
  }

  // ssids_5_is_authorized - computed: true, optional: false, required: false
  public get ssids5IsAuthorized() {
    return this.getBooleanAttribute('ssids_5_is_authorized');
  }

  // ssids_6_is_authorized - computed: true, optional: false, required: false
  public get ssids6IsAuthorized() {
    return this.getBooleanAttribute('ssids_6_is_authorized');
  }

  // ssids_7_is_authorized - computed: true, optional: false, required: false
  public get ssids7IsAuthorized() {
    return this.getBooleanAttribute('ssids_7_is_authorized');
  }

  // ssids_8_is_authorized - computed: true, optional: false, required: false
  public get ssids8IsAuthorized() {
    return this.getBooleanAttribute('ssids_8_is_authorized');
  }

  // ssids_9_is_authorized - computed: true, optional: false, required: false
  public get ssids9IsAuthorized() {
    return this.getBooleanAttribute('ssids_9_is_authorized');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      network_id: cdktf.stringToTerraform(this._networkId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
