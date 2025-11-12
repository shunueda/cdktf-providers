// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VkcsProviderConfig {
  /**
  * The Identity authentication URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs#auth_url VkcsProvider#auth_url}
  */
  readonly authUrl?: string;
  /**
  * Cloud Containers API version to use. _note_ Only for custom VKCS deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs#cloud_containers_api_version VkcsProvider#cloud_containers_api_version}
  */
  readonly cloudContainersApiVersion?: string;
  /**
  * Password to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs#password VkcsProvider#password}
  */
  readonly password?: string;
  /**
  * The ID of Project to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs#project_id VkcsProvider#project_id}
  */
  readonly projectId?: string;
  /**
  * A region to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs#region VkcsProvider#region}
  */
  readonly region?: string;
  /**
  * The id of the domain where the user resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs#user_domain_id VkcsProvider#user_domain_id}
  */
  readonly userDomainId?: string;
  /**
  * The name of the domain where the user resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs#user_domain_name VkcsProvider#user_domain_name}
  */
  readonly userDomainName?: string;
  /**
  * User name to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs#username VkcsProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs#alias VkcsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs vkcs}
*/
export class VkcsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VkcsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VkcsProvider to import
  * @param importFromId The id of the existing VkcsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VkcsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs vkcs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VkcsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VkcsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vkcs',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      terraformProviderSource: 'vk-cs/vkcs'
    });
    this._authUrl = config.authUrl;
    this._cloudContainersApiVersion = config.cloudContainersApiVersion;
    this._password = config.password;
    this._projectId = config.projectId;
    this._region = config.region;
    this._userDomainId = config.userDomainId;
    this._userDomainName = config.userDomainName;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_url - computed: false, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this._authUrl;
  }
  public set authUrl(value: string | undefined) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // cloud_containers_api_version - computed: false, optional: true, required: false
  private _cloudContainersApiVersion?: string; 
  public get cloudContainersApiVersion() {
    return this._cloudContainersApiVersion;
  }
  public set cloudContainersApiVersion(value: string | undefined) {
    this._cloudContainersApiVersion = value;
  }
  public resetCloudContainersApiVersion() {
    this._cloudContainersApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudContainersApiVersionInput() {
    return this._cloudContainersApiVersion;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this._projectId;
  }
  public set projectId(value: string | undefined) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // user_domain_id - computed: false, optional: true, required: false
  private _userDomainId?: string; 
  public get userDomainId() {
    return this._userDomainId;
  }
  public set userDomainId(value: string | undefined) {
    this._userDomainId = value;
  }
  public resetUserDomainId() {
    this._userDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDomainIdInput() {
    return this._userDomainId;
  }

  // user_domain_name - computed: false, optional: true, required: false
  private _userDomainName?: string; 
  public get userDomainName() {
    return this._userDomainName;
  }
  public set userDomainName(value: string | undefined) {
    this._userDomainName = value;
  }
  public resetUserDomainName() {
    this._userDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDomainNameInput() {
    return this._userDomainName;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_url: cdktf.stringToTerraform(this._authUrl),
      cloud_containers_api_version: cdktf.stringToTerraform(this._cloudContainersApiVersion),
      password: cdktf.stringToTerraform(this._password),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      user_domain_id: cdktf.stringToTerraform(this._userDomainId),
      user_domain_name: cdktf.stringToTerraform(this._userDomainName),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_url: {
        value: cdktf.stringToHclTerraform(this._authUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_containers_api_version: {
        value: cdktf.stringToHclTerraform(this._cloudContainersApiVersion),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_domain_id: {
        value: cdktf.stringToHclTerraform(this._userDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_domain_name: {
        value: cdktf.stringToHclTerraform(this._userDomainName),
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
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
