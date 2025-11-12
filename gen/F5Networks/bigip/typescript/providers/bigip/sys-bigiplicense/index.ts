// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_bigiplicense
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysBigiplicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tmsh command to execute tmsh commands like install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_bigiplicense#command SysBigiplicense#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_bigiplicense#id SysBigiplicense#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique Key F5 provides for Licensing BIG-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_bigiplicense#registration_key SysBigiplicense#registration_key}
  */
  readonly registrationKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_bigiplicense bigip_sys_bigiplicense}
*/
export class SysBigiplicense extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_sys_bigiplicense";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysBigiplicense resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysBigiplicense to import
  * @param importFromId The id of the existing SysBigiplicense that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_bigiplicense#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysBigiplicense to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_sys_bigiplicense", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_bigiplicense bigip_sys_bigiplicense} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysBigiplicenseConfig
  */
  public constructor(scope: Construct, id: string, config: SysBigiplicenseConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_sys_bigiplicense',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._command = config.command;
    this._id = config.id;
    this._registrationKey = config.registrationKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
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

  // registration_key - computed: false, optional: false, required: true
  private _registrationKey?: string; 
  public get registrationKey() {
    return this.getStringAttribute('registration_key');
  }
  public set registrationKey(value: string) {
    this._registrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationKeyInput() {
    return this._registrationKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      command: cdktf.stringToTerraform(this._command),
      id: cdktf.stringToTerraform(this._id),
      registration_key: cdktf.stringToTerraform(this._registrationKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      command: {
        value: cdktf.stringToHclTerraform(this._command),
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
      registration_key: {
        value: cdktf.stringToHclTerraform(this._registrationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
