// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_resource_rights
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryDelegatedAdminResourceRightsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parent Delegated Admin Rights
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_resource_rights#delegated_admin_rights_name DataPingdirectoryDelegatedAdminResourceRights#delegated_admin_rights_name}
  */
  readonly delegatedAdminRightsName: string;
  /**
  * Specifies the resource type applicable to these Delegated Admin Resource Rights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_resource_rights#rest_resource_type DataPingdirectoryDelegatedAdminResourceRights#rest_resource_type}
  */
  readonly restResourceType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_resource_rights pingdirectory_delegated_admin_resource_rights}
*/
export class DataPingdirectoryDelegatedAdminResourceRights extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_delegated_admin_resource_rights";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryDelegatedAdminResourceRights resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryDelegatedAdminResourceRights to import
  * @param importFromId The id of the existing DataPingdirectoryDelegatedAdminResourceRights that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_resource_rights#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryDelegatedAdminResourceRights to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_delegated_admin_resource_rights", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_resource_rights pingdirectory_delegated_admin_resource_rights} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryDelegatedAdminResourceRightsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryDelegatedAdminResourceRightsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_delegated_admin_resource_rights',
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
    this._restResourceType = config.restResourceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_permission - computed: true, optional: false, required: false
  public get adminPermission() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_permission'));
  }

  // admin_scope - computed: true, optional: false, required: false
  public get adminScope() {
    return this.getStringAttribute('admin_scope');
  }

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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_subtree - computed: true, optional: false, required: false
  public get resourceSubtree() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_subtree'));
  }

  // resources_in_group - computed: true, optional: false, required: false
  public get resourcesInGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('resources_in_group'));
  }

  // rest_resource_type - computed: false, optional: false, required: true
  private _restResourceType?: string; 
  public get restResourceType() {
    return this.getStringAttribute('rest_resource_type');
  }
  public set restResourceType(value: string) {
    this._restResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restResourceTypeInput() {
    return this._restResourceType;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegated_admin_rights_name: cdktf.stringToTerraform(this._delegatedAdminRightsName),
      rest_resource_type: cdktf.stringToTerraform(this._restResourceType),
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
      rest_resource_type: {
        value: cdktf.stringToHclTerraform(this._restResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
