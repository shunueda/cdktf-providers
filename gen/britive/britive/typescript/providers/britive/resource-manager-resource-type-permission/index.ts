// https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceManagerResourceTypePermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The inline check-in code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#checkin_code ResourceManagerResourceTypePermission#checkin_code}
  */
  readonly checkinCode?: string;
  /**
  * The file path for check-in code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#checkin_code_file ResourceManagerResourceTypePermission#checkin_code_file}
  */
  readonly checkinCodeFile?: string;
  /**
  * The check-in time limit in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#checkin_time_limit ResourceManagerResourceTypePermission#checkin_time_limit}
  */
  readonly checkinTimeLimit?: number;
  /**
  * The inline check-out code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#checkout_code ResourceManagerResourceTypePermission#checkout_code}
  */
  readonly checkoutCode?: string;
  /**
  * The file path for check-out code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#checkout_code_file ResourceManagerResourceTypePermission#checkout_code_file}
  */
  readonly checkoutCodeFile?: string;
  /**
  * The check-out time limit in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#checkout_time_limit ResourceManagerResourceTypePermission#checkout_time_limit}
  */
  readonly checkoutTimeLimit?: number;
  /**
  * The inline code language. Select one of Test, Batch, Node, PoerShell, Python, Shell.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#code_language ResourceManagerResourceTypePermission#code_language}
  */
  readonly codeLanguage?: string;
  /**
  * The description of the permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#description ResourceManagerResourceTypePermission#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#id ResourceManagerResourceTypePermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates if the permission is a draft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#is_draft ResourceManagerResourceTypePermission#is_draft}
  */
  readonly isDraft?: boolean | cdktf.IResolvable;
  /**
  * The name of the permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#name ResourceManagerResourceTypePermission#name}
  */
  readonly name: string;
  /**
  * The ID of the associated resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#resource_type_id ResourceManagerResourceTypePermission#resource_type_id}
  */
  readonly resourceTypeId: string;
  /**
  * List of response template names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#response_templates ResourceManagerResourceTypePermission#response_templates}
  */
  readonly responseTemplates?: string[];
  /**
  * Indicates if original credentials should be shown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#show_orig_creds ResourceManagerResourceTypePermission#show_orig_creds}
  */
  readonly showOrigCreds?: boolean | cdktf.IResolvable;
  /**
  * List of variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#variables ResourceManagerResourceTypePermission#variables}
  */
  readonly variables?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission britive_resource_manager_resource_type_permission}
