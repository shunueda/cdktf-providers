// https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/profiles_warehouse
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfilesWarehouseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable to allow this Warehouse to receive data. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/profiles_warehouse#enabled ProfilesWarehouse#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The Warehouse metadata to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/profiles_warehouse#metadata_id ProfilesWarehouse#metadata_id}
  */
  readonly metadataId: string;
  /**
  * An optional human-readable name for this Warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/profiles_warehouse#name ProfilesWarehouse#name}
  */
  readonly name?: string;
  /**
  * The custom schema name that Segment uses on the Warehouse side. The space slug value is default otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/profiles_warehouse#schema_name ProfilesWarehouse#schema_name}
  */
  readonly schemaName?: string;
  /**
  * A key-value object that contains instance-specific settings for a Warehouse.
  * 			
  * 			 Different kinds of Warehouses require different settings. The required and optional settings
  * 			 for a Warehouse are described in the 'options' object of the associated Warehouse metadata.
  * 			
  * 			 You can find the full list of Warehouse metadata and related settings information in the
  * 			 '/catalog/warehouses' endpoint.
  * 			 
  * 			 Only settings included in the configuration will be managed by Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/profiles_warehouse#settings ProfilesWarehouse#settings}
  */
  readonly settings: string;
  /**
  * The Space id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/profiles_warehouse#space_id ProfilesWarehouse#space_id}
  */
  readonly spaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/profiles_warehouse segment_profiles_warehouse}
*/
export class ProfilesWarehouse extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "segment_profiles_warehouse";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfilesWarehouse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfilesWarehouse to import
  * @param importFromId The id of the existing ProfilesWarehouse that should be imported. Refer to the {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/profiles_warehouse#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfilesWarehouse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "segment_profiles_warehouse", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/profiles_warehouse segment_profiles_warehouse} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfilesWarehouseConfig
  */
  public constructor(scope: Construct, id: string, config: ProfilesWarehouseConfig) {
    super(scope, id, {
      terraformResourceType: 'segment_profiles_warehouse',
      terraformGeneratorMetadata: {
        providerName: 'segment',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._metadataId = config.metadataId;
    this._name = config.name;
    this._schemaName = config.schemaName;
    this._settings = config.settings;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata_id - computed: false, optional: false, required: true
  private _metadataId?: string; 
  public get metadataId() {
    return this.getStringAttribute('metadata_id');
  }
  public set metadataId(value: string) {
    this._metadataId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataIdInput() {
    return this._metadataId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // settings - computed: false, optional: false, required: true
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // space_id - computed: false, optional: false, required: true
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      metadata_id: cdktf.stringToTerraform(this._metadataId),
      name: cdktf.stringToTerraform(this._name),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      settings: cdktf.stringToTerraform(this._settings),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata_id: {
        value: cdktf.stringToHclTerraform(this._metadataId),
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
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: cdktf.stringToHclTerraform(this._settings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
