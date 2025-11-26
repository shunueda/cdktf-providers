// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigquerySemanticLayerCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auth Provider X509 Cert URL for the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#auth_provider_x509_cert_url BigquerySemanticLayerCredential#auth_provider_x509_cert_url}
  */
  readonly authProviderX509CertUrl: string;
  /**
  * Auth URI for the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#auth_uri BigquerySemanticLayerCredential#auth_uri}
  */
  readonly authUri: string;
  /**
  * Service Account email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#client_email BigquerySemanticLayerCredential#client_email}
  */
  readonly clientEmail: string;
  /**
  * Client ID of the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#client_id BigquerySemanticLayerCredential#client_id}
  */
  readonly clientId: string;
  /**
  * Client X509 Cert URL for the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#client_x509_cert_url BigquerySemanticLayerCredential#client_x509_cert_url}
  */
  readonly clientX509CertUrl: string;
  /**
  * Semantic Layer credential configuration details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#configuration BigquerySemanticLayerCredential#configuration}
  */
  readonly configuration: BigquerySemanticLayerCredentialConfiguration;
  /**
  * BigQuery credential details, but used in the context of the Semantic Layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#credential BigquerySemanticLayerCredential#credential}
  */
  readonly credential: BigquerySemanticLayerCredentialCredential;
  /**
  * Private Key for the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#private_key BigquerySemanticLayerCredential#private_key}
  */
  readonly privateKey: string;
  /**
  * Private Key ID for the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#private_key_id BigquerySemanticLayerCredential#private_key_id}
  */
  readonly privateKeyId: string;
  /**
  * Token URI for the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#token_uri BigquerySemanticLayerCredential#token_uri}
  */
  readonly tokenUri: string;
}
export interface BigquerySemanticLayerCredentialConfiguration {
  /**
  * The adapter version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#adapter_version BigquerySemanticLayerCredential#adapter_version}
  */
  readonly adapterVersion: string;
  /**
  * The name of the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#name BigquerySemanticLayerCredential#name}
  */
  readonly name: string;
  /**
  * The ID of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#project_id BigquerySemanticLayerCredential#project_id}
  */
  readonly projectId: number;
}

export function bigquerySemanticLayerCredentialConfigurationToTerraform(struct?: BigquerySemanticLayerCredentialConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adapter_version: cdktf.stringToTerraform(struct!.adapterVersion),
    name: cdktf.stringToTerraform(struct!.name),
    project_id: cdktf.numberToTerraform(struct!.projectId),
  }
}


