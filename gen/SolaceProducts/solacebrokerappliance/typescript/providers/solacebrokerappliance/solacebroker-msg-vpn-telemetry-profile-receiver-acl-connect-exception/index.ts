// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_receiver_acl_connect_exception
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnTelemetryProfileReceiverAclConnectExceptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_receiver_acl_connect_exception#msg_vpn_name SolacebrokerMsgVpnTelemetryProfileReceiverAclConnectException#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The IP address/netmask of the receiver connect exception in CIDR form.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_receiver_acl_connect_exception#receiver_acl_connect_exception_address SolacebrokerMsgVpnTelemetryProfileReceiverAclConnectException#receiver_acl_connect_exception_address}
  */
  readonly receiverAclConnectExceptionAddress: string;
  /**
  * The name of the Telemetry Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_receiver_acl_connect_exception#telemetry_profile_name SolacebrokerMsgVpnTelemetryProfileReceiverAclConnectException#telemetry_profile_name}
  */
  readonly telemetryProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_receiver_acl_connect_exception solacebroker_msg_vpn_telemetry_profile_receiver_acl_connect_exception}
*/
export class SolacebrokerMsgVpnTelemetryProfileReceiverAclConnectException extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_telemetry_profile_receiver_acl_connect_exception";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnTelemetryProfileReceiverAclConnectException resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnTelemetryProfileReceiverAclConnectException to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnTelemetryProfileReceiverAclConnectException that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_receiver_acl_connect_exception#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnTelemetryProfileReceiverAclConnectException to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_telemetry_profile_receiver_acl_connect_exception", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_receiver_acl_connect_exception solacebroker_msg_vpn_telemetry_profile_receiver_acl_connect_exception} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnTelemetryProfileReceiverAclConnectExceptionConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnTelemetryProfileReceiverAclConnectExceptionConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_telemetry_profile_receiver_acl_connect_exception',
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
    this._msgVpnName = config.msgVpnName;
    this._receiverAclConnectExceptionAddress = config.receiverAclConnectExceptionAddress;
    this._telemetryProfileName = config.telemetryProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // receiver_acl_connect_exception_address - computed: false, optional: false, required: true
  private _receiverAclConnectExceptionAddress?: string; 
  public get receiverAclConnectExceptionAddress() {
    return this.getStringAttribute('receiver_acl_connect_exception_address');
  }
  public set receiverAclConnectExceptionAddress(value: string) {
    this._receiverAclConnectExceptionAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverAclConnectExceptionAddressInput() {
    return this._receiverAclConnectExceptionAddress;
  }

  // telemetry_profile_name - computed: false, optional: false, required: true
  private _telemetryProfileName?: string; 
  public get telemetryProfileName() {
    return this.getStringAttribute('telemetry_profile_name');
  }
  public set telemetryProfileName(value: string) {
    this._telemetryProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryProfileNameInput() {
    return this._telemetryProfileName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      receiver_acl_connect_exception_address: cdktf.stringToTerraform(this._receiverAclConnectExceptionAddress),
      telemetry_profile_name: cdktf.stringToTerraform(this._telemetryProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receiver_acl_connect_exception_address: {
        value: cdktf.stringToHclTerraform(this._receiverAclConnectExceptionAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      telemetry_profile_name: {
        value: cdktf.stringToHclTerraform(this._telemetryProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
