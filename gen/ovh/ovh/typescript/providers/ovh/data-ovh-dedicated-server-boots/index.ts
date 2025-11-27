// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server_boots
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhDedicatedServerBootsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter the value of bootType property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server_boots#boot_type DataOvhDedicatedServerBoots#boot_type}
  */
  readonly bootType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server_boots#id DataOvhDedicatedServerBoots#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter the value of kernel property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server_boots#kernel DataOvhDedicatedServerBoots#kernel}
  */
  readonly kernel?: string;
  /**
  * The internal name of your dedicated server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server_boots#service_name DataOvhDedicatedServerBoots#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server_boots ovh_dedicated_server_boots}
*/
export class DataOvhDedicatedServerBoots extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_dedicated_server_boots";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhDedicatedServerBoots resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhDedicatedServerBoots to import
  * @param importFromId The id of the existing DataOvhDedicatedServerBoots that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server_boots#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhDedicatedServerBoots to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_dedicated_server_boots", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server_boots ovh_dedicated_server_boots} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhDedicatedServerBootsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhDedicatedServerBootsConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_dedicated_server_boots',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootType = config.bootType;
    this._id = config.id;
    this._kernel = config.kernel;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_type - computed: false, optional: true, required: false
  private _bootType?: string; 
  public get bootType() {
    return this.getStringAttribute('boot_type');
  }
  public set bootType(value: string) {
    this._bootType = value;
  }
  public resetBootType() {
    this._bootType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootTypeInput() {
    return this._bootType;
  }

  // id - computed: true, optional: true, required: false
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

  // kernel - computed: false, optional: true, required: false
  private _kernel?: string; 
  public get kernel() {
    return this.getStringAttribute('kernel');
  }
  public set kernel(value: string) {
    this._kernel = value;
  }
  public resetKernel() {
    this._kernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelInput() {
    return this._kernel;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getNumberListAttribute('result');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      boot_type: cdktf.stringToTerraform(this._bootType),
      id: cdktf.stringToTerraform(this._id),
      kernel: cdktf.stringToTerraform(this._kernel),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boot_type: {
        value: cdktf.stringToHclTerraform(this._bootType),
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
      kernel: {
        value: cdktf.stringToHclTerraform(this._kernel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
