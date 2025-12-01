// https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#compose_file_path CustomTemplate#compose_file_path}
  */
  readonly composeFilePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#description CustomTemplate#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#edge_template CustomTemplate#edge_template}
  */
  readonly edgeTemplate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#file_content CustomTemplate#file_content}
  */
  readonly fileContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#file_path CustomTemplate#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#id CustomTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#is_compose_format CustomTemplate#is_compose_format}
  */
  readonly isComposeFormat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#logo CustomTemplate#logo}
  */
  readonly logo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#note CustomTemplate#note}
  */
  readonly note: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#platform CustomTemplate#platform}
  */
  readonly platform: number;
  /**
  * Enable authentication for the Git repository (default: false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#repository_authentication CustomTemplate#repository_authentication}
  */
  readonly repositoryAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#repository_password CustomTemplate#repository_password}
  */
  readonly repositoryPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#repository_reference CustomTemplate#repository_reference}
  */
  readonly repositoryReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#repository_url CustomTemplate#repository_url}
  */
  readonly repositoryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#repository_username CustomTemplate#repository_username}
  */
  readonly repositoryUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#title CustomTemplate#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#tlsskip_verify CustomTemplate#tlsskip_verify}
  */
  readonly tlsskipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#type CustomTemplate#type}
  */
  readonly type: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#variables CustomTemplate#variables}
  */
  readonly variables?: { [key: string]: string }[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template portainer_custom_template}
