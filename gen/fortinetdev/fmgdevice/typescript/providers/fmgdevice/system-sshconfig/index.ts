// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sshconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSshconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sshconfig#device_name SystemSshconfig#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sshconfig#id SystemSshconfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sshconfig#ssh_enc_algo SystemSshconfig#ssh_enc_algo}
  */
  readonly sshEncAlgo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sshconfig#ssh_hsk SystemSshconfig#ssh_hsk}
  */
  readonly sshHsk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sshconfig#ssh_hsk_algo SystemSshconfig#ssh_hsk_algo}
  */
  readonly sshHskAlgo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sshconfig#ssh_hsk_override SystemSshconfig#ssh_hsk_override}
  */
  readonly sshHskOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sshconfig#ssh_hsk_password SystemSshconfig#ssh_hsk_password}
  */
  readonly sshHskPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sshconfig#ssh_kex_algo SystemSshconfig#ssh_kex_algo}
  */
  readonly sshKexAlgo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sshconfig#ssh_mac_algo SystemSshconfig#ssh_mac_algo}
  */
  readonly sshMacAlgo?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sshconfig fmgdevice_system_sshconfig}
*/
export class SystemSshconfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_sshconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSshconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSshconfig to import
  * @param importFromId The id of the existing SystemSshconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sshconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSshconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_sshconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sshconfig fmgdevice_system_sshconfig} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSshconfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSshconfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_sshconfig',
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
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._sshEncAlgo = config.sshEncAlgo;
    this._sshHsk = config.sshHsk;
    this._sshHskAlgo = config.sshHskAlgo;
    this._sshHskOverride = config.sshHskOverride;
    this._sshHskPassword = config.sshHskPassword;
    this._sshKexAlgo = config.sshKexAlgo;
    this._sshMacAlgo = config.sshMacAlgo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _sshEncAlgo?: string[]; 
  public get sshEncAlgo() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_enc_algo'));
  }
  public set sshEncAlgo(value: string[]) {
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
  private _sshHskAlgo?: string[]; 
  public get sshHskAlgo() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_hsk_algo'));
  }
  public set sshHskAlgo(value: string[]) {
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

  // ssh_hsk_password - computed: true, optional: true, required: false
  private _sshHskPassword?: string[]; 
  public get sshHskPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_hsk_password'));
  }
  public set sshHskPassword(value: string[]) {
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
  private _sshKexAlgo?: string[]; 
  public get sshKexAlgo() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_kex_algo'));
  }
  public set sshKexAlgo(value: string[]) {
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
  private _sshMacAlgo?: string[]; 
  public get sshMacAlgo() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_mac_algo'));
  }
  public set sshMacAlgo(value: string[]) {
    this._sshMacAlgo = value;
  }
  public resetSshMacAlgo() {
    this._sshMacAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshMacAlgoInput() {
    return this._sshMacAlgo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      ssh_enc_algo: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshEncAlgo),
      ssh_hsk: cdktf.stringToTerraform(this._sshHsk),
      ssh_hsk_algo: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshHskAlgo),
      ssh_hsk_override: cdktf.stringToTerraform(this._sshHskOverride),
      ssh_hsk_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshHskPassword),
      ssh_kex_algo: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKexAlgo),
      ssh_mac_algo: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshMacAlgo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      ssh_enc_algo: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshEncAlgo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssh_hsk: {
        value: cdktf.stringToHclTerraform(this._sshHsk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_hsk_algo: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshHskAlgo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssh_hsk_override: {
        value: cdktf.stringToHclTerraform(this._sshHskOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_hsk_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshHskPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssh_kex_algo: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKexAlgo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssh_mac_algo: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshMacAlgo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
