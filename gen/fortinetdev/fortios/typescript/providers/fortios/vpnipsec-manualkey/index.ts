// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnipsecManualkeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey#authentication VpnipsecManualkey#authentication}
  */
  readonly authentication: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey#authkey VpnipsecManualkey#authkey}
  */
  readonly authkey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey#enckey VpnipsecManualkey#enckey}
  */
  readonly enckey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey#encryption VpnipsecManualkey#encryption}
  */
  readonly encryption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey#id VpnipsecManualkey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey#interface VpnipsecManualkey#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey#local_gw VpnipsecManualkey#local_gw}
  */
  readonly localGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey#localspi VpnipsecManualkey#localspi}
  */
  readonly localspi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey#name VpnipsecManualkey#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey#npu_offload VpnipsecManualkey#npu_offload}
  */
  readonly npuOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey#remote_gw VpnipsecManualkey#remote_gw}
  */
  readonly remoteGw: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey#remotespi VpnipsecManualkey#remotespi}
  */
  readonly remotespi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey#vdomparam VpnipsecManualkey#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey fortios_vpnipsec_manualkey}
*/
export class VpnipsecManualkey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_vpnipsec_manualkey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnipsecManualkey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnipsecManualkey to import
  * @param importFromId The id of the existing VpnipsecManualkey that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnipsecManualkey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_vpnipsec_manualkey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkey fortios_vpnipsec_manualkey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnipsecManualkeyConfig
  */
  public constructor(scope: Construct, id: string, config: VpnipsecManualkeyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_vpnipsec_manualkey',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
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
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: false, optional: false, required: true
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // authkey - computed: false, optional: true, required: false
  private _authkey?: string; 
  public get authkey() {
    return this.getStringAttribute('authkey');
  }
  public set authkey(value: string) {
    this._authkey = value;
  }
  public resetAuthkey() {
    this._authkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authkeyInput() {
    return this._authkey;
  }

  // enckey - computed: false, optional: true, required: false
  private _enckey?: string; 
  public get enckey() {
    return this.getStringAttribute('enckey');
  }
  public set enckey(value: string) {
    this._enckey = value;
  }
  public resetEnckey() {
    this._enckey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enckeyInput() {
    return this._enckey;
  }

  // encryption - computed: false, optional: false, required: true
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
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

  // localspi - computed: false, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
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

  // remote_gw - computed: false, optional: false, required: true
  private _remoteGw?: string; 
  public get remoteGw() {
    return this.getStringAttribute('remote_gw');
  }
  public set remoteGw(value: string) {
    this._remoteGw = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwInput() {
    return this._remoteGw;
  }

  // remotespi - computed: false, optional: true, required: false
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: cdktf.stringToTerraform(this._authentication),
      authkey: cdktf.stringToTerraform(this._authkey),
      enckey: cdktf.stringToTerraform(this._enckey),
      encryption: cdktf.stringToTerraform(this._encryption),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      local_gw: cdktf.stringToTerraform(this._localGw),
      localspi: cdktf.stringToTerraform(this._localspi),
      name: cdktf.stringToTerraform(this._name),
      npu_offload: cdktf.stringToTerraform(this._npuOffload),
      remote_gw: cdktf.stringToTerraform(this._remoteGw),
      remotespi: cdktf.stringToTerraform(this._remotespi),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authkey: {
        value: cdktf.stringToHclTerraform(this._authkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enckey: {
        value: cdktf.stringToHclTerraform(this._enckey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
