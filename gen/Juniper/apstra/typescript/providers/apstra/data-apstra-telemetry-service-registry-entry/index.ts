// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/telemetry_service_registry_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraTelemetryServiceRegistryEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Service Name. Used to identify the Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/telemetry_service_registry_entry#name DataApstraTelemetryServiceRegistryEntry#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/telemetry_service_registry_entry apstra_telemetry_service_registry_entry}
*/
export class DataApstraTelemetryServiceRegistryEntry extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_telemetry_service_registry_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraTelemetryServiceRegistryEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraTelemetryServiceRegistryEntry to import
  * @param importFromId The id of the existing DataApstraTelemetryServiceRegistryEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/telemetry_service_registry_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraTelemetryServiceRegistryEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_telemetry_service_registry_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/telemetry_service_registry_entry apstra_telemetry_service_registry_entry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraTelemetryServiceRegistryEntryConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraTelemetryServiceRegistryEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_telemetry_service_registry_entry',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_schema - computed: true, optional: false, required: false
  public get applicationSchema() {
    return this.getStringAttribute('application_schema');
  }

  // built_in - computed: true, optional: false, required: false
  public get builtIn() {
    return this.getBooleanAttribute('built_in');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // storage_schema_path - computed: true, optional: false, required: false
  public get storageSchemaPath() {
    return this.getStringAttribute('storage_schema_path');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
