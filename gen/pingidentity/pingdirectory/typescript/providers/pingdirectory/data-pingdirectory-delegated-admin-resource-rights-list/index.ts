// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_resource_rights_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryDelegatedAdminResourceRightsListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parent Delegated Admin Rights
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_resource_rights_list#delegated_admin_rights_name DataPingdirectoryDelegatedAdminResourceRightsList#delegated_admin_rights_name}
  */
  readonly delegatedAdminRightsName: string;
  /**
  * SCIM filter used when searching the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_resource_rights_list#filter DataPingdirectoryDelegatedAdminResourceRightsList#filter}
  */
  readonly filter?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_resource_rights_list pingdirectory_delegated_admin_resource_rights_list}
*/
export class DataPingdirectoryDelegatedAdminResourceRightsList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_delegated_admin_resource_rights_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryDelegatedAdminResourceRightsList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryDelegatedAdminResourceRightsList to import
  * @param importFromId The id of the existing DataPingdirectoryDelegatedAdminResourceRightsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_resource_rights_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryDelegatedAdminResourceRightsList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_delegated_admin_resource_rights_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_resource_rights_list pingdirectory_delegated_admin_resource_rights_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryDelegatedAdminResourceRightsListConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryDelegatedAdminResourceRightsListConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_delegated_admin_resource_rights_list',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delegatedAdminRightsName = config.delegatedAdminRightsName;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delegated_admin_rights_name - computed: false, optional: false, required: true
  private _delegatedAdminRightsName?: string; 
  public get delegatedAdminRightsName() {
    return this.getStringAttribute('delegated_admin_rights_name');
  }
  public set delegatedAdminRightsName(value: string) {
    this._delegatedAdminRightsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedAdminRightsNameInput() {
    return this._delegatedAdminRightsName;
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegated_admin_rights_name: cdktf.stringToTerraform(this._delegatedAdminRightsName),
      filter: cdktf.stringToTerraform(this._filter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegated_admin_rights_name: {
        value: cdktf.stringToHclTerraform(this._delegatedAdminRightsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
