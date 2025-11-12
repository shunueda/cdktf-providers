// https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/module
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEnv0ModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * the client key used for integration with Bitbucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/module#bitbucket_client_key DataEnv0Module#bitbucket_client_key}
  */
  readonly bitbucketClientKey?: string;
  /**
  * the env0 application installation id on the relevant github repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/module#github_installation_id DataEnv0Module#github_installation_id}
  */
  readonly githubInstallationId?: number;
  /**
  * id of the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/module#id DataEnv0Module#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * true if this module integrates with azure dev ops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/module#is_azure_devops DataEnv0Module#is_azure_devops}
  */
  readonly isAzureDevops?: boolean | cdktf.IResolvable;
  /**
  * the name of the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/module#module_name DataEnv0Module#module_name}
  */
  readonly moduleName?: string;
  /**
  * the token id used for integration with GitLab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/module#token_id DataEnv0Module#token_id}
  */
  readonly tokenId?: string;
  /**
  * the token name used for integration with GitLab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/module#token_name DataEnv0Module#token_name}
  */
  readonly tokenName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/module env0_module}
*/
export class DataEnv0Module extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_module";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEnv0Module resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEnv0Module to import
  * @param importFromId The id of the existing DataEnv0Module that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/module#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEnv0Module to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_module", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/module env0_module} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEnv0ModuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEnv0ModuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'env0_module',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.6',
        providerVersionConstraint: '1.29.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bitbucketClientKey = config.bitbucketClientKey;
    this._githubInstallationId = config.githubInstallationId;
    this._id = config.id;
    this._isAzureDevops = config.isAzureDevops;
    this._moduleName = config.moduleName;
    this._tokenId = config.tokenId;
    this._tokenName = config.tokenName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bitbucket_client_key - computed: true, optional: true, required: false
  private _bitbucketClientKey?: string; 
  public get bitbucketClientKey() {
    return this.getStringAttribute('bitbucket_client_key');
  }
  public set bitbucketClientKey(value: string) {
    this._bitbucketClientKey = value;
  }
  public resetBitbucketClientKey() {
    this._bitbucketClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketClientKeyInput() {
    return this._bitbucketClientKey;
  }

  // github_installation_id - computed: true, optional: true, required: false
  private _githubInstallationId?: number; 
  public get githubInstallationId() {
    return this.getNumberAttribute('github_installation_id');
  }
  public set githubInstallationId(value: number) {
    this._githubInstallationId = value;
  }
  public resetGithubInstallationId() {
    this._githubInstallationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInstallationIdInput() {
    return this._githubInstallationId;
  }

  // id - computed: false, optional: true, required: false
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

  // is_azure_devops - computed: true, optional: true, required: false
  private _isAzureDevops?: boolean | cdktf.IResolvable; 
  public get isAzureDevops() {
    return this.getBooleanAttribute('is_azure_devops');
  }
  public set isAzureDevops(value: boolean | cdktf.IResolvable) {
    this._isAzureDevops = value;
  }
  public resetIsAzureDevops() {
    this._isAzureDevops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAzureDevopsInput() {
    return this._isAzureDevops;
  }

  // module_name - computed: false, optional: true, required: false
  private _moduleName?: string; 
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
  public set moduleName(value: string) {
    this._moduleName = value;
  }
  public resetModuleName() {
    this._moduleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName;
  }

  // module_provider - computed: true, optional: false, required: false
  public get moduleProvider() {
    return this.getStringAttribute('module_provider');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // token_id - computed: true, optional: true, required: false
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  public resetTokenId() {
    this._tokenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }

  // token_name - computed: true, optional: true, required: false
  private _tokenName?: string; 
  public get tokenName() {
    return this.getStringAttribute('token_name');
  }
  public set tokenName(value: string) {
    this._tokenName = value;
  }
  public resetTokenName() {
    this._tokenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameInput() {
    return this._tokenName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bitbucket_client_key: cdktf.stringToTerraform(this._bitbucketClientKey),
      github_installation_id: cdktf.numberToTerraform(this._githubInstallationId),
      id: cdktf.stringToTerraform(this._id),
      is_azure_devops: cdktf.booleanToTerraform(this._isAzureDevops),
      module_name: cdktf.stringToTerraform(this._moduleName),
      token_id: cdktf.stringToTerraform(this._tokenId),
      token_name: cdktf.stringToTerraform(this._tokenName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bitbucket_client_key: {
        value: cdktf.stringToHclTerraform(this._bitbucketClientKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      github_installation_id: {
        value: cdktf.numberToHclTerraform(this._githubInstallationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_azure_devops: {
        value: cdktf.booleanToHclTerraform(this._isAzureDevops),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      module_name: {
        value: cdktf.stringToHclTerraform(this._moduleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_id: {
        value: cdktf.stringToHclTerraform(this._tokenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_name: {
        value: cdktf.stringToHclTerraform(this._tokenName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
