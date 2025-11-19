// https://registry.terraform.io/providers/files-com/files/0.1.388/docs/data-sources/user_lifecycle_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesUserLifecycleRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * User Lifecycle Rule ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/data-sources/user_lifecycle_rule#id DataFilesUserLifecycleRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/data-sources/user_lifecycle_rule files_user_lifecycle_rule}
*/
export class DataFilesUserLifecycleRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_user_lifecycle_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesUserLifecycleRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesUserLifecycleRule to import
  * @param importFromId The id of the existing DataFilesUserLifecycleRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/data-sources/user_lifecycle_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesUserLifecycleRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_user_lifecycle_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/data-sources/user_lifecycle_rule files_user_lifecycle_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesUserLifecycleRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesUserLifecycleRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'files_user_lifecycle_rule',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.388',
        providerVersionConstraint: '0.1.388'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // authentication_method - computed: true, optional: false, required: false
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }

  // group_ids - computed: true, optional: false, required: false
  public get groupIds() {
    return this.getNumberListAttribute('group_ids');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inactivity_days - computed: true, optional: false, required: false
  public get inactivityDays() {
    return this.getNumberAttribute('inactivity_days');
  }

  // include_folder_admins - computed: true, optional: false, required: false
  public get includeFolderAdmins() {
    return this.getBooleanAttribute('include_folder_admins');
  }

  // include_site_admins - computed: true, optional: false, required: false
  public get includeSiteAdmins() {
    return this.getBooleanAttribute('include_site_admins');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // partner_tag - computed: true, optional: false, required: false
  public get partnerTag() {
    return this.getStringAttribute('partner_tag');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }

  // user_state - computed: true, optional: false, required: false
  public get userState() {
    return this.getStringAttribute('user_state');
  }

  // user_tag - computed: true, optional: false, required: false
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
