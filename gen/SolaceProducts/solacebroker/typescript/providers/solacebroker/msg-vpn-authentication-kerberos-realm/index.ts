// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_authentication_kerberos_realm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsgVpnAuthenticationKerberosRealmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable the Realm.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_authentication_kerberos_realm#enabled MsgVpnAuthenticationKerberosRealm#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Address (FQDN or IP) and optional port of the Key Distribution Center for principals in this Realm.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_authentication_kerberos_realm#kdc_address MsgVpnAuthenticationKerberosRealm#kdc_address}
  */
  readonly kdcAddress?: string;
  /**
  * The Realm Name. Must start with "@", typically all uppercase.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_authentication_kerberos_realm#kerberos_realm_name MsgVpnAuthenticationKerberosRealm#kerberos_realm_name}
  */
  readonly kerberosRealmName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_authentication_kerberos_realm#msg_vpn_name MsgVpnAuthenticationKerberosRealm#msg_vpn_name}
  */
  readonly msgVpnName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_authentication_kerberos_realm solacebroker_msg_vpn_authentication_kerberos_realm}
*/
export class MsgVpnAuthenticationKerberosRealm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_authentication_kerberos_realm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsgVpnAuthenticationKerberosRealm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsgVpnAuthenticationKerberosRealm to import
  * @param importFromId The id of the existing MsgVpnAuthenticationKerberosRealm that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_authentication_kerberos_realm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsgVpnAuthenticationKerberosRealm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_authentication_kerberos_realm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_authentication_kerberos_realm solacebroker_msg_vpn_authentication_kerberos_realm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsgVpnAuthenticationKerberosRealmConfig
  */
  public constructor(scope: Construct, id: string, config: MsgVpnAuthenticationKerberosRealmConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_authentication_kerberos_realm',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._kdcAddress = config.kdcAddress;
    this._kerberosRealmName = config.kerberosRealmName;
    this._msgVpnName = config.msgVpnName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // kdc_address - computed: false, optional: true, required: false
  private _kdcAddress?: string; 
  public get kdcAddress() {
    return this.getStringAttribute('kdc_address');
  }
  public set kdcAddress(value: string) {
    this._kdcAddress = value;
  }
  public resetKdcAddress() {
    this._kdcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcAddressInput() {
    return this._kdcAddress;
  }

  // kerberos_realm_name - computed: false, optional: false, required: true
  private _kerberosRealmName?: string; 
  public get kerberosRealmName() {
    return this.getStringAttribute('kerberos_realm_name');
  }
  public set kerberosRealmName(value: string) {
    this._kerberosRealmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRealmNameInput() {
    return this._kerberosRealmName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      kdc_address: cdktf.stringToTerraform(this._kdcAddress),
      kerberos_realm_name: cdktf.stringToTerraform(this._kerberosRealmName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kdc_address: {
        value: cdktf.stringToHclTerraform(this._kdcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_realm_name: {
        value: cdktf.stringToHclTerraform(this._kerberosRealmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
