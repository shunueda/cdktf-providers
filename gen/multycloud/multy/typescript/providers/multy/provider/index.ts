// https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MultyProviderConfig {
  /**
  * The Multy API Key necessary to deploy Multy resources. Value can be passed through the `MULTY_API_KEY` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#api_key MultyProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Credentials for AWS Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#aws MultyProvider#aws}
  */
  readonly aws?: MultyProviderAws;
  /**
  * Credentials for Azure Cloud. See how to authenticate through Service Principal in the [Azure docs](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/service_principal_client_secret#creating-a-service-principal)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#azure MultyProvider#azure}
  */
  readonly azure?: MultyProviderAzure;
  /**
  * Credentials for Google Cloud. See how to authenticate through Service Principals in the [Google docs](https://cloud.google.com/compute/docs/authentication)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#gcp MultyProvider#gcp}
  */
  readonly gcp?: MultyProviderGcp;
  /**
  * Address of the multy server. Defaults to `api.multy.dev`. If local, it will be run without SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#server_endpoint MultyProvider#server_endpoint}
  */
  readonly serverEndpoint?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#alias MultyProvider#alias}
  */
  readonly alias?: string;
}
export interface MultyProviderAws {
  /**
  * AWS Access Key ID. Can be provided via the `AWS_ACCESS_KEY_ID` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#access_key_id MultyProvider#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * AWS Secret Access Key. Can be provided via the `AWS_SECRET_ACCESS_KEY` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#access_key_secret MultyProvider#access_key_secret}
  */
  readonly accessKeySecret?: string;
  /**
  * Optional AWS session token. Used to authenticate  Can be provided via the `AWS_SESSION_TOKEN` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#session_token MultyProvider#session_token}
  */
  readonly sessionToken?: string;
}

export function multyProviderAwsToTerraform(struct?: MultyProviderAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    access_key_secret: cdktf.stringToTerraform(struct!.accessKeySecret),
    session_token: cdktf.stringToTerraform(struct!.sessionToken),
  }
}


export function multyProviderAwsToHclTerraform(struct?: MultyProviderAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_key_secret: {
      value: cdktf.stringToHclTerraform(struct!.accessKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_token: {
      value: cdktf.stringToHclTerraform(struct!.sessionToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface MultyProviderAzure {
  /**
  * Azure Client ID Can be provided via the `ARM_CLIENT_ID` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#client_id MultyProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Azure Client Secret Can be provided via the `ARM_CLIENT_SECRET` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#client_secret MultyProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Azure Subscription ID. Can be provided via the `ARM_SUBSCRIPTION_ID` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#subscription_id MultyProvider#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Azure Tenant ID Can be provided via the `ARM_TENANT_ID` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#tenant_id MultyProvider#tenant_id}
  */
  readonly tenantId?: string;
}

export function multyProviderAzureToTerraform(struct?: MultyProviderAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function multyProviderAzureToHclTerraform(struct?: MultyProviderAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface MultyProviderGcp {
  /**
  * Either the path to or the contents of a service account key file in JSON format. Can be provided via the `GOOGLE_APPLICATION_CREDENTIALS` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#credentials MultyProvider#credentials}
  */
  readonly credentials?: string;
  /**
  * The project to manage resources in. Can be provided via the `GOOGLE_CREDENTIALS` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#project MultyProvider#project}
  */
  readonly project?: string;
}

export function multyProviderGcpToTerraform(struct?: MultyProviderGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function multyProviderGcpToHclTerraform(struct?: MultyProviderGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs multy}
*/
export class MultyProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "multy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MultyProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MultyProvider to import
  * @param importFromId The id of the existing MultyProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MultyProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "multy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs multy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MultyProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MultyProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'multy',
      terraformGeneratorMetadata: {
        providerName: 'multy',
        providerVersion: '0.0.16',
        providerVersionConstraint: '0.0.16'
      },
      terraformProviderSource: 'multycloud/multy'
    });
    this._apiKey = config.apiKey;
    this._aws = config.aws;
    this._azure = config.azure;
    this._gcp = config.gcp;
    this._serverEndpoint = config.serverEndpoint;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // aws - computed: true, optional: true, required: false
  private _aws?: MultyProviderAws; 
  public get aws() {
    return this._aws;
  }
  public set aws(value: MultyProviderAws | undefined) {
    this._aws = value;
  }
  public resetAws() {
    this._aws = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws;
  }

  // azure - computed: false, optional: true, required: false
  private _azure?: MultyProviderAzure; 
  public get azure() {
    return this._azure;
  }
  public set azure(value: MultyProviderAzure | undefined) {
    this._azure = value;
  }
  public resetAzure() {
    this._azure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp?: MultyProviderGcp; 
  public get gcp() {
    return this._gcp;
  }
  public set gcp(value: MultyProviderGcp | undefined) {
    this._gcp = value;
  }
  public resetGcp() {
    this._gcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp;
  }

  // server_endpoint - computed: false, optional: true, required: false
  private _serverEndpoint?: string; 
  public get serverEndpoint() {
    return this._serverEndpoint;
  }
  public set serverEndpoint(value: string | undefined) {
    this._serverEndpoint = value;
  }
  public resetServerEndpoint() {
    this._serverEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverEndpointInput() {
    return this._serverEndpoint;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      aws: multyProviderAwsToTerraform(this._aws),
      azure: multyProviderAzureToTerraform(this._azure),
      gcp: multyProviderGcpToTerraform(this._gcp),
      server_endpoint: cdktf.stringToTerraform(this._serverEndpoint),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws: {
        value: multyProviderAwsToHclTerraform(this._aws),
        isBlock: true,
        type: "struct",
        storageClassType: "MultyProviderAws",
      },
      azure: {
        value: multyProviderAzureToHclTerraform(this._azure),
        isBlock: true,
        type: "struct",
        storageClassType: "MultyProviderAzure",
      },
      gcp: {
        value: multyProviderGcpToHclTerraform(this._gcp),
        isBlock: true,
        type: "struct",
        storageClassType: "MultyProviderGcp",
      },
      server_endpoint: {
        value: cdktf.stringToHclTerraform(this._serverEndpoint),
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
