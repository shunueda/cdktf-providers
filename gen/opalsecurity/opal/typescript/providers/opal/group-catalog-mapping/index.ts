// https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group_catalog_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupCatalogMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional alias for the group mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group_catalog_mapping#alias GroupCatalogMapping#alias}
  */
  readonly alias?: string;
  /**
  * The ID of the Okta app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group_catalog_mapping#app_resource_id GroupCatalogMapping#app_resource_id}
  */
  readonly appResourceId: string;
  /**
  * The ID of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group_catalog_mapping#group_id GroupCatalogMapping#group_id}
  */
  readonly groupId: string;
  /**
  * Whether this mapping should be hidden from end users.
  * - **New mappings**: If not provided, defaults to `false`
  * - **Existing mappings**: If not provided, existing value is preserved (no change)
  * - **Explicit values**: If provided, value is updated to the specified boolean
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group_catalog_mapping#hidden_from_end_user GroupCatalogMapping#hidden_from_end_user}
  */
  readonly hiddenFromEndUser?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group_catalog_mapping opal_group_catalog_mapping}
*/
export class GroupCatalogMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_group_catalog_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupCatalogMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupCatalogMapping to import
  * @param importFromId The id of the existing GroupCatalogMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group_catalog_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupCatalogMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_group_catalog_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group_catalog_mapping opal_group_catalog_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupCatalogMappingConfig
  */
  public constructor(scope: Construct, id: string, config: GroupCatalogMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_group_catalog_mapping',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.3.3',
        providerVersionConstraint: '3.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._appResourceId = config.appResourceId;
    this._groupId = config.groupId;
    this._hiddenFromEndUser = config.hiddenFromEndUser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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

  // hidden_from_end_user - computed: true, optional: true, required: false
  private _hiddenFromEndUser?: boolean | cdktf.IResolvable; 
  public get hiddenFromEndUser() {
    return this.getBooleanAttribute('hidden_from_end_user');
  }
  public set hiddenFromEndUser(value: boolean | cdktf.IResolvable) {
    this._hiddenFromEndUser = value;
  }
  public resetHiddenFromEndUser() {
    this._hiddenFromEndUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenFromEndUserInput() {
    return this._hiddenFromEndUser;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      app_resource_id: cdktf.stringToTerraform(this._appResourceId),
      group_id: cdktf.stringToTerraform(this._groupId),
      hidden_from_end_user: cdktf.booleanToTerraform(this._hiddenFromEndUser),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      hidden_from_end_user: {
        value: cdktf.booleanToHclTerraform(this._hiddenFromEndUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
