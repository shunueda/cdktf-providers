// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVpnIpsecManualkeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey#adom ObjectVpnIpsecManualkey#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey#authentication ObjectVpnIpsecManualkey#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey#authkey ObjectVpnIpsecManualkey#authkey}
  */
  readonly authkey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey#enckey ObjectVpnIpsecManualkey#enckey}
  */
  readonly enckey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey#encryption ObjectVpnIpsecManualkey#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey#id ObjectVpnIpsecManualkey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey#interface ObjectVpnIpsecManualkey#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey#local_gw ObjectVpnIpsecManualkey#local_gw}
  */
  readonly localGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey#localspi ObjectVpnIpsecManualkey#localspi}
  */
  readonly localspi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey#name ObjectVpnIpsecManualkey#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey#npu_offload ObjectVpnIpsecManualkey#npu_offload}
  */
  readonly npuOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey#remote_gw ObjectVpnIpsecManualkey#remote_gw}
  */
  readonly remoteGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey#remotespi ObjectVpnIpsecManualkey#remotespi}
  */
  readonly remotespi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey#scopetype ObjectVpnIpsecManualkey#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey fortimanager_object_vpn_ipsec_manualkey}
*/
export class ObjectVpnIpsecManualkey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_vpn_ipsec_manualkey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVpnIpsecManualkey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVpnIpsecManualkey to import
  * @param importFromId The id of the existing ObjectVpnIpsecManualkey that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVpnIpsecManualkey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_vpn_ipsec_manualkey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ipsec_manualkey fortimanager_object_vpn_ipsec_manualkey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVpnIpsecManualkeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectVpnIpsecManualkeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_vpn_ipsec_manualkey',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._authentication = config.authentication;
    this._authkey = config.authkey;
    this._enckey = config.enckey;
    this._encryption = config.encryption;
    this._id = config.id;
    this._interface = config.interface;
    this._localGw = config.localGw;
    this._localspi = config.localspi;
    this._name = config.name;
    this._npuOffload = config.npuOffload;
    this._remoteGw = config.remoteGw;
    this._remotespi = config.remotespi;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // authkey - computed: true, optional: true, required: false
  private _authkey?: string[]; 
  public get authkey() {
    return cdktf.Fn.tolist(this.getListAttribute('authkey'));
  }
  public set authkey(value: string[]) {
    this._authkey = value;
  }
  public resetAuthkey() {
    this._authkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authkeyInput() {
    return this._authkey;
  }

  // enckey - computed: true, optional: true, required: false
  private _enckey?: string[]; 
  public get enckey() {
    return cdktf.Fn.tolist(this.getListAttribute('enckey'));
  }
  public set enckey(value: string[]) {
    this._enckey = value;
  }
  public resetEnckey() {
    this._enckey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enckeyInput() {
    return this._enckey;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // local_gw - computed: true, optional: true, required: false
  private _localGw?: string; 
  public get localGw() {
    return this.getStringAttribute('local_gw');
  }
  public set localGw(value: string) {
    this._localGw = value;
  }
  public resetLocalGw() {
    this._localGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localGwInput() {
    return this._localGw;
  }

  // localspi - computed: true, optional: true, required: false
  private _localspi?: string; 
  public get localspi() {
    return this.getStringAttribute('localspi');
  }
  public set localspi(value: string) {
    this._localspi = value;
  }
  public resetLocalspi() {
    this._localspi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localspiInput() {
    return this._localspi;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // npu_offload - computed: true, optional: true, required: false
  private _npuOffload?: string; 
  public get npuOffload() {
    return this.getStringAttribute('npu_offload');
  }
  public set npuOffload(value: string) {
    this._npuOffload = value;
  }
  public resetNpuOffload() {
    this._npuOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuOffloadInput() {
    return this._npuOffload;
  }

  // remote_gw - computed: true, optional: true, required: false
  private _remoteGw?: string; 
  public get remoteGw() {
    return this.getStringAttribute('remote_gw');
  }
  public set remoteGw(value: string) {
    this._remoteGw = value;
  }
  public resetRemoteGw() {
    this._remoteGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwInput() {
    return this._remoteGw;
  }

  // remotespi - computed: true, optional: true, required: false
  private _remotespi?: string; 
  public get remotespi() {
    return this.getStringAttribute('remotespi');
  }
  public set remotespi(value: string) {
    this._remotespi = value;
  }
  public resetRemotespi() {
    this._remotespi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotespiInput() {
    return this._remotespi;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      authentication: cdktf.stringToTerraform(this._authentication),
      authkey: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authkey),
      enckey: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enckey),
      encryption: cdktf.stringToTerraform(this._encryption),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      local_gw: cdktf.stringToTerraform(this._localGw),
      localspi: cdktf.stringToTerraform(this._localspi),
      name: cdktf.stringToTerraform(this._name),
      npu_offload: cdktf.stringToTerraform(this._npuOffload),
      remote_gw: cdktf.stringToTerraform(this._remoteGw),
      remotespi: cdktf.stringToTerraform(this._remotespi),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authkey: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authkey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enckey: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enckey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      encryption: {
        value: cdktf.stringToHclTerraform(this._encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      local_gw: {
        value: cdktf.stringToHclTerraform(this._localGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      localspi: {
        value: cdktf.stringToHclTerraform(this._localspi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      npu_offload: {
        value: cdktf.stringToHclTerraform(this._npuOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_gw: {
        value: cdktf.stringToHclTerraform(this._remoteGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remotespi: {
        value: cdktf.stringToHclTerraform(this._remotespi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
