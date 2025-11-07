// https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of pre-defined actions (READ_REPOSITORY, ANNOTATE_REPOSITORY, DEPLOY_CACHE_REPOSITORY, DELETE_OVERWRITE_REPOSITORY, MANAGE_XRAY_MD_REPOSITORY, READ_RELEASE_BUNDLE, ANNOTATE_RELEASE_BUNDLE, CREATE_RELEASE_BUNDLE, DISTRIBUTE_RELEASE_BUNDLE, DELETE_RELEASE_BUNDLE, MANAGE_XRAY_MD_RELEASE_BUNDLE, READ_BUILD, ANNOTATE_BUILD, DEPLOY_BUILD, DELETE_BUILD, MANAGE_XRAY_MD_BUILD, READ_SOURCES_PIPELINE, TRIGGER_PIPELINE, READ_INTEGRATIONS_PIPELINE, READ_POOLS_PIPELINE, MANAGE_INTEGRATIONS_PIPELINE, MANAGE_SOURCES_PIPELINE, MANAGE_POOLS_PIPELINE, TRIGGER_SECURITY, ISSUES_SECURITY, LICENCES_SECURITY, REPORTS_SECURITY, WATCHES_SECURITY, POLICIES_SECURITY, RULES_SECURITY, MANAGE_MEMBERS, MANAGE_RESOURCES)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/role#actions Role#actions}
  */
  readonly actions: string[];
  /**
  * A repository can be available in different environments. Members with roles defined in the set environment will have access to the repository. List of pre-defined environments (DEV, PROD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/role#environments Role#environments}
  */
  readonly environments: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * Project key for this environment. This field supports only 2 - 32 lowercase alphanumeric and hyphen characters. Must begin with a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/role#project_key Role#project_key}
  */
  readonly projectKey: string;
  /**
  * Type of role. Only "CUSTOM" is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/role#type Role#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/role project_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "project_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "project_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/role project_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'project_role',
      terraformGeneratorMetadata: {
        providerName: 'project',
        providerVersion: '1.9.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions = config.actions;
    this._environments = config.environments;
    this._name = config.name;
    this._projectKey = config.projectKey;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // environments - computed: false, optional: false, required: true
  private _environments?: string[]; 
  public get environments() {
    return cdktf.Fn.tolist(this.getListAttribute('environments'));
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._actions),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      name: cdktf.stringToTerraform(this._name),
      project_key: cdktf.stringToTerraform(this._projectKey),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._actions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
