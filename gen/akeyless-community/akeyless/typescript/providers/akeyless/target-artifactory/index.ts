// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_artifactory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetArtifactoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Admin name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_artifactory#artifactory_admin_name TargetArtifactory#artifactory_admin_name}
  */
  readonly artifactoryAdminName: string;
  /**
  * Admin API Key/Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_artifactory#artifactory_admin_pwd TargetArtifactory#artifactory_admin_pwd}
  */
  readonly artifactoryAdminPwd: string;
  /**
  * Artifactory REST URL, must end with artifactory postfix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_artifactory#base_url TargetArtifactory#base_url}
  */
  readonly baseUrl: string;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_artifactory#description TargetArtifactory#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_artifactory#id TargetArtifactory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_artifactory#key TargetArtifactory#key}
  */
  readonly key?: string;
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_artifactory#name TargetArtifactory#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_artifactory akeyless_target_artifactory}
*/
export class TargetArtifactory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_target_artifactory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetArtifactory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetArtifactory to import
  * @param importFromId The id of the existing TargetArtifactory that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_artifactory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetArtifactory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_target_artifactory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_artifactory akeyless_target_artifactory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetArtifactoryConfig
  */
  public constructor(scope: Construct, id: string, config: TargetArtifactoryConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_target_artifactory',
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
    this._baseUrl = config.baseUrl;
    this._description = config.description;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifactory_admin_name - computed: false, optional: false, required: true
  private _artifactoryAdminName?: string; 
  public get artifactoryAdminName() {
    return this.getStringAttribute('artifactory_admin_name');
  }
  public set artifactoryAdminName(value: string) {
    this._artifactoryAdminName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactoryAdminNameInput() {
    return this._artifactoryAdminName;
  }

  // artifactory_admin_pwd - computed: false, optional: false, required: true
  private _artifactoryAdminPwd?: string; 
  public get artifactoryAdminPwd() {
    return this.getStringAttribute('artifactory_admin_pwd');
  }
  public set artifactoryAdminPwd(value: string) {
    this._artifactoryAdminPwd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactoryAdminPwdInput() {
    return this._artifactoryAdminPwd;
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
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
      artifactory_admin_name: cdktf.stringToTerraform(this._artifactoryAdminName),
      artifactory_admin_pwd: cdktf.stringToTerraform(this._artifactoryAdminPwd),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
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
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
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
