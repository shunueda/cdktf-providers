// https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * The audit filter for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#audit_filter LogManagement#audit_filter}
  */
  readonly auditFilter?: string;
  /**
  * The authentication option for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#authentication_option LogManagement#authentication_option}
  */
  readonly authenticationOption?: string;
  /**
  * The CA certificate for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#ca_cert LogManagement#ca_cert}
  */
  readonly caCert?: string;
  /**
  * The client ID for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#client_id LogManagement#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#client_secret LogManagement#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The cloud provider for the log management service accepted value [public, government, china]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#cloud LogManagement#cloud}
  */
  readonly cloud?: string;
  /**
  * The credentials JSON for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#credentials_json LogManagement#credentials_json}
  */
  readonly credentialsJson?: string;
  /**
  * Enable or disable log management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#enable LogManagement#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Enable or disable alphanumeric sorting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#enable_alphanumeric_sorting LogManagement#enable_alphanumeric_sorting}
  */
  readonly enableAlphanumericSorting?: boolean | cdktf.IResolvable;
  /**
  * The external ID for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#external_id LogManagement#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#id LogManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The index for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#index LogManagement#index}
  */
  readonly index?: string;
  /**
  * The key for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#key LogManagement#key}
  */
  readonly key?: string;
  /**
  * The key ID for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#keyid LogManagement#keyid}
  */
  readonly keyid?: string;
  /**
  * The log group for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#loggroup LogManagement#loggroup}
  */
  readonly loggroup?: string;
  /**
  * The log name for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#logname LogManagement#logname}
  */
  readonly logname?: string;
  /**
  * The name of the log management configuration accepted value [CloudWatch, Splunk, Syslog, AzureLogAnalytics, ArcSight, Elasticsearch, Exabeam, Stackdriver, QRadar, Logentries, Loggly, OMS, Sumologic, WebHook]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#name LogManagement#name}
  */
  readonly name: string;
  /**
  * The network configuration for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#network LogManagement#network}
  */
  readonly network?: string;
  /**
  * The password for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#password LogManagement#password}
  */
  readonly password?: string;
  /**
  * The project ID for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#projectid LogManagement#projectid}
  */
  readonly projectid?: string;
  /**
  * The region for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#region LogManagement#region}
  */
  readonly region?: string;
  /**
  * The role ARN for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#role_arn LogManagement#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The rule for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#rule LogManagement#rule}
  */
  readonly rule?: string;
  /**
  * The source type for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#sourcetype LogManagement#sourcetype}
  */
  readonly sourcetype?: string;
  /**
  * The stream name for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#stream_name LogManagement#stream_name}
  */
  readonly streamName?: string;
  /**
  * The tenant ID for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#tenant_id LogManagement#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * The token for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#token LogManagement#token}
  */
  readonly token?: string;
  /**
  * The URL of the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#url LogManagement#url}
  */
  readonly url?: string;
  /**
  * The username for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#user LogManagement#user}
  */
  readonly user?: string;
  /**
  * Enable or disable SSL certificate verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#verify_cert LogManagement#verify_cert}
  */
  readonly verifyCert?: boolean | cdktf.IResolvable;
  /**
  * The workspace for the log management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#workspace LogManagement#workspace}
  */
  readonly workspace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management aquasec_log_management}
