// https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Nobl9ProviderConfig {
  /**
  * The [Client ID](https://docs.nobl9.com/sloctl-user-guide/#configuration) of your Nobl9 account required to connect to Nobl9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs#client_id Nobl9Provider#client_id}
  */
  readonly clientId?: string;
  /**
  * The [Client Secret](https://docs.nobl9.com/sloctl-user-guide/#configuration) of your Nobl9 account required to connect to Nobl9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs#client_secret Nobl9Provider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Nobl9 API URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs#ingest_url Nobl9Provider#ingest_url}
  */
  readonly ingestUrl?: string;
  /**
  * Disable reading configuration from file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs#no_config_file Nobl9Provider#no_config_file}
  */
  readonly noConfigFile?: boolean | cdktf.IResolvable;
  /**
  * Authorization service configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs#okta_auth_server Nobl9Provider#okta_auth_server}
  */
  readonly oktaAuthServer?: string;
  /**
  * Authorization service URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs#okta_org_url Nobl9Provider#okta_org_url}
  */
  readonly oktaOrgUrl?: string;
  /**
  * Nobl9 Organization ID that contains resources managed by the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs#organization Nobl9Provider#organization}
  */
  readonly organization?: string;
  /**
  * Nobl9 project used when importing resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs#project Nobl9Provider#project}
  */
  readonly project?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs#alias Nobl9Provider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs nobl9}
*/
export class Nobl9Provider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nobl9";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nobl9Provider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nobl9Provider to import
  * @param importFromId The id of the existing Nobl9Provider that should be imported. Refer to the {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nobl9Provider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nobl9", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs nobl9} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Nobl9ProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Nobl9ProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nobl9',
      terraformGeneratorMetadata: {
        providerName: 'nobl9',
        providerVersion: '0.44.1',
        providerVersionConstraint: '0.44.1'
      },
      terraformProviderSource: 'nobl9/nobl9'
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._ingestUrl = config.ingestUrl;
    this._noConfigFile = config.noConfigFile;
    this._oktaAuthServer = config.oktaAuthServer;
    this._oktaOrgUrl = config.oktaOrgUrl;
    this._organization = config.organization;
    this._project = config.project;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // ingest_url - computed: false, optional: true, required: false
  private _ingestUrl?: string; 
  public get ingestUrl() {
    return this._ingestUrl;
  }
  public set ingestUrl(value: string | undefined) {
    this._ingestUrl = value;
  }
  public resetIngestUrl() {
    this._ingestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestUrlInput() {
    return this._ingestUrl;
  }

  // no_config_file - computed: false, optional: true, required: false
  private _noConfigFile?: boolean | cdktf.IResolvable; 
  public get noConfigFile() {
    return this._noConfigFile;
  }
  public set noConfigFile(value: boolean | cdktf.IResolvable | undefined) {
    this._noConfigFile = value;
  }
  public resetNoConfigFile() {
    this._noConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noConfigFileInput() {
    return this._noConfigFile;
  }

  // okta_auth_server - computed: false, optional: true, required: false
  private _oktaAuthServer?: string; 
  public get oktaAuthServer() {
    return this._oktaAuthServer;
  }
  public set oktaAuthServer(value: string | undefined) {
    this._oktaAuthServer = value;
  }
  public resetOktaAuthServer() {
    this._oktaAuthServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaAuthServerInput() {
    return this._oktaAuthServer;
  }

  // okta_org_url - computed: false, optional: true, required: false
  private _oktaOrgUrl?: string; 
  public get oktaOrgUrl() {
    return this._oktaOrgUrl;
  }
  public set oktaOrgUrl(value: string | undefined) {
    this._oktaOrgUrl = value;
  }
  public resetOktaOrgUrl() {
    this._oktaOrgUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaOrgUrlInput() {
    return this._oktaOrgUrl;
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

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
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
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      ingest_url: cdktf.stringToTerraform(this._ingestUrl),
      no_config_file: cdktf.booleanToTerraform(this._noConfigFile),
      okta_auth_server: cdktf.stringToTerraform(this._oktaAuthServer),
      okta_org_url: cdktf.stringToTerraform(this._oktaOrgUrl),
      organization: cdktf.stringToTerraform(this._organization),
      project: cdktf.stringToTerraform(this._project),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingest_url: {
        value: cdktf.stringToHclTerraform(this._ingestUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_config_file: {
        value: cdktf.booleanToHclTerraform(this._noConfigFile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      okta_auth_server: {
        value: cdktf.stringToHclTerraform(this._oktaAuthServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okta_org_url: {
        value: cdktf.stringToHclTerraform(this._oktaOrgUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
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
