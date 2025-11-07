// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/hypervisor_resource_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixHypervisorResourcePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the hypervisor to which the resource pool belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/hypervisor_resource_pool#hypervisor_name DataCitrixHypervisorResourcePool#hypervisor_name}
  */
  readonly hypervisorName: string;
  /**
  * GUID identifier of the hypervisor resource pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/hypervisor_resource_pool#id DataCitrixHypervisorResourcePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the hypervisor resource pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/hypervisor_resource_pool#name DataCitrixHypervisorResourcePool#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/hypervisor_resource_pool citrix_hypervisor_resource_pool}
*/
export class DataCitrixHypervisorResourcePool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_hypervisor_resource_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixHypervisorResourcePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixHypervisorResourcePool to import
  * @param importFromId The id of the existing DataCitrixHypervisorResourcePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/hypervisor_resource_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixHypervisorResourcePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_hypervisor_resource_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/hypervisor_resource_pool citrix_hypervisor_resource_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixHypervisorResourcePoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataCitrixHypervisorResourcePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_hypervisor_resource_pool',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hypervisorName = config.hypervisorName;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hypervisor_name - computed: false, optional: false, required: true
  private _hypervisorName?: string; 
  public get hypervisorName() {
    return this.getStringAttribute('hypervisor_name');
  }
  public set hypervisorName(value: string) {
    this._hypervisorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorNameInput() {
    return this._hypervisorName;
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

  // networks - computed: true, optional: false, required: false
  public get networks() {
    return this.getListAttribute('networks');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hypervisor_name: cdktf.stringToTerraform(this._hypervisorName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hypervisor_name: {
        value: cdktf.stringToHclTerraform(this._hypervisorName),
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
