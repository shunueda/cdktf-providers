// https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_operating_system_order_option
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataServerscomSbmOperatingSystemOrderOptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_operating_system_order_option#id DataServerscomSbmOperatingSystemOrderOption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_operating_system_order_option#location_id DataServerscomSbmOperatingSystemOrderOption#location_id}
  */
  readonly locationId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_operating_system_order_option#sbm_flavor_model_id DataServerscomSbmOperatingSystemOrderOption#sbm_flavor_model_id}
  */
  readonly sbmFlavorModelId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_operating_system_order_option serverscom_sbm_operating_system_order_option}
*/
export class DataServerscomSbmOperatingSystemOrderOption extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "serverscom_sbm_operating_system_order_option";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataServerscomSbmOperatingSystemOrderOption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataServerscomSbmOperatingSystemOrderOption to import
  * @param importFromId The id of the existing DataServerscomSbmOperatingSystemOrderOption that should be imported. Refer to the {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_operating_system_order_option#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataServerscomSbmOperatingSystemOrderOption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "serverscom_sbm_operating_system_order_option", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_operating_system_order_option serverscom_sbm_operating_system_order_option} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataServerscomSbmOperatingSystemOrderOptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataServerscomSbmOperatingSystemOrderOptionConfig) {
    super(scope, id, {
      terraformResourceType: 'serverscom_sbm_operating_system_order_option',
      terraformGeneratorMetadata: {
        providerName: 'serverscom',
        providerVersion: '0.5.2'
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
    this._sbmFlavorModelId = config.sbmFlavorModelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arch - computed: true, optional: false, required: false
  public get arch() {
    return this.getStringAttribute('arch');
  }

  // filesystems - computed: true, optional: false, required: false
  public get filesystems() {
    return this.getListAttribute('filesystems');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
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

  // sbm_flavor_model_id - computed: false, optional: false, required: true
  private _sbmFlavorModelId?: number; 
  public get sbmFlavorModelId() {
    return this.getNumberAttribute('sbm_flavor_model_id');
  }
  public set sbmFlavorModelId(value: number) {
    this._sbmFlavorModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sbmFlavorModelIdInput() {
    return this._sbmFlavorModelId;
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
      id: cdktf.numberToTerraform(this._id),
      location_id: cdktf.numberToTerraform(this._locationId),
      sbm_flavor_model_id: cdktf.numberToTerraform(this._sbmFlavorModelId),
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
      sbm_flavor_model_id: {
        value: cdktf.numberToHclTerraform(this._sbmFlavorModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
