// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnipsecManualkeyinterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#addr_type VpnipsecManualkeyinterface#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#auth_alg VpnipsecManualkeyinterface#auth_alg}
  */
  readonly authAlg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#auth_key VpnipsecManualkeyinterface#auth_key}
  */
  readonly authKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#enc_alg VpnipsecManualkeyinterface#enc_alg}
  */
  readonly encAlg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#enc_key VpnipsecManualkeyinterface#enc_key}
  */
  readonly encKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#id VpnipsecManualkeyinterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#interface VpnipsecManualkeyinterface#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#ip_version VpnipsecManualkeyinterface#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#local_gw VpnipsecManualkeyinterface#local_gw}
  */
  readonly localGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#local_gw6 VpnipsecManualkeyinterface#local_gw6}
  */
  readonly localGw6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#local_spi VpnipsecManualkeyinterface#local_spi}
  */
  readonly localSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#name VpnipsecManualkeyinterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#npu_offload VpnipsecManualkeyinterface#npu_offload}
  */
  readonly npuOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#remote_gw VpnipsecManualkeyinterface#remote_gw}
  */
  readonly remoteGw: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#remote_gw6 VpnipsecManualkeyinterface#remote_gw6}
  */
  readonly remoteGw6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#remote_spi VpnipsecManualkeyinterface#remote_spi}
  */
  readonly remoteSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#vdomparam VpnipsecManualkeyinterface#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface fortios_vpnipsec_manualkeyinterface}
*/
export class VpnipsecManualkeyinterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_vpnipsec_manualkeyinterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnipsecManualkeyinterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnipsecManualkeyinterface to import
  * @param importFromId The id of the existing VpnipsecManualkeyinterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnipsecManualkeyinterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_vpnipsec_manualkeyinterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_manualkeyinterface fortios_vpnipsec_manualkeyinterface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnipsecManualkeyinterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: VpnipsecManualkeyinterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_vpnipsec_manualkeyinterface',
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
    this._addrType = config.addrType;
    this._authAlg = config.authAlg;
    this._authKey = config.authKey;
    this._encAlg = config.encAlg;
    this._encKey = config.encKey;
    this._id = config.id;
    this._interface = config.interface;
    this._ipVersion = config.ipVersion;
    this._localGw = config.localGw;
    this._localGw6 = config.localGw6;
    this._localSpi = config.localSpi;
    this._name = config.name;
    this._npuOffload = config.npuOffload;
    this._remoteGw = config.remoteGw;
    this._remoteGw6 = config.remoteGw6;
    this._remoteSpi = config.remoteSpi;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_type - computed: true, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
  }

  // auth_alg - computed: false, optional: false, required: true
  private _authAlg?: string; 
  public get authAlg() {
    return this.getStringAttribute('auth_alg');
  }
  public set authAlg(value: string) {
    this._authAlg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgInput() {
    return this._authAlg;
  }

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // enc_alg - computed: false, optional: false, required: true
  private _encAlg?: string; 
  public get encAlg() {
    return this.getStringAttribute('enc_alg');
  }
  public set encAlg(value: string) {
    this._encAlg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgInput() {
    return this._encAlg;
  }

  // enc_key - computed: false, optional: true, required: false
  private _encKey?: string; 
  public get encKey() {
    return this.getStringAttribute('enc_key');
  }
  public set encKey(value: string) {
    this._encKey = value;
  }
  public resetEncKey() {
    this._encKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encKeyInput() {
    return this._encKey;
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

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
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

  // local_gw6 - computed: true, optional: true, required: false
  private _localGw6?: string; 
  public get localGw6() {
    return this.getStringAttribute('local_gw6');
  }
  public set localGw6(value: string) {
    this._localGw6 = value;
  }
  public resetLocalGw6() {
    this._localGw6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localGw6Input() {
    return this._localGw6;
  }

  // local_spi - computed: false, optional: true, required: false
  private _localSpi?: string; 
  public get localSpi() {
    return this.getStringAttribute('local_spi');
  }
  public set localSpi(value: string) {
    this._localSpi = value;
  }
  public resetLocalSpi() {
    this._localSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSpiInput() {
    return this._localSpi;
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

  // remote_gw6 - computed: false, optional: false, required: true
  private _remoteGw6?: string; 
  public get remoteGw6() {
    return this.getStringAttribute('remote_gw6');
  }
  public set remoteGw6(value: string) {
    this._remoteGw6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGw6Input() {
    return this._remoteGw6;
  }

  // remote_spi - computed: false, optional: true, required: false
  private _remoteSpi?: string; 
  public get remoteSpi() {
    return this.getStringAttribute('remote_spi');
  }
  public set remoteSpi(value: string) {
    this._remoteSpi = value;
  }
  public resetRemoteSpi() {
    this._remoteSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSpiInput() {
    return this._remoteSpi;
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
      addr_type: cdktf.stringToTerraform(this._addrType),
      auth_alg: cdktf.stringToTerraform(this._authAlg),
      auth_key: cdktf.stringToTerraform(this._authKey),
      enc_alg: cdktf.stringToTerraform(this._encAlg),
      enc_key: cdktf.stringToTerraform(this._encKey),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      local_gw: cdktf.stringToTerraform(this._localGw),
      local_gw6: cdktf.stringToTerraform(this._localGw6),
      local_spi: cdktf.stringToTerraform(this._localSpi),
      name: cdktf.stringToTerraform(this._name),
      npu_offload: cdktf.stringToTerraform(this._npuOffload),
      remote_gw: cdktf.stringToTerraform(this._remoteGw),
      remote_gw6: cdktf.stringToTerraform(this._remoteGw6),
      remote_spi: cdktf.stringToTerraform(this._remoteSpi),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_type: {
        value: cdktf.stringToHclTerraform(this._addrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_alg: {
        value: cdktf.stringToHclTerraform(this._authAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_key: {
        value: cdktf.stringToHclTerraform(this._authKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enc_alg: {
        value: cdktf.stringToHclTerraform(this._encAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enc_key: {
        value: cdktf.stringToHclTerraform(this._encKey),
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
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
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
      local_gw6: {
        value: cdktf.stringToHclTerraform(this._localGw6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_spi: {
        value: cdktf.stringToHclTerraform(this._localSpi),
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
      remote_gw6: {
        value: cdktf.stringToHclTerraform(this._remoteGw6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_spi: {
        value: cdktf.stringToHclTerraform(this._remoteSpi),
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