*/
export class CustomTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_custom_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomTemplate to import
  * @param importFromId The id of the existing CustomTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_custom_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/custom_template portainer_custom_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CustomTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_custom_template',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.20.0',
        providerVersionConstraint: '1.20.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._composeFilePath = config.composeFilePath;
    this._description = config.description;
    this._edgeTemplate = config.edgeTemplate;
    this._fileContent = config.fileContent;
    this._filePath = config.filePath;
    this._id = config.id;
    this._isComposeFormat = config.isComposeFormat;
    this._logo = config.logo;
    this._note = config.note;
    this._platform = config.platform;
    this._repositoryAuthentication = config.repositoryAuthentication;
    this._repositoryPassword = config.repositoryPassword;
    this._repositoryReference = config.repositoryReference;
    this._repositoryUrl = config.repositoryUrl;
    this._repositoryUsername = config.repositoryUsername;
    this._title = config.title;
    this._tlsskipVerify = config.tlsskipVerify;
    this._type = config.type;
    this._variables = config.variables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compose_file_path - computed: false, optional: true, required: false
  private _composeFilePath?: string; 
  public get composeFilePath() {
    return this.getStringAttribute('compose_file_path');
  }
  public set composeFilePath(value: string) {
    this._composeFilePath = value;
  }
  public resetComposeFilePath() {
    this._composeFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get composeFilePathInput() {
    return this._composeFilePath;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // edge_template - computed: false, optional: true, required: false
  private _edgeTemplate?: boolean | cdktf.IResolvable; 
  public get edgeTemplate() {
    return this.getBooleanAttribute('edge_template');
  }
  public set edgeTemplate(value: boolean | cdktf.IResolvable) {
    this._edgeTemplate = value;
  }
  public resetEdgeTemplate() {
    this._edgeTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeTemplateInput() {
    return this._edgeTemplate;
  }

  // file_content - computed: false, optional: true, required: false
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  public resetFileContent() {
    this._fileContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
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

  // is_compose_format - computed: false, optional: true, required: false
  private _isComposeFormat?: boolean | cdktf.IResolvable; 
  public get isComposeFormat() {
    return this.getBooleanAttribute('is_compose_format');
  }
  public set isComposeFormat(value: boolean | cdktf.IResolvable) {
    this._isComposeFormat = value;
  }
  public resetIsComposeFormat() {
    this._isComposeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isComposeFormatInput() {
    return this._isComposeFormat;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // note - computed: false, optional: false, required: true
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // platform - computed: false, optional: false, required: true
  private _platform?: number; 
  public get platform() {
    return this.getNumberAttribute('platform');
  }
  public set platform(value: number) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // repository_authentication - computed: false, optional: true, required: false
  private _repositoryAuthentication?: boolean | cdktf.IResolvable; 
  public get repositoryAuthentication() {
    return this.getBooleanAttribute('repository_authentication');
  }
  public set repositoryAuthentication(value: boolean | cdktf.IResolvable) {
    this._repositoryAuthentication = value;
  }
  public resetRepositoryAuthentication() {
    this._repositoryAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAuthenticationInput() {
    return this._repositoryAuthentication;
  }

  // repository_password - computed: false, optional: true, required: false
  private _repositoryPassword?: string; 
  public get repositoryPassword() {
    return this.getStringAttribute('repository_password');
  }
  public set repositoryPassword(value: string) {
    this._repositoryPassword = value;
  }
  public resetRepositoryPassword() {
    this._repositoryPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPasswordInput() {
    return this._repositoryPassword;
  }

  // repository_reference - computed: false, optional: true, required: false
  private _repositoryReference?: string; 
  public get repositoryReference() {
    return this.getStringAttribute('repository_reference');
  }
  public set repositoryReference(value: string) {
    this._repositoryReference = value;
  }
  public resetRepositoryReference() {
    this._repositoryReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryReferenceInput() {
    return this._repositoryReference;
  }

  // repository_url - computed: false, optional: true, required: false
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  public resetRepositoryUrl() {
    this._repositoryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }

  // repository_username - computed: false, optional: true, required: false
  private _repositoryUsername?: string; 
  public get repositoryUsername() {
    return this.getStringAttribute('repository_username');
  }
  public set repositoryUsername(value: string) {
    this._repositoryUsername = value;
  }
  public resetRepositoryUsername() {
    this._repositoryUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUsernameInput() {
    return this._repositoryUsername;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // tlsskip_verify - computed: false, optional: true, required: false
  private _tlsskipVerify?: boolean | cdktf.IResolvable; 
  public get tlsskipVerify() {
    return this.getBooleanAttribute('tlsskip_verify');
  }
  public set tlsskipVerify(value: boolean | cdktf.IResolvable) {
    this._tlsskipVerify = value;
  }
  public resetTlsskipVerify() {
    this._tlsskipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsskipVerifyInput() {
    return this._tlsskipVerify;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get variables() {
    return this.interpolationForAttribute('variables');
  }
  public set variables(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compose_file_path: cdktf.stringToTerraform(this._composeFilePath),
      description: cdktf.stringToTerraform(this._description),
      edge_template: cdktf.booleanToTerraform(this._edgeTemplate),
      file_content: cdktf.stringToTerraform(this._fileContent),
      file_path: cdktf.stringToTerraform(this._filePath),
      id: cdktf.stringToTerraform(this._id),
      is_compose_format: cdktf.booleanToTerraform(this._isComposeFormat),
      logo: cdktf.stringToTerraform(this._logo),
      note: cdktf.stringToTerraform(this._note),
      platform: cdktf.numberToTerraform(this._platform),
      repository_authentication: cdktf.booleanToTerraform(this._repositoryAuthentication),
      repository_password: cdktf.stringToTerraform(this._repositoryPassword),
      repository_reference: cdktf.stringToTerraform(this._repositoryReference),
      repository_url: cdktf.stringToTerraform(this._repositoryUrl),
      repository_username: cdktf.stringToTerraform(this._repositoryUsername),
      title: cdktf.stringToTerraform(this._title),
      tlsskip_verify: cdktf.booleanToTerraform(this._tlsskipVerify),
      type: cdktf.numberToTerraform(this._type),
      variables: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._variables),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compose_file_path: {
        value: cdktf.stringToHclTerraform(this._composeFilePath),
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
      edge_template: {
        value: cdktf.booleanToHclTerraform(this._edgeTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_content: {
        value: cdktf.stringToHclTerraform(this._fileContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_path: {
        value: cdktf.stringToHclTerraform(this._filePath),
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
      is_compose_format: {
        value: cdktf.booleanToHclTerraform(this._isComposeFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logo: {
        value: cdktf.stringToHclTerraform(this._logo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.numberToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      repository_authentication: {
        value: cdktf.booleanToHclTerraform(this._repositoryAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository_password: {
        value: cdktf.stringToHclTerraform(this._repositoryPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_reference: {
        value: cdktf.stringToHclTerraform(this._repositoryReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_url: {
        value: cdktf.stringToHclTerraform(this._repositoryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_username: {
        value: cdktf.stringToHclTerraform(this._repositoryUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tlsskip_verify: {
        value: cdktf.booleanToHclTerraform(this._tlsskipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      variables: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._variables),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
