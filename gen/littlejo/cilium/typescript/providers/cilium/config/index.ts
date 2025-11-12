// https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Key of the config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/config#key Config#key}
  */
  readonly key: string;
  /**
  * Restart Cilium pods (Default: `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/config#restart Config#restart}
  */
  readonly restart?: boolean | cdktf.IResolvable;
  /**
  * Value of the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/config#value Config#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/config cilium_config}
*/
export class Config extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cilium_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Config resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Config to import
  * @param importFromId The id of the existing Config that should be imported. Refer to the {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Config to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cilium_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/config cilium_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'cilium_config',
      terraformGeneratorMetadata: {
        providerName: 'cilium',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._key = config.key;
    this._restart = config.restart;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // restart - computed: true, optional: true, required: false
  private _restart?: boolean | cdktf.IResolvable; 
  public get restart() {
    return this.getBooleanAttribute('restart');
  }
  public set restart(value: boolean | cdktf.IResolvable) {
    this._restart = value;
  }
  public resetRestart() {
    this._restart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
      restart: cdktf.booleanToTerraform(this._restart),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restart: {
        value: cdktf.booleanToHclTerraform(this._restart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
