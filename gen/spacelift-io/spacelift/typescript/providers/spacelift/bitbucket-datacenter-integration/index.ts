// https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/bitbucket_datacenter_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BitbucketDatacenterIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * User access token from Bitbucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/bitbucket_datacenter_integration#access_token BitbucketDatacenterIntegration#access_token}
  */
  readonly accessToken: string;
  /**
  * The API host where requests will be sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/bitbucket_datacenter_integration#api_host BitbucketDatacenterIntegration#api_host}
  */
  readonly apiHost: string;
  /**
  * Bitbucket Datacenter integration description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/bitbucket_datacenter_integration#description BitbucketDatacenterIntegration#description}
  */
  readonly description?: string;
  /**
  * Bitbucket Datacenter integration is default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/bitbucket_datacenter_integration#is_default BitbucketDatacenterIntegration#is_default}
  */
  readonly isDefault: boolean | cdktf.IResolvable;
  /**
  * Bitbucket Datacenter integration labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/bitbucket_datacenter_integration#labels BitbucketDatacenterIntegration#labels}
  */
  readonly labels?: string[];
  /**
  * Bitbucket Datacenter integration name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/bitbucket_datacenter_integration#name BitbucketDatacenterIntegration#name}
  */
  readonly name: string;
  /**
  * Bitbucket Datacenter integration space id. Defaults to `root`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/bitbucket_datacenter_integration#space_id BitbucketDatacenterIntegration#space_id}
  */
  readonly spaceId?: string;
  /**
  * Indicates whether the integration should use git checkout. If false source code will be downloaded using the VCS API. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/bitbucket_datacenter_integration#use_git_checkout BitbucketDatacenterIntegration#use_git_checkout}
  */
  readonly useGitCheckout?: boolean | cdktf.IResolvable;
  /**
  * User Facing Host which will be used for all user-facing URLs displayed in the Spacelift UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/bitbucket_datacenter_integration#user_facing_host BitbucketDatacenterIntegration#user_facing_host}
  */
  readonly userFacingHost: string;
  /**
  * Username which will be used to authenticate requests for cloning repositories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/bitbucket_datacenter_integration#username BitbucketDatacenterIntegration#username}
  */
  readonly username: string;
  /**
  * VCS checks configured for Bitbucket Datacenter repositories. Possible values: INDIVIDUAL, AGGREGATED, ALL. Defaults to INDIVIDUAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/bitbucket_datacenter_integration#vcs_checks BitbucketDatacenterIntegration#vcs_checks}
  */
  readonly vcsChecks?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/bitbucket_datacenter_integration spacelift_bitbucket_datacenter_integration}
*/
export class BitbucketDatacenterIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_bitbucket_datacenter_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BitbucketDatacenterIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BitbucketDatacenterIntegration to import
  * @param importFromId The id of the existing BitbucketDatacenterIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/bitbucket_datacenter_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BitbucketDatacenterIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_bitbucket_datacenter_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/bitbucket_datacenter_integration spacelift_bitbucket_datacenter_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BitbucketDatacenterIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: BitbucketDatacenterIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_bitbucket_datacenter_integration',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.36.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessToken = config.accessToken;
    this._apiHost = config.apiHost;
    this._description = config.description;
    this._isDefault = config.isDefault;
    this._labels = config.labels;
    this._name = config.name;
    this._spaceId = config.spaceId;
    this._useGitCheckout = config.useGitCheckout;
    this._userFacingHost = config.userFacingHost;
    this._username = config.username;
    this._vcsChecks = config.vcsChecks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: false, required: true
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // api_host - computed: false, optional: false, required: true
  private _apiHost?: string; 
  public get apiHost() {
    return this.getStringAttribute('api_host');
  }
  public set apiHost(value: string) {
    this._apiHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiHostInput() {
    return this._apiHost;
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: false, optional: false, required: true
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // use_git_checkout - computed: true, optional: true, required: false
  private _useGitCheckout?: boolean | cdktf.IResolvable; 
  public get useGitCheckout() {
    return this.getBooleanAttribute('use_git_checkout');
  }
  public set useGitCheckout(value: boolean | cdktf.IResolvable) {
    this._useGitCheckout = value;
  }
  public resetUseGitCheckout() {
    this._useGitCheckout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGitCheckoutInput() {
    return this._useGitCheckout;
  }

  // user_facing_host - computed: false, optional: false, required: true
  private _userFacingHost?: string; 
  public get userFacingHost() {
    return this.getStringAttribute('user_facing_host');
  }
  public set userFacingHost(value: string) {
    this._userFacingHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userFacingHostInput() {
    return this._userFacingHost;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vcs_checks - computed: false, optional: true, required: false
  private _vcsChecks?: string; 
  public get vcsChecks() {
    return this.getStringAttribute('vcs_checks');
  }
  public set vcsChecks(value: string) {
    this._vcsChecks = value;
  }
  public resetVcsChecks() {
    this._vcsChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsChecksInput() {
    return this._vcsChecks;
  }

  // webhook_secret - computed: true, optional: false, required: false
  public get webhookSecret() {
    return this.getStringAttribute('webhook_secret');
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktf.stringToTerraform(this._accessToken),
      api_host: cdktf.stringToTerraform(this._apiHost),
      description: cdktf.stringToTerraform(this._description),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      space_id: cdktf.stringToTerraform(this._spaceId),
      use_git_checkout: cdktf.booleanToTerraform(this._useGitCheckout),
      user_facing_host: cdktf.stringToTerraform(this._userFacingHost),
      username: cdktf.stringToTerraform(this._username),
      vcs_checks: cdktf.stringToTerraform(this._vcsChecks),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_host: {
        value: cdktf.stringToHclTerraform(this._apiHost),
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
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_git_checkout: {
        value: cdktf.booleanToHclTerraform(this._useGitCheckout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_facing_host: {
        value: cdktf.stringToHclTerraform(this._userFacingHost),
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
      vcs_checks: {
        value: cdktf.stringToHclTerraform(this._vcsChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
