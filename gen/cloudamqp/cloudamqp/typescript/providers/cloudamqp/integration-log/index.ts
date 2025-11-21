// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS access key identifier. (Cloudwatch)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#access_key_id IntegrationLog#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * The API key for the integration service. (Datadog)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#api_key IntegrationLog#api_key}
  */
  readonly apiKey?: string;
  /**
  * The name of the application. (Azure Monitor)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#application IntegrationLog#application}
  */
  readonly application?: string;
  /**
  * The application ID. (Azure Monitor)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#application_id IntegrationLog#application_id}
  */
  readonly applicationId?: string;
  /**
  * The application secret. (Azure Monitor)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#application_secret IntegrationLog#application_secret}
  */
  readonly applicationSecret?: string;
  /**
  * The client email. (Stackdriver)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#client_email IntegrationLog#client_email}
  */
  readonly clientEmail?: string;
  /**
  * Base64Encoded credentials. (Stackdriver)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#credentials IntegrationLog#credentials}
  */
  readonly credentials?: string;
  /**
  * The DCE URI. (Coralogix)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#dce_uri IntegrationLog#dce_uri}
  */
  readonly dceUri?: string;
  /**
  * The DCR ID. (Coralogix)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#dcr_id IntegrationLog#dcr_id}
  */
  readonly dcrId?: string;
  /**
  * The syslog destination to send the logs to. (Papertrail)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#endpoint IntegrationLog#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The host information. (Scalyr)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#host IntegrationLog#host}
  */
  readonly host?: string;
  /**
  * Destination to send the logs. (Splunk)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#host_port IntegrationLog#host_port}
  */
  readonly hostPort?: string;
  /**
  * Instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#instance_id IntegrationLog#instance_id}
  */
  readonly instanceId: number;
  /**
  * The name of log integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#name IntegrationLog#name}
  */
  readonly name: string;
  /**
  * The private API key used for authentication. (Stackdriver, Coralogix)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#private_key IntegrationLog#private_key}
  */
  readonly privateKey?: string;
  /**
  * Private key identifier. (Stackdriver)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#private_key_id IntegrationLog#private_key_id}
  */
  readonly privateKeyId?: string;
  /**
  * The project ID for the integration service. (Stackdriver)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#project_id IntegrationLog#project_id}
  */
  readonly projectId?: string;
  /**
  * The region hosting integration service. (Cloudwatch, Datadog)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#region IntegrationLog#region}
  */
  readonly region?: string;
  /**
  * The number of days to retain logs. (Cloudwatch)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#retention IntegrationLog#retention}
  */
  readonly retention?: number;
  /**
  * AWS secret access key. (Cloudwatch)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#secret_access_key IntegrationLog#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * Assign source type to the data exported, eg. generic_single_line. (Splunk)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#sourcetype IntegrationLog#sourcetype}
  */
  readonly sourcetype?: string;
  /**
  * The name of the subsystem. (Azure Monitor)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#subsystem IntegrationLog#subsystem}
  */
  readonly subsystem?: string;
  /**
  * The table name to send the logs to. (Azure Monitor)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#table IntegrationLog#table}
  */
  readonly table?: string;
  /**
  * Optional tags. E.g. env=prod,region=europe. (Cloudwatch, Datadog)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#tags IntegrationLog#tags}
  */
  readonly tags?: string;
  /**
  * The tenant ID. (Azure Monitor)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#tenant_id IntegrationLog#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * The token used for authentication. (Loggly, Logentries, Splunk, Scalyr)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#token IntegrationLog#token}
  */
  readonly token?: string;
  /**
  * The URL to push the logs to. (Papertrail)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#url IntegrationLog#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log cloudamqp_integration_log}
*/
export class IntegrationLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_integration_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationLog to import
  * @param importFromId The id of the existing IntegrationLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_integration_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/integration_log cloudamqp_integration_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationLogConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationLogConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_integration_log',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.38.3',
        providerVersionConstraint: '1.38.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKeyId = config.accessKeyId;
    this._apiKey = config.apiKey;
    this._application = config.application;
    this._applicationId = config.applicationId;
    this._applicationSecret = config.applicationSecret;
    this._clientEmail = config.clientEmail;
    this._credentials = config.credentials;
    this._dceUri = config.dceUri;
    this._dcrId = config.dcrId;
    this._endpoint = config.endpoint;
    this._host = config.host;
    this._hostPort = config.hostPort;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._privateKeyId = config.privateKeyId;
    this._projectId = config.projectId;
    this._region = config.region;
    this._retention = config.retention;
    this._secretAccessKey = config.secretAccessKey;
    this._sourcetype = config.sourcetype;
    this._subsystem = config.subsystem;
    this._table = config.table;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._token = config.token;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // application_secret - computed: false, optional: true, required: false
  private _applicationSecret?: string; 
  public get applicationSecret() {
    return this.getStringAttribute('application_secret');
  }
  public set applicationSecret(value: string) {
    this._applicationSecret = value;
  }
  public resetApplicationSecret() {
    this._applicationSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecretInput() {
    return this._applicationSecret;
  }

  // client_email - computed: true, optional: true, required: false
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  public resetClientEmail() {
    this._clientEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // dce_uri - computed: false, optional: true, required: false
  private _dceUri?: string; 
  public get dceUri() {
    return this.getStringAttribute('dce_uri');
  }
  public set dceUri(value: string) {
    this._dceUri = value;
  }
  public resetDceUri() {
    this._dceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dceUriInput() {
    return this._dceUri;
  }

  // dcr_id - computed: false, optional: true, required: false
  private _dcrId?: string; 
  public get dcrId() {
    return this.getStringAttribute('dcr_id');
  }
  public set dcrId(value: string) {
    this._dcrId = value;
  }
  public resetDcrId() {
    this._dcrId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcrIdInput() {
    return this._dcrId;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host_port - computed: false, optional: true, required: false
  private _hostPort?: string; 
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }
  public set hostPort(value: string) {
    this._hostPort = value;
  }
  public resetHostPort() {
    this._hostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_id - computed: true, optional: true, required: false
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  public resetPrivateKeyId() {
    this._privateKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // sourcetype - computed: false, optional: true, required: false
  private _sourcetype?: string; 
  public get sourcetype() {
    return this.getStringAttribute('sourcetype');
  }
  public set sourcetype(value: string) {
    this._sourcetype = value;
  }
  public resetSourcetype() {
    this._sourcetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcetypeInput() {
    return this._sourcetype;
  }

  // subsystem - computed: false, optional: true, required: false
  private _subsystem?: string; 
  public get subsystem() {
    return this.getStringAttribute('subsystem');
  }
  public set subsystem(value: string) {
    this._subsystem = value;
  }
  public resetSubsystem() {
    this._subsystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemInput() {
    return this._subsystem;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
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
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      api_key: cdktf.stringToTerraform(this._apiKey),
      application: cdktf.stringToTerraform(this._application),
      application_id: cdktf.stringToTerraform(this._applicationId),
      application_secret: cdktf.stringToTerraform(this._applicationSecret),
      client_email: cdktf.stringToTerraform(this._clientEmail),
      credentials: cdktf.stringToTerraform(this._credentials),
      dce_uri: cdktf.stringToTerraform(this._dceUri),
      dcr_id: cdktf.stringToTerraform(this._dcrId),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      host: cdktf.stringToTerraform(this._host),
      host_port: cdktf.stringToTerraform(this._hostPort),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_id: cdktf.stringToTerraform(this._privateKeyId),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      retention: cdktf.numberToTerraform(this._retention),
      secret_access_key: cdktf.stringToTerraform(this._secretAccessKey),
      sourcetype: cdktf.stringToTerraform(this._sourcetype),
      subsystem: cdktf.stringToTerraform(this._subsystem),
      table: cdktf.stringToTerraform(this._table),
      tags: cdktf.stringToTerraform(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_id: {
        value: cdktf.stringToHclTerraform(this._accessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_secret: {
        value: cdktf.stringToHclTerraform(this._applicationSecret),
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
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dce_uri: {
        value: cdktf.stringToHclTerraform(this._dceUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dcr_id: {
        value: cdktf.stringToHclTerraform(this._dcrId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_port: {
        value: cdktf.stringToHclTerraform(this._hostPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention: {
        value: cdktf.numberToHclTerraform(this._retention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_access_key: {
        value: cdktf.stringToHclTerraform(this._secretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sourcetype: {
        value: cdktf.stringToHclTerraform(this._sourcetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subsystem: {
        value: cdktf.stringToHclTerraform(this._subsystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table: {
        value: cdktf.stringToHclTerraform(this._table),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
