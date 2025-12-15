// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/group_raw
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupRawConfig extends cdktf.TerraformMetaArguments {
  /**
  * The raw configuration to load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/group_raw#config GroupRaw#config}
  */
  readonly config: string;
  /**
  * The format used for the configuration data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/group_raw#format GroupRaw#format}
  */
  readonly format?: string;
  /**
  * The name of group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/group_raw#name GroupRaw#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/group_raw junos_group_raw}
*/
export class GroupRaw extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_group_raw";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupRaw resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupRaw to import
  * @param importFromId The id of the existing GroupRaw that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/group_raw#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupRaw to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_group_raw", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/group_raw junos_group_raw} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupRawConfig
  */
  public constructor(scope: Construct, id: string, config: GroupRawConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_group_raw',
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
    this._config = config.config;
    this._format = config.format;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      format: cdktf.stringToTerraform(this._format),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
