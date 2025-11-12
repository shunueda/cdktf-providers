// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicSecretArtifactoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Admin name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory#artifactory_admin_name DynamicSecretArtifactory#artifactory_admin_name}
  */
  readonly artifactoryAdminName?: string;
  /**
  * Admin API Key/Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory#artifactory_admin_pwd DynamicSecretArtifactory#artifactory_admin_pwd}
  */
  readonly artifactoryAdminPwd?: string;
  /**
  * A space-separate list of the other Artifactory instances or services that should accept this token., for example: jfrt@*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory#artifactory_token_audience DynamicSecretArtifactory#artifactory_token_audience}
  */
  readonly artifactoryTokenAudience: string;
  /**
  * Token scope provided as a space-separated list, for example: member-of-groups:readers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory#artifactory_token_scope DynamicSecretArtifactory#artifactory_token_scope}
  */
  readonly artifactoryTokenScope: string;
  /**
  * Artifactory REST URL, must end with artifactory postfix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory#base_url DynamicSecretArtifactory#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Customize how temporary usernames are generated using go template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory#custom_username_template DynamicSecretArtifactory#custom_username_template}
  */
  readonly customUsernameTemplate?: string;
  /**
  * Encrypt dynamic secret details with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory#encryption_key_name DynamicSecretArtifactory#encryption_key_name}
  */
  readonly encryptionKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory#id DynamicSecretArtifactory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Dynamic Secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory#name DynamicSecretArtifactory#name}
  */
  readonly name: string;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory#tags DynamicSecretArtifactory#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in dynamic secret creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory#target_name DynamicSecretArtifactory#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory#user_ttl DynamicSecretArtifactory#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory akeyless_dynamic_secret_artifactory}
*/
export class DynamicSecretArtifactory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_dynamic_secret_artifactory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicSecretArtifactory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicSecretArtifactory to import
  * @param importFromId The id of the existing DynamicSecretArtifactory that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicSecretArtifactory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_dynamic_secret_artifactory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_artifactory akeyless_dynamic_secret_artifactory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicSecretArtifactoryConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicSecretArtifactoryConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_dynamic_secret_artifactory',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._artifactoryAdminName = config.artifactoryAdminName;
    this._artifactoryAdminPwd = config.artifactoryAdminPwd;
    this._artifactoryTokenAudience = config.artifactoryTokenAudience;
    this._artifactoryTokenScope = config.artifactoryTokenScope;
    this._baseUrl = config.baseUrl;
    this._customUsernameTemplate = config.customUsernameTemplate;
    this._encryptionKeyName = config.encryptionKeyName;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._targetName = config.targetName;
    this._userTtl = config.userTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifactory_admin_name - computed: false, optional: true, required: false
  private _artifactoryAdminName?: string; 
  public get artifactoryAdminName() {
    return this.getStringAttribute('artifactory_admin_name');
  }
  public set artifactoryAdminName(value: string) {
    this._artifactoryAdminName = value;
  }
  public resetArtifactoryAdminName() {
    this._artifactoryAdminName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactoryAdminNameInput() {
    return this._artifactoryAdminName;
  }

  // artifactory_admin_pwd - computed: false, optional: true, required: false
  private _artifactoryAdminPwd?: string; 
  public get artifactoryAdminPwd() {
    return this.getStringAttribute('artifactory_admin_pwd');
  }
  public set artifactoryAdminPwd(value: string) {
    this._artifactoryAdminPwd = value;
  }
  public resetArtifactoryAdminPwd() {
    this._artifactoryAdminPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactoryAdminPwdInput() {
    return this._artifactoryAdminPwd;
  }

  // artifactory_token_audience - computed: false, optional: false, required: true
  private _artifactoryTokenAudience?: string; 
  public get artifactoryTokenAudience() {
    return this.getStringAttribute('artifactory_token_audience');
  }
  public set artifactoryTokenAudience(value: string) {
    this._artifactoryTokenAudience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactoryTokenAudienceInput() {
    return this._artifactoryTokenAudience;
  }

  // artifactory_token_scope - computed: false, optional: false, required: true
  private _artifactoryTokenScope?: string; 
  public get artifactoryTokenScope() {
    return this.getStringAttribute('artifactory_token_scope');
  }
  public set artifactoryTokenScope(value: string) {
    this._artifactoryTokenScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactoryTokenScopeInput() {
    return this._artifactoryTokenScope;
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

  // custom_username_template - computed: false, optional: true, required: false
  private _customUsernameTemplate?: string; 
  public get customUsernameTemplate() {
    return this.getStringAttribute('custom_username_template');
  }
  public set customUsernameTemplate(value: string) {
    this._customUsernameTemplate = value;
  }
  public resetCustomUsernameTemplate() {
    this._customUsernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUsernameTemplateInput() {
    return this._customUsernameTemplate;
  }

  // encryption_key_name - computed: false, optional: true, required: false
  private _encryptionKeyName?: string; 
  public get encryptionKeyName() {
    return this.getStringAttribute('encryption_key_name');
  }
  public set encryptionKeyName(value: string) {
    this._encryptionKeyName = value;
  }
  public resetEncryptionKeyName() {
    this._encryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyNameInput() {
    return this._encryptionKeyName;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // user_ttl - computed: false, optional: true, required: false
  private _userTtl?: string; 
  public get userTtl() {
    return this.getStringAttribute('user_ttl');
  }
  public set userTtl(value: string) {
    this._userTtl = value;
  }
  public resetUserTtl() {
    this._userTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTtlInput() {
    return this._userTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifactory_admin_name: cdktf.stringToTerraform(this._artifactoryAdminName),
      artifactory_admin_pwd: cdktf.stringToTerraform(this._artifactoryAdminPwd),
      artifactory_token_audience: cdktf.stringToTerraform(this._artifactoryTokenAudience),
      artifactory_token_scope: cdktf.stringToTerraform(this._artifactoryTokenScope),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      custom_username_template: cdktf.stringToTerraform(this._customUsernameTemplate),
      encryption_key_name: cdktf.stringToTerraform(this._encryptionKeyName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_name: cdktf.stringToTerraform(this._targetName),
      user_ttl: cdktf.stringToTerraform(this._userTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifactory_admin_name: {
        value: cdktf.stringToHclTerraform(this._artifactoryAdminName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifactory_admin_pwd: {
        value: cdktf.stringToHclTerraform(this._artifactoryAdminPwd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifactory_token_audience: {
        value: cdktf.stringToHclTerraform(this._artifactoryTokenAudience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifactory_token_scope: {
        value: cdktf.stringToHclTerraform(this._artifactoryTokenScope),
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
      custom_username_template: {
        value: cdktf.stringToHclTerraform(this._customUsernameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._encryptionKeyName),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ttl: {
        value: cdktf.stringToHclTerraform(this._userTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
