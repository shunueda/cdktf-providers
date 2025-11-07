// https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_warehouse_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceWarehouseConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the Source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_warehouse_connection#source_id SourceWarehouseConnection#source_id}
  */
  readonly sourceId: string;
  /**
  * The id of the Warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_warehouse_connection#warehouse_id SourceWarehouseConnection#warehouse_id}
  */
  readonly warehouseId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_warehouse_connection segment_source_warehouse_connection}
*/
export class SourceWarehouseConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "segment_source_warehouse_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceWarehouseConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceWarehouseConnection to import
  * @param importFromId The id of the existing SourceWarehouseConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_warehouse_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceWarehouseConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "segment_source_warehouse_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_warehouse_connection segment_source_warehouse_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceWarehouseConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: SourceWarehouseConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'segment_source_warehouse_connection',
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
    this._sourceId = config.sourceId;
    this._warehouseId = config.warehouseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // warehouse_id - computed: false, optional: false, required: true
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      source_id: cdktf.stringToTerraform(this._sourceId),
      warehouse_id: cdktf.stringToTerraform(this._warehouseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      source_id: {
        value: cdktf.stringToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warehouse_id: {
        value: cdktf.stringToHclTerraform(this._warehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
