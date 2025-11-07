// https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Group that should get the specified permissions. Changing this forces a new resource to be created. Cannot be used with `login_name` and `special_group_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permissions#group_name Permissions#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permissions#id Permissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the user that should get the specified permissions. Changing this forces a new resource to be created. Cannot be used with `group_name` and `special_group_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permissions#login_name Permissions#login_name}
  */
  readonly loginName?: string;
  /**
  * A list of permissions that should be applied. Possible values are: `admin`, `codeviewer`, `issueadmin`, `securityhotspotadmin`, `scan`, `user`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permissions#permissions Permissions#permissions}
  */
  readonly permissions: string[];
  /**
  * Specify if you want to apply project level permissions. Changing this forces a new resource to be created. Cannot be used with `special_group_name`, `template_id` and `template_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permissions#project_key Permissions#project_key}
  */
  readonly projectKey?: string;
  /**
  * The name of the Special Group that should get the specified permissions. Changing this forces a new resource to be created. Cannot be used with `login_name` and `group_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permissions#special_group_name Permissions#special_group_name}
  */
  readonly specialGroupName?: string;
  /**
  * Specify if you want to apply the permissions to a permission template. Changing this forces a new resource to be created. Cannot be used with `project_key` and `template_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permissions#template_id Permissions#template_id}
  */
  readonly templateId?: string;
  /**
  * Specify if you want to apply the permissions to a permission template. Changing this forces a new resource to be created. Cannot be used with `project_key` and `template_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permissions#template_name Permissions#template_name}
  */
  readonly templateName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permissions sonarqube_permissions}
*/
export class Permissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarqube_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Permissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Permissions to import
  * @param importFromId The id of the existing Permissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Permissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarqube_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permissions sonarqube_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: PermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarqube_permissions',
      terraformGeneratorMetadata: {
        providerName: 'sonarqube',
        providerVersion: '0.16.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupName = config.groupName;
    this._id = config.id;
    this._loginName = config.loginName;
    this._permissions = config.permissions;
    this._projectKey = config.projectKey;
    this._specialGroupName = config.specialGroupName;
    this._templateId = config.templateId;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // login_name - computed: false, optional: true, required: false
  private _loginName?: string; 
  public get loginName() {
    return this.getStringAttribute('login_name');
  }
  public set loginName(value: string) {
    this._loginName = value;
  }
  public resetLoginName() {
    this._loginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNameInput() {
    return this._loginName;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // special_group_name - computed: false, optional: true, required: false
  private _specialGroupName?: string; 
  public get specialGroupName() {
    return this.getStringAttribute('special_group_name');
  }
  public set specialGroupName(value: string) {
    this._specialGroupName = value;
  }
  public resetSpecialGroupName() {
    this._specialGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialGroupNameInput() {
    return this._specialGroupName;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      login_name: cdktf.stringToTerraform(this._loginName),
      permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
      project_key: cdktf.stringToTerraform(this._projectKey),
      special_group_name: cdktf.stringToTerraform(this._specialGroupName),
      template_id: cdktf.stringToTerraform(this._templateId),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_name: {
        value: cdktf.stringToHclTerraform(this._loginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      special_group_name: {
        value: cdktf.stringToHclTerraform(this._specialGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
