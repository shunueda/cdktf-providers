// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktapamGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * If defined, results only contain resources that include the specified value in the `name` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/groups#contains DataOktapamGroups#contains}
  */
  readonly contains?: string;
  /**
  * If `true`, results only include resources that have enabled Disconnected Mode. NOTE: This is only available if the ASA Team has the Disconnected Mode Beta feature enabled; contact support@okta.com if you wish to participate in the Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/groups#disconnected_mode_on_only DataOktapamGroups#disconnected_mode_on_only}
  */
  readonly disconnectedModeOnOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/groups#id DataOktapamGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If `true`, results also include deleted resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/groups#include_deleted DataOktapamGroups#include_deleted}
  */
  readonly includeDeleted?: boolean | cdktf.IResolvable;
  /**
  * If `true`, results only include deleted resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/groups#only_include_deleted DataOktapamGroups#only_include_deleted}
  */
  readonly onlyIncludeDeleted?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/groups oktapam_groups}
*/
export class DataOktapamGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktapamGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktapamGroups to import
  * @param importFromId The id of the existing DataOktapamGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktapamGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/groups oktapam_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktapamGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktapamGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oktapam_groups',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contains = config.contains;
    this._disconnectedModeOnOnly = config.disconnectedModeOnOnly;
    this._id = config.id;
    this._includeDeleted = config.includeDeleted;
    this._onlyIncludeDeleted = config.onlyIncludeDeleted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // disconnected_mode_on_only - computed: false, optional: true, required: false
  private _disconnectedModeOnOnly?: boolean | cdktf.IResolvable; 
  public get disconnectedModeOnOnly() {
    return this.getBooleanAttribute('disconnected_mode_on_only');
  }
  public set disconnectedModeOnOnly(value: boolean | cdktf.IResolvable) {
    this._disconnectedModeOnOnly = value;
  }
  public resetDisconnectedModeOnOnly() {
    this._disconnectedModeOnOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectedModeOnOnlyInput() {
    return this._disconnectedModeOnOnly;
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

  // include_deleted - computed: false, optional: true, required: false
  private _includeDeleted?: boolean | cdktf.IResolvable; 
  public get includeDeleted() {
    return this.getBooleanAttribute('include_deleted');
  }
  public set includeDeleted(value: boolean | cdktf.IResolvable) {
    this._includeDeleted = value;
  }
  public resetIncludeDeleted() {
    this._includeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedInput() {
    return this._includeDeleted;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // only_include_deleted - computed: false, optional: true, required: false
  private _onlyIncludeDeleted?: boolean | cdktf.IResolvable; 
  public get onlyIncludeDeleted() {
    return this.getBooleanAttribute('only_include_deleted');
  }
  public set onlyIncludeDeleted(value: boolean | cdktf.IResolvable) {
    this._onlyIncludeDeleted = value;
  }
  public resetOnlyIncludeDeleted() {
    this._onlyIncludeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyIncludeDeletedInput() {
    return this._onlyIncludeDeleted;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contains: cdktf.stringToTerraform(this._contains),
      disconnected_mode_on_only: cdktf.booleanToTerraform(this._disconnectedModeOnOnly),
      id: cdktf.stringToTerraform(this._id),
      include_deleted: cdktf.booleanToTerraform(this._includeDeleted),
      only_include_deleted: cdktf.booleanToTerraform(this._onlyIncludeDeleted),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contains: {
        value: cdktf.stringToHclTerraform(this._contains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disconnected_mode_on_only: {
        value: cdktf.booleanToHclTerraform(this._disconnectedModeOnOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_deleted: {
        value: cdktf.booleanToHclTerraform(this._includeDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      only_include_deleted: {
        value: cdktf.booleanToHclTerraform(this._onlyIncludeDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
