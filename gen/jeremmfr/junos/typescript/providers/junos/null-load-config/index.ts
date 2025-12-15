// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/null_load_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NullLoadConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify how to load the configuration data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/null_load_config#action NullLoadConfig#action}
  */
  readonly action?: string;
  /**
  * The configuration to load and apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/null_load_config#config NullLoadConfig#config}
  */
  readonly config: string;
  /**
  * The format used for the configuration data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/null_load_config#format NullLoadConfig#format}
  */
  readonly format?: string;
  /**
  * Any value that, when changed, will force the resource to be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/null_load_config#triggers NullLoadConfig#triggers}
  */
  readonly triggers?: { [key: string]: any };
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/null_load_config junos_null_load_config}
*/
export class NullLoadConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_null_load_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NullLoadConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NullLoadConfig to import
  * @param importFromId The id of the existing NullLoadConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/null_load_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NullLoadConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_null_load_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/null_load_config junos_null_load_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NullLoadConfigConfig
  */
  public constructor(scope: Construct, id: string, config: NullLoadConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_null_load_config',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._config = config.config;
    this._format = config.format;
    this._triggers = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: any }; 
  public get triggers() {
    return this.getAnyMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: any }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      config: cdktf.stringToTerraform(this._config),
      format: cdktf.stringToTerraform(this._format),
      triggers: cdktf.hashMapper(cdktf.anyToTerraform)(this._triggers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
