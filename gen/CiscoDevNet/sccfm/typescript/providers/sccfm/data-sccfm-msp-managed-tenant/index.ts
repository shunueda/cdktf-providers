// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/data-sources/msp_managed_tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSccfmMspManagedTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/data-sources/msp_managed_tenant#name DataSccfmMspManagedTenant#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/data-sources/msp_managed_tenant sccfm_msp_managed_tenant}
*/
export class DataSccfmMspManagedTenant extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_msp_managed_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSccfmMspManagedTenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSccfmMspManagedTenant to import
  * @param importFromId The id of the existing DataSccfmMspManagedTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/data-sources/msp_managed_tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSccfmMspManagedTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_msp_managed_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/data-sources/msp_managed_tenant sccfm_msp_managed_tenant} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSccfmMspManagedTenantConfig
  */
  public constructor(scope: Construct, id: string, config: DataSccfmMspManagedTenantConfig) {
    super(scope, id, {
      terraformResourceType: 'sccfm_msp_managed_tenant',
      terraformGeneratorMetadata: {
        providerName: 'sccfm',
        providerVersion: '0.3.0',
        providerVersionConstraint: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
