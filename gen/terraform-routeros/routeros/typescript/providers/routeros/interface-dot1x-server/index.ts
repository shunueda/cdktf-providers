// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceDot1XServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#___path___ InterfaceDot1XServer#___path___}
  */
  readonly path?: string;
  /**
  * Whether to send RADIUS accounting requests to the authentication server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#accounting InterfaceDot1XServer#accounting}
  */
  readonly accounting?: boolean | cdktf.IResolvable;
  /**
  * Total time available for EAP authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#auth_timeout InterfaceDot1XServer#auth_timeout}
  */
  readonly authTimeout?: string;
  /**
  * Used authentication type on a server interface. Comma-separated list of `dot1x` and `mac-auth`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#auth_types InterfaceDot1XServer#auth_types}
  */
  readonly authTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#comment InterfaceDot1XServer#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#disabled InterfaceDot1XServer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Assigned VLAN when end devices do not support dot1x authentication and no mac-auth fallback is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#guest_vlan_id InterfaceDot1XServer#guest_vlan_id}
  */
  readonly guestVlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#id InterfaceDot1XServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#interface InterfaceDot1XServer#interface}
  */
  readonly interface: string;
  /**
  * Interval between scheduled RADIUS Interim-Update messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#interim_update InterfaceDot1XServer#interim_update}
  */
  readonly interimUpdate?: string;
  /**
  * An option that allows to control User-Name and User-Password RADIUS attributes when using MAC authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#mac_auth_mode InterfaceDot1XServer#mac_auth_mode}
  */
  readonly macAuthMode?: string;
  /**
  * An option that controls how the MAC address of the client is encoded in the User-Name and User-Password attributes when using MAC authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#radius_mac_format InterfaceDot1XServer#radius_mac_format}
  */
  readonly radiusMacFormat?: string;
  /**
  * An option that enables server port re-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#reauth_timeout InterfaceDot1XServer#reauth_timeout}
  */
  readonly reauthTimeout?: string;
  /**
  * Assigned VLAN when authentication failed, and a RADIUS server responded with an Access-Reject message. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#reject_vlan_id InterfaceDot1XServer#reject_vlan_id}
  */
  readonly rejectVlanId?: number;
  /**
  * The time interval between message re-transmissions if no response is received from the supplicant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#retrans_timeout InterfaceDot1XServer#retrans_timeout}
  */
  readonly retransTimeout?: string;
  /**
  * Assigned VLAN when RADIUS server is not responding and request timed out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#server_fail_vlan_id InterfaceDot1XServer#server_fail_vlan_id}
  */
  readonly serverFailVlanId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server routeros_interface_dot1x_server}
