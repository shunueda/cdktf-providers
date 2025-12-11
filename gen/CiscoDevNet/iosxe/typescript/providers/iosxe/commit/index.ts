// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/commit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CommitConfig extends cdktf.TerraformMetaArguments {
  /**
  * This attribute is only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/commit#commit Commit#commit}
  */
  readonly commit?: boolean | cdktf.IResolvable;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/commit#device Commit#device}
  */
  readonly device?: string;
  /**
  * Save running configuration to startup configuration. Equivalent to 'copy running-config startup-config'. For NETCONF devices, this saves after commit. For RESTCONF devices, this saves the current running configuration (RESTCONF is stateless, no commit needed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/commit#save_config Commit#save_config}
  */
  readonly saveConfig?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/commit iosxe_commit}
*/
export class Commit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_commit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Commit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Commit to import
  * @param importFromId The id of the existing Commit that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/commit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Commit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_commit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/commit iosxe_commit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CommitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CommitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_commit',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commit = config.commit;
    this._device = config.device;
    this._saveConfig = config.saveConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commit - computed: true, optional: true, required: false
  private _commit?: boolean | cdktf.IResolvable; 
  public get commit() {
    return this.getBooleanAttribute('commit');
  }
  public set commit(value: boolean | cdktf.IResolvable) {
    this._commit = value;
  }
  public resetCommit() {
    this._commit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // save_config - computed: true, optional: true, required: false
  private _saveConfig?: boolean | cdktf.IResolvable; 
  public get saveConfig() {
    return this.getBooleanAttribute('save_config');
  }
  public set saveConfig(value: boolean | cdktf.IResolvable) {
    this._saveConfig = value;
  }
  public resetSaveConfig() {
    this._saveConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveConfigInput() {
    return this._saveConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commit: cdktf.booleanToTerraform(this._commit),
      device: cdktf.stringToTerraform(this._device),
      save_config: cdktf.booleanToTerraform(this._saveConfig),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commit: {
        value: cdktf.booleanToHclTerraform(this._commit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_config: {
        value: cdktf.booleanToHclTerraform(this._saveConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