export function bigquerySemanticLayerCredentialConfigurationToHclTerraform(struct?: BigquerySemanticLayerCredentialConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adapter_version: {
      value: cdktf.stringToHclTerraform(struct!.adapterVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.numberToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigquerySemanticLayerCredentialConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigquerySemanticLayerCredentialConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adapterVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.adapterVersion = this._adapterVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigquerySemanticLayerCredentialConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adapterVersion = undefined;
      this._name = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adapterVersion = value.adapterVersion;
      this._name = value.name;
      this._projectId = value.projectId;
    }
  }

  // adapter_version - computed: false, optional: false, required: true
  private _adapterVersion?: string; 
  public get adapterVersion() {
    return this.getStringAttribute('adapter_version');
  }
  public set adapterVersion(value: string) {
    this._adapterVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterVersionInput() {
    return this._adapterVersion;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface BigquerySemanticLayerCredentialCredential {
  /**
  * Default dataset name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#dataset BigquerySemanticLayerCredential#dataset}
  */
  readonly dataset: string;
  /**
  * Whether the BigQuery credential is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#is_active BigquerySemanticLayerCredential#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Number of threads to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#num_threads BigquerySemanticLayerCredential#num_threads}
  */
  readonly numThreads: number;
  /**
  * Project ID to create the BigQuery credential in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#project_id BigquerySemanticLayerCredential#project_id}
  */
  readonly projectId: number;
}

export function bigquerySemanticLayerCredentialCredentialToTerraform(struct?: BigquerySemanticLayerCredentialCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset: cdktf.stringToTerraform(struct!.dataset),
    is_active: cdktf.booleanToTerraform(struct!.isActive),
    num_threads: cdktf.numberToTerraform(struct!.numThreads),
    project_id: cdktf.numberToTerraform(struct!.projectId),
  }
}


export function bigquerySemanticLayerCredentialCredentialToHclTerraform(struct?: BigquerySemanticLayerCredentialCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_active: {
      value: cdktf.booleanToHclTerraform(struct!.isActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    num_threads: {
      value: cdktf.numberToHclTerraform(struct!.numThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    project_id: {
      value: cdktf.numberToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigquerySemanticLayerCredentialCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigquerySemanticLayerCredentialCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    if (this._isActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isActive = this._isActive;
    }
    if (this._numThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.numThreads = this._numThreads;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigquerySemanticLayerCredentialCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataset = undefined;
      this._isActive = undefined;
      this._numThreads = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataset = value.dataset;
      this._isActive = value.isActive;
      this._numThreads = value.numThreads;
      this._projectId = value.projectId;
    }
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // num_threads - computed: false, optional: false, required: true
  private _numThreads?: number; 
  public get numThreads() {
    return this.getNumberAttribute('num_threads');
  }
  public set numThreads(value: number) {
    this._numThreads = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numThreadsInput() {
    return this._numThreads;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential dbtcloud_bigquery_semantic_layer_credential}
*/
export class BigquerySemanticLayerCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_bigquery_semantic_layer_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BigquerySemanticLayerCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigquerySemanticLayerCredential to import
  * @param importFromId The id of the existing BigquerySemanticLayerCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigquerySemanticLayerCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_bigquery_semantic_layer_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/bigquery_semantic_layer_credential dbtcloud_bigquery_semantic_layer_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigquerySemanticLayerCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: BigquerySemanticLayerCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_bigquery_semantic_layer_credential',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authProviderX509CertUrl = config.authProviderX509CertUrl;
    this._authUri = config.authUri;
    this._clientEmail = config.clientEmail;
    this._clientId = config.clientId;
    this._clientX509CertUrl = config.clientX509CertUrl;
    this._configuration.internalValue = config.configuration;
    this._credential.internalValue = config.credential;
    this._privateKey = config.privateKey;
    this._privateKeyId = config.privateKeyId;
    this._tokenUri = config.tokenUri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_provider_x509_cert_url - computed: false, optional: false, required: true
  private _authProviderX509CertUrl?: string; 
  public get authProviderX509CertUrl() {
    return this.getStringAttribute('auth_provider_x509_cert_url');
  }
  public set authProviderX509CertUrl(value: string) {
    this._authProviderX509CertUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authProviderX509CertUrlInput() {
    return this._authProviderX509CertUrl;
  }

  // auth_uri - computed: false, optional: false, required: true
  private _authUri?: string; 
  public get authUri() {
    return this.getStringAttribute('auth_uri');
  }
  public set authUri(value: string) {
    this._authUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authUriInput() {
    return this._authUri;
  }

  // client_email - computed: false, optional: false, required: true
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_x509_cert_url - computed: false, optional: false, required: true
  private _clientX509CertUrl?: string; 
  public get clientX509CertUrl() {
    return this.getStringAttribute('client_x509_cert_url');
  }
  public set clientX509CertUrl(value: string) {
    this._clientX509CertUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientX509CertUrlInput() {
    return this._clientX509CertUrl;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new BigquerySemanticLayerCredentialConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: BigquerySemanticLayerCredentialConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // credential - computed: false, optional: false, required: true
  private _credential = new BigquerySemanticLayerCredentialCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: BigquerySemanticLayerCredentialCredential) {
    this._credential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_id - computed: false, optional: false, required: true
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
  }

  // token_uri - computed: false, optional: false, required: true
  private _tokenUri?: string; 
  public get tokenUri() {
    return this.getStringAttribute('token_uri');
  }
  public set tokenUri(value: string) {
    this._tokenUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUriInput() {
    return this._tokenUri;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_provider_x509_cert_url: cdktf.stringToTerraform(this._authProviderX509CertUrl),
      auth_uri: cdktf.stringToTerraform(this._authUri),
      client_email: cdktf.stringToTerraform(this._clientEmail),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_x509_cert_url: cdktf.stringToTerraform(this._clientX509CertUrl),
      configuration: bigquerySemanticLayerCredentialConfigurationToTerraform(this._configuration.internalValue),
      credential: bigquerySemanticLayerCredentialCredentialToTerraform(this._credential.internalValue),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_id: cdktf.stringToTerraform(this._privateKeyId),
      token_uri: cdktf.stringToTerraform(this._tokenUri),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_provider_x509_cert_url: {
        value: cdktf.stringToHclTerraform(this._authProviderX509CertUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_uri: {
        value: cdktf.stringToHclTerraform(this._authUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_email: {
        value: cdktf.stringToHclTerraform(this._clientEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_x509_cert_url: {
        value: cdktf.stringToHclTerraform(this._clientX509CertUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: bigquerySemanticLayerCredentialConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigquerySemanticLayerCredentialConfiguration",
      },
      credential: {
        value: bigquerySemanticLayerCredentialCredentialToHclTerraform(this._credential.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigquerySemanticLayerCredentialCredential",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_id: {
        value: cdktf.stringToHclTerraform(this._privateKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_uri: {
        value: cdktf.stringToHclTerraform(this._tokenUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
