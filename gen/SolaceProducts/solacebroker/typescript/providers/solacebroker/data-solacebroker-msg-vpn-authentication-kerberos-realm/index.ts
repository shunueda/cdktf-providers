// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_authentication_kerberos_realm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnAuthenticationKerberosRealmConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Realm Name. Must start with "@", typically all uppercase.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_authentication_kerberos_realm#kerberos_realm_name DataSolacebrokerMsgVpnAuthenticationKerberosRealm#kerberos_realm_name}
  */
  readonly kerberosRealmName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_authentication_kerberos_realm#msg_vpn_name DataSolacebrokerMsgVpnAuthenticationKerberosRealm#msg_vpn_name}
  */
  readonly msgVpnName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_authentication_kerberos_realm solacebroker_msg_vpn_authentication_kerberos_realm}
*/
export class DataSolacebrokerMsgVpnAuthenticationKerberosRealm extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_authentication_kerberos_realm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnAuthenticationKerberosRealm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnAuthenticationKerberosRealm to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnAuthenticationKerberosRealm that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_authentication_kerberos_realm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnAuthenticationKerberosRealm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_authentication_kerberos_realm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_authentication_kerberos_realm solacebroker_msg_vpn_authentication_kerberos_realm} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnAuthenticationKerberosRealmConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnAuthenticationKerberosRealmConfig) {
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
    this._kerberosRealmName = config.kerberosRealmName;
    this._msgVpnName = config.msgVpnName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // kdc_address - computed: true, optional: false, required: false
  public get kdcAddress() {
    return this.getStringAttribute('kdc_address');
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
      kerberos_realm_name: cdktf.stringToTerraform(this._kerberosRealmName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