*/
export class LogManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_log_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogManagement to import
  * @param importFromId The id of the existing LogManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_log_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/log_management aquasec_log_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogManagementConfig
  */
  public constructor(scope: Construct, id: string, config: LogManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_log_management',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditFilter = config.auditFilter;
    this._authenticationOption = config.authenticationOption;
    this._caCert = config.caCert;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._cloud = config.cloud;
    this._credentialsJson = config.credentialsJson;
    this._enable = config.enable;
    this._enableAlphanumericSorting = config.enableAlphanumericSorting;
    this._externalId = config.externalId;
    this._id = config.id;
    this._index = config.index;
    this._key = config.key;
    this._keyid = config.keyid;
    this._loggroup = config.loggroup;
    this._logname = config.logname;
    this._name = config.name;
    this._network = config.network;
    this._password = config.password;
    this._projectid = config.projectid;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._rule = config.rule;
    this._sourcetype = config.sourcetype;
    this._streamName = config.streamName;
    this._tenantId = config.tenantId;
    this._token = config.token;
    this._url = config.url;
    this._user = config.user;
    this._verifyCert = config.verifyCert;
    this._workspace = config.workspace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_filter - computed: false, optional: true, required: false
  private _auditFilter?: string; 
  public get auditFilter() {
    return this.getStringAttribute('audit_filter');
  }
  public set auditFilter(value: string) {
    this._auditFilter = value;
  }
  public resetAuditFilter() {
    this._auditFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditFilterInput() {
    return this._auditFilter;
  }

  // authentication_option - computed: false, optional: true, required: false
  private _authenticationOption?: string; 
  public get authenticationOption() {
    return this.getStringAttribute('authentication_option');
  }
  public set authenticationOption(value: string) {
    this._authenticationOption = value;
  }
  public resetAuthenticationOption() {
    this._authenticationOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOptionInput() {
    return this._authenticationOption;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
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
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // credentials_json - computed: false, optional: true, required: false
  private _credentialsJson?: string; 
  public get credentialsJson() {
    return this.getStringAttribute('credentials_json');
  }
  public set credentialsJson(value: string) {
    this._credentialsJson = value;
  }
  public resetCredentialsJson() {
    this._credentialsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsJsonInput() {
    return this._credentialsJson;
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_alphanumeric_sorting - computed: false, optional: true, required: false
  private _enableAlphanumericSorting?: boolean | cdktf.IResolvable; 
  public get enableAlphanumericSorting() {
    return this.getBooleanAttribute('enable_alphanumeric_sorting');
  }
  public set enableAlphanumericSorting(value: boolean | cdktf.IResolvable) {
    this._enableAlphanumericSorting = value;
  }
  public resetEnableAlphanumericSorting() {
    this._enableAlphanumericSorting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAlphanumericSortingInput() {
    return this._enableAlphanumericSorting;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // index - computed: false, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // keyid - computed: false, optional: true, required: false
  private _keyid?: string; 
  public get keyid() {
    return this.getStringAttribute('keyid');
  }
  public set keyid(value: string) {
    this._keyid = value;
  }
  public resetKeyid() {
    this._keyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyidInput() {
    return this._keyid;
  }

  // loggroup - computed: false, optional: true, required: false
  private _loggroup?: string; 
  public get loggroup() {
    return this.getStringAttribute('loggroup');
  }
  public set loggroup(value: string) {
    this._loggroup = value;
  }
  public resetLoggroup() {
    this._loggroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggroupInput() {
    return this._loggroup;
  }

  // logname - computed: false, optional: true, required: false
  private _logname?: string; 
  public get logname() {
    return this.getStringAttribute('logname');
  }
  public set logname(value: string) {
    this._logname = value;
  }
  public resetLogname() {
    this._logname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lognameInput() {
    return this._logname;
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // projectid - computed: false, optional: true, required: false
  private _projectid?: string; 
  public get projectid() {
    return this.getStringAttribute('projectid');
  }
  public set projectid(value: string) {
    this._projectid = value;
  }
  public resetProjectid() {
    this._projectid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectidInput() {
    return this._projectid;
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
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

  // stream_name - computed: false, optional: true, required: false
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  public resetStreamName() {
    this._streamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // verify_cert - computed: false, optional: true, required: false
  private _verifyCert?: boolean | cdktf.IResolvable; 
  public get verifyCert() {
    return this.getBooleanAttribute('verify_cert');
  }
  public set verifyCert(value: boolean | cdktf.IResolvable) {
    this._verifyCert = value;
  }
  public resetVerifyCert() {
    this._verifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertInput() {
    return this._verifyCert;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  public resetWorkspace() {
    this._workspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_filter: cdktf.stringToTerraform(this._auditFilter),
      authentication_option: cdktf.stringToTerraform(this._authenticationOption),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      cloud: cdktf.stringToTerraform(this._cloud),
      credentials_json: cdktf.stringToTerraform(this._credentialsJson),
      enable: cdktf.booleanToTerraform(this._enable),
      enable_alphanumeric_sorting: cdktf.booleanToTerraform(this._enableAlphanumericSorting),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.stringToTerraform(this._index),
      key: cdktf.stringToTerraform(this._key),
      keyid: cdktf.stringToTerraform(this._keyid),
      loggroup: cdktf.stringToTerraform(this._loggroup),
      logname: cdktf.stringToTerraform(this._logname),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      password: cdktf.stringToTerraform(this._password),
      projectid: cdktf.stringToTerraform(this._projectid),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      rule: cdktf.stringToTerraform(this._rule),
      sourcetype: cdktf.stringToTerraform(this._sourcetype),
      stream_name: cdktf.stringToTerraform(this._streamName),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
      user: cdktf.stringToTerraform(this._user),
      verify_cert: cdktf.booleanToTerraform(this._verifyCert),
      workspace: cdktf.stringToTerraform(this._workspace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_filter: {
        value: cdktf.stringToHclTerraform(this._auditFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_option: {
        value: cdktf.stringToHclTerraform(this._authenticationOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
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
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials_json: {
        value: cdktf.stringToHclTerraform(this._credentialsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_alphanumeric_sorting: {
        value: cdktf.booleanToHclTerraform(this._enableAlphanumericSorting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      index: {
        value: cdktf.stringToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyid: {
        value: cdktf.stringToHclTerraform(this._keyid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loggroup: {
        value: cdktf.stringToHclTerraform(this._loggroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logname: {
        value: cdktf.stringToHclTerraform(this._logname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      projectid: {
        value: cdktf.stringToHclTerraform(this._projectid),
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
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
      stream_name: {
        value: cdktf.stringToHclTerraform(this._streamName),
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
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_cert: {
        value: cdktf.booleanToHclTerraform(this._verifyCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workspace: {
        value: cdktf.stringToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
