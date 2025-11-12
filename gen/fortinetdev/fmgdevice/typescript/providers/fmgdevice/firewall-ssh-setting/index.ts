// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallSshSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting#caname FirewallSshSetting#caname}
  */
  readonly caname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting#device_name FirewallSshSetting#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting#device_vdom FirewallSshSetting#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting#host_trusted_checking FirewallSshSetting#host_trusted_checking}
  */
  readonly hostTrustedChecking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting#hostkey_dsa1024 FirewallSshSetting#hostkey_dsa1024}
  */
  readonly hostkeyDsa1024?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting#hostkey_ecdsa256 FirewallSshSetting#hostkey_ecdsa256}
  */
  readonly hostkeyEcdsa256?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting#hostkey_ecdsa384 FirewallSshSetting#hostkey_ecdsa384}
  */
  readonly hostkeyEcdsa384?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting#hostkey_ecdsa521 FirewallSshSetting#hostkey_ecdsa521}
  */
  readonly hostkeyEcdsa521?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting#hostkey_ed25519 FirewallSshSetting#hostkey_ed25519}
  */
  readonly hostkeyEd25519?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting#hostkey_rsa2048 FirewallSshSetting#hostkey_rsa2048}
  */
  readonly hostkeyRsa2048?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting#id FirewallSshSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting#untrusted_caname FirewallSshSetting#untrusted_caname}
  */
  readonly untrustedCaname?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting fmgdevice_firewall_ssh_setting}
