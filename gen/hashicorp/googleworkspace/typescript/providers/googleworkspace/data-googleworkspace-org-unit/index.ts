// https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/org_unit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleworkspaceOrgUnitConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique ID of the organizational unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/org_unit#org_unit_id DataGoogleworkspaceOrgUnit#org_unit_id}
  */
  readonly orgUnitId?: string;
  /**
  * The full path to the organizational unit. The orgUnitPath is a derived property. When listed, it is derived from parentOrgunitPath and organizational unit's name. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an orgUnitPath, either update the name of the organization or the parentOrgunitPath. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [chromeosdevices.update a user](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/org_unit#org_unit_path DataGoogleworkspaceOrgUnit#org_unit_path}
  */
  readonly orgUnitPath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/org_unit googleworkspace_org_unit}
*/
export class DataGoogleworkspaceOrgUnit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace_org_unit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleworkspaceOrgUnit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleworkspaceOrgUnit to import
  * @param importFromId The id of the existing DataGoogleworkspaceOrgUnit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/org_unit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleworkspaceOrgUnit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "googleworkspace_org_unit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/org_unit googleworkspace_org_unit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleworkspaceOrgUnitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleworkspaceOrgUnitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'googleworkspace_org_unit',
      terraformGeneratorMetadata: {
        providerName: 'googleworkspace',
        providerVersion: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._orgUnitId = config.orgUnitId;
    this._orgUnitPath = config.orgUnitPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_inheritance - computed: true, optional: false, required: false
  public get blockInheritance() {
    return this.getBooleanAttribute('block_inheritance');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_unit_id - computed: true, optional: true, required: false
  private _orgUnitId?: string; 
  public get orgUnitId() {
    return this.getStringAttribute('org_unit_id');
  }
  public set orgUnitId(value: string) {
    this._orgUnitId = value;
  }
  public resetOrgUnitId() {
    this._orgUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgUnitIdInput() {
    return this._orgUnitId;
  }

  // org_unit_path - computed: true, optional: true, required: false
  private _orgUnitPath?: string; 
  public get orgUnitPath() {
    return this.getStringAttribute('org_unit_path');
  }
  public set orgUnitPath(value: string) {
    this._orgUnitPath = value;
  }
  public resetOrgUnitPath() {
    this._orgUnitPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgUnitPathInput() {
    return this._orgUnitPath;
  }

  // parent_org_unit_id - computed: true, optional: false, required: false
  public get parentOrgUnitId() {
    return this.getStringAttribute('parent_org_unit_id');
  }

  // parent_org_unit_path - computed: true, optional: false, required: false
  public get parentOrgUnitPath() {
    return this.getStringAttribute('parent_org_unit_path');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      org_unit_id: cdktf.stringToTerraform(this._orgUnitId),
      org_unit_path: cdktf.stringToTerraform(this._orgUnitPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      org_unit_id: {
        value: cdktf.stringToHclTerraform(this._orgUnitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_unit_path: {
        value: cdktf.stringToHclTerraform(this._orgUnitPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
