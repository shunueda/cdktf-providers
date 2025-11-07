// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authorization_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnAuthorizationGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ACL Profile of the Authorization Group.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"default"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authorization_group#acl_profile_name SolacebrokerMsgVpnAuthorizationGroup#acl_profile_name}
  */
  readonly aclProfileName?: string;
  /**
  * The name of the Authorization Group. For LDAP groups, special care is needed if the group name contains special characters such as '#', '+', ';', '=' as the value of the group name returned from the LDAP server might prepend those characters with '\'. For example a group name called 'test#,lab,com' will be returned from the LDAP server as 'test\#,lab,com'.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authorization_group#authorization_group_name SolacebrokerMsgVpnAuthorizationGroup#authorization_group_name}
  */
  readonly authorizationGroupName: string;
  /**
  * The Client Profile of the Authorization Group.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"default"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authorization_group#client_profile_name SolacebrokerMsgVpnAuthorizationGroup#client_profile_name}
  */
  readonly clientProfileName?: string;
  /**
  * Enable or disable the Authorization Group in the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authorization_group#enabled SolacebrokerMsgVpnAuthorizationGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authorization_group#msg_vpn_name SolacebrokerMsgVpnAuthorizationGroup#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * Lower the priority to be less than this group.
  * 
  * The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authorization_group#order_after_authorization_group_name SolacebrokerMsgVpnAuthorizationGroup#order_after_authorization_group_name}
  */
  readonly orderAfterAuthorizationGroupName?: string;
  /**
  * Raise the priority to be greater than this group.
  * 
  * The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authorization_group#order_before_authorization_group_name SolacebrokerMsgVpnAuthorizationGroup#order_before_authorization_group_name}
  */
  readonly orderBeforeAuthorizationGroupName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authorization_group solacebroker_msg_vpn_authorization_group}
*/
export class SolacebrokerMsgVpnAuthorizationGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_authorization_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnAuthorizationGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnAuthorizationGroup to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnAuthorizationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authorization_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnAuthorizationGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_authorization_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authorization_group solacebroker_msg_vpn_authorization_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnAuthorizationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnAuthorizationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_authorization_group',
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
    this._authorizationGroupName = config.authorizationGroupName;
    this._clientProfileName = config.clientProfileName;
    this._enabled = config.enabled;
    this._msgVpnName = config.msgVpnName;
    this._orderAfterAuthorizationGroupName = config.orderAfterAuthorizationGroupName;
    this._orderBeforeAuthorizationGroupName = config.orderBeforeAuthorizationGroupName;
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

  // authorization_group_name - computed: false, optional: false, required: true
  private _authorizationGroupName?: string; 
  public get authorizationGroupName() {
    return this.getStringAttribute('authorization_group_name');
  }
  public set authorizationGroupName(value: string) {
    this._authorizationGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationGroupNameInput() {
    return this._authorizationGroupName;
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

  // order_after_authorization_group_name - computed: false, optional: true, required: false
  private _orderAfterAuthorizationGroupName?: string; 
  public get orderAfterAuthorizationGroupName() {
    return this.getStringAttribute('order_after_authorization_group_name');
  }
  public set orderAfterAuthorizationGroupName(value: string) {
    this._orderAfterAuthorizationGroupName = value;
  }
  public resetOrderAfterAuthorizationGroupName() {
    this._orderAfterAuthorizationGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderAfterAuthorizationGroupNameInput() {
    return this._orderAfterAuthorizationGroupName;
  }

  // order_before_authorization_group_name - computed: false, optional: true, required: false
  private _orderBeforeAuthorizationGroupName?: string; 
  public get orderBeforeAuthorizationGroupName() {
    return this.getStringAttribute('order_before_authorization_group_name');
  }
  public set orderBeforeAuthorizationGroupName(value: string) {
    this._orderBeforeAuthorizationGroupName = value;
  }
  public resetOrderBeforeAuthorizationGroupName() {
    this._orderBeforeAuthorizationGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderBeforeAuthorizationGroupNameInput() {
    return this._orderBeforeAuthorizationGroupName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_profile_name: cdktf.stringToTerraform(this._aclProfileName),
      authorization_group_name: cdktf.stringToTerraform(this._authorizationGroupName),
      client_profile_name: cdktf.stringToTerraform(this._clientProfileName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      order_after_authorization_group_name: cdktf.stringToTerraform(this._orderAfterAuthorizationGroupName),
      order_before_authorization_group_name: cdktf.stringToTerraform(this._orderBeforeAuthorizationGroupName),
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
      authorization_group_name: {
        value: cdktf.stringToHclTerraform(this._authorizationGroupName),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      order_after_authorization_group_name: {
        value: cdktf.stringToHclTerraform(this._orderAfterAuthorizationGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_before_authorization_group_name: {
        value: cdktf.stringToHclTerraform(this._orderBeforeAuthorizationGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
