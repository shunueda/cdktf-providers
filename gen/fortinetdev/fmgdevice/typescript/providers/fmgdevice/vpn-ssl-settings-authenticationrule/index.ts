// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnSslSettingsAuthenticationruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#auth VpnSslSettingsAuthenticationrule#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#cipher VpnSslSettingsAuthenticationrule#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#client_cert VpnSslSettingsAuthenticationrule#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#device_name VpnSslSettingsAuthenticationrule#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#device_vdom VpnSslSettingsAuthenticationrule#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#fosid VpnSslSettingsAuthenticationrule#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#groups VpnSslSettingsAuthenticationrule#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#id VpnSslSettingsAuthenticationrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#portal VpnSslSettingsAuthenticationrule#portal}
  */
  readonly portal?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#realm VpnSslSettingsAuthenticationrule#realm}
  */
  readonly realm?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#source_address VpnSslSettingsAuthenticationrule#source_address}
  */
  readonly sourceAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#source_address6 VpnSslSettingsAuthenticationrule#source_address6}
  */
  readonly sourceAddress6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#source_address6_negate VpnSslSettingsAuthenticationrule#source_address6_negate}
  */
  readonly sourceAddress6Negate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#source_address_negate VpnSslSettingsAuthenticationrule#source_address_negate}
  */
  readonly sourceAddressNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#source_interface VpnSslSettingsAuthenticationrule#source_interface}
  */
  readonly sourceInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#user_peer VpnSslSettingsAuthenticationrule#user_peer}
  */
  readonly userPeer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#users VpnSslSettingsAuthenticationrule#users}
  */
  readonly users?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule fmgdevice_vpn_ssl_settings_authenticationrule}
*/
export class VpnSslSettingsAuthenticationrule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_vpn_ssl_settings_authenticationrule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnSslSettingsAuthenticationrule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnSslSettingsAuthenticationrule to import
  * @param importFromId The id of the existing VpnSslSettingsAuthenticationrule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnSslSettingsAuthenticationrule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_vpn_ssl_settings_authenticationrule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_settings_authenticationrule fmgdevice_vpn_ssl_settings_authenticationrule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnSslSettingsAuthenticationruleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpnSslSettingsAuthenticationruleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_vpn_ssl_settings_authenticationrule',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auth = config.auth;
    this._cipher = config.cipher;
    this._clientCert = config.clientCert;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._fosid = config.fosid;
    this._groups = config.groups;
    this._id = config.id;
    this._portal = config.portal;
    this._realm = config.realm;
    this._sourceAddress = config.sourceAddress;
    this._sourceAddress6 = config.sourceAddress6;
    this._sourceAddress6Negate = config.sourceAddress6Negate;
    this._sourceAddressNegate = config.sourceAddressNegate;
    this._sourceInterface = config.sourceInterface;
    this._userPeer = config.userPeer;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: true, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // cipher - computed: true, optional: true, required: false
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
  }

  // client_cert - computed: true, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // portal - computed: true, optional: true, required: false
  private _portal?: string[]; 
  public get portal() {
    return cdktf.Fn.tolist(this.getListAttribute('portal'));
  }
  public set portal(value: string[]) {
    this._portal = value;
  }
  public resetPortal() {
    this._portal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalInput() {
    return this._portal;
  }

  // realm - computed: true, optional: true, required: false
  private _realm?: string[]; 
  public get realm() {
    return cdktf.Fn.tolist(this.getListAttribute('realm'));
  }
  public set realm(value: string[]) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // source_address - computed: true, optional: true, required: false
  private _sourceAddress?: string[]; 
  public get sourceAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('source_address'));
  }
  public set sourceAddress(value: string[]) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_address6 - computed: true, optional: true, required: false
  private _sourceAddress6?: string[]; 
  public get sourceAddress6() {
    return cdktf.Fn.tolist(this.getListAttribute('source_address6'));
  }
  public set sourceAddress6(value: string[]) {
    this._sourceAddress6 = value;
  }
  public resetSourceAddress6() {
    this._sourceAddress6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddress6Input() {
    return this._sourceAddress6;
  }

  // source_address6_negate - computed: true, optional: true, required: false
  private _sourceAddress6Negate?: string; 
  public get sourceAddress6Negate() {
    return this.getStringAttribute('source_address6_negate');
  }
  public set sourceAddress6Negate(value: string) {
    this._sourceAddress6Negate = value;
  }
  public resetSourceAddress6Negate() {
    this._sourceAddress6Negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddress6NegateInput() {
    return this._sourceAddress6Negate;
  }

  // source_address_negate - computed: true, optional: true, required: false
  private _sourceAddressNegate?: string; 
  public get sourceAddressNegate() {
    return this.getStringAttribute('source_address_negate');
  }
  public set sourceAddressNegate(value: string) {
    this._sourceAddressNegate = value;
  }
  public resetSourceAddressNegate() {
    this._sourceAddressNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressNegateInput() {
    return this._sourceAddressNegate;
  }

  // source_interface - computed: true, optional: true, required: false
  private _sourceInterface?: string[]; 
  public get sourceInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('source_interface'));
  }
  public set sourceInterface(value: string[]) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // user_peer - computed: true, optional: true, required: false
  private _userPeer?: string[]; 
  public get userPeer() {
    return cdktf.Fn.tolist(this.getListAttribute('user_peer'));
  }
  public set userPeer(value: string[]) {
    this._userPeer = value;
  }
  public resetUserPeer() {
    this._userPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPeerInput() {
    return this._userPeer;
  }

  // users - computed: true, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth: cdktf.stringToTerraform(this._auth),
      cipher: cdktf.stringToTerraform(this._cipher),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fosid: cdktf.numberToTerraform(this._fosid),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      portal: cdktf.listMapper(cdktf.stringToTerraform, false)(this._portal),
      realm: cdktf.listMapper(cdktf.stringToTerraform, false)(this._realm),
      source_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceAddress),
      source_address6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceAddress6),
      source_address6_negate: cdktf.stringToTerraform(this._sourceAddress6Negate),
      source_address_negate: cdktf.stringToTerraform(this._sourceAddressNegate),
      source_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceInterface),
      user_peer: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userPeer),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth: {
        value: cdktf.stringToHclTerraform(this._auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipher: {
        value: cdktf.stringToHclTerraform(this._cipher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._portal),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      realm: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._realm),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_address6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceAddress6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_address6_negate: {
        value: cdktf.stringToHclTerraform(this._sourceAddress6Negate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_address_negate: {
        value: cdktf.stringToHclTerraform(this._sourceAddressNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_peer: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userPeer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