*/
export class FirewallSshSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_firewall_ssh_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallSshSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallSshSetting to import
  * @param importFromId The id of the existing FirewallSshSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallSshSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_firewall_ssh_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssh_setting fmgdevice_firewall_ssh_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallSshSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallSshSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_firewall_ssh_setting',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caname = config.caname;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._hostTrustedChecking = config.hostTrustedChecking;
    this._hostkeyDsa1024 = config.hostkeyDsa1024;
    this._hostkeyEcdsa256 = config.hostkeyEcdsa256;
    this._hostkeyEcdsa384 = config.hostkeyEcdsa384;
    this._hostkeyEcdsa521 = config.hostkeyEcdsa521;
    this._hostkeyEd25519 = config.hostkeyEd25519;
    this._hostkeyRsa2048 = config.hostkeyRsa2048;
    this._id = config.id;
    this._untrustedCaname = config.untrustedCaname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caname - computed: true, optional: true, required: false
  private _caname?: string; 
  public get caname() {
    return this.getStringAttribute('caname');
  }
  public set caname(value: string) {
    this._caname = value;
  }
  public resetCaname() {
    this._caname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canameInput() {
    return this._caname;
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

  // host_trusted_checking - computed: true, optional: true, required: false
  private _hostTrustedChecking?: string; 
  public get hostTrustedChecking() {
    return this.getStringAttribute('host_trusted_checking');
  }
  public set hostTrustedChecking(value: string) {
    this._hostTrustedChecking = value;
  }
  public resetHostTrustedChecking() {
    this._hostTrustedChecking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTrustedCheckingInput() {
    return this._hostTrustedChecking;
  }

  // hostkey_dsa1024 - computed: true, optional: true, required: false
  private _hostkeyDsa1024?: string[]; 
  public get hostkeyDsa1024() {
    return cdktf.Fn.tolist(this.getListAttribute('hostkey_dsa1024'));
  }
  public set hostkeyDsa1024(value: string[]) {
    this._hostkeyDsa1024 = value;
  }
  public resetHostkeyDsa1024() {
    this._hostkeyDsa1024 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostkeyDsa1024Input() {
    return this._hostkeyDsa1024;
  }

  // hostkey_ecdsa256 - computed: true, optional: true, required: false
  private _hostkeyEcdsa256?: string[]; 
  public get hostkeyEcdsa256() {
    return cdktf.Fn.tolist(this.getListAttribute('hostkey_ecdsa256'));
  }
  public set hostkeyEcdsa256(value: string[]) {
    this._hostkeyEcdsa256 = value;
  }
  public resetHostkeyEcdsa256() {
    this._hostkeyEcdsa256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostkeyEcdsa256Input() {
    return this._hostkeyEcdsa256;
  }

  // hostkey_ecdsa384 - computed: true, optional: true, required: false
  private _hostkeyEcdsa384?: string[]; 
  public get hostkeyEcdsa384() {
    return cdktf.Fn.tolist(this.getListAttribute('hostkey_ecdsa384'));
  }
  public set hostkeyEcdsa384(value: string[]) {
    this._hostkeyEcdsa384 = value;
  }
  public resetHostkeyEcdsa384() {
    this._hostkeyEcdsa384 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostkeyEcdsa384Input() {
    return this._hostkeyEcdsa384;
  }

  // hostkey_ecdsa521 - computed: true, optional: true, required: false
  private _hostkeyEcdsa521?: string[]; 
  public get hostkeyEcdsa521() {
    return cdktf.Fn.tolist(this.getListAttribute('hostkey_ecdsa521'));
  }
  public set hostkeyEcdsa521(value: string[]) {
    this._hostkeyEcdsa521 = value;
  }
  public resetHostkeyEcdsa521() {
    this._hostkeyEcdsa521 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostkeyEcdsa521Input() {
    return this._hostkeyEcdsa521;
  }

  // hostkey_ed25519 - computed: true, optional: true, required: false
  private _hostkeyEd25519?: string[]; 
  public get hostkeyEd25519() {
    return cdktf.Fn.tolist(this.getListAttribute('hostkey_ed25519'));
  }
  public set hostkeyEd25519(value: string[]) {
    this._hostkeyEd25519 = value;
  }
  public resetHostkeyEd25519() {
    this._hostkeyEd25519 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostkeyEd25519Input() {
    return this._hostkeyEd25519;
  }

  // hostkey_rsa2048 - computed: true, optional: true, required: false
  private _hostkeyRsa2048?: string[]; 
  public get hostkeyRsa2048() {
    return cdktf.Fn.tolist(this.getListAttribute('hostkey_rsa2048'));
  }
  public set hostkeyRsa2048(value: string[]) {
    this._hostkeyRsa2048 = value;
  }
  public resetHostkeyRsa2048() {
    this._hostkeyRsa2048 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostkeyRsa2048Input() {
    return this._hostkeyRsa2048;
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

  // untrusted_caname - computed: true, optional: true, required: false
  private _untrustedCaname?: string[]; 
  public get untrustedCaname() {
    return cdktf.Fn.tolist(this.getListAttribute('untrusted_caname'));
  }
  public set untrustedCaname(value: string[]) {
    this._untrustedCaname = value;
  }
  public resetUntrustedCaname() {
    this._untrustedCaname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedCanameInput() {
    return this._untrustedCaname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      caname: cdktf.stringToTerraform(this._caname),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      host_trusted_checking: cdktf.stringToTerraform(this._hostTrustedChecking),
      hostkey_dsa1024: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostkeyDsa1024),
      hostkey_ecdsa256: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostkeyEcdsa256),
      hostkey_ecdsa384: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostkeyEcdsa384),
      hostkey_ecdsa521: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostkeyEcdsa521),
      hostkey_ed25519: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostkeyEd25519),
      hostkey_rsa2048: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostkeyRsa2048),
      id: cdktf.stringToTerraform(this._id),
      untrusted_caname: cdktf.listMapper(cdktf.stringToTerraform, false)(this._untrustedCaname),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      caname: {
        value: cdktf.stringToHclTerraform(this._caname),
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
      host_trusted_checking: {
        value: cdktf.stringToHclTerraform(this._hostTrustedChecking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostkey_dsa1024: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostkeyDsa1024),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hostkey_ecdsa256: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostkeyEcdsa256),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hostkey_ecdsa384: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostkeyEcdsa384),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hostkey_ecdsa521: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostkeyEcdsa521),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hostkey_ed25519: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostkeyEd25519),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hostkey_rsa2048: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostkeyRsa2048),
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
      untrusted_caname: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._untrustedCaname),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
