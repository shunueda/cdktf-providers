// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_sshconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSshconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_sshconfig#id SystemSshconfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_sshconfig#ssh_enc_algo SystemSshconfig#ssh_enc_algo}
  */
  readonly sshEncAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_sshconfig#ssh_hsk SystemSshconfig#ssh_hsk}
  */
  readonly sshHsk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_sshconfig#ssh_hsk_algo SystemSshconfig#ssh_hsk_algo}
  */
  readonly sshHskAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_sshconfig#ssh_hsk_override SystemSshconfig#ssh_hsk_override}
  */
  readonly sshHskOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_sshconfig#ssh_hsk_password SystemSshconfig#ssh_hsk_password}
  */
  readonly sshHskPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_sshconfig#ssh_kex_algo SystemSshconfig#ssh_kex_algo}
  */
  readonly sshKexAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_sshconfig#ssh_mac_algo SystemSshconfig#ssh_mac_algo}
  */
  readonly sshMacAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_sshconfig#vdomparam SystemSshconfig#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_sshconfig fortios_system_sshconfig}
*/
export class SystemSshconfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_sshconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSshconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSshconfig to import
  * @param importFromId The id of the existing SystemSshconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_sshconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSshconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_sshconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_sshconfig fortios_system_sshconfig} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSshconfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSshconfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_sshconfig',
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
    this._id = config.id;
    this._sshEncAlgo = config.sshEncAlgo;
    this._sshHsk = config.sshHsk;
    this._sshHskAlgo = config.sshHskAlgo;
    this._sshHskOverride = config.sshHskOverride;
    this._sshHskPassword = config.sshHskPassword;
    this._sshKexAlgo = config.sshKexAlgo;
    this._sshMacAlgo = config.sshMacAlgo;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ssh_enc_algo - computed: true, optional: true, required: false
  private _sshEncAlgo?: string; 
  public get sshEncAlgo() {
    return this.getStringAttribute('ssh_enc_algo');
  }
  public set sshEncAlgo(value: string) {
    this._sshEncAlgo = value;
  }
  public resetSshEncAlgo() {
    this._sshEncAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshEncAlgoInput() {
    return this._sshEncAlgo;
  }

  // ssh_hsk - computed: false, optional: true, required: false
  private _sshHsk?: string; 
  public get sshHsk() {
    return this.getStringAttribute('ssh_hsk');
  }
  public set sshHsk(value: string) {
    this._sshHsk = value;
  }
  public resetSshHsk() {
    this._sshHsk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHskInput() {
    return this._sshHsk;
  }

  // ssh_hsk_algo - computed: true, optional: true, required: false
  private _sshHskAlgo?: string; 
  public get sshHskAlgo() {
    return this.getStringAttribute('ssh_hsk_algo');
  }
  public set sshHskAlgo(value: string) {
    this._sshHskAlgo = value;
  }
  public resetSshHskAlgo() {
    this._sshHskAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHskAlgoInput() {
    return this._sshHskAlgo;
  }

  // ssh_hsk_override - computed: true, optional: true, required: false
  private _sshHskOverride?: string; 
  public get sshHskOverride() {
    return this.getStringAttribute('ssh_hsk_override');
  }
  public set sshHskOverride(value: string) {
    this._sshHskOverride = value;
  }
  public resetSshHskOverride() {
    this._sshHskOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHskOverrideInput() {
    return this._sshHskOverride;
  }

  // ssh_hsk_password - computed: false, optional: true, required: false
  private _sshHskPassword?: string; 
  public get sshHskPassword() {
    return this.getStringAttribute('ssh_hsk_password');
  }
  public set sshHskPassword(value: string) {
    this._sshHskPassword = value;
  }
  public resetSshHskPassword() {
    this._sshHskPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHskPasswordInput() {
    return this._sshHskPassword;
  }

  // ssh_kex_algo - computed: true, optional: true, required: false
  private _sshKexAlgo?: string; 
  public get sshKexAlgo() {
    return this.getStringAttribute('ssh_kex_algo');
  }
  public set sshKexAlgo(value: string) {
    this._sshKexAlgo = value;
  }
  public resetSshKexAlgo() {
    this._sshKexAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKexAlgoInput() {
    return this._sshKexAlgo;
  }

  // ssh_mac_algo - computed: true, optional: true, required: false
  private _sshMacAlgo?: string; 
  public get sshMacAlgo() {
    return this.getStringAttribute('ssh_mac_algo');
  }
  public set sshMacAlgo(value: string) {
    this._sshMacAlgo = value;
  }
  public resetSshMacAlgo() {
    this._sshMacAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshMacAlgoInput() {
    return this._sshMacAlgo;
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
      id: cdktf.stringToTerraform(this._id),
      ssh_enc_algo: cdktf.stringToTerraform(this._sshEncAlgo),
      ssh_hsk: cdktf.stringToTerraform(this._sshHsk),
      ssh_hsk_algo: cdktf.stringToTerraform(this._sshHskAlgo),
      ssh_hsk_override: cdktf.stringToTerraform(this._sshHskOverride),
      ssh_hsk_password: cdktf.stringToTerraform(this._sshHskPassword),
      ssh_kex_algo: cdktf.stringToTerraform(this._sshKexAlgo),
      ssh_mac_algo: cdktf.stringToTerraform(this._sshMacAlgo),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_enc_algo: {
        value: cdktf.stringToHclTerraform(this._sshEncAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_hsk: {
        value: cdktf.stringToHclTerraform(this._sshHsk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_hsk_algo: {
        value: cdktf.stringToHclTerraform(this._sshHskAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_hsk_override: {
        value: cdktf.stringToHclTerraform(this._sshHskOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_hsk_password: {
        value: cdktf.stringToHclTerraform(this._sshHskPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_kex_algo: {
        value: cdktf.stringToHclTerraform(this._sshKexAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_mac_algo: {
        value: cdktf.stringToHclTerraform(this._sshMacAlgo),
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
