// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * ZITADEL checks if the org of the user has permission to this project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project#has_project_check Project#has_project_check}
  */
  readonly hasProjectCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project#org_id Project#org_id}
  */
  readonly orgId?: string;
  /**
  * Defines from where the private labeling should be triggered, supported values: PRIVATE_LABELING_SETTING_UNSPECIFIED, PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY, PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project#private_labeling_setting Project#private_labeling_setting}
  */
  readonly privateLabelingSetting?: string;
  /**
  * describes if roles of user should be added in token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project#project_role_assertion Project#project_role_assertion}
  */
  readonly projectRoleAssertion?: boolean | cdktf.IResolvable;
  /**
  * ZITADEL checks if the user has at least one on this project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project#project_role_check Project#project_role_check}
  */
  readonly projectRoleCheck?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project zitadel_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project zitadel_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_project',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hasProjectCheck = config.hasProjectCheck;
    this._id = config.id;
    this._name = config.name;
    this._orgId = config.orgId;
    this._privateLabelingSetting = config.privateLabelingSetting;
    this._projectRoleAssertion = config.projectRoleAssertion;
    this._projectRoleCheck = config.projectRoleCheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // has_project_check - computed: false, optional: true, required: false
  private _hasProjectCheck?: boolean | cdktf.IResolvable; 
  public get hasProjectCheck() {
    return this.getBooleanAttribute('has_project_check');
  }
  public set hasProjectCheck(value: boolean | cdktf.IResolvable) {
    this._hasProjectCheck = value;
  }
  public resetHasProjectCheck() {
    this._hasProjectCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasProjectCheckInput() {
    return this._hasProjectCheck;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // private_labeling_setting - computed: false, optional: true, required: false
  private _privateLabelingSetting?: string; 
  public get privateLabelingSetting() {
    return this.getStringAttribute('private_labeling_setting');
  }
  public set privateLabelingSetting(value: string) {
    this._privateLabelingSetting = value;
  }
  public resetPrivateLabelingSetting() {
    this._privateLabelingSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLabelingSettingInput() {
    return this._privateLabelingSetting;
  }

  // project_role_assertion - computed: false, optional: true, required: false
  private _projectRoleAssertion?: boolean | cdktf.IResolvable; 
  public get projectRoleAssertion() {
    return this.getBooleanAttribute('project_role_assertion');
  }
  public set projectRoleAssertion(value: boolean | cdktf.IResolvable) {
    this._projectRoleAssertion = value;
  }
  public resetProjectRoleAssertion() {
    this._projectRoleAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectRoleAssertionInput() {
    return this._projectRoleAssertion;
  }

  // project_role_check - computed: false, optional: true, required: false
  private _projectRoleCheck?: boolean | cdktf.IResolvable; 
  public get projectRoleCheck() {
    return this.getBooleanAttribute('project_role_check');
  }
  public set projectRoleCheck(value: boolean | cdktf.IResolvable) {
    this._projectRoleCheck = value;
  }
  public resetProjectRoleCheck() {
    this._projectRoleCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectRoleCheckInput() {
    return this._projectRoleCheck;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      has_project_check: cdktf.booleanToTerraform(this._hasProjectCheck),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      private_labeling_setting: cdktf.stringToTerraform(this._privateLabelingSetting),
      project_role_assertion: cdktf.booleanToTerraform(this._projectRoleAssertion),
      project_role_check: cdktf.booleanToTerraform(this._projectRoleCheck),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      has_project_check: {
        value: cdktf.booleanToHclTerraform(this._hasProjectCheck),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_labeling_setting: {
        value: cdktf.stringToHclTerraform(this._privateLabelingSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_role_assertion: {
        value: cdktf.booleanToHclTerraform(this._projectRoleAssertion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_role_check: {
        value: cdktf.booleanToHclTerraform(this._projectRoleCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
