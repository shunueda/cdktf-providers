// https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceModVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#created_at WorkspaceModVariable#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#created_by WorkspaceModVariable#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#default_value WorkspaceModVariable#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#description WorkspaceModVariable#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#id WorkspaceModVariable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#mod_alias WorkspaceModVariable#mod_alias}
  */
  readonly modAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#name WorkspaceModVariable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#organization WorkspaceModVariable#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#setting_value WorkspaceModVariable#setting_value}
  */
  readonly settingValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#type WorkspaceModVariable#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#updated_at WorkspaceModVariable#updated_at}
  */
  readonly updatedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#updated_by WorkspaceModVariable#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#value WorkspaceModVariable#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#version_id WorkspaceModVariable#version_id}
  */
  readonly versionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#workspace_handle WorkspaceModVariable#workspace_handle}
  */
  readonly workspaceHandle: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable steampipecloud_workspace_mod_variable}
*/
export class WorkspaceModVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "steampipecloud_workspace_mod_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceModVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceModVariable to import
  * @param importFromId The id of the existing WorkspaceModVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceModVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "steampipecloud_workspace_mod_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_mod_variable steampipecloud_workspace_mod_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceModVariableConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceModVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'steampipecloud_workspace_mod_variable',
      terraformGeneratorMetadata: {
        providerName: 'steampipecloud',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdAt = config.createdAt;
    this._createdBy = config.createdBy;
    this._defaultValue = config.defaultValue;
    this._description = config.description;
    this._id = config.id;
    this._modAlias = config.modAlias;
    this._name = config.name;
    this._organization = config.organization;
    this._settingValue = config.settingValue;
    this._type = config.type;
    this._updatedAt = config.updatedAt;
    this._updatedBy = config.updatedBy;
    this._value = config.value;
    this._versionId = config.versionId;
    this._workspaceHandle = config.workspaceHandle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // mod_alias - computed: false, optional: false, required: true
  private _modAlias?: string; 
  public get modAlias() {
    return this.getStringAttribute('mod_alias');
  }
  public set modAlias(value: string) {
    this._modAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modAliasInput() {
    return this._modAlias;
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

  // organization - computed: true, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // setting_value - computed: true, optional: true, required: false
  private _settingValue?: string; 
  public get settingValue() {
    return this.getStringAttribute('setting_value');
  }
  public set settingValue(value: string) {
    this._settingValue = value;
  }
  public resetSettingValue() {
    this._settingValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingValueInput() {
    return this._settingValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // updated_by - computed: true, optional: true, required: false
  private _updatedBy?: string; 
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
  public set updatedBy(value: string) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: number; 
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }
  public set versionId(value: number) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // workspace_handle - computed: false, optional: false, required: true
  private _workspaceHandle?: string; 
  public get workspaceHandle() {
    return this.getStringAttribute('workspace_handle');
  }
  public set workspaceHandle(value: string) {
    this._workspaceHandle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceHandleInput() {
    return this._workspaceHandle;
  }

  // workspace_mod_variable_id - computed: true, optional: false, required: false
  public get workspaceModVariableId() {
    return this.getStringAttribute('workspace_mod_variable_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_at: cdktf.stringToTerraform(this._createdAt),
      created_by: cdktf.stringToTerraform(this._createdBy),
      default_value: cdktf.stringToTerraform(this._defaultValue),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      mod_alias: cdktf.stringToTerraform(this._modAlias),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      setting_value: cdktf.stringToTerraform(this._settingValue),
      type: cdktf.stringToTerraform(this._type),
      updated_at: cdktf.stringToTerraform(this._updatedAt),
      updated_by: cdktf.stringToTerraform(this._updatedBy),
      value: cdktf.stringToTerraform(this._value),
      version_id: cdktf.numberToTerraform(this._versionId),
      workspace_handle: cdktf.stringToTerraform(this._workspaceHandle),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_value: {
        value: cdktf.stringToHclTerraform(this._defaultValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      mod_alias: {
        value: cdktf.stringToHclTerraform(this._modAlias),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      setting_value: {
        value: cdktf.stringToHclTerraform(this._settingValue),
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
      updated_at: {
        value: cdktf.stringToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_by: {
        value: cdktf.stringToHclTerraform(this._updatedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_id: {
        value: cdktf.numberToHclTerraform(this._versionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workspace_handle: {
        value: cdktf.stringToHclTerraform(this._workspaceHandle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
