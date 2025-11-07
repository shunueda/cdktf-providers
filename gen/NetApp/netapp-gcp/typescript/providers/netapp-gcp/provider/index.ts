// https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetappGcpProviderConfig {
  /**
  * The credentials for GCP API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs#credentials NetappGcpProvider#credentials}
  */
  readonly credentials?: string;
  /**
  * The project number or project ID for GCP API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs#project NetappGcpProvider#project}
  */
  readonly project: string;
  /**
  * The private key path for GCP API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs#service_account NetappGcpProvider#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The token duration in minutes from service account name for GCP API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs#token_duration NetappGcpProvider#token_duration}
  */
  readonly tokenDuration?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs#alias NetappGcpProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs netapp-gcp}
*/
export class NetappGcpProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetappGcpProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetappGcpProvider to import
  * @param importFromId The id of the existing NetappGcpProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetappGcpProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs netapp-gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappGcpProviderConfig
  */
  public constructor(scope: Construct, id: string, config: NetappGcpProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-gcp',
      terraformGeneratorMetadata: {
        providerName: 'netapp-gcp',
        providerVersion: '24.6.0'
      },
      terraformProviderSource: 'NetApp/netapp-gcp'
    });
    this._credentials = config.credentials;
    this._project = config.project;
    this._serviceAccount = config.serviceAccount;
    this._tokenDuration = config.tokenDuration;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: string | undefined) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public set serviceAccount(value: string | undefined) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // token_duration - computed: false, optional: true, required: false
  private _tokenDuration?: number; 
  public get tokenDuration() {
    return this._tokenDuration;
  }
  public set tokenDuration(value: number | undefined) {
    this._tokenDuration = value;
  }
  public resetTokenDuration() {
    this._tokenDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenDurationInput() {
    return this._tokenDuration;
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
      credentials: cdktf.stringToTerraform(this._credentials),
      project: cdktf.stringToTerraform(this._project),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      token_duration: cdktf.numberToTerraform(this._tokenDuration),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
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
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_duration: {
        value: cdktf.numberToHclTerraform(this._tokenDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
