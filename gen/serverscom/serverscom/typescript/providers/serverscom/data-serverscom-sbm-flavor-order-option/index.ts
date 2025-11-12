// https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_flavor_order_option
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataServerscomSbmFlavorOrderOptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_flavor_order_option#id DataServerscomSbmFlavorOrderOption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_flavor_order_option#location_id DataServerscomSbmFlavorOrderOption#location_id}
  */
  readonly locationId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_flavor_order_option serverscom_sbm_flavor_order_option}
*/
export class DataServerscomSbmFlavorOrderOption extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "serverscom_sbm_flavor_order_option";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataServerscomSbmFlavorOrderOption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataServerscomSbmFlavorOrderOption to import
  * @param importFromId The id of the existing DataServerscomSbmFlavorOrderOption that should be imported. Refer to the {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_flavor_order_option#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataServerscomSbmFlavorOrderOption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "serverscom_sbm_flavor_order_option", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_flavor_order_option serverscom_sbm_flavor_order_option} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataServerscomSbmFlavorOrderOptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataServerscomSbmFlavorOrderOptionConfig) {
    super(scope, id, {
      terraformResourceType: 'serverscom_sbm_flavor_order_option',
      terraformGeneratorMetadata: {
        providerName: 'serverscom',
        providerVersion: '0.5.2',
        providerVersionConstraint: '0.5.2'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_id - computed: true, optional: false, required: false
  public get bandwidthId() {
    return this.getNumberAttribute('bandwidth_id');
  }

  // bandwidth_name - computed: true, optional: false, required: false
  public get bandwidthName() {
    return this.getStringAttribute('bandwidth_name');
  }

  // cpu_cores_count - computed: true, optional: false, required: false
  public get cpuCoresCount() {
    return this.getNumberAttribute('cpu_cores_count');
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // cpu_frequency - computed: true, optional: false, required: false
  public get cpuFrequency() {
    return this.getStringAttribute('cpu_frequency');
  }

  // cpu_name - computed: true, optional: false, required: false
  public get cpuName() {
    return this.getStringAttribute('cpu_name');
  }

  // drives_configuration - computed: true, optional: false, required: false
  public get drivesConfiguration() {
    return this.getStringAttribute('drives_configuration');
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

  // private_uplink_model_id - computed: true, optional: false, required: false
  public get privateUplinkModelId() {
    return this.getNumberAttribute('private_uplink_model_id');
  }

  // private_uplink_model_name - computed: true, optional: false, required: false
  public get privateUplinkModelName() {
    return this.getStringAttribute('private_uplink_model_name');
  }

  // public_uplink_model_id - computed: true, optional: false, required: false
  public get publicUplinkModelId() {
    return this.getNumberAttribute('public_uplink_model_id');
  }

  // public_uplink_model_name - computed: true, optional: false, required: false
  public get publicUplinkModelName() {
    return this.getStringAttribute('public_uplink_model_name');
  }

  // ram_size - computed: true, optional: false, required: false
  public get ramSize() {
    return this.getNumberAttribute('ram_size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      location_id: cdktf.numberToTerraform(this._locationId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
