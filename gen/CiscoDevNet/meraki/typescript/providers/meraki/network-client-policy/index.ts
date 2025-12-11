// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_client_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkClientPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Client ID. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_client_policy#client_id NetworkClientPolicy#client_id}
  */
  readonly clientId: string;
  /**
  * The policy to assign. Can be `Whitelisted`, `Blocked`, `Normal` or `Group policy`. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_client_policy#device_policy NetworkClientPolicy#device_policy}
  */
  readonly devicePolicy: string;
  /**
  * [Optional] If `devicePolicy` is set to `Group policy` this param is used to specify the group policy ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_client_policy#group_policy_id NetworkClientPolicy#group_policy_id}
  */
  readonly groupPolicyId?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_client_policy#network_id NetworkClientPolicy#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_client_policy meraki_network_client_policy}
*/
export class NetworkClientPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_client_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkClientPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkClientPolicy to import
  * @param importFromId The id of the existing NetworkClientPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_client_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkClientPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_client_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_client_policy meraki_network_client_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkClientPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkClientPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_client_policy',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
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
    this._devicePolicy = config.devicePolicy;
    this._groupPolicyId = config.groupPolicyId;
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

  // device_policy - computed: false, optional: false, required: true
  private _devicePolicy?: string; 
  public get devicePolicy() {
    return this.getStringAttribute('device_policy');
  }
  public set devicePolicy(value: string) {
    this._devicePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePolicyInput() {
    return this._devicePolicy;
  }

  // group_policy_id - computed: false, optional: true, required: false
  private _groupPolicyId?: string; 
  public get groupPolicyId() {
    return this.getStringAttribute('group_policy_id');
  }
  public set groupPolicyId(value: string) {
    this._groupPolicyId = value;
  }
  public resetGroupPolicyId() {
    this._groupPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPolicyIdInput() {
    return this._groupPolicyId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      device_policy: cdktf.stringToTerraform(this._devicePolicy),
      group_policy_id: cdktf.stringToTerraform(this._groupPolicyId),
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
      device_policy: {
        value: cdktf.stringToHclTerraform(this._devicePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_policy_id: {
        value: cdktf.stringToHclTerraform(this._groupPolicyId),
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