*/
export class ResourceManagerResourceTypePermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_resource_manager_resource_type_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceManagerResourceTypePermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceManagerResourceTypePermission to import
  * @param importFromId The id of the existing ResourceManagerResourceTypePermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceManagerResourceTypePermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_resource_manager_resource_type_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/resource_manager_resource_type_permission britive_resource_manager_resource_type_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceManagerResourceTypePermissionConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceManagerResourceTypePermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_resource_manager_resource_type_permission',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.4',
        providerVersionConstraint: '2.2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkinCode = config.checkinCode;
    this._checkinCodeFile = config.checkinCodeFile;
    this._checkinTimeLimit = config.checkinTimeLimit;
    this._checkoutCode = config.checkoutCode;
    this._checkoutCodeFile = config.checkoutCodeFile;
    this._checkoutTimeLimit = config.checkoutTimeLimit;
    this._codeLanguage = config.codeLanguage;
    this._description = config.description;
    this._id = config.id;
    this._isDraft = config.isDraft;
    this._name = config.name;
    this._resourceTypeId = config.resourceTypeId;
    this._responseTemplates = config.responseTemplates;
    this._showOrigCreds = config.showOrigCreds;
    this._variables = config.variables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checkin_code - computed: false, optional: true, required: false
  private _checkinCode?: string; 
  public get checkinCode() {
    return this.getStringAttribute('checkin_code');
  }
  public set checkinCode(value: string) {
    this._checkinCode = value;
  }
  public resetCheckinCode() {
    this._checkinCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkinCodeInput() {
    return this._checkinCode;
  }

  // checkin_code_file - computed: false, optional: true, required: false
  private _checkinCodeFile?: string; 
  public get checkinCodeFile() {
    return this.getStringAttribute('checkin_code_file');
  }
  public set checkinCodeFile(value: string) {
    this._checkinCodeFile = value;
  }
  public resetCheckinCodeFile() {
    this._checkinCodeFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkinCodeFileInput() {
    return this._checkinCodeFile;
  }

  // checkin_code_file_hash - computed: true, optional: false, required: false
  public get checkinCodeFileHash() {
    return this.getStringAttribute('checkin_code_file_hash');
  }

  // checkin_file_name - computed: true, optional: false, required: false
  public get checkinFileName() {
    return this.getStringAttribute('checkin_file_name');
  }

  // checkin_time_limit - computed: false, optional: true, required: false
  private _checkinTimeLimit?: number; 
  public get checkinTimeLimit() {
    return this.getNumberAttribute('checkin_time_limit');
  }
  public set checkinTimeLimit(value: number) {
    this._checkinTimeLimit = value;
  }
  public resetCheckinTimeLimit() {
    this._checkinTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkinTimeLimitInput() {
    return this._checkinTimeLimit;
  }

  // checkout_code - computed: false, optional: true, required: false
  private _checkoutCode?: string; 
  public get checkoutCode() {
    return this.getStringAttribute('checkout_code');
  }
  public set checkoutCode(value: string) {
    this._checkoutCode = value;
  }
  public resetCheckoutCode() {
    this._checkoutCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkoutCodeInput() {
    return this._checkoutCode;
  }

  // checkout_code_file - computed: false, optional: true, required: false
  private _checkoutCodeFile?: string; 
  public get checkoutCodeFile() {
    return this.getStringAttribute('checkout_code_file');
  }
  public set checkoutCodeFile(value: string) {
    this._checkoutCodeFile = value;
  }
  public resetCheckoutCodeFile() {
    this._checkoutCodeFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkoutCodeFileInput() {
    return this._checkoutCodeFile;
  }

  // checkout_code_file_hash - computed: true, optional: false, required: false
  public get checkoutCodeFileHash() {
    return this.getStringAttribute('checkout_code_file_hash');
  }

  // checkout_file_name - computed: true, optional: false, required: false
  public get checkoutFileName() {
    return this.getStringAttribute('checkout_file_name');
  }

  // checkout_time_limit - computed: false, optional: true, required: false
  private _checkoutTimeLimit?: number; 
  public get checkoutTimeLimit() {
    return this.getNumberAttribute('checkout_time_limit');
  }
  public set checkoutTimeLimit(value: number) {
    this._checkoutTimeLimit = value;
  }
  public resetCheckoutTimeLimit() {
    this._checkoutTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkoutTimeLimitInput() {
    return this._checkoutTimeLimit;
  }

  // code_language - computed: false, optional: true, required: false
  private _codeLanguage?: string; 
  public get codeLanguage() {
    return this.getStringAttribute('code_language');
  }
  public set codeLanguage(value: string) {
    this._codeLanguage = value;
  }
  public resetCodeLanguage() {
    this._codeLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeLanguageInput() {
    return this._codeLanguage;
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

  // inline_file_exists - computed: true, optional: false, required: false
  public get inlineFileExists() {
    return this.getBooleanAttribute('inline_file_exists');
  }

  // is_draft - computed: false, optional: true, required: false
  private _isDraft?: boolean | cdktf.IResolvable; 
  public get isDraft() {
    return this.getBooleanAttribute('is_draft');
  }
  public set isDraft(value: boolean | cdktf.IResolvable) {
    this._isDraft = value;
  }
  public resetIsDraft() {
    this._isDraft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDraftInput() {
    return this._isDraft;
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

  // permission_id - computed: true, optional: false, required: false
  public get permissionId() {
    return this.getStringAttribute('permission_id');
  }

  // resource_type_id - computed: false, optional: false, required: true
  private _resourceTypeId?: string; 
  public get resourceTypeId() {
    return this.getStringAttribute('resource_type_id');
  }
  public set resourceTypeId(value: string) {
    this._resourceTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeIdInput() {
    return this._resourceTypeId;
  }

  // response_templates - computed: false, optional: true, required: false
  private _responseTemplates?: string[]; 
  public get responseTemplates() {
    return cdktf.Fn.tolist(this.getListAttribute('response_templates'));
  }
  public set responseTemplates(value: string[]) {
    this._responseTemplates = value;
  }
  public resetResponseTemplates() {
    this._responseTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTemplatesInput() {
    return this._responseTemplates;
  }

  // show_orig_creds - computed: false, optional: true, required: false
  private _showOrigCreds?: boolean | cdktf.IResolvable; 
  public get showOrigCreds() {
    return this.getBooleanAttribute('show_orig_creds');
  }
  public set showOrigCreds(value: boolean | cdktf.IResolvable) {
    this._showOrigCreds = value;
  }
  public resetShowOrigCreds() {
    this._showOrigCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showOrigCredsInput() {
    return this._showOrigCreds;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: string[]; 
  public get variables() {
    return cdktf.Fn.tolist(this.getListAttribute('variables'));
  }
  public set variables(value: string[]) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      checkin_code: cdktf.stringToTerraform(this._checkinCode),
      checkin_code_file: cdktf.stringToTerraform(this._checkinCodeFile),
      checkin_time_limit: cdktf.numberToTerraform(this._checkinTimeLimit),
      checkout_code: cdktf.stringToTerraform(this._checkoutCode),
      checkout_code_file: cdktf.stringToTerraform(this._checkoutCodeFile),
      checkout_time_limit: cdktf.numberToTerraform(this._checkoutTimeLimit),
      code_language: cdktf.stringToTerraform(this._codeLanguage),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_draft: cdktf.booleanToTerraform(this._isDraft),
      name: cdktf.stringToTerraform(this._name),
      resource_type_id: cdktf.stringToTerraform(this._resourceTypeId),
      response_templates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseTemplates),
      show_orig_creds: cdktf.booleanToTerraform(this._showOrigCreds),
      variables: cdktf.listMapper(cdktf.stringToTerraform, false)(this._variables),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      checkin_code: {
        value: cdktf.stringToHclTerraform(this._checkinCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      checkin_code_file: {
        value: cdktf.stringToHclTerraform(this._checkinCodeFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      checkin_time_limit: {
        value: cdktf.numberToHclTerraform(this._checkinTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      checkout_code: {
        value: cdktf.stringToHclTerraform(this._checkoutCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      checkout_code_file: {
        value: cdktf.stringToHclTerraform(this._checkoutCodeFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      checkout_time_limit: {
        value: cdktf.numberToHclTerraform(this._checkoutTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      code_language: {
        value: cdktf.stringToHclTerraform(this._codeLanguage),
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
      is_draft: {
        value: cdktf.booleanToHclTerraform(this._isDraft),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type_id: {
        value: cdktf.stringToHclTerraform(this._resourceTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_templates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseTemplates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      show_orig_creds: {
        value: cdktf.booleanToHclTerraform(this._showOrigCreds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      variables: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._variables),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
