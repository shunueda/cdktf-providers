// https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry#authentication Registry#authentication}
  */
  readonly authentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry#aws_region Registry#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry#base_url Registry#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry#github_organisation_name Registry#github_organisation_name}
  */
  readonly githubOrganisationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry#github_use_organisation Registry#github_use_organisation}
  */
  readonly githubUseOrganisation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry#id Registry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry#instance_url Registry#instance_url}
  */
  readonly instanceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry#name Registry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry#password Registry#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry#quay_organisation_name Registry#quay_organisation_name}
  */
  readonly quayOrganisationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry#quay_use_organisation Registry#quay_use_organisation}
  */
  readonly quayUseOrganisation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry#type Registry#type}
  */
  readonly type: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry#url Registry#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry#username Registry#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry portainer_registry}
*/
export class Registry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Registry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Registry to import
  * @param importFromId The id of the existing Registry that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Registry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/registry portainer_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistryConfig
  */
  public constructor(scope: Construct, id: string, config: RegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_registry',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authentication = config.authentication;
    this._awsRegion = config.awsRegion;
    this._baseUrl = config.baseUrl;
    this._githubOrganisationName = config.githubOrganisationName;
    this._githubUseOrganisation = config.githubUseOrganisation;
    this._id = config.id;
    this._instanceUrl = config.instanceUrl;
    this._name = config.name;
    this._password = config.password;
    this._quayOrganisationName = config.quayOrganisationName;
    this._quayUseOrganisation = config.quayUseOrganisation;
    this._type = config.type;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: false, optional: true, required: false
  private _authentication?: boolean | cdktf.IResolvable; 
  public get authentication() {
    return this.getBooleanAttribute('authentication');
  }
  public set authentication(value: boolean | cdktf.IResolvable) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // github_organisation_name - computed: false, optional: true, required: false
  private _githubOrganisationName?: string; 
  public get githubOrganisationName() {
    return this.getStringAttribute('github_organisation_name');
  }
  public set githubOrganisationName(value: string) {
    this._githubOrganisationName = value;
  }
  public resetGithubOrganisationName() {
    this._githubOrganisationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOrganisationNameInput() {
    return this._githubOrganisationName;
  }

  // github_use_organisation - computed: false, optional: true, required: false
  private _githubUseOrganisation?: boolean | cdktf.IResolvable; 
  public get githubUseOrganisation() {
    return this.getBooleanAttribute('github_use_organisation');
  }
  public set githubUseOrganisation(value: boolean | cdktf.IResolvable) {
    this._githubUseOrganisation = value;
  }
  public resetGithubUseOrganisation() {
    this._githubUseOrganisation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubUseOrganisationInput() {
    return this._githubUseOrganisation;
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

  // instance_url - computed: false, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // quay_organisation_name - computed: false, optional: true, required: false
  private _quayOrganisationName?: string; 
  public get quayOrganisationName() {
    return this.getStringAttribute('quay_organisation_name');
  }
  public set quayOrganisationName(value: string) {
    this._quayOrganisationName = value;
  }
  public resetQuayOrganisationName() {
    this._quayOrganisationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quayOrganisationNameInput() {
    return this._quayOrganisationName;
  }

  // quay_use_organisation - computed: false, optional: true, required: false
  private _quayUseOrganisation?: boolean | cdktf.IResolvable; 
  public get quayUseOrganisation() {
    return this.getBooleanAttribute('quay_use_organisation');
  }
  public set quayUseOrganisation(value: boolean | cdktf.IResolvable) {
    this._quayUseOrganisation = value;
  }
  public resetQuayUseOrganisation() {
    this._quayUseOrganisation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quayUseOrganisationInput() {
    return this._quayUseOrganisation;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: cdktf.booleanToTerraform(this._authentication),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      github_organisation_name: cdktf.stringToTerraform(this._githubOrganisationName),
      github_use_organisation: cdktf.booleanToTerraform(this._githubUseOrganisation),
      id: cdktf.stringToTerraform(this._id),
      instance_url: cdktf.stringToTerraform(this._instanceUrl),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      quay_organisation_name: cdktf.stringToTerraform(this._quayOrganisationName),
      quay_use_organisation: cdktf.booleanToTerraform(this._quayUseOrganisation),
      type: cdktf.numberToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: cdktf.booleanToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      github_organisation_name: {
        value: cdktf.stringToHclTerraform(this._githubOrganisationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      github_use_organisation: {
        value: cdktf.booleanToHclTerraform(this._githubUseOrganisation),
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
      instance_url: {
        value: cdktf.stringToHclTerraform(this._instanceUrl),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quay_organisation_name: {
        value: cdktf.stringToHclTerraform(this._quayOrganisationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quay_use_organisation: {
        value: cdktf.booleanToHclTerraform(this._quayUseOrganisation),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
