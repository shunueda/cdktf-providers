// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/pvs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixPvsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the PVS farm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/pvs#pvs_farm_name DataCitrixPvs#pvs_farm_name}
  */
  readonly pvsFarmName: string;
  /**
  * Name of the PVS site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/pvs#pvs_site_name DataCitrixPvs#pvs_site_name}
  */
  readonly pvsSiteName: string;
  /**
  * Name of the PVS store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/pvs#pvs_store_name DataCitrixPvs#pvs_store_name}
  */
  readonly pvsStoreName: string;
  /**
  * Name of the PVS vDisk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/pvs#pvs_vdisk_name DataCitrixPvs#pvs_vdisk_name}
  */
  readonly pvsVdiskName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/pvs citrix_pvs}
*/
export class DataCitrixPvs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_pvs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixPvs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixPvs to import
  * @param importFromId The id of the existing DataCitrixPvs that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/pvs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixPvs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_pvs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/pvs citrix_pvs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixPvsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCitrixPvsConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_pvs',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._pvsFarmName = config.pvsFarmName;
    this._pvsSiteName = config.pvsSiteName;
    this._pvsStoreName = config.pvsStoreName;
    this._pvsVdiskName = config.pvsVdiskName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // pvs_farm_name - computed: false, optional: false, required: true
  private _pvsFarmName?: string; 
  public get pvsFarmName() {
    return this.getStringAttribute('pvs_farm_name');
  }
  public set pvsFarmName(value: string) {
    this._pvsFarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pvsFarmNameInput() {
    return this._pvsFarmName;
  }

  // pvs_site_id - computed: true, optional: false, required: false
  public get pvsSiteId() {
    return this.getStringAttribute('pvs_site_id');
  }

  // pvs_site_name - computed: false, optional: false, required: true
  private _pvsSiteName?: string; 
  public get pvsSiteName() {
    return this.getStringAttribute('pvs_site_name');
  }
  public set pvsSiteName(value: string) {
    this._pvsSiteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pvsSiteNameInput() {
    return this._pvsSiteName;
  }

  // pvs_store_name - computed: false, optional: false, required: true
  private _pvsStoreName?: string; 
  public get pvsStoreName() {
    return this.getStringAttribute('pvs_store_name');
  }
  public set pvsStoreName(value: string) {
    this._pvsStoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pvsStoreNameInput() {
    return this._pvsStoreName;
  }

  // pvs_vdisk_id - computed: true, optional: false, required: false
  public get pvsVdiskId() {
    return this.getStringAttribute('pvs_vdisk_id');
  }

  // pvs_vdisk_name - computed: false, optional: false, required: true
  private _pvsVdiskName?: string; 
  public get pvsVdiskName() {
    return this.getStringAttribute('pvs_vdisk_name');
  }
  public set pvsVdiskName(value: string) {
    this._pvsVdiskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pvsVdiskNameInput() {
    return this._pvsVdiskName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pvs_farm_name: cdktf.stringToTerraform(this._pvsFarmName),
      pvs_site_name: cdktf.stringToTerraform(this._pvsSiteName),
      pvs_store_name: cdktf.stringToTerraform(this._pvsStoreName),
      pvs_vdisk_name: cdktf.stringToTerraform(this._pvsVdiskName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pvs_farm_name: {
        value: cdktf.stringToHclTerraform(this._pvsFarmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pvs_site_name: {
        value: cdktf.stringToHclTerraform(this._pvsSiteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pvs_store_name: {
        value: cdktf.stringToHclTerraform(this._pvsStoreName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pvs_vdisk_name: {
        value: cdktf.stringToHclTerraform(this._pvsVdiskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
