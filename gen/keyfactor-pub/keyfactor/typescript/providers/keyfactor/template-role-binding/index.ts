// https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/resources/template_role_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateRoleBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * An string associated with a Keyfactor security role being attached. This is just the name field found on Keyfactor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/resources/template_role_binding#role_name TemplateRoleBinding#role_name}
  */
  readonly roleName: string;
  /**
  * A list of certificate template short name in Keyfactor that the role will be attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/resources/template_role_binding#template_short_names TemplateRoleBinding#template_short_names}
  */
  readonly templateShortNames?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/resources/template_role_binding keyfactor_template_role_binding}
*/
export class TemplateRoleBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyfactor_template_role_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateRoleBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateRoleBinding to import
  * @param importFromId The id of the existing TemplateRoleBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/resources/template_role_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateRoleBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyfactor_template_role_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/resources/template_role_binding keyfactor_template_role_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateRoleBindingConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateRoleBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'keyfactor_template_role_binding',
      terraformGeneratorMetadata: {
        providerName: 'keyfactor',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._roleName = config.roleName;
    this._templateShortNames = config.templateShortNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // template_short_names - computed: false, optional: true, required: false
  private _templateShortNames?: string[]; 
  public get templateShortNames() {
    return this.getListAttribute('template_short_names');
  }
  public set templateShortNames(value: string[]) {
    this._templateShortNames = value;
  }
  public resetTemplateShortNames() {
    this._templateShortNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateShortNamesInput() {
    return this._templateShortNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      role_name: cdktf.stringToTerraform(this._roleName),
      template_short_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._templateShortNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_short_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._templateShortNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
