// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_github
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetGithubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_github#description TargetGithub#description}
  */
  readonly description?: string;
  /**
  * Github application id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_github#github_app_id TargetGithub#github_app_id}
  */
  readonly githubAppId?: number;
  /**
  * Github application private key (base64 encoded key)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_github#github_app_private_key TargetGithub#github_app_private_key}
  */
  readonly githubAppPrivateKey?: string;
  /**
  * Github base url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_github#github_base_url TargetGithub#github_base_url}
  */
  readonly githubBaseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_github#id TargetGithub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key name. The key will be used to encrypt the target secret value. If key name is not specified, the account default protection key is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_github#key TargetGithub#key}
  */
  readonly key?: string;
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_github#name TargetGithub#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_github akeyless_target_github}
*/
export class TargetGithub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_target_github";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetGithub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetGithub to import
  * @param importFromId The id of the existing TargetGithub that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_github#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetGithub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_target_github", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_github akeyless_target_github} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetGithubConfig
  */
  public constructor(scope: Construct, id: string, config: TargetGithubConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_target_github',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._githubAppId = config.githubAppId;
    this._githubAppPrivateKey = config.githubAppPrivateKey;
    this._githubBaseUrl = config.githubBaseUrl;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // github_app_id - computed: false, optional: true, required: false
  private _githubAppId?: number; 
  public get githubAppId() {
    return this.getNumberAttribute('github_app_id');
  }
  public set githubAppId(value: number) {
    this._githubAppId = value;
  }
  public resetGithubAppId() {
    this._githubAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppIdInput() {
    return this._githubAppId;
  }

  // github_app_private_key - computed: false, optional: true, required: false
  private _githubAppPrivateKey?: string; 
  public get githubAppPrivateKey() {
    return this.getStringAttribute('github_app_private_key');
  }
  public set githubAppPrivateKey(value: string) {
    this._githubAppPrivateKey = value;
  }
  public resetGithubAppPrivateKey() {
    this._githubAppPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppPrivateKeyInput() {
    return this._githubAppPrivateKey;
  }

  // github_base_url - computed: false, optional: true, required: false
  private _githubBaseUrl?: string; 
  public get githubBaseUrl() {
    return this.getStringAttribute('github_base_url');
  }
  public set githubBaseUrl(value: string) {
    this._githubBaseUrl = value;
  }
  public resetGithubBaseUrl() {
    this._githubBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubBaseUrlInput() {
    return this._githubBaseUrl;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      github_app_id: cdktf.numberToTerraform(this._githubAppId),
      github_app_private_key: cdktf.stringToTerraform(this._githubAppPrivateKey),
      github_base_url: cdktf.stringToTerraform(this._githubBaseUrl),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      github_app_id: {
        value: cdktf.numberToHclTerraform(this._githubAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      github_app_private_key: {
        value: cdktf.stringToHclTerraform(this._githubAppPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      github_base_url: {
        value: cdktf.stringToHclTerraform(this._githubBaseUrl),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