*/
export class InterfaceDot1XServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_dot1x_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceDot1XServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceDot1XServer to import
  * @param importFromId The id of the existing InterfaceDot1XServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceDot1XServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_dot1x_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_dot1x_server routeros_interface_dot1x_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceDot1XServerConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceDot1XServerConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_dot1x_server',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._accounting = config.accounting;
    this._authTimeout = config.authTimeout;
    this._authTypes = config.authTypes;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._guestVlanId = config.guestVlanId;
    this._id = config.id;
    this._interface = config.interface;
    this._interimUpdate = config.interimUpdate;
    this._macAuthMode = config.macAuthMode;
    this._radiusMacFormat = config.radiusMacFormat;
    this._reauthTimeout = config.reauthTimeout;
    this._rejectVlanId = config.rejectVlanId;
    this._retransTimeout = config.retransTimeout;
    this._serverFailVlanId = config.serverFailVlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // accounting - computed: false, optional: true, required: false
  private _accounting?: boolean | cdktf.IResolvable; 
  public get accounting() {
    return this.getBooleanAttribute('accounting');
  }
  public set accounting(value: boolean | cdktf.IResolvable) {
    this._accounting = value;
  }
  public resetAccounting() {
    this._accounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingInput() {
    return this._accounting;
  }

  // auth_timeout - computed: false, optional: true, required: false
  private _authTimeout?: string; 
  public get authTimeout() {
    return this.getStringAttribute('auth_timeout');
  }
  public set authTimeout(value: string) {
    this._authTimeout = value;
  }
  public resetAuthTimeout() {
    this._authTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTimeoutInput() {
    return this._authTimeout;
  }

  // auth_types - computed: false, optional: true, required: false
  private _authTypes?: string[]; 
  public get authTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_types'));
  }
  public set authTypes(value: string[]) {
    this._authTypes = value;
  }
  public resetAuthTypes() {
    this._authTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypesInput() {
    return this._authTypes;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // guest_vlan_id - computed: false, optional: true, required: false
  private _guestVlanId?: number; 
  public get guestVlanId() {
    return this.getNumberAttribute('guest_vlan_id');
  }
  public set guestVlanId(value: number) {
    this._guestVlanId = value;
  }
  public resetGuestVlanId() {
    this._guestVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestVlanIdInput() {
    return this._guestVlanId;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interim_update - computed: false, optional: true, required: false
  private _interimUpdate?: string; 
  public get interimUpdate() {
    return this.getStringAttribute('interim_update');
  }
  public set interimUpdate(value: string) {
    this._interimUpdate = value;
  }
  public resetInterimUpdate() {
    this._interimUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interimUpdateInput() {
    return this._interimUpdate;
  }

  // mac_auth_mode - computed: false, optional: true, required: false
  private _macAuthMode?: string; 
  public get macAuthMode() {
    return this.getStringAttribute('mac_auth_mode');
  }
  public set macAuthMode(value: string) {
    this._macAuthMode = value;
  }
  public resetMacAuthMode() {
    this._macAuthMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAuthModeInput() {
    return this._macAuthMode;
  }

  // radius_mac_format - computed: false, optional: true, required: false
  private _radiusMacFormat?: string; 
  public get radiusMacFormat() {
    return this.getStringAttribute('radius_mac_format');
  }
  public set radiusMacFormat(value: string) {
    this._radiusMacFormat = value;
  }
  public resetRadiusMacFormat() {
    this._radiusMacFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMacFormatInput() {
    return this._radiusMacFormat;
  }

  // reauth_timeout - computed: false, optional: true, required: false
  private _reauthTimeout?: string; 
  public get reauthTimeout() {
    return this.getStringAttribute('reauth_timeout');
  }
  public set reauthTimeout(value: string) {
    this._reauthTimeout = value;
  }
  public resetReauthTimeout() {
    this._reauthTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthTimeoutInput() {
    return this._reauthTimeout;
  }

  // reject_vlan_id - computed: false, optional: true, required: false
  private _rejectVlanId?: number; 
  public get rejectVlanId() {
    return this.getNumberAttribute('reject_vlan_id');
  }
  public set rejectVlanId(value: number) {
    this._rejectVlanId = value;
  }
  public resetRejectVlanId() {
    this._rejectVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectVlanIdInput() {
    return this._rejectVlanId;
  }

  // retrans_timeout - computed: false, optional: true, required: false
  private _retransTimeout?: string; 
  public get retransTimeout() {
    return this.getStringAttribute('retrans_timeout');
  }
  public set retransTimeout(value: string) {
    this._retransTimeout = value;
  }
  public resetRetransTimeout() {
    this._retransTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransTimeoutInput() {
    return this._retransTimeout;
  }

  // server_fail_vlan_id - computed: false, optional: true, required: false
  private _serverFailVlanId?: number; 
  public get serverFailVlanId() {
    return this.getNumberAttribute('server_fail_vlan_id');
  }
  public set serverFailVlanId(value: number) {
    this._serverFailVlanId = value;
  }
  public resetServerFailVlanId() {
    this._serverFailVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFailVlanIdInput() {
    return this._serverFailVlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      accounting: cdktf.booleanToTerraform(this._accounting),
      auth_timeout: cdktf.stringToTerraform(this._authTimeout),
      auth_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authTypes),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      guest_vlan_id: cdktf.numberToTerraform(this._guestVlanId),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interim_update: cdktf.stringToTerraform(this._interimUpdate),
      mac_auth_mode: cdktf.stringToTerraform(this._macAuthMode),
      radius_mac_format: cdktf.stringToTerraform(this._radiusMacFormat),
      reauth_timeout: cdktf.stringToTerraform(this._reauthTimeout),
      reject_vlan_id: cdktf.numberToTerraform(this._rejectVlanId),
      retrans_timeout: cdktf.stringToTerraform(this._retransTimeout),
      server_fail_vlan_id: cdktf.numberToTerraform(this._serverFailVlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting: {
        value: cdktf.booleanToHclTerraform(this._accounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_timeout: {
        value: cdktf.stringToHclTerraform(this._authTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guest_vlan_id: {
        value: cdktf.numberToHclTerraform(this._guestVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interim_update: {
        value: cdktf.stringToHclTerraform(this._interimUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_auth_mode: {
        value: cdktf.stringToHclTerraform(this._macAuthMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_mac_format: {
        value: cdktf.stringToHclTerraform(this._radiusMacFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reauth_timeout: {
        value: cdktf.stringToHclTerraform(this._reauthTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reject_vlan_id: {
        value: cdktf.numberToHclTerraform(this._rejectVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retrans_timeout: {
        value: cdktf.stringToHclTerraform(this._retransTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_fail_vlan_id: {
        value: cdktf.numberToHclTerraform(this._serverFailVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
