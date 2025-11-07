// https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/data-sources/data_access_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSatoriDataAccessControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * DAC's cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/data-sources/data_access_controller#cloud_provider DataSatoriDataAccessController#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * DAC's ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/data-sources/data_access_controller#id DataSatoriDataAccessController#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DAC's region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/data-sources/data_access_controller#region DataSatoriDataAccessController#region}
  */
  readonly region?: string;
  /**
  * DAC's type. The available values are: PRIVATE, PRIVATE_MANAGED or PUBLIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/data-sources/data_access_controller#type DataSatoriDataAccessController#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/data-sources/data_access_controller satori_data_access_controller}
*/
export class DataSatoriDataAccessController extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "satori_data_access_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSatoriDataAccessController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSatoriDataAccessController to import
  * @param importFromId The id of the existing DataSatoriDataAccessController that should be imported. Refer to the {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/data-sources/data_access_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSatoriDataAccessController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "satori_data_access_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/data-sources/data_access_controller satori_data_access_controller} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSatoriDataAccessControllerConfig
  */
  public constructor(scope: Construct, id: string, config: DataSatoriDataAccessControllerConfig) {
    super(scope, id, {
      terraformResourceType: 'satori_data_access_controller',
      terraformGeneratorMetadata: {
        providerName: 'satori',
        providerVersion: '0.2.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._id = config.id;
    this._region = config.region;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getListAttribute('ips');
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
