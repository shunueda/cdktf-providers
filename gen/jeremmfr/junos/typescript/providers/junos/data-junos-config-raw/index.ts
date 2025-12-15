// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/data-sources/config_raw
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJunosConfigRawConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration format. Defaults to 'text'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/data-sources/config_raw#format DataJunosConfigRaw#format}
  */
  readonly format?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/data-sources/config_raw junos_config_raw}
*/
export class DataJunosConfigRaw extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_config_raw";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJunosConfigRaw resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJunosConfigRaw to import
  * @param importFromId The id of the existing DataJunosConfigRaw that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/data-sources/config_raw#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJunosConfigRaw to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_config_raw", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/data-sources/config_raw junos_config_raw} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJunosConfigRawConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataJunosConfigRawConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_config_raw',
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
    this._format = config.format;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      format: cdktf.stringToTerraform(this._format),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
