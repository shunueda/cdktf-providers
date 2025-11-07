// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/telemetry_service_registry_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraTelemetryServiceRegistryEntriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Return only built_in if true, not built_in if false, all otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/telemetry_service_registry_entries#built_in DataApstraTelemetryServiceRegistryEntries#built_in}
  */
  readonly builtIn?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/telemetry_service_registry_entries apstra_telemetry_service_registry_entries}
*/
export class DataApstraTelemetryServiceRegistryEntries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_telemetry_service_registry_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraTelemetryServiceRegistryEntries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraTelemetryServiceRegistryEntries to import
  * @param importFromId The id of the existing DataApstraTelemetryServiceRegistryEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/telemetry_service_registry_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraTelemetryServiceRegistryEntries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_telemetry_service_registry_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/telemetry_service_registry_entries apstra_telemetry_service_registry_entries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraTelemetryServiceRegistryEntriesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraTelemetryServiceRegistryEntriesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_telemetry_service_registry_entries',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._builtIn = config.builtIn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // built_in - computed: false, optional: true, required: false
  private _builtIn?: boolean | cdktf.IResolvable; 
  public get builtIn() {
    return this.getBooleanAttribute('built_in');
  }
  public set builtIn(value: boolean | cdktf.IResolvable) {
    this._builtIn = value;
  }
  public resetBuiltIn() {
    this._builtIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInInput() {
    return this._builtIn;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      built_in: cdktf.booleanToTerraform(this._builtIn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      built_in: {
        value: cdktf.booleanToHclTerraform(this._builtIn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
