// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_username
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnClientUsernameConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ACL Profile of the Client Username.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"default"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_username#acl_profile_name SolacebrokerMsgVpnClientUsername#acl_profile_name}
  */
  readonly aclProfileName?: string;
  /**
  * The Client Profile of the Client Username.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"default"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_username#client_profile_name SolacebrokerMsgVpnClientUsername#client_profile_name}
  */
  readonly clientProfileName?: string;
  /**
  * The name of the Client Username.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_username#client_username SolacebrokerMsgVpnClientUsername#client_username}
  */
  readonly clientUsername: string;
  /**
  * Enable or disable the Client Username. When disabled, all clients currently connected as the Client Username are disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_username#enabled SolacebrokerMsgVpnClientUsername#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable guaranteed endpoint permission override for the Client Username. When enabled all guaranteed endpoints may be accessed, modified or deleted with the same permission as the owner.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_username#guaranteed_endpoint_permission_override_enabled SolacebrokerMsgVpnClientUsername#guaranteed_endpoint_permission_override_enabled}
  */
  readonly guaranteedEndpointPermissionOverrideEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_username#msg_vpn_name SolacebrokerMsgVpnClientUsername#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The password for the Client Username.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_username#password SolacebrokerMsgVpnClientUsername#password}
  */
  readonly password?: string;
  /**
  * Enable or disable the subscription management capability of the Client Username. This is the ability to manage subscriptions on behalf of other Client Usernames.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_username#subscription_manager_enabled SolacebrokerMsgVpnClientUsername#subscription_manager_enabled}
  */
  readonly subscriptionManagerEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_username solacebroker_msg_vpn_client_username}
*/
export class SolacebrokerMsgVpnClientUsername extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_client_username";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnClientUsername resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnClientUsername to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnClientUsername that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_username#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnClientUsername to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_client_username", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_username solacebroker_msg_vpn_client_username} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnClientUsernameConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnClientUsernameConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_client_username',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclProfileName = config.aclProfileName;
    this._clientProfileName = config.clientProfileName;
    this._clientUsername = config.clientUsername;
    this._enabled = config.enabled;
    this._guaranteedEndpointPermissionOverrideEnabled = config.guaranteedEndpointPermissionOverrideEnabled;
    this._msgVpnName = config.msgVpnName;
    this._password = config.password;
    this._subscriptionManagerEnabled = config.subscriptionManagerEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_profile_name - computed: false, optional: true, required: false
  private _aclProfileName?: string; 
  public get aclProfileName() {
    return this.getStringAttribute('acl_profile_name');
  }
  public set aclProfileName(value: string) {
    this._aclProfileName = value;
  }
  public resetAclProfileName() {
    this._aclProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclProfileNameInput() {
    return this._aclProfileName;
  }

  // client_profile_name - computed: false, optional: true, required: false
  private _clientProfileName?: string; 
  public get clientProfileName() {
    return this.getStringAttribute('client_profile_name');
  }
  public set clientProfileName(value: string) {
    this._clientProfileName = value;
  }
  public resetClientProfileName() {
    this._clientProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileNameInput() {
    return this._clientProfileName;
  }

  // client_username - computed: false, optional: false, required: true
  private _clientUsername?: string; 
  public get clientUsername() {
    return this.getStringAttribute('client_username');
  }
  public set clientUsername(value: string) {
    this._clientUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientUsernameInput() {
    return this._clientUsername;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // guaranteed_endpoint_permission_override_enabled - computed: false, optional: true, required: false
  private _guaranteedEndpointPermissionOverrideEnabled?: boolean | cdktf.IResolvable; 
  public get guaranteedEndpointPermissionOverrideEnabled() {
    return this.getBooleanAttribute('guaranteed_endpoint_permission_override_enabled');
  }
  public set guaranteedEndpointPermissionOverrideEnabled(value: boolean | cdktf.IResolvable) {
    this._guaranteedEndpointPermissionOverrideEnabled = value;
  }
  public resetGuaranteedEndpointPermissionOverrideEnabled() {
    this._guaranteedEndpointPermissionOverrideEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedEndpointPermissionOverrideEnabledInput() {
    return this._guaranteedEndpointPermissionOverrideEnabled;
  }

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // subscription_manager_enabled - computed: false, optional: true, required: false
  private _subscriptionManagerEnabled?: boolean | cdktf.IResolvable; 
  public get subscriptionManagerEnabled() {
    return this.getBooleanAttribute('subscription_manager_enabled');
  }
  public set subscriptionManagerEnabled(value: boolean | cdktf.IResolvable) {
    this._subscriptionManagerEnabled = value;
  }
  public resetSubscriptionManagerEnabled() {
    this._subscriptionManagerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionManagerEnabledInput() {
    return this._subscriptionManagerEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_profile_name: cdktf.stringToTerraform(this._aclProfileName),
      client_profile_name: cdktf.stringToTerraform(this._clientProfileName),
      client_username: cdktf.stringToTerraform(this._clientUsername),
      enabled: cdktf.booleanToTerraform(this._enabled),
      guaranteed_endpoint_permission_override_enabled: cdktf.booleanToTerraform(this._guaranteedEndpointPermissionOverrideEnabled),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      password: cdktf.stringToTerraform(this._password),
      subscription_manager_enabled: cdktf.booleanToTerraform(this._subscriptionManagerEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_profile_name: {
        value: cdktf.stringToHclTerraform(this._aclProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_profile_name: {
        value: cdktf.stringToHclTerraform(this._clientProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_username: {
        value: cdktf.stringToHclTerraform(this._clientUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guaranteed_endpoint_permission_override_enabled: {
        value: cdktf.booleanToHclTerraform(this._guaranteedEndpointPermissionOverrideEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
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
      subscription_manager_enabled: {
        value: cdktf.booleanToHclTerraform(this._subscriptionManagerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
