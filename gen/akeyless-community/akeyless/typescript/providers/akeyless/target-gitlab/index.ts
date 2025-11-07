// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gitlab
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetGitlabConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gitlab#description TargetGitlab#description}
  */
  readonly description?: string;
  /**
  * Gitlab access token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gitlab#gitlab_access_token TargetGitlab#gitlab_access_token}
  */
  readonly gitlabAccessToken?: string;
  /**
  * Gitlab tls certificate (base64 encoded)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gitlab#gitlab_certificate TargetGitlab#gitlab_certificate}
  */
  readonly gitlabCertificate?: string;
  /**
  * Gitlab base url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gitlab#gitlab_url TargetGitlab#gitlab_url}
  */
  readonly gitlabUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gitlab#id TargetGitlab#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key name. The key will be used to encrypt the target secret value. If key name is not specified, the account default protection key is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gitlab#key TargetGitlab#key}
  */
  readonly key?: string;
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gitlab#name TargetGitlab#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gitlab akeyless_target_gitlab}
*/
export class TargetGitlab extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_target_gitlab";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetGitlab resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetGitlab to import
  * @param importFromId The id of the existing TargetGitlab that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gitlab#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetGitlab to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_target_gitlab", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gitlab akeyless_target_gitlab} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetGitlabConfig
  */
  public constructor(scope: Construct, id: string, config: TargetGitlabConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_target_gitlab',
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
    this._gitlabAccessToken = config.gitlabAccessToken;
    this._gitlabCertificate = config.gitlabCertificate;
    this._gitlabUrl = config.gitlabUrl;
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

  // gitlab_access_token - computed: false, optional: true, required: false
  private _gitlabAccessToken?: string; 
  public get gitlabAccessToken() {
    return this.getStringAttribute('gitlab_access_token');
  }
  public set gitlabAccessToken(value: string) {
    this._gitlabAccessToken = value;
  }
  public resetGitlabAccessToken() {
    this._gitlabAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabAccessTokenInput() {
    return this._gitlabAccessToken;
  }

  // gitlab_certificate - computed: false, optional: true, required: false
  private _gitlabCertificate?: string; 
  public get gitlabCertificate() {
    return this.getStringAttribute('gitlab_certificate');
  }
  public set gitlabCertificate(value: string) {
    this._gitlabCertificate = value;
  }
  public resetGitlabCertificate() {
    this._gitlabCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabCertificateInput() {
    return this._gitlabCertificate;
  }

  // gitlab_url - computed: false, optional: true, required: false
  private _gitlabUrl?: string; 
  public get gitlabUrl() {
    return this.getStringAttribute('gitlab_url');
  }
  public set gitlabUrl(value: string) {
    this._gitlabUrl = value;
  }
  public resetGitlabUrl() {
    this._gitlabUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabUrlInput() {
    return this._gitlabUrl;
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
      gitlab_access_token: cdktf.stringToTerraform(this._gitlabAccessToken),
      gitlab_certificate: cdktf.stringToTerraform(this._gitlabCertificate),
      gitlab_url: cdktf.stringToTerraform(this._gitlabUrl),
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
      gitlab_access_token: {
        value: cdktf.stringToHclTerraform(this._gitlabAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gitlab_certificate: {
        value: cdktf.stringToHclTerraform(this._gitlabCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gitlab_url: {
        value: cdktf.stringToHclTerraform(this._gitlabUrl),
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
