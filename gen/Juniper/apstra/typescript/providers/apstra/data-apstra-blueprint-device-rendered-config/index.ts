// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/blueprint_device_rendered_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraBlueprintDeviceRenderedConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/blueprint_device_rendered_config#blueprint_id DataApstraBlueprintDeviceRenderedConfig#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Apstra ID of the System (spine, leaf, etc...) node. Required when `system_id` is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/blueprint_device_rendered_config#node_id DataApstraBlueprintDeviceRenderedConfig#node_id}
  */
  readonly nodeId?: string;
  /**
  * Apstra ID (serial number) for the System (Managed Device), as found in Devices -> Managed Devices in the GUI. Required when `node_id` is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/blueprint_device_rendered_config#system_id DataApstraBlueprintDeviceRenderedConfig#system_id}
  */
  readonly systemId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/blueprint_device_rendered_config apstra_blueprint_device_rendered_config}
*/
export class DataApstraBlueprintDeviceRenderedConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_blueprint_device_rendered_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraBlueprintDeviceRenderedConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraBlueprintDeviceRenderedConfig to import
  * @param importFromId The id of the existing DataApstraBlueprintDeviceRenderedConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/blueprint_device_rendered_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraBlueprintDeviceRenderedConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_blueprint_device_rendered_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/blueprint_device_rendered_config apstra_blueprint_device_rendered_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraBlueprintDeviceRenderedConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraBlueprintDeviceRenderedConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_blueprint_device_rendered_config',
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
    this._blueprintId = config.blueprintId;
    this._nodeId = config.nodeId;
    this._systemId = config.systemId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // deployed_config - computed: true, optional: false, required: false
  public get deployedConfig() {
    return this.getStringAttribute('deployed_config');
  }

  // incremental_config - computed: true, optional: false, required: false
  public get incrementalConfig() {
    return this.getStringAttribute('incremental_config');
  }

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // staged_config - computed: true, optional: false, required: false
  public get stagedConfig() {
    return this.getStringAttribute('staged_config');
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      node_id: cdktf.stringToTerraform(this._nodeId),
      system_id: cdktf.stringToTerraform(this._systemId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_id: {
        value: cdktf.stringToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_id: {
        value: cdktf.stringToHclTerraform(this._systemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
