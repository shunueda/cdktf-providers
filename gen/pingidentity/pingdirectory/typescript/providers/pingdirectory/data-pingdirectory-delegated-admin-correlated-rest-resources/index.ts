// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_correlated_rest_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryDelegatedAdminCorrelatedRestResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * SCIM filter used when searching the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_correlated_rest_resources#filter DataPingdirectoryDelegatedAdminCorrelatedRestResources#filter}
  */
  readonly filter?: string;
  /**
  * Name of the parent REST Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_correlated_rest_resources#rest_resource_type_name DataPingdirectoryDelegatedAdminCorrelatedRestResources#rest_resource_type_name}
  */
  readonly restResourceTypeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_correlated_rest_resources pingdirectory_delegated_admin_correlated_rest_resources}
*/
export class DataPingdirectoryDelegatedAdminCorrelatedRestResources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_delegated_admin_correlated_rest_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryDelegatedAdminCorrelatedRestResources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryDelegatedAdminCorrelatedRestResources to import
  * @param importFromId The id of the existing DataPingdirectoryDelegatedAdminCorrelatedRestResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_correlated_rest_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryDelegatedAdminCorrelatedRestResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_delegated_admin_correlated_rest_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_correlated_rest_resources pingdirectory_delegated_admin_correlated_rest_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryDelegatedAdminCorrelatedRestResourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryDelegatedAdminCorrelatedRestResourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_delegated_admin_correlated_rest_resources',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._restResourceTypeName = config.restResourceTypeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // rest_resource_type_name - computed: false, optional: false, required: true
  private _restResourceTypeName?: string; 
  public get restResourceTypeName() {
    return this.getStringAttribute('rest_resource_type_name');
  }
  public set restResourceTypeName(value: string) {
    this._restResourceTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restResourceTypeNameInput() {
    return this._restResourceTypeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      rest_resource_type_name: cdktf.stringToTerraform(this._restResourceTypeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_resource_type_name: {
        value: cdktf.stringToHclTerraform(this._restResourceTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
