// https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/gitlab_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GitlabIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * API host URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/gitlab_integration#api_host GitlabIntegration#api_host}
  */
  readonly apiHost: string;
  /**
  * Description of the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/gitlab_integration#description GitlabIntegration#description}
  */
  readonly description?: string;
  /**
  * Is the GitLab integration the default for all spaces? If set to `true` the space must be set to `root` in `space_id` or left empty which uses the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/gitlab_integration#is_default GitlabIntegration#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Labels to set on the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/gitlab_integration#labels GitlabIntegration#labels}
  */
  readonly labels?: string[];
  /**
  * The friendly name of the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/gitlab_integration#name GitlabIntegration#name}
  */
  readonly name: string;
  /**
  * The GitLab API Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/gitlab_integration#private_token GitlabIntegration#private_token}
  */
  readonly privateToken: string;
  /**
  * ID (slug) of the space the integration is in; Default: `root`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/gitlab_integration#space_id GitlabIntegration#space_id}
  */
  readonly spaceId?: string;
  /**
  * Indicates whether the integration should use git checkout. If false source code will be downloaded using the VCS API. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/gitlab_integration#use_git_checkout GitlabIntegration#use_git_checkout}
  */
  readonly useGitCheckout?: boolean | cdktf.IResolvable;
  /**
  * User facing host URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/gitlab_integration#user_facing_host GitlabIntegration#user_facing_host}
  */
  readonly userFacingHost: string;
  /**
  * VCS checks configured for GitLab repositories. Possible values: INDIVIDUAL, AGGREGATED, ALL. Defaults to INDIVIDUAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/gitlab_integration#vcs_checks GitlabIntegration#vcs_checks}
  */
  readonly vcsChecks?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/gitlab_integration spacelift_gitlab_integration}
*/
export class GitlabIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_gitlab_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GitlabIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GitlabIntegration to import
  * @param importFromId The id of the existing GitlabIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/gitlab_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GitlabIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_gitlab_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/gitlab_integration spacelift_gitlab_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GitlabIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: GitlabIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_gitlab_integration',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.42.0',
        providerVersionConstraint: '1.42.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiHost = config.apiHost;
    this._description = config.description;
    this._isDefault = config.isDefault;
    this._labels = config.labels;
    this._name = config.name;
    this._privateToken = config.privateToken;
    this._spaceId = config.spaceId;
    this._useGitCheckout = config.useGitCheckout;
    this._userFacingHost = config.userFacingHost;
    this._vcsChecks = config.vcsChecks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // labels - computed: false, optional: true, required: false
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

  // private_token - computed: false, optional: false, required: true
  private _privateToken?: string; 
  public get privateToken() {
    return this.getStringAttribute('private_token');
  }
  public set privateToken(value: string) {
    this._privateToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateTokenInput() {
    return this._privateToken;
  }

  // space_id - computed: false, optional: true, required: false
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
      api_host: cdktf.stringToTerraform(this._apiHost),
      description: cdktf.stringToTerraform(this._description),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      private_token: cdktf.stringToTerraform(this._privateToken),
      space_id: cdktf.stringToTerraform(this._spaceId),
      use_git_checkout: cdktf.booleanToTerraform(this._useGitCheckout),
      user_facing_host: cdktf.stringToTerraform(this._userFacingHost),
      vcs_checks: cdktf.stringToTerraform(this._vcsChecks),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      private_token: {
        value: cdktf.stringToHclTerraform(this._privateToken),
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
