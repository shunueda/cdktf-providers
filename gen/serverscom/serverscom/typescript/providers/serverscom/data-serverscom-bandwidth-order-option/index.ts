// https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/data-sources/bandwidth_order_option
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataServerscomBandwidthOrderOptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/data-sources/bandwidth_order_option#id DataServerscomBandwidthOrderOption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/data-sources/bandwidth_order_option#location_id DataServerscomBandwidthOrderOption#location_id}
  */
  readonly locationId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/data-sources/bandwidth_order_option#server_model_id DataServerscomBandwidthOrderOption#server_model_id}
  */
  readonly serverModelId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/data-sources/bandwidth_order_option#uplink_model_id DataServerscomBandwidthOrderOption#uplink_model_id}
  */
  readonly uplinkModelId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/data-sources/bandwidth_order_option serverscom_bandwidth_order_option}
*/
export class DataServerscomBandwidthOrderOption extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "serverscom_bandwidth_order_option";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataServerscomBandwidthOrderOption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataServerscomBandwidthOrderOption to import
  * @param importFromId The id of the existing DataServerscomBandwidthOrderOption that should be imported. Refer to the {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/data-sources/bandwidth_order_option#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataServerscomBandwidthOrderOption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "serverscom_bandwidth_order_option", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/data-sources/bandwidth_order_option serverscom_bandwidth_order_option} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataServerscomBandwidthOrderOptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataServerscomBandwidthOrderOptionConfig) {
    super(scope, id, {
      terraformResourceType: 'serverscom_bandwidth_order_option',
      terraformGeneratorMetadata: {
        providerName: 'serverscom',
        providerVersion: '0.5.3',
        providerVersionConstraint: '0.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._locationId = config.locationId;
    this._serverModelId = config.serverModelId;
    this._uplinkModelId = config.uplinkModelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commit - computed: true, optional: false, required: false
  public get commit() {
    return this.getNumberAttribute('commit');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location_id - computed: false, optional: false, required: true
  private _locationId?: number; 
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }
  public set locationId(value: number) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server_model_id - computed: false, optional: false, required: true
  private _serverModelId?: number; 
  public get serverModelId() {
    return this.getNumberAttribute('server_model_id');
  }
  public set serverModelId(value: number) {
    this._serverModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverModelIdInput() {
    return this._serverModelId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uplink_model_id - computed: false, optional: false, required: true
  private _uplinkModelId?: number; 
  public get uplinkModelId() {
    return this.getNumberAttribute('uplink_model_id');
  }
  public set uplinkModelId(value: number) {
    this._uplinkModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkModelIdInput() {
    return this._uplinkModelId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      location_id: cdktf.numberToTerraform(this._locationId),
      server_model_id: cdktf.numberToTerraform(this._serverModelId),
      uplink_model_id: cdktf.numberToTerraform(this._uplinkModelId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      location_id: {
        value: cdktf.numberToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_model_id: {
        value: cdktf.numberToHclTerraform(this._serverModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uplink_model_id: {
        value: cdktf.numberToHclTerraform(this._uplinkModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
