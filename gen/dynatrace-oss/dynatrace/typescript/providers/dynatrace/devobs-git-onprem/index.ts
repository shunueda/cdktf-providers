// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/devobs_git_onprem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevobsGitOnpremConfig extends cdktf.TerraformMetaArguments {
  /**
  * Possible Values: `AzureOnPrem`, `BitbucketOnPrem`, `GithubOnPrem`, `GitlabOnPrem`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/devobs_git_onprem#git_provider DevobsGitOnprem#git_provider}
  */
  readonly gitProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/devobs_git_onprem#id DevobsGitOnprem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If turned on, requests to your Gitlab server will have the `credentials` option set to `include`. Otherwise, it will be set to `omit`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/devobs_git_onprem#include_credentials DevobsGitOnprem#include_credentials}
  */
  readonly includeCredentials?: boolean | cdktf.IResolvable;
  /**
  * An HTTP/HTTPS URL of your server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/devobs_git_onprem#url DevobsGitOnprem#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/devobs_git_onprem dynatrace_devobs_git_onprem}
*/
export class DevobsGitOnprem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_devobs_git_onprem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevobsGitOnprem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevobsGitOnprem to import
  * @param importFromId The id of the existing DevobsGitOnprem that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/devobs_git_onprem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevobsGitOnprem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_devobs_git_onprem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/devobs_git_onprem dynatrace_devobs_git_onprem} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevobsGitOnpremConfig
  */
  public constructor(scope: Construct, id: string, config: DevobsGitOnpremConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_devobs_git_onprem',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gitProvider = config.gitProvider;
    this._id = config.id;
    this._includeCredentials = config.includeCredentials;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // git_provider - computed: false, optional: false, required: true
  private _gitProvider?: string; 
  public get gitProvider() {
    return this.getStringAttribute('git_provider');
  }
  public set gitProvider(value: string) {
    this._gitProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitProviderInput() {
    return this._gitProvider;
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

  // include_credentials - computed: false, optional: true, required: false
  private _includeCredentials?: boolean | cdktf.IResolvable; 
  public get includeCredentials() {
    return this.getBooleanAttribute('include_credentials');
  }
  public set includeCredentials(value: boolean | cdktf.IResolvable) {
    this._includeCredentials = value;
  }
  public resetIncludeCredentials() {
    this._includeCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCredentialsInput() {
    return this._includeCredentials;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      git_provider: cdktf.stringToTerraform(this._gitProvider),
      id: cdktf.stringToTerraform(this._id),
      include_credentials: cdktf.booleanToTerraform(this._includeCredentials),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      git_provider: {
        value: cdktf.stringToHclTerraform(this._gitProvider),
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
      include_credentials: {
        value: cdktf.booleanToHclTerraform(this._includeCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
