// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/cli
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CliConfig extends cdktf.TerraformMetaArguments {
  /**
  * This attribute contains the CLI commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/cli#cli Cli#cli}
  */
  readonly cli: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/cli#device Cli#device}
  */
  readonly device?: string;
  /**
  * Determines which RPC method is used to send CLI commands. When `false` (default), uses the transactional `config-ios-cli-trans` RPC which provides automatic rollback on failure but only supports native IOS CLIs with YANG model support. When `true`, uses the `config-ios-cli-rpc` RPC which supports all IOS native and non-native CLIs but without transactional guarantees or automatic rollback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/cli#raw Cli#raw}
  */
  readonly raw?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/cli iosxe_cli}
*/
export class Cli extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_cli";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cli resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cli to import
  * @param importFromId The id of the existing Cli that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/cli#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cli to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_cli", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/cli iosxe_cli} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CliConfig
  */
  public constructor(scope: Construct, id: string, config: CliConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_cli',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.4',
        providerVersionConstraint: '0.14.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cli = config.cli;
    this._device = config.device;
    this._raw = config.raw;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cli - computed: false, optional: false, required: true
  private _cli?: string; 
  public get cli() {
    return this.getStringAttribute('cli');
  }
  public set cli(value: string) {
    this._cli = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cliInput() {
    return this._cli;
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

  // raw - computed: true, optional: true, required: false
  private _raw?: boolean | cdktf.IResolvable; 
  public get raw() {
    return this.getBooleanAttribute('raw');
  }
  public set raw(value: boolean | cdktf.IResolvable) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cli: cdktf.stringToTerraform(this._cli),
      device: cdktf.stringToTerraform(this._device),
      raw: cdktf.booleanToTerraform(this._raw),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cli: {
        value: cdktf.stringToHclTerraform(this._cli),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      raw: {
        value: cdktf.booleanToHclTerraform(this._raw),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
