// https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/group_catalog_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpalGroupCatalogMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Okta app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/group_catalog_mapping#app_resource_id DataOpalGroupCatalogMapping#app_resource_id}
  */
  readonly appResourceId: string;
  /**
  * The ID of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/group_catalog_mapping#group_id DataOpalGroupCatalogMapping#group_id}
  */
  readonly groupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/group_catalog_mapping opal_group_catalog_mapping}
*/
export class DataOpalGroupCatalogMapping extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_group_catalog_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpalGroupCatalogMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpalGroupCatalogMapping to import
  * @param importFromId The id of the existing DataOpalGroupCatalogMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/group_catalog_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpalGroupCatalogMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_group_catalog_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/group_catalog_mapping opal_group_catalog_mapping} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpalGroupCatalogMappingConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpalGroupCatalogMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_group_catalog_mapping',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appResourceId = config.appResourceId;
    this._groupId = config.groupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // app_resource_id - computed: false, optional: false, required: true
  private _appResourceId?: string; 
  public get appResourceId() {
    return this.getStringAttribute('app_resource_id');
  }
  public set appResourceId(value: string) {
    this._appResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appResourceIdInput() {
    return this._appResourceId;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // hidden_from_end_user - computed: true, optional: false, required: false
  public get hiddenFromEndUser() {
    return this.getBooleanAttribute('hidden_from_end_user');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_resource_id: cdktf.stringToTerraform(this._appResourceId),
      group_id: cdktf.stringToTerraform(this._groupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_resource_id: {
        value: cdktf.stringToHclTerraform(this._appResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
