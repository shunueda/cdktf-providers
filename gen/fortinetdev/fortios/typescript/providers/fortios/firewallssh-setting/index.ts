// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssh_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallsshSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssh_setting#caname FirewallsshSetting#caname}
  */
  readonly caname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssh_setting#host_trusted_checking FirewallsshSetting#host_trusted_checking}
  */
  readonly hostTrustedChecking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssh_setting#hostkey_dsa1024 FirewallsshSetting#hostkey_dsa1024}
  */
  readonly hostkeyDsa1024?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssh_setting#hostkey_ecdsa256 FirewallsshSetting#hostkey_ecdsa256}
  */
  readonly hostkeyEcdsa256?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssh_setting#hostkey_ecdsa384 FirewallsshSetting#hostkey_ecdsa384}
  */
  readonly hostkeyEcdsa384?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssh_setting#hostkey_ecdsa521 FirewallsshSetting#hostkey_ecdsa521}
  */
  readonly hostkeyEcdsa521?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssh_setting#hostkey_ed25519 FirewallsshSetting#hostkey_ed25519}
  */
  readonly hostkeyEd25519?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssh_setting#hostkey_rsa2048 FirewallsshSetting#hostkey_rsa2048}
  */
  readonly hostkeyRsa2048?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssh_setting#id FirewallsshSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssh_setting#untrusted_caname FirewallsshSetting#untrusted_caname}
  */
  readonly untrustedCaname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssh_setting#vdomparam FirewallsshSetting#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssh_setting fortios_firewallssh_setting}
*/
export class FirewallsshSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewallssh_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallsshSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallsshSetting to import
  * @param importFromId The id of the existing FirewallsshSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssh_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallsshSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewallssh_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssh_setting fortios_firewallssh_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallsshSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallsshSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewallssh_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._hostTrustedChecking = config.hostTrustedChecking;
    this._hostkeyDsa1024 = config.hostkeyDsa1024;
    this._hostkeyEcdsa256 = config.hostkeyEcdsa256;
    this._hostkeyEcdsa384 = config.hostkeyEcdsa384;
    this._hostkeyEcdsa521 = config.hostkeyEcdsa521;
    this._hostkeyEd25519 = config.hostkeyEd25519;
    this._hostkeyRsa2048 = config.hostkeyRsa2048;
    this._id = config.id;
    this._untrustedCaname = config.untrustedCaname;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caname - computed: false, optional: true, required: false
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

  // hostkey_dsa1024 - computed: false, optional: true, required: false
  private _hostkeyDsa1024?: string; 
  public get hostkeyDsa1024() {
    return this.getStringAttribute('hostkey_dsa1024');
  }
  public set hostkeyDsa1024(value: string) {
    this._hostkeyDsa1024 = value;
  }
  public resetHostkeyDsa1024() {
    this._hostkeyDsa1024 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostkeyDsa1024Input() {
    return this._hostkeyDsa1024;
  }

  // hostkey_ecdsa256 - computed: false, optional: true, required: false
  private _hostkeyEcdsa256?: string; 
  public get hostkeyEcdsa256() {
    return this.getStringAttribute('hostkey_ecdsa256');
  }
  public set hostkeyEcdsa256(value: string) {
    this._hostkeyEcdsa256 = value;
  }
  public resetHostkeyEcdsa256() {
    this._hostkeyEcdsa256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostkeyEcdsa256Input() {
    return this._hostkeyEcdsa256;
  }

  // hostkey_ecdsa384 - computed: false, optional: true, required: false
  private _hostkeyEcdsa384?: string; 
  public get hostkeyEcdsa384() {
    return this.getStringAttribute('hostkey_ecdsa384');
  }
  public set hostkeyEcdsa384(value: string) {
    this._hostkeyEcdsa384 = value;
  }
  public resetHostkeyEcdsa384() {
    this._hostkeyEcdsa384 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostkeyEcdsa384Input() {
    return this._hostkeyEcdsa384;
  }

  // hostkey_ecdsa521 - computed: false, optional: true, required: false
  private _hostkeyEcdsa521?: string; 
  public get hostkeyEcdsa521() {
    return this.getStringAttribute('hostkey_ecdsa521');
  }
  public set hostkeyEcdsa521(value: string) {
    this._hostkeyEcdsa521 = value;
  }
  public resetHostkeyEcdsa521() {
    this._hostkeyEcdsa521 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostkeyEcdsa521Input() {
    return this._hostkeyEcdsa521;
  }

  // hostkey_ed25519 - computed: false, optional: true, required: false
  private _hostkeyEd25519?: string; 
  public get hostkeyEd25519() {
    return this.getStringAttribute('hostkey_ed25519');
  }
  public set hostkeyEd25519(value: string) {
    this._hostkeyEd25519 = value;
  }
  public resetHostkeyEd25519() {
    this._hostkeyEd25519 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostkeyEd25519Input() {
    return this._hostkeyEd25519;
  }

  // hostkey_rsa2048 - computed: false, optional: true, required: false
  private _hostkeyRsa2048?: string; 
  public get hostkeyRsa2048() {
    return this.getStringAttribute('hostkey_rsa2048');
  }
  public set hostkeyRsa2048(value: string) {
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

  // untrusted_caname - computed: false, optional: true, required: false
  private _untrustedCaname?: string; 
  public get untrustedCaname() {
    return this.getStringAttribute('untrusted_caname');
  }
  public set untrustedCaname(value: string) {
    this._untrustedCaname = value;
  }
  public resetUntrustedCaname() {
    this._untrustedCaname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedCanameInput() {
    return this._untrustedCaname;
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
      caname: cdktf.stringToTerraform(this._caname),
      host_trusted_checking: cdktf.stringToTerraform(this._hostTrustedChecking),
      hostkey_dsa1024: cdktf.stringToTerraform(this._hostkeyDsa1024),
      hostkey_ecdsa256: cdktf.stringToTerraform(this._hostkeyEcdsa256),
      hostkey_ecdsa384: cdktf.stringToTerraform(this._hostkeyEcdsa384),
      hostkey_ecdsa521: cdktf.stringToTerraform(this._hostkeyEcdsa521),
      hostkey_ed25519: cdktf.stringToTerraform(this._hostkeyEd25519),
      hostkey_rsa2048: cdktf.stringToTerraform(this._hostkeyRsa2048),
      id: cdktf.stringToTerraform(this._id),
      untrusted_caname: cdktf.stringToTerraform(this._untrustedCaname),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      host_trusted_checking: {
        value: cdktf.stringToHclTerraform(this._hostTrustedChecking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostkey_dsa1024: {
        value: cdktf.stringToHclTerraform(this._hostkeyDsa1024),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostkey_ecdsa256: {
        value: cdktf.stringToHclTerraform(this._hostkeyEcdsa256),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostkey_ecdsa384: {
        value: cdktf.stringToHclTerraform(this._hostkeyEcdsa384),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostkey_ecdsa521: {
        value: cdktf.stringToHclTerraform(this._hostkeyEcdsa521),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostkey_ed25519: {
        value: cdktf.stringToHclTerraform(this._hostkeyEd25519),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostkey_rsa2048: {
        value: cdktf.stringToHclTerraform(this._hostkeyRsa2048),
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
      untrusted_caname: {
        value: cdktf.stringToHclTerraform(this._untrustedCaname),
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
