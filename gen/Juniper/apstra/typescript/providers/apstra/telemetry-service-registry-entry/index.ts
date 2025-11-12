// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/telemetry_service_registry_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TelemetryServiceRegistryEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application Schema expressed in JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/telemetry_service_registry_entry#application_schema TelemetryServiceRegistryEntry#application_schema}
  */
  readonly applicationSchema: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/telemetry_service_registry_entry#description TelemetryServiceRegistryEntry#description}
  */
  readonly description?: string;
  /**
  * Service Name. Used to identify the Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/telemetry_service_registry_entry#name TelemetryServiceRegistryEntry#name}
  */
  readonly name: string;
  /**
  * Storage Schema Path. Must be one of:
  *   - iba_string_data
  *   - iba_integer_data
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/telemetry_service_registry_entry#storage_schema_path TelemetryServiceRegistryEntry#storage_schema_path}
  */
  readonly storageSchemaPath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/telemetry_service_registry_entry apstra_telemetry_service_registry_entry}
*/
export class TelemetryServiceRegistryEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_telemetry_service_registry_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TelemetryServiceRegistryEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TelemetryServiceRegistryEntry to import
  * @param importFromId The id of the existing TelemetryServiceRegistryEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/telemetry_service_registry_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TelemetryServiceRegistryEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_telemetry_service_registry_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/telemetry_service_registry_entry apstra_telemetry_service_registry_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TelemetryServiceRegistryEntryConfig
  */
  public constructor(scope: Construct, id: string, config: TelemetryServiceRegistryEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_telemetry_service_registry_entry',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationSchema = config.applicationSchema;
    this._description = config.description;
    this._name = config.name;
    this._storageSchemaPath = config.storageSchemaPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_schema - computed: false, optional: false, required: true
  private _applicationSchema?: string; 
  public get applicationSchema() {
    return this.getStringAttribute('application_schema');
  }
  public set applicationSchema(value: string) {
    this._applicationSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSchemaInput() {
    return this._applicationSchema;
  }

  // built_in - computed: true, optional: false, required: false
  public get builtIn() {
    return this.getBooleanAttribute('built_in');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // storage_schema_path - computed: false, optional: false, required: true
  private _storageSchemaPath?: string; 
  public get storageSchemaPath() {
    return this.getStringAttribute('storage_schema_path');
  }
  public set storageSchemaPath(value: string) {
    this._storageSchemaPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSchemaPathInput() {
    return this._storageSchemaPath;
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
      application_schema: cdktf.stringToTerraform(this._applicationSchema),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      storage_schema_path: cdktf.stringToTerraform(this._storageSchemaPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_schema: {
        value: cdktf.stringToHclTerraform(this._applicationSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      storage_schema_path: {
        value: cdktf.stringToHclTerraform(this._storageSchemaPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
