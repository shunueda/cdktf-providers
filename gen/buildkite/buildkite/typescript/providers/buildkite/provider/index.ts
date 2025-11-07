// https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BuildkiteProviderConfig {
  /**
  * API token with GraphQL access and `write_pipelines`, `read_pipelines` and `write_suites` REST API scopes. You can generate a token from [your settings page](https://buildkite.com/user/api-access-tokens/new?description=terraform&scopes[]=write_pipelines&scopes[]=write_suites&scopes[]=read_pipelines&scopes[]=graphql). If not provided, the value is taken from the `BUILDKITE_API_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs#api_token BuildkiteProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * Enable this to archive pipelines when destroying the resource. This is opposed to completely deleting pipelines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs#archive_pipeline_on_delete BuildkiteProvider#archive_pipeline_on_delete}
  */
  readonly archivePipelineOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Base URL for the GraphQL API to use. If not provided, the value is taken from the `BUILDKITE_GRAPHQL_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs#graphql_url BuildkiteProvider#graphql_url}
  */
  readonly graphqlUrl?: string;
  /**
  * Maximum number of retry attempts for retryable HTTP requests. Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs#max_retries BuildkiteProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * The Buildkite organization slug. This can be found on the [settings](https://buildkite.com/organizations/~/settings) page. If not provided, the value is taken from the `BUILDKITE_ORGANIZATION_SLUG` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs#organization BuildkiteProvider#organization}
  */
  readonly organization?: string;
  /**
  * Base URL for the REST API to use. If not provided, the value is taken from the `BUILDKITE_REST_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs#rest_url BuildkiteProvider#rest_url}
  */
  readonly restUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs#timeouts BuildkiteProvider#timeouts}
  */
  readonly timeouts?: BuildkiteProviderTimeouts;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs#alias BuildkiteProvider#alias}
  */
  readonly alias?: string;
}
export interface BuildkiteProviderTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs#create BuildkiteProvider#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs#delete BuildkiteProvider#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs#read BuildkiteProvider#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs#update BuildkiteProvider#update}
  */
  readonly update?: string;
}

export function buildkiteProviderTimeoutsToTerraform(struct?: BuildkiteProviderTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function buildkiteProviderTimeoutsToHclTerraform(struct?: BuildkiteProviderTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs buildkite}
*/
export class BuildkiteProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BuildkiteProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BuildkiteProvider to import
  * @param importFromId The id of the existing BuildkiteProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BuildkiteProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs buildkite} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BuildkiteProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BuildkiteProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'buildkite',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.26.0'
      },
      terraformProviderSource: 'buildkite/buildkite'
    });
    this._apiToken = config.apiToken;
    this._archivePipelineOnDelete = config.archivePipelineOnDelete;
    this._graphqlUrl = config.graphqlUrl;
    this._maxRetries = config.maxRetries;
    this._organization = config.organization;
    this._restUrl = config.restUrl;
    this._timeouts = config.timeouts;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // archive_pipeline_on_delete - computed: false, optional: true, required: false
  private _archivePipelineOnDelete?: boolean | cdktf.IResolvable; 
  public get archivePipelineOnDelete() {
    return this._archivePipelineOnDelete;
  }
  public set archivePipelineOnDelete(value: boolean | cdktf.IResolvable | undefined) {
    this._archivePipelineOnDelete = value;
  }
  public resetArchivePipelineOnDelete() {
    this._archivePipelineOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivePipelineOnDeleteInput() {
    return this._archivePipelineOnDelete;
  }

  // graphql_url - computed: false, optional: true, required: false
  private _graphqlUrl?: string; 
  public get graphqlUrl() {
    return this._graphqlUrl;
  }
  public set graphqlUrl(value: string | undefined) {
    this._graphqlUrl = value;
  }
  public resetGraphqlUrl() {
    this._graphqlUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlUrlInput() {
    return this._graphqlUrl;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this._organization;
  }
  public set organization(value: string | undefined) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // rest_url - computed: false, optional: true, required: false
  private _restUrl?: string; 
  public get restUrl() {
    return this._restUrl;
  }
  public set restUrl(value: string | undefined) {
    this._restUrl = value;
  }
  public resetRestUrl() {
    this._restUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restUrlInput() {
    return this._restUrl;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BuildkiteProviderTimeouts; 
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BuildkiteProviderTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts;
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
      api_token: cdktf.stringToTerraform(this._apiToken),
      archive_pipeline_on_delete: cdktf.booleanToTerraform(this._archivePipelineOnDelete),
      graphql_url: cdktf.stringToTerraform(this._graphqlUrl),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      organization: cdktf.stringToTerraform(this._organization),
      rest_url: cdktf.stringToTerraform(this._restUrl),
      timeouts: buildkiteProviderTimeoutsToTerraform(this._timeouts),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      archive_pipeline_on_delete: {
        value: cdktf.booleanToHclTerraform(this._archivePipelineOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      graphql_url: {
        value: cdktf.stringToHclTerraform(this._graphqlUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_url: {
        value: cdktf.stringToHclTerraform(this._restUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: buildkiteProviderTimeoutsToHclTerraform(this._timeouts),
        isBlock: true,
        type: "struct",
        storageClassType: "BuildkiteProviderTimeouts",
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
