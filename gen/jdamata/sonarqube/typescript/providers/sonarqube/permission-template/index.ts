// https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permission_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PermissionTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the template as the default. This can only be set for one template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permission_template#default PermissionTemplate#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Description of the Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permission_template#description PermissionTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permission_template#id PermissionTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Permission template to create. Do not use names with `/`. If needed, use `replace(var.permission_template_name, "/", "_")`. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permission_template#name PermissionTemplate#name}
  */
  readonly name: string;
  /**
  * The project key pattern. Must be a valid Java regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permission_template#project_key_pattern PermissionTemplate#project_key_pattern}
  */
  readonly projectKeyPattern?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permission_template sonarqube_permission_template}
*/
export class PermissionTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarqube_permission_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PermissionTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PermissionTemplate to import
  * @param importFromId The id of the existing PermissionTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permission_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PermissionTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarqube_permission_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/permission_template sonarqube_permission_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PermissionTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: PermissionTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarqube_permission_template',
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
    this._default = config.default;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._projectKeyPattern = config.projectKeyPattern;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // description - computed: false, optional: true, required: false
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

  // project_key_pattern - computed: false, optional: true, required: false
  private _projectKeyPattern?: string; 
  public get projectKeyPattern() {
    return this.getStringAttribute('project_key_pattern');
  }
  public set projectKeyPattern(value: string) {
    this._projectKeyPattern = value;
  }
  public resetProjectKeyPattern() {
    this._projectKeyPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyPatternInput() {
    return this._projectKeyPattern;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.booleanToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_key_pattern: cdktf.stringToTerraform(this._projectKeyPattern),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_key_pattern: {
        value: cdktf.stringToHclTerraform(this._projectKeyPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
